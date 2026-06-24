import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Clock, Instagram, Send, Compass, ExternalLink } from "lucide-react";

export default function ContactAndLocation() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contactInfo = [
    {
      id: "endereco",
      title: "NOSSO ENDEREÇO",
      value: "Estr. São João Marcos, 81 - El Ranchito/Bairro do Saco",
      city: "Mangaratiba - RJ, 23860-000",
      icon: <MapPin className="w-6 h-6 text-brand-red" />,
      detail: "No coração do Bairro do Saco, de fácil acesso e estacionamento",
      link: "https://maps.google.com/?q=Estrada+Sao+Joao+Marcos+81+Mangaratiba"
    },
    {
      id: "whatsapp",
      title: "FALE NO WHATSAPP",
      value: "(21) 96877-4308",
      city: "Atendimento imediato para dúvidas",
      icon: <Phone className="w-6 h-6 text-emerald-500" />,
      detail: "Clique para tirar dúvidas sobre planos e parcerias",
      link: "https://wa.me/5521968774308"
    },
    {
      id: "horario",
      title: "HORÁRIOS DE ATIVIDADE",
      value: "Segunda a Sexta: 06h - 22h",
      city: "Sáb: 08h - 12h | Dom: 09h - 12h",
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      detail: "Aberto de domingo a domingo para nenhum treino ficar para trás",
      link: null
    },
    {
      id: "instagram",
      title: "SIGA NO INSTAGRAM",
      value: "@totalfitacademia",
      city: "Vídeos da rotina, treinos e eventos",
      icon: <Instagram className="w-6 h-6 text-brand-red" style={{ color: "#C11B1B" }} />,
      detail: "Acompanhe nossa comunidade ativa nas redes sociais",
      link: "https://instagram.com/totalfitacademia"
    }
  ];

  return (
    <section id="contato" className="relative w-full py-24 bg-neutral-950 border-t border-white/5 overflow-hidden">
      
      {/* Mesh glow effects */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-brand-red/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-red-dark/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Module Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs tracking-widest uppercase mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-brand-red" />
            CONTATO & LOCALIZAÇÃO
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase italic tracking-tight"
          >
            SABEMOS ONDE VOCÊ QUER CHEGAR <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-neutral-400">FAÇA-NOS UMA VISITA HOJE</span>
          </motion.h2>
          <div className="w-16 h-1.5 bg-brand-red mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(193,27,27,0.5)]" />
        </div>

        {/* Dynamic Split Layout: Coordinates & high-tech simulated map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card List coordinate elements */}
          <div className="lg:col-span-5 space-y-4">
            {contactInfo.map((info) => {
              const isHovered = hoveredCard === info.id;
              const hasLink = info.link !== null;
              
              return (
                <motion.div
                  key={info.id}
                  onMouseEnter={() => setHoveredCard(info.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => {
                    if (info.link) {
                      window.open(info.link, "_blank");
                    }
                  }}
                  className={`rounded-2xl p-5 border text-left flex gap-4 transition-all duration-300 relative overflow-hidden ${
                    hasLink ? "cursor-pointer" : "cursor-default"
                  } ${
                    isHovered 
                      ? "border-brand-red/40 bg-neutral-900/50" 
                      : "border-white/5 bg-neutral-900/10 backdrop-blur-md"
                  }`}
                  animate={{
                    x: isHovered && hasLink ? 6 : 0,
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                    isHovered ? "bg-white/5 border-white/10" : "bg-neutral-900 border-white/5"
                  }`}>
                    {info.icon}
                  </div>

                  <div className="space-y-1">
                    <span className="font-tech text-[10px] text-neutral-500 tracking-widest uppercase font-semibold block">
                      {info.title}
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base text-white tracking-wide">
                      {info.value}
                    </h4>
                    <p className="font-sans text-[11px] sm:text-xs text-neutral-400 leading-tight">
                      {info.city}
                    </p>
                    <p className="font-sans text-[10px] text-neutral-500 pt-1">
                      {info.detail}
                    </p>
                  </div>

                  {hasLink && (
                    <div className="absolute right-4 top-4 hover:text-white transition-colors">
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* High-tech simulated Premium Dark Map */}
          <div className="lg:col-span-7 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-[450px] rounded-3xl border border-white/5 relative overflow-hidden bg-neutral-900 flex flex-col justify-between p-8"
              style={{
                backgroundImage: "radial-gradient(ellipse at center, rgba(15,15,15,1) 0%, rgba(10,10,10,1) 100%)",
              }}
            >
              {/* Mesh visual dots */}
              <div className="absolute inset-0 bg-dot-grid-white opacity-40 mix-blend-screen pointer-events-none" />

              {/* Vector Lines denoting high tech coordinates */}
              <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,150 Q150,120 300,240 T600,200" fill="none" stroke="rgba(193, 27, 27, 0.4)" strokeWidth="1.5" strokeDasharray="5,5" />
                <path d="M50,400 Q200,320 400,350 T700,100" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                <circle cx="350" cy="235" r="120" fill="none" stroke="rgba(193,27,27,0.1)" strokeWidth="1" className="animate-ping" style={{ animationDuration: "5s" }} />
                <circle cx="350" cy="235" r="60" fill="none" stroke="rgba(193,27,27,0.15)" strokeWidth="1" />
              </svg>

              {/* Header inside the simulated map panel */}
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <span className="font-tech text-xs text-brand-red tracking-widest font-black uppercase">GPS MONITOR</span>
                  <h4 className="font-display font-medium text-xs text-white uppercase tracking-widest mt-1">MANGARATIBA AXIS COORDS</h4>
                </div>
                
                <div className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-tech text-[10px] uppercase font-bold tracking-widest">
                  ✔ LIVE CONNECTED
                </div>
              </div>

              {/* Map Centered Glowing Marker */}
              <div className="absolute top-[235px] left-[350px] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                
                {/* Physical Marker */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-full bg-brand-red/25 border-2 border-brand-red flex items-center justify-center shadow-[0_0_20px_rgba(193,27,27,0.8)] cursor-pointer"
                  onClick={() => window.open("https://maps.google.com/?q=Estrada+Sao+Joao+Marcos+81+Mangaratiba", "_blank")}
                >
                  <MapPin className="w-5 h-5 text-white" />
                </motion.div>
                
                {/* Visual Label Tag */}
                <div className="mt-2.5 bg-neutral-950/90 border border-brand-red/30 px-3.5 py-1.5 rounded-lg backdrop-blur-md">
                  <span className="font-display font-black text-[10px] text-white tracking-wider uppercase block">TOTAL FIT</span>
                  <span className="text-[8px] text-neutral-400 block font-sans tracking-wide">El Ranchito, Saco</span>
                </div>
              </div>

              {/* Footer map tools with active Google Maps redirection action */}
              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 bg-neutral-950/80 border border-white/5 backdrop-blur-md rounded-2xl p-4 mt-auto">
                <div className="text-left">
                  <h5 className="font-display font-bold text-xs text-white uppercase tracking-wide">MAPA DE ROTAS INTERATIVO</h5>
                  <p className="text-[10px] text-neutral-500 mt-0.5 leading-tight">Estr. São João Marcos, 81 - Bairro do Saco</p>
                </div>

                <a
                  href="https://maps.google.com/?q=Estrada+Sao+Joao+Marcos+81+Mangaratiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-brand-red hover:bg-brand-red-light font-display font-black text-[10px] tracking-widest uppercase text-white hover:shadow-lg hover:shadow-brand-red/20 text-center transition-all flex items-center justify-center gap-2 pointer-events-auto"
                >
                  ABRIR NO GOOGLE MAPS <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
