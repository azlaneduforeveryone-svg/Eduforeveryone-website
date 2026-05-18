// app/api/admin/verify/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  if (!token) return NextResponse.json({ valid: false }, { status: 401 });

  const ADMIN_SECRET = process.env.ADMIN_SECRET;
  if (!ADMIN_SECRET) return NextResponse.json({ valid: false }, { status: 500 });

  const parts = token.split(".");
  if (parts.length !== 2) return NextResponse.json({ valid: false }, { status: 401 });
  const [timestamp, signature] = parts;

  // Verify signature
  const expected = crypto
    .createHmac("sha256", ADMIN_SECRET)
    .update(timestamp)
    .digest("hex");

  if (signature !== expected) return NextResponse.json({ valid: false }, { status: 401 });

  // Check 24-hour expiry
  const age = Date.now() - parseInt(timestamp, 10);
  if (age > 24 * 60 * 60 * 1000) return NextResponse.json({ valid: false }, { status: 401 });

  return NextResponse.json({ valid: true });
}