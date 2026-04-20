import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Tutorial } from "@/components/Tutorial";
import { Economy } from "@/components/Economy";
import { Events } from "@/components/Events";
import { Safety } from "@/components/Safety";
import { Join } from "@/components/Join";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Vision />
      <Tutorial />
      <Economy />
      <Events />
      <Safety />
      <Join />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
