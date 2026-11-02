"use client";

import { useLocale } from "@/components/LocaleProvider";

export function ContactCta() {
  const { cta } = useLocale().common;

  return (
    <section className="flex flex-col items-center gap-6 px-8 py-16 text-center text-foreground sm:px-12">
      <h2 className="font-heading text-3xl sm:text-4xl">{cta.title}</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://wa.me/393384863698"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[10px] bg-button-background px-5 py-3 font-sans font-bold text-foreground transition-opacity duration-300 ease-out hover:opacity-80"
        >
          {cta.start}
        </a>
        <a
          href="mailto:hello@nmoinfanner.com"
          className="rounded-[10px] bg-accent px-5 py-3 font-sans font-bold text-foreground transition-opacity duration-300 ease-out hover:opacity-80"
        >
          {cta.getInTouch}
        </a>
      </div>
    </section>
  );
}
