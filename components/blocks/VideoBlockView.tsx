import Image from "next/image";
import type { VideoBlock } from "@/lib/projectBlocks";
import { toYoutubeEmbedUrl } from "@/lib/youtube";

function VideoPlayer({ videoUrl, title, className = "" }: { videoUrl?: string; title: string; className?: string }) {
  return (
    <div className={`aspect-video w-full overflow-hidden rounded-3xl bg-accent/20 ${className}`}>
      {videoUrl ? (
        <iframe
          className="h-full w-full"
          src={toYoutubeEmbedUrl(videoUrl)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-button-background">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6 text-foreground">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export function VideoBlockView({ block }: { block: VideoBlock }) {
  return (
    <div>
      {block.heading && <h2 className="font-heading text-2xl">{block.heading}</h2>}
      {block.paragraph && (
        <p className={`font-sans text-foreground/80 ${block.heading ? "mt-4" : ""}`}>
          {block.paragraph}
        </p>
      )}
      <VideoPlayer
        videoUrl={block.videoUrl}
        title={block.heading ?? "Project video"}
        className={block.heading || block.paragraph ? "mt-6" : ""}
      />
      {block.additionalVideoUrls?.map((videoUrl, index) => (
        <VideoPlayer
          key={videoUrl}
          videoUrl={videoUrl}
          title={`${block.heading ?? "Project video"} ${index + 2}`}
          className="mt-6"
        />
      ))}
      {block.images && block.images.length > 0 && (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {block.images.map((image, index) => (
            <div
              key={`${image.alt}-${index}`}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-accent/20"
            >
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
          ))}
        </div>
      )}
    </div>
  );
}
