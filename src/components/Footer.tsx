import { Instagram, Send } from "lucide-react";

export default function Footer() {
  const scrollto = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-16 px-6 relative overflow-hidden">
      
      {/* Visual background vector accents */}
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-red/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">
          
          {/* Logo & Slogan */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollto("inicio")}>
              <img 
                src="/assets/logo-totalfit.png" 
                alt="Total Fit Academia" 
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <p className="text-neutral-400 font-sans text-xs sm:text-sm max-w-sm leading-relaxed">
              A maior e mais bem integrada infraestrutura de treinamento físico e mental em Mangaratiba. Equipamentos de alto padrão com um preço acessível de verdade.
            </p>
            
            <div className="pt-2">
              <span className="text-xs text-neutral-500 font-tech font-bold uppercase tracking-wider block">Motto Oficial</span>
              <span className="text-white font-display font-black text-sm italic uppercase tracking-widest text-glow-red mt-1 block">
                SUA META, NOSSO OBJETIVO.
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display font-bold text-xs text-neutral-200 tracking-widest uppercase mb-6">
              LINKS RÁPIDOS
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Início", id: "inicio" },
                { name: "Sobre Nós", id: "sobre" },
                { name: "Modalidades", id: "modalidades" },
                { name: "Estrutura", id: "estrutura" },
                { name: "Escolha Seu Plano", id: "planos" },
                { name: "Contato", id: "contato" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollto(link.id)}
                    className="text-neutral-400 hover:text-brand-red font-sans text-xs sm:text-sm transition-colors cursor-pointer block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Siga-nos & Newsletter Social Column */}
          <div>
            <h4 className="font-display font-bold text-xs text-neutral-200 tracking-widest uppercase mb-6">
              REDES & SUPORTE
            </h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://instagram.com/totalfitacademia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all text-xs font-mono tracking-wider"
              >
                <Instagram className="w-4 h-4 text-brand-red" />
                @totalfitacademia
              </a>
              
              <a 
                href="https://wa.me/5521968774308" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all text-xs font-mono tracking-wider"
              >
                <Send className="w-4 h-4 text-emerald-500" />
                Suporte WhatsApp
              </a>
            </div>

            <div className="mt-8">
              <span className="text-[10px] text-neutral-600 block uppercase tracking-widest font-mono">Status da Unidade</span>
              <span className="text-emerald-500 font-display font-medium text-xs flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                UNIDADE DE PORTAS ABERTAS
              </span>
            </div>
          </div>

        </div>

        {/* Divider bar */}
        <hr className="border-white/5 my-8" />

        {/* Bottom Rights Block */}
        <div className="flex flex-col items-center gap-3 text-center text-xs text-neutral-500 font-mono">
          <a 
            href="https://marroc.xyz/solutions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-widest text-neutral-600 hover:text-brand-red font-bold transition-colors cursor-pointer"
          >
            Developed by Marroc Solutions
          </a>
          <span>
            © 2026 Total Fit Academia - Mangaratiba, RJ. Todos os direitos reservados.
          </span>
        </div>

      </div>
    </footer>
  );
}
