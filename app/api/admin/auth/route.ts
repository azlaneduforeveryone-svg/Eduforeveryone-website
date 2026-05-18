// app/api/admin/auth/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body?.password) {
    return NextResponse.json({ error: "Password required" }, { status: 400 });
  }

  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const ADMIN_SECRET   = process.env.ADMIN_SECRET;

  if (!ADMIN_PASSWORD || !ADMIN_SECRET) {
    console.error("[admin] ADMIN_PASSWORD or ADMIN_SECRET not set in env");
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  // Constant-time comparison — prevents timing attacks
  const inputBuf   = Buffer.from(String(body.password));
  const correctBuf = Buffer.from(ADMIN_PASSWORD);
  const match =
    inputBuf.length === correctBuf.length &&
    crypto.timingSafeEqual(inputBuf, correctBuf);

  if (!match) {
    await new Promise(r => setTimeout(r, 500));
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  // Create signed token: timestamp.HMAC(timestamp, ADMIN_SECRET)
  const timestamp = Date.now().toString();
  const signature = crypto
    .createHmac("sha256", ADMIN_SECRET)
    .update(timestamp)
    .digest("hex");
  const token = `${timestamp}.${signature}`;

  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_token", token, {
    httpOnly:  true,
    secure:    process.env.NODE_ENV === "production",
    sameSite:  "strict",
    maxAge:    60 * 60 * 24,
    path:      "/",
  });
  return res;
}