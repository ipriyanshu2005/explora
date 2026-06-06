import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import MapPreview from "../components/MapPreview";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <MapPreview />
      <Features />
      <Footer />
    </main>
  );
}