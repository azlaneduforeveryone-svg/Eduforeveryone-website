#!/usr/bin/env node
/**
 * validate-gmat.ts
 * ---------------------------------------------------------------------------
 * Structural validator for the GMAT question bank (lib/gmat/data.ts).
 *
 * USAGE:
 *   npx tsx scripts/validate-gmat.ts
 *   (or: npm i -D tsx, then add to package.json scripts)
 *
 * Place this file at: scripts/validate-gmat.ts (adjust the import below if your
 * path differs). It imports the actual exported banks so it always validates
 * the live data, not a copy.
 *
 * WHAT IT CHECKS (structural only — it CANNOT verify whether an answer's math
 * is correct, nor whether two options are both true; only a human can do that):
 *   - correct index in range for the options/rows it points to
 *   - duplicate question IDs (and duplicate sub-question IDs)
 *   - MCQ options length === 5
 *   - optionExplanations length matches options (when present)
 *   - DS correct in 0..4; statements length === 2
 *   - two-part correctA/correctB in range for rows
 *   - graphics blanks: each blank's correct in range for its options
 *   - table/graphics/msr: sub-structure present and indices valid
 *   - item.section matches the bank it lives in
 *   - required string fields non-empty (id, explanation, stem/intro/passage)
 *
 * EXIT CODE: 0 if no errors, 1 if any error found (so CI can gate on it).
 * ---------------------------------------------------------------------------
 */

// Adjust this relative path to wherever the script ends up vs. lib/
import {
  QUANT_BANK,
  VERBAL_BANK,
  DATA_INSIGHTS_BANK,
} from "../lib/gmat/data";
import { DS_OPTIONS } from "../lib/gmat/types";
import type { GmatQuestion, GmatSectionBank } from "../lib/gmat/types";

type Issue = { id: string; level: "ERROR" | "WARN"; msg: string };

const issues: Issue[] = [];
const seenIds = new Set<string>();
const seenSubIds = new Set<string>();

function err(id: string, msg: string) {
  issues.push({ id, level: "ERROR", msg });
}
function warn(id: string, msg: string) {
  issues.push({ id, level: "WARN", msg });
}

function nonEmpty(s: unknown): boolean {
  return typeof s === "string" && s.trim().length > 0;
}

function checkId(id: string, where: string) {
  if (!nonEmpty(id)) {
    err(where, "missing or empty id");
    return;
  }
  if (seenIds.has(id)) err(id, "duplicate question id");
  seenIds.add(id);
}

function checkSubId(id: string, parent: string) {
  if (!nonEmpty(id)) {
    err(parent, "sub-question has missing or empty id");
    return;
  }
  if (seenSubIds.has(id)) err(parent, `duplicate sub-question id: ${id}`);
  seenSubIds.add(id);
}

function inRange(idx: unknown, len: number): boolean {
  return typeof idx === "number" && Number.isInteger(idx) && idx >= 0 && idx < len;
}

