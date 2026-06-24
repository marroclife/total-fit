import SiloHero from "./components/SiloHero";
import SiloContent from "./components/SiloContent";
import SiloFooter from "./components/SiloFooter";

type SiloData = {
  title: string;
  subtitle: string;
  location: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  differentials: { text: string }[];
  structureTitle: string;
  structureText: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaButton: string;
  whatsappMessage: string;
};

const SILOS: Record<string, SiloData> = {
  "academia-em-mangaratiba": {
    title: "Academia em Mangaratiba",
    subtitle: "A maior academia de Mangaratiba está em expansão para entregar ainda mais para você.",
    location: "Mangaratiba, RJ",
    metaTitle: "Academia em Mangaratiba | Total Fit — A Maior Academia da Cidade",
    metaDescription: "Procurando academia em Mangaratiba? A Total Fit é a maior academia da cidade, com estrutura ampla, equipamentos novos e planos a partir de R$ 85,00. Venha conhecer!",
    intro: [
      "Se você busca uma academia em Mangaratiba que ofereça estrutura de verdade, ambiente motivador e acompanhamento profissional, a Total Fit Academia é o lugar certo.",
      "Localizada no coração de El Ranchito, no Bairro do Saco, a Total Fit é a maior academia de Mangaratiba. Nosso espaço foi pensado para quem quer treinar com disciplina, constância e foco em resultados reais.",
      "Aqui, você encontra espaço amplo e em expansão constante, equipamentos novos e diferenciados, ambiente que motiva disciplina e constância, e estrutura, foco e resultado em um só lugar."
    ],
    differentials: [
      { text: "Espaço amplo e em expansão constante" },
      { text: "Equipamentos novos e diferenciados" },
      { text: "Ambiente que motiva disciplina e constância" },
      { text: "Estrutura, foco e resultado em um só lugar" },
    ],
    structureTitle: "Nossa estrutura",
    structureText: "A Total Fit conta com uma estrutura ampla, equipamentos modernos para musculação e um ambiente pensado para quem leva o treino a sério. Estamos em expansão com a ampliação de um novo andar, trazendo mais conforto e tecnologia para os nossos alunos.",
    faqs: [
      { question: "A Total Fit fica em qual bairro de Mangaratiba?", answer: "Ficamos em El Ranchito, no Bairro do Saco, na Estrada São João Marcos, 81." },
      { question: "Quais são os horários de funcionamento?", answer: "Segunda a sexta, das 06h às 22h. Sábado, das 08h às 12h. Domingo, das 09h às 12h." },
      { question: "A academia tem musculação?", answer: "Sim. A musculação é a principal modalidade da Total Fit, com equipamentos novos e acompanhamento profissional." },
      { question: "Quanto custa a mensalidade?", answer: "Nossos planos começam a partir de R$ 85,00. Entre em contato pelo WhatsApp para saber a melhor opção para o seu objetivo." },
    ],
    ctaTitle: "Comece a treinar na maior academia de Mangaratiba",
    ctaButton: "FALAR NO WHATSAPP",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a academia em Mangaratiba.",
  },
  "academia-no-bairro-do-saco": {
    title: "Academia no Bairro do Saco",
    subtitle: "Treine perto de casa, com a estrutura da maior academia de Mangaratiba.",
    location: "Bairro do Saco, Mangaratiba",
    metaTitle: "Academia no Bairro do Saco, Mangaratiba | Total Fit",
    metaDescription: "Academia no Bairro do Saco? A Total Fit fica em El Ranchito, oferece estrutura ampla, equipamentos novos e planos a partir de R$ 85,00. Venha treinar!",
    intro: [
      "Morar no Bairro do Saco e quer treinar sem ter que ir longe? A Total Fit Academia fica no coração de El Ranchito, a poucos minutos da sua rotina diária.",
      "Somos a maior academia de Mangaratiba, e estamos em constante expansão para oferecer ainda mais conforto e estrutura para quem mora e trabalha perto do bairro.",
      "A Total Fit é muito mais do que um espaço para musculação. Somos um ambiente dedicado à transformação de vidas, onde saúde, bem-estar, disciplina e superação caminham lado a lado."
    ],
    differentials: [
      { text: "Espaço amplo e em expansão constante" },
      { text: "Equipamentos novos e diferenciados" },
      { text: "Ambiente que motiva disciplina e constância" },
      { text: "Estrutura, foco e resultado em um só lugar" },
    ],
    structureTitle: "Nossa estrutura",
    structureText: "Estrutura ampla, equipamentos modernos para musculação e ambiente motivador. A academia está em expansão com um novo andar, trazendo mais conforto para quem treina no Bairro do Saco.",
    faqs: [
      { question: "A Total Fit fica no Bairro do Saco?", answer: "Sim. Ficamos em El Ranchito, no Bairro do Saco, na Estrada São João Marcos, 81." },
      { question: "Qual o endereço exato?", answer: "Estrada São João Marcos, 81 — El Ranchito/Bairro do Saco, Mangaratiba/RJ." },
      { question: "A academia tem estacionamento?", answer: "Entre em contato pelo WhatsApp para confirmar a disponibilidade de estacionamento no dia da sua visita." },
      { question: "Quais são os planos?", answer: "Planos a partir de R$ 85,00. Fale conosco pelo WhatsApp para conhecer as opções." },
    ],
    ctaTitle: "Treine perto de casa no Bairro do Saco",
    ctaButton: "FALAR NO WHATSAPP",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a academia no Bairro do Saco.",
  },
  "musculacao-em-mangaratiba": {
    title: "Musculação em Mangaratiba",
    subtitle: "Treino de musculação completo, na maior academia de Mangaratiba.",
    location: "Mangaratiba, RJ",
    metaTitle: "Musculação em Mangaratiba | Total Fit — A Maior Academia da Cidade",
    metaDescription: "Procurando musculação em Mangaratiba? A Total Fit tem equipamentos novos, professores qualificados e planos a partir de R$ 85,00. Comece agora!",
    intro: [
      "A musculação é a base da Total Fit Academia. Se você procura musculação em Mangaratiba com equipamentos modernos, ambiente motivador e acompanhamento profissional, aqui é o seu lugar.",
      "Nosso espaço de musculação foi projetado para quem quer ganhar massa muscular, perder gordura, definir o corpo, melhorar a saúde e o bem-estar, ou simplesmente viver mais forte.",
      "Com equipamentos novos e diferenciados, professores que acompanham sua evolução e uma estrutura que respira treino, você tem tudo para transformar limites em conquistas."
    ],
    differentials: [
      { text: "Equipamentos novos e diferenciados" },
      { text: "Professores que acompanham sua evolução" },
      { text: "Ambiente motivador e focado em resultados" },
      { text: "Treino para todos os níveis: iniciante a avançado" },
    ],
    structureTitle: "Nossa estrutura de musculação",
    structureText: "Máquinas, pesos livres, cabos e acessórios de alta qualidade. Nosso espaço de musculação foi pensado para quem busca resultados reais, com segurança e acompanhamento profissional.",
    faqs: [
      { question: "A Total Fit tem musculação em Mangaratiba?", answer: "Sim. A musculação é a principal modalidade da academia, com equipamentos novos e acompanhamento profissional." },
      { question: "A musculação é indicada para iniciantes?", answer: "Sim. Nossos professores acompanham cada aluno de acordo com seu nível, objetivo e ritmo." },
      { question: "Quais equipamentos a academia tem?", answer: "Máquinas de musculação, pesos livres, cabos e acessórios de alta qualidade." },
      { question: "Quanto custa treinar musculação na Total Fit?", answer: "Planos a partir de R$ 85,00. Entre em contato pelo WhatsApp para saber a melhor opção." },
    ],
    ctaTitle: "Comece sua musculação na maior academia de Mangaratiba",
    ctaButton: "FALAR NO WHATSAPP",
    whatsappMessage: "Olá! Gostaria de saber mais sobre musculação em Mangaratiba.",
  },
};

function getSiloKey(): string {
  const path = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "");
  const key = path || "academia-em-mangaratiba";
  return SILOS[key] ? key : "academia-em-mangaratiba";
}

export default function SiloApp() {
  const key = getSiloKey();
  const silo = SILOS[key];

  // Atualiza meta tags dinamicamente
  document.title = silo.metaTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", silo.metaDescription);
  }

  return (
    <div className="relative min-h-screen bg-obsidian text-neutral-100 font-sans selection:bg-brand-red selection:text-white">
      <SiloHero
        title={silo.title}
        subtitle={silo.subtitle}
        location={silo.location}
      />
      <SiloContent
        intro={silo.intro}
        differentials={silo.differentials}
        structureTitle={silo.structureTitle}
        structureText={silo.structureText}
        faqs={silo.faqs}
        ctaTitle={silo.ctaTitle}
        ctaButton={silo.ctaButton}
        whatsappMessage={silo.whatsappMessage}
      />
      <SiloFooter />
    </div>
  );
}
