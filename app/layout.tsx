import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@fontsource/cal-sans";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Natalia Moin Fanner",
    template: "%s | Natalia Moin Fanner",
  },
  description:
    "Senior designer with 8+ years building brand identities and websites for companies across the US and Europe.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
