import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Low-Ops: HTML and dynamic responses should not be cached at intermediaries.
 * Skip immutable Next.js static assets so hashed chunks stay cache-friendly.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/_next/static") ||
    pathname.startsWith("/_next/image")
  ) {
    return NextResponse.next();
  }

  const res = NextResponse.next();
  res.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, max-age=0"
  );
  res.headers.set("Pragma", "no-cache");
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
