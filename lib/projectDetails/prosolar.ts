import type { ProjectDetail } from "@/lib/projectBlocks";
import { format, type Locale } from "@/lib/i18n/config";
import coverImage from "@/assets/images/project/prosolar/prosolar.png";
import oldBrandingImage from "@/assets/images/project/prosolar/old.jpg";
import uiStyleDesktop from "@/assets/images/project/prosolar/uistyle.png";
import uiStyleMobile from "@/assets/images/project/prosolar/uistyle-mobile.png";
import graphics1 from "@/assets/images/project/prosolar/graphics-01.jpg";
import graphics2 from "@/assets/images/project/prosolar/graphics-02.jpg";
import graphics3 from "@/assets/images/project/prosolar/graphics-03.jpg";
import graphics4 from "@/assets/images/project/prosolar/graphics-04.jpg";
import graphics5 from "@/assets/images/project/prosolar/graphics-05.jpg";
import graphics6 from "@/assets/images/project/prosolar/graphics-06.jpg";
import resultImage from "@/assets/images/project/prosolar/Prosolar-single.jpg";

const en = {
  subtitle: "5 years of brand work that now feeds lead-gen campaigns generating 5,500+ leads.",
  seoTitle: "Prosolar Case Study",
  seoDescription:
    "Five years of brand work for Prosolar Systems: a unified identity, social media and web design for a solar company across the US and Caribbean, led by Natalia.",
  intro:
    "Prosolar Systems is a solar energy company operating across multiple franchise markets in the US and Caribbean, California, Florida, Puerto Rico, St. Thomas, and the Caribbean.",
  roleHeading: "My role",
  roleText:
    "Brand identity redesign and system development, web design, landing pages, and social media design. Ongoing collaboration over 5 years.",
  fields: {
    year: "Year",
    industry: "Industry",
    industryValue: "Solar Energy System",
    client: "Client",
  },
  prototype: "Prototype",
  challengeHeading: "The Challenge",
  challengeText:
    "Despite 5 years of growth, the brand had no unified visual system: inconsistent color usage, a logo that didn't scale across applications, no defined typography, and no guidelines to ensure coherence across locations. Each franchise was communicating differently, which undermined trust and recognition.",
  oldBrandingAlt: "Old Prosolar branding",
  oldBrandingCaption: "Old Branding",
  decisionsHeading: "Key decisions",
  decisions: [
    "Color: Green-to-blue gradient built around meaning, sustainability meets technology. Designed to work from van wraps to social media icons",
    "Logo: Rebuilt for functionality, safe zones, misuse rules, icon and app versions defined",
    "Typography: Poppins as primary for its technical clarity and approachable tone. Secondary decorative system defined for campaigns without breaking consistency",
    "Photography: Regional approach, real installations per market (Caribbean, California, Puerto Rico, Florida) for authenticity over stock",
    "Applications: System extended to uniforms, vehicle wraps, merchandising, partner logos, and Prosolar Shop",
  ],
  uiStyleHeading: "UI Style",
  uiStyleAlt: "Prosolar UI style board",
  socialHeading: "Social Media",
  graphicAlt: "Prosolar social media graphic {n}",
  websiteHeading: "Website",
  websiteText:
    "Designed around the customer journey: who they are, real projects, financing options, testimonials, conversion. Separate landing pages per service. Full brand system applied digitally.",
  resultHeading: "The Result",
  resultText:
    "A complete brand system capable of scaling across markets and franchise locations, with documented guidelines that any team or market could follow independently. The brand went from inconsistent to immediately recognizable, whether on a van in California or a social media post in Puerto Rico.",
  resultAlt: "Prosolar brand system overview",
};

type Copy = typeof en;

