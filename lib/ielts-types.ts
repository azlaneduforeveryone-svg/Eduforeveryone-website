// lib/ielts-types.ts
// Shared types for all IELTS section data files.

export type IELTSFormat = "academic" | "general";

// ─── LISTENING ───────────────────────────────────────────────

export type LQType = "fill" | "mcq" | "table" | "form";

export interface ListeningQuestion {
  id: number;
  type: LQType;
  q: string;
  opts?: string[];
  answer: string;
}

export interface ListeningSection {
  sectionNumber: 1 | 2 | 3 | 4;
  title: string;
  context: string;
  instructions: string;
  script: string;
  questions: ListeningQuestion[];
}

export interface ListeningTest {
  id: string;
  label: string;
  sections: [ListeningSection, ListeningSection, ListeningSection, ListeningSection];
}

// ─── READING (ACADEMIC) ──────────────────────────────────────

export type RQType = "mcq" | "tfng" | "ynng" | "fill" | "summary" | "short" | "matching";

export interface ReadingQuestion {
  id: number;
  type: RQType;
  q: string;
  opts?: string[];
  answer: string;
  explanation: string;
}

export interface ReadingPassage {
  title: string;
  text: string;
  instructions?: string;
  questions: ReadingQuestion[];
}

export interface AcademicReadingTest {
  id: string;
  label: string;
  passages: [ReadingPassage, ReadingPassage, ReadingPassage];
}

// ─── READING (GENERAL TRAINING) ──────────────────────────────

export interface GTText {
  heading: string;
  text: string;
}

export interface GTReadingSection {
  sectionNumber: 1 | 2 | 3;
  label: string;
  context: string;
  instructions: string;
  texts: GTText[];
  questions: ReadingQuestion[];
}

export interface GTReadingTest {
  id: string;
  label: string;
  sections: [GTReadingSection, GTReadingSection, GTReadingSection];
}

// ─── WRITING ─────────────────────────────────────────────────

export interface AcademicWritingTask1 {
  id: string;
  chartType: "bar_chart" | "line_graph" | "pie_charts" | "table" | "process" | "map";
  chartTypeLabel: string;
  prompt: string;
  chartDescription: string;
}

export interface GTWritingTask1 {
  id: string;
  letterType: "formal" | "semi_formal" | "informal";
  letterTypeLabel: string;
  prompt: string;
  bulletPoints: string[];
}

export interface WritingTask2 {
  id: string;
  taskType: "opinion" | "discussion" | "problem_solution" | "double_question" | "advantages_disadvantages";
  taskTypeLabel: string;
  prompt: string;
  planningHints: string[];
}

export interface AcademicWritingTest {
  format: "academic";
  task1: AcademicWritingTask1;
  task2: WritingTask2;
}

export interface GTWritingTest {
  format: "general";
  task1: GTWritingTask1;
  task2: WritingTask2;
}

export type WritingTest = AcademicWritingTest | GTWritingTest;

// ─── SPEAKING ────────────────────────────────────────────────

export interface SpeakingPart2 {
  topic: string;
  points: string[];
  followUp: string;
}

export interface SpeakingTest {
  id: string;
  part1Topic: string;
  part1Questions: string[];
  part2: SpeakingPart2;
  part3Questions: string[];
}

// ─── UTILITIES ───────────────────────────────────────────────

export function rawToBand(raw: number): number {
  if (raw >= 39) return 9.0;
  if (raw >= 37) return 8.5;
  if (raw >= 35) return 8.0;
  if (raw >= 33) return 7.5;
  if (raw >= 30) return 7.0;
  if (raw >= 27) return 6.5;
  if (raw >= 23) return 6.0;
  if (raw >= 20) return 5.5;
  if (raw >= 16) return 5.0;
  if (raw >= 13) return 4.5;
  if (raw >= 10) return 4.0;
  return 3.5;
}

export function writingBandEstimate(
  w1Words: number,
  w2Words: number,
  quality: "basic" | "adequate" | "good" | "very_good"
): number {
  const base = { basic: 5.0, adequate: 5.5, good: 6.5, very_good: 7.5 }[quality];
  const penalty = (w1Words < 150 ? 0.5 : 0) + (w2Words < 250 ? 0.5 : 0);
  return Math.max(base - penalty, 3.5);
}

export function overallBand(l: number, r: number, w: number, s: number): number {
  const avg = (l + r + w + s) / 4;
  return Math.round(avg * 2) / 2;
}

export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}