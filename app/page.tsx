"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import fotoNati from "@/assets/foto-nati.png";
import projectHomePhoto from "@/assets/images/project-home.jpg";
import serviceHomePhoto from "@/assets/images/service-home.jpg";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectPreviewCarousel } from "@/components/ProjectPreviewCarousel";
import { lightButtonClasses, darkButtonClasses, linkClasses } from "@/components/buttons";
import { ArrowUpRightIcon, MapPinIcon } from "@/components/icons";
import { projects } from "@/lib/projects";

const projectPreviewImages = projects
  .map((project) => (project.image ? { src: project.image, alt: project.title } : null))
  .filter((item): item is { src: StaticImageData; alt: string } => item !== null);

// Static four-stop brand gradient for the headline card (kept static until the animation pass).
const headlineBackgroundStyle = {
  backgroundImage:
    "linear-gradient(135deg, #6EA353 0%, #90BF79 35%, #FF8000 70%, #384D2D 100%)",
};

const bentoContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const bentoItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

function CardArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-button-background/90 text-foreground transition-colors duration-300 ease-out hover:bg-button-background"
    >
      <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export default function Home() {
  return (
    <section className="relative flex flex-col overflow-hidden px-6 py-6 sm:px-10 lg:h-screen lg:justify-between lg:px-[100px] lg:py-6">
      {/* Giant semi-transparent watermark behind the bento cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex select-none flex-col items-center justify-center text-center"
      >
        <span className="font-heading text-[13vw] leading-none text-foreground/5 whitespace-nowrap">
          Natalia Moin Fanner
        </span>
        <span className="font-heading text-[5vw] leading-none text-foreground/5 whitespace-nowrap">
          Senior Web/Graphic Designer
        </span>
      </div>

      <SiteNav />

      {/* Bento composition: 4 loose columns, vertically centered as a row so no column is left stranded */}
      <motion.div
        variants={bentoContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-6"
      >
        {/* Column 1: Latest posts / Check my services */}
        <motion.div
          variants={bentoItemVariants}
          className="order-4 flex flex-col gap-6 lg:order-1 lg:w-1/6 lg:gap-4"
        >
          <div className="relative flex flex-col gap-3 rounded-3xl bg-button-background p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg lg:min-h-[220px]">
            <CardArrowLink href="/blog" label="Go to the blog" />
            <h2 className="font-heading text-lg">Latest posts</h2>
            <p className="font-sans text-sm text-foreground/70">New articles coming soon.</p>
            <Link href="/blog" className={linkClasses}>
              Read the blog
            </Link>
          </div>

          <div className="relative flex flex-col justify-between gap-4 overflow-hidden rounded-3xl p-6 text-background transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg lg:min-h-[240px]">
            <Image
              src={serviceHomePhoto}
              alt=""
              fill
              sizes="(min-width: 1024px) 17vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
            <CardArrowLink href="/services" label="Go to services" />
            <h2 className="relative mt-auto font-heading text-lg">Check my services</h2>
          </div>
        </motion.div>

        {/* Column 2: headline, raised a bit so it breaks the row's centered alignment */}
        <motion.div variants={bentoItemVariants} className="order-1 lg:order-2 lg:-mt-10 lg:w-1/3">
          <div
            style={headlineBackgroundStyle}
            className="relative flex flex-col justify-between gap-6 rounded-3xl p-8 text-background lg:min-h-[420px] lg:p-10"
          >
            <CardArrowLink href="/projects" label="View my work" />
            <p className="font-sans text-sm font-bold uppercase tracking-widest text-background/70">
              Senior Designer, Brand &amp; Web
            </p>
            <h1 className="font-heading text-3xl leading-tight text-[#FFFE54] sm:text-4xl lg:text-[2.2vw]">
              BUILT TO COMMUNICATE. NOT JUST TO IMPRESS.
            </h1>
            <p className="max-w-md font-sans text-base text-background/80">
              8+ years designing brand identities and websites that hold up under scrutiny,
              whether that means leading a project solo or plugging straight into your team.
            </p>
            <Link href="/projects" className={lightButtonClasses}>
              View my work
            </Link>
          </div>
        </motion.div>

        {/* Column 3: Recent Projects / About Me, starts lower than the rest */}
        <motion.div
          variants={bentoItemVariants}
          className="order-2 flex flex-col gap-4 lg:order-3 lg:w-1/4"
        >
          <div className="relative order-2 flex flex-col gap-4 rounded-3xl bg-button-background p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg lg:order-1">
            <ProjectPreviewCarousel images={projectPreviewImages} />
            <h2 className="font-heading text-xl">Recent Projects</h2>
            <p className="font-sans text-sm text-foreground/70">
              From concept to completion, these projects highlight my expertise.
            </p>
            <Link href="/projects" className={linkClasses}>
              See all projects
            </Link>
          </div>

          {/* About Me card: photo + button only */}
          <div className="relative order-1 mt-8 flex flex-col gap-4 rounded-3xl bg-button-background p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg lg:order-2 lg:mt-7">
            {/* Speech bubble */}
            <div className="absolute -top-7 left-6 z-20">
              <div className="relative flex items-center gap-1.5 rounded-2xl bg-foreground px-3 py-1.5 font-sans text-sm font-bold text-background">
                <span aria-hidden="true" className="animate-wave">
                  👋
                </span>
                <span>Hi, I&apos;m Natalia</span>
                <span className="absolute -bottom-1.5 left-6 h-3 w-3 rotate-45 bg-foreground" />
              </div>
            </div>

            <div className="relative h-32 w-full overflow-hidden rounded-2xl">
              <Image
                src={fotoNati}
                alt="Natalia Moin Fanner"
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
            </div>
            <Link href="/about" className={darkButtonClasses}>
              More about me
            </Link>

            {/* Floating "Based in Milan, Remote" pill, overlapping into the next column's gap */}
            <div className="z-20 flex justify-center lg:absolute lg:top-1/2 lg:-right-24 lg:block lg:-translate-y-1/2">
              <div className="flex items-center gap-1.5 rounded-full bg-button-background px-4 py-2 text-sm font-sans font-bold shadow-sm">
                <MapPinIcon className="h-4 w-4" />
                Based in Milan, Remote
              </div>
            </div>
          </div>
        </motion.div>

        {/* Column 4: contact, sits a bit higher than the rest */}
        <motion.div variants={bentoItemVariants} className="order-3 lg:order-4 lg:w-1/4">
          <div className="relative flex flex-col justify-between gap-4 overflow-hidden rounded-3xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg lg:min-h-[260px]">
            <Image
              src={projectHomePhoto}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <CardArrowLink href="/contact" label="Get in touch" />
            <h2 className="relative font-heading text-xl text-button-background">
              Have a project in mind?
            </h2>
            <div className="relative flex flex-col gap-1 font-sans text-sm font-bold text-button-background">
              <a
                href="mailto:nmoinfanner@gmail.com"
                className="underline decoration-transparent underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current"
              >
                nmoinfanner@gmail.com
              </a>
              <a
                href="https://wa.me/393384863698"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-transparent underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current"
              >
                +39 338 486 3698 (WhatsApp)
              </a>
              <Link
                href="/contact"
                className="mt-2 underline decoration-transparent underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <SiteFooter />
    </section>
  );
}
