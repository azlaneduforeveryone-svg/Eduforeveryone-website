// lib/server/aiGuard.ts
// Shared server-side guard for paid AI routes (Edge runtime compatible).
// Uses Firebase Identity Toolkit + Firestore REST API with the user's own ID token.

export const DAILY_LIMIT = 10;

export type AiQuotaResult =
  | { ok: true; uid: string; remaining: number }
  | { ok: false; status: number; error: string };

export interface VerifiedFirebaseUser {
  localId: string;
  emailVerified: boolean;
}

export async function verifyFirebaseIdToken(
  idToken: string,
  apiKey: string
): Promise<VerifiedFirebaseUser | null> {
  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(apiKey)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    }
  );
  if (!res.ok) return null;
  const data = (await res.json().catch(() => null)) as
    | { users?: { localId?: string; emailVerified?: boolean }[] }
    | null;
  const u = data?.users?.[0];
  if (!u?.localId) return null;
  return {
    localId: u.localId,
    emailVerified: Boolean(u.emailVerified),
  };
}

function usageDocPath(projectId: string, uid: string, date: string) {
  return `projects/${projectId}/databases/(default)/documents/aiTutorUsage/${uid}_${date}`;
}

function firestoreHeaders(idToken: string, appCheckToken?: string | null, withJson = false) {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${idToken}`,
  };
  if (withJson) {
    headers["Content-Type"] = "application/json";
  }
  if (appCheckToken) {
    headers["X-Firebase-AppCheck"] = appCheckToken;
  }
  return headers;
}

async function readUsage(
  projectId: string,
  idToken: string,
  uid: string,
  date: string,
  appCheckToken?: string | null
): Promise<number> {
  const res = await fetch(
    `https://firestore.googleapis.com/v1/${usageDocPath(projectId, uid, date)}`,
    { headers: firestoreHeaders(idToken, appCheckToken) }
  );
  if (res.status === 404) return 0;
  if (!res.ok) throw new Error(`usage read ${res.status}`);
  const doc = (await res.json()) as { fields?: { count?: { integerValue?: string } } };
  return Number(doc.fields?.count?.integerValue ?? 0);
}

async function bumpUsage(
  projectId: string,
  idToken: string,
  uid: string,
  date: string,
  appCheckToken?: string | null
): Promise<boolean> {
  const name = usageDocPath(projectId, uid, date);
  const res = await fetch(
    `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents:commit`,
    {
      method: "POST",
      headers: firestoreHeaders(idToken, appCheckToken, true),
      body: JSON.stringify({
        writes: [
          {
            update: { name, fields: { uid: { stringValue: uid }, date: { stringValue: date } } },
            updateMask: { fieldPaths: ["uid", "date"] },
            updateTransforms: [{ fieldPath: "count", increment: { integerValue: "1" } }],
          },
        ],
      }),
    }
  );
  return res.ok;
}

export async function requireAiQuota(req: Request): Promise<AiQuotaResult> {
  const firebaseKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  if (!firebaseKey || !projectId) {
    return { ok: false, status: 500, error: "AI service is not set up yet. Please try again later." };
  }

  const authHeader = req.headers.get("authorization") || "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";
  if (!idToken) {
    return { ok: false, status: 401, error: "Please sign in to get AI feedback." };
  }

  const verified = await verifyFirebaseIdToken(idToken, firebaseKey).catch(() => null);
  if (!verified) {
    return { ok: false, status: 401, error: "Your sign-in has expired. Please sign in again." };
  }
  if (!verified.emailVerified) {
    return { ok: false, status: 403, error: "Please verify your email address to use AI feedback." };
  }

  const uid = verified.localId;
  const appCheckToken = req.headers.get("x-firebase-appcheck");
  const date = new Date().toISOString().slice(0, 10);

  let used: number;
  try {
    used = await readUsage(projectId, idToken, uid, date, appCheckToken);
  } catch (e) {
    console.error("[aiGuard] usage read failed:", e);
    return { ok: false, status: 503, error: "AI feedback is not available right now. Please try again later." };
  }

  if (used >= DAILY_LIMIT) {
    return {
      ok: false,
      status: 429,
      error: `You have used all ${DAILY_LIMIT} AI feedback requests for today. Come back tomorrow.`,
    };
  }

  const counted = await bumpUsage(projectId, idToken, uid, date, appCheckToken).catch(() => false);
  if (!counted) {
    console.error("[aiGuard] usage write refused (check aiTutorUsage rule in firestore.rules)");
    return { ok: false, status: 503, error: "AI feedback is not available right now. Please try again later." };
  }

  return { ok: true, uid, remaining: Math.max(0, DAILY_LIMIT - used - 1) };
}
