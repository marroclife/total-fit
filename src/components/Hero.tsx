import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Play, ArrowDown, ChevronRight, Activity, Menu, X } from "lucide-react";
import confetti from "canvas-confetti";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  primary?: boolean;
}

function MagneticButton({ children, className = "", onClick, primary = false }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for the magnetic pull
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for magnetic behavior
  const springConfig = { stiffness: 220, damping: 25, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Distance from center of button
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Pull intensity limit (e.g., maximum 24px)
    const maxPull = 24;
    const pullX = (distanceX / rect.width) * maxPull;
    const pullY = (distanceY / rect.height) * maxPull;

    x.set(pullX);
    y.set(pullY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // Particle burst on CTA click
  const triggerConfetti = (e: React.MouseEvent) => {
    // Elegant red burst
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: e.clientY / window.innerHeight, x: e.clientX / window.innerWidth },
      colors: ["#C11B1B", "#E31E24", "#7A1212", "#ffffff", "#1a1a1a"],
      ticks: 200,
      gravity: 1.2,
      scalar: 1,
    });
    
    if (onClick) {
      setTimeout(onClick, 600); // Allow explosion animation to play
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove as any}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onClick={triggerConfetti}
      className={`relative px-8 py-4 md:px-10 md:py-5 rounded-full font-display font-medium text-sm tracking-widest uppercase transition-colors duration-300 pointer-events-auto ${className}`}
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        scale: isHovered ? 1.05 : 1,
        boxShadow: isHovered 
          ? primary 
            ? "0 10px 30px rgba(193, 27, 27, 0.4)" 
            : "0 10px 30px rgba(255, 255, 255, 0.05)"
          : "0 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Background glow overlay */}
      {primary && (
        <motion.span 
          className="absolute inset-0 rounded-full bg-linear-to-r from-brand-red to-brand-red-light opacity-100 z-0"
          animate={{
            filter: isHovered ? "brightness(1.15)" : "brightness(1)",
          }}
        />
      )}
      {!primary && (
        <span className="absolute inset-0 rounded-full bg-steel/90 border border-glass-border hover:border-white/30 z-0 transition-colors" />
      )}
      
      {/* Label Text */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

export default function Hero() {
  const words = ["A", "MAIOR", "ACADEMIA", "DE", "MANGARATIBA"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to customized target
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset header if needed
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const navItems = ["Inicio", "Sobre", "Modalidades", "Estrutura", "Planos", "Contato"];

  return (
    <section id="inicio" className="relative w-full min-h-screen h-auto overflow-hidden flex flex-col justify-between items-center bg-obsidian pointer-events-none pb-safe">
      {/* Background Image Engine */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-obsidian">
        {/* Soft elegant vignette mesh - lighter on the left side */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/20 to-obsidian z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-obsidian/70 z-10 pointer-events-none" />
        
        {/* Red cinematic tint overlay for brand cohesion - subtle */}
        <div className="absolute inset-0 bg-brand-red/5 mix-blend-overlay z-10 pointer-events-none" />
        
        {/* Hero Background Image */}
        <img
          src="/assets/hero-musculacao.png"
          alt="Total Fit Academia - Área de Musculação"
          className="w-full h-full object-cover object-center grayscale-[30%] contrast-110 brightness-[0.75] scale-100 pointer-events-none"
        />
      </div>

      {/* Decorative Grid Overlay (Tech Performance feeling) */}
      <div className="absolute inset-0 bg-dot-grid-white opacity-25 z-[5] pointer-events-none" />

      {/* Header Slot (Floating Navigation) */}
      <header className="relative w-full z-20 px-6 py-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto pointer-events-auto bg-gradient-to-b from-obsidian/80 via-obsidian/40 to-transparent">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection("inicio")}>
          <img 
            src="/assets/logo-totalfit.png" 
            alt="Total Fit Academia" 
            className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="font-display font-medium text-xs tracking-widest text-neutral-400 hover:text-white uppercase transition-colors py-2 relative group cursor-pointer"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection("planos")}
            className="hidden sm:block px-5 py-2.5 rounded-full border border-brand-red/30 hover:border-brand-red bg-brand-red/5 text-brand-red hover:text-white font-display font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-brand-red shadow-xs hover:shadow-[0_0_15px_rgba(193,27,27,0.3)] cursor-pointer"
          >
            QUERO TREINAR
          </button>
          
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-neutral-900/60 text-white flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[60] bg-neutral-950/98 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto md:hidden"
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 bg-neutral-900 text-white flex items-center justify-center cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="font-display font-black text-2xl tracking-widest text-white uppercase transition-colors hover:text-brand-red cursor-pointer"
              >
                {item}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Main Impact Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-1">
        
        {/* Elite Minimal Active Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/25 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
          <span className="font-tech font-semibold text-xs text-brand-red tracking-widest uppercase">
            SUA MELHOR VERSÃO COMEÇA AQUI
          </span>
        </motion.div>

        {/* Cinematic Headlines with Split Word reveal */}
        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white select-none">
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 overflow-hidden pb-3">
            {words.map((word, i) => {
              const isAccent = word === "MANGARATIBA";
              return (
                <div key={i} className="overflow-hidden inline-block h-full align-bottom">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.075, 0.82, 0.165, 1],
                      delay: 0.3 + i * 0.12,
                    }}
                    className={`inline-block ${
                      isAccent 
                        ? "text-transparent bg-clip-text bg-linear-to-r from-brand-red via-brand-red-light to-white text-glow-red font-black italic select-text" 
                        : "text-white select-text"
                    }`}
                  >
                    {word}
                  </motion.span>
                </div>
              );
            })}
          </div>
        </h1>

        {/* Sleek support tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-6 text-neutral-400 font-sans text-sm md:text-lg max-w-xl leading-relaxed tracking-wide"
        >
          A maior academia de Mangaratiba está em constante evolução. 
          Estrutura ampla, equipamentos novos e um ambiente feito para quem busca disciplina e resultados reais.
        </motion.p>

        {/* Dynamic Magnetic Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full"
        >
          <MagneticButton 
            className="w-full sm:w-auto text-white" 
            primary 
            onClick={() => scrollToSection("planos")}
          >
            COMEÇAR AGORA <ChevronRight className="w-4 h-4 text-white" />
          </MagneticButton>
          
          <MagneticButton 
            className="w-full sm:w-auto text-neutral-300 hover:text-white"
            onClick={() => scrollToSection("sobre")}
          >
            CONHECER ACADEMIA <Play className="w-4 h-4 fill-white text-white ml-1" />
          </MagneticButton>
        </motion.div>
      </div>

      {/* Floating Bottom Status Bar - hidden on mobile, shown on sm+ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="relative z-10 w-full px-6 py-4 md:px-12 hidden sm:flex justify-between items-center max-w-7xl mx-auto border-t border-white/5 pointer-events-auto"
      >
        <div className="flex items-center gap-8">
          <div className="flex flex-col text-left">
            <span className="font-tech text-xs text-neutral-500 tracking-wider">SUPORTE INTEGRAL</span>
            <span className="font-display font-bold text-xs text-neutral-300 tracking-widest uppercase">DOMINGO A DOMINGO</span>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-tech text-xs text-neutral-500 tracking-wider">LOCALIZAÇÃO</span>
            <span className="font-display font-bold text-xs text-neutral-300 tracking-widest uppercase">MANGARATIBA, RJ</span>
          </div>
        </div>

        {/* Animated bounce scroll down signal */}
        <button
          onClick={() => scrollToSection("sobre")}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 hover:border-brand-red/50 text-neutral-500 hover:text-brand-red transition-colors duration-300 bg-obsidian/50 group cursor-pointer"
          aria-label="Scroll Down"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
