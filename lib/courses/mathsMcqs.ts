// Cambridge Mathematics practice MCQs (O Level 4024 and IGCSE 0580), original
// questions written for EduForEveryone. Keyed by IGCSE 0580 topic number.
// Independent material: not produced or endorsed by Cambridge University Press & Assessment.
import type { McqTable } from "./oLevelAccountingMcqs";

export interface MathsMcq {
  id: string;
  topic: string;
  level: "Mathematics 4024/0580";
  question: string;
  table?: McqTable;
  options: [string, string, string, string];
  optionFeedback: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  type: "concept" | "calculation" | "non-calculator" | "diagram";
}

export const mathsMcqs: MathsMcq[] = [];

export const mathsMcqsByTopic = (topic: string): MathsMcq[] =>
  mathsMcqs.filter((q) => q.topic === topic);
