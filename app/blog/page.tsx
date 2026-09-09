import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import { blogCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="bg-background px-6 py-10 sm:px-10 lg:px-[100px] lg:py-12">
      <SiteNav />

      <Reveal>
        <header className="flex flex-col items-center gap-6 text-center lg:gap-8">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl">Blog</h1>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {blogCategories.map((category) => (
              <span
                key={category}
                className={
                  category === "All"
                    ? "rounded-full bg-accent px-5 py-2 font-sans text-sm font-bold text-foreground"
                    : "rounded-full bg-button-background px-5 py-2 font-sans text-sm font-bold text-foreground"
                }
              >
                {category}
              </span>
            ))}
          </div>
        </header>
      </Reveal>

      <Reveal
        delay={0.1}
        className="mx-auto flex max-w-2xl flex-col items-center gap-2 py-24 text-center"
      >
        <p className="font-sans text-foreground/60">
          New articles coming soon. Check back for posts on design, freelancing, and building a
          remote practice.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-4 max-w-5xl lg:mt-8">
        <ContactCta />
      </Reveal>

      <SiteFooter />
    </div>
  );
}
