import type { ProjectBlock } from "@/lib/projectBlocks";
import { TextBlockView } from "@/components/blocks/TextBlockView";
import { KeyDecisionsBlockView } from "@/components/blocks/KeyDecisionsBlockView";
import { CardsBlockView } from "@/components/blocks/CardsBlockView";
import { GalleryBlockView } from "@/components/blocks/GalleryBlockView";
import { MosaicBlockView } from "@/components/blocks/MosaicBlockView";
import { MetaBlockView } from "@/components/blocks/MetaBlockView";
import { VideoBlockView } from "@/components/blocks/VideoBlockView";
import { UiStyleBlockView } from "@/components/blocks/UiStyleBlockView";
import { BannerBlockView } from "@/components/blocks/BannerBlockView";
import { BrandStyleBlockView } from "@/components/blocks/BrandStyleBlockView";

export function ProjectBlockRenderer({ block }: { block: ProjectBlock }) {
  switch (block.type) {
    case "text":
      return <TextBlockView block={block} />;
    case "keyDecisions":
      return <KeyDecisionsBlockView block={block} />;
    case "cards":
      return <CardsBlockView block={block} />;
    case "gallery":
      return <GalleryBlockView block={block} />;
    case "mosaic":
      return <MosaicBlockView block={block} />;
    case "meta":
      return <MetaBlockView block={block} />;
    case "video":
      return <VideoBlockView block={block} />;
    case "uiStyle":
      return <UiStyleBlockView block={block} />;
    case "banner":
      return <BannerBlockView block={block} />;
    case "brandStyle":
      return <BrandStyleBlockView block={block} />;
    default: {
      const exhaustiveCheck: never = block;
      return exhaustiveCheck;
    }
  }
}
