"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import logoBlack from "@/assets/Logo-Black.png";

const menuLinks = [
  { label: "About Us", href: "/about" },
  { label: "Project", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-30 mb-16 flex flex-col items-center lg:mb-[100px]">
      <div className="relative flex w-full max-w-xl items-center justify-between rounded-full bg-button-background p-2 pl-6">
        <Link href="/" aria-label="Natalia Moin Fanner - Home">
          <Image src={logoBlack} alt="Natalia Moin Fanner" className="h-10 w-auto" priority />
        </Link>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="rounded-full bg-foreground px-6 py-2.5 font-sans font-bold text-background transition-opacity duration-300 ease-out hover:opacity-80"
        >
          {open ? "Close" : "Menu"}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ transformOrigin: "top right" }}
              className="absolute right-0 top-full mt-3 flex w-56 flex-col overflow-hidden rounded-3xl bg-button-background shadow-lg"
            >
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-foreground/10 px-6 py-4 font-sans font-bold text-foreground transition-colors duration-300 ease-out last:border-b-0 hover:bg-foreground/5"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
