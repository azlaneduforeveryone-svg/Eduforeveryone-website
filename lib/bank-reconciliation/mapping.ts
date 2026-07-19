import type { ColumnMapping, Txn } from "./types";

function toDate(val: unknown): Date | null {
  if (val instanceof Date) return val;
  if (typeof val === "number") {
    // Excel serial date
    const epoch = new Date(Date.UTC(1899, 11, 30));
    return new Date(epoch.getTime() + val * 86400000);
  }
  if (typeof val === "string" && val.trim()) {
    const d = new Date(val);
    if (!isNaN(d.getTime())) return d;
  }
  return null;
}

function toNumber(val: unknown): number {
  if (typeof val === "number") return val;
  if (typeof val === "string") {
    const cleaned = val.replace(/,/g, "").replace(/\(([^)]+)\)/, "-$1").trim();
    const n = parseFloat(cleaned);
    return isNaN(n) ? 0 : n;
  }
  return 0;
}

/** Heuristic header guesser - suggests a mapping for the UI to pre-fill,
 * the user still confirms/edits it before anything runs.
 *
 * IMPORTANT: for a Debit/Credit pair, this deliberately does NOT guess
 * which one means "money in". "Credit" means money added to the account
 * on an actual bank statement, but means the OPPOSITE on a company's own
 * cash/bank ledger (a Debit increases an asset account under normal
 * double-entry). Getting this backwards silently inverts the whole
 * reconciliation and still looks plausible - it was wrong on the very
 * first synthetic test run of this module. The UI MUST show the user a
 * sample row ("Debit = 1,500 here - does that mean money IN or OUT of
 * this account?") and get an explicit answer; moneyInCol/moneyOutCol
 * below are left unassigned for a Debit/Credit pair for that reason.
 */
export function guessMapping(headers: string[]): Partial<ColumnMapping> {
  const norm = (h: string) => h.toLowerCase().replace(/[^a-z]/g, "");
  const find = (...keywords: string[]) =>
    headers.find((h) => keywords.some((k) => norm(h).includes(k)));

  const dateCol = find("date", "txndate", "transactiondate", "valuedate");
  const descriptionCol = find("description", "narration", "particulars", "details", "memo");
  const referenceCol = find("reference", "chequeno", "chequenumber", "refno", "transactionid");
  const balanceCol = find("balance", "runningbalance");
  const amountCol = find("amount");
  const debitCol = find("debit");
  const creditCol = find("credit");
  const depositCol = find("deposit", "moneyin");
  const withdrawalCol = find("withdrawal", "moneyout", "payment");

  const guess: Partial<ColumnMapping> = { dateCol, descriptionCol, referenceCol, balanceCol };
  if (amountCol) {
    guess.amountMode = "single";
    guess.amountCol = amountCol;
    guess.amountSign = 1;
  } else if (depositCol && withdrawalCol) {
    // "Deposit"/"Withdrawal" style headers are unambiguous either way
    guess.amountMode = "inOut";
    guess.moneyInCol = depositCol;
    guess.moneyOutCol = withdrawalCol;
  } else if (debitCol && creditCol) {
    // Ambiguous - flag both columns as found, but require the UI to ask
    // directionality explicitly rather than assume. See doc comment above.
    guess.amountMode = "inOut";
    guess.moneyInCol = undefined;
    guess.moneyOutCol = undefined;
    (guess as Partial<ColumnMapping> & { _debitCreditCandidates?: [string, string] })._debitCreditCandidates = [
      debitCol,
      creditCol,
    ];
  }
  return guess;
}

// Common ways an "opening balance" or "brought forward" line shows up as
// its own row in a real export. These aren't real transactions - if left
// in, a non-zero balance figure on this row would get treated as a real
// movement and thrown into the matching logic, which is wrong either way
// (it either falsely inflates one side's total, or spuriously "matches"
// against something unrelated by coincidence of amount).
const OPENING_BALANCE_PATTERNS = [
  /\bopening\s*balance\b/i,
  /\bbalance\s*b\/?f\b/i,
  /\bb\/f\b/i,
  /\bbrought\s*forward\b/i,
  /\bopening\s*bal\b/i,
];

function isOpeningBalanceRow(description: string): boolean {
  return OPENING_BALANCE_PATTERNS.some((p) => p.test(description));
}

export interface MappingResult {
  txns: Txn[];
  excludedOpeningBalanceRows: { description: string; amount: number }[];
}

export function applyMapping(rows: Record<string, unknown>[], mapping: ColumnMapping): MappingResult {
  const txns: Txn[] = [];
  const excludedOpeningBalanceRows: { description: string; amount: number }[] = [];

  rows.forEach((row, i) => {
    const date = toDate(row[mapping.dateCol]);
    if (!date) return; // skip rows we can't date - usually blank/footer rows

    let amount: number;
    if (mapping.amountMode === "single") {
      amount = toNumber(row[mapping.amountCol!]) * (mapping.amountSign ?? 1);
    } else {
      amount = toNumber(row[mapping.moneyInCol!]) - toNumber(row[mapping.moneyOutCol!]);
    }

    const description = String(row[mapping.descriptionCol] ?? "");

    if (isOpeningBalanceRow(description)) {
      if (amount !== 0) excludedOpeningBalanceRows.push({ description, amount });
      return; // never treated as a transaction, regardless of amount
    }

    if (amount === 0) return; // skip true zero-amount rows (headers, separators)

    txns.push({
      id: i,
      date,
      description,
      amount,
      reference: mapping.referenceCol ? String(row[mapping.referenceCol] ?? "").trim() || undefined : undefined,
      raw: row,
    });
  });

  return { txns, excludedOpeningBalanceRows };
}
