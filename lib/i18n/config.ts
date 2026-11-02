export const locales = ["en", "es", "it"] as const;
export type Locale = (typeof locales)[number];

// English lives at the root (/about) so the URLs that were already indexed
// keep working. The other languages get a prefix (/es/about, /it/about).
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  it: "Italiano",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  it: "it_IT",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// "/about" -> "/about" (en) | "/es/about" (es). "/" -> "/" | "/es".
export function localePath(lang: Locale, path: string): string {
  if (lang === defaultLocale) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

// Splits a visible pathname into its language and the language-free path.
export function splitLocale(pathname: string): { lang: Locale; path: string } {
  const [, first = "", ...rest] = pathname.split("/");
  if (first !== defaultLocale && hasLocale(first)) {
    return { lang: first, path: `/${rest.join("/")}` };
  }
  return { lang: defaultLocale, path: pathname || "/" };
}

// Fills "{name}" placeholders in a translated string.
export function format(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}
