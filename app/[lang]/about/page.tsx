import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import { getDictionary, getLocale } from "@/lib/i18n/server";
import { buildMetadata } from "@/lib/seo";
import fotoNati from "@/assets/foto-nati.png";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getDictionary();
  return buildMetadata({ lang: await getLocale(), ...seo.about, path: "/about" });
}

// Tool names are product names, so they are not translated.
const tools = [
  "Figma",
  "Framer",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe Premiere",
  "After Effects",
  "Claude Code",
];

export default async function AboutPage() {
  const { about } = await getDictionary();

  return (
    <div className="bg-background px-6 py-10 sm:px-10 lg:px-[100px] lg:py-12">
      <SiteNav />

      <Reveal>
        <header className="flex flex-col items-center gap-2 text-center">
          <p className="font-sans text-sm font-bold uppercase tracking-widest text-foreground/60">
            {about.eyebrow}
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl">Natalia Moin Fanner</h1>
        </header>
      </Reveal>

      {/* Hero: counters left / photo / counters right on desktop, stacked on mobile */}
      <Reveal
        delay={0.1}
        className="mx-auto mt-14 flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
      >
        <div className="grid grid-cols-3 gap-6 lg:flex lg:w-40 lg:flex-col lg:gap-10">
          {about.leftStats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-heading text-3xl">{stat.value}</p>
              <p className="mt-1 font-sans text-xs text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl">
          <Image
            src={fotoNati}
            alt={about.portraitAlt}
            fill
            sizes="(min-width: 1024px) 24rem, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-3 gap-6 lg:flex lg:w-40 lg:flex-col lg:gap-10">
          {about.rightStats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-heading text-3xl">{stat.value}</p>
              <p className="mt-1 font-sans text-xs text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal
        delay={0.15}
        className="mx-auto mt-14 max-w-2xl text-center font-sans text-foreground/80"
      >
        <p>{about.bio}</p>
      </Reveal>

      {/* How I Work */}
      <div className="mx-auto mt-20 max-w-5xl lg:mt-24">
        <Reveal>
          <h2 className="text-center font-heading text-3xl sm:text-4xl">{about.howIWorkTitle}</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {about.workSteps.map((step, index) => (
            <Reveal key={step.heading} delay={index * 0.08}>
              <p className="font-sans text-sm font-bold text-accent">0{index + 1}</p>
              <h3 className="mt-2 font-heading text-xl">{step.heading}</h3>
              <p className="mt-3 font-sans text-foreground/70">{step.paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Job Experience */}
      <div className="mx-auto mt-20 max-w-5xl lg:mt-24">
        <Reveal>
          <h2 className="text-center font-heading text-3xl sm:text-4xl">{about.jobsTitle}</h2>
        </Reveal>
        <div className="mt-12 flex flex-col divide-y divide-foreground/10">
          {about.jobs.map((job, index) => (
            <Reveal
              key={job.company}
              delay={index * 0.08}
              className="flex flex-col gap-3 py-8 first:pt-0"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-heading text-xl">{job.company}</h3>
                  <p className="font-sans text-sm text-foreground/60">
                    {job.role} | {job.location}
                  </p>
                </div>
                <p className="font-sans text-sm font-bold text-foreground/60">{job.years}</p>
              </div>
              <p className="font-sans text-foreground/80">{job.description}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Skills & Tools */}
      <Reveal className="mx-auto mt-20 max-w-5xl lg:mt-24">
        <h2 className="text-center font-heading text-3xl sm:text-4xl">{about.skillsTitle}</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-button-background px-4 py-2 font-sans text-sm font-bold text-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Volunteering */}
      <Reveal className="mx-auto mt-20 max-w-5xl lg:mt-24">
        <h2 className="text-center font-heading text-3xl sm:text-4xl">{about.volunteeringTitle}</h2>
        <div className="mt-10 rounded-3xl bg-button-background p-8 lg:p-10">
          <div className="flex flex-wrap gap-2">
            {about.volunteerTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/30 px-3 py-1 font-sans text-xs font-bold text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mt-5 font-heading text-2xl">{about.volunteerHeading}</h3>
          <p className="mt-4 font-sans text-foreground/80">{about.volunteerText}</p>
        </div>
      </Reveal>

      {/* Client Testimonials */}
      <div className="mx-auto mt-20 max-w-5xl lg:mt-24">
        <Reveal>
          <h2 className="text-center font-heading text-3xl sm:text-4xl">
            {about.testimonialsTitle}
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {about.testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.08}
              className="flex flex-col gap-6 rounded-3xl bg-button-background p-8"
            >
              <p className="font-sans text-foreground/80">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-auto flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent font-sans text-sm font-bold text-foreground">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-sans font-bold text-foreground">{testimonial.name}</p>
                  <p className="font-sans text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mx-auto mt-20 max-w-5xl lg:mt-24">
        <ContactCta />
      </Reveal>

      <SiteFooter />
    </div>
  );
}
