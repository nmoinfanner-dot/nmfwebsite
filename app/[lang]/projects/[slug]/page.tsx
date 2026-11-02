import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectTemplate } from "@/components/ProjectTemplate";
import { linkClasses } from "@/components/buttons";
import { localePath } from "@/lib/i18n/config";
import { getDictionary, getLocale } from "@/lib/i18n/server";
import { getProjects, projectSlugs } from "@/lib/projects";
import { getProjectDetail } from "@/lib/projectDetails";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lang = await getLocale();
  const { seo } = await getDictionary();
  const detail = getProjectDetail(slug, lang);
  if (detail) {
    return buildMetadata({
      lang,
      title: detail.seo.title,
      description: detail.seo.description,
      path: `/projects/${slug}`,
      image: {
        url: detail.coverImage.src,
        width: detail.coverImage.width,
        height: detail.coverImage.height,
        alt: detail.title,
      },
    });
  }
  const project = getProjects(lang).find((p) => p.slug === slug);
  return buildMetadata({
    lang,
    title: project?.title ?? "Project",
    description: project?.oneLiner ?? seo.projectFallbackDescription,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lang = await getLocale();
  const { common, projectTemplate } = await getDictionary();
  const project = getProjects(lang).find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const detail = getProjectDetail(slug, lang);
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
              {common.projects.categories[category] ?? category}
            </span>
          ))}
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl">{project.title}</h1>
        <p className="font-sans text-foreground/70">{project.oneLiner}</p>
        <p className="mt-4 font-sans text-sm text-foreground/50">{projectTemplate.comingSoon}</p>
        <Link href={localePath(lang, "/projects")} className={linkClasses}>
          {projectTemplate.back}
        </Link>
      </div>

      <SiteFooter />
    </div>
  );
}
