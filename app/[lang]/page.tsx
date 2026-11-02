import type { Metadata } from "next";
import Home from "@/components/HomePage";
import { getDictionary, getLocale } from "@/lib/i18n/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getDictionary();
  return buildMetadata({ lang: await getLocale(), ...seo.home, path: "/" });
}

export default async function HomeRoute() {
  const { home } = await getDictionary();
  return <Home copy={home} />;
}
