import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="services-page">
      <Navbar />
      <Services />
      <div className="services-page-image">
        <img
          src="/images/services-cattle-barn.png"
          alt="Cattle inside a modern farm barn"
        />
      </div>
      <Footer />
    </main>
  );
}
