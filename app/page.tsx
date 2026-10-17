import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Livestock from "@/components/Livestock";
import Services from "@/components/Services";
import Sustainability from "@/components/Sustainability";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Livestock limit={3} />
      <Services />
      <Sustainability />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}