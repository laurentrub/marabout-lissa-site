import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Generate secure random password
const generatePassword = (): string => {
  const length = 16;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => charset[byte % charset.length]).join('');
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    const defaultEmail = 'admin@marabout-afrique.com'
    const defaultPassword = generatePassword()

    console.log('Creating admin user...')

    // Create user with admin client
    const { data: userData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email: defaultEmail,
      password: defaultPassword,
      email_confirm: true,
      user_metadata: {
        must_change_password: true,
        created_via: 'setup_script',
        created_at: new Date().toISOString()
      }
    })

    if (createError) {
      // Check if user already exists
      if (createError.message.includes('already been registered')) {
        // Get existing user
        const { data: { users }, error: listError } = await supabaseAdmin.auth.admin.listUsers()
        
        if (listError) {
          console.error('[SECURE LOG] List users error:', listError)
          throw new Error('Failed to verify admin status')
        }

        const existingUser = users?.find(u => u.email === defaultEmail)
        
        if (existingUser) {
          // Check if already has admin role
          const { data: existingRole } = await supabaseAdmin
            .from('user_roles')
            .select('*')
            .eq('user_id', existingUser.id)
            .eq('role', 'admin')
            .maybeSingle()

          if (existingRole) {
            return new Response(
              JSON.stringify({ 
                success: true, 
                message: 'Admin user already exists'
                // Credentials NOT returned - security fix
              }),
              { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
          }

          // Add admin role to existing user
          const { error: roleError } = await supabaseAdmin
            .from('user_roles')
            .insert({ user_id: existingUser.id, role: 'admin' })

          if (roleError) {
            console.error('[SECURE LOG] Role assignment error:', roleError)
            throw new Error('Failed to assign admin role')
          }

          return new Response(
            JSON.stringify({ 
              success: true, 
              message: 'Admin role added to existing user'
              // Credentials NOT returned - security fix
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }
      }
      console.error('[SECURE LOG] Create user error:', createError)
      throw new Error('Failed to create admin user')
    }

    console.log('User created:', userData.user?.id)
    
    // Log credentials securely server-side only
    console.log('='.repeat(50))
    console.log('ADMIN ACCOUNT CREATED')
    console.log('Email:', defaultEmail)
    console.log('Password:', defaultPassword)
    console.log('IMPORTANT: Change this password immediately after first login')
    console.log('='.repeat(50))

    // Add admin role
    const { error: roleError } = await supabaseAdmin
      .from('user_roles')
      .insert({ user_id: userData.user!.id, role: 'admin' })

    if (roleError) {
      console.error('[SECURE LOG] Role assignment error:', roleError)
      throw new Error('Failed to assign admin role')
    }

    console.log('Admin role assigned successfully')

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Admin user created successfully. Check server logs for credentials.'
        // Credentials NOT returned - security fix
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error: unknown) {
    console.error('[SECURE LOG] Error:', error)
    // Return generic error message
    return new Response(
      JSON.stringify({ error: 'Failed to setup admin account. Please check server logs.' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
