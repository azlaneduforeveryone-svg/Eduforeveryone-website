import fs from "fs";
import path from "path";
import { parseUpload } from "../lib/bank-reconciliation/parseFile";
import { guessMapping, applyMapping } from "../lib/bank-reconciliation/mapping";
import { reconcile } from "../lib/bank-reconciliation/engine";
import { buildReconciliationWorkbook } from "../lib/bank-reconciliation/statement";
import { getReconType } from "../lib/bank-reconciliation/reconTypes";
import type { ColumnMapping } from "../lib/bank-reconciliation/types";

async function main() {
  const bankPath = path.join(process.cwd(), "public/samples/sample-bank-statement.csv");
  const bookPath = path.join(process.cwd(), "public/samples/sample-cash-book.csv");

  const bankBuf = fs.readFileSync(bankPath);
  const bookBuf = fs.readFileSync(bookPath);

  const toArrayBuffer = (buf: Buffer): ArrayBuffer => {
    const ab = new ArrayBuffer(buf.length);
    const view = new Uint8Array(ab);
    view.set(buf);
    return ab;
  };

  const [bankParsed, bookParsed] = await Promise.all([
    parseUpload(toArrayBuffer(bankBuf), "sample-bank-statement.csv"),
    parseUpload(toArrayBuffer(bookBuf), "sample-cash-book.csv"),
  ]);

  const bankMapping = guessMapping(bankParsed.headers) as ColumnMapping;
  const bookMapping = guessMapping(bookParsed.headers) as ColumnMapping;

  const bankResult = applyMapping(bankParsed.rows, bankMapping);
  const bookResult = applyMapping(bookParsed.rows, bookMapping);

  const reconType = getReconType("bank")!;
  const result = reconcile(bookResult.txns, bankResult.txns, reconType.matching);

  const bankOpeningBalance = 10000;
  const bankClosingBalance = 14105;
  const bookOpeningBalance = 10000;
  const bookClosingBalance = 14350;
  const periodLabel = "June 2026";

  const wb = await buildReconciliationWorkbook(result.bookTxns, result.bankTxns, {
    reconType: reconType.id,
    bankOpeningBalance,
    bankClosingBalance,
    bookOpeningBalance,
    bookClosingBalance,
    periodLabel,
    excludedBankOpeningBalanceRows: bankResult.excludedOpeningBalanceRows,
    excludedBookOpeningBalanceRows: bookResult.excludedOpeningBalanceRows,
    unparsedBankRows: bankResult.unparsedRows,
    unparsedBookRows: bookResult.unparsedRows,
  });

  // Calculate actual computed values for formula cells
  const bankNetMovement = result.bankTxns.reduce((s, t) => s + t.amount, 0);
  const bankCheck = (bankOpeningBalance + bankNetMovement) - bankClosingBalance;

  const bookNetMovement = result.bookTxns.reduce((s, t) => s + t.amount, 0);
  const bookCheck = (bookOpeningBalance + bookNetMovement) - bookClosingBalance;

  const depositsInTransit = result.bookTxns
    .filter((t) => t.status === "Unmatched" && t.amount > 0)
    .reduce((s, t) => s + t.amount, 0);

  const outstandingPayments = result.bookTxns
    .filter((t) => t.status === "Unmatched" && t.amount < 0)
    .reduce((s, t) => s + t.amount, 0);

  const adjustedBankBalance = bankClosingBalance + depositsInTransit + outstandingPayments;

  const bankCredits = result.bankTxns
    .filter((t) => t.status === "Unmatched" && t.amount > 0)
    .reduce((s, t) => s + t.amount, 0);

  const bankCharges = result.bankTxns
    .filter((t) => t.status === "Unmatched" && t.amount < 0)
    .reduce((s, t) => s + t.amount, 0);

  const adjustedBookBalance = bookClosingBalance + bankCredits + bankCharges;
  const difference = adjustedBankBalance - adjustedBookBalance;

  const formatMoney = (n: number) => {
    return n.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const ws = wb.getWorksheet("Reconciliation Statement")!;
  const outputLines: string[] = [];

  ws.eachRow((row, rowNumber) => {
    const rawA = row.getCell(1).value;
    const rawB = row.getCell(2).value;

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
        if (formula.includes("SUM('Bank Statement'!D:D)")) {
          computedB = formatMoney(bankNetMovement);
        } else if (formula.includes("(B5+B6)-B7")) {
          computedB = formatMoney(bankCheck);
        } else if (formula.includes("SUMIFS('Cash Book'!D:D,'Cash Book'!E:E,\"Unmatched\",'Cash Book'!D:D,\">0\")")) {
          computedB = formatMoney(depositsInTransit);
        } else if (formula.includes("SUMIFS('Cash Book'!D:D,'Cash Book'!E:E,\"Unmatched\",'Cash Book'!D:D,\"<0\")")) {
          computedB = formatMoney(outstandingPayments);
        } else if (formula.includes("B7+B10+B11")) {
          computedB = formatMoney(adjustedBankBalance);
        } else if (formula.includes("SUM('Cash Book'!D:D)")) {
          computedB = formatMoney(bookNetMovement);
        } else if (formula.includes("(B15+B16)-B17")) {
          computedB = formatMoney(bookCheck);
        } else if (formula.includes("SUMIFS('Bank Statement'!D:D,'Bank Statement'!E:E,\"Unmatched\",'Bank Statement'!D:D,\">0\")")) {
          computedB = formatMoney(bankCredits);
        } else if (formula.includes("SUMIFS('Bank Statement'!D:D,'Bank Statement'!E:E,\"Unmatched\",'Bank Statement'!D:D,\"<0\")")) {
          computedB = formatMoney(bankCharges);
        } else if (formula.includes("B17+B20+B21")) {
          computedB = formatMoney(adjustedBookBalance);
        } else if (formula.includes("B12-B22")) {
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
  const outPath = path.join(process.cwd(), "reports/recon-sample-actual.txt");
  fs.writeFileSync(outPath, outputText, "utf-8");
  console.log("Reconciliation Statement actual output written to reports/recon-sample-actual.txt");
  console.log("\n" + outputText);
}

main().catch((err) => {
  console.error("Error running recon sample check:", err);
  process.exit(1);
});