const es: Copy = {
  subtitle:
    "5 años de trabajo de marca que hoy alimentan campañas de generación de leads con más de 5.500 leads.",
  seoTitle: "Caso de estudio Prosolar",
  seoDescription:
    "Cinco años de trabajo de marca para Prosolar Systems: identidad unificada, redes sociales y diseño web para una empresa solar en EE. UU. y el Caribe, liderado por Natalia.",
  intro:
    "Prosolar Systems es una empresa de energía solar que opera en varios mercados de franquicias de EE. UU. y el Caribe: California, Florida, Puerto Rico, St. Thomas y el Caribe.",
  roleHeading: "Mi rol",
  roleText:
    "Rediseño de la identidad de marca y desarrollo del sistema, diseño web, landing pages y diseño para redes sociales. Colaboración continua durante 5 años.",
  fields: {
    year: "Año",
    industry: "Sector",
    industryValue: "Sistemas de energía solar",
    client: "Cliente",
  },
  prototype: "Prototipo",
  challengeHeading: "El desafío",
  challengeText:
    "A pesar de 5 años de crecimiento, la marca no tenía un sistema visual unificado: uso inconsistente del color, un logo que no escalaba entre aplicaciones, tipografía sin definir y ninguna guía que asegurara la coherencia entre ubicaciones. Cada franquicia se comunicaba de forma distinta, lo que debilitaba la confianza y el reconocimiento.",
  oldBrandingAlt: "Branding anterior de Prosolar",
  oldBrandingCaption: "Branding anterior",
  decisionsHeading: "Decisiones clave",
  decisions: [
    "Color: degradado de verde a azul construido en torno a un significado: la sostenibilidad se une con la tecnología. Diseñado para funcionar desde el rotulado de furgonetas hasta los íconos de redes sociales",
    "Logo: reconstruido para ser funcional, con zonas de seguridad, reglas de mal uso y versiones de ícono y de app definidas",
    "Tipografía: Poppins como principal por su claridad técnica y su tono cercano. Un sistema decorativo secundario definido para campañas sin romper la coherencia",
    "Fotografía: enfoque regional, con instalaciones reales de cada mercado (Caribe, California, Puerto Rico, Florida) para priorizar la autenticidad sobre las imágenes de stock",
    "Aplicaciones: el sistema se extendió a uniformes, rotulado de vehículos, merchandising, logos de socios y Prosolar Shop",
  ],
  uiStyleHeading: "Estilo visual",
  uiStyleAlt: "Tablero de estilo visual de Prosolar",
  socialHeading: "Redes sociales",
  graphicAlt: "Gráfica de redes sociales de Prosolar {n}",
  websiteHeading: "Sitio web",
  websiteText:
    "Diseñado en torno al recorrido del cliente: quiénes son, proyectos reales, opciones de financiación, testimonios y conversión. Landing pages separadas por servicio. Sistema de marca completo aplicado en lo digital.",
  resultHeading: "El resultado",
  resultText:
    "Un sistema de marca completo capaz de escalar entre mercados y ubicaciones de franquicia, con guías documentadas que cualquier equipo o mercado puede seguir de forma independiente. La marca pasó de ser inconsistente a ser reconocible al instante, ya sea en una furgoneta en California o en una publicación de redes sociales en Puerto Rico.",
  resultAlt: "Vista general del sistema de marca de Prosolar",
};

