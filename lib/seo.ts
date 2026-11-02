import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_TITLE_SUFFIX } from "@/lib/site";

type ShareImage = { url: string; width: number; height: number; alt: string };

// One place that builds the full set of per-page metadata (title, description,
// canonical, Open Graph, Twitter Card), so every page stays consistent.
// path is relative ("/about"), resolved against metadataBase in the root layout.
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  article,
}: {
  title: string;
  description: string;
  path: string;
  image?: ShareImage;
  article?: { publishedTime: string; section: string };
}): Metadata {
  const fullTitle = `${title} | ${SITE_TITLE_SUFFIX}`;

  const openGraph: Metadata["openGraph"] = article
    ? {
        type: "article",
        url: path,
        siteName: SITE_NAME,
        locale: "en_US",
        title: fullTitle,
        description,
        images: [image],
        publishedTime: article.publishedTime,
        section: article.section,
      }
    : {
        type: "website",
        url: path,
        siteName: SITE_NAME,
        locale: "en_US",
        title: fullTitle,
        description,
        images: [image],
      };

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
