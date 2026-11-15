// Original independent revision material written for EduForEveryone.
// Aligned with Cambridge O Level Biology 5090, exams 2026 to 2028.

import type { TopicRevision } from "./oLevelAccountingRevisionTypes";

export const O_LEVEL_BIOLOGY_REVISION: Record<string, TopicRevision> = {};

export function getBiologyRevision(topic: string): TopicRevision | null {
  return O_LEVEL_BIOLOGY_REVISION[topic] ?? null;
}
