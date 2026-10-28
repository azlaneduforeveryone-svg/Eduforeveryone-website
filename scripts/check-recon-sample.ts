import fs from "fs";
import path from "path";
import { parseUpload } from "../lib/bank-reconciliation/parseFile";
import { guessMapping, applyMapping } from "../lib/bank-reconciliation/mapping";
import { reconcile } from "../lib/bank-reconciliation/engine";
import { buildReconciliationWorkbook } from "../lib/bank-reconciliation/statement";
import { getReconType, type ReconTypeId } from "../lib/bank-reconciliation/reconTypes";
import type { ColumnMapping } from "../lib/bank-reconciliation/types";

interface RunConfig {
  name: string;
  reconType?: ReconTypeId;
  bankCsvPath: string;
  bookCsvPath: string;
  bankOpeningBalance: number;
  bankClosingBalance: number;
  bookOpeningBalance: number;
  bookClosingBalance: number;
  periodLabel: string;
  actualReportPath: string;
  expectedValues: {
    adjustedBankBalance: number;
    adjustedBookBalance: number;
    difference: number;
    errorsInCashBook?: number;
    chq107Status?: string;
  };
}

const toArrayBuffer = (buf: Buffer): ArrayBuffer => {
  const ab = new ArrayBuffer(buf.length);
  const view = new Uint8Array(ab);
  view.set(buf);
  return ab;
};

