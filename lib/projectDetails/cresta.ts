import type { ProjectDetail } from "@/lib/projectBlocks";
import { format, type Locale } from "@/lib/i18n/config";
import coverImage from "@/assets/images/project/cresta/cresta-project.jpg";
import moodboardImage from "@/assets/images/project/cresta/moodboard.jpg";
import logoImage from "@/assets/images/project/cresta/logo.png";
import bannerImage from "@/assets/images/project/cresta/banner1.jpg";
import socialMedia1 from "@/assets/images/project/cresta/socialmedia-01.jpg";
import socialMedia2 from "@/assets/images/project/cresta/socialmedia-02.jpg";
import socialMedia3 from "@/assets/images/project/cresta/socialmedia-03.jpg";
import socialMedia4 from "@/assets/images/project/cresta/socialmedia-04.jpg";
import socialMedia5 from "@/assets/images/project/cresta/socialmedia-05.jpg";
import socialMedia6 from "@/assets/images/project/cresta/socialmedia-06.jpg";
import cartelImage from "@/assets/images/project/cresta/cartel.png";
import branding1Image from "@/assets/images/project/cresta/branding1.jpg";
import tarjetaImage from "@/assets/images/project/cresta/tarjeta.png";
import propuestaImage from "@/assets/images/project/cresta/propuesta.png";
import menuGiorno1Image from "@/assets/images/project/cresta/menu-giorno1.png";
import menuGiorno2Image from "@/assets/images/project/cresta/menu-giorno2.png";
import menuGiorno3Image from "@/assets/images/project/cresta/menu-giorno3.png";

const en = {
  subtitle: "Building a brand from scratch: naming, visual system, and digital product",
  seoTitle: "Cresta Case Study",
  seoDescription:
    "Case study: end-to-end brand identity, naming and website for Cresta, a trekking and food retreat in Lorsica, Italy, designed by Natalia Moin Fanner in Figma.",
  intro:
    "Cresta is an end-to-end brand identity project for a trekking and food experience retreat in Lorsica, Italy. I led the process from naming through a launch-ready digital product: brand concept and naming (developed trilingually in Spanish, Italian, and English), logo and visual identity, a contextual color and typography system, brand content (menus, experience packages), UX for a full booking flow, and a website designed.",
  fields: {
    role: "Role",
    roleValue: "End-to-end web designer",
    client: "Client",
    tools: "Tools",
    timeline: "Timeline",
    timelineValue: "April - July 2026",
  },
  prototype: "Prototype",
  researchHeading: "Research",
  researchText:
    "The moodboard went through several rounds of correction: early references leaned too editorial (glossy hands, plated fine-dining food), far from the 'premium but homemade' feeling the brand needed. The final board settled into three threads that coexist: the physical (mountains, trails, worn boots), the social (long tables, cards, laughter), and the sensory (water, texture, hands), all in the same warm, unposed register.",
  moodboardAlt: "Cresta research moodboard",
  decisionsHeading: "Key decisions",
  decisions: [
    "Logo: a triangle of three asymmetric peaks, unambiguous at a glance, topped with a solid dot marking the arrival at the ridge, built with the same stroke weight as the wordmark's letters",
    "Color: Primary cream (background) and charcoal black (type and logo). Secondary dark green, for contrast blocks. Accent orange, used sparingly, never as a large surface",
    "Typography: Trueno for headlines and the wordmark, Metropolis for body copy, a serif reserved exclusively for the tagline, and Mebezt as a punctual accent for short, highlighted headlines",
    "Secondary icons: a system of solid icons drawn from the same geometric language as the mark, giving each brand pillar its own symbol instead of forcing the mountain to represent everything",
  ],
  uiStyleHeading: "UI Style",
  logoAlt: "Cresta logo",
  primary: "Primary",
  secondary: "Secondary",
  typefaceLabel: "Primary",
  socialHeading: "Social Media",
  socialIntro:
    "An Instagram content system built as a brand narrative arc, not standalone posts, including real trekking and kayak data cards from the surrounding area.",
  socialAlt: "Cresta social media post {n}",
  bannerText:
    "Cresta is where the climb ends and the view begins. A place in the Ligurian mountains where you climb, you enjoy, and you arrive at a long table. Care in what's simple: surrounded by nature, home-cooked food, people who don't need an introduction to sit down. Cresta isn't for someone looking to escape the world, it's for someone looking to meet others in it.",
  bannerAlt: "The Ligurian mountains around Cresta",
  brandingHeading: "Branding",
  posterAlt: "Cresta poster",
  brandingAlt: "Cresta branding",
  cardAlt: "Cresta card",
  proposalAlt: "Cresta proposal",
  menu1Alt: "Cresta menu, Giorno 1: Benvenuto",
  menu2Alt: "Cresta menu, Giorno 2: Montagna",
  menu3Alt: "Cresta menu, Giorno 3: Arrivederci",
  websiteHeading: "Website",
};

