import type { ProjectDetail } from "@/lib/projectBlocks";
import type { Locale } from "@/lib/i18n/config";
import coverImage from "@/assets/images/project/live/portada.jpg";
import problemImage from "@/assets/images/project/live/problem.jpg";
import solutionImage from "@/assets/images/project/live/solution.jpg";
import homeWireframe from "@/assets/images/project/live/LiveOak-Home-Wireframe.jpg";
import aboutWireframe from "@/assets/images/project/live/LiveOak-About-Wireframe.jpg";
import neurologyWireframe from "@/assets/images/project/live/LiveOak-Neurology-Wireframe.jpg";
import processImage1 from "@/assets/images/project/live/imagen1.jpg";
import processImage2 from "@/assets/images/project/live/imagen2.jpg";

const en = {
  subtitle: "UX Audit & Redesign for a specialty veterinary hospital",
  seoTitle: "Live Oak Veterinary Case Study",
  seoDescription:
    "UX audit and website redesign for Live Oak Veterinary Specialists in Savannah: four user journeys, one navigation rebuilt around pet owners and referring vets.",
  overviewHeading: "Overview",
  overview:
    "Live Oak Veterinary Specialists is a multi-specialty and emergency veterinary hospital in Savannah, Georgia. The client wanted to highlight emergency care, put their specialties front and center, separate content for pet owners from content for referring veterinarians, and simplify how people could actually get in touch.",
  fields: {
    role: "Role",
    roleValue: "End-to-end web designer",
    client: "Client",
    clientValue: "Live Oak Veterinary Specialist",
    duration: "Project Duration",
    durationValue: "6 Months",
    year: "Year",
  },
  prototype: "Prototype",
  problemHeading: "The Problem",
  problemText:
    "The client's four goals and the site's actual structure were working against each other. Emergency care and specialties were meant to stand out, but they carried the same visual weight as everything else on the page. Pet owners and referring vets, two completely different audiences, shared one navigation built for neither. And every way of getting in touch, booking, referring a case, asking a question, funneled into a single generic contact button.",
  problemAlt:
    "Original Live Oak Veterinary homepage with a crowded navigation bar and two competing call-to-action banners",
  solutionHeading: "The Solution",
  solution: [
    "Rebuilt the navigation around pet owners as the primary audience, with a separate path for veterinarians instead of competing for the same header space",
    "Gave emergency care one persistent, unmissable action instead of burying it in general contact",
    "Paired every specialty with its own doctor and a clear next step, so “highlight our specialties” became something visible, not just implied",
    "Rewrote medical language in plain terms, so a worried pet owner doesn't need a medical dictionary to understand their options",
    "Added the FAQ pet owners actually need before calling, which didn't exist before",
  ],
  solutionAlt:
    "Simplified Live Oak navigation with a Services dropdown listing Neurology, Cardiology, Diagnostic Imaging and Emergency services",
  researchHeading: "Research",
  researchIntro:
    "Four distinct people, each needing something different within seconds of arriving:",
  personas: [
    {
      title: "The second-opinion seeker.",
      description:
        "Already been to other vets, spent time and money, still no clear answer. Before booking anywhere new, they want to see exactly what conditions are treated, who the doctors are, and why this place would be different.",
    },
    {
      title: "The new-in-town planner.",
      description:
        "Their pet has a concerning but non-urgent symptom, and they don't know any vets in the area yet. They'll click into the site for a few seconds to check hours, whether they need an appointment or can walk in, and what to bring.",
    },
    {
      title: "The true emergency caller.",
      description:
        "No time to browse. They search, see the phone number, and call immediately, they never actually read the website. Its only job for this person is to make that number impossible to miss.",
    },
    {
      title: "The referring veterinarian.",
      description:
        "A professional sending over a case, not a pet owner. They need their own path, credentials and referral process front and center, without wading through consumer-facing content.",
    },
  ],
  uiStyleHeading: "UI Style",
  primaryColor: "Primary color",
  backgroundColor: "Background color",
  secondaryColor: "Secondary color",
  weights: "Regular | Medium | Semibold | Bold",
  wireframesHeading: "Wireframes",
  homeWireframeAlt: "Home wireframe",
  homeCaption: "Home",
  aboutWireframeAlt: "About wireframe",
  aboutCaption: "About",
  neurologyWireframeAlt: "Neurology wireframe",
  neurologyCaption: "Neurology",
  processAlt1:
    "Live Oak Veterinary neurology page shown on a laptop, with a row of pet and surgery photos",
  processAlt2: "Live Oak Veterinary mobile homepage shown on a smartphone held in two hands",
};

