import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Statistics from "@/components/Statistics/Statistics";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#FFF6EF]">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <Services />
      <About />
      <Statistics />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
