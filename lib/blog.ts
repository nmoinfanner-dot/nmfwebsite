import type { StaticImageData } from "next/image";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  coverImage: StaticImageData | null;
  body: string[];
};

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
