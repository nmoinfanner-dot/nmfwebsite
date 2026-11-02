import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import { getDictionary, getLocale } from "@/lib/i18n/server";
import { buildMetadata } from "@/lib/seo";
import { toYoutubeEmbedUrl } from "@/lib/youtube";
import serviceCrestaImage from "@/assets/images/project/cresta/service-cresta.png";
import lugarImage from "@/assets/images/project/cresta/lugar.png";
import imagen1Image from "@/assets/images/project/live/imagen1.jpg";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getDictionary();
  return buildMetadata({ lang: await getLocale(), ...seo.services, path: "/services" });
}

// Media for each service, in the same order as services.items in the dictionary.
const media = [
  { type: "image" as const, src: serviceCrestaImage },
  { type: "image" as const, src: lugarImage },
  { type: "image" as const, src: imagen1Image },
  { type: "video" as const, videoUrl: "https://youtu.be/wFcUVoaI6sU" },
];

export default async function ServicesPage() {
  const { services } = await getDictionary();

  return (
    <div className="bg-background px-6 py-10 sm:px-10 lg:px-[100px] lg:py-12">
      <SiteNav />

      <Reveal>
        <header className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl">{services.title}</h1>
        </header>
      </Reveal>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col divide-y divide-foreground/10 lg:mt-20">
        {services.items.map((service, index) => {
          const item = media[index];
          return (
            <Reveal
              key={service.heading}
              delay={index * 0.06}
              className="grid grid-cols-1 gap-10 py-14 first:pt-0 last:pb-0 lg:grid-cols-2 lg:gap-16"
            >
              <div>
                <span className="inline-flex h-8 items-center rounded-full bg-foreground px-3 font-sans text-sm font-bold text-background">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-5 font-heading text-3xl">{service.heading}</h2>
                <p className="mt-4 font-sans text-foreground/70">{service.paragraph}</p>

                <h3 className="mt-8 font-sans text-sm font-bold uppercase tracking-widest text-foreground/50">
                  {services.included}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {service.list.map((entry) => (
                    <li key={entry} className="flex gap-2 font-sans text-foreground/80">
                      <span aria-hidden="true">•</span>
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.type === "video" ? (
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-accent/20">
                  <iframe
                    className="h-full w-full"
                    src={toYoutubeEmbedUrl(item.videoUrl)}
                    title={service.heading}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={item.src}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 32rem, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mx-auto mt-16 max-w-5xl lg:mt-20">
        <ContactCta />
      </Reveal>

      <SiteFooter />
    </div>
  );
}