function validateItem(q: GmatQuestion, expectedSection: string) {
  checkId(q.id, q.id ?? "<no-id>");

  // section consistency
  if (q.section !== expectedSection) {
    err(q.id, `section is "${q.section}" but lives in the ${expectedSection} bank`);
  }

  // every item must carry an explanation
  if (!nonEmpty((q as { explanation?: string }).explanation)) {
    err(q.id, "missing explanation");
  }

  switch (q.type) {
    case "problem-solving":
    case "critical-reasoning": {
      if (!nonEmpty(q.stem)) err(q.id, "missing stem");
      if (!Array.isArray(q.options) || q.options.length !== 5) {
        err(q.id, `options must have length 5 (found ${q.options?.length})`);
      }
      if (!inRange(q.correct, q.options?.length ?? 0)) {
        err(q.id, `correct index ${q.correct} out of range for ${q.options?.length} options`);
      }
      if (q.optionExplanations) {
        if (q.optionExplanations.length !== q.options.length) {
          err(q.id, `optionExplanations length ${q.optionExplanations.length} != options length ${q.options.length}`);
        }
      } else {
        warn(q.id, "no optionExplanations (results screen will be less instructive)");
      }
      break;
    }

    case "data-sufficiency": {
      if (!nonEmpty(q.stem)) err(q.id, "missing stem");
      if (!Array.isArray(q.statements) || q.statements.length !== 2) {
        err(q.id, `DS statements must have length 2 (found ${q.statements?.length})`);
      }
      if (!inRange(q.correct, DS_OPTIONS.length)) {
        err(q.id, `DS correct index ${q.correct} out of range (must be 0..${DS_OPTIONS.length - 1})`);
      }
      if (q.optionExplanations && q.optionExplanations.length !== DS_OPTIONS.length) {
        err(q.id, `DS optionExplanations length ${q.optionExplanations.length} != ${DS_OPTIONS.length}`);
      }
      break;
    }

    case "reading-comprehension": {
      if (!nonEmpty(q.passage)) err(q.id, "missing passage");
      if (!Array.isArray(q.questions) || q.questions.length === 0) {
        err(q.id, "RC has no sub-questions");
        break;
      }
      q.questions.forEach((sub) => {
        checkSubId(sub.id, q.id);
        if (!nonEmpty(sub.stem)) err(q.id, `RC sub ${sub.id}: missing stem`);
        if (!Array.isArray(sub.options) || sub.options.length !== 5) {
          err(q.id, `RC sub ${sub.id}: options must have length 5 (found ${sub.options?.length})`);
        }
        if (!inRange(sub.correct, sub.options?.length ?? 0)) {
          err(q.id, `RC sub ${sub.id}: correct index ${sub.correct} out of range`);
        }
        if (sub.optionExplanations && sub.optionExplanations.length !== sub.options.length) {
          err(q.id, `RC sub ${sub.id}: optionExplanations length mismatch`);
        }
        if (!nonEmpty(sub.explanation)) err(q.id, `RC sub ${sub.id}: missing explanation`);
      });
      break;
    }

    case "two-part-analysis": {
      if (!nonEmpty(q.intro)) err(q.id, "missing intro");
      if (!nonEmpty(q.prompt)) err(q.id, "missing prompt");
      if (!Array.isArray(q.rows) || q.rows.length < 2) {
        err(q.id, "two-part must have at least 2 rows");
        break;
      }
      if (!Array.isArray(q.colHeaders) || q.colHeaders.length !== 2) {
        err(q.id, "two-part must have exactly 2 colHeaders");
      }
      if (!inRange(q.correctA, q.rows.length)) {
        err(q.id, `correctA index ${q.correctA} out of range for ${q.rows.length} rows`);
      }
      if (!inRange(q.correctB, q.rows.length)) {
        err(q.id, `correctB index ${q.correctB} out of range for ${q.rows.length} rows`);
      }
      break;
    }

    case "table-analysis": {
      if (!nonEmpty(q.intro)) err(q.id, "missing intro");
      if (!q.table || !Array.isArray(q.table.columns) || !Array.isArray(q.table.rows)) {
        err(q.id, "table-analysis: malformed table (need columns and rows arrays)");
        break;
      }
      const cols = q.table.columns.length;
      q.table.rows.forEach((row, i) => {
        if (!Array.isArray(row) || row.length !== cols) {
          err(q.id, `table row ${i} has ${row?.length} cells but there are ${cols} columns`);
        }
      });
      if (!Array.isArray(q.answerLabels) || q.answerLabels.length !== 2) {
        err(q.id, "table-analysis: answerLabels must have length 2");
      }
      if (!Array.isArray(q.statements) || q.statements.length === 0) {
        err(q.id, "table-analysis: no statements");
      } else {
        q.statements.forEach((s, i) => {
          if (!nonEmpty(s.text)) err(q.id, `table statement ${i}: missing text`);
          if (typeof s.correct !== "boolean") err(q.id, `table statement ${i}: correct must be boolean`);
        });
      }
      break;
    }

    case "graphics-interpretation": {
      if (!nonEmpty(q.intro)) err(q.id, "missing intro");
      if (!q.chart || !Array.isArray(q.chart.labels) || !Array.isArray(q.chart.values)) {
        err(q.id, "graphics: malformed chart");
      } else if (q.chart.labels.length !== q.chart.values.length) {
        err(q.id, `graphics: chart labels (${q.chart.labels.length}) != values (${q.chart.values.length})`);
      }
      if (!Array.isArray(q.blanks) || q.blanks.length === 0) {
        err(q.id, "graphics: no blanks");
      } else {
        q.blanks.forEach((b, i) => {
          if (!Array.isArray(b.options) || b.options.length < 2) {
            err(q.id, `graphics blank ${i}: needs at least 2 options`);
          } else if (!inRange(b.correct, b.options.length)) {
            err(q.id, `graphics blank ${i}: correct index ${b.correct} out of range for ${b.options.length} options`);
          }
          if (!nonEmpty(b.prefix)) err(q.id, `graphics blank ${i}: missing prefix`);
        });
      }
      break;
    }

    case "multi-source-reasoning": {
      if (!Array.isArray(q.sources) || q.sources.length === 0) {
        err(q.id, "MSR: no sources");
      } else {
        q.sources.forEach((s, i) => {
          if (!nonEmpty(s.title)) err(q.id, `MSR source ${i}: missing title`);
          if (!nonEmpty(s.body)) err(q.id, `MSR source ${i}: missing body`);
        });
      }
      if (!Array.isArray(q.questions) || q.questions.length === 0) {
        err(q.id, "MSR: no sub-questions");
        break;
      }
      q.questions.forEach((sub) => {
        checkSubId(sub.id, q.id);
        if (!nonEmpty(sub.stem)) err(q.id, `MSR sub ${sub.id}: missing stem`);
        if (!nonEmpty(sub.explanation)) err(q.id, `MSR sub ${sub.id}: missing explanation`);
        if (sub.kind === "mcq") {
          if (!Array.isArray(sub.options) || sub.options.length < 2) {
            err(q.id, `MSR sub ${sub.id}: mcq needs at least 2 options`);
          } else if (!inRange(sub.correct, sub.options.length)) {
            err(q.id, `MSR sub ${sub.id}: correct index ${sub.correct} out of range for ${sub.options.length} options`);
          }
        } else if (sub.kind === "yn") {
          if (!Array.isArray(sub.answerLabels) || sub.answerLabels.length !== 2) {
            err(q.id, `MSR sub ${sub.id}: yn answerLabels must have length 2`);
          }
          if (!Array.isArray(sub.statements) || sub.statements.length === 0) {
            err(q.id, `MSR sub ${sub.id}: yn has no statements`);
          } else {
            sub.statements.forEach((s, i) => {
              if (!nonEmpty(s.text)) err(q.id, `MSR sub ${sub.id} statement ${i}: missing text`);
              if (typeof s.correct !== "boolean") err(q.id, `MSR sub ${sub.id} statement ${i}: correct must be boolean`);
            });
          }
        } else {
          err(q.id, `MSR sub ${(sub as { id?: string }).id}: unknown kind "${(sub as { kind?: string }).kind}"`);
        }
      });
      break;
    }

    default:
      err((q as { id?: string }).id ?? "<no-id>", `unknown question type "${(q as { type?: string }).type}"`);
  }
}

