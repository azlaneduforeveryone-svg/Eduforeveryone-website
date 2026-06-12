// lib/gmat-types.ts
// ---------------------------------------------------------------------------
// GMAT Focus Edition — type definitions.
// Mirrors the convention of lib/ielts-types.ts: a discriminated union of
// question shapes, consumed by static banks in lib/gmat-data.ts.
//
// Static-bank architecture (same as IELTS): content lives in TypeScript,
// is git-versioned, and is CDN-cached. No database for the question bank.
// Firestore is used ONLY for saving per-user results (see GmatSessionResult).
//
// Exam structure encoded here (GMAT Focus Edition):
//   Quantitative Reasoning  — 21 Q, 45 min  (Problem Solving only)
//   Verbal Reasoning        — 23 Q, 45 min  (Critical Reasoning + Reading Comp)
//   Data Insights           — 20 Q, 45 min  (DS, MSR, Table, Graphics, Two-Part)
//   Total 64 Q, 2h15m, score 205–805 (section scores 60–90).
//   Bookmark + edit up to 3 answers per section. No essay, no Sentence
//   Correction, no standalone Geometry.
// ---------------------------------------------------------------------------

export type GmatSection =
  | "quant" // Quantitative Reasoning
  | "verbal" // Verbal Reasoning
  | "data-insights"; // Data Insights

export type GmatQuestionType =
  | "problem-solving" // Quant
  | "critical-reasoning" // Verbal
  | "reading-comprehension" // Verbal (passage + sub-questions)
  | "data-sufficiency" // Data Insights
  | "multi-source-reasoning" // Data Insights (tabbed sources + sub-questions)
  | "table-analysis" // Data Insights (sortable table + Yes/No statements)
  | "graphics-interpretation" // Data Insights (chart + dropdown blanks)
  | "two-part-analysis"; // Data Insights (two-column selection)

export type GmatDifficulty = "Easy" | "Medium" | "Hard";

// Fields every item carries (cf. IELTS Question { id, type, q, explanation }).
export interface GmatBase {
  id: string; // unique, e.g. "gmat-ps-0105"
  section: GmatSection;
  type: GmatQuestionType;
  difficulty: GmatDifficulty;
  topic: string; // e.g. "Algebra · rates"
  explanation: string; // shown after grading
}

// ---- Simple 5-option MCQ items: Problem Solving & Critical Reasoning -------
export interface GmatMcq extends GmatBase {
  type: "problem-solving" | "critical-reasoning";
  stem: string; // question text (HTML-free; render math/markup in component)
  passage?: string; // CR argument / stimulus (optional)
  options: string[]; // length 5 (A–E)
  correct: number; // index into options
  optionExplanations?: string[]; // optional, parallel to options; permuted with them on shuffle
}

// ---- Data Sufficiency: fixed 5-option answer set, two statements ----------
// DS_OPTIONS is identical on every item; do not store it per-question.
export interface GmatDataSufficiency extends GmatBase {
  type: "data-sufficiency";
  stem: string;
  statements: [string, string]; // (1) and (2)
  correct: number; // 0–4, index into DS_OPTIONS
  optionExplanations?: string[]; // optional, length 5, aligned to DS_OPTIONS (never shuffled)
}

export const DS_OPTIONS: readonly string[] = [
  "Statement (1) ALONE is sufficient, but statement (2) alone is not.",
  "Statement (2) ALONE is sufficient, but statement (1) alone is not.",
  "BOTH statements TOGETHER are sufficient, but NEITHER alone is.",
  "EACH statement ALONE is sufficient.",
  "Statements (1) and (2) TOGETHER are NOT sufficient.",
] as const;

// ---- Reading Comprehension: ONE passage, MANY sub-questions ---------------
// Each sub-question counts toward the section's question total.
export interface GmatRcSubQuestion {
  id: string;
  stem: string;
  options: string[]; // length 5
  correct: number;
  optionExplanations?: string[]; // optional, parallel to options
  explanation: string;
}
export interface GmatReadingComprehension extends GmatBase {
  type: "reading-comprehension";
  passage: string;
  questions: GmatRcSubQuestion[];
}

// ---- Two-Part Analysis: two columns, one selection each from shared rows ---
export interface GmatTwoPartAnalysis extends GmatBase {
  type: "two-part-analysis";
  intro: string;
  prompt: string;
  colHeaders: [string, string];
  rows: string[]; // shared answer set
  correctA: number; // row index for column A
  correctB: number; // row index for column B
}

// ---- Table Analysis: sortable table + N independent Yes/No statements ------
export interface GmatTableData {
  columns: string[];
  rows: (string | number)[][]; // structured, NOT HTML — required for sorting
}
export interface GmatTableStatement {
  text: string;
  correct: boolean; // maps to answerLabels[0] when true
}
export interface GmatTableAnalysis extends GmatBase {
  type: "table-analysis";
  intro: string;
  table: GmatTableData;
  answerLabels: [string, string]; // e.g. ["Yes", "No"]
  statements: GmatTableStatement[]; // all must be correct to score the item
}

// ---- Graphics Interpretation: chart + dropdown fill-in-the-blanks ----------
export interface GmatChart {
  kind: "bars" | "line" | "scatter";
  labels: string[];
  values: number[];
  yLabel?: string;
}
export interface GmatGraphicsBlank {
  prefix: string;
  options: string[]; // this blank's own dropdown set
  correct: number;
  suffix?: string;
}
export interface GmatGraphicsInterpretation extends GmatBase {
  type: "graphics-interpretation";
  intro: string;
  chart: GmatChart;
  blanks: GmatGraphicsBlank[]; // all must be correct to score the item
}

// ---- Multi-Source Reasoning: tabbed sources + mixed sub-questions ----------
export interface GmatMsrSource {
  title: string; // tab label
  body: string;
}
export type GmatMsrSubQuestion =
  | {
      id: string;
      kind: "mcq";
      stem: string;
      options: string[];
      correct: number;
      explanation: string;
    }
  | {
      id: string;
      kind: "yn"; // multiple supported/not-supported statements
      stem: string;
      statements: { text: string; correct: boolean }[];
      answerLabels: [string, string];
      explanation: string;
    };
export interface GmatMultiSourceReasoning extends GmatBase {
  type: "multi-source-reasoning";
  sources: GmatMsrSource[];
  questions: GmatMsrSubQuestion[];
}

// ---- The discriminated union every bank uses ------------------------------
export type GmatQuestion =
  | GmatMcq
  | GmatDataSufficiency
  | GmatReadingComprehension
  | GmatTwoPartAnalysis
  | GmatTableAnalysis
  | GmatGraphicsInterpretation
  | GmatMultiSourceReasoning;

// ---- Section + full-form containers ---------------------------------------
export interface GmatSectionBank {
  id: GmatSection;
  name: string;
  minutes: number; // 45
  realCount: number; // 21 | 23 | 20
  items: GmatQuestion[];
}

export interface GmatForm {
  id: string; // e.g. "focus-mock-1"
  title: string;
  editsPerSection: number; // 3
  sections: GmatSectionBank[];
}

// ---- Per-user result (Firestore: gmatResults/{uid}/sessions/{id}) ----------
// User RESULTS only — never the question bank.
export interface GmatSectionScore {
  section: GmatSection;
  rawCorrect: number;
  total: number;
  estimatedSectionScore: number; // 60–90, ESTIMATE only
}
export interface GmatSessionResult {
  formId: string;
  sections: GmatSectionScore[];
  estimatedTotal: number; // 205–805, ESTIMATE only — not official
  completedAt: number; // epoch ms (Firestore Timestamp on write)
}