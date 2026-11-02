import type { MetadataRoute } from "next";
import { locales, localePath, type Locale } from "@/lib/i18n/config";
import { projectSlugs } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

const staticPaths = ["/", "/about", "/services", "/pricing", "/projects", "/contact"];

const absolute = (lang: Locale, path: string) => {
  const localized = localePath(lang, path);
  return `${SITE_URL}${localized === "/" ? "" : localized}`;
};

// One entry per page and language, each listing its translations so search
// engines serve the right language.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...staticPaths, ...projectSlugs.map((slug) => `/projects/${slug}`)];

  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: absolute(lang, path),
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((other) => [other, absolute(other, path)])),
          "x-default": absolute("en", path),
        },
      },
    })),
  );
}
