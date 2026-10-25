import { ZoomableImage } from "@/components/ZoomableImage";
import { ZoomableVideo } from "@/components/ZoomableVideo";
import { darkButtonClasses } from "@/components/buttons";
import type { MosaicBlock } from "@/lib/projectBlocks";

const aspectClass: Record<NonNullable<MosaicBlock["aspect"]>, string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export function MosaicBlockView({ block }: { block: MosaicBlock }) {
  const boxAspect = aspectClass[block.aspect ?? "portrait"];

  return (
    <div>
      <h2 className="font-heading text-2xl">{block.heading}</h2>
      {block.intro && <p className="mt-4 font-sans text-foreground/70">{block.intro}</p>}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {block.items.map((item, index) => {
          if (item.kind === "video") {
            return (
              <ZoomableVideo
                key={`${item.alt}-${index}`}
                src={item.src}
                alt={item.alt}
                wrapperClassName={`${boxAspect} rounded-2xl`}
              />
            );
          }
          return item.src ? (
            <ZoomableImage
              key={`${item.alt}-${index}`}
              src={item.src}
              alt={item.alt}
              wrapperClassName={`${boxAspect} rounded-2xl`}
              sizes="(min-width: 1024px) 16rem, 50vw"
            />
          ) : (
            <div key={`${item.alt}-${index}`} className={`${boxAspect} rounded-2xl bg-accent/20`} />
          );
        })}
      </div>
      {block.cta && (
        <a
          href={block.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${darkButtonClasses} mt-6`}
        >
          {block.cta.label}
        </a>
      )}
    </div>
  );
}
