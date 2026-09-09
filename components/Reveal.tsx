"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Fade + slight upward slide, played once when the element enters the
// viewport (also fires for content already in view on page load, so it
// doubles as a load-in animation for above-the-fold sections).
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
