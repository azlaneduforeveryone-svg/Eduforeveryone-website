// Static JSON search index, built at deploy time and cached by the CDN.
// The search boxes fetch it only when a visitor starts typing, so it never
// slows down the first page load.
import { NextResponse } from "next/server";
import { getSearchIndex } from "@/lib/search/buildIndex";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(getSearchIndex(), {
    headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" },
  });
}