function validateBank(bank: GmatSectionBank) {
  if (!Array.isArray(bank.items)) {
    err(bank.id, "bank has no items array");
    return;
  }
  bank.items.forEach((q) => validateItem(q, bank.id));
}

// ---- Run ----
const banks = [QUANT_BANK, VERBAL_BANK, DATA_INSIGHTS_BANK];
banks.forEach(validateBank);

// ---- Report ----
const errors = issues.filter((i) => i.level === "ERROR");
const warns = issues.filter((i) => i.level === "WARN");

// Count gradable units (what the section total should be)
function unitCount(q: GmatQuestion): number {
  if (q.type === "reading-comprehension" || q.type === "multi-source-reasoning") {
    return q.questions.length;
  }
  return 1;
}

console.log("\n=== GMAT Question Bank Validation ===\n");
banks.forEach((b) => {
  const items = b.items.length;
  const units = b.items.reduce((s, q) => s + unitCount(q), 0);
  console.log(
    `  ${b.name.padEnd(26)} ${String(items).padStart(4)} items  ${String(units).padStart(4)} gradable units  (realCount target: ${b.realCount})`
  );
  if (units < b.realCount) {
    console.log(`      ⚠️  fewer gradable units (${units}) than realCount (${b.realCount}) — a full mock cannot be built`);
  }
});

const totalItems = banks.reduce((s, b) => s + b.items.length, 0);
const totalUnits = banks.reduce(
  (s, b) => s + b.items.reduce((ss, q) => ss + unitCount(q), 0),
  0
);
console.log(`\n  TOTAL: ${totalItems} items, ${totalUnits} gradable units\n`);

if (warns.length) {
  console.log(`--- ${warns.length} WARNING(S) ---`);
  warns.forEach((w) => console.log(`  [WARN] ${w.id}: ${w.msg}`));
  console.log("");
}

if (errors.length) {
  console.log(`--- ${errors.length} ERROR(S) ---`);
  errors.forEach((e) => console.log(`  [ERROR] ${e.id}: ${e.msg}`));
  console.log(`\n❌ Validation FAILED with ${errors.length} error(s).\n`);
  process.exit(1);
} else {
  console.log("✅ No structural errors found.\n");
  console.log("NOTE: This validator checks structure only. It cannot verify that an");
  console.log("answer's arithmetic is correct or that exactly one option is right.");
  console.log("Spot-check ~20 random questions by hand for mathematical correctness.\n");
  process.exit(0);
}