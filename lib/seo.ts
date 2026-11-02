import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";
import { locales, localePath, ogLocales, type Locale } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dictionaries";

type ShareImage = { url: string; width: number; height: number; alt: string };

// "Natalia Moin Fanner, Senior Brand & Web Designer" in the page's language.
export function titleSuffix(lang: Locale): string {
  return `${SITE_NAME}, ${dictionaries[lang].site.role}`;
}

// 1200x630 default share image (public/og-default.png).
export function defaultOgImage(lang: Locale): ShareImage {
  return { url: "/og-default.png", width: 1200, height: 630, alt: titleSuffix(lang) };
}

// One place that builds the full set of per-page metadata (title, description,
// canonical, language alternates, Open Graph, Twitter Card), so every page
// stays consistent. path is the language-free route ("/about"), resolved
// against metadataBase in the root layout.
export function buildMetadata({
  lang,
  title,
  description,
  path,
  image = defaultOgImage(lang),
  article,
}: {
  lang: Locale;
  title: string;
  description: string;
  path: string;
  image?: ShareImage;
  article?: { publishedTime: string; section: string };
}): Metadata {
  const fullTitle = `${title} | ${titleSuffix(lang)}`;
  const url = localePath(lang, path);

  const languages: Record<string, string> = Object.fromEntries(
    locales.map((locale) => [locale, localePath(locale, path)]),
  );
  languages["x-default"] = localePath("en", path);

  const shared = {
    url,
    siteName: SITE_NAME,
    locale: ogLocales[lang],
    alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocales[l]),
    title: fullTitle,
    description,
    images: [image],
  };

  const openGraph: Metadata["openGraph"] = article
    ? {
        type: "article",
        ...shared,
        publishedTime: article.publishedTime,
        section: article.section,
      }
    : { type: "website", ...shared };

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url, languages },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
