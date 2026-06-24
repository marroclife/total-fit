import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  scroll?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "/", scroll: false },
  { label: "Sobre", href: "/#sobre", scroll: false },
  { label: "Planos", href: "/#planos", scroll: false },
  { label: "Academia em Mangaratiba", href: "/academia-em-mangaratiba", scroll: false },
  { label: "Bairro do Saco", href: "/academia-no-bairro-do-saco", scroll: false },
  { label: "Musculação", href: "/musculacao-em-mangaratiba", scroll: false },
];

export default function SharedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = window.location.pathname === "/" || window.location.pathname === "/index.html";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (item: NavItem) => {
    if (isHome && item.href.startsWith("/#")) {
      const id = item.href.replace("/#", "");
      scrollToSection(id);
    } else {
      window.location.href = item.href;
    }
  };

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  const handleCTA = () => {
    if (isHome) {
      scrollToSection("planos");
    } else {
      window.location.href = "/#planos";
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 flex justify-between items-center max-w-7xl mx-auto w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/90 via-obsidian/60 to-transparent pointer-events-none rounded-b-3xl" />

      <div className="relative z-10 flex items-center gap-3 group cursor-pointer" onClick={handleLogoClick}>
        <img
          src="/assets/logo-totalfit.png"
          alt="Total Fit Academia"
          className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        />
      </div>

      <nav className="hidden lg:flex items-center gap-6 relative z-10">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item)}
            className="font-display font-medium text-[11px] tracking-widest text-neutral-400 hover:text-white uppercase transition-colors py-2 relative group cursor-pointer"
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-4 relative z-10">
        <button
          onClick={handleCTA}
          className="hidden sm:block px-5 py-2.5 rounded-full border border-brand-red/30 hover:border-brand-red bg-brand-red/5 text-brand-red hover:text-white font-display font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-brand-red shadow-xs hover:shadow-[0_0_15px_rgba(193,27,27,0.3)] cursor-pointer"
        >
          QUERO TREINAR
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-full border border-white/10 bg-neutral-900/60 text-white flex items-center justify-center cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-[60] bg-neutral-950/98 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto lg:hidden"
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 bg-neutral-900 text-white flex items-center justify-center cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
          <nav className="flex flex-col items-center gap-8">
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNavClick(item)}
                className="font-display font-black text-xl tracking-widest text-white uppercase transition-colors hover:text-brand-red cursor-pointer"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