const formatMoney = (n: number) => {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

async function runCheck(cfg: RunConfig) {
  console.log(`\n========================================`);
  console.log(`Running Check: ${cfg.name}`);
  console.log(`========================================`);

  const bankBuf = fs.readFileSync(cfg.bankCsvPath);
  const bookBuf = fs.readFileSync(cfg.bookCsvPath);

  const [bankParsed, bookParsed] = await Promise.all([
    parseUpload(toArrayBuffer(bankBuf), path.basename(cfg.bankCsvPath)),
    parseUpload(toArrayBuffer(bookBuf), path.basename(cfg.bookCsvPath)),
  ]);

  const bankMapping = guessMapping(bankParsed.headers) as ColumnMapping;
  const bookMapping = guessMapping(bookParsed.headers) as ColumnMapping;

  const bankResult = applyMapping(bankParsed.rows, bankMapping);
  const bookResult = applyMapping(bookParsed.rows, bookMapping);

  const reconType = getReconType(cfg.reconType ?? "bank")!;
  const result = reconcile(bookResult.txns, bankResult.txns, reconType.matching);

  const wb = await buildReconciliationWorkbook(result.bookTxns, result.bankTxns, {
    reconType: reconType.id,
    bankOpeningBalance: cfg.bankOpeningBalance,
    bankClosingBalance: cfg.bankClosingBalance,
    bookOpeningBalance: cfg.bookOpeningBalance,
    bookClosingBalance: cfg.bookClosingBalance,
    periodLabel: cfg.periodLabel,
    excludedBankOpeningBalanceRows: bankResult.excludedOpeningBalanceRows,
    excludedBookOpeningBalanceRows: bookResult.excludedOpeningBalanceRows,
    unparsedBankRows: bankResult.unparsedRows,
    unparsedBookRows: bookResult.unparsedRows,
  });

  // Calculate actual computed values for formula cells
  const bankNetMovement = result.bankTxns.reduce((s, t) => s + t.amount, 0);
  const bankCheck = (cfg.bankOpeningBalance + bankNetMovement) - cfg.bankClosingBalance;

  const bookNetMovement = result.bookTxns.reduce((s, t) => s + t.amount, 0);
  const bookCheck = (cfg.bookOpeningBalance + bookNetMovement) - cfg.bookClosingBalance;

  const isUnmatchedForStmt = (status: string) =>
    reconType.id === "bank"
      ? status === "Unmatched"
      : status === "Unmatched" || status === "Amount mismatch";

  const oursOnlyPositive = result.bookTxns
    .filter((t) => isUnmatchedForStmt(t.status) && t.amount > 0)
    .reduce((s, t) => s + t.amount, 0);

  const oursOnlyNegative = result.bookTxns
    .filter((t) => isUnmatchedForStmt(t.status) && t.amount < 0)
    .reduce((s, t) => s + t.amount, 0);

  const adjustedBankBalance = cfg.bankClosingBalance + oursOnlyPositive + oursOnlyNegative;

  const theirsOnlyPositive = result.bankTxns
    .filter((t) => isUnmatchedForStmt(t.status) && t.amount > 0)
    .reduce((s, t) => s + t.amount, 0);

  const theirsOnlyNegative = result.bankTxns
    .filter((t) => isUnmatchedForStmt(t.status) && t.amount < 0)
    .reduce((s, t) => s + t.amount, 0);

  const errorsInCashBook =
    reconType.id === "bank"
      ? result.bookTxns
          .filter((t) => t.status === "Amount mismatch")
          .reduce((s, t) => s + (t.amountDiff ?? 0), 0)
      : 0;

  const adjustedBookBalance =
    cfg.bookClosingBalance + theirsOnlyPositive + theirsOnlyNegative + errorsInCashBook;
  const difference = adjustedBankBalance - adjustedBookBalance;

  const ws = wb.getWorksheet("Reconciliation Statement")!;
  const outputLines: string[] = [];

  ws.eachRow((row) => {
    const cellA = row.getCell(1);
    const cellB = row.getCell(2);
    const rawA = cellA.value;
    const rawB = cellB.isMerged && cellB.master === cellA ? null : cellB.value;

    let textA = "";
    if (rawA !== null && rawA !== undefined) {
      if (typeof rawA === "object" && "text" in (rawA as unknown as Record<string, unknown>)) {
        textA = String((rawA as unknown as { text: string }).text);
      } else {
        textA = String(rawA);
      }
    }

    if (!textA) return;

    // Check if cell B has a formula or direct value and resolve its computed value
    let computedB: string | null = null;
    if (rawB !== null && rawB !== undefined) {
      if (typeof rawB === "object" && "formula" in (rawB as unknown as Record<string, unknown>)) {
        const formula = String((rawB as unknown as { formula: string }).formula);
        if (formula.includes(`SUM('${reconType.theirSheetName}'!D:D)`)) {
          computedB = formatMoney(bankNetMovement);
        } else if (formula.includes("(B5+B6)-B7")) {
          computedB = formatMoney(bankCheck);
        } else if (formula.includes(`SUMIFS('${reconType.ourSheetName}'!D:D,'${reconType.ourSheetName}'!E:E,"Unmatched",'${reconType.ourSheetName}'!D:D,">0")`)) {
          computedB = formatMoney(oursOnlyPositive);
        } else if (formula.includes(`SUMIFS('${reconType.ourSheetName}'!D:D,'${reconType.ourSheetName}'!E:E,"Unmatched",'${reconType.ourSheetName}'!D:D,"<0")`)) {
          computedB = formatMoney(oursOnlyNegative);
        } else if (formula.includes("B7+B10+B11")) {
          computedB = formatMoney(adjustedBankBalance);
        } else if (formula.includes(`SUM('${reconType.ourSheetName}'!D:D)`)) {
          computedB = formatMoney(bookNetMovement);
        } else if (formula.includes("(B15+B16)-B17")) {
          computedB = formatMoney(bookCheck);
        } else if (formula.includes(`SUMIFS('${reconType.theirSheetName}'!D:D,'${reconType.theirSheetName}'!E:E,"Unmatched",'${reconType.theirSheetName}'!D:D,">0")`)) {
          computedB = formatMoney(theirsOnlyPositive);
        } else if (formula.includes(`SUMIFS('${reconType.theirSheetName}'!D:D,'${reconType.theirSheetName}'!E:E,"Unmatched",'${reconType.theirSheetName}'!D:D,"<0")`)) {
          computedB = formatMoney(theirsOnlyNegative);
        } else if (formula.includes(`SUMIF('${reconType.compareSheetName}'!F:F,"MM-*",'${reconType.compareSheetName}'!E:E)`)) {
          computedB = formatMoney(errorsInCashBook);
        } else if (formula.includes("B17+B20+B21+B22") || formula.includes("B17+B20+B21")) {
          computedB = formatMoney(adjustedBookBalance);
        } else if (formula.includes("B12-B23") || formula.includes("B12-B22")) {
          computedB = formatMoney(difference);
        } else {
          computedB = formula;
        }
      } else if (typeof rawB === "number") {
        computedB = formatMoney(rawB);
      } else if (typeof rawB === "object" && "text" in (rawB as unknown as Record<string, unknown>)) {
        computedB = String((rawB as unknown as { text: string }).text);
      } else {
        computedB = String(rawB);
      }
    }

    if (computedB !== null) {
      outputLines.push(`${textA}: ${computedB}`);
    } else {
      outputLines.push(textA);
    }
  });

  const outputText = outputLines.join("\n") + "\n";
  fs.writeFileSync(cfg.actualReportPath, outputText, "utf-8");
  console.log(`Reconciliation Statement output written to ${cfg.actualReportPath}`);
  console.log("\n" + outputText);

  // Assertions
  const errors: string[] = [];
  if (Math.abs(adjustedBankBalance - cfg.expectedValues.adjustedBankBalance) > 0.001) {
    errors.push(`Adjusted Bank Balance mismatch: expected ${cfg.expectedValues.adjustedBankBalance}, got ${adjustedBankBalance}`);
  }
  if (Math.abs(adjustedBookBalance - cfg.expectedValues.adjustedBookBalance) > 0.001) {
    errors.push(`Adjusted Book Balance mismatch: expected ${cfg.expectedValues.adjustedBookBalance}, got ${adjustedBookBalance}`);
  }
  if (Math.abs(difference - cfg.expectedValues.difference) > 0.001) {
    errors.push(`Difference mismatch: expected ${cfg.expectedValues.difference}, got ${difference}`);
  }
  if (cfg.expectedValues.errorsInCashBook !== undefined) {
    if (Math.abs(errorsInCashBook - cfg.expectedValues.errorsInCashBook) > 0.001) {
      errors.push(`Errors in cash book mismatch: expected ${cfg.expectedValues.errorsInCashBook}, got ${errorsInCashBook}`);
    }
  }

  if (cfg.expectedValues.chq107Status !== undefined) {
    const chqBook = result.bookTxns.find((t) => t.reference === "CHQ107");
    const chqBank = result.bankTxns.find((t) => t.reference === "CHQ107");
    if (!chqBook || chqBook.status !== cfg.expectedValues.chq107Status) {
      errors.push(`Cash book CHQ107 status mismatch: expected ${cfg.expectedValues.chq107Status}, got ${chqBook?.status}`);
    }
    if (!chqBank || chqBank.status !== cfg.expectedValues.chq107Status) {
      errors.push(`Bank statement CHQ107 status mismatch: expected ${cfg.expectedValues.chq107Status}, got ${chqBank?.status}`);
    }

    // Confirm in the detail sheets that CHQ107 has status "Amount mismatch" and the remark with 90.00
    for (const sheetName of [reconType.theirSheetName, reconType.ourSheetName]) {
      const detailSheet = wb.getWorksheet(sheetName);
      if (!detailSheet) {
        errors.push(`Missing detail sheet: ${sheetName}`);
        continue;
      }
      let foundChq107 = false;
      detailSheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return;
        const ref = String(row.getCell(3).value ?? "");
        if (ref === "CHQ107") {
          foundChq107 = true;
          const statusCell = String(row.getCell(5).value ?? "");
          const remarkCell = String(row.getCell(8).value ?? "");
          if (statusCell !== cfg.expectedValues.chq107Status) {
            errors.push(`${sheetName} detail sheet CHQ107 status mismatch: expected "${cfg.expectedValues.chq107Status}", got "${statusCell}"`);
          }
          if (!remarkCell.includes("90.00")) {
            errors.push(`${sheetName} detail sheet CHQ107 remark missing 90.00: got "${remarkCell}"`);
          }
        }
      });
      if (!foundChq107) {
        errors.push(`CHQ107 not found in detail sheet: ${sheetName}`);
      }
    }
  }

  if (errors.length > 0) {
    console.error(`FAILED: ${cfg.name}`);
    for (const err of errors) {
      console.error("  - " + err);
    }
    throw new Error(`Validation failed for ${cfg.name}:\n` + errors.join("\n"));
  }

  console.log(`PASSED: ${cfg.name}`);
}

