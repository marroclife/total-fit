import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";

interface SiloHeroProps {
  title: string;
  subtitle: string;
  location?: string;
}

export default function SiloHero({ title, subtitle, location }: SiloHeroProps) {
  const triggerWhatsApp = () => {
    const baseMsg = `Olá! Gostaria de saber mais sobre ${title.toLowerCase()} na Total Fit Academia.`;
    window.open(`https://wa.me/5521968774308?text=${encodeURIComponent(baseMsg)}`, "_blank");
  };

  return (
    <section className="relative w-full min-h-[70vh] flex items-center bg-obsidian overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid-white opacity-15" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red-dark/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/25 text-brand-red text-xs tracking-widest uppercase font-semibold mb-6"
          >
            <MapPin className="w-3.5 h-3.5" />
            {location || "Mangaratiba, RJ"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase italic leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-neutral-300 font-sans text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={triggerWhatsApp}
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-red hover:bg-brand-red-light text-white font-display font-black text-xs tracking-widest uppercase transition-all duration-300 shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40 hover:scale-[1.02] cursor-pointer"
          >
            FALAR NO WHATSAPP <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
