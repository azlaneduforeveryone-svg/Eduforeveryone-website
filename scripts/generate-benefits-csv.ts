import fs from "fs";
import path from "path";
import { DUAS_DATABASE } from "../lib/duasData";

function escapeCsv(val: string): string {
  if (val.includes(",") || val.includes('"') || val.includes("\n") || val.includes("\r")) {
    return `"${val.replace(/"/g, '""')}"`;
  }
  return val;
}

function generateBenefitsReviewCsv() {
  const reportsDir = path.resolve(__dirname, "../reports");
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  const headers = [
    "dua id",
    "title",
    "source",
    "grading",
    "benefit English",
    "benefit Urdu",
  ];

  const lines = [headers.join(",")];

  for (const dua of DUAS_DATABASE) {
    const row = [
      escapeCsv(dua.id),
      escapeCsv(dua.title.en),
      escapeCsv(dua.source),
      escapeCsv(dua.grading || ""),
      escapeCsv(dua.benefit?.en || ""),
      escapeCsv(dua.benefit?.ur || ""),
    ];
    lines.push(row.join(","));
  }

  const csvContent = lines.join("\n") + "\n";
  const outputPath = path.join(reportsDir, "duas-benefits-review.csv");
  fs.writeFileSync(outputPath, csvContent, "utf8");
  console.log(`Generated ${outputPath} with ${DUAS_DATABASE.length} rows.`);
}

generateBenefitsReviewCsv();
