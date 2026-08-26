import { QUANT_BANK } from "../lib/gmat/quant";
import { VERBAL_BANK } from "../lib/gmat/verbal";
import { DATA_INSIGHTS_BANK } from "../lib/gmat/data-insights";
import type { GmatQuestion } from "../lib/gmat/types";
import * as fs from "fs";
import * as path from "path";

const allItems = [...QUANT_BANK.items, ...VERBAL_BANK.items, ...DATA_INSIGHTS_BANK.items];

// Target ranges:
// gmat-ps-0001 to gmat-ps-0018
// gmat-cr-0001 to gmat-cr-0011
// gmat-rc-0001, gmat-rc-0002
// gmat-ds-0001 to gmat-ds-0008

const targetIds: string[] = [];
for (let i = 1; i <= 18; i++) targetIds.push(`gmat-ps-${String(i).padStart(4, "0")}`);
for (let i = 1; i <= 11; i++) targetIds.push(`gmat-cr-${String(i).padStart(4, "0")}`);
targetIds.push("gmat-rc-0001", "gmat-rc-0002");
for (let i = 1; i <= 8; i++) targetIds.push(`gmat-ds-${String(i).padStart(4, "0")}`);

let output = "";
function out(line: string = "") {
  output += line + "\n";
}

out("================================================================================");
out("                 EARLY AUTHORING COHORT ITEMS FOR MANUAL REVIEW                ");
out("================================================================================\n");
out(`Total Target Items: ${targetIds.length}\n`);

let foundCount = 0;

targetIds.forEach((targetId, index) => {
  const item = allItems.find((q) => q.id === targetId);
  if (!item) {
    out(`[ITEM ${index + 1} / ${targetIds.length}] ID: ${targetId} -> NOT FOUND IN BANK`);
    return;
  }
  foundCount++;
  out("--------------------------------------------------------------------------------");
  out(`ITEM ${index + 1} / ${targetIds.length}: [${item.id}]`);
  out(`Section: ${item.section} | Type: ${item.type} | Difficulty: ${item.difficulty}`);
  out(`Topic: ${item.topic}`);
  out("--------------------------------------------------------------------------------");

  if (item.type === "problem-solving" || item.type === "critical-reasoning") {
    if ("passage" in item && item.passage) {
      out(`PASSAGE:\n${item.passage}\n`);
    }
    out(`STEM:\n${item.stem}\n`);
    out("OPTIONS:");
    item.options.forEach((opt, idx) => {
      const isCorrect = idx === item.correct;
      out(`  [${idx}] ${isCorrect ? "✓ (CORRECT) " : "  "}${opt}`);
    });
    out(`\nSTORED CORRECT INDEX: [${item.correct}] "${item.options[item.correct]}"\n`);
    out("OPTION EXPLANATIONS:");
    item.optionExplanations?.forEach((oe, idx) => {
      out(`  [${idx}] ${oe}`);
    });
    out(`\nEXPLANATION:\n${item.explanation}\n`);
  } else if (item.type === "data-sufficiency") {
    out(`STEM:\n${item.stem}\n`);
    out("STATEMENTS:");
    out(`  (1) ${item.statements[0]}`);
    out(`  (2) ${item.statements[1]}\n`);
    const dsLetters = ["A", "B", "C", "D", "E"];
    out(`STORED CORRECT INDEX: [${item.correct}] (${dsLetters[item.correct]})\n`);
    out("OPTION EXPLANATIONS:");
    item.optionExplanations?.forEach((oe, idx) => {
      out(`  [${idx}] (${dsLetters[idx]}): ${oe}`);
    });
    out(`\nEXPLANATION:\n${item.explanation}\n`);
  } else if (item.type === "reading-comprehension") {
    out(`PASSAGE:\n${item.passage}\n`);
    out(`SUB-QUESTIONS (${item.questions.length} questions):`);
    item.questions.forEach((sub, subIdx) => {
      out(`\n  Sub-question ${subIdx + 1} [${sub.id}]:`);
      out(`  Stem: ${sub.stem}`);
      out("  Options:");
      sub.options.forEach((opt, idx) => {
        const isCorrect = idx === sub.correct;
        out(`    [${idx}] ${isCorrect ? "✓ (CORRECT) " : "  "}${opt}`);
      });
      out(`  Stored Correct: [${sub.correct}] "${sub.options[sub.correct]}"`);
      out("  Option Explanations:");
      sub.optionExplanations?.forEach((oe, idx) => {
        out(`    [${idx}] ${oe}`);
      });
      out(`  Explanation: ${sub.explanation}`);
    });
    out("");
  }
});

const reportPath = path.join(__dirname, "..", "reports", "early-cohort-items.txt");
fs.writeFileSync(reportPath, output, "utf8");
console.log(`Successfully exported ${foundCount} items to ${reportPath} (${Buffer.byteLength(output, "utf8")} bytes)`);
