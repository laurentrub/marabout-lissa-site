import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3.22.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Validation schema for booking data
const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name too short").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email").max(255, "Email too long"),
  phone: z.string().trim().min(10, "Phone too short").max(20, "Phone too long"),
  serviceType: z.enum([
    "voyance", "sentimentale", "retour_affectif",
    "nettoyage", "spirituelle", "decouverte", "urgente"
  ]),
  bookingDate: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Invalid date format"),
  bookingTime: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format"),
  message: z.string().max(1000, "Message too long").optional().nullable(),
});

type BookingNotificationRequest = z.infer<typeof bookingSchema>;

// Rate limiting constants
const MAX_BOOKINGS_PER_EMAIL_HOUR = 3;

const serviceLabels: Record<string, string> = {
  voyance: "Consultation de voyance personnalisée",
  sentimentale: "Consultation sentimentale (amour & relations)",
  retour_affectif: "Retour affectif – analyse et accompagnement",
  nettoyage: "Nettoyage énergétique et protection",
  spirituelle: "Consultation spirituelle générale",
  decouverte: "Première consultation – découverte",
  urgente: "Consultation urgente",
};

// HTML escape function to prevent XSS in emails
const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
};

// Sanitize input for email content
const sanitizeForEmail = (input: string): string => {
  return input
    .replace(/[\r\n]/g, ' ')  // Remove newlines to prevent header injection
    .replace(/[<>]/g, '')      // Remove angle brackets
    .trim();
};

