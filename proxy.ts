import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, hasLocale } from "@/lib/i18n/config";

// English is served from the root, but the pages live under app/[lang], so
// unprefixed paths are rewritten internally to /en/... (the address bar does
// not change). A visible /en/... is redirected back to the clean URL so the
// same page never exists at two addresses.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first = ""] = pathname.split("/");

  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(`/${defaultLocale}`.length) || "/";
    return NextResponse.redirect(url, 301);
  }

  if (hasLocale(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skips Next internals, API routes and anything with a file extension
  // (images, videos, sitemap.xml, robots.txt, favicon...).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
