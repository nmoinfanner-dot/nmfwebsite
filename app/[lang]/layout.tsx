import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@fontsource/cal-sans";
import "../globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StructuredData } from "@/components/StructuredData";
import { locales } from "@/lib/i18n/config";
import { getLocale } from "@/lib/i18n/server";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { titleSuffix } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Fallbacks only: every page sets its own title, description, canonical and
// share metadata through buildMetadata (lib/seo.ts).
export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLocale();
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: {
      default: titleSuffix(lang),
      template: `%s | ${titleSuffix(lang)}`,
    },
    description: dictionaries[lang].site.defaultDescription,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const lang = await getLocale();

  return (
    <html lang={lang} className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <LocaleProvider lang={lang} common={dictionaries[lang].common}>
          <SmoothScroll>{children}</SmoothScroll>
        </LocaleProvider>
      </body>
    </html>
  );
}