Deno.serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    
    // Validate input with zod
    const parseResult = bookingSchema.safeParse(rawData);
    
    if (!parseResult.success) {
      console.error("[SECURE LOG] Validation error:", parseResult.error.errors);
      return new Response(
        JSON.stringify({ error: "Données de réservation invalides" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
    
    const booking = parseResult.data;
    console.log("Received booking notification request for:", booking.email);

    // Initialize Supabase admin client for verification
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // SECURITY: Verify that a matching booking actually exists in the database
    // This prevents abuse by ensuring emails are only sent for legitimate bookings
    // Convert DD/MM/YYYY to YYYY-MM-DD for database query
    const dateParts = booking.bookingDate.split('/');
    const dbDateStr = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    
    const { data: matchingBooking, error: verifyError } = await supabaseAdmin
      .from('bookings')
      .select('id', { count: 'exact', head: false })
      .eq('email', booking.email)
      .eq('booking_date', dbDateStr)
      .eq('booking_time', booking.bookingTime)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (verifyError) {
      console.error("[SECURE LOG] Booking verification error:", verifyError);
      return new Response(
        JSON.stringify({ error: "Impossible de vérifier la réservation" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!matchingBooking) {
      console.warn("[SECURE LOG] No matching booking found for notification request:", {
        email: booking.email,
        date: dbDateStr,
        time: booking.bookingTime,
        timestamp: new Date().toISOString()
      });
      return new Response(
        JSON.stringify({ error: "Aucune réservation correspondante trouvée" }),
        { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Booking verified, ID:", matchingBooking.id);

    // Rate limiting check
    const oneHourAgo = new Date(Date.now() - 3600000).toISOString();
    const { count: emailCount, error: countError } = await supabaseAdmin
      .from('bookings')
      .select('*', { count: 'exact', head: true })
      .eq('email', booking.email)
      .gte('created_at', oneHourAgo);

    if (countError) {
      console.error("[SECURE LOG] Rate limit check error:", countError);
    } else if (emailCount && emailCount >= MAX_BOOKINGS_PER_EMAIL_HOUR) {
      console.warn("[SECURE LOG] Rate limit exceeded for:", booking.email);
      return new Response(
        JSON.stringify({ 
          error: "Limite de réservations atteinte. Vous pouvez effectuer maximum 3 réservations par heure." 
        }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpPort = parseInt(Deno.env.get("SMTP_PORT") || "465");
    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPassword = Deno.env.get("SMTP_PASSWORD");
    const fromEmail = Deno.env.get("SMTP_FROM_EMAIL");

    if (!smtpHost || !smtpUser || !smtpPassword || !fromEmail) {
      console.error("[SECURE LOG] SMTP configuration is incomplete");
      return new Response(
        JSON.stringify({ error: "Service d'envoi d'emails temporairement indisponible" }),
        { status: 503, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log(`Connecting to SMTP server: ${smtpHost}:${smtpPort}`);

    const client = new SMTPClient({
      connection: {
        hostname: smtpHost,
        port: smtpPort,
        tls: true,
        auth: {
          username: smtpUser,
          password: smtpPassword,
        },
      },
    });

    // Sanitize user inputs for email content
    const safeName = sanitizeForEmail(booking.name);
    const safeMessage = booking.message ? sanitizeForEmail(booking.message) : '';
    const serviceLabel = serviceLabels[booking.serviceType] || booking.serviceType;

    // Email to admin
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #8B4513; }
          .value { margin-top: 5px; }
          .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔮 Nouvelle Réservation</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">📅 Date & Heure</div>
              <div class="value">${escapeHtml(booking.bookingDate)} à ${escapeHtml(booking.bookingTime)}</div>
            </div>
            <div class="field">
              <div class="label">👤 Client</div>
              <div class="value">${escapeHtml(safeName)}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email</div>
              <div class="value">${escapeHtml(booking.email)}</div>
            </div>
            <div class="field">
              <div class="label">📞 Téléphone</div>
              <div class="value">${escapeHtml(booking.phone)}</div>
            </div>
            <div class="field">
              <div class="label">🎯 Type de consultation</div>
              <div class="value">${escapeHtml(serviceLabel)}</div>
            </div>
            ${safeMessage ? `
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="value">${escapeHtml(safeMessage)}</div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            Notification automatique - Marabout Africain
          </div>
        </div>
      </body>
      </html>
    `;

    // Email to client (confirmation)
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
          .highlight { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #D2691E; margin: 15px 0; }
          .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔮 Confirmation de Réservation</h1>
          </div>
          <div class="content">
            <p>Bonjour <strong>${escapeHtml(safeName)}</strong>,</p>
            <p>Votre demande de consultation a bien été enregistrée. Voici le récapitulatif :</p>
            
            <div class="highlight">
              <p><strong>📅 Date :</strong> ${escapeHtml(booking.bookingDate)}</p>
              <p><strong>⏰ Heure :</strong> ${escapeHtml(booking.bookingTime)}</p>
              <p><strong>🎯 Type :</strong> ${escapeHtml(serviceLabel)}</p>
            </div>
            
            <p>Je vous contacterai très prochainement pour confirmer votre rendez-vous.</p>
            <p>À très bientôt,</p>
            <p><em>Marabout Africain</em></p>
          </div>
          <div class="footer">
            Cet email a été envoyé automatiquement suite à votre demande de réservation.
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email to admin
    console.log("Sending admin notification email...");
    await client.send({
      from: fromEmail,
      to: fromEmail, // Admin receives at same email
      subject: `🔮 Nouvelle réservation - ${safeName} - ${booking.bookingDate}`,
      content: "Nouvelle réservation reçue",
      html: adminEmailHtml,
    });
    console.log("Admin email sent successfully");

    // Send confirmation to client
    console.log("Sending client confirmation email...");
    await client.send({
      from: fromEmail,
      to: booking.email,
      subject: "✨ Confirmation de votre demande de consultation",
      content: "Confirmation de réservation",
      html: clientEmailHtml,
    });
    console.log("Client email sent successfully");

    await client.close();

    return new Response(
      JSON.stringify({ success: true, message: "Emails envoyés avec succès" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    // Log detailed error server-side only
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error("[SECURE LOG] send-booking-notification error:", {
      error: errorMessage,
      stack: errorStack,
      timestamp: new Date().toISOString()
    });
    
    // Return generic error to client
    return new Response(
      JSON.stringify({ 
        error: "Une erreur est survenue lors de l'envoi de la notification. Veuillez réessayer." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
