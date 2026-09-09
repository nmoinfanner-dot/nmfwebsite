"use client";

import { useEffect, useState } from "react";

export function ZoomableVideo({
  src,
  alt,
  wrapperClassName = "",
}: {
  src: string;
  alt: string;
  wrapperClassName?: string;
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
      <div className={`relative w-full overflow-hidden ${wrapperClassName}`}>
        <video
          src={src}
          controls
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Expand ${alt}`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-foreground/60 text-button-background transition-colors duration-300 ease-out hover:bg-foreground/80"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </button>
      </div>

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
            <video src={src} controls autoPlay loop className="h-full w-full object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
