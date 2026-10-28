import { calculateReadingBand } from "../lib/ielts/bands";

const cases = [
  { correct: 0, total: 10 },
  { correct: 1, total: 10 },
  { correct: 5, total: 10 },
  { correct: 8, total: 10 },
  { correct: 10, total: 10 },
  { correct: 20, total: 40 },
  { correct: 30, total: 40 },
  { correct: 40, total: 40 },
];

console.log("IELTS Academic Reading Band Verification:");
console.log("========================================");
for (const { correct, total } of cases) {
  const scaled = Math.round((correct / total) * 40);
  const band = calculateReadingBand(correct, total);
  console.log(`${correct}/${total} -> scaled: ${scaled}/40 -> Band ${band}`);
}
