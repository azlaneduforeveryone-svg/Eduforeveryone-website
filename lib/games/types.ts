import type { QuizQuestion } from "@/types";

export type WordUpgradeDomain =
  | "environment"
  | "education"
  | "technology"
  | "health"
  | "work"
  | "cities"
  | "crime"
  | "government"
  | "media"
  | "travel"
  | "travel-and-tourism"
  | "society"
  | "family-and-society"
  | "economy";

export interface WordUpgradeItem extends QuizQuestion {
  domain: WordUpgradeDomain;
  targetWord: string;
}

export type PhraseUpgradeCategory =
  | "writing-task-1"
  | "writing-task-2"
  | "speaking";

export interface PhraseUpgradeItem extends QuizQuestion {
  category: PhraseUpgradeCategory;
  targetPhrase?: string;
}

export interface QuranWordItem extends QuizQuestion {
  arabic: string;
  /** Hand-written words only. */
  transliteration?: string;
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  reviewed: boolean;
  /** Urdu answer options and explanation (QUL words only); same order as options. */
  optionsUr?: string[];
  explanationUr?: string;
  /** "hand" = hand-written list, "qul" = built from QUL word-by-word data. */
  source?: "hand" | "qul";
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
