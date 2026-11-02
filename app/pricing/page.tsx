import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Brand identity and web design packages starting at €2,990. Clear pricing for small businesses, with a tailored proposal for every project.",
  path: "/pricing",
});

const packages = [
  {
    label: "PACKAGE 1",
    name: "Launch",
    description: "For new businesses that need to show up properly from day one.",
    price: "Starting at €2,990",
    features: [
      "Logo system with the reasoning behind it",
      "Color palette and typography",
      "Essential brand guidelines",
      "One-page website with contact form",
      "10 editable social media templates",
    ],
    featured: false,
  },
  {
    label: "PACKAGE 2",
    name: "Brand & Web",
    description: "For businesses ready for a complete, consistent identity.",
    price: "Starting at €5,200",
    features: [
      "Full brand identity and guidelines",
      "Image direction and custom icon set",
      "Stationery and email signature",
      "3 to 5 page website with contact form",
      "Responsive design and basic SEO",
    ],
    featured: true,
  },
  {
    label: "PACKAGE 3",
    name: "Full Presence",
    description: "For brands that want every touchpoint working together.",
    price: "Starting at €7,200",
    features: [
      "Everything in Brand & Web",
      "6 to 10 page website with blog or CMS",
      "Animated logo for web, video and social",
      "10 editable social media templates",
      "30 days of support after launch",
    ],
    featured: false,
  },
];

function LetsTalkButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/contact"
      className={`group inline-flex items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-foreground bg-button-background px-6 py-3 font-sans font-bold text-foreground transition-colors duration-300 ease-out hover:bg-background ${className}`}
    >
      Let&apos;s talk
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

export default function PricingPage() {
  return (
    <div className="bg-background">
      <header className="bg-accent px-6 pb-16 pt-10 sm:px-10 lg:px-[100px] lg:pb-24 lg:pt-12">
        <SiteNav />
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <h1 className="font-heading text-6xl text-button-background sm:text-7xl lg:text-8xl">
            Pricing
          </h1>
          <p className="font-sans text-lg text-button-background sm:text-xl">
            Clear starting points for brands that want to look as good as they work.{" "}
            <strong className="font-bold">Every project gets a tailored proposal.</strong>
          </p>
        </div>
      </header>

      <main className="px-6 pb-16 pt-16 sm:px-10 lg:px-[100px] lg:pb-24 lg:pt-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-8">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col rounded-[40px] border-[1.5px] bg-button-background p-8 pb-14 lg:p-10 lg:pb-14 ${
                pkg.featured ? "border-accent lg:-translate-y-10" : "border-foreground"
              }`}
            >
              {pkg.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 font-sans text-xs font-bold text-button-background">
                  Most popular
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

              <LetsTalkButton className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
            </article>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center font-sans text-sm font-bold">
          * Don&apos;t need the full package? Single services are available too. Just tell me what
          you&apos;re looking for.
        </p>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-8 rounded-[40px] border-[1.5px] border-foreground bg-accent p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:p-14">
          <div>
            <h2 className="font-heading text-4xl text-button-background sm:text-5xl">
              Need something specific?
            </h2>
            <p className="mt-4 max-w-xl font-sans text-button-background">
              Every brand is different, and so is every project. Tell me what you have in mind and
              I&apos;ll put together a proposal that fits your goals and budget.
            </p>
          </div>
          <LetsTalkButton className="self-start lg:shrink-0 lg:self-center" />
        </section>

        <div className="mt-16 lg:mt-24">
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
