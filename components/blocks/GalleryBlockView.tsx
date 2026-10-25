import { ZoomableImage } from "@/components/ZoomableImage";
import { ZoomableVideo } from "@/components/ZoomableVideo";
import type { GalleryBlock } from "@/lib/projectBlocks";
import { isYoutubeUrl, toYoutubeEmbedUrl } from "@/lib/youtube";

const columnsClass: Record<GalleryBlock["columns"], string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
};

const aspectClass: Record<NonNullable<GalleryBlock["aspect"]>, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/9]",
};

const sizesByColumns: Record<GalleryBlock["columns"], string> = {
  1: "100vw",
  2: "(min-width: 1024px) 32rem, 100vw",
  3: "(min-width: 1024px) 21rem, 100vw",
};

export function GalleryBlockView({ block }: { block: GalleryBlock }) {
  const boxAspect = aspectClass[block.aspect ?? "portrait"];

  return (
    <div>
      {block.heading && <h2 className="font-heading text-2xl">{block.heading}</h2>}
      <div className={`grid gap-6 ${columnsClass[block.columns]} ${block.heading ? "mt-6" : ""}`}>
        {block.images.map((item, index) => {
          if (item.kind === "video") {
            return (
              <div key={`${item.alt}-${index}`} className="flex flex-col gap-3">
                {item.src && isYoutubeUrl(item.src) ? (
                  <div className={`${boxAspect} overflow-hidden rounded-2xl bg-accent/20`}>
                    <iframe
                      className="h-full w-full"
                      src={toYoutubeEmbedUrl(item.src)}
                      title={item.alt}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : item.src ? (
                  <ZoomableVideo
                    src={item.src}
                    alt={item.alt}
                    wrapperClassName={`${boxAspect} rounded-2xl`}
                  />
                ) : (
                  <div className={`${boxAspect} relative rounded-2xl bg-accent/20`}>
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/15">
                        <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-foreground">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  </div>
                )}
              </div>
            );
          }

          const image = item;
          const isContain = image.fit === "contain";
          return (
            <div key={`${image.alt}-${index}`} className="flex flex-col gap-3">
              {image.src ? (
                <ZoomableImage
                  src={image.src}
                  alt={image.alt}
                  wrapperClassName={isContain ? "rounded-2xl" : `${boxAspect} rounded-2xl`}
                  sizes={sizesByColumns[block.columns]}
                  fit={image.fit}
                />
              ) : (
                <div className={`${boxAspect} rounded-2xl bg-accent/20`} />
              )}
              {image.caption && (
                <span className="text-center font-sans text-sm font-bold text-foreground">
                  {image.caption}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
