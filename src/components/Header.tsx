import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Star } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-sunset-orange/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-sunset-orange to-golden-amber rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-golden-amber to-sunset-orange bg-clip-text text-transparent">
              Maître Abdou
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-foreground hover:text-sunset-orange transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-sunset-orange transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('témoignages')}
              className="text-foreground hover:text-sunset-orange transition-colors"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-sunset-orange transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="mystical" 
              onClick={() => scrollToSection('contact')}
            >
              Consultation Gratuite
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-sunset-orange"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-sunset-orange/20">
            <button
              onClick={() => scrollToSection('accueil')}
              className="block w-full text-left py-2 text-foreground hover:text-sunset-orange transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-foreground hover:text-sunset-orange transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('témoignages')}
              className="block w-full text-left py-2 text-foreground hover:text-sunset-orange transition-colors"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-foreground hover:text-sunset-orange transition-colors"
            >
              Contact
            </button>
            <Button 
              variant="mystical" 
              className="w-full mt-4"
              onClick={() => scrollToSection('contact')}
            >
              Consultation Gratuite
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;