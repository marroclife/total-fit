import { useState } from "react";
import { motion } from "motion/react";
import { Snowflake, Lock, Droplets, Accessibility, Shirt, Wifi, ShieldCheck, Grid } from "lucide-react";
import { StructureFeature } from "../types";

const AMENITIES: StructureFeature[] = [
  { id: "ar", name: "Ar Condicionado", iconName: "Snowflake" },
  { id: "armarios", name: "Armários (Lockers)", iconName: "Lock" },
  { id: "chuveiro", name: "Chuveiros Individuais", iconName: "Droplets" },
  { id: "acessibilidade", name: "Acessibilidade Garantida", iconName: "Accessibility" },
  { id: "vestiario", name: "Vestiário Completo", iconName: "Shirt" },
  { id: "wifi", name: "Wi-Fi de Alta Velocidade", iconName: "Wifi" }
];

const renderIcon = (name: string, className: string) => {
  switch (name) {
    case "Snowflake": return <Snowflake className={className} />;
    case "Lock": return <Lock className={className} />;
    case "Droplets": return <Droplets className={className} />;
    case "Accessibility": return <Accessibility className={className} />;
    case "Shirt": return <Shirt className={className} />;
    case "Wifi": return <Wifi className={className} />;
    default: return <ShieldCheck className={className} />;
  }
};

export default function FullStructure() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="estrutura" className="relative w-full py-24 bg-obsidian border-t border-white/5 overflow-hidden">
      
      {/* Background Grid Pattern of Technical Accuracy */}
      <div className="absolute inset-0 bg-dot-grid-white opacity-20 pointer-events-none" />
      
      {/* Linear gradients separating the panels */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-brand-red/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-brand-red/15 to-transparent" />

      {/* Radiant backlight effect */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-48 rounded-full bg-brand-red/10 filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Module Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs tracking-widest uppercase mb-4"
          >
            <Grid className="w-3.5 h-3.5 text-brand-red" />
            INFRAESTRUTURA DE PONTA
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase italic tracking-tight"
          >
            ESTRUTURA COMPLETA <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red via-brand-red-light to-white text-glow-red select-text">COM MÁXIMO CONFORTO</span>
          </motion.h2>
          <div className="w-16 h-1.5 bg-brand-red mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(193,27,27,0.5)]" />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 text-neutral-400 font-sans text-xs sm:text-sm max-w-xl mx-auto leading-relaxed"
          >
            Nosso espaço foi idealizado sob as premissas de conforto extremo e fluidez física. Treine focado e desfrute de comodidades premium projetadas para o seu dia a dia agitado.
          </motion.p>
        </div>

        {/* Amenity Highlight Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {AMENITIES.map((item, index) => {
            const isHovered = hoveredId === item.id;
            
            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative rounded-2xl p-6 flex flex-col items-center justify-center text-center group border border-white/5 bg-neutral-900/20 backdrop-blur-md cursor-pointer h-40 transition-all duration-300"
                animate={{
                  borderColor: isHovered ? "rgba(193, 27, 27, 0.4)" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: isHovered 
                    ? "0 10px 30px rgba(193, 27, 27, 0.12)" 
                    : "0 4px 12px rgba(0, 0, 0, 0)",
                  y: isHovered ? -5 : 0
                }}
              >
                {/* Radial Glow fill background inside */}
                <motion.div 
                  className="absolute inset-0 bg-brand-red opacity-0 rounded-2xl z-0"
                  animate={{
                    opacity: isHovered ? 0.04 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Pop Animated Icon Frame */}
                <motion.div
                  className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-4 transition-colors relative z-10 ${
                    isHovered 
                      ? "bg-brand-red border-brand-red text-white" 
                      : "border-white/10 text-white"
                  }`}
                  animate={{
                    scale: isHovered ? 1.15 : 1,
                    boxShadow: isHovered ? "0 0 15px rgba(193, 27, 27, 0.4)" : "none"
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                >
                  {renderIcon(item.iconName, "w-6 h-6 transition-transform duration-300")}
                </motion.div>

                {/* Amenity Title Label */}
                <motion.span
                  className={`font-display font-bold text-xs uppercase tracking-widest relative z-10 transition-colors ${
                    isHovered ? "text-brand-red" : "text-neutral-400"
                  }`}
                >
                  {item.name}
                </motion.span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
