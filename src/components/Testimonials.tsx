import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie D.",
    location: "Paris",
    text: "Après 6 mois de séparation, mon mari est revenu grâce à Maître Abdou. Notre amour est plus fort que jamais !",
    rating: 5,
    service: "Retour de l'être aimé"
  },
  {
    name: "Jean-Claude M.",
    location: "Lyon",
    text: "J'ai obtenu la promotion que j'attendais depuis 3 ans. Les rituels de Maître Abdou sont d'une efficacité redoutable.",
    rating: 5,
    service: "Réussite professionnelle"
  },
  {
    name: "Fatou S.",
    location: "Marseille",
    text: "Ma famille était déchirée par les conflits. Aujourd'hui, nous vivons en harmonie parfaite. Merci infiniment !",
    rating: 5,
    service: "Harmonie familiale"
  },
  {
    name: "Pierre L.",
    location: "Toulouse",
    text: "Protégé contre tous les mauvais sorts qui me visaient. Je ressens une paix intérieure extraordinaire.",
    rating: 5,
    service: "Protection spirituelle"
  },
  {
    name: "Aminata K.",
    location: "Bordeaux",
    text: "Mon commerce prospère comme jamais depuis la consultation. La chance m'accompagne dans tous mes projets.",
    rating: 5,
    service: "Chance et fortune"
  },
  {
    name: "Thomas R.",
    location: "Nice",
    text: "Résultats visibles en 48h comme promis. Maître Abdou est un véritable guide spirituel authentique.",
    rating: 5,
    service: "Résultats rapides"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-earth-red to-golden-amber bg-clip-text text-transparent">
              Témoignages Authentiques
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La satisfaction de mes consultants est ma plus grande récompense. 
            Découvrez leurs histoires de transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-mystical transition-all duration-300 hover:-translate-y-1 border-earth-red/20 hover:border-earth-red/50"
            >
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center justify-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-golden-amber text-golden-amber" />
                  ))}
                </div>
                
                {/* Service badge */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 text-xs bg-sunset-orange/20 text-sunset-orange rounded-full border border-sunset-orange/30">
                    {testimonial.service}
                  </span>
                </div>
                
                {/* Testimonial text */}
                <blockquote className="text-center italic text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author info */}
                <div className="text-center pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-card border border-sunset-orange/30 rounded-full">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-golden-amber text-golden-amber" />
              ))}
            </div>
            <div className="text-lg font-semibold">4.9/5 - Plus de 1000 avis vérifiés</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;