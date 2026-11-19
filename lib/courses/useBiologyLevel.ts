"use client";
// The student's chosen Biology syllabus (O Level 5090, IGCSE 0610 Core or Extended),
// remembered in this browser. Shared by the Biology hub and topic pages.
import { useCallback, useEffect, useState } from "react";
import type { BiologyLevel } from "./biologySyllabus";

const KEY = "efe-biology-level";
const EVENT = "efe-biology-level-change";

function read(): BiologyLevel {
  try {
    const v = window.localStorage.getItem(KEY);
    if (v === "olevel" || v === "core" || v === "extended") return v;
  } catch {
    // storage blocked: fall back to the default
  }
  return "olevel";
}

export function useBiologyLevel(): [BiologyLevel, (l: BiologyLevel) => void] {
  const [level, setLevelState] = useState<BiologyLevel>("olevel");

  useEffect(() => {
    setLevelState(read());
    const sync = () => setLevelState(read());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const setLevel = useCallback((l: BiologyLevel) => {
    setLevelState(l);
    try {
      window.localStorage.setItem(KEY, l);
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return [level, setLevel];
}
