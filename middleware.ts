import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import rateLimit from "@utils/rate-limit";
import { headers } from "next/headers";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

const limiter = rateLimit({
  limit: 30,
});

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const csrfToken = headers().get("X-CSRF-Token") || "missing";
  const { isRateLimited, currentUsage, limit } = limiter.check(csrfToken);

  if (isRateLimited) {
    return new Response("Rate limit reached", {
      status: 418,
      statusText: "Too Many Requests",
    });
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

// export { default } from "next-auth/middleware";

export const config = {
  // Skip all paths that should not be internationalized
  matcher: [
    "/((?!api|_next/static|_next/image|assets|fonts|favicon.webp|favicon.svg|robots.txt|en/sitemap.xml).*)",
  ],
};

// export const config = {
//   // Skip all paths that should not be internationalized
//   matcher: ["/((?!api|_next/static|_next/image|favicon.svg).*)"],

// };
