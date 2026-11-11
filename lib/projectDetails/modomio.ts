import type { ProjectDetail } from "@/lib/projectBlocks";
import { format, type Locale } from "@/lib/i18n/config";
import coverImage from "@/assets/images/project/modo/portada.jpg";
import uiStyleImage from "@/assets/images/project/modo/uistyle.jpg";
import socialModoImage from "@/assets/images/project/modo/social-modo.jpg";
import graphic01 from "@/assets/images/project/modo/modo-graphic-01.jpg";
import graphic02 from "@/assets/images/project/modo/modo-graphic-02.jpg";
import graphic03 from "@/assets/images/project/modo/modo-graphic-03.jpg";
import graphic04 from "@/assets/images/project/modo/modo-graphic-04.jpg";
import soldOutImage from "@/assets/images/project/modo/sold-out.webp";
import tortaImage from "@/assets/images/project/modo/torta.webp";
import sushiNightImage from "@/assets/images/project/modo/sushi-night.webp";

const en = {
  subtitle: "A brand built from zero for an itinerant dining experience in Milan.",
  seoTitle: "ModoMio Case Study",
  seoDescription:
    "Brand identity, social media and website for ModoMio, an itinerant plant-based dining experience in Milan, built from zero by designer Natalia Moin Fanner.",
  intro:
    "MODOmio is an itinerant plant-based dining experience built around 'Mesa de Domingo', a slow, seasonal Sunday lunch format that brings together Italian culinary tradition and Argentine warmth. The experience travels: guests gather in private homes, agriturismos, and unique spaces, never the same place twice.",
  fields: {
    year: "Year",
    industry: "Industry",
    industryValue: "Gastronomy",
    client: "Client",
    base: "Base",
    baseValue: "Milan, Italy",
  },
  challengeHeading: "The Design Challenge",
  challengeText:
    "The brand needed to attract two very different audiences simultaneously: guests who want to attend, and hosts who want to offer their space. Each has a different emotional need. The visual identity had to speak to both without losing coherence.",
  decisionsHeading: "Key decisions",
  decisions: [
    "Logo: Bold condensed \"MODO\" paired with organic script \"mio\", a deliberate typographic tension. Structure meets warmth, precision meets spontaneity",
    "Color palette: Earth tones, gold, sage green, navy, near-black. Grounds the brand in food, nature, and intimacy without falling into generic plant-based clichés",
    "Slogan: \"Cucina che viaggia\", three words that explain the entire format without describing it literally",
    "Web: Built in Framer around the two audiences, each with their own entry point and narrative flow",
    "Collateral: Outreach materials designed for direct venue prospecting, flyers taken in person to restaurants and spaces",
    "Illustration system: Custom hand-drawn style, hands, glasses, pasta, vegetables, giving the brand warmth photography alone couldn't achieve",
  ],
  uiStyleHeading: "UI Style",
  uiStyleAlt: "ModoMio UI style board",
  socialWideAlt: "ModoMio social media, wide format",
  socialHeading: "Social Media",
  graphicAlt: "ModoMio social media graphic {n}",
  videoAlt: "ModoMio social media video {n}",
  soldOutAlt: "ModoMio Edizione #02 sold out announcement",
  tortaAlt: "ModoMio crostata",
  sushiAlt: "ModoMio Sushi Night Plant-Based event",
  instagram: "Follow on Instagram",
  websiteHeading: "Website",
  resultHeading: "Result",
  resultText:
    "Branding a concept that doesn't fit existing categories is the most interesting design problem there is. When there's no reference point, every decision has to justify itself from first principles. The test wasn't aesthetic, it was whether a venue owner reading the flyer for the first time understood immediately what was being offered and wanted to be part of it.",
};

type Copy = typeof en;

