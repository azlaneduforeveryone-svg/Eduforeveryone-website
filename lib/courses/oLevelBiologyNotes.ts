// SERVER-ONLY: do not import from client components.
// Original independent study material written for EduForEveryone.
// Aligned with Cambridge O Level Biology 5090, exams 2026 to 2028.

export const O_LEVEL_BIOLOGY_NOTES: Record<string, string> = {};

export function getBiologyNotes(topic: string): string | undefined {
  return O_LEVEL_BIOLOGY_NOTES[topic];
}
