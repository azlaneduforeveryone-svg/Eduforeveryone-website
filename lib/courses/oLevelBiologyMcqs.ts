import type { McqTable } from "./oLevelAccountingMcqs";

export interface BiologyMcq {
  id: string;
  topic: string;
  level: "O Level 5090";
  question: string;
  table?: McqTable;
  options: [string, string, string, string];
  optionFeedback: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  type: "concept" | "diagram" | "practical" | "calculation";
}

export const oLevelBiologyMcqs: BiologyMcq[] = [];

export const biologyMcqsByTopic = (topic: string): BiologyMcq[] =>
  oLevelBiologyMcqs.filter((q) => q.topic === topic);
