"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import logoBlack from "@/assets/Logo-Black.png";
import { GlobeIcon } from "@/components/icons";
import { useLocale } from "@/components/LocaleProvider";
import { localeNames, localePath, locales, splitLocale } from "@/lib/i18n/config";

const menuLinks = [
  { key: "about", path: "/about" },
  { key: "projects", path: "/projects" },
  { key: "services", path: "/services" },
  { key: "pricing", path: "/pricing" },
  { key: "contact", path: "/contact" },
] as const;

const panelMotion = {
  initial: { opacity: 0, scale: 0.95, y: -8 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -8 },
  transition: { duration: 0.3, ease: "easeOut" as const },
  style: { transformOrigin: "top right" },
};

const panelClasses =
  "absolute right-0 top-full mt-3 flex flex-col overflow-hidden rounded-3xl bg-button-background shadow-lg";

export function SiteNav() {
  const [panel, setPanel] = useState<"menu" | "language" | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { lang, common, href } = useLocale();
  const { nav } = common;
  // usePathname returns the visible address, so the language-free path comes
  // from splitLocale (English has no prefix).
  const { path: currentPath } = splitLocale(usePathname());

  const toggle = (name: "menu" | "language") =>
    setPanel((current) => (current === name ? null : name));

  useEffect(() => {
    if (!panel) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setPanel(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPanel(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [panel]);

  return (
    <nav className="relative z-30 mb-16 flex flex-col items-center lg:mb-[100px]">
      <div
        ref={navRef}
        className="relative flex w-full max-w-xl items-center justify-between gap-2 rounded-full bg-button-background p-2 pl-6"
      >
        <Link href={href("/")} aria-label={nav.homeAriaLabel}>
          <Image src={logoBlack} alt="Natalia Moin Fanner" className="h-10 w-auto" priority />
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => toggle("menu")}
            aria-expanded={panel === "menu"}
            className="rounded-full bg-foreground px-6 py-2.5 font-sans font-bold text-background transition-opacity duration-300 ease-out hover:opacity-80"
          >
            {panel === "menu" ? nav.close : nav.menu}
          </button>
          <button
            type="button"
            onClick={() => toggle("language")}
            aria-expanded={panel === "language"}
            aria-label={nav.language}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-background text-foreground transition-colors duration-300 ease-out hover:bg-foreground/10"
          >
            <GlobeIcon className="h-5 w-5" />
          </button>
        </div>

        <AnimatePresence>
          {panel === "menu" && (
            <motion.div key="menu" {...panelMotion} className={`${panelClasses} w-56`}>
              {menuLinks.map((link) => (
                <Link
                  key={link.path}
                  href={href(link.path)}
                  onClick={() => setPanel(null)}
                  className="border-b border-foreground/10 px-6 py-4 font-sans font-bold text-foreground transition-colors duration-300 ease-out last:border-b-0 hover:bg-foreground/5"
                >
                  {nav.links[link.key]}
                </Link>
              ))}
            </motion.div>
          )}
          {panel === "language" && (
            <motion.div key="language" {...panelMotion} className={`${panelClasses} w-44`}>
              {locales.map((code) => (
                <Link
                  key={code}
                  href={localePath(code, currentPath)}
                  hrefLang={code}
                  lang={code}
                  aria-current={code === lang ? "true" : undefined}
                  onClick={() => setPanel(null)}
                  className="flex items-center justify-between border-b border-foreground/10 px-6 py-4 font-sans text-foreground transition-colors duration-300 ease-out last:border-b-0 hover:bg-foreground/5"
                >
                  <span className={code === lang ? "font-bold" : ""}>{localeNames[code]}</span>
                  {code === lang && (
                    <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  )}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