const es: Copy = {
  subtitle: "Una marca creada desde cero para una experiencia gastronómica itinerante en Milán.",
  seoTitle: "Caso de estudio ModoMio",
  seoDescription:
    "Identidad de marca, redes sociales y sitio web de ModoMio, una experiencia gastronómica itinerante plant-based en Milán, creada desde cero por la diseñadora Natalia Moin Fanner.",
  intro:
    "MODOmio es una experiencia gastronómica itinerante plant-based construida en torno a “Mesa de Domingo”, un formato de almuerzo dominical lento y de temporada que une la tradición culinaria italiana con la calidez argentina. La experiencia viaja: los comensales se reúnen en casas particulares, agriturismos y espacios únicos, nunca en el mismo lugar dos veces.",
  fields: {
    year: "Año",
    industry: "Sector",
    industryValue: "Gastronomía",
    client: "Cliente",
    base: "Base",
    baseValue: "Milán, Italia",
  },
  challengeHeading: "El desafío de diseño",
  challengeText:
    "La marca necesitaba atraer a dos públicos muy distintos a la vez: los comensales que quieren asistir y los anfitriones que quieren ofrecer su espacio. Cada uno tiene una necesidad emocional diferente. La identidad visual tenía que hablarles a ambos sin perder coherencia.",
  decisionsHeading: "Decisiones clave",
  decisions: [
    "Logo: “MODO” en mayúsculas condensadas y gruesas junto a “mio” en una script orgánica, una tensión tipográfica deliberada. La estructura se encuentra con la calidez, la precisión con la espontaneidad",
    "Paleta de color: tonos tierra, dorado, verde salvia, azul marino y casi negro. Ancla la marca en la comida, la naturaleza y la intimidad sin caer en los clichés genéricos de lo plant-based",
    "Eslogan: “Cucina che viaggia”, tres palabras que explican todo el formato sin describirlo de forma literal",
    "Web: construida en Framer en torno a los dos públicos, cada uno con su propia puerta de entrada y su propio recorrido narrativo",
    "Material de apoyo: piezas de acercamiento pensadas para la prospección directa de locales, con flyers llevados en persona a restaurantes y espacios",
    "Sistema de ilustración: estilo dibujado a mano a medida, con manos, copas, pasta y verduras, que dio a la marca una calidez que la fotografía por sí sola no habría logrado",
  ],
  uiStyleHeading: "Estilo visual",
  uiStyleAlt: "Tablero de estilo visual de ModoMio",
  socialWideAlt: "Redes sociales de ModoMio, formato panorámico",
  socialHeading: "Redes sociales",
  graphicAlt: "Gráfica de redes sociales de ModoMio {n}",
  videoAlt: "Video de redes sociales de ModoMio {n}",
  soldOutAlt: "Anuncio de agotado de la Edizione #02 de ModoMio",
  tortaAlt: "Crostata de ModoMio",
  sushiAlt: "Evento Sushi Night Plant-Based de ModoMio",
  instagram: "Seguir en Instagram",
  websiteHeading: "Sitio web",
  resultHeading: "Resultado",
  resultText:
    "Crear la marca de un concepto que no encaja en las categorías existentes es el problema de diseño más interesante que hay. Cuando no hay un punto de referencia, cada decisión tiene que justificarse desde los primeros principios. La prueba no era estética: era si el dueño de un local, al leer el flyer por primera vez, entendía de inmediato lo que se le ofrecía y quería ser parte.",
};

