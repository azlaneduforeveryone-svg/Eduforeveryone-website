// lib/gmat/engine.ts
// ---------------------------------------------------------------------------
// Pure logic for the GMAT module. NO React here. Components import from this
// so practice + full-mock share one source of truth (no hardcoded questions).
//
// Responsibilities:
//   1. Type-aware option shuffling that REMAPS the correct index and keeps
//      per-option explanations attached. Data Sufficiency is NEVER shuffled.
//   2. Sampling questions per section with no-repeat rotation (localStorage).
//   3. Difficulty-weighted score ESTIMATE (not an official scaled score).
// ---------------------------------------------------------------------------

import type {
  GmatQuestion,
  GmatSectionBank,
  GmatDifficulty,
  GmatSectionScore,
  GmatSection,
} from "./types";

/* ---------------------------- Fisher–Yates -------------------------------- */
export function shuffle<T>(input: readonly T[]): T[] {
  const a = [...input];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---- Shuffle an options array, remapping correct index + parallel arrays --
   Returns a new options order, the new correct index, and the per-option
   explanations reordered to stay attached to their option. */
function shuffleOptions(
  options: string[],
  correct: number,
  optionExplanations?: string[]
): { options: string[]; correct: number; optionExplanations?: string[] } {
  const order = shuffle(options.map((_, i) => i)); // permutation of indices
  const newOptions = order.map((i) => options[i]);
  const newCorrect = order.indexOf(correct);
  const newExpl = optionExplanations
    ? order.map((i) => optionExplanations[i])
    : undefined;
  return { options: newOptions, correct: newCorrect, optionExplanations: newExpl };
}

/* ---- prepareQuestion: returns a render-ready copy with valid shuffling ----
   Call once per question when a session starts. Type-aware:
     PS / CR / RC / GI / MSR-mcq -> shuffle options, remap index
     Two-Part Analysis           -> shuffle shared rows, remap BOTH indices
     Table Analysis              -> shuffle STATEMENT order (Yes/No labels stay)
     Data Sufficiency            -> NO shuffle (fixed standardized rubric) */
export function prepareQuestion(q: GmatQuestion): GmatQuestion {
  switch (q.type) {
    case "data-sufficiency":
      return q; // fixed answer set — must not be reordered

    case "problem-solving":
    case "critical-reasoning": {
      const s = shuffleOptions(q.options, q.correct, q.optionExplanations);
      return { ...q, ...s };
    }

    case "reading-comprehension":
      return {
        ...q,
        questions: q.questions.map((sub) => {
          const s = shuffleOptions(sub.options, sub.correct, sub.optionExplanations);
          return { ...sub, ...s };
        }),
      };

    case "two-part-analysis": {
      const order = shuffle(q.rows.map((_, i) => i));
      return {
        ...q,
        rows: order.map((i) => q.rows[i]),
        correctA: order.indexOf(q.correctA),
        correctB: order.indexOf(q.correctB),
      };
    }

    case "table-analysis":
      // Reorder statements only; Yes/No answer labels are fixed.
      return { ...q, statements: shuffle(q.statements) };

    case "graphics-interpretation":
      return {
        ...q,
        blanks: q.blanks.map((b) => {
          const order = shuffle(b.options.map((_, i) => i));
          return {
            ...b,
            options: order.map((i) => b.options[i]),
            correct: order.indexOf(b.correct),
          };
        }),
      };

    case "multi-source-reasoning":
      return {
        ...q,
        questions: q.questions.map((sub) =>
          sub.kind === "mcq"
            ? { ...sub, ...shuffleOptions(sub.options, sub.correct) }
            : sub
        ),
      };
  }
}

/* ------------------- No-repeat sampling (localStorage) --------------------- */
/* Returns `count` questions the user hasn't recently seen, then prepares them
   (shuffled). Resets the seen-set when the bank is exhausted. Mirrors the
   IELTS `ielts_seen_${passageId}` rotation pattern. */
const seenKey = (section: GmatSection) => `gmat_seen_${section}`;

function getSeen(section: GmatSection): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    return new Set(JSON.parse(localStorage.getItem(seenKey(section)) || "[]"));
  } catch {
    return new Set();
  }
}
function setSeen(section: GmatSection, ids: Set<string>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(seenKey(section), JSON.stringify([...ids]));
}

