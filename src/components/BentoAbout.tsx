import { motion } from "motion/react";
import { MapPin, Sparkles, ShieldCheck, Compass } from "lucide-react";

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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Bento Item 1: Narrative Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glassmorphism rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group h-full"
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

          {/* Bento Item 2: Diferenciais Exclusivos (logo + lista) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism rounded-3xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between h-full"
          >
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <img
                  src="/assets/logo-totalfit.png"
                  alt="Total Fit Academia"
                  className="h-16 w-auto object-contain opacity-90"
                />
              </div>

              <span className="font-tech text-xs text-emerald-400 tracking-widest uppercase font-semibold mb-2 block">
                DIFERENCIAIS EXCLUSIVOS
              </span>
              <h3 className="font-display font-bold text-2xl text-white uppercase leading-tight">
                POR QUE NOS ESCOLHER?
              </h3>

              <div className="mt-8 space-y-5 flex-1">
                {[
                  "Espaço amplo e em expansão constante",
                  "Equipamentos novos e diferenciados",
                  "Ambiente que motiva disciplina e constância",
                  "Estrutura, foco e resultado em um só lugar"
                ].map((text, index) => (
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
                      <h4 className="font-sans font-semibold text-sm text-neutral-100">{text}</h4>
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