type Copy = typeof en;

const es: Copy = {
  subtitle: "Auditoría UX y rediseño para un hospital veterinario de especialidades",
  seoTitle: "Caso de estudio Live Oak Veterinary",
  seoDescription:
    "Auditoría UX y rediseño web para Live Oak Veterinary Specialists en Savannah: cuatro recorridos de usuario y una navegación reconstruida en torno a dueños de mascotas y veterinarios derivantes.",
  overviewHeading: "Resumen",
  overview:
    "Live Oak Veterinary Specialists es un hospital veterinario multiespecialidad y de emergencias en Savannah, Georgia. El cliente quería destacar la atención de emergencias, poner sus especialidades en primer plano, separar el contenido para dueños de mascotas del dirigido a veterinarios derivantes y simplificar la forma en que la gente podía contactarlos.",
  fields: {
    role: "Rol",
    roleValue: "Diseñadora web de principio a fin",
    client: "Cliente",
    clientValue: "Live Oak Veterinary Specialist",
    duration: "Duración del proyecto",
    durationValue: "6 meses",
    year: "Año",
  },
  prototype: "Prototipo",
  problemHeading: "El problema",
  problemText:
    "Los cuatro objetivos del cliente y la estructura real del sitio iban en direcciones opuestas. La atención de emergencias y las especialidades debían destacar, pero tenían el mismo peso visual que todo lo demás en la página. Dueños de mascotas y veterinarios derivantes, dos públicos completamente distintos, compartían una navegación pensada para ninguno de los dos. Y todas las formas de contacto, reservar, derivar un caso, hacer una consulta, terminaban en un único botón de contacto genérico.",
  problemAlt:
    "Página de inicio original de Live Oak Veterinary con una barra de navegación saturada y dos banners de llamada a la acción compitiendo entre sí",
  solutionHeading: "La solución",
  solution: [
    "Reconstruí la navegación en torno a los dueños de mascotas como público principal, con un camino aparte para los veterinarios en lugar de competir por el mismo espacio del encabezado",
    "Di a la atención de emergencias una acción permanente e imposible de pasar por alto, en lugar de enterrarla en el contacto general",
    "Asocié cada especialidad con su propio médico y un siguiente paso claro, de modo que “destacar nuestras especialidades” pasó a ser algo visible y no solo implícito",
    "Reescribí el lenguaje médico en términos simples, para que un dueño preocupado no necesite un diccionario médico para entender sus opciones",
    "Añadí las preguntas frecuentes que los dueños realmente necesitan antes de llamar, que antes no existían",
  ],
  solutionAlt:
    "Navegación simplificada de Live Oak con un menú desplegable de Servicios que lista Neurología, Cardiología, Diagnóstico por imagen y Emergencias",
  researchHeading: "Investigación",
  researchIntro:
    "Cuatro personas distintas, cada una necesitando algo diferente a los pocos segundos de llegar:",
  personas: [
    {
      title: "Quien busca una segunda opinión.",
      description:
        "Ya fue a otras veterinarias, gastó tiempo y dinero y sigue sin una respuesta clara. Antes de pedir turno en otro lugar, quiere ver exactamente qué condiciones se tratan, quiénes son los médicos y por qué este sitio sería diferente.",
    },
    {
      title: "Quien acaba de mudarse y planifica.",
      description:
        "Su mascota tiene un síntoma preocupante pero no urgente y todavía no conoce veterinarios de la zona. Entrará al sitio unos segundos para ver los horarios, si necesita turno o puede ir sin cita y qué debe llevar.",
    },
    {
      title: "Quien llama en una emergencia real.",
      description:
        "No tiene tiempo de navegar. Busca, ve el número de teléfono y llama de inmediato; en realidad nunca lee el sitio. Su única tarea para esta persona es que ese número sea imposible de pasar por alto.",
    },
    {
      title: "El veterinario derivante.",
      description:
        "Un profesional que envía un caso, no un dueño de mascota. Necesita su propio camino, con credenciales y proceso de derivación en primer plano, sin tener que atravesar contenido pensado para el público general.",
    },
  ],
  uiStyleHeading: "Estilo visual",
  primaryColor: "Color principal",
  backgroundColor: "Color de fondo",
  secondaryColor: "Color secundario",
  weights: "Regular | Medium | Semibold | Bold",
  wireframesHeading: "Wireframes",
  homeWireframeAlt: "Wireframe de la página de inicio",
  homeCaption: "Inicio",
  aboutWireframeAlt: "Wireframe de la página Sobre nosotros",
  aboutCaption: "Sobre nosotros",
  neurologyWireframeAlt: "Wireframe de la página de Neurología",
  neurologyCaption: "Neurología",
  processAlt1:
    "Página de neurología de Live Oak Veterinary en una laptop, con una fila de fotos de mascotas y cirugías",
  processAlt2:
    "Página de inicio móvil de Live Oak Veterinary en un smartphone sostenido con las dos manos",
};

