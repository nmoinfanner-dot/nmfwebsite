import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import { toYoutubeEmbedUrl } from "@/lib/youtube";
import serviceCrestaImage from "@/assets/images/project/cresta/service-cresta.png";
import lugarImage from "@/assets/images/project/cresta/lugar.png";
import imagen1Image from "@/assets/images/project/live/imagen1.jpg";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    number: "01",
    heading: "Brand Identity",
    paragraph:
      "Visual identity systems that work across every touchpoint: logo, color, typography, guidelines, and applications. Not just a logo. A system.",
    items: [
      "Naming and brand strategy (when needed)",
      "Logo and visual identity system",
      "Color, typography, and usage guidelines",
      "Brand applications across web, social, print, and merchandise",
    ],
    media: { type: "image" as const, src: serviceCrestaImage, alt: "Brand Identity" },
  },
  {
    number: "02",
    heading: "Graphic Design",
    paragraph:
      "From landing pages to social media to print collateral, design that carries your brand consistently across formats and channels.",
    items: [
      "Social media content systems",
      "Print and digital collateral",
      "Campaign creative",
      "Presentation and pitch deck design",
    ],
    media: { type: "image" as const, src: lugarImage, alt: "Graphic Design" },
  },
  {
    number: "03",
    heading: "Web Design",
    paragraph:
      "Full website design, from structure and content hierarchy to visual language and interaction. Built around how your users actually think, not how you want to be seen.",
    items: [
      "UX research and structure",
      "Full desktop and mobile design in Figma",
      "Interactive prototypes",
      "Framer or Next.js implementation",
    ],
    media: { type: "image" as const, src: imagen1Image, alt: "Web Design" },
  },
  {
    number: "04",
    heading: "Motion Design",
    paragraph:
      "Video, animation, and 3D used with intention, adding movement where it clarifies, not just decorates.",
    items: [
      "Animated logos and brand intros",
      "Social media motion content",
      "3D elements and illustration",
      "Video editing and post-production",
    ],
    media: { type: "video" as const, videoUrl: "https://youtu.be/wFcUVoaI6sU" },
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background px-6 py-10 sm:px-10 lg:px-[100px] lg:py-12">
      <SiteNav />

      <Reveal>
        <header className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl">
            How I Elevate Your Brand
          </h1>
        </header>
      </Reveal>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col divide-y divide-foreground/10 lg:mt-20">
        {services.map((service, index) => (
          <Reveal
            key={service.number}
            delay={index * 0.06}
            className="grid grid-cols-1 gap-10 py-14 first:pt-0 last:pb-0 lg:grid-cols-2 lg:gap-16"
          >
            <div>
              <span className="inline-flex h-8 items-center rounded-full bg-foreground px-3 font-sans text-sm font-bold text-background">
                {service.number}
              </span>
              <h2 className="mt-5 font-heading text-3xl">{service.heading}</h2>
              <p className="mt-4 font-sans text-foreground/70">{service.paragraph}</p>

              <h3 className="mt-8 font-sans text-sm font-bold uppercase tracking-widest text-foreground/50">
                What&apos;s included
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2 font-sans text-foreground/80">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.media.type === "video" ? (
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-accent/20">
                <iframe
                  className="h-full w-full"
                  src={toYoutubeEmbedUrl(service.media.videoUrl)}
                  title={service.heading}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={service.media.src}
                  alt={service.media.alt}
                  fill
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-16 max-w-5xl lg:mt-20">
        <ContactCta />
      </Reveal>

      <SiteFooter />
    </div>
  );
}
