import type { QuizQuestion } from "@/types";

export type WordUpgradeDomain =
  | "environment"
  | "education"
  | "technology"
  | "health"
  | "work"
  | "cities";

export interface WordUpgradeItem extends QuizQuestion {
  domain: WordUpgradeDomain;
  targetWord: string;
}

export interface QuranWordItem extends QuizQuestion {
  arabic: string;
  transliteration: string;
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  reviewed: boolean;
}

export interface EncouragementConfig {
  wrongMessages: string[];
  streak3Message: string;
  streak5Message: string;
  lowScoreMessage: string;
  mediumScoreMessage: string;
  highScoreMessage: string;
  style: "sparkles" | "geometric";
}
