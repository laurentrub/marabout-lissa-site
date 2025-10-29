import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Clock, MapPin, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Je vous contacte dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    // Redirect to thank you page
    setTimeout(() => navigate("/merci"), 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-sunset-orange to-earth-red bg-clip-text text-transparent">
              Contactez-Moi
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Première consultation gratuite et confidentielle. 
            Je suis là pour vous écouter et vous guider vers la solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-sunset-orange/20">
            <CardHeader>
              <CardTitle className="text-2xl text-golden-amber">Consultation Gratuite</CardTitle>
              <CardDescription>
                Partagez votre situation en toute confidentialité. 
                Je vous répondrai personnellement dans les 24h.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-sunset-orange/30 focus:border-sunset-orange"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-sunset-orange/30 focus:border-sunset-orange"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-sunset-orange/30 focus:border-sunset-orange"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet de consultation</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Retour affectif, protection, chance..."
                    className="border-sunset-orange/30 focus:border-sunset-orange"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Décrivez votre situation *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Partagez votre histoire en toute confidentialité..."
                    className="border-sunset-orange/30 focus:border-sunset-orange"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="mystical" 
                  size="lg" 
                  className="w-full"
                >
                  Envoyer ma Demande Gratuite
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-earth-red/20">
              <CardHeader>
                <CardTitle className="text-2xl text-earth-red flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  Informations de Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-sunset-orange mt-1" />
                  <div>
                    <div className="font-semibold">Consultation Téléphonique</div>
                    <div className="text-muted-foreground">+33 1 XX XX XX XX</div>
                    <div className="text-sm text-muted-foreground">Disponible 7j/7</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-sunset-orange mt-1" />
                  <div>
                    <div className="font-semibold">Email Privé</div>
                    <div className="text-muted-foreground">maitre.abdou@spiritual.fr</div>
                    <div className="text-sm text-muted-foreground">Réponse sous 24h</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-sunset-orange mt-1" />
                  <div>
                    <div className="font-semibold">Horaires de Consultation</div>
                    <div className="text-muted-foreground">Lundi - Dimanche</div>
                    <div className="text-sm text-muted-foreground">8h00 - 22h00</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-sunset-orange mt-1" />
                  <div>
                    <div className="font-semibold">Consultations</div>
                    <div className="text-muted-foreground">À distance & sur rendez-vous</div>
                    <div className="text-sm text-muted-foreground">Partout en France</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <Card className="border-golden-amber/20 bg-gradient-to-br from-card to-golden-amber/5">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <Shield className="w-12 h-12 text-golden-amber mx-auto" />
                  <h3 className="text-xl font-bold text-golden-amber">Garantie de Confidentialité</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Votre vie privée est sacrée. Toutes nos conversations sont strictement confidentielles 
                    et protégées par le secret spirituel traditionnel.
                  </p>
                  <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                    <span>✓ Discrétion absolue</span>
                    <span>✓ Sans jugement</span>
                    <span>✓ Bienveillance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;