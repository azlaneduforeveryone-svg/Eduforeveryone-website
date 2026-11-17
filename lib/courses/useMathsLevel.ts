"use client";
// The student's chosen syllabus (O Level 4024, IGCSE Core or IGCSE Extended),
// remembered in this browser. Shared by the Maths hub and topic pages.
import { useCallback, useEffect, useState } from "react";
import type { MathsLevel } from "./mathsSyllabus";

const KEY = "efe-maths-level";
const EVENT = "efe-maths-level-change";

function read(): MathsLevel {
  try {
    const v = window.localStorage.getItem(KEY);
    if (v === "olevel" || v === "core" || v === "extended") return v;
  } catch {
    // storage blocked: fall back to the default
  }
  return "olevel";
}

export function useMathsLevel(): [MathsLevel, (l: MathsLevel) => void] {
  const [level, setLevelState] = useState<MathsLevel>("olevel");

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

  const setLevel = useCallback((l: MathsLevel) => {
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
