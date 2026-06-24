import { MapPin, Phone, Instagram } from "lucide-react";

export default function SiloFooter() {
  return (
    <footer className="w-full py-12 bg-neutral-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <img
          src="/assets/logo-totalfit.png"
          alt="Total Fit Academia"
          className="h-12 w-auto object-contain mx-auto mb-6 opacity-80"
        />

        <p className="text-neutral-400 font-sans text-sm max-w-md mx-auto mb-6">
          Total Fit Academia — a maior academia de Mangaratiba, localizada em El Ranchito, no Bairro do Saco.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-neutral-400 mb-8">
          <a
            href="https://wa.me/5521968774308"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand-red transition-colors"
          >
            <Phone className="w-4 h-4" />
            (21) 96877-4308
          </a>
          <span className="hidden sm:block text-neutral-700">|</span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Mangaratiba, RJ
          </span>
        </div>

        <p className="text-neutral-600 text-xs">
          © {new Date().getFullYear()} Total Fit Academia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
