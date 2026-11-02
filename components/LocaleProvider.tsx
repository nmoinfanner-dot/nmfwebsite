"use client";

import { createContext, useContext } from "react";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type LocaleContextValue = { lang: Locale; common: Dictionary["common"] };

const LocaleContext = createContext<LocaleContextValue | null>(null);

// Hands the current language and the shared UI strings (menu, footer, form
// labels...) to client components. Page copy is passed down by the pages.
export function LocaleProvider({
  lang,
  common,
  children,
}: LocaleContextValue & { children: React.ReactNode }) {
  return <LocaleContext.Provider value={{ lang, common }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return {
    lang: value.lang,
    common: value.common,
    href: (path: string) => localePath(value.lang, path),
  };
}
