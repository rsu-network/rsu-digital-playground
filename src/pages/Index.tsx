import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServerStatus } from "@/components/ServerStatus";
import { Stats } from "@/components/Stats";
import { Vision } from "@/components/Vision";
import { Tutorial } from "@/components/Tutorial";
import { Features } from "@/components/Features";
import { Economy } from "@/components/Economy";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { Safety } from "@/components/Safety";
import { Roadmap } from "@/components/Roadmap";
import { Join } from "@/components/Join";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServerStatus />
      <Stats />
      <Vision />
      <Tutorial />
      <Features />
      <Economy />
      <Events />
      <Gallery />
      <Safety />
      <Roadmap />
      <Join />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
