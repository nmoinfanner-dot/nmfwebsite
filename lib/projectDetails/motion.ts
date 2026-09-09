import type { ProjectDetail } from "@/lib/projectBlocks";
import coverImage from "@/assets/images/project/motion/motion.png";
import motion01 from "@/assets/images/project/motion/motion-01.png";
import motion02 from "@/assets/images/project/motion/motion-02.png";
import motion04 from "@/assets/images/project/motion/motion-04.png";

export const motion: ProjectDetail = {
  slug: "motion",
  title: "Motion & Creative Skills",
  subtitle: "Beyond static design: video, animation, illustration, and 3D as tools for communication.",
  coverImage,
  coverVideoUrl: "https://youtu.be/3hMgEgovn9w",
  nextProjectSlugs: ["cresta", "prosolar"],
  blocks: [
    {
      type: "meta",
      paragraph:
        "Motion has been part of my practice through both agency work at Blue Edge Business Solutions and independent projects, combining After Effects, 3D design, and illustration to explore what static design alone can't communicate.",
      fields: [
        { label: "Experience", value: "Motion design at Blue Edge Business Solutions and independent projects" },
        { label: "Tools", value: "After Effects, 3D Design, Adobe Creative Cloud" },
      ],
    },
    {
      type: "gallery",
      columns: 3,
      images: [
        { kind: "video", src: "https://youtu.be/0ID448QDEhU", alt: "Motion reel 1" },
        { kind: "video", src: "https://youtu.be/qVLb_cYQh0g", alt: "Motion reel 2" },
        { kind: "video", src: "https://youtu.be/-H0C-rXwrvI", alt: "Motion reel 3" },
        { kind: "video", src: "https://youtu.be/pAdN1hoVBUw", alt: "Motion reel 4" },
        { kind: "video", src: "/videos/motion/stories.mp4", alt: "Motion stories reel" },
        { kind: "video", src: "/videos/motion/Render_Final.mp4", alt: "Motion 3D render" },
        { kind: "image", src: motion01, alt: "Motion visual 1" },
        { kind: "image", src: motion02, alt: "Motion visual 2" },
        { kind: "image", src: motion04, alt: "Motion visual 4" },
      ],
    },
  ],
};