type Copy = typeof en;

const es: Copy = {
  subtitle: "Crear una marca desde cero: naming, sistema visual y producto digital",
  seoTitle: "Caso de estudio Cresta",
  seoDescription:
    "Caso de estudio: identidad de marca, naming y sitio web de principio a fin para Cresta, un retiro de trekking y gastronomía en Lorsica, Italia, diseñado por Natalia Moin Fanner en Figma.",
  intro:
    "Cresta es un proyecto de identidad de marca de principio a fin para un retiro de trekking y experiencias gastronómicas en Lorsica, Italia. Lideré el proceso desde el naming hasta un producto digital listo para lanzar: concepto de marca y naming (desarrollado en tres idiomas: español, italiano e inglés), logo e identidad visual, un sistema contextual de color y tipografía, contenido de marca (menús, paquetes de experiencias), UX de un flujo de reservas completo y el diseño de un sitio web.",
  fields: {
    role: "Rol",
    roleValue: "Diseñadora web de principio a fin",
    client: "Cliente",
    tools: "Herramientas",
    timeline: "Plazo",
    timelineValue: "Abril - julio de 2026",
  },
  prototype: "Prototipo",
  researchHeading: "Investigación",
  researchText:
    "El moodboard pasó por varias rondas de corrección: las primeras referencias eran demasiado editoriales (manos brillantes, platos de alta cocina), lejos de la sensación “premium pero casera” que necesitaba la marca. El tablero final se asentó en tres hilos que conviven: lo físico (montañas, senderos, botas gastadas), lo social (mesas largas, tarjetas, risas) y lo sensorial (agua, texturas, manos), todo en el mismo registro cálido y sin poses.",
  moodboardAlt: "Moodboard de investigación de Cresta",
  decisionsHeading: "Decisiones clave",
  decisions: [
    "Logo: un triángulo de tres picos asimétricos, inequívoco a simple vista, coronado por un punto sólido que marca la llegada a la cresta, construido con el mismo grosor de trazo que las letras del logotipo",
    "Color: principal crema (fondo) y negro carbón (texto y logo). Secundario verde oscuro, para bloques de contraste. Acento naranja, usado con moderación, nunca como una superficie grande",
    "Tipografía: Trueno para titulares y el logotipo, Metropolis para el texto corrido, una serif reservada exclusivamente para el eslogan y Mebezt como acento puntual en titulares cortos y destacados",
    "Íconos secundarios: un sistema de íconos sólidos construido con el mismo lenguaje geométrico del símbolo, que da a cada pilar de la marca su propio símbolo en lugar de forzar a la montaña a representarlo todo",
  ],
  uiStyleHeading: "Estilo visual",
  logoAlt: "Logo de Cresta",
  primary: "Principales",
  secondary: "Secundarios",
  typefaceLabel: "Principal",
  socialHeading: "Redes sociales",
  socialIntro:
    "Un sistema de contenido para Instagram pensado como un arco narrativo de marca y no como publicaciones sueltas, que incluye tarjetas con datos reales de trekking y kayak de la zona.",
  socialAlt: "Publicación de redes sociales de Cresta {n}",
  bannerText:
    "Cresta es donde termina la subida y empieza la vista. Un lugar en las montañas de Liguria donde subes, disfrutas y llegas a una mesa larga. Cuidado en lo simple: rodeado de naturaleza, comida casera y gente que no necesita presentación para sentarse. Cresta no es para quien busca escapar del mundo, es para quien busca encontrarse con otros en él.",
  bannerAlt: "Las montañas de Liguria alrededor de Cresta",
  brandingHeading: "Branding",
  posterAlt: "Cartel de Cresta",
  brandingAlt: "Branding de Cresta",
  cardAlt: "Tarjeta de Cresta",
  proposalAlt: "Propuesta de Cresta",
  menu1Alt: "Menú de Cresta, Giorno 1: Benvenuto",
  menu2Alt: "Menú de Cresta, Giorno 2: Montagna",
  menu3Alt: "Menú de Cresta, Giorno 3: Arrivederci",
  websiteHeading: "Sitio web",
};

