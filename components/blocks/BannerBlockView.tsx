import Image from "next/image";
import type { BannerBlock } from "@/lib/projectBlocks";

export function BannerBlockView({ block }: { block: BannerBlock }) {
  const hasPhoto = Boolean(block.image.src);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-accent/20">
      {hasPhoto && (
        <>
          <Image
            src={block.image.src!}
            alt={block.image.alt}
            fill
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}
      <p
        className={`relative mx-auto max-w-2xl px-8 py-20 text-center font-heading text-lg leading-snug sm:text-xl ${
          hasPhoto ? "text-button-background" : "text-foreground"
        }`}
      >
        {block.paragraph}
      </p>
    </div>
  );
}
