import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Star, Award, MapPin, Sparkles, ShieldCheck, Dumbbell, Compass } from "lucide-react";

interface CounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, decimals = 0, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalTicks = 60;
    const increment = (end - start) / totalTicks;
    let currentTick = 0;

    const timer = setInterval(() => {
      currentTick++;
      start += increment;
      if (currentTick >= totalTicks) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(decimals)));
      }
    }, (duration * 1000) / totalTicks);

    return () => clearInterval(timer);
  }, [value, decimals, duration, isInView]);

  return (
    <span ref={ref} className="font-tech tabular-nums">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function BentoAbout() {
  return (
    <section id="sobre" className="relative w-full py-24 bg-obsidian bg-dot-grid overflow-hidden">
      {/* Dynamic ambient blur balls (hardcore athletic style) */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-red/5 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-80 h-80 rounded-full bg-brand-red-dark/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading with high contrast and aesthetic subtitle */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs tracking-widest uppercase mb-4"
          >
            <Compass className="w-3 h-3 text-brand-red" />
            CONHEÇA NOSSA HISTÓRIA
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase italic"
          >
            A MAIOR ACADEMIA DE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-red-light">MANGARATIBA ESTÁ EM EXPANSÃO</span>
          </motion.h2>
          <div className="w-16 h-1.5 bg-brand-red mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(193,27,27,0.5)]" />
        </div>

        {/* Bento Grid Assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Item 1: Narrative Block (2 columns wide, primary text) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 glassmorphism rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group"
          >
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/5 rounded-full filter blur-3xl pointer-events-none transition-opacity duration-300 group-hover:bg-brand-red/10" />
            
            <div className="relative z-10">
              <span className="font-tech text-xs text-brand-red tracking-widest uppercase font-semibold">NOSSA MAIOR MISSÃO</span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mt-4 uppercase tracking-wide">
                SUA MELHOR VERSÃO COMEÇA EM MANGARATIBA
              </h3>
              
              <div className="mt-6 space-y-4 text-neutral-300 font-sans text-sm md:text-base leading-relaxed">
                <p>
                  Localizada no coração de <strong className="text-white font-semibold">El Ranchito, no Bairro do Saco, em Mangaratiba</strong>, a <span className="text-white font-semibold">Total Fit Academia</span> é muito mais do que um espaço para a prática de musculação. Somos um ambiente dedicado à transformação de vidas, onde saúde, bem-estar, disciplina e superação caminham lado a lado.
                </p>
                <p>
                  Acreditamos que cada pessoa possui objetivos únicos e merece um acompanhamento que respeite suas necessidades, seu ritmo e seus desafios. Por isso, oferecemos um atendimento personalizado, com profissionais qualificados e comprometidos em proporcionar uma experiência segura, motivadora e eficiente.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-6 text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span className="font-tech text-xs tracking-wider">El Ranchito, Mangaratiba - RJ</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-tech text-xs tracking-wider">Estrutura de Alta Performance</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 2: Rating Statistics Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glassmorphism rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group border-brand-red/15 hover:border-brand-red/35 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(193,27,27,0.05)]"
          >
            {/* Back ambient card elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-red/10 rounded-full filter blur-2xl pointer-events-none" />
            
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
              </div>
              <span className="font-tech text-xs px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 font-semibold uppercase tracking-wider">RECOMMENDED</span>
            </div>

            <div className="my-8">
              <div className="font-display font-black text-6xl md:text-7xl text-white tracking-tight flex items-baseline">
                <AnimatedCounter value={4.7} decimals={1} />
                <span className="text-amber-500 text-3xl ml-1">★</span>
              </div>
              <h4 className="font-display font-bold text-lg text-white mt-2 uppercase tracking-wider">AVALIAÇÃO GOOGLE</h4>
              <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
                Média consagrada por nossos clientes como o espaço de treino mais aconchegante e eficiente da região.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-neutral-400 text-xs font-tech tracking-wider">
              <span>Satisfeitos</span>
              <span className="text-emerald-500 font-bold">100% SUCESSO</span>
            </div>
          </motion.div>

          {/* Bento Item 3: Count of Overall Reviews Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glassmorphism rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-brand-red/30 transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/25 flex items-center justify-center">
                <Award className="w-6 h-6 text-brand-red" />
              </div>
              <span className="font-tech text-xs px-2.5 py-1 rounded-md bg-brand-red/10 text-brand-red font-semibold uppercase tracking-wider">AUDITED</span>
            </div>

            <div className="my-8">
              <div className="font-display font-black text-5xl md:text-6xl text-white tracking-tight">
                +<AnimatedCounter value={4700} duration={1.8} />
              </div>
              <h4 className="font-display font-bold text-lg text-white mt-2 uppercase tracking-wider">AVALIAÇÕES REAIS</h4>
              <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
                Milhares de feedbacks expressando superação de recordes, suporte individualizado e emagrecimento saudável sustentável.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-neutral-400 text-xs font-tech tracking-wider">
              <span>Feedback Ativo</span>
              <span className="text-white">PROVA SOCIAL</span>
            </div>
          </motion.div>

          {/* Bento Item 4: Exclusividades & Diferenciais List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 glassmorphism rounded-3xl p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center h-full">
              <div>
                <span className="font-tech text-xs text-emerald-400 tracking-widest uppercase font-semibold mb-2 block">DIFERENCIAIS EXCLUSIVOS</span>
                <h3 className="font-display font-bold text-2xl text-white uppercase leading-tight">
                  POR QUE NOS ESCOLHER?
                </h3>
                <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                  Tratamos o fitness como engenharia corporal: alta performance, conforto espacial e metodologia moderna de treino para as suas metas particulares.
                </p>
                
                {/* Modality highlight widget */}
                <div className="mt-6 flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-2xl max-w-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center font-display font-black text-white">
                    6+
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs text-white uppercase">MODALIDADES</h5>
                    <p className="text-[10px] text-neutral-400">Artes marciais, jump, musculação e muito mais</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { text: "A maior academia de Mangaratiba", sub: "Estrutura ampla em constante expansão" },
                  { text: "Equipamentos novos e diferenciados", sub: "Máquinas modernas de alta performance" },
                  { text: "Foco total em resultados reais", sub: "Metodologia voltada para força, saúde e bem-estar" },
                  { text: "Ambiente de disciplina e constância", sub: "Espaço motivador para evoluir todo dia" },
                  { text: "Atendimento personalizado e acessível", sub: "Profissionais que acompanham sua jornada" }
                ].map((item, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    key={index} 
                    className="flex gap-3 text-left"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-red/15 flex items-center justify-center shrink-0 mt-0.5 border border-brand-red/30">
                      <Sparkles className="w-3 h-3 text-brand-red" />
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-xs text-neutral-100">{item.text}</h4>
                      <p className="text-[10px] text-neutral-400 leading-tight mt-0.5">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
