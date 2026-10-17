import Navbar from "@/components/Navbar";
import Livestock from "@/components/Livestock";
import Footer from "@/components/Footer";

export default function LivestockPage() {
  return (
    <main className="livestock-page">
      <Navbar />
      <Livestock />
      <Footer />
    </main>
  );
}
