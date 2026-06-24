import { useState } from "react";
import { motion } from "motion/react";
import { Dumbbell, Zap, Target, TrendingUp, ShieldCheck, Flame, ChevronRight } from "lucide-react";

const MUSCLE_BENEFITS = [
  {
    icon: TrendingUp,
    title: "GANHO DE MASSA",
    description: "Protocolos progressivos de hipertrofia com cargas e volume controlados."
  },
  {
    icon: Flame,
    title: "QUEIMA DE GORDURA",
    description: "Treinos com alta demanda calórica e metabolismo acelerado."
  },
  {
    icon: Target,
    title: "DEFINIÇÃO MUSCULAR",
    description: "Exercícios isolados e técnicas avançadas para esculpir o físico."
  },
    {
      icon: ShieldCheck,
      title: "SAÚDE E BEM-ESTAR",
      description: "Correção postural e prevenção de lesões para treinar seguro e viver melhor."
    },
  {
    icon: Zap,
    title: "AUMENTO DE FORÇA",
    description: "Métodos de periodização para evolução constante de performance."
  },
  {
    icon: Dumbbell,
    title: "EQUIPAMENTO COMPLETO",
    description: "Máquinas, pesos livres, cabos e acessórios de alta qualidade."
  }
];

export default function ModalitiesCarousel() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <section id="modalidades" className="relative w-full py-24 bg-obsidian overflow-hidden">
      
      {/* Background with muscle-focused image and red tint */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center grayscale contrast-125 brightness-[0.25] filter blur-[1px] scale-105"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop)"
          }}
        />
        <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/85 to-obsidian pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/25 text-brand-red text-xs tracking-widest uppercase font-semibold mb-4"
          >
            <Dumbbell className="w-3.5 h-3.5" />
            ÁREA PRINCIPAL
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white mt-3 italic uppercase"
          >
            MUSCULAÇÃO DE VERDADE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-neutral-400">
              PARA RESULTADOS REAIS
            </span>
          </motion.h2>
          <div className="w-16 h-1.5 bg-brand-red mt-5 mx-auto rounded-full shadow-[0_0_10px_rgba(193,27,27,0.4)]" />
        </div>

        {/* Two column layout: description + benefits grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: main content and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-brand-red/30 text-brand-red text-xs tracking-widest uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
              NOSSA ESPECIALIDADE
            </div>
            
            <h3 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight italic leading-tight">
              A BASE DE TREINO DA <span className="text-brand-red">TOTAL FIT</span>
            </h3>
            
            <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed tracking-wide">
              A musculação é o coração da Total Fit Academia. Nosso espaço foi projetado para quem quer 
              ganhar massa, perder gordura, definir o corpo, melhorar a saúde ou simplesmente viver mais forte. 
              Com equipamentos modernos, professores que acompanham sua evolução e uma estrutura que respira 
              treino, você tem tudo para transformar limites em conquistas.
            </p>
            
            <p className="text-neutral-400 font-sans text-sm leading-relaxed">
              Não importa seu nível: iniciante, intermediário ou avançado. Aqui você treina com orientação 
              profissional, segurança e a intensidade certa para evoluir sem se machucar — com foco em 
              resultados reais, saúde e bem-estar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("planos")}
                className="px-8 py-4 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white font-display font-black text-xs tracking-widest uppercase transition-all duration-300 shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40 hover:scale-[1.02] flex items-center justify-center gap-2 pointer-events-auto cursor-pointer"
              >
                VER PLANOS DE MUSCULAÇÃO <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => window.open("https://wa.me/5521968774308?text=Olá! Quero saber mais sobre a área de musculação da Total Fit!", "_blank")}
                className="px-8 py-4 rounded-2xl border border-white/10 bg-neutral-900/60 hover:bg-neutral-900 text-white font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 pointer-events-auto cursor-pointer"
              >
                TIRAR DÚVIDAS
              </button>
            </div>
          </motion.div>

          {/* Right: benefits cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MUSCLE_BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative rounded-2xl p-6 border border-white/5 bg-neutral-950/60 backdrop-blur-md transition-all duration-300 cursor-pointer"
                  animate={{
                    borderColor: isHovered ? "rgba(193, 27, 27, 0.4)" : "rgba(255, 255, 255, 0.05)",
                    y: isHovered ? -4 : 0,
                    boxShadow: isHovered 
                      ? "0 10px 30px rgba(193, 27, 27, 0.12)" 
                      : "0 4px 12px rgba(0, 0, 0, 0)"
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isHovered 
                      ? "bg-brand-red text-white shadow-[0_0_15px_rgba(193,27,27,0.4)]" 
                      : "bg-neutral-900 border border-white/10 text-neutral-400"
                  }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h4 className={`font-display font-bold text-sm uppercase tracking-widest mb-2 transition-colors ${
                    isHovered ? "text-brand-red" : "text-white"
                  }`}
                  >
                    {benefit.title}
                  </h4>
                  
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom highlight bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-md p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 border border-brand-red/25 flex items-center justify-center shrink-0">
              <Dumbbell className="w-7 h-7 text-brand-red" />
            </div>
            <div className="text-left">
              <h4 className="font-display font-bold text-white uppercase tracking-wider text-sm">
                ÁREA DE MUSCULAÇÃO COMPLETA
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Equipamentos modernos, pesos livres, máquinas e ambiente climatizado.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => window.open("https://wa.me/5521968774308?text=Olá! Quero agendar uma aula experimental de musculação na Total Fit!", "_blank")}
            className="px-6 py-3 rounded-xl border border-brand-red/30 bg-brand-red/5 hover:bg-brand-red text-brand-red hover:text-white font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 whitespace-nowrap pointer-events-auto cursor-pointer"
          >
            AULA EXPERIMENTAL GRÁTIS
          </button>
        </motion.div>

      </div>
    </section>
  );
}
