import Image from "next/image";
import type { TextBlock } from "@/lib/projectBlocks";

function ImageBox({ image, className }: { image: NonNullable<TextBlock["image"]>; className: string }) {
  // "contain" with a real image: render at its natural size, no fixed
  // aspect-ratio box and no accent background showing behind it.
  if (image.fit === "contain" && image.src) {
    return (
      <div className="flex flex-col gap-3">
        <Image
          src={image.src}
          alt={image.alt}
          sizes="(min-width: 1024px) 32rem, 100vw"
          className="w-full rounded-3xl"
        />
        {image.caption && (
          <span className="text-center font-sans text-sm font-bold text-foreground">
            {image.caption}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className={`relative overflow-hidden rounded-3xl bg-accent/20 ${className}`}>
        {image.src && (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 32rem, 100vw"
            className="object-cover"
          />
        )}
      </div>
      {image.caption && (
        <span className="text-center font-sans text-sm font-bold text-foreground">
          {image.caption}
        </span>
      )}
    </div>
  );
}

export function TextBlockView({ block }: { block: TextBlock }) {
  if (block.variant === "statement") {
    return (
      <p className="mx-auto max-w-3xl text-center font-heading text-2xl leading-snug sm:text-3xl lg:text-4xl">
        {block.paragraph}
      </p>
    );
  }

  const content = (
    <div>
      {block.heading && <h2 className="font-heading text-2xl">{block.heading}</h2>}
      <p className={`font-sans text-foreground/80 ${block.heading ? "mt-4" : ""}`}>
        {block.paragraph}
      </p>
    </div>
  );

  if (!block.image) {
    return content;
  }

  if (block.imagePosition === "below") {
    return (
      <div className="flex flex-col gap-6">
        {content}
        <ImageBox image={block.image} className="aspect-[16/9]" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-x-12">
      <ImageBox image={block.image} className="aspect-[4/3]" />
      {content}
    </div>
  );
}
