import Image from "next/image";
import type { BrandStyleBlock } from "@/lib/projectBlocks";

export function BrandStyleBlockView({ block }: { block: BrandStyleBlock }) {
  const hasPalette = Boolean(block.colorGroups?.length || block.typefaces?.length);

  // No palette: the image is the whole block (e.g. a full UI style board),
  // shown at its natural size instead of cropped into a fixed box, with an
  // optional dedicated mobile crop.
  if (!hasPalette) {
    return (
      <div>
        <h2 className="font-heading text-2xl">{block.heading}</h2>
        <div className="mt-6">
          {block.image.src ? (
            <>
              <Image
                src={block.image.src}
                alt={block.image.alt}
                sizes="(min-width: 768px) 100vw, 0vw"
                className={`w-full rounded-3xl ${block.image.srcMobile ? "hidden md:block" : ""}`}
              />
              {block.image.srcMobile && (
                <Image
                  src={block.image.srcMobile}
                  alt={block.image.alt}
                  sizes="(max-width: 767px) 100vw, 0vw"
                  className="w-full rounded-3xl md:hidden"
                />
              )}
            </>
          ) : (
            <div className="aspect-[5/4] w-full rounded-3xl bg-accent/20" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-heading text-2xl">{block.heading}</h2>
      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-accent/20">
          {block.image.src && (
            <Image
              src={block.image.src}
              alt={block.image.alt}
              fill
              sizes="(min-width: 1024px) 32rem, 100vw"
              className="object-cover"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          {block.colorGroups && block.colorGroups.length > 0 && (
            <div className="flex flex-wrap gap-8">
              {block.colorGroups.map((group) => (
                <div key={group.label}>
                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-foreground/50">
                    {group.label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {group.colors.map((hex, index) => (
                      <div key={`${hex}-${index}`} className="flex flex-col items-center gap-2">
                        <div
                          className="h-12 w-12 rounded-full border border-foreground/10"
                          style={{ backgroundColor: hex }}
                        />
                        <span className="font-sans text-xs text-foreground/50">{hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {block.typefaces && block.typefaces.length > 0 && (
            <div className="flex flex-col gap-2 rounded-3xl bg-button-background p-6">
              {block.typefaces.map((typeface) => (
                <p key={typeface.label} className="font-sans text-foreground/80">
                  <span className="font-bold text-foreground">{typeface.label}:</span>{" "}
                  {typeface.value}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
