"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/lib/projects";

const filters = ["All", "Branding", "Web Design", "Social Media", "Graphic Design"];

export function ProjectsFilterGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3 lg:mb-14">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={
              filter === activeFilter
                ? "rounded-full bg-accent px-5 py-2 font-sans text-sm font-bold text-foreground transition-colors duration-300 ease-out"
                : "rounded-full bg-button-background px-5 py-2 font-sans text-sm font-bold text-foreground transition-colors duration-300 ease-out hover:bg-foreground/10"
            }
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 0.08} className="h-full">
            <Link
              href={`/projects/${project.slug}`}
              className="group relative flex h-full min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl transition-shadow duration-300 ease-out hover:shadow-xl"
            >
              {project.image ? (
                <>
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </>
              ) : (
                <div className="absolute inset-0 bg-accent/20" />
              )}
              <div className="relative flex flex-col gap-3 p-8">
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-button-background px-3 py-1 font-sans text-xs font-bold text-foreground"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div>
                  <h2
                    className={`font-heading text-2xl ${project.image ? "text-button-background" : "text-foreground"}`}
                  >
                    {project.title}
                  </h2>
                  <p
                    className={`mt-2 font-sans text-sm ${project.image ? "text-button-background/85" : "text-foreground/70"}`}
                  >
                    {project.oneLiner}
                  </p>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
