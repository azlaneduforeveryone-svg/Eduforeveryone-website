import { guessMapping, applyMapping } from "./mapping";
import { reconcile } from "./engine";
import { buildReconciliationWorkbook } from "./statement";
import type { ColumnMapping } from "./types";

// ---- synthetic Cash Book (the company's own books) ----
const cashBookRows = [
  { Date: "2026-06-01", Particulars: "Opening Balance B/F", Debit: 10000, Credit: 0 },
  { Date: "2026-06-02", Particulars: "Cheque to ABC Supplies", Debit: 0, Credit: 1500, "Cheque No": "CHQ1001" },
  { Date: "2026-06-03", Particulars: "Cash sale deposit", Debit: 3200, Credit: 0, "Cheque No": "" },
  { Date: "2026-06-05", Particulars: "Cheque to Landlord - June rent", Debit: 0, Credit: 4000, "Cheque No": "CHQ1002" },
  { Date: "2026-06-10", Particulars: "Customer payment - Al Rashid Trading", Debit: 2750, Credit: 0, "Cheque No": "" },
  { Date: "2026-06-28", Particulars: "Cheque to Office Supplies Co", Debit: 0, Credit: 620, "Cheque No": "CHQ1003" }, // outstanding - not yet cleared
  { Date: "2026-06-29", Particulars: "Deposit - late customer payment", Debit: 900, Credit: 0, "Cheque No": "" }, // deposit in transit
  { Date: "2026-06-15", Particulars: "Withdrawal for petty cash top-up A", Debit: 0, Credit: 300, "Cheque No": "" }, // part of a split
  { Date: "2026-06-15", Particulars: "Withdrawal for petty cash top-up B", Debit: 0, Credit: 200, "Cheque No": "" }, // part of a split
];

// ---- synthetic Bank Statement (from the bank) ----
const bankStatementRows = [
  { "Value Date": "2026-06-02", Description: "CHEQUE PAID CHQ1001", Amount: -1500 },
  { "Value Date": "2026-06-03", Description: "CASH DEPOSIT", Amount: 3200 },
  { "Value Date": "2026-06-06", Description: "CHEQUE PAID CHQ1002", Amount: -4000 }, // cleared 1 day late
  { "Value Date": "2026-06-11", Description: "TRANSFER IN - AL RASHID TRADING", Amount: 2750 },
  { "Value Date": "2026-06-16", Description: "ATM WITHDRAWAL", Amount: -500 }, // bank shows ONE line for the split
  { "Value Date": "2026-06-20", Description: "BANK CHARGES - MONTHLY FEE", Amount: -45 }, // not in books yet
  { "Value Date": "2026-06-25", Description: "INTEREST CREDIT", Amount: 12.5 }, // not in books yet
];

const cashBookMapping: ColumnMapping = {
  dateCol: "Date",
  descriptionCol: "Particulars",
  amountMode: "inOut",
  moneyInCol: "Debit",   // Debit increases a Cash/Bank asset account
  moneyOutCol: "Credit",
  referenceCol: "Cheque No",
};

const bankMapping: ColumnMapping = {
  dateCol: "Value Date",
  descriptionCol: "Description",
  amountMode: "single",
  amountCol: "Amount",
  amountSign: 1,
};

console.log("Guessed cash book mapping:", guessMapping(Object.keys(cashBookRows[0])));
console.log("Guessed bank mapping:", guessMapping(Object.keys(bankStatementRows[0])));

const bookResult = applyMapping(cashBookRows, cashBookMapping);
const bankResult = applyMapping(bankStatementRows, bankMapping);

console.log(`\nParsed ${bookResult.txns.length} book txns, ${bankResult.txns.length} bank txns`);
if (bookResult.excludedOpeningBalanceRows.length) {
  console.log("Excluded (looked like opening balance rows):", bookResult.excludedOpeningBalanceRows);
}

const result = reconcile(bookResult.txns, bankResult.txns);

console.log("\n--- Cash Book ---");
for (const t of result.bookTxns) {
  console.log(`${t.date.toISOString().slice(0, 10)}  ${t.amount.toFixed(2).padStart(10)}  ${t.status.padEnd(22)} ${t.seqCode.padEnd(7)} ${t.description}`);
}
console.log("\n--- Bank Statement ---");
for (const t of result.bankTxns) {
  console.log(`${t.date.toISOString().slice(0, 10)}  ${t.amount.toFixed(2).padStart(10)}  ${t.status.padEnd(22)} ${t.seqCode.padEnd(7)} ${t.description}`);
}

// In real usage these four figures are typed in by the user from their
// actual documents, not computed - hardcoded here only because this is
// synthetic test data with no real statement to read them from.
const BOOK_OPENING = 10000;
const BANK_OPENING = 10000;
const bookSum = bookResult.txns.reduce((s, t) => s + t.amount, 0);
const bankSum = bankResult.txns.reduce((s, t) => s + t.amount, 0);

async function main() {
  const wb = await buildReconciliationWorkbook(result.bookTxns, result.bankTxns, {
    bookLabel: "Cash Book",
    bankLabel: "Bank Statement",
    bankOpeningBalance: BANK_OPENING,
    bankClosingBalance: BANK_OPENING + bankSum,
    bookOpeningBalance: BOOK_OPENING,
    bookClosingBalance: BOOK_OPENING + bookSum,
    periodLabel: "1 June 2026 - 30 June 2026",
    excludedBankOpeningBalanceRows: bankResult.excludedOpeningBalanceRows,
    excludedBookOpeningBalanceRows: bookResult.excludedOpeningBalanceRows,
  });
  await wb.xlsx.writeFile("test_reconciliation.xlsx");
  console.log("\nWrote test_reconciliation.xlsx");
}
main();
