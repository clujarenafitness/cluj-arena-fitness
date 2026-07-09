import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Membership from "@/components/Membership";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Benefits />
      <Programs />
      <Trainers />
      <Gallery />
      <Testimonials />
      <Membership />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
