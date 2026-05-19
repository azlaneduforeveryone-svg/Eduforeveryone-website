// lib/adminDB.ts
import {
  collection, getDocs, writeBatch, doc,
  addDoc, serverTimestamp,
  query, orderBy, limit,
} from "firebase/firestore";
import { db } from "./firebase";

export type SaveMode = "replace" | "append";

// ── Remove undefined values — Firebase rejects them ───────────────────────────
function cleanUndefined(obj: Record<string, unknown>): Record<string, unknown> {
  return JSON.parse(JSON.stringify(obj, (_, v) => v === undefined ? null : v));
}

// ── Generic batch write (handles >500 items) ──────────────────────────────────
export async function saveToCollection(
  collectionName: string,
  data: Record<string, unknown>[],
  mode: SaveMode
) {
  if (mode === "replace") {
    await clearCollection(collectionName);
  }

  // Split into chunks of 499
  const chunks: Record<string, unknown>[][] = [];
  for (let i = 0; i < data.length; i += 499) {
    chunks.push(data.slice(i, i + 499));
  }

  for (const chunk of chunks) {
    const batch = writeBatch(db);
    for (const item of chunk) {
      const ref = doc(collection(db, collectionName));
      batch.set(ref, cleanUndefined({ ...item, _uploadedAt: serverTimestamp() }));
    }
    await batch.commit();
  }

  // Log upload
  await addDoc(collection(db, "admin_uploads"), {
    collection: collectionName,
    count: data.length,
    mode,
    uploadedAt: serverTimestamp(),
  });
}

// ── Clear all documents in a collection ───────────────────────────────────────
export async function clearCollection(collectionName: string) {
  const snap = await getDocs(collection(db, collectionName));
  const chunks: typeof snap.docs[] = [];
  for (let i = 0; i < snap.docs.length; i += 499) {
    chunks.push(snap.docs.slice(i, i + 499));
  }
  for (const chunk of chunks) {
    const batch = writeBatch(db);
    chunk.forEach(d => batch.delete(d.ref));
    await batch.commit();
  }
}

// ── Get all documents from a collection ──────────────────────────────────────
export async function getCollectionData(collectionName: string) {
  const snap = await getDocs(collection(db, collectionName));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ── Get document count ────────────────────────────────────────────────────────
export async function getCollectionCount(collectionName: string): Promise<number> {
  const snap = await getDocs(collection(db, collectionName));
  return snap.size;
}

// ── Get upload history ────────────────────────────────────────────────────────
export async function getUploadHistory(count = 15) {
  const q = query(
    collection(db, "admin_uploads"),
    orderBy("uploadedAt", "desc"),
    limit(count)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ── Get admin_quiz questions (for IslamicQuizGame) ────────────────────────────
export async function getAdminQuizQuestions() {
  const snap = await getDocs(collection(db, "admin_quiz"));
  return snap.docs.map(d => d.data());
}
export async function getAdminIELTSListening() {
  const snap = await getDocs(collection(db, "admin_ielts_listening"));
  return snap.docs.map(d => d.data());
}