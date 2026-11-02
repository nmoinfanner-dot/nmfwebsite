import type { Metadata } from "next";
import Home from "@/components/HomePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Portfolio of Natalia Moin Fanner, a senior brand and web designer in Milan. Brand identities, websites and motion for clients across Europe and the US.",
  path: "/",
});

export default function Page() {
  return <Home />;
}