const it: Copy = {
  subtitle: "Un brand costruito da zero per un'esperienza gastronomica itinerante a Milano.",
  seoTitle: "Case study ModoMio",
  seoDescription:
    "Brand identity, social media e sito web di ModoMio, un'esperienza gastronomica itinerante plant-based a Milano, costruita da zero dalla designer Natalia Moin Fanner.",
  intro:
    "MODOmio è un'esperienza gastronomica itinerante plant-based costruita attorno a “Mesa de Domingo”, un pranzo domenicale lento e di stagione che unisce la tradizione culinaria italiana al calore argentino. L'esperienza viaggia: gli ospiti si ritrovano in case private, agriturismi e spazi unici, mai due volte nello stesso posto.",
  fields: {
    year: "Anno",
    industry: "Settore",
    industryValue: "Gastronomia",
    client: "Cliente",
    base: "Sede",
    baseValue: "Milano, Italia",
  },
  challengeHeading: "La sfida di design",
  challengeText:
    "Il brand doveva attrarre contemporaneamente due pubblici molto diversi: gli ospiti che vogliono partecipare e i padroni di casa che vogliono mettere a disposizione il proprio spazio. Ognuno ha un bisogno emotivo diverso. L'identità visiva doveva parlare a entrambi senza perdere coerenza.",
  decisionsHeading: "Decisioni chiave",
  decisions: [
    "Logo: “MODO” in maiuscolo condensato e robusto abbinato a “mio” in uno script organico, una tensione tipografica voluta. La struttura incontra il calore, la precisione incontra la spontaneità",
    "Palette colori: toni terra, oro, verde salvia, blu navy e quasi nero. Radica il brand nel cibo, nella natura e nell'intimità senza cadere nei cliché generici del plant-based",
    "Slogan: “Cucina che viaggia”, tre parole che spiegano l'intero formato senza descriverlo in modo letterale",
    "Web: costruito in Framer attorno ai due pubblici, ciascuno con il proprio punto di ingresso e il proprio percorso narrativo",
    "Materiali di supporto: materiali di contatto pensati per la ricerca diretta di locali, con volantini portati di persona a ristoranti e spazi",
    "Sistema di illustrazione: stile disegnato a mano su misura, con mani, bicchieri, pasta e verdure, che ha dato al brand un calore che la sola fotografia non avrebbe raggiunto",
  ],
  uiStyleHeading: "Stile visivo",
  uiStyleAlt: "Tavola di stile visivo di ModoMio",
  socialWideAlt: "Social media di ModoMio, formato panoramico",
  socialHeading: "Social media",
  graphicAlt: "Grafica social media di ModoMio {n}",
  videoAlt: "Video social media di ModoMio {n}",
  soldOutAlt: "Annuncio di sold out dell'Edizione #02 di ModoMio",
  tortaAlt: "Crostata di ModoMio",
  sushiAlt: "Evento Sushi Night Plant-Based di ModoMio",
  instagram: "Seguici su Instagram",
  websiteHeading: "Sito web",
  resultHeading: "Risultato",
  resultText:
    "Costruire il brand di un concetto che non rientra nelle categorie esistenti è il problema di design più interessante che ci sia. Quando non c'è un punto di riferimento, ogni decisione deve giustificarsi partendo dai principi di base. Il test non era estetico: era se il proprietario di un locale, leggendo il volantino per la prima volta, capiva subito cosa gli veniva offerto e voleva farne parte.",
};

const copy: Record<Locale, Copy> = { en, es, it };

export function modomio(lang: Locale): ProjectDetail {
  const c = copy[lang];
  const n = (template: string, value: number) => format(template, { n: String(value) });

  return {
    slug: "modomio",
    title: "ModoMio",
    subtitle: c.subtitle,
    coverImage,
    seo: { title: c.seoTitle, description: c.seoDescription },
    nextProjectSlugs: ["cresta", "duracell-isbusa"],
    blocks: [
      {
        type: "meta",
        paragraph: c.intro,
        fields: [
          { label: c.fields.year, value: "2025/26" },
          { label: c.fields.industry, value: c.fields.industryValue },
          { label: c.fields.client, value: "ModoMio" },
          { label: c.fields.base, value: c.fields.baseValue },
        ],
      },
      {
        type: "text",
        heading: c.challengeHeading,
        paragraph: c.challengeText,
      },
      {
        type: "keyDecisions",
        heading: c.decisionsHeading,
        layout: "cards",
        columns: 3,
        items: c.decisions,
      },
      {
        type: "brandStyle",
        heading: c.uiStyleHeading,
        image: { src: uiStyleImage, alt: c.uiStyleAlt },
      },
      {
        type: "gallery",
        columns: 1,
        aspect: "landscape",
        images: [{ src: socialModoImage, alt: c.socialWideAlt, fit: "contain" }],
      },
      {
        type: "mosaic",
        heading: c.socialHeading,
        items: [
          { kind: "image", src: graphic04, alt: n(c.graphicAlt, 1) },
          { kind: "image", src: graphic03, alt: n(c.graphicAlt, 2) },
          { kind: "video", src: "/videos/modo/video-01.mp4", alt: n(c.videoAlt, 1) },
          { kind: "image", src: graphic02, alt: n(c.graphicAlt, 3) },
          { kind: "video", src: "/videos/modo/video-02.mp4", alt: n(c.videoAlt, 2) },
          { kind: "image", src: graphic01, alt: n(c.graphicAlt, 4) },
          { kind: "image", src: soldOutImage, alt: c.soldOutAlt },
          { kind: "image", src: tortaImage, alt: c.tortaAlt },
          { kind: "image", src: sushiNightImage, alt: c.sushiAlt },
        ],
        cta: { label: c.instagram, href: "https://www.instagram.com/amodomio.vegan" },
      },
      {
        type: "video",
        heading: c.websiteHeading,
        videoUrl: "https://youtu.be/N2kSfyFEGcw",
      },
      {
        type: "text",
        heading: c.resultHeading,
        paragraph: c.resultText,
      },
    ],
  };
}
