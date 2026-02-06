import { Star, Phone, Mail, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[hsl(20,15%,12%)] border-t border-sunset-orange/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-sunset-orange to-golden-amber rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-golden-amber to-sunset-orange bg-clip-text text-transparent">
                Maître Amagnon Lissa
              </div>
            </div>
            <p className="text-white leading-relaxed">
              Marabout africain traditionnel, héritier d'une sagesse millénaire.
              Je vous accompagne avec bienveillance vers la résolution de vos défis.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-golden-amber text-golden-amber" />
                ))}
              </div>
              <span className="text-sm text-white">4.9/5 - 1000+ avis</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-golden-amber">Mes Services</h3>
            <ul className="space-y-2 text-white">
              <li>• Retour de l'être aimé</li>
              <li>• Harmonie familiale</li>
              <li>• Réussite professionnelle</li>
              <li>• Protection spirituelle</li>
              <li>• Chance et fortune</li>
              <li>• Résultats rapides</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-golden-amber">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sunset-orange" />
                <span className="text-white">+33 644 66 81 73</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sunset-orange" />
                <span className="text-white">contact@marabout-lissa.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-sunset-orange" />
                <span className="text-white">Consultations à distance</span>
              </div>
            </div>
          </div>

          {/* Garanties */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-golden-amber">Garanties</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-sunset-orange" />
                <span className="text-white">Confidentialité absolue</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-sunset-orange" />
                <span className="text-white">Consultation gratuite</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sunset-orange" />
                <span className="text-white">Disponible 7j/7</span>
              </div>
            </div>
            <div className="p-3 bg-card/30 border border-sunset-orange/30 rounded-lg">
              <p className="text-sm text-center text-white">
                <strong className="text-golden-amber">Première consultation gratuite</strong><br />
                Réponse garantie sous 24h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-sunset-orange/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white text-sm">
              © 2024 Maître Amagnon Lissa - Marabout Africain Traditionnel. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-white">
              <Link to="/mentions-legales" className="hover:text-golden-amber transition-colors">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="hover:text-golden-amber transition-colors">
                Confidentialité
              </Link>
              <Link to="/cgv" className="hover:text-golden-amber transition-colors">
                CGV
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-white/70">
              Les services proposés sont basés sur des traditions spirituelles ancestrales et ne remplacent pas un suivi médical ou psychologique professionnel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;