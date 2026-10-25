import type { ProjectDetail } from "@/lib/projectBlocks";
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

export const modomio: ProjectDetail = {
  slug: "modomio",
  title: "ModoMio",
  subtitle: "A brand built from zero for an itinerant dining experience in Milan.",
  coverImage,
  nextProjectSlugs: ["cresta", "duracell-isbusa"],
  blocks: [
    {
      type: "meta",
      paragraph:
        "MODOmio is an itinerant plant-based dining experience built around 'Mesa de Domingo', a slow, seasonal Sunday lunch format that brings together Italian culinary tradition and Argentine warmth. The experience travels: guests gather in private homes, agriturismos, and unique spaces, never the same place twice.",
      fields: [
        { label: "Year", value: "2025/26" },
        { label: "Industry", value: "Gastronomy" },
        { label: "Client", value: "ModoMio" },
        { label: "Base", value: "Milan, Italy" },
      ],
      cta: { label: "Prototype", href: "https://modomio.framer.website/" },
    },
    {
      type: "text",
      heading: "The Design Challenge",
      paragraph:
        "The brand needed to attract two very different audiences simultaneously: guests who want to attend, and hosts who want to offer their space. Each has a different emotional need. The visual identity had to speak to both without losing coherence.",
    },
    {
      type: "keyDecisions",
      heading: "Key decisions",
      layout: "cards",
      columns: 3,
      items: [
        "Logo: Bold condensed \"MODO\" paired with organic script \"mio\", a deliberate typographic tension. Structure meets warmth, precision meets spontaneity",
        "Color palette: Earth tones, gold, sage green, navy, near-black. Grounds the brand in food, nature, and intimacy without falling into generic plant-based clichés",
        "Slogan: \"Cucina che viaggia\", three words that explain the entire format without describing it literally",
        "Web: Built in Framer around the two audiences, each with their own entry point and narrative flow",
        "Collateral: Outreach materials designed for direct venue prospecting, flyers taken in person to restaurants and spaces",
        "Illustration system: Custom hand-drawn style, hands, glasses, pasta, vegetables, giving the brand warmth photography alone couldn't achieve",
      ],
    },
    {
      type: "brandStyle",
      heading: "UI Style",
      image: { src: uiStyleImage, alt: "ModoMio UI style board" },
    },
    {
      type: "gallery",
      columns: 1,
      aspect: "landscape",
      images: [
        { src: socialModoImage, alt: "ModoMio social media, wide format", fit: "contain" },
      ],
    },
    {
      type: "mosaic",
      heading: "Social Media",
      items: [
        { kind: "image", src: graphic04, alt: "ModoMio social media graphic 1" },
        { kind: "image", src: graphic03, alt: "ModoMio social media graphic 2" },
        { kind: "video", src: "/videos/modo/video-01.mp4", alt: "ModoMio social media video 1" },
        { kind: "image", src: graphic02, alt: "ModoMio social media graphic 3" },
        { kind: "video", src: "/videos/modo/video-02.mp4", alt: "ModoMio social media video 2" },
        { kind: "image", src: graphic01, alt: "ModoMio social media graphic 4" },
        { kind: "image", src: soldOutImage, alt: "ModoMio Edizione #02 sold out announcement" },
        { kind: "image", src: tortaImage, alt: "ModoMio crostata" },
        { kind: "image", src: sushiNightImage, alt: "ModoMio Sushi Night Plant-Based event" },
      ],
      cta: { label: "Follow on Instagram", href: "https://www.instagram.com/amodomio.vegan" },
    },
    {
      type: "video",
      heading: "Website",
      videoUrl: "https://youtu.be/N2kSfyFEGcw",
    },
    {
      type: "text",
      heading: "Result",
      paragraph:
        "Branding a concept that doesn't fit existing categories is the most interesting design problem there is. When there's no reference point, every decision has to justify itself from first principles. The test wasn't aesthetic, it was whether a venue owner reading the flyer for the first time understood immediately what was being offered and wanted to be part of it.",
    },
  ],
};
