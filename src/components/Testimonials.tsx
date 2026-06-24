import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, MessageSquare, Star } from "lucide-react";
import { TestimonialItem } from "../types";

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "google-1",
    name: "Anônimo",
    role: "Google Review",
    content: "Melhor academia de Mangaratiba. Excelentes profissionais sem contar os proprietários pessoas simples e humildes. Que Deus continue abençoando o caminho de vocês.🙏🙌",
    avatar: "",
    rating: 5
  },
  {
    id: "google-2",
    name: "Renato Luiz Costa Rosa",
    role: "Google Review",
    content: "Fui super bem atendido, ambiente com excelentes profissionais.",
    avatar: "",
    rating: 5
  },
  {
    id: "google-3",
    name: "Larissa Santana",
    role: "Google Review",
    content: "Ótimo espaço e bons profissionais. Adoro o trabalho da Laís, muito motivadora. E do Felipe principalmente porque me sinto sempre desafiada por ele! Taiane e uma simpatia! O João muito educado em ensinar a maneira correta!",
    avatar: "",
    rating: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[index];

  return (
    <section className="relative w-full py-24 bg-neutral-950 border-t border-white/5 overflow-hidden">
      {/* Decorative large quotes in background for elegance */}
      <div className="absolute right-10 bottom-0 text-white/5 font-display italic font-black text-[220px] select-none pointer-events-none leading-none">
        ”
      </div>
      <div className="absolute left-10 top-0 text-white/5 font-display italic font-black text-[220px] select-none pointer-events-none leading-none">
        “
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center">
        
        {/* Topic Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/25 text-brand-red text-xs tracking-widest uppercase font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            VOZ DO ATLETA
          </div>
        </div>

        {/* Quotes Frame */}
        <div className="min-h-[220px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Stars ratings */}
              <div className="flex justify-center items-center gap-1 text-amber-500">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500" />
                ))}
              </div>

              {/* Main quote in massive displays */}
              <blockquote className="font-display font-medium text-lg sm:text-2xl md:text-3xl text-neutral-100 italic leading-relaxed tracking-wide font-display max-w-3xl">
                “{active.content}”
              </blockquote>

              {/* User Bio */}
              <div className="flex flex-col items-center gap-3 pt-4 justify-center">
                {active.avatar && (
                  <img 
                    src={active.avatar} 
                    alt={active.name}
                    className="w-12 h-12 rounded-full border border-brand-red/30 object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="text-center">
                  <h4 className="font-display font-black text-sm text-white uppercase tracking-wider italic">
                    {active.name}
                  </h4>
                  <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono mt-1">
                    {active.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-neutral-800 hover:border-brand-red text-neutral-500 hover:text-white flex items-center justify-center transition-colors bg-neutral-900/60 cursor-pointer group"
            aria-label="Anterior depoimento"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <div className="flex gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? "w-6 bg-brand-red" : "w-1.5 bg-neutral-800"
                }`}
                aria-label={`Ver depoimento ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-neutral-800 hover:border-brand-red text-neutral-500 hover:text-white flex items-center justify-center transition-colors bg-neutral-900/60 cursor-pointer group"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
