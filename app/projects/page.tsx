import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactCta } from "@/components/ContactCta";
import { Reveal } from "@/components/Reveal";
import { ProjectsFilterGrid } from "@/components/ProjectsFilterGrid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Selected Work",
};

export default function ProjectsPage() {
  return (
    <div className="bg-background px-6 py-10 sm:px-10 lg:px-[100px] lg:py-12">
      <SiteNav />

      <Reveal>
        <header className="mb-10 flex flex-col items-center gap-6 text-center lg:mb-14">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl">Selected Work</h1>
        </header>
      </Reveal>

      <ProjectsFilterGrid projects={projects} />

      <Reveal className="mx-auto mt-16 max-w-5xl lg:mt-20">
        <ContactCta />
      </Reveal>

      <SiteFooter />
    </div>
  );
}
