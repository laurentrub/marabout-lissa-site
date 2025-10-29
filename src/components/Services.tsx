import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Home, Briefcase, Shield, Star, Zap } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Retour de l'Être Aimé",
    description: "Rituels puissants pour reconquérir votre âme sœur et rétablir l'harmonie dans votre couple.",
    features: ["Retour rapide et efficace", "Protection contre la séparation", "Renforcement des liens amoureux"]
  },
  {
    icon: Home,
    title: "Harmonie Familiale",
    description: "Résolution des conflits familiaux et restauration de la paix dans votre foyer.",
    features: ["Réconciliation familiale", "Protection du foyer", "Bénédictions ancestrales"]
  },
  {
    icon: Briefcase,
    title: "Réussite Professionnelle",
    description: "Déblocage des situations professionnelles et ouverture des voies vers le succès.",
    features: ["Promotion garantie", "Protection contre les ennemis", "Prospérité financière"]
  },
  {
    icon: Shield,
    title: "Protection Spirituelle",
    description: "Boucliers mystiques contre les énergies négatives et les sorts maléfiques.",
    features: ["Désenvoûtement complet", "Protection permanente", "Purification spirituelle"]
  },
  {
    icon: Star,
    title: "Chance et Fortune",
    description: "Rituels de prospérité pour attirer l'abondance et la réussite dans votre vie.",
    features: ["Multiplication des gains", "Ouverture des chemins", "Succès dans les projets"]
  },
  {
    icon: Zap,
    title: "Résultats Rapides",
    description: "Solutions d'urgence pour les cas les plus complexes et les situations critiques.",
    features: ["Résultats en 48h", "Satisfaction garantie", "Suivi personnalisé"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-golden-amber to-sunset-orange bg-clip-text text-transparent">
              Mes Services Spirituels
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions ancestrales pour tous vos défis de la vie. 
            Chaque rituel est personnalisé selon votre situation unique.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-mystical transition-all duration-300 hover:-translate-y-2 border-sunset-orange/20 hover:border-sunset-orange/50"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-sunset-orange to-golden-amber rounded-full flex items-center justify-center group-hover:animate-glow">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-golden-amber group-hover:text-sunset-orange transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-sunset-orange rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="spiritual" 
                  className="w-full mt-6"
                >
                  Consulter Maintenant
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;