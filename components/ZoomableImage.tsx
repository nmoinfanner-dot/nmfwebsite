"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

export function ZoomableImage({
  src,
  alt,
  wrapperClassName = "",
  sizes = "100vw",
}: {
  src: StaticImageData;
  alt: string;
  wrapperClassName?: string;
  sizes?: string;
}) {
  const [open, setOpen] = useState(false);

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
        aria-label={`Expand ${alt}`}
        className={`relative block w-full cursor-zoom-in overflow-hidden ${wrapperClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition duration-300 hover:scale-105"
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-button-background text-foreground transition-opacity duration-300 ease-out hover:opacity-80"
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
          <div
            className="relative h-[85vh] w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={src} alt={alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
