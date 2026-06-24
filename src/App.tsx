import CustomCursor from "./components/CustomCursor";
import SharedHeader from "./components/SharedHeader";
import Hero from "./components/Hero";
import ExpansionBanner from "./components/ExpansionBanner";
import BentoAbout from "./components/BentoAbout";
import ModalitiesCarousel from "./components/ModalitiesCarousel";
import FullStructure from "./components/FullStructure";
import Testimonials from "./components/Testimonials";
import PremiumPlans from "./components/PremiumPlans";
import ContactAndLocation from "./components/ContactAndLocation";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function App() {
  const triggerGlobalWhatsApp = () => {
    const baseMsg = "Olá! Gostaria de saber mais sobre os planos da *Total Fit Academia*.";
    window.open(`https://wa.me/5521968774308?text=${encodeURIComponent(baseMsg)}`, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-obsidian text-neutral-100 font-sans selection:bg-brand-red selection:text-white">
      {/* Custom Cinematic Desktop Cursor */}
      <CustomCursor />

      {/* Header compartilhado */}
      <SharedHeader />

      <div className="pt-24">
        {/* Hero */}
        <Hero />

      {/* Grande Novidade: Expansão */}
      <ExpansionBanner />

      {/* Bento-Grid Narrative */}
      <BentoAbout />

      {/* Modalidades Crossfade Showcase */}
      <ModalitiesCarousel />

      {/* Full Amenities Grid */}
      <FullStructure />

      {/* Testimonials */}
      <Testimonials />

      {/* Glassmorphism Pricing */}
      <PremiumPlans />

      {/* Contact & Map */}
      <ContactAndLocation />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <motion.button
        onClick={triggerGlobalWhatsApp}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 bg-brand-red hover:bg-brand-red-light text-white p-4 sm:px-5 sm:py-3.5 rounded-full shadow-[0_4px_25px_rgba(193,27,27,0.4)] flex items-center gap-2 group cursor-pointer transition-colors duration-300"
        aria-label="Falar conosco no WhatsApp"
      >
        <Send className="w-5 h-5 fill-white text-brand-red" />
        <span className="hidden sm:inline font-display font-black text-xs tracking-widest uppercase text-white">
          MATRÍCULA EXPRESSA
        </span>
      </motion.button>
      </div>
    </div>
  );
}
