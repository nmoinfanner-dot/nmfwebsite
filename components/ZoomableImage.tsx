"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { useLocale } from "@/components/LocaleProvider";
import { format } from "@/lib/i18n/config";

export function ZoomableImage({
  src,
  alt,
  wrapperClassName = "",
  sizes = "100vw",
  fit = "cover",
  page = false,
}: {
  src: StaticImageData;
  alt: string;
  wrapperClassName?: string;
  sizes?: string;
  // "cover" (default) fills a fixed-aspect box, cropping as needed.
  // "contain" renders the image at its natural aspect ratio instead, so
  // nothing gets cropped (wrapperClassName shouldn't include an aspect
  // class in that case).
  fit?: "cover" | "contain";
  // A very tall image (a full web page screenshot). The thumbnail shows its
  // top, and the lightbox scrolls so the whole page can be read.
  page?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const { zoom } = useLocale().common;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={format(zoom.expand, { alt })}
        className={`block w-full cursor-zoom-in overflow-hidden ${fit === "cover" ? "relative" : ""} ${wrapperClassName}`}
      >
        {fit === "cover" ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className={`object-cover transition duration-300 hover:scale-105 ${page ? "object-top" : ""}`}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            sizes={sizes}
            className="h-auto w-full object-contain transition duration-300 hover:scale-105"
          />
        )}
      </button>

      {open && (
        <div
          className={`fixed inset-0 z-50 bg-black/85 p-6 ${
            page ? "overflow-y-auto px-3" : "flex items-center justify-center"
          }`}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={zoom.close}
            className="fixed right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-button-background text-foreground transition-opacity duration-300 ease-out hover:opacity-80"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-5 w-5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {page ? (
            <div
              className="mx-auto w-full pt-12"
              style={{ maxWidth: Math.min(src.width, 768) }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                // The original file, so small text on the page stays readable.
                unoptimized
                className="h-auto w-full rounded-lg"
              />
            </div>
          ) : (
            <div
              className="relative h-[85vh] w-full max-w-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={src} alt={alt} fill sizes="90vw" className="object-contain" />
            </div>
          )}
        </div>
      )}
    </>
  );
}
