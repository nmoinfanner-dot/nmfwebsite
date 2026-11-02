import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

const staticPaths = ["/", "/about", "/services", "/projects", "/contact", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: `${SITE_URL}${path === "/" ? "" : path}` })),
    ...projects.map((project) => ({ url: `${SITE_URL}/projects/${project.slug}` })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