const it: Copy = {
  subtitle: "Costruire un brand da zero: naming, sistema visivo e prodotto digitale",
  seoTitle: "Case study Cresta",
  seoDescription:
    "Case study: brand identity, naming e sito web completi per Cresta, un ritiro di trekking e cucina a Lorsica, in Italia, progettati da Natalia Moin Fanner in Figma.",
  intro:
    "Cresta è un progetto di brand identity completo per un ritiro di trekking ed esperienze gastronomiche a Lorsica, in Italia. Ho guidato il processo dal naming fino a un prodotto digitale pronto al lancio: concept di brand e naming (sviluppato in tre lingue: spagnolo, italiano e inglese), logo e identità visiva, un sistema contestuale di colore e tipografia, contenuti di brand (menu, pacchetti di esperienze), UX di un flusso di prenotazione completo e il design di un sito web.",
  fields: {
    role: "Ruolo",
    roleValue: "Web designer a 360°",
    client: "Cliente",
    tools: "Strumenti",
    timeline: "Tempi",
    timelineValue: "Aprile - luglio 2026",
  },
  prototype: "Prototipo",
  researchHeading: "Ricerca",
  researchText:
    "Il moodboard è passato attraverso diversi giri di correzione: i primi riferimenti erano troppo editoriali (mani patinate, piatti da alta cucina), lontani dalla sensazione “premium ma casalinga” di cui il brand aveva bisogno. La versione finale si è assestata su tre filoni che convivono: il fisico (montagne, sentieri, scarponi consumati), il sociale (tavolate, biglietti, risate) e il sensoriale (acqua, texture, mani), tutti nello stesso registro caldo e spontaneo.",
  moodboardAlt: "Moodboard di ricerca di Cresta",
  decisionsHeading: "Decisioni chiave",
  decisions: [
    "Logo: un triangolo di tre vette asimmetriche, inequivocabile a colpo d'occhio, sormontato da un punto pieno che segna l'arrivo sul crinale, costruito con lo stesso spessore di tratto delle lettere del logotipo",
    "Colore: principali crema (sfondo) e nero carbone (testo e logo). Secondario verde scuro, per i blocchi a contrasto. Accento arancione, usato con parsimonia, mai come superficie ampia",
    "Tipografia: Trueno per i titoli e il logotipo, Metropolis per il testo corrente, un serif riservato esclusivamente al tagline e Mebezt come accento puntuale per titoli brevi in evidenza",
    "Icone secondarie: un sistema di icone piene nato dallo stesso linguaggio geometrico del marchio, che dà a ogni pilastro del brand il suo simbolo invece di costringere la montagna a rappresentare tutto",
  ],
  uiStyleHeading: "Stile visivo",
  logoAlt: "Logo di Cresta",
  primary: "Principali",
  secondary: "Secondari",
  typefaceLabel: "Principale",
  socialHeading: "Social media",
  socialIntro:
    "Un sistema di contenuti per Instagram pensato come un arco narrativo di brand e non come post isolati, con anche schede con dati reali di trekking e kayak della zona.",
  socialAlt: "Post social media di Cresta {n}",
  bannerText:
    "Cresta è dove finisce la salita e inizia il panorama. Un luogo tra le montagne della Liguria dove si sale, ci si gode il momento e si arriva a una lunga tavola. Cura in ciò che è semplice: immersi nella natura, cibo fatto in casa, persone che non hanno bisogno di presentazioni per sedersi. Cresta non è per chi cerca di fuggire dal mondo, è per chi cerca di incontrare gli altri nel mondo.",
  bannerAlt: "Le montagne della Liguria intorno a Cresta",
  brandingHeading: "Branding",
  posterAlt: "Poster di Cresta",
  brandingAlt: "Branding di Cresta",
  cardAlt: "Biglietto di Cresta",
  proposalAlt: "Proposta di Cresta",
  menu1Alt: "Menu di Cresta, Giorno 1: Benvenuto",
  menu2Alt: "Menu di Cresta, Giorno 2: Montagna",
  menu3Alt: "Menu di Cresta, Giorno 3: Arrivederci",
  websiteHeading: "Sito web",
};

