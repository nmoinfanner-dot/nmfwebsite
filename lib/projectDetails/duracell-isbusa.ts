import type { ProjectDetail } from "@/lib/projectBlocks";
import coverImage from "@/assets/images/project/duracell/duracell.png";
import socialDuracellImage from "@/assets/images/project/duracell/social-duracell.jpg";
import ivGraphic1 from "@/assets/images/project/duracell/iv-graphic-01.jpg";
import ivGraphic2 from "@/assets/images/project/duracell/iv-graphic-02.jpg";
import ivGraphic3 from "@/assets/images/project/duracell/iv-graphic-03.jpg";
import ivGraphic4 from "@/assets/images/project/duracell/iv-graphic-04.jpg";
import ivGraphic5 from "@/assets/images/project/duracell/iv-graphic-05.jpg";
import ivGraphic6 from "@/assets/images/project/duracell/iv-graphic-06.jpg";
import result1 from "@/assets/images/project/duracell/result-01.jpg";
import result2 from "@/assets/images/project/duracell/result-02.jpg";
import result3 from "@/assets/images/project/duracell/result-03.jpg";

export const duracellIsbusa: ProjectDetail = {
  slug: "duracell-isbusa",
  title: "Duracell + ISBUSA",
  subtitle: "Two brands, two different starting points, one job: make it perform.",
  coverImage,
  nextProjectSlugs: ["motion", "live-oak"],
  blocks: [
    {
      type: "meta",
      paragraph:
        "Two retail accounts from my time at Blue Edge, grouped together because they prove the same point from opposite directions. Duracell needed performance inside a brand system I didn't control. ISBUSA had no system at all, so I built one first, then proved it through paid social. This case covers the strategy and creative behind both.",
      fields: [
        { label: "Role", value: "End-to-end Senior designer" },
        { label: "Client", value: "Duracell + ISBUSA" },
        { label: "Project Duration", value: "2 years" },
        { label: "Year", value: "2024/25" },
      ],
    },
    {
      type: "keyDecisions",
      heading: "The Challenge",
      layout: "cards",
      columns: 3,
      items: [
        "Duracell came with a mandatory brand system already set by the client, no creative freedom, performance had to come from execution alone",
        "ISBUSA had no brand guidelines at all, nothing to build campaigns on top of",
        "Both needed paid social that actually converted, not just posted",
      ],
    },
    {
      type: "keyDecisions",
      heading: "My Role",
      items: [
        "Duracell: Built and ran the paid social and organic content strategy inside the client's existing brand guidelines, content calendars, on-brand creative, full-funnel Facebook and Instagram Ads, plus ongoing SEO work",
        "ISBUSA: Created the brand guidelines from scratch, then built and directed a full-funnel paid social strategy on top of them, prospecting, nurture, retargeting, brand awareness",
      ],
    },
    {
      type: "gallery",
      columns: 1,
      aspect: "landscape",
      images: [{ src: socialDuracellImage, alt: "Duracell + ISBUSA social media, wide format" }],
    },
    {
      type: "mosaic",
      heading: "Social Media",
      items: [
        { kind: "image", src: ivGraphic1, alt: "ISBUSA social media graphic 1" },
        { kind: "image", src: ivGraphic2, alt: "ISBUSA social media graphic 2" },
        { kind: "image", src: ivGraphic3, alt: "ISBUSA social media graphic 3" },
        { kind: "image", src: ivGraphic4, alt: "ISBUSA social media graphic 4" },
        { kind: "image", src: ivGraphic5, alt: "ISBUSA social media graphic 5" },
        { kind: "image", src: ivGraphic6, alt: "ISBUSA social media graphic 6" },
      ],
    },
    {
      type: "keyDecisions",
      heading: "The Result",
      items: [
        "Duracell: Turned $483 in ad spend into $32,873 in revenue in a single month, a 68x return strong enough to become the agency's own case study",
        "ISBUSA: Delivered a 28x return on ad spend and reached 87,700+ people through the full-funnel system",
      ],
    },
    {
      type: "gallery",
      columns: 3,
      images: [
        { src: result1, alt: "Duracell + ISBUSA result 1" },
        { src: result2, alt: "Duracell + ISBUSA result 2" },
        { src: result3, alt: "Duracell + ISBUSA result 3" },
      ],
    },
  ],
};
