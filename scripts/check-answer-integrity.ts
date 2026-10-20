import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { WORD_UPGRADE_ITEMS as currentItems } from "../lib/games/word-upgrade";
import type { WordUpgradeItem } from "../lib/games/types";

const tempFilePath = path.resolve(__dirname, "./.temp_b7aa8cc_word_upgrade.ts");

try {
  const b7Content = execSync("git show b7aa8cc:lib/games/word-upgrade.ts", {
    encoding: "utf-8",
    maxBuffer: 10 * 1024 * 1024,
  });

  fs.writeFileSync(tempFilePath, b7Content, "utf-8");

  // Dynamic import of the temp file
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const b7Module = require(tempFilePath);
  const b7Items: WordUpgradeItem[] = b7Module.WORD_UPGRADE_ITEMS;

  console.log(`Loaded ${b7Items.length} items from commit b7aa8cc.`);
  console.log(`Loaded ${currentItems.length} items from current lib/games/word-upgrade.ts.\n`);

  const currentMap = new Map<string, WordUpgradeItem>();
  for (const item of currentItems) {
    currentMap.set(item.id, item);
  }

  let matchCount = 0;
  let mismatchCount = 0;
  let missingCount = 0;

  const results: Array<{
    id: string;
    b7Word: string;
    b7Idx: number;
    currWord: string;
    currIdx: number;
    match: boolean;
    note?: string;
  }> = [];

  for (const b7Item of b7Items) {
    const b7CorrectWord = b7Item.options[b7Item.correct];
    const currItem = currentMap.get(b7Item.id);

    if (!currItem) {
      missingCount++;
      results.push({
        id: b7Item.id,
        b7Word: b7CorrectWord,
        b7Idx: b7Item.correct,
        currWord: "MISSING",
        currIdx: -1,
        match: false,
        note: "Item ID not found in current file",
      });
      continue;
    }

    const currCorrectWord = currItem.options[currItem.correct];
    const isMatch = b7CorrectWord === currCorrectWord;

    if (isMatch) {
      matchCount++;
    } else {
      mismatchCount++;
    }

    results.push({
      id: b7Item.id,
      b7Word: b7CorrectWord,
      b7Idx: b7Item.correct,
      currWord: currCorrectWord,
      currIdx: currItem.correct,
      match: isMatch,
      note: isMatch ? "OK" : `MISMATCH! Expected '${b7CorrectWord}' but found '${currCorrectWord}'`,
    });
  }

  console.log("-------------------------------------------------------------------------------------------------");
  console.log(
    "ID".padEnd(14) +
      "b7aa8cc Answer [idx]".padEnd(30) +
      "Current Answer [idx]".padEnd(30) +
      "Status"
  );
  console.log("-------------------------------------------------------------------------------------------------");

  for (const r of results) {
    const b7Str = `${r.b7Word} [${r.b7Idx}]`;
    const currStr = `${r.currWord} [${r.currIdx}]`;
    const statusStr = r.match ? "MATCH" : `MISMATCH: ${r.note}`;
    console.log(r.id.padEnd(14) + b7Str.padEnd(30) + currStr.padEnd(30) + statusStr);
  }

  console.log("-------------------------------------------------------------------------------------------------");
  console.log(`Summary: Total original items checked = ${b7Items.length}`);
  console.log(`  Matches:    ${matchCount}`);
  console.log(`  Mismatches: ${mismatchCount}`);
  console.log(`  Missing:    ${missingCount}`);

  if (mismatchCount > 0 || missingCount > 0) {
    console.error("\n❌ INTEGRITY CHECK FAILED: There are mismatches or missing items!");
    process.exit(1);
  } else {
    console.log("\n✅ INTEGRITY CHECK PASSED: All 40 items have exactly the same options[correct] word!");
  }
} finally {
  if (fs.existsSync(tempFilePath)) {
    fs.unlinkSync(tempFilePath);
  }
}
