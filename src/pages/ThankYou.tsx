import { CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <Card className="border-golden-amber/30 bg-gradient-to-br from-card to-golden-amber/5">
            <CardContent className="p-12 text-center space-y-8">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sunset-orange to-golden-amber rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sunset-orange to-earth-red bg-clip-text text-transparent">
                  Message Reçu !
                </h1>
                <p className="text-xl text-muted-foreground">
                  Votre demande a bien été envoyée à Maître Amagnon Lissa
                </p>
              </div>

              <div className="p-6 bg-card/50 border border-sunset-orange/30 rounded-lg space-y-3">
                <p className="text-lg font-semibold text-golden-amber">
                  Que se passe-t-il maintenant ?
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>✓ Votre message sera examiné personnellement par Maître Amagnon Lissa</p>
                  <p>✓ Vous recevrez une réponse dans les <strong className="text-golden-amber">24 heures</strong></p>
                  <p>✓ La première consultation est <strong className="text-golden-amber">totalement gratuite</strong></p>
                </div>
              </div>

              <div className="pt-6 space-y-6">
                <p className="text-muted-foreground">
                  En cas d'urgence, vous pouvez me contacter directement :
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <div className="flex items-center gap-2 text-sunset-orange">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">+33 1 XX XX XX XX</span>
                  </div>
                  <div className="flex items-center gap-2 text-sunset-orange">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">contact@marabout-lissa.com</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/">
                    <Button variant="mystical" size="lg" className="gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Retour à l'accueil
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="pt-6 border-t border-sunset-orange/20">
                <p className="text-sm text-muted-foreground italic">
                  "La patience est la clé de toute solution. Je suis là pour vous accompagner avec bienveillance."
                </p>
                <p className="text-sm text-golden-amber font-semibold mt-2">- Maître Amagnon Lissa</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
