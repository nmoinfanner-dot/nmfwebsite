"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

export function ProjectPreviewCarousel({
  images,
}: {
  images: { src: StaticImageData; alt: string }[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-40 w-full overflow-hidden rounded-2xl">
      {images.map((image, i) => (
        <Image
          key={image.alt}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 17vw, 100vw"
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
