"use client";
// Loads /search-index.json once per visit, the first time a search box is used.
import { useCallback, useState } from "react";
import type { SearchEntry } from "./fuzzy";

let loaded: SearchEntry[] | null = null;
let loading: Promise<SearchEntry[]> | null = null;

function load(): Promise<SearchEntry[]> {
  if (loaded) return Promise.resolve(loaded);
  if (!loading) {
    loading = fetch("/search-index.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((data: SearchEntry[]) => (loaded = data))
      .catch(() => {
        loading = null;
        return [];
      });
  }
  return loading;
}

export function useSearchIndex() {
  const [index, setIndex] = useState<SearchEntry[] | null>(loaded);
  const ensure = useCallback(() => {
    if (!index) load().then(setIndex);
  }, [index]);
  return { index, ensure };
}
