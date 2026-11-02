import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

const staticPaths = ["/", "/about", "/services", "/pricing", "/projects", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: `${SITE_URL}${path === "/" ? "" : path}` })),
    ...projects.map((project) => ({ url: `${SITE_URL}/projects/${project.slug}` })),
  ];
}
