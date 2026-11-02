import type { ProjectDetail } from "@/lib/projectBlocks";
import { format, type Locale } from "@/lib/i18n/config";
import coverImage from "@/assets/images/project/motion/motion.png";
import motion01 from "@/assets/images/project/motion/motion-01.png";
import motion02 from "@/assets/images/project/motion/motion-02.png";
import motion04 from "@/assets/images/project/motion/motion-04.png";

const en = {
  title: "Motion & Creative Skills",
  subtitle:
    "Beyond static design: video, animation, illustration, and 3D as tools for communication.",
  seoTitle: "Motion Design Portfolio",
  seoDescription:
    "Motion design, video, animation, illustration and 3D by Natalia Moin Fanner, from agency campaigns at Blue Edge to independent projects, made in After Effects.",
  intro:
    "Motion has been part of my practice through both agency work at Blue Edge Business Solutions and independent projects, combining After Effects, 3D design, and illustration to explore what static design alone can't communicate.",
  experience: "Experience",
  experienceValue: "Motion design at Blue Edge Business Solutions and independent projects",
  tools: "Tools",
  toolsValue: "After Effects, 3D Design, Adobe Creative Cloud",
  reelAlt: "Motion reel {n}",
  storiesAlt: "Motion stories reel",
  renderAlt: "Motion 3D render",
  visualAlt: "Motion visual {n}",
};

type Copy = typeof en;

const es: Copy = {
  title: "Motion y habilidades creativas",
  subtitle:
    "Más allá del diseño estático: video, animación, ilustración y 3D como herramientas de comunicación.",
  seoTitle: "Portfolio de motion design",
  seoDescription:
    "Motion design, video, animación, ilustración y 3D de Natalia Moin Fanner, desde campañas de agencia en Blue Edge hasta proyectos independientes, hechos en After Effects.",
  intro:
    "El motion ha sido parte de mi práctica, tanto en el trabajo de agencia en Blue Edge Business Solutions como en proyectos independientes, combinando After Effects, diseño 3D e ilustración para explorar lo que el diseño estático por sí solo no puede comunicar.",
  experience: "Experiencia",
  experienceValue: "Motion design en Blue Edge Business Solutions y proyectos independientes",
  tools: "Herramientas",
  toolsValue: "After Effects, diseño 3D, Adobe Creative Cloud",
  reelAlt: "Reel de motion {n}",
  storiesAlt: "Reel de stories de motion",
  renderAlt: "Render 3D de motion",
  visualAlt: "Pieza visual de motion {n}",
};

const it: Copy = {
  title: "Motion e competenze creative",
  subtitle:
    "Oltre il design statico: video, animazione, illustrazione e 3D come strumenti di comunicazione.",
  seoTitle: "Portfolio di motion design",
  seoDescription:
    "Motion design, video, animazione, illustrazione e 3D di Natalia Moin Fanner, dalle campagne per l'agenzia Blue Edge ai progetti indipendenti, realizzati in After Effects.",
  intro:
    "Il motion è parte del mio lavoro, sia nell'attività in agenzia in Blue Edge Business Solutions sia nei progetti indipendenti, unendo After Effects, design 3D e illustrazione per esplorare ciò che il design statico da solo non riesce a comunicare.",
  experience: "Esperienza",
  experienceValue: "Motion design in Blue Edge Business Solutions e progetti indipendenti",
  tools: "Strumenti",
  toolsValue: "After Effects, design 3D, Adobe Creative Cloud",
  reelAlt: "Reel motion {n}",
  storiesAlt: "Reel di stories motion",
  renderAlt: "Render 3D motion",
  visualAlt: "Visual motion {n}",
};

const copy: Record<Locale, Copy> = { en, es, it };

export function motion(lang: Locale): ProjectDetail {
  const c = copy[lang];
  const n = (template: string, value: number) => format(template, { n: String(value) });

  return {
    slug: "motion",
    title: c.title,
    subtitle: c.subtitle,
    coverImage,
    seo: { title: c.seoTitle, description: c.seoDescription },
    coverVideoUrl: "https://youtu.be/3hMgEgovn9w",
    nextProjectSlugs: ["cresta", "prosolar"],
    blocks: [
      {
        type: "meta",
        paragraph: c.intro,
        fields: [
          { label: c.experience, value: c.experienceValue },
          { label: c.tools, value: c.toolsValue },
        ],
      },
      {
        type: "gallery",
        columns: 3,
        images: [
          { kind: "video", src: "https://youtu.be/0ID448QDEhU", alt: n(c.reelAlt, 1) },
          { kind: "video", src: "https://youtu.be/qVLb_cYQh0g", alt: n(c.reelAlt, 2) },
          { kind: "video", src: "https://youtu.be/-H0C-rXwrvI", alt: n(c.reelAlt, 3) },
          { kind: "video", src: "https://youtu.be/pAdN1hoVBUw", alt: n(c.reelAlt, 4) },
          { kind: "video", src: "/videos/motion/stories.mp4", alt: c.storiesAlt },
          { kind: "video", src: "/videos/motion/Render_Final.mp4", alt: c.renderAlt },
          { kind: "image", src: motion01, alt: n(c.visualAlt, 1) },
          { kind: "image", src: motion02, alt: n(c.visualAlt, 2) },
          { kind: "image", src: motion04, alt: n(c.visualAlt, 4) },
        ],
      },
    ],
  };
}
