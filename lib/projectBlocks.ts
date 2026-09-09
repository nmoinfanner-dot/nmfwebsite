import type { StaticImageData } from "next/image";

// src is null for a placeholder (accent-tinted block) when the real image
// isn't ready yet. srcMobile, when set, swaps in on small screens (e.g. a
// UI Style board laid out differently for mobile).
export type BlockImage = {
  src: StaticImageData | null;
  alt: string;
  caption?: string;
  srcMobile?: StaticImageData | null;
  // "cover" (default) fills the box, cropping as needed. "contain" always
  // shows the whole image, shrinking it to fit inside the box instead.
  fit?: "cover" | "contain";
};

// heading (optional) + paragraph. Optionally paired with an image: "side"
// (default) renders a 2-column row, image left / text right, like Problem
// in Live-Oak; "below" stacks the image full-width under the text. variant
// "statement" renders the paragraph large and centered, as a pull-quote,
// and ignores heading/image.
export type TextBlock = {
  type: "text";
  heading?: string;
  paragraph: string;
  image?: BlockImage;
  imagePosition?: "side" | "below";
  variant?: "statement";
};

// heading + list of items, each written as "Label: description" (the label
// is bolded automatically). layout "bullets" (default) is a vertical list,
// optionally paired with a side image (image left / bullets right), like
// Solution in Live-Oak. layout "cards" renders each item as its own
// white card in a multi-column grid, with an optional image below the grid.
export type KeyDecisionsBlock = {
  type: "keyDecisions";
  heading: string;
  items: string[];
  layout?: "bullets" | "cards";
  columns?: 2 | 3 | 4 | 5;
  image?: BlockImage;
  bottomImage?: BlockImage;
};

// heading + optional intro paragraph + grid of {title, description} cards.
// Used for research personas, testimonials, or similar named-item grids.
export type CardsBlock = {
  type: "cards";
  heading: string;
  intro?: string;
  items: { title: string; description: string }[];
};

// A gallery tile is an image (default, opens in a lightbox) or a video.
// kind is optional on the image variant so existing gallery data (plain
// BlockImage entries) keeps working unchanged. A video tile with src null
// is a placeholder: an accent-tinted box with a play icon, so it reads as
// "video coming" rather than a plain empty image box.
export type GalleryImageTile = { kind?: "image" } & BlockImage;
export type GalleryVideoTile = { kind: "video"; src: string | null; alt: string };
export type GalleryTile = GalleryImageTile | GalleryVideoTile;

// heading + images (or videos) in a 1, 2, or 3 column grid. Each image opens
// in a lightbox on click. aspect controls the tile shape: "portrait"
// (default, e.g. wireframes) or "landscape" (e.g. a single full-width
// horizontal photo with columns: 1).
export type GalleryBlock = {
  type: "gallery";
  heading?: string;
  columns: 1 | 2 | 3;
  aspect?: "portrait" | "landscape";
  images: GalleryTile[];
};

// A mosaic tile is either an image or a local video file (served from
// /public, e.g. "/videos/modo/video-01.mp4"). Videos autoplay muted and
// loop, like an Instagram grid preview.
export type MosaicImageTile = { kind: "image" } & BlockImage;
export type MosaicVideoTile = { kind: "video"; src: string; alt: string };
export type MosaicTile = MosaicImageTile | MosaicVideoTile;

// heading + optional intro paragraph + mosaic grid (e.g. a "Social Media
// Post" showcase), 6 tiles by convention. aspect: "portrait" (default) or
// "square". Tiles can mix images and videos.
export type MosaicBlock = {
  type: "mosaic";
  heading: string;
  intro?: string;
  aspect?: "portrait" | "square";
  items: MosaicTile[];
};

// The technical fact sheet, usually paired with an intro paragraph next to
// it (2-column row). Fields are freeform per project. Optional CTA button
// (e.g. "Prototype").
export type MetaBlock = {
  type: "meta";
  heading?: string;
  paragraph?: string | string[];
  // Extra labeled paragraphs in the left column, below the intro (e.g. "My
  // role"), each with its own small heading.
  sections?: { heading: string; paragraph: string }[];
  fields: { label: string; value: string }[];
  cta?: { label: string; href: string };
};

// heading (optional) + paragraph (optional) + embedded video (YouTube URL)
// + optional supporting images below it. videoUrl is optional: when
// missing, a placeholder with a play icon shows instead until the real
// video is ready. Keeping heading/paragraph/video in one block (rather
// than a separate text block above it) avoids a gap between them.
export type VideoBlock = {
  type: "video";
  heading?: string;
  paragraph?: string;
  videoUrl?: string;
  // Extra videos stacked below the first one.
  additionalVideoUrls?: string[];
  images?: BlockImage[];
};

// A full-width photo banner with a centered statement over it (a smaller,
// photo-backed take on the "statement" text variant).
export type BannerBlock = {
  type: "banner";
  paragraph: string;
  image: BlockImage;
};

// heading + color swatches + a typeface specimen (name, weights, sample
// string). fontFamily/fontLinkHref let a project show its own real
// typeface without changing the site's own type system.
export type UiStyleBlock = {
  type: "uiStyle";
  heading: string;
  colors: { label: string; hex: string }[];
  typefaceName: string;
  fontFamily: string;
  fontLinkHref?: string;
  weightsLabel: string;
  specimenText: string;
  specimenBackground: string;
};

// heading + 2 columns: an image (e.g. the logo) on the left, and on the
// right a color palette (grouped, e.g. "Primary"/"Secondary") plus a short
// list of typeface names. Simpler than UiStyleBlock: no live font specimen.
export type BrandStyleBlock = {
  type: "brandStyle";
  heading: string;
  image: BlockImage;
  colorGroups?: { label: string; colors: string[] }[];
  typefaces?: { label: string; value: string }[];
};

export type ProjectBlock =
  | TextBlock
  | KeyDecisionsBlock
  | CardsBlock
  | GalleryBlock
  | MosaicBlock
  | MetaBlock
  | VideoBlock
  | UiStyleBlock
  | BannerBlock
  | BrandStyleBlock;

export type ProjectDetail = {
  slug: string;
  title: string;
  subtitle: string;
  coverImage: StaticImageData;
  // When set, the detail page's hero plays this YouTube video instead of
  // coverImage. coverImage is still used for the /projects listing card and
  // "Next Project" thumbnails, which can't embed a live player.
  coverVideoUrl?: string;
  blocks: ProjectBlock[];
  nextProjectSlugs: string[];
};
