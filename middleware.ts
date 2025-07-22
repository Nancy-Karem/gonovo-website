import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Force logging to see if middleware is working
  console.error("🚨 MIDDLEWARE EXECUTED for:", pathname);
  console.error("🚨 FULL URL:", request.url);
  
  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    console.error("⏭️ SKIPPING static/API route:", pathname);
    return NextResponse.next();
  }

  // Check if path already has locale
  const hasLocale = pathname.startsWith("/en") || pathname.startsWith("/ar");
  console.error("🌍 HAS LOCALE:", hasLocale);

  if (!hasLocale) {
    // Get locale from cookie or default to "ar"
    const cookieLocale = request.cookies.get("language")?.value;
    console.error("🍪 COOKIE LOCALE:", cookieLocale);
    
    const locale = cookieLocale === "en" ? "en" : "ar";
    console.error("🌐 SELECTED LOCALE:", locale);
    
    // Create redirect URL
    const newPath = `/${locale}${pathname === "/" ? "" : pathname}`;
    console.error("🔄 REDIRECTING TO:", newPath);
    
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    
    return NextResponse.redirect(url);
  }

  console.error("✅ CONTINUING with existing locale");
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}; 