import fs from "fs";
import path from "path";
import { DUAS_DATABASE } from "../lib/duasData";

function escapeCsv(val: string): string {
  if (val.includes(",") || val.includes('"') || val.includes("\n") || val.includes("\r")) {
    return `"${val.replace(/"/g, '""')}"`;
  }
  return val;
}

function generateDuasReviewCsv() {
  const reportsDir = path.resolve(__dirname, "../reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const headers = [
    "dua id",
    "title",
    "Arabic text",
    "Urdu translation",
    "English translation",
    "source",
    "grading",
  ];

  const lines = [headers.join(",")];

  for (const dua of DUAS_DATABASE) {
    const row = [
      escapeCsv(dua.id),
      escapeCsv(dua.title.en),
      escapeCsv(dua.arabic),
      escapeCsv(dua.translations.ur),
      escapeCsv(dua.translations.en),
      escapeCsv(dua.source),
      escapeCsv(dua.grading || ""),
    ];
    lines.push(row.join(","));
  }

  const csvContent = lines.join("\n") + "\n";
  const outputPath = path.join(reportsDir, "duas-translations-review.csv");
  fs.writeFileSync(outputPath, csvContent, "utf8");
  console.log(`Generated ${outputPath} with ${DUAS_DATABASE.length} rows.`);
}

generateDuasReviewCsv();
