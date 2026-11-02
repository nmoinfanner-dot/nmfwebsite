import type { StaticImageData } from "next/image";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  coverImage: StaticImageData | null;
  body: string[];
  // Optional 140-160 char meta description. When missing, the start of the
  // first paragraph is used instead.
  description?: string;
};

export const blogMetaDescription =
  "Articles on brand design, web design, freelancing and running a remote design practice by Natalia Moin Fanner. New posts are coming soon, so check back often.";

export function getPostDescription(post: BlogPost): string {
  if (post.description) return post.description;
  const text = post.body[0] ?? "";
  if (text.length <= 160) return text;
  return `${text.slice(0, 157).trimEnd()}...`;
}

// No articles written yet. Add real posts here when ready; the [slug] route
// and its template are already built to render them.
export const blogPosts: BlogPost[] = [];

export const blogCategories = [
  "All",
  "Business",
  "Insights",
  "Design",
  "Creativity",
  "Freelancing",
];