const it: Copy = {
  subtitle:
    "5 anni di lavoro di brand che oggi alimentano campagne di lead generation con oltre 5.500 lead.",
  seoTitle: "Case study Prosolar",
  seoDescription:
    "Cinque anni di lavoro di brand per Prosolar Systems: identità unificata, social media e web design per un'azienda solare tra USA e Caraibi, guidati da Natalia.",
  intro:
    "Prosolar Systems è un'azienda di energia solare che opera in diversi mercati in franchising tra USA e Caraibi: California, Florida, Porto Rico, St. Thomas e i Caraibi.",
  roleHeading: "Il mio ruolo",
  roleText:
    "Restyling della brand identity e sviluppo del sistema, web design, landing page e design per i social media. Collaborazione continuativa per 5 anni.",
  fields: {
    year: "Anno",
    industry: "Settore",
    industryValue: "Sistemi di energia solare",
    client: "Cliente",
  },
  prototype: "Prototipo",
  challengeHeading: "La sfida",
  challengeText:
    "Nonostante 5 anni di crescita, il brand non aveva un sistema visivo unificato: uso incoerente del colore, un logo che non si adattava alle diverse applicazioni, nessuna tipografia definita e nessuna linea guida che garantisse coerenza tra le sedi. Ogni franchising comunicava in modo diverso, e questo minava fiducia e riconoscibilità.",
  oldBrandingAlt: "Vecchio branding di Prosolar",
  oldBrandingCaption: "Vecchio branding",
  decisionsHeading: "Decisioni chiave",
  decisions: [
    "Colore: gradiente dal verde al blu costruito attorno a un significato: la sostenibilità incontra la tecnologia. Pensato per funzionare dalle grafiche sui furgoni alle icone dei social media",
    "Logo: ricostruito per essere funzionale, con aree di rispetto, regole sugli usi scorretti e versioni icona e app definite",
    "Tipografia: Poppins come principale per la sua chiarezza tecnica e il tono accessibile. Un sistema decorativo secondario definito per le campagne senza rompere la coerenza",
    "Fotografia: approccio regionale, con installazioni reali per ogni mercato (Caraibi, California, Porto Rico, Florida) per privilegiare l'autenticità rispetto alle immagini di stock",
    "Applicazioni: il sistema esteso a divise, grafiche sui veicoli, merchandising, loghi dei partner e Prosolar Shop",
  ],
  uiStyleHeading: "Stile visivo",
  uiStyleAlt: "Tavola di stile visivo di Prosolar",
  socialHeading: "Social media",
  graphicAlt: "Grafica social media di Prosolar {n}",
  websiteHeading: "Sito web",
  websiteText:
    "Progettato attorno al percorso del cliente: chi sono, progetti reali, opzioni di finanziamento, testimonianze e conversione. Landing page separate per ogni servizio. Sistema di brand completo applicato al digitale.",
  resultHeading: "Il risultato",
  resultText:
    "Un sistema di brand completo, capace di scalare tra mercati e sedi in franchising, con linee guida documentate che qualsiasi team o mercato può seguire in autonomia. Il brand è passato dall'essere incoerente all'essere subito riconoscibile, che sia su un furgone in California o in un post social a Porto Rico.",
  resultAlt: "Panoramica del sistema di brand di Prosolar",
};

const copy: Record<Locale, Copy> = { en, es, it };

export function prosolar(lang: Locale): ProjectDetail {
  const c = copy[lang];
  const graphicAlt = (n: number) => format(c.graphicAlt, { n: String(n) });

  return {
    slug: "prosolar",
    title: "Prosolar",
    subtitle: c.subtitle,
    coverImage,
    seo: { title: c.seoTitle, description: c.seoDescription },
    nextProjectSlugs: ["modomio", "motion"],
    blocks: [
      {
        type: "meta",
        paragraph: c.intro,
        sections: [{ heading: c.roleHeading, paragraph: c.roleText }],
        fields: [
          { label: c.fields.year, value: "2025" },
          { label: c.fields.industry, value: c.fields.industryValue },
          { label: c.fields.client, value: "Prosolar Systems" },
        ],
        cta: { label: c.prototype, href: "https://prosolarpr.framer.website/?editSite" },
      },
      {
        type: "text",
        heading: c.challengeHeading,
        paragraph: c.challengeText,
        image: {
          src: oldBrandingImage,
          alt: c.oldBrandingAlt,
          caption: c.oldBrandingCaption,
          fit: "contain",
        },
      },
      {
        type: "keyDecisions",
        heading: c.decisionsHeading,
        layout: "cards",
        columns: 5,
        items: c.decisions,
      },
      {
        type: "brandStyle",
        heading: c.uiStyleHeading,
        image: { src: uiStyleDesktop, alt: c.uiStyleAlt, srcMobile: uiStyleMobile },
      },
      {
        type: "mosaic",
        heading: c.socialHeading,
        aspect: "square",
        items: [
          { kind: "image", src: graphics1, alt: graphicAlt(1) },
          { kind: "image", src: graphics2, alt: graphicAlt(2) },
          { kind: "image", src: graphics3, alt: graphicAlt(3) },
          { kind: "image", src: graphics4, alt: graphicAlt(4) },
          { kind: "image", src: graphics5, alt: graphicAlt(5) },
          { kind: "image", src: graphics6, alt: graphicAlt(6) },
        ],
      },
      {
        type: "video",
        heading: c.websiteHeading,
        paragraph: c.websiteText,
        videoUrl: "https://youtu.be/-Z4dbpJWOrg",
        additionalVideoUrls: ["https://youtu.be/uOzm2n_Ds5c"],
      },
      {
        type: "text",
        heading: c.resultHeading,
        paragraph: c.resultText,
        image: { src: resultImage, alt: c.resultAlt, fit: "contain" },
        imagePosition: "below",
      },
    ],
  };
}
