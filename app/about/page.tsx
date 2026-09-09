import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import fotoNati from "@/assets/foto-nati.png";

export const metadata: Metadata = {
  title: "About",
};

const leftStats = [
  { value: "8+", label: "Years of Experience" },
  { value: "5,500+", label: "Leads Generated" },
  { value: "28x", label: "Return on Ad Spend" },
];

const rightStats = [
  { value: "4", label: "Global Brands" },
  { value: "3", label: "Person Team Managed" },
  { value: "3", label: "Languages Spoken" },
];

const workSteps = [
  {
    heading: "Understand",
    paragraph:
      "Every project starts the same way: before I open Figma, I need to understand what your business does, who your users are, and what the page needs to communicate.",
  },
  {
    heading: "Design",
    paragraph:
      "I present one well-reasoned design direction, not three to pick from, with clear rationale behind every decision: layout, typography, color, hierarchy, refined together with you.",
  },
  {
    heading: "Deliver",
    paragraph:
      "A structured Figma file: named layers, reusable components, desktop and mobile always included, ready for your developer to build from. No surprises at handoff.",
  },
];

const jobs = [
  {
    company: "Blue Edge Business Solutions",
    role: "Creative Director",
    location: "Remote, Savannah, Georgia",
    years: "2021 - 2026",
    description:
      "Led design and creative direction for a full-service digital marketing agency. Directed multi-year brand work for Prosolar (5,500+ leads from two Meta campaigns), Duracell (turned $483 in ad spend into $32,873 in monthly revenue), and ISBUSA (28x return on ad spend, reaching 87,700+ people).",
  },
  {
    company: "R/GA",
    role: "Motion Graphic Designer",
    location: "Remote, San Francisco / Buenos Aires",
    years: "2020 - 2022",
    description:
      "Created motion design for global brand campaigns for Google, Shopify, Nike, and Patagonia, working day to day with R/GA's motion team in California while representing the Buenos Aires studio.",
  },
  {
    company: "Independent",
    role: "Freelance Senior Designer",
    location: "Remote, US & Europe",
    years: "2020 - Present",
    description:
      "Running an independent practice in parallel with agency roles, building brands and websites for founders and small businesses, including a full site rebuild for Verge Yacht Design and ModoMio's brand and digital presence from zero.",
  },
];

const tools = [
  "Figma",
  "Framer",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe Premiere",
  "After Effects",
  "Claude Code",
];

const volunteerTags = ["Graphic Design", "UNHCR Spanish Committee", "Science & Technology"];

const testimonials = [
  {
    quote:
      "I worked with Natalia for six years at Blue Edge Business Solutions, and she was one of the most valuable people on our team. As creative director and senior web designer, she owned brand identity and web projects end to end, and she always started from the communication problem rather than the visual. She moved fluently between brand systems, web design, and motion, delivered on time, and raised the standard of craft for everyone around her.",
    name: "Federico Calì",
    role: "Principal @ Blue Edge Business Solutions",
    initials: "FC",
  },
  {
    quote:
      "Natalia has strong creative range and always looks to add value and quality to every project, pushing them beyond expectations. She's highly organized, meticulous, and works well in a team, getting involved in every part of the process. Working with her was genuinely rewarding.",
    name: "Samanta Corredoira",
    role: "Directora Creativa en RAPP Argentina",
    initials: "SC",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background px-6 py-10 sm:px-10 lg:px-[100px] lg:py-12">
      <SiteNav />

      <Reveal>
        <header className="flex flex-col items-center gap-2 text-center">
          <p className="font-sans text-sm font-bold uppercase tracking-widest text-foreground/60">
            Senior Designer, Brand &amp; Web
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
          {leftStats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-heading text-3xl">{stat.value}</p>
              <p className="mt-1 font-sans text-xs text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl">
          <Image
            src={fotoNati}
            alt="Natalia Moin Fanner"
            fill
            sizes="(min-width: 1024px) 24rem, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-3 gap-6 lg:flex lg:w-40 lg:flex-col lg:gap-10">
          {rightStats.map((stat) => (
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
        <p>
          Senior designer with 8+ years building brand identities and websites for companies
          across the US and Europe. I don&apos;t design in pieces, I design decisions: every
          choice is tied to a business outcome, whether that&apos;s ad performance, conversion, or
          how clearly a brand communicates.
        </p>
      </Reveal>

      {/* How I Work */}
      <div className="mx-auto mt-20 max-w-5xl lg:mt-24">
        <Reveal>
          <h2 className="text-center font-heading text-3xl sm:text-4xl">How I Work</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {workSteps.map((step, index) => (
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
          <h2 className="text-center font-heading text-3xl sm:text-4xl">Job Experience</h2>
        </Reveal>
        <div className="mt-12 flex flex-col divide-y divide-foreground/10">
          {jobs.map((job, index) => (
            <Reveal
              key={job.company}
              delay={index * 0.08}
              className="flex flex-col gap-3 py-8 first:pt-0"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-heading text-xl">{job.company}</h3>
                  <p className="font-sans text-sm text-foreground/60">
                    {job.role} — {job.location}
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
        <h2 className="text-center font-heading text-3xl sm:text-4xl">Skills &amp; Tools</h2>
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
        <h2 className="text-center font-heading text-3xl sm:text-4xl">Volunteering</h2>
        <div className="mt-10 rounded-3xl bg-button-background p-8 lg:p-10">
          <div className="flex flex-wrap gap-2">
            {volunteerTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/30 px-3 py-1 font-sans text-xs font-bold text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mt-5 font-heading text-2xl">Spanish Learning App for Refugees</h3>
          <p className="mt-4 font-sans text-foreground/80">
            Working with classmates and professors from the Faculty of Architecture, Design and
            Urbanism, I helped design an app to help refugees learn practical Spanish through
            exercises built by the Faculty of Philosophy. Most refugees had phones but couldn&apos;t
            attend in-person classes while working, so the app focused on real situations: housing,
            health, shopping, paperwork, and transportation, giving people more confidence to apply
            for jobs, rent a home, or go shopping.
          </p>
        </div>
      </Reveal>

      {/* Client Testimonials */}
      <div className="mx-auto mt-20 max-w-5xl lg:mt-24">
        <Reveal>
          <h2 className="text-center font-heading text-3xl sm:text-4xl">Client Testimonials</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
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