const copy: Record<Locale, Copy> = { en, es, it };

export function cresta(lang: Locale): ProjectDetail {
  const c = copy[lang];
  const socialAlt = (n: number) => format(c.socialAlt, { n: String(n) });

  return {
    slug: "cresta",
    title: "Cresta",
    subtitle: c.subtitle,
    coverImage,
    seo: { title: c.seoTitle, description: c.seoDescription },
    nextProjectSlugs: ["duracell-isbusa", "live-oak"],
    blocks: [
      {
        type: "meta",
        paragraph: c.intro,
        fields: [
          { label: c.fields.role, value: c.fields.roleValue },
          { label: c.fields.client, value: "Cresta" },
          { label: c.fields.tools, value: "Figma, Figma Sites, Figma Motion" },
          { label: c.fields.timeline, value: c.fields.timelineValue },
        ],
        // TODO: no real prototype link yet, placeholder until Natalia sends one.
        cta: { label: c.prototype, href: "#" },
      },
      {
        type: "text",
        heading: c.researchHeading,
        paragraph: c.researchText,
        image: { src: moodboardImage, alt: c.moodboardAlt },
      },
      {
        type: "keyDecisions",
        heading: c.decisionsHeading,
        layout: "cards",
        columns: 4,
        items: c.decisions,
      },
      {
        type: "brandStyle",
        heading: c.uiStyleHeading,
        image: { src: logoImage, alt: c.logoAlt },
        colorGroups: [
          { label: c.primary, colors: ["#F3EEE2", "#1C1C1A"] },
          { label: c.secondary, colors: ["#E4632A", "#ACD1E3", "#A9D18C", "#3B5E45"] },
        ],
        typefaces: [{ label: c.typefaceLabel, value: "Trueno + Metropolis" }],
      },
      {
        type: "mosaic",
        heading: c.socialHeading,
        intro: c.socialIntro,
        items: [
          { kind: "image", src: socialMedia1, alt: socialAlt(1) },
          { kind: "image", src: socialMedia2, alt: socialAlt(2) },
          { kind: "image", src: socialMedia3, alt: socialAlt(3) },
          { kind: "image", src: socialMedia4, alt: socialAlt(4) },
          { kind: "image", src: socialMedia5, alt: socialAlt(5) },
          { kind: "image", src: socialMedia6, alt: socialAlt(6) },
        ],
      },
      {
        type: "banner",
        paragraph: c.bannerText,
        image: { src: bannerImage, alt: c.bannerAlt },
      },
      {
        type: "gallery",
        heading: c.brandingHeading,
        columns: 2,
        images: [
          { src: cartelImage, alt: c.posterAlt },
          { src: branding1Image, alt: c.brandingAlt },
          { src: tarjetaImage, alt: c.cardAlt },
          { src: propuestaImage, alt: c.proposalAlt },
        ],
      },
      {
        type: "gallery",
        columns: 3,
        images: [
          { src: menuGiorno1Image, alt: c.menu1Alt, fit: "contain" },
          { src: menuGiorno2Image, alt: c.menu2Alt, fit: "contain" },
          { src: menuGiorno3Image, alt: c.menu3Alt, fit: "contain" },
        ],
      },
      {
        type: "video",
        heading: c.websiteHeading,
        videoUrl: "https://youtu.be/w5vGnQM9DuA",
      },
    ],
  };
}
