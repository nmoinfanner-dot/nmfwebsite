import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n/config";
import crestaImage from "@/assets/images/project/cresta/cresta-project.jpg";
import liveOakImage from "@/assets/images/project/live/live.png";
import prosolarImage from "@/assets/images/project/prosolar/prosolar.png";
import modomioImage from "@/assets/images/project/modo/portada.jpg";
import motionImage from "@/assets/images/project/motion/motion.png";
import duracellImage from "@/assets/images/project/duracell/duracell.png";

export type Project = {
  slug: string;
  title: string;
  // Always the English key ("Web Design"), used to filter. The label shown to
  // the visitor comes from the dictionary (common.projects.categories).
  categories: string[];
  oneLiner: string;
  image: StaticImageData | null;
};

type ProjectBase = Omit<Project, "oneLiner">;

// Titles and one-liners copied verbatim from "3. Case studies individuales"
// in brief-contenido-portfolio.md. Categories match the filter pills:
// All, Branding, Web Design, Social Media, Motion.
const projectBases: ProjectBase[] = [
  {
    slug: "cresta",
    title: "Cresta",
    categories: ["Branding", "Web Design", "Social Media"],
    image: crestaImage,
  },
  {
    slug: "live-oak",
    title: "Live-Oak",
    categories: ["Web Design"],
    image: liveOakImage,
  },
  {
    slug: "prosolar",
    title: "Prosolar",
    categories: ["Branding", "Social Media", "Web Design"],
    image: prosolarImage,
  },
  {
    slug: "modomio",
    title: "ModoMio",
    categories: ["Branding", "Social Media", "Web Design"],
    image: modomioImage,
  },
  {
    slug: "motion",
    title: "Motion",
    categories: ["Social Media", "Web Design", "Branding", "Graphic Design"],
    image: motionImage,
  },
  {
    slug: "duracell-isbusa",
    title: "Duracell + ISBUSA",
    categories: ["Social Media"],
    image: duracellImage,
  },
];

const oneLiners: Record<Locale, Record<string, string>> = {
  en: {
    cresta: "Building a brand from scratch: naming, visual system, and digital product",
    "live-oak":
      "Full UX audit and redesign for a specialty hospital: four real user journeys, one navigation trying to serve all of them at once.",
    prosolar: "5 years of brand work that now feeds lead-gen campaigns generating 5,500+ leads.",
    modomio: "A brand built from zero for an itinerant dining experience in Milan.",
    motion:
      "Beyond static design: video, animation, illustration, and 3D as tools for communication.",
    "duracell-isbusa": "Two brands, two different starting points, one job: make it perform.",
  },
  es: {
    cresta: "Crear una marca desde cero: naming, sistema visual y producto digital",
    "live-oak":
      "Auditoría UX completa y rediseño para un hospital de especialidades: cuatro recorridos de usuario reales y una sola navegación intentando atenderlos a todos a la vez.",
    prosolar:
      "5 años de trabajo de marca que hoy alimentan campañas de generación de leads con más de 5.500 leads.",
    modomio: "Una marca creada desde cero para una experiencia gastronómica itinerante en Milán.",
    motion:
      "Más allá del diseño estático: video, animación, ilustración y 3D como herramientas de comunicación.",
    "duracell-isbusa":
      "Dos marcas, dos puntos de partida distintos, un mismo trabajo: hacerlas rendir.",
  },
  it: {
    cresta: "Costruire un brand da zero: naming, sistema visivo e prodotto digitale",
    "live-oak":
      "Audit UX completo e restyling per un ospedale specialistico: quattro percorsi utente reali e una sola navigazione che prova a servirli tutti insieme.",
    prosolar:
      "5 anni di lavoro di brand che oggi alimentano campagne di lead generation con oltre 5.500 lead.",
    modomio: "Un brand costruito da zero per un'esperienza gastronomica itinerante a Milano.",
    motion:
      "Oltre il design statico: video, animazione, illustrazione e 3D come strumenti di comunicazione.",
    "duracell-isbusa":
      "Due brand, due punti di partenza diversi, un solo obiettivo: farli rendere.",
  },
};

export function getProjects(lang: Locale): Project[] {
  return projectBases.map((project) => ({
    ...project,
    oneLiner: oneLiners[lang][project.slug],
  }));
}

export const projectSlugs = projectBases.map((project) => project.slug);