const it: Copy = {
  subtitle: "Audit UX e restyling per un ospedale veterinario specialistico",
  seoTitle: "Case study Live Oak Veterinary",
  seoDescription:
    "Audit UX e restyling del sito per Live Oak Veterinary Specialists a Savannah: quattro percorsi utente e una navigazione ricostruita attorno a proprietari di animali e veterinari invianti.",
  overviewHeading: "Panoramica",
  overview:
    "Live Oak Veterinary Specialists è un ospedale veterinario multispecialistico e di pronto soccorso a Savannah, in Georgia. Il cliente voleva mettere in risalto il pronto soccorso, portare le specialità in primo piano, separare i contenuti per i proprietari di animali da quelli per i veterinari invianti e semplificare il modo in cui le persone potevano davvero mettersi in contatto.",
  fields: {
    role: "Ruolo",
    roleValue: "Web designer a 360°",
    client: "Cliente",
    clientValue: "Live Oak Veterinary Specialist",
    duration: "Durata del progetto",
    durationValue: "6 mesi",
    year: "Anno",
  },
  prototype: "Prototipo",
  problemHeading: "Il problema",
  problemText:
    "I quattro obiettivi del cliente e la struttura reale del sito andavano in direzioni opposte. Pronto soccorso e specialità dovevano distinguersi, ma avevano lo stesso peso visivo di tutto il resto della pagina. Proprietari di animali e veterinari invianti, due pubblici completamente diversi, condividevano una navigazione pensata per nessuno dei due. E ogni modo di mettersi in contatto, prenotare, inviare un caso, fare una domanda, finiva in un unico pulsante di contatto generico.",
  problemAlt:
    "Home page originale di Live Oak Veterinary con una barra di navigazione affollata e due banner di call to action in competizione",
  solutionHeading: "La soluzione",
  solution: [
    "Ho ricostruito la navigazione attorno ai proprietari di animali come pubblico principale, con un percorso separato per i veterinari invece di farli competere per lo stesso spazio nell'header",
    "Ho dato al pronto soccorso un'azione sempre presente e impossibile da non vedere, invece di seppellirlo nel contatto generico",
    "Ho abbinato ogni specialità al proprio medico e a un passo successivo chiaro, così “mettere in risalto le nostre specialità” è diventato qualcosa di visibile e non solo sottinteso",
    "Ho riscritto il linguaggio medico in termini semplici, così un proprietario in ansia non ha bisogno di un dizionario medico per capire le sue opzioni",
    "Ho aggiunto le FAQ di cui i proprietari hanno davvero bisogno prima di chiamare, che prima non esistevano",
  ],
  solutionAlt:
    "Navigazione semplificata di Live Oak con un menu a discesa Servizi che elenca Neurologia, Cardiologia, Diagnostica per immagini e Pronto soccorso",
  researchHeading: "Ricerca",
  researchIntro:
    "Quattro persone diverse, ognuna con un bisogno diverso nel giro di pochi secondi dall'arrivo:",
  personas: [
    {
      title: "Chi cerca un secondo parere.",
      description:
        "È già stato da altri veterinari, ha speso tempo e denaro, e non ha ancora una risposta chiara. Prima di prenotare altrove vuole vedere esattamente quali patologie vengono trattate, chi sono i medici e perché questo posto sarebbe diverso.",
    },
    {
      title: "Chi è appena arrivato in città e pianifica.",
      description:
        "Il suo animale ha un sintomo preoccupante ma non urgente e non conosce ancora veterinari della zona. Entrerà nel sito per pochi secondi per controllare gli orari, se serve un appuntamento o si può andare senza prenotare e cosa portare.",
    },
    {
      title: "Chi chiama per una vera emergenza.",
      description:
        "Non ha tempo di navigare. Cerca, vede il numero di telefono e chiama subito: in realtà non legge mai il sito. Il suo unico compito, per questa persona, è rendere quel numero impossibile da non vedere.",
    },
    {
      title: "Il veterinario inviante.",
      description:
        "Un professionista che invia un caso, non un proprietario di animali. Ha bisogno di un percorso suo, con credenziali e procedura di invio in primo piano, senza dover attraversare contenuti pensati per il pubblico generale.",
    },
  ],
  uiStyleHeading: "Stile visivo",
  primaryColor: "Colore principale",
  backgroundColor: "Colore di sfondo",
  secondaryColor: "Colore secondario",
  weights: "Regular | Medium | Semibold | Bold",
  wireframesHeading: "Wireframe",
  homeWireframeAlt: "Wireframe della home",
  homeCaption: "Home",
  aboutWireframeAlt: "Wireframe della pagina Chi siamo",
  aboutCaption: "Chi siamo",
  neurologyWireframeAlt: "Wireframe della pagina Neurologia",
  neurologyCaption: "Neurologia",
  processAlt1:
    "Pagina di neurologia di Live Oak Veterinary su un laptop, con una fila di foto di animali e interventi",
  processAlt2:
    "Home page mobile di Live Oak Veterinary su uno smartphone tenuto con due mani",
};