async function main() {
  // Run 1: Clean Sample
  await runCheck({
    name: "Clean Sample",
    reconType: "bank",
    bankCsvPath: path.join(process.cwd(), "public/samples/sample-bank-statement.csv"),
    bookCsvPath: path.join(process.cwd(), "public/samples/sample-cash-book.csv"),
    bankOpeningBalance: 10000,
    bankClosingBalance: 14105,
    bookOpeningBalance: 10000,
    bookClosingBalance: 14350,
    periodLabel: "June 2026",
    actualReportPath: path.join(process.cwd(), "reports/recon-sample-actual.txt"),
    expectedValues: {
      adjustedBankBalance: 14305,
      adjustedBookBalance: 14305,
      difference: 0,
      errorsInCashBook: 0,
    },
  });

  // Run 2: Mismatch Fixture (Bank)
  await runCheck({
    name: "Mismatch Fixture",
    reconType: "bank",
    bankCsvPath: path.join(process.cwd(), "scripts/fixtures/sample-bank-statement.csv"),
    bookCsvPath: path.join(process.cwd(), "scripts/fixtures/sample-cash-book.csv"),
    bankOpeningBalance: 10000,
    bankClosingBalance: 14105,
    bookOpeningBalance: 10000,
    bookClosingBalance: 14260,
    periodLabel: "June 2026",
    actualReportPath: path.join(process.cwd(), "reports/recon-mismatch-actual.txt"),
    expectedValues: {
      adjustedBankBalance: 14305,
      adjustedBookBalance: 14305,
      difference: 0,
      errorsInCashBook: 90,
      chq107Status: "Amount mismatch",
    },
  });

  // Run 3: Mismatch Fixture (Supplier)
  await runCheck({
    name: "Mismatch Fixture (Supplier)",
    reconType: "supplier",
    bankCsvPath: path.join(process.cwd(), "scripts/fixtures/sample-bank-statement.csv"),
    bookCsvPath: path.join(process.cwd(), "scripts/fixtures/sample-cash-book.csv"),
    bankOpeningBalance: 10000,
    bankClosingBalance: 14105,
    bookOpeningBalance: 10000,
    bookClosingBalance: 14260,
    periodLabel: "June 2026",
    actualReportPath: path.join(process.cwd(), "reports/recon-mismatch-supplier-actual.txt"),
    expectedValues: {
      adjustedBankBalance: 13765,
      adjustedBookBalance: 13765,
      difference: 0,
      chq107Status: "Amount mismatch",
    },
  });

  console.log("\nAll reconciliation checks passed successfully!");
}

main().catch((err) => {
  console.error("Error running recon checks:", err);
  process.exit(1);
});
