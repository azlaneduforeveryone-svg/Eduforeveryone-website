"use client";
// Three-way switch: O Level 4024 / IGCSE Core / IGCSE Extended.
import { MATHS_LEVELS, type MathsLevel } from "@/lib/courses/mathsSyllabus";

export default function LevelSwitch({
  level,
  onChange,
  className = "",
}: {
  level: MathsLevel;
  onChange: (l: MathsLevel) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <p id="maths-level-label" className="text-xs font-bold uppercase tracking-wider text-efe-muted mb-2">
        I am studying
      </p>
      <div role="radiogroup" aria-labelledby="maths-level-label" className="flex flex-wrap gap-2">
        {MATHS_LEVELS.map((l) => {
          const active = l.id === level;
          return (
            <button
              key={l.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(l.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                active
                  ? "bg-efe-accent text-white border-efe-accent"
                  : "bg-efe-surface text-efe-fg border-efe-line hover:border-efe-accent"
              }`}
            >
              {l.short}
            </button>
          );
        })}
      </div>
    </div>
  );
}
