import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectTemplate } from "@/components/ProjectTemplate";
import { linkClasses } from "@/components/buttons";
import { projects } from "@/lib/projects";
import { projectDetails } from "@/lib/projectDetails";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = projectDetails[slug];
  if (detail) return { title: detail.title };
  const project = projects.find((p) => p.slug === slug);
  return { title: project?.title ?? "Project" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const detail = projectDetails[slug];
  if (detail) {
    return <ProjectTemplate project={detail} />;
  }

  return (
    <div className="bg-background px-6 py-10 sm:px-10 lg:px-[100px] lg:py-12">
      <SiteNav />

      {/* Placeholder: this project hasn't been converted to the block template yet. */}
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 py-20 text-center">
        <div className="flex flex-wrap justify-center gap-2">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-button-background px-3 py-1 font-sans text-xs font-bold text-foreground"
            >
              {category}
            </span>
          ))}
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl">{project.title}</h1>
        <p className="font-sans text-foreground/70">{project.oneLiner}</p>
        <p className="mt-4 font-sans text-sm text-foreground/50">Full case study coming soon.</p>
        <Link href="/projects" className={linkClasses}>
          Back to projects
        </Link>
      </div>

      <SiteFooter />
    </div>
  );
}
