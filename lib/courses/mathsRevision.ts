// Cambridge Mathematics flashcards and mind maps (O Level 4024 and IGCSE 0580).
// SERVER-ONLY. Keyed by IGCSE 0580 topic number.
import type { TopicRevision } from "./oLevelAccountingRevisionTypes";

export const MATHS_REVISION: Record<string, TopicRevision> = {};

export function getMathsRevision(topic: string): TopicRevision | null {
  return MATHS_REVISION[topic] ?? null;
}
