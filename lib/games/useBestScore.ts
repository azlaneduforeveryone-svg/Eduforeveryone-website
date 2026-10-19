"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Safe localStorage hook for persisting and retrieving a game's best score.
 * Fully wrapped in try/catch to ensure gameplay functions even when
 * localStorage is blocked, private browsing is active, or quota is exceeded.
 */
export function useBestScore(storageKey?: string) {
  const [bestScore, setBestScore] = useState<number>(0);

  useEffect(() => {
    if (!storageKey || typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored !== null) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed >= 0) {
          setBestScore(parsed);
        }
      }
    } catch (err) {
      // Storage blocked or unavailable; maintain in-memory state gracefully
      console.warn("Could not read best score from localStorage:", err);
    }
  }, [storageKey]);

  const updateBestScore = useCallback(
    (newScore: number): boolean => {
      let isNewRecord = false;
      setBestScore((prev) => {
        if (newScore > prev) {
          isNewRecord = true;
          if (storageKey && typeof window !== "undefined") {
            try {
              localStorage.setItem(storageKey, String(newScore));
            } catch (err) {
              console.warn("Could not save best score to localStorage:", err);
            }
          }
          return newScore;
        }
        return prev;
      });
      return isNewRecord;
    },
    [storageKey]
  );

  return { bestScore, updateBestScore };
}
