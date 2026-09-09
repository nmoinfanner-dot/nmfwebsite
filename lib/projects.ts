import type { StaticImageData } from "next/image";
import crestaImage from "@/assets/images/project/cresta/cresta-project.jpg";
import liveOakImage from "@/assets/images/project/live/live.png";
import prosolarImage from "@/assets/images/project/prosolar/prosolar.png";
import modomioImage from "@/assets/images/project/modo/portada.jpg";
import motionImage from "@/assets/images/project/motion/motion.png";
import duracellImage from "@/assets/images/project/duracell/duracell.png";

export type Project = {
  slug: string;
  title: string;
  categories: string[];
  oneLiner: string;
  image: StaticImageData | null;
};

// Titles and one-liners copied verbatim from "3. Case studies individuales"
// in brief-contenido-portfolio.md. Categories match the filter pills:
// All, Branding, Web Design, Social Media, Motion.
export const projects: Project[] = [
  {
    slug: "cresta",
    title: "Cresta",
    categories: ["Branding", "Web Design", "Social Media"],
    oneLiner:
      "Building a brand from scratch: naming, visual system, and digital product",
    image: crestaImage,
  },
  {
    slug: "live-oak",
    title: "Live-Oak",
    categories: ["Web Design"],
    oneLiner:
      "Full UX audit and redesign for a specialty hospital: four real user journeys, one navigation trying to serve all of them at once.",
    image: liveOakImage,
  },
  {
    slug: "prosolar",
    title: "Prosolar",
    categories: ["Branding", "Social Media", "Web Design"],
    oneLiner:
      "5 years of brand work that now feeds lead-gen campaigns generating 5,500+ leads.",
    image: prosolarImage,
  },
  {
    slug: "modomio",
    title: "ModoMio",
    categories: ["Branding", "Social Media", "Web Design"],
    oneLiner: "A brand built from zero for an itinerant dining experience in Milan.",
    image: modomioImage,
  },
  {
    slug: "motion",
    title: "Motion",
    categories: ["Social Media", "Web Design", "Branding", "Graphic Design"],
    oneLiner:
      "Beyond static design: video, animation, illustration, and 3D as tools for communication.",
    image: motionImage,
  },
  {
    slug: "duracell-isbusa",
    title: "Duracell + ISBUSA",
    categories: ["Social Media"],
    oneLiner: "Two brands, two different starting points, one job: make it perform.",
    image: duracellImage,
  },
];
