/**
 * IELTS Band Score Calculation Helpers
 */

/**
 * Calculates the IELTS Academic Reading band score.
 * Scales the raw score to a 40-question basis:
 *   scaled = Math.round((correct / total) * 40)
 * Then maps using the standard Academic Reading conversion table:
 *   39-40: 9
 *   37-38: 8.5
 *   35-36: 8
 *   33-34: 7.5
 *   30-32: 7
 *   27-29: 6.5
 *   23-26: 6
 *   19-22: 5.5
 *   15-18: 5
 *   13-14: 4.5
 *   10-12: 4
 *   8-9:   3.5
 *   6-7:   3
 *   4-5:   2.5
 *   2-3:   2
 *   1:     1
 *   0:     0
 */
export function calculateReadingBand(correct: number, total: number): number {
  if (total <= 0 || correct <= 0) return 0;
  const scaled = Math.round((correct / total) * 40);

  if (scaled >= 39) return 9;
  if (scaled >= 37) return 8.5;
  if (scaled >= 35) return 8;
  if (scaled >= 33) return 7.5;
  if (scaled >= 30) return 7;
  if (scaled >= 27) return 6.5;
  if (scaled >= 23) return 6;
  if (scaled >= 19) return 5.5;
  if (scaled >= 15) return 5;
  if (scaled >= 13) return 4.5;
  if (scaled >= 10) return 4;
  if (scaled >= 8) return 3.5;
  if (scaled >= 6) return 3;
  if (scaled >= 4) return 2.5;
  if (scaled >= 2) return 2;
  if (scaled >= 1) return 1;
  return 0;
}
