import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@fontsource/cal-sans";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StructuredData } from "@/components/StructuredData";
import { SITE_NAME, SITE_TITLE_SUFFIX, SITE_URL } from "@/lib/site";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Fallbacks only: every page sets its own title, description, canonical and
// share metadata through buildMetadata (lib/seo.ts).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_TITLE_SUFFIX,
    template: `%s | ${SITE_TITLE_SUFFIX}`,
  },
  description:
    "Senior brand and web designer in Milan with 8+ years of experience building brand identities and websites for clients across Europe and the US.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
