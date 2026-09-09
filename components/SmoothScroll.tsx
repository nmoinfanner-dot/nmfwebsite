"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { MotionConfig, useAnimationFrame } from "framer-motion";

// Uses the official React wrapper (robust against Strict Mode's double-effect
// and dev hot reload, unlike a hand-rolled instance) with its own internal
// raf loop turned off, driving Lenis's ticker from Framer Motion's own frame
// loop instead, so both stay in lockstep and whileInView never desyncs from
// the smoothed scroll position. Skipped entirely under prefers-reduced-motion:
// the page falls back to native, instant scrolling with no smoothing applied.
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  useAnimationFrame((time) => {
    lenisRef.current?.lenis?.raf(time);
  });

  return (
    <MotionConfig reducedMotion="user">
      {reducedMotion ? (
        children
      ) : (
        <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
          {children}
        </ReactLenis>
      )}
    </MotionConfig>
  );
}
