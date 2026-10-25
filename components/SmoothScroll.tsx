"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

// Scrolling is native (no Lenis): it was intercepting real mouse-wheel input
// and getting stuck for some visitors, which is a worse outcome than losing
// the smoothing effect. MotionConfig still makes every Framer Motion
// animation on the site collapse to an instant/minimal state when the
// visitor has prefers-reduced-motion enabled.
export function SmoothScroll({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