const copy: Record<Locale, Copy> = { en, es, it };

export function liveOak(lang: Locale): ProjectDetail {
  const c = copy[lang];

  return {
    slug: "live-oak",
    title: "Live Oak Veterinary Specialists",
    subtitle: c.subtitle,
    coverImage,
    seo: { title: c.seoTitle, description: c.seoDescription },
    nextProjectSlugs: ["prosolar", "modomio"],
    blocks: [
      {
        type: "meta",
        heading: c.overviewHeading,
        paragraph: c.overview,
        fields: [
          { label: c.fields.role, value: c.fields.roleValue },
          { label: c.fields.client, value: c.fields.clientValue },
          { label: c.fields.duration, value: c.fields.durationValue },
          { label: c.fields.year, value: "2025" },
        ],
        cta: {
          label: c.prototype,
          href: "https://liveoakveterinary.framer.website/?editSite",
        },
      },
      {
        type: "text",
        heading: c.problemHeading,
        paragraph: c.problemText,
        image: { src: problemImage, alt: c.problemAlt },
      },
      {
        type: "keyDecisions",
        heading: c.solutionHeading,
        items: c.solution,
        image: { src: solutionImage, alt: c.solutionAlt },
      },
      {
        type: "cards",
        heading: c.researchHeading,
        intro: c.researchIntro,
        items: c.personas,
      },
      {
        type: "uiStyle",
        heading: c.uiStyleHeading,
        colors: [
          { label: c.primaryColor, hex: "#194B5B" },
          { label: c.backgroundColor, hex: "#F4E2A2" },
          { label: c.secondaryColor, hex: "#E27E38" },
          { label: c.secondaryColor, hex: "#898B35" },
        ],
        typefaceName: "Switzer",
        fontFamily: "'Switzer', sans-serif",
        fontLinkHref: "https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap",
        weightsLabel: c.weights,
        specimenText:
          "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz • 0123456789 • !@#$%&*()_+",
        specimenBackground: "#FAF7F2",
      },
      {
        type: "gallery",
        heading: c.wireframesHeading,
        columns: 3,
        images: [
          { src: homeWireframe, alt: c.homeWireframeAlt, caption: c.homeCaption },
          { src: aboutWireframe, alt: c.aboutWireframeAlt, caption: c.aboutCaption },
          { src: neurologyWireframe, alt: c.neurologyWireframeAlt, caption: c.neurologyCaption },
        ],
      },
      {
        type: "video",
        videoUrl: "https://youtu.be/HtExi1wee9I",
        images: [
          { src: processImage1, alt: c.processAlt1 },
          { src: processImage2, alt: c.processAlt2 },
        ],
      },
    ],
  };
}
