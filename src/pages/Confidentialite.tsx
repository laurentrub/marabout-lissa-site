import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Confidentialite = () => {
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
            Politique de Confidentialité
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Protection de vos données personnelles</h2>
            <p className="text-muted-foreground leading-relaxed">
              Maître Amagnon Lissa accorde la plus grande importance à la protection de vos données personnelles et au 
              respect de votre vie privée. Cette politique de confidentialité vous informe sur la manière dont 
              vos données sont collectées, utilisées et protégées.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Données collectées</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nous collectons uniquement les informations que vous nous transmettez volontairement via notre 
              formulaire de contact ou lors de nos échanges :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Le contenu de vos messages et consultations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Utilisation des données</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vos données personnelles sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Répondre à vos demandes de consultation</li>
              <li>Assurer le suivi de votre accompagnement spirituel</li>
              <li>Vous contacter concernant nos services</li>
              <li>Améliorer la qualité de nos prestations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Engagement ferme :</strong> Vos données ne seront jamais vendues, louées ou partagées 
              avec des tiers sans votre consentement explicite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Confidentialité absolue</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conformément aux traditions spirituelles ancestrales, toutes vos consultations et échanges sont 
              couverts par le <strong>secret spirituel traditionnel</strong>. Vos confidences, situations 
              personnelles et demandes restent strictement confidentielles.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Nous mettons en œuvre toutes les mesures de sécurité techniques et organisationnelles appropriées 
              pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisés.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Conservation des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vos données personnelles sont conservées uniquement pendant la durée nécessaire à la réalisation 
              des finalités pour lesquelles elles ont été collectées, ou conformément aux obligations légales 
              de conservation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Vos droits</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Droit d'accès :</strong> Vous pouvez demander à consulter vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données dans un format structuré</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Pour exercer ces droits, contactez-nous par email à : <strong>maitre.Amagnon Lissa@spiritual.fr</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Notre site utilise des cookies techniques nécessaires au bon fonctionnement du site. Aucun cookie 
              publicitaire ou de traçage n'est utilisé sans votre consentement préalable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Modifications de la politique</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Toute modification sera publiée sur cette page avec une date de mise à jour.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
              vous pouvez nous contacter :
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Email : maitre.Amagnon Lissa@spiritual.fr<br />
              Téléphone : +33 1 XX XX XX XX
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Confidentialite;
