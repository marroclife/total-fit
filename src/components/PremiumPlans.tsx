import { motion } from "motion/react";
import { Flame, Send } from "lucide-react";
import confetti from "canvas-confetti";

export default function PremiumPlans() {
  const triggerWhatsApp = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.55, x: 0.5 },
      colors: ["#C11B1B", "#E31E24", "#7A1212", "#ffffff", "#121212"],
      gravity: 1.1,
      scalar: 1,
    });

    const baseMsg = "Olá! Gostaria de saber mais sobre os planos da *Total Fit Academia*.";
    window.open(`https://wa.me/5521968774308?text=${encodeURIComponent(baseMsg)}`, "_blank");
  };

  return (
    <section id="planos" className="relative w-full py-24 bg-obsidian overflow-hidden bg-dot-grid-white">
      
      {/* Decorative colored glow fields */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-red/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">
        
        {/* Topic Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs tracking-widest uppercase mb-4"
        >
          <Flame className="w-3.5 h-3.5 text-brand-red animate-pulse" />
          PLANOS
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase italic tracking-tight"
        >
          INVISTA NO SEU POTENCIAL
        </motion.h2>
        <div className="w-16 h-1.5 bg-brand-red mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(193,27,27,0.5)]" />

        {/* Simplified pricing block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 rounded-3xl border border-brand-red/30 bg-neutral-900/70 backdrop-blur-md p-10 md:p-14 shadow-[0_0_50px_rgba(193,27,27,0.12)]"
        >
          <div className="flex flex-col items-center">
            <span className="font-tech text-xs text-neutral-400 tracking-widest uppercase mb-3">
              Planos a partir de
            </span>
            
            <div className="flex items-baseline justify-center">
              <span className="font-display font-bold text-2xl md:text-3xl text-neutral-400 uppercase tracking-widest mr-2">R$</span>
              <span className="font-display font-black text-7xl md:text-8xl text-white tracking-tighter">85,00</span>
            </div>

            <p className="mt-4 text-neutral-300 font-sans text-sm md:text-base max-w-lg leading-relaxed">
              A melhor relação custo-benefício da região. Treine na maior academia de Mangaratiba com 
              estrutura ampla, equipamentos modernos e acompanhamento profissional.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
              <button
                onClick={triggerWhatsApp}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white font-display font-black text-xs tracking-widest uppercase transition-all duration-300 shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                FALAR NO WHATSAPP <Send className="w-4 h-4" />
              </button>
            </div>

            <span className="text-[10px] text-neutral-500 font-sans tracking-wide text-center block mt-5">
              Entre em contato e descubra a melhor opção para o seu objetivo.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
