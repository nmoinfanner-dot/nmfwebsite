import type { ProjectDetail } from "@/lib/projectBlocks";
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

export const cresta: ProjectDetail = {
  slug: "cresta",
  title: "Cresta",
  subtitle: "Building a brand from scratch: naming, visual system, and digital product",
  coverImage,
  nextProjectSlugs: ["duracell-isbusa", "live-oak"],
  blocks: [
    {
      type: "meta",
      paragraph:
        "Cresta is an end-to-end brand identity project for a trekking and food experience retreat in Lorsica, Italy. I led the process from naming through a launch-ready digital product: brand concept and naming (developed trilingually in Spanish, Italian, and English), logo and visual identity, a contextual color and typography system, brand content (menus, experience packages), UX for a full booking flow, and a website designed.",
      fields: [
        { label: "Role", value: "End-to-end web designer" },
        { label: "Client", value: "Cresta" },
        { label: "Tools", value: "Figma, Figma Sites, Figma Motion" },
        { label: "Timeline", value: "April - July 2026" },
      ],
      // TODO: no real prototype link yet, placeholder until Natalia sends one.
      cta: { label: "Prototype", href: "#" },
    },
    {
      type: "text",
      heading: "Research",
      paragraph:
        "The moodboard went through several rounds of correction: early references leaned too editorial (glossy hands, plated fine-dining food), far from the 'premium but homemade' feeling the brand needed. The final board settled into three threads that coexist: the physical (mountains, trails, worn boots), the social (long tables, cards, laughter), and the sensory (water, texture, hands), all in the same warm, unposed register.",
      image: { src: moodboardImage, alt: "Cresta research moodboard" },
    },
    {
      type: "keyDecisions",
      heading: "Key decisions",
      layout: "cards",
      columns: 4,
      items: [
        "Logo: a triangle of three asymmetric peaks, unambiguous at a glance, topped with a solid dot marking the arrival at the ridge, built with the same stroke weight as the wordmark's letters",
        "Color: Primary cream (background) and charcoal black (type and logo). Secondary dark green, for contrast blocks. Accent orange, used sparingly, never as a large surface",
        "Typography: Trueno for headlines and the wordmark, Metropolis for body copy, a serif reserved exclusively for the tagline, and Mebezt as a punctual accent for short, highlighted headlines",
        "Secondary icons: a system of solid icons drawn from the same geometric language as the mark, giving each brand pillar its own symbol instead of forcing the mountain to represent everything",
      ],
    },
    {
      type: "brandStyle",
      heading: "UI Style",
      image: { src: logoImage, alt: "Cresta logo" },
      colorGroups: [
        { label: "Principales", colors: ["#F3EEE2", "#1C1C1A"] },
        { label: "Secundarios", colors: ["#E4632A", "#ACD1E3", "#A9D18C", "#3B5E45"] },
      ],
      typefaces: [{ label: "Principal", value: "Trueno + Metropolis" }],
    },
    {
      type: "mosaic",
      heading: "Social Media",
      intro:
        "An Instagram content system built as a brand narrative arc, not standalone posts, including real trekking and kayak data cards from the surrounding area.",
      items: [
        { kind: "image", src: socialMedia1, alt: "Cresta social media post 1" },
        { kind: "image", src: socialMedia2, alt: "Cresta social media post 2" },
        { kind: "image", src: socialMedia3, alt: "Cresta social media post 3" },
        { kind: "image", src: socialMedia4, alt: "Cresta social media post 4" },
        { kind: "image", src: socialMedia5, alt: "Cresta social media post 5" },
        { kind: "image", src: socialMedia6, alt: "Cresta social media post 6" },
      ],
    },
    {
      type: "banner",
      paragraph:
        "Cresta is where the climb ends and the view begins. A place in the Ligurian mountains where you climb, you enjoy, and you arrive at a long table. Care in what's simple: surrounded by nature, home-cooked food, people who don't need an introduction to sit down. Cresta isn't for someone looking to escape the world, it's for someone looking to meet others in it.",
      image: { src: bannerImage, alt: "The Ligurian mountains around Cresta" },
    },
    {
      type: "gallery",
      heading: "Branding",
      columns: 2,
      images: [
        { src: cartelImage, alt: "Cresta poster" },
        { src: branding1Image, alt: "Cresta branding" },
        { src: tarjetaImage, alt: "Cresta card" },
        { src: propuestaImage, alt: "Cresta proposal" },
      ],
    },
    {
      type: "video",
      heading: "Website",
      videoUrl: "https://youtu.be/w5vGnQM9DuA",
    },
  ],
};
