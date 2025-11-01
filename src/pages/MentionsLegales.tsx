import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-sunset-orange to-earth-red bg-clip-text text-transparent">
            Mentions Légales
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Éditeur du site</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Nom :</strong> Maître Amagnon Lissa<br />
              <strong>Activité :</strong> Marabout africain traditionnel - Consultant spirituel<br />
              <strong>Email :</strong> contact@marabout-lissa.com<br />
              <strong>Téléphone :</strong> +33 1 XX XX XX XX
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Hébergement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site est hébergé par OVH<br />
              Adresse : www.ovh.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
              et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
              documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il soit 
              est formellement interdite sauf autorisation expresse de l'éditeur, conformément à l'article L.122-4 
              du Code de la propriété intellectuelle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Nature des services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les services proposés par Maître Amagnon Lissa relèvent de la tradition spirituelle africaine ancestrale. 
              Ils sont basés sur des pratiques traditionnelles de conseil et d'accompagnement spirituel.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Important :</strong> Ces services ne se substituent en aucun cas à un suivi médical, 
              psychologique ou juridique professionnel. Ils représentent un complément spirituel et ne peuvent 
              remplacer l'avis d'un professionnel de santé ou de droit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Maître Amagnon Lissa s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour 
              des informations diffusées sur ce site. Toutefois, il ne peut garantir l'exactitude, la précision 
              ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Liens hypertextes</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site peut contenir des liens hypertextes vers d'autres sites. Maître Amagnon Lissa ne dispose d'aucun 
              moyen pour contrôler les contenus de ces sites et n'assumera en conséquence aucune responsabilité 
              de ce fait.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
