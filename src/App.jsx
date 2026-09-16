import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import AboutGaya from "./components/AboutGaya";
import Services from "./components/Services";
import WhyTrustUs from "./components/WhyTrustUs";
import SatvikFood from "./components/SatvikFood";
import SacredPlaces from "./components/SacredPlaces";
import ComfortArrangements from "./components/ComfortArrangements";
import HowItWorks from "./components/HowItWorks";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function App() {
  return (
    <div className="paper-texture">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <AboutGaya />
        <Services />
        <WhyTrustUs />
        <SatvikFood />
        <SacredPlaces />
        <ComfortArrangements />
        <HowItWorks />
        <Booking />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
}
