import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { localePath, type Locale } from "@/lib/i18n/config";
import { getDictionary, getLocale } from "@/lib/i18n/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getDictionary();
  return buildMetadata({ lang: await getLocale(), ...seo.pricing, path: "/pricing" });
}

// The middle package is the highlighted one.
const FEATURED_INDEX = 1;

function LetsTalkButton({
  lang,
  label,
  className = "",
}: {
  lang: Locale;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={localePath(lang, "/contact")}
      className={`group inline-flex items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-foreground bg-button-background px-6 py-3 font-sans font-bold text-foreground transition-colors duration-300 ease-out hover:bg-background ${className}`}
    >
      {label}
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

export default async function PricingPage() {
  const lang = await getLocale();
  const { pricing } = await getDictionary();

  return (
    <div className="bg-background">
      <header className="bg-accent px-6 pb-16 pt-10 sm:px-10 lg:px-[100px] lg:pb-24 lg:pt-12">
        <SiteNav />
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <h1 className="font-heading text-6xl text-button-background sm:text-7xl lg:text-8xl">
            {pricing.title}
          </h1>
          <p className="font-sans text-lg text-button-background sm:text-xl">
            {pricing.subtitle}{" "}
            <strong className="font-bold">{pricing.subtitleStrong}</strong>
          </p>
        </div>
      </header>

      <main className="px-6 pb-16 pt-16 sm:px-10 lg:px-[100px] lg:pb-24 lg:pt-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-8">
          {pricing.packages.map((pkg, index) => {
            const featured = index === FEATURED_INDEX;
            return (
              <article
                key={pkg.name}
                className={`relative flex flex-col rounded-[40px] border-[1.5px] bg-button-background p-8 pb-14 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg lg:p-10 lg:pb-14 ${
                  featured
                    ? "border-accent lg:-translate-y-10 lg:hover:-translate-y-12"
                    : "border-foreground"
                }`}
              >
                {featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 font-sans text-xs font-bold text-button-background">
                    {pricing.mostPopular}
                  </span>
                )}

                <p className="font-sans text-xs font-bold uppercase tracking-widest">{pkg.label}</p>
                <h2 className="mt-3 font-heading text-4xl">{pkg.name}</h2>
                <p className="mt-3 font-sans text-foreground/70">{pkg.description}</p>

                <p className="mt-6 font-heading text-2xl text-price underline decoration-price decoration-4 underline-offset-8">
                  {pkg.price}
                </p>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 font-sans text-foreground/80">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-foreground"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <LetsTalkButton
                  lang={lang}
                  label={pricing.letsTalk}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                />
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center font-sans text-sm font-bold">
          {pricing.footnote}
        </p>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-8 rounded-[40px] border-[1.5px] border-foreground bg-accent p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:p-14">
          <div>
            <h2 className="font-heading text-4xl text-button-background sm:text-5xl">
              {pricing.closingTitle}
            </h2>
            <p className="mt-4 max-w-xl font-sans text-button-background">{pricing.closingText}</p>
          </div>
          <LetsTalkButton
            lang={lang}
            label={pricing.letsTalk}
            className="self-start lg:shrink-0 lg:self-center"
          />
        </section>

        <div className="mt-16 lg:mt-24">
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
