import { motion } from "motion/react";
import { Rocket, TrendingUp, Dumbbell, Sparkles, Zap, ArrowDown } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: TrendingUp,
    title: "MAIOR ACADEMIA",
    description: "A transformação da maior academia de Mangaratiba está em movimento."
  },
  {
    icon: Sparkles,
    title: "NOVO ANDAR",
    description: "Ampliação significativa do espaço de treino com mais conforto e estrutura."
  },
  {
    icon: Dumbbell,
    title: "APARELHOS MODERNOS",
    description: "Novos aparelhos de alta performance para acelerar seus resultados."
  },
  {
    icon: Zap,
    title: "INOVAÇÃO CONSTANTE",
    description: "Equipamentos diferenciados e inovadores chegando para elevar o padrão."
  },
  {
    icon: Rocket,
    title: "AMBIENTE MOTIVADOR",
    description: "Espaço ainda mais inspirador para você treinar com energia e disciplina."
  }
];

export default function ExpansionBanner() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-20 md:py-28 bg-obsidian overflow-hidden border-y border-white/5">
      {/* Background gradient engine */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-red/10 rounded-full filter blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red-dark/10 rounded-full filter blur-[120px]" />
        <div className="absolute inset-0 bg-dot-grid-white opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breaking News style badge + headline */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red border border-brand-red-light shadow-[0_0_25px_rgba(193,27,27,0.4)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span className="font-display font-black text-[10px] text-white tracking-widest uppercase">
              Grande Novidade
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase italic leading-tight"
          >
            Estamos evoluindo para <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red via-brand-red-light to-white">
              entregar ainda mais para você
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-neutral-300 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            A <strong className="text-white">Total Fit</strong> está expandindo com a ampliação de um novo andar, 
            trazendo mais conforto, estrutura e tecnologia para quem leva o treino a sério.
          </motion.p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl p-6 border border-white/5 bg-neutral-900/60 backdrop-blur-md hover:border-brand-red/40 hover:bg-neutral-900/80 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/25 flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-300">
                    <Icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Slogan + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center text-center"
        >
          <p className="font-display font-black text-lg md:text-2xl text-white uppercase tracking-widest italic">
            “Evoluir faz parte da nossa essência”
          </p>
          <div className="w-20 h-1 bg-brand-red rounded-full mt-4 mb-6 shadow-[0_0_10px_rgba(193,27,27,0.5)]" />

          <button
            onClick={() => scrollToSection("planos")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-red hover:bg-brand-red-light text-white font-display font-black text-xs tracking-widest uppercase transition-all duration-300 shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40 hover:scale-[1.02] cursor-pointer"
          >
            GARANTA SEU LANCE AGORA
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
