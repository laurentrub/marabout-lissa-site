import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="accueil">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="témoignages">
          <Testimonials />
        </section>
        <section id="réseaux">
          <SocialMedia />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      
    </div>
  );
};

export default Index;
