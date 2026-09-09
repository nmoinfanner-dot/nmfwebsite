import type { ProjectDetail } from "@/lib/projectBlocks";
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

export const prosolar: ProjectDetail = {
  slug: "prosolar",
  title: "Prosolar",
  subtitle: "5 years of brand work that now feeds lead-gen campaigns generating 5,500+ leads.",
  coverImage,
  nextProjectSlugs: ["modomio", "motion"],
  blocks: [
    {
      type: "meta",
      paragraph:
        "Prosolar Systems is a solar energy company operating across multiple franchise markets in the US and Caribbean, California, Florida, Puerto Rico, St. Thomas, and the Caribbean.",
      sections: [
        {
          heading: "My role",
          paragraph:
            "Brand identity redesign and system development, web design, landing pages, and social media design. Ongoing collaboration over 5 years.",
        },
      ],
      fields: [
        { label: "Year", value: "2025" },
        { label: "Industry", value: "Solar Energy System" },
        { label: "Client", value: "Prosolar Systems" },
      ],
      cta: { label: "Prototype", href: "https://prosolarpr.framer.website/?editSite" },
    },
    {
      type: "text",
      heading: "The Challenge",
      paragraph:
        "Despite 5 years of growth, the brand had no unified visual system: inconsistent color usage, a logo that didn't scale across applications, no defined typography, and no guidelines to ensure coherence across locations. Each franchise was communicating differently, which undermined trust and recognition.",
      image: {
        src: oldBrandingImage,
        alt: "Old Prosolar branding",
        caption: "Old Branding",
        fit: "contain",
      },
    },
    {
      type: "keyDecisions",
      heading: "Key decisions",
      layout: "cards",
      columns: 5,
      items: [
        "Color: Green-to-blue gradient built around meaning, sustainability meets technology. Designed to work from van wraps to social media icons",
        "Logo: Rebuilt for functionality, safe zones, misuse rules, icon and app versions defined",
        "Typography: Poppins as primary for its technical clarity and approachable tone. Secondary decorative system defined for campaigns without breaking consistency",
        "Photography: Regional approach, real installations per market (Caribbean, California, Puerto Rico, Florida) for authenticity over stock",
        "Applications: System extended to uniforms, vehicle wraps, merchandising, partner logos, and Prosolar Shop",
      ],
    },
    {
      type: "brandStyle",
      heading: "UI Style",
      image: { src: uiStyleDesktop, alt: "Prosolar UI style board", srcMobile: uiStyleMobile },
    },
    {
      type: "mosaic",
      heading: "Social Media",
      aspect: "square",
      items: [
        { kind: "image", src: graphics1, alt: "Prosolar social media graphic 1" },
        { kind: "image", src: graphics2, alt: "Prosolar social media graphic 2" },
        { kind: "image", src: graphics3, alt: "Prosolar social media graphic 3" },
        { kind: "image", src: graphics4, alt: "Prosolar social media graphic 4" },
        { kind: "image", src: graphics5, alt: "Prosolar social media graphic 5" },
        { kind: "image", src: graphics6, alt: "Prosolar social media graphic 6" },
      ],
    },
    {
      type: "video",
      heading: "Website",
      paragraph:
        "Designed around the customer journey: who they are, real projects, financing options, testimonials, conversion. Separate landing pages per service. Full brand system applied digitally.",
      videoUrl: "https://youtu.be/-Z4dbpJWOrg",
      additionalVideoUrls: ["https://youtu.be/uOzm2n_Ds5c"],
    },
    {
      type: "text",
      heading: "The Result",
      paragraph:
        "A complete brand system capable of scaling across markets and franchise locations, with documented guidelines that any team or market could follow independently. The brand went from inconsistent to immediately recognizable, whether on a van in California or a social media post in Puerto Rico.",
      image: { src: resultImage, alt: "Prosolar brand system overview", fit: "contain" },
      imagePosition: "below",
    },
  ],
};
