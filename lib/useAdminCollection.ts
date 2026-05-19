"use client";
// lib/useAdminCollection.ts
// Generic hook — loads data from any Firebase admin collection
// Falls back to local data if Firebase is empty or fails

import { useState, useEffect } from "react";
import { getCollectionData } from "./adminDB";

export function useAdminCollection<T>(
  collectionName: string,
  transform: (raw: Record<string, unknown>[]) => T[],
  fallback: T[]
): { data: T[]; loading: boolean; fromFirebase: boolean } {
  const [data,        setData]        = useState<T[]>(fallback);
  const [loading,     setLoading]     = useState(true);
  const [fromFirebase, setFromFirebase] = useState(false);

  useEffect(() => {
    getCollectionData(collectionName)
      .then(raw => {
        if (raw.length > 0) {
          const transformed = transform(raw);
          if (transformed.length > 0) {
            setData(transformed);
            setFromFirebase(true);
          }
        }
      })
      .catch(e => console.warn(`[useAdminCollection] ${collectionName}:`, e))
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionName]);

  return { data, loading, fromFirebase };
}