import type { ProjectDetail } from "@/lib/projectBlocks";
import type { Locale } from "@/lib/i18n/config";
import { liveOak } from "@/lib/projectDetails/live-oak";
import { cresta } from "@/lib/projectDetails/cresta";
import { prosolar } from "@/lib/projectDetails/prosolar";
import { modomio } from "@/lib/projectDetails/modomio";
import { duracellIsbusa } from "@/lib/projectDetails/duracell-isbusa";
import { motion } from "@/lib/projectDetails/motion";

// All 6 projects are built with the block template. Each entry builds the
// project in the requested language (images and structure are shared).
const builders: Record<string, (lang: Locale) => ProjectDetail> = {
  "live-oak": liveOak,
  cresta,
  prosolar,
  modomio,
  "duracell-isbusa": duracellIsbusa,
  motion,
};

export function getProjectDetail(slug: string, lang: Locale): ProjectDetail | undefined {
  return builders[slug]?.(lang);
}
