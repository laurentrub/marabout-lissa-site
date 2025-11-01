import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CGV = () => {
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
            Conditions Générales de Vente
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 1 - Objet</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
              Maître Amagnon Lissa, marabout africain traditionnel, et toute personne physique souhaitant bénéficier 
              de ses services de conseil et d'accompagnement spirituel.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 2 - Services proposés</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Maître Amagnon Lissa propose des services de conseil spirituel basés sur les traditions africaines ancestrales, notamment :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Retour de l'être aimé et harmonie relationnelle</li>
              <li>Harmonie familiale et résolution de conflits</li>
              <li>Réussite professionnelle et opportunités</li>
              <li>Protection spirituelle et purification</li>
              <li>Chance, prospérité et fortune</li>
              <li>Autres consultations spirituelles personnalisées</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Important :</strong> Ces services relèvent de l'accompagnement spirituel traditionnel et 
              ne se substituent en aucun cas à un suivi médical, psychologique ou juridique professionnel.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 3 - Consultation gratuite</h2>
            <p className="text-muted-foreground leading-relaxed">
              La première consultation est gratuite et sans engagement. Elle permet d'échanger sur votre situation 
              et de déterminer ensemble l'accompagnement spirituel le plus approprié à vos besoins.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 4 - Tarifs et modalités de paiement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les tarifs des prestations sont communiqués lors de la consultation gratuite, en fonction de la 
              nature et de la complexité de votre demande. Les prix sont exprimés en euros et toutes taxes comprises.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Les modalités de paiement acceptées sont :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-2">
              <li>Virement bancaire</li>
              <li>Espèces (consultations en présentiel)</li>
              <li>Autres moyens selon accord préalable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 5 - Déroulement des consultations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les consultations peuvent se dérouler :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-2">
              <li>Par téléphone</li>
              <li>Par visioconférence</li>
              <li>En présentiel sur rendez-vous</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Les horaires de consultation sont : du lundi au dimanche, de 8h00 à 22h00.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 6 - Confidentialité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Toutes les consultations et échanges sont couverts par le secret spirituel traditionnel. 
              Maître Amagnon Lissa s'engage à une confidentialité absolue concernant votre identité, vos confidences 
              et votre situation personnelle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 7 - Annulation et report</h2>
            <p className="text-muted-foreground leading-relaxed">
              En cas d'empêchement, vous pouvez annuler ou reporter votre rendez-vous en prévenant au moins 
              24 heures à l'avance. Toute consultation non annulée dans ce délai pourra être facturée.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 8 - Engagements et résultats</h2>
            <p className="text-muted-foreground leading-relaxed">
              Maître Amagnon Lissa s'engage à mettre en œuvre toutes ses compétences et son expérience pour vous 
              accompagner au mieux. Cependant, les services proposés relèvent du domaine spirituel et de 
              l'accompagnement traditionnel. Les résultats peuvent varier selon les personnes et les situations.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Aucun résultat spécifique ne peut être garanti</strong>, car chaque situation est unique 
              et dépend de nombreux facteurs spirituels et personnels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 9 - Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le client reconnaît que les services de Maître Amagnon Lissa constituent un accompagnement spirituel 
              complémentaire et ne remplacent pas un suivi médical, psychologique ou juridique professionnel.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Maître Amagnon Lissa ne pourra être tenu responsable des décisions prises par le client suite aux 
              consultations spirituelles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 10 - Droit de rétractation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conformément à la législation en vigueur, le client dispose d'un délai de 14 jours pour exercer 
              son droit de rétractation pour les services non encore exécutés.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Pour les consultations déjà effectuées, le droit de rétractation ne peut s'appliquer, le service 
              ayant été pleinement exécuté.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 11 - Protection des données</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les données personnelles collectées sont traitées conformément à notre politique de confidentialité 
              et au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 12 - Droit applicable et litiges</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera 
              recherchée en priorité. À défaut, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Article 13 - Modifications des CGV</h2>
            <p className="text-muted-foreground leading-relaxed">
              Maître Amagnon Lissa se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables 
              sont celles en vigueur à la date de la commande du service.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-golden-amber mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pour toute question concernant ces conditions générales de vente :
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Email : contact@marabout-lissa.com<br />
              Téléphone : +33 1 XX XX XX XX
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CGV;
