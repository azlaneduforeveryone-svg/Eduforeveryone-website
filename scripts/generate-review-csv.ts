import fs from "fs";
import path from "path";
import { WORD_UPGRADE_ITEMS } from "../lib/games/word-upgrade";
import { PHRASE_UPGRADE_ITEMS } from "../lib/games/phrase-upgrade";

interface ReviewRow {
  id: string;
  game: string;
  categoryOrTopic: string;
  sentence: string;
  allOptions: string;
  correctAnswer: string;
  explanation: string;
  doubtful: "yes" | "no";
  notes?: string;
}

// Items flagged during self-audit where an argument could be made or nuance exists
const DOUBTFUL_IDS = new Set<string>([
  "wu-eco-92", // 'deficit crisis' is sometimes heard in informal financial journalism, though 'liquidity crisis' is the technical macroeconomic collocation
  "pu-spk-17", // 'prepone' is recognized in Indian English dictionaries, though international IELTS examiners treat it as non-standard compared to 'move forward'
]);

function escapeCsv(val: string): string {
  if (val.includes(",") || val.includes('"') || val.includes("\n") || val.includes("\r")) {
    return `"${val.replace(/"/g, '""')}"`;
  }
  return val;
}

function generateReviewCsv() {
  const reportsDir = path.resolve(__dirname, "../reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const rows: ReviewRow[] = [];

  // 1. Word Upgrade Items
  for (const item of WORD_UPGRADE_ITEMS) {
    const isDoubtful = DOUBTFUL_IDS.has(item.id);
    rows.push({
      id: item.id,
      game: "Word Upgrade",
      categoryOrTopic: item.domain,
      sentence: item.question,
      allOptions: item.options.join(" | "),
      correctAnswer: item.options[item.correct],
      explanation: item.explanation,
      doubtful: isDoubtful ? "yes" : "no",
    });
  }

  // 2. Phrase Upgrade Items
  for (const item of PHRASE_UPGRADE_ITEMS) {
    const isDoubtful = DOUBTFUL_IDS.has(item.id);
    rows.push({
      id: item.id,
      game: "Phrase Upgrade",
      categoryOrTopic: item.category,
      sentence: item.question,
      allOptions: item.options.join(" | "),
      correctAnswer: item.options[item.correct],
      explanation: item.explanation,
      doubtful: isDoubtful ? "yes" : "no",
    });
  }

  const header = [
    "id",
    "game",
    "category or topic",
    "sentence",
    "all 4 options",
    "correct answer",
    "explanation",
    "doubtful",
  ];

  const csvLines = [header.join(",")];

  for (const r of rows) {
    csvLines.push(
      [
        escapeCsv(r.id),
        escapeCsv(r.game),
        escapeCsv(r.categoryOrTopic),
        escapeCsv(r.sentence),
        escapeCsv(r.allOptions),
        escapeCsv(r.correctAnswer),
        escapeCsv(r.explanation),
        escapeCsv(r.doubtful),
      ].join(",")
    );
  }

  const outPath = path.join(reportsDir, "ielts-games-review.csv");
  fs.writeFileSync(outPath, csvLines.join("\n"), "utf8");

  console.log(`Generated review CSV with ${rows.length} rows at ${outPath}`);
  console.log(`Doubtful items flagged: ${DOUBTFUL_IDS.size}`);
}

generateReviewCsv();