export function sampleSection(
  bank: GmatSectionBank,
  count: number
): GmatQuestion[] {
  let seen = getSeen(bank.id);
  let pool = bank.items.filter((q) => !seen.has(q.id));

  // Exhausted (or first run with a small bank): reset rotation.
  if (pool.length < count) {
    seen = new Set();
    pool = [...bank.items];
  }

  const questionCount = (q: GmatQuestion) =>
  q.type === "reading-comprehension" || q.type === "multi-source-reasoning"
    ? q.questions.length
    : 1;

const shuffled = shuffle(pool);
const picked: GmatQuestion[] = [];
let total = 0;
for (const q of shuffled) {
  if (total >= count) break;
  picked.push(q);
  total += questionCount(q);
  seen.add(q.id);
}

setSeen(bank.id, seen);
return picked.map(prepareQuestion);
}

/* Build a full mock: a fresh sample of the real per-section counts each time,
   so it differs per attempt while matching the real exam's length/structure. */
export function buildFullMock(
  banks: GmatSectionBank[]
): Record<GmatSection, GmatQuestion[]> {
  const out = {} as Record<GmatSection, GmatQuestion[]>;
  banks.forEach((b) => {
    out[b.id] = sampleSection(b, b.realCount); // 21 / 23 / 20
  });
  return out;
}

/* ----------------------------- Scoring ------------------------------------ */
/* Difficulty-weighted ESTIMATE. Harder items count more, which tracks the real
   exam better than raw % — but it is still an estimate, never the official
   adaptive 205–805. Always label it as such in the UI. */
const WEIGHT: Record<GmatDifficulty, number> = {
  Easy: 1.0,
  Medium: 1.4,
  Hard: 1.8,
};

export function gradeUnit(q: GmatQuestion, answer: unknown): boolean {
  switch (q.type) {
    case "problem-solving":
    case "critical-reasoning":
    case "data-sufficiency":
      return answer === q.correct;
    case "two-part-analysis": {
      const a = answer as { a?: number; b?: number } | undefined;
      return !!a && a.a === q.correctA && a.b === q.correctB;
    }
    case "table-analysis": {
      const a = (answer as number[]) || [];
      return q.statements.every((s, i) => a[i] === (s.correct ? 0 : 1));
    }
    case "graphics-interpretation": {
      const a = (answer as number[]) || [];
      return q.blanks.every((b, i) => a[i] === b.correct);
    }
    // RC and MSR are graded at the sub-question level; see gradeSubQuestion.
    default:
      return false;
  }
}

/* Map a weighted ratio (0–1) to a section score (60–90). Estimate only. */
export function estimateSectionScore(weightedRatio: number): number {
  return Math.max(60, Math.min(90, Math.round(60 + weightedRatio * 30)));
}

/* Map the three section scores to an estimated total on the 205–805 scale. */
export function estimateTotal(sectionScores: number[]): number {
  if (!sectionScores.length) return 205;
  const avg = sectionScores.reduce((a, b) => a + b, 0) / sectionScores.length;
  const t = (avg - 60) / 30; // 0..1
  // Round to the nearest 10, like the real scale's increments.
  return Math.round((205 + t * 600) / 10) * 10;
}

export function weightFor(d: GmatDifficulty): number {
  return WEIGHT[d];
}

/* Convenience: given graded results for one section, produce its score block. */
export function scoreSection(
  section: GmatSection,
  results: { difficulty: GmatDifficulty; correct: boolean }[]
): GmatSectionScore {
  const totalW = results.reduce((s, r) => s + weightFor(r.difficulty), 0) || 1;
  const gotW = results.reduce(
    (s, r) => s + (r.correct ? weightFor(r.difficulty) : 0),
    0
  );
  return {
    section,
    rawCorrect: results.filter((r) => r.correct).length,
    total: results.length,
    estimatedSectionScore: estimateSectionScore(gotW / totalW),
  };
}