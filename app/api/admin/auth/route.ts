// app/api/admin/auth/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { verifyFirebaseIdToken } from "@/lib/server/aiGuard";

const ADMIN_UID = "Vbw90jysj8c4X4R02sPmdNKjvrf2";
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;
const failedAttempts = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim() || "unknown";
  return "unknown";
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const now = Date.now();
  const entry = failedAttempts.get(ip);
  if (entry && now < entry.resetAt && entry.count >= MAX_ATTEMPTS) {
    return NextResponse.json(
      { error: "Too many failed attempts. Please try again in 15 minutes." },
      { status: 429 }
    );
  }

  const firebaseKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!firebaseKey) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const authHeader = req.headers.get("authorization") || "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";
  const verified = idToken
    ? await verifyFirebaseIdToken(idToken, firebaseKey).catch(() => null)
    : null;
  if (!verified || verified.localId !== ADMIN_UID) {
    return NextResponse.json(
      { error: "Sign in with the admin Google account first." },
      { status: 401 }
    );
  }

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
    const prev = failedAttempts.get(ip);
    if (!prev || now >= prev.resetAt) {
      failedAttempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    } else {
      prev.count += 1;
    }
    await new Promise(r => setTimeout(r, 2000));
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  failedAttempts.delete(ip);

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