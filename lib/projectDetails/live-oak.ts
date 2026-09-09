import type { ProjectDetail } from "@/lib/projectBlocks";
import coverImage from "@/assets/images/project/live/portada.jpg";
import problemImage from "@/assets/images/project/live/problem.jpg";
import solutionImage from "@/assets/images/project/live/solution.jpg";
import homeWireframe from "@/assets/images/project/live/LiveOak-Home-Wireframe.jpg";
import aboutWireframe from "@/assets/images/project/live/LiveOak-About-Wireframe.jpg";
import neurologyWireframe from "@/assets/images/project/live/LiveOak-Neurology-Wireframe.jpg";
import processImage1 from "@/assets/images/project/live/imagen1.jpg";
import processImage2 from "@/assets/images/project/live/imagen2.jpg";

export const liveOak: ProjectDetail = {
  slug: "live-oak",
  title: "Live Oak Veterinary Specialists",
  subtitle: "UX Audit & Redesign for a specialty veterinary hospital",
  coverImage,
  nextProjectSlugs: ["prosolar", "modomio"],
  blocks: [
    {
      type: "meta",
      heading: "Overview",
      paragraph:
        "Live Oak Veterinary Specialists is a multi-specialty and emergency veterinary hospital in Savannah, Georgia. The client wanted to highlight emergency care, put their specialties front and center, separate content for pet owners from content for referring veterinarians, and simplify how people could actually get in touch.",
      fields: [
        { label: "Role", value: "End-to-end web designer" },
        { label: "Client", value: "Live Oak Veterinary Specialist" },
        { label: "Project Duration", value: "6 Months" },
        { label: "Year", value: "2025" },
      ],
      cta: {
        label: "Prototype",
        href: "https://liveoakveterinary.framer.website/?editSite",
      },
    },
    {
      type: "text",
      heading: "The Problem",
      paragraph:
        "The client's four goals and the site's actual structure were working against each other. Emergency care and specialties were meant to stand out, but they carried the same visual weight as everything else on the page. Pet owners and referring vets, two completely different audiences, shared one navigation built for neither. And every way of getting in touch, booking, referring a case, asking a question, funneled into a single generic contact button.",
      image: { src: problemImage, alt: "The Problem" },
    },
    {
      type: "keyDecisions",
      heading: "The Solution",
      items: [
        "Rebuilt the navigation around pet owners as the primary audience, with a separate path for veterinarians instead of competing for the same header space",
        "Gave emergency care one persistent, unmissable action instead of burying it in general contact",
        "Paired every specialty with its own doctor and a clear next step, so “highlight our specialties” became something visible, not just implied",
        "Rewrote medical language in plain terms, so a worried pet owner doesn't need a medical dictionary to understand their options",
        "Added the FAQ pet owners actually need before calling, which didn't exist before",
      ],
      image: { src: solutionImage, alt: "The Solution" },
    },
    {
      type: "cards",
      heading: "Research",
      intro: "Four distinct people, each needing something different within seconds of arriving:",
      items: [
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
    },
    {
      type: "uiStyle",
      heading: "UI Style",
      colors: [
        { label: "Primary color", hex: "#194B5B" },
        { label: "Background color", hex: "#F4E2A2" },
        { label: "Secondary color", hex: "#E27E38" },
        { label: "Secondary color", hex: "#898B35" },
      ],
      typefaceName: "Switzer",
      fontFamily: "'Switzer', sans-serif",
      fontLinkHref: "https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap",
      weightsLabel: "Regular | Medium | Semibold | Bold",
      specimenText:
        "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz • 0123456789 • !@#$%&*()_+",
      specimenBackground: "#FAF7F2",
    },
    {
      type: "gallery",
      heading: "Wireframes",
      columns: 3,
      images: [
        { src: homeWireframe, alt: "Home wireframe", caption: "Home" },
        { src: aboutWireframe, alt: "About wireframe", caption: "About" },
        { src: neurologyWireframe, alt: "Neurology wireframe", caption: "Neurology" },
      ],
    },
    {
      type: "video",
      videoUrl: "https://youtu.be/HtExi1wee9I",
      images: [
        { src: processImage1, alt: "" },
        { src: processImage2, alt: "" },
      ],
    },
  ],
};
