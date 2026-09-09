import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ProjectBlockRenderer } from "@/components/blocks/ProjectBlockRenderer";
import { projects } from "@/lib/projects";
import type { ProjectDetail } from "@/lib/projectBlocks";
import { toYoutubeEmbedUrl } from "@/lib/youtube";

export function ProjectTemplate({ project }: { project: ProjectDetail }) {
  const nextProjects = project.nextProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="bg-background px-6 py-10 sm:px-10 lg:px-[100px] lg:py-12">
      <SiteNav />

      {/* Cover */}
      <Reveal>
        <header className="mx-auto flex max-w-4xl flex-col items-center gap-4 pt-6 text-center">
          <h1 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="font-sans text-lg text-foreground/70">{project.subtitle}</p>
        </header>
      </Reveal>
      <Reveal delay={0.1} className="mx-auto mt-10 max-w-5xl">
        {project.coverVideoUrl ? (
          <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl bg-accent/20">
            <iframe
              className="h-full w-full"
              src={toYoutubeEmbedUrl(project.coverVideoUrl)}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}
      </Reveal>

      {project.blocks.map((block, index) => (
        <Reveal key={index} className="mx-auto mt-16 max-w-5xl lg:mt-24">
          <ProjectBlockRenderer block={block} />
        </Reveal>
      ))}

      {nextProjects.length > 0 && (
        <Reveal className="mx-auto mt-20 max-w-5xl lg:mt-24">
          <h2 className="font-heading text-2xl">Next Project</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {nextProjects.map((next) => (
              <Link
                key={next.slug}
                href={`/projects/${next.slug}`}
                className="group flex flex-col gap-3"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl transition-shadow duration-300 ease-out group-hover:shadow-xl">
                  {next.image && (
                    <Image
                      src={next.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 32rem, 100vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  )}
                </div>
                <h3 className="font-heading text-xl text-foreground">{next.title}</h3>
              </Link>
            ))}
          </div>
        </Reveal>
      )}

      <div className="mt-16 lg:mt-24">
        <SiteFooter />
      </div>
    </div>
  );
}
