import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FFF6EF] text-[#111111]">
      <Navbar />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
