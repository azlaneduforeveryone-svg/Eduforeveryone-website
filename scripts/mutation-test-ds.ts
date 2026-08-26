import { DATA_INSIGHTS_BANK } from "../lib/gmat/data";
import { classifyDsExplanation } from "./audit-gmat";
import type { GmatQuestion } from "../lib/gmat/types";
import * as fs from "fs";
import * as path from "path";

const dsItems = DATA_INSIGHTS_BANK.items.filter(
  (q): q is Extract<GmatQuestion, { type: "data-sufficiency" }> => q.type === "data-sufficiency"
);

let totalMutations = 0;
let flaggedMismatches = 0;
let undetectedCount = 0;

interface UndetectedMutation {
  id: string;
  trueStoredCorrect: number;
  mutatedCorrect: number;
  explanation: string;
  detectedIndex: number;
  detectedLetter: string;
  reason: string;
}

const undetectedMutations: UndetectedMutation[] = [];
const itemsWithUndetected = new Set<string>();

dsItems.forEach((q) => {
  const allIndices = [0, 1, 2, 3, 4];
  const mutatedIndices = allIndices.filter((idx) => idx !== q.correct);

  mutatedIndices.forEach((mutatedIdx) => {
    totalMutations++;
    const mutatedOptionExpl = q.optionExplanations ? [q.optionExplanations[mutatedIdx]] : undefined;
    const classification = classifyDsExplanation(q.explanation, mutatedOptionExpl);

    // A mutation is detected as a mismatch if the classifier successfully classifies the explanation
    // and determines that the explanation's conclusion does NOT match the mutated index.
    if (classification.detectedIndex !== -1 && classification.detectedIndex !== mutatedIdx) {
      flaggedMismatches++;
    } else {
      undetectedCount++;
      itemsWithUndetected.add(q.id);
      undetectedMutations.push({
        id: q.id,
        trueStoredCorrect: q.correct,
        mutatedCorrect: mutatedIdx,
        explanation: q.explanation,
        detectedIndex: classification.detectedIndex,
        detectedLetter: classification.detectedLetter,
        reason:
          classification.detectedIndex === -1
            ? "Explanation unclassified by phrase map"
            : `Classifier concluded index ${classification.detectedIndex} matching mutated index ${mutatedIdx}`,
      });
    }
  });
});

const detectionRate = ((flaggedMismatches / totalMutations) * 100).toFixed(2);

let report = "";
function out(line: string = "") {
  report += line + "\n";
  console.log(line);
}

out("================================================================================");
out("            GMAT DATA SUFFICIENCY CLASSIFIER MUTATION AUDIT                     ");
out("================================================================================\n");

out(`Total DS Items Tested: ${dsItems.length}`);
out(`Total Mutations Tested: ${totalMutations} (71 items × 4 non-stored indices)`);
out(`Mismatches Flagged (Detected): ${flaggedMismatches}`);
out(`Undetected Mutations: ${undetectedCount}`);
out(`Detection Rate: ${detectionRate}%\n`);

out(`Items with At Least One Undetected Mutation (${itemsWithUndetected.size} items):`);
Array.from(itemsWithUndetected).forEach((id) => out(`  - ${id}`));
out("");

out("================================================================================");
out("DETAILED UNDETECTED MUTATIONS LIST");
out("================================================================================\n");

undetectedMutations.forEach((u, i) => {
  const letters = ["A", "B", "C", "D", "E"];
  out(`[Undetected ${i + 1}] ID: ${u.id}`);
  out(`  True Stored Index: ${u.trueStoredCorrect} (${letters[u.trueStoredCorrect]})`);
  out(`  Mutated Index Tested: ${u.mutatedCorrect} (${letters[u.mutatedCorrect]})`);
  out(`  Classifier Result: ${u.detectedLetter} (Index: ${u.detectedIndex})`);
  out(`  Reason: ${u.reason}`);
  out(`  Explanation: "${u.explanation}"\n`);
});

const reportPath = path.join(__dirname, "..", "reports", "gmat-ds-mutation.txt");
fs.writeFileSync(reportPath, report, "utf8");
console.log(`\nMutation report written to ${reportPath}`);
