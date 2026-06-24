import { motion } from "motion/react";
import { Check, MapPin, Phone, Send, Clock, Dumbbell } from "lucide-react";

interface Differential {
  text: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface SiloContentProps {
  intro: string[];
  differentials: Differential[];
  structureTitle: string;
  structureText: string;
  faqs: FAQ[];
  ctaTitle: string;
  ctaButton: string;
  whatsappMessage: string;
}

export default function SiloContent({
  intro,
  differentials,
  structureTitle,
  structureText,
  faqs,
  ctaTitle,
  ctaButton,
  whatsappMessage,
}: SiloContentProps) {
  const triggerWhatsApp = () => {
    window.open(`https://wa.me/5521968774308?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <section className="relative w-full py-24 bg-obsidian overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid-white opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-neutral-300 font-sans text-base md:text-lg leading-relaxed mb-16"
        >
          {intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        {/* Diferenciais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glassmorphism rounded-3xl p-8 md:p-10 mb-16"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white uppercase mb-8">
            Por que escolher a Total Fit?
          </h2>
          <div className="space-y-4">
            {differentials.map((item, index) => (
              <div key={index} className="flex gap-3 text-left">
                <div className="w-6 h-6 rounded-full bg-brand-red/15 flex items-center justify-center shrink-0 mt-0.5 border border-brand-red/30">
                  <Check className="w-3.5 h-3.5 text-brand-red" />
                </div>
                <h3 className="font-sans font-semibold text-base md:text-lg text-neutral-100">
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Estrutura */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glassmorphism rounded-3xl p-8 md:p-10 mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/25 flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-brand-red" />
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white uppercase">
              {structureTitle}
            </h2>
          </div>
          <p className="text-neutral-300 font-sans text-base md:text-lg leading-relaxed">
            {structureText}
          </p>
          <p className="text-xs text-neutral-500 mt-4">
            * Em breve: galeria de fotos da academia.
          </p>
        </motion.div>

        {/* Localização e contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          <div className="glassmorphism rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-brand-red" />
              <h3 className="font-display font-bold text-lg text-white uppercase">Onde estamos</h3>
            </div>
            <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed">
              Estr. São João Marcos, 81 — El Ranchito/Bairro do Saco<br />
              Mangaratiba, RJ
            </p>
          </div>

          <div className="glassmorphism rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-brand-red" />
              <h3 className="font-display font-bold text-lg text-white uppercase">Funcionamento</h3>
            </div>
            <p className="text-neutral-300 font-sans text-sm md:text-base leading-relaxed">
              Segunda a Sexta: 06h às 22h<br />
              Sábado: 08h às 12h<br />
              Domingo: 09h às 12h
            </p>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white uppercase mb-8 text-center">
            Perguntas frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glassmorphism rounded-2xl p-6">
                <h3 className="font-display font-bold text-base text-white uppercase mb-2">
                  {faq.question}
                </h3>
                <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-3xl border border-brand-red/30 bg-neutral-900/70 backdrop-blur-md p-10 text-center"
        >
          <div className="flex items-baseline justify-center mb-2">
            <span className="font-display font-bold text-xl text-neutral-400 uppercase tracking-widest mr-2">R$</span>
            <span className="font-display font-black text-6xl text-white tracking-tighter">85,00</span>
          </div>
          <p className="text-neutral-400 font-tech text-xs tracking-widest uppercase mb-6">
            Planos a partir de
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white uppercase mb-6">
            {ctaTitle}
          </h2>
          <button
            onClick={triggerWhatsApp}
            className="inline-flex items-center gap-2 px-10 py-4.5 rounded-2xl bg-brand-red hover:bg-brand-red-light text-white font-display font-black text-xs tracking-widest uppercase transition-all duration-300 shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40 hover:scale-[1.02] cursor-pointer"
          >
            {ctaButton} <Send className="w-4 h-4" />
          </button>
          <div className="mt-6 flex items-center justify-center gap-2 text-neutral-400 text-sm">
            <Phone className="w-4 h-4 text-brand-red" />
            <span>(21) 96877-4308</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
