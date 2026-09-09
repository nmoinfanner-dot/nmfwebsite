import type { ProjectDetail } from "@/lib/projectBlocks";
import { liveOak } from "@/lib/projectDetails/live-oak";
import { cresta } from "@/lib/projectDetails/cresta";
import { prosolar } from "@/lib/projectDetails/prosolar";
import { modomio } from "@/lib/projectDetails/modomio";
import { duracellIsbusa } from "@/lib/projectDetails/duracell-isbusa";
import { motion } from "@/lib/projectDetails/motion";

// All 6 projects are now built with the block template.
export const projectDetails: Record<string, ProjectDetail> = {
  "live-oak": liveOak,
  cresta,
  prosolar,
  modomio,
  "duracell-isbusa": duracellIsbusa,
  motion,
};
