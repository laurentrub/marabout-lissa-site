import { Button } from "@/components/ui/button";
import heroImage from "@/assets/marabout-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with mystical gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-earth via-background to-midnight-earth"></div>
      
      {/* Floating spiritual elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-golden-amber rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-sunset-orange rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-earth-red rounded-full animate-float opacity-30" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-golden-amber via-sunset-orange to-earth-red bg-clip-text text-transparent">
                  Maître Abdou
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-desert-sand">
                Marabout Africain Traditionnel
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Héritier d'une tradition millénaire, je vous accompagne avec sagesse et bienveillance 
              dans la résolution de vos problèmes les plus complexes grâce aux secrets ancestraux.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="mystical" 
                size="lg"
                className="animate-glow"
              >
                Consultation Gratuite
              </Button>
              <Button 
                variant="spiritual" 
                size="lg"
              >
                Découvrir mes Services
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-golden-amber">25+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-golden-amber">1000+</div>
                <div className="text-sm text-muted-foreground">Vies transformées</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-golden-amber">100%</div>
                <div className="text-sm text-muted-foreground">Discrétion</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-sunset-orange to-golden-amber rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src={heroImage} 
                alt="Maître Abdou - Marabout Africain Traditionnel" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border-2 border-golden-amber/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;