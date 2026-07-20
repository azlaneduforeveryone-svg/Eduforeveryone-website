import type { ColumnMapping, Txn } from "./types";
import {
  inferDateOrder,
  makeDateParser,
  parseAmountDetailed,
  type DateOrder,
} from "./parsing";

const isBlank = (v: unknown) => v == null || String(v).trim() === "";

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
  // Arabic headers: hamza variants and taa-marbuta normalized so one
  // keyword matches all common spellings.
  const normAr = (h: string) => h.replace(/[إأآ]/g, "ا").replace(/ة/g, "ه");
  const find = (keywords: string[], arKeywords: string[] = []) =>
    headers.find(
      (h) =>
        keywords.some((k) => norm(h).includes(k)) ||
        arKeywords.some((k) => normAr(h).includes(k))
    );

  const dateCol = find(["date", "txndate", "transactiondate", "valuedate"], ["تاريخ"]);
  const descriptionCol = find(
    ["description", "narration", "particulars", "details", "memo"],
    ["بيان", "وصف", "تفاصيل"]
  );
  const referenceCol = find(
    ["reference", "chequeno", "chequenumber", "refno", "transactionid"],
    ["مرجع", "شيك", "سند"]
  );
  const balanceCol = find(["balance", "runningbalance"], ["رصيد"]);
  const amountCol = find(["amount"], ["مبلغ", "قيمه"]);
  const debitCol = find(["debit"], ["مدين"]);
  const creditCol = find(["credit"], ["دائن"]);
  const depositCol = find(["deposit", "moneyin"], ["ايداع"]);
  const withdrawalCol = find(["withdrawal", "moneyout", "payment"], ["سحب", "مسحوب"]);

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

/** A row that had real content but could not be turned into a transaction.
 * These MUST be surfaced in the output - a silently dropped row makes the
 * net-movement tie-out fail with no explanation, or worse, quietly
 * understates one side. rowNumber is 1-based as the user sees it in Excel
 * (header row = 1, first data row = 2). */
export interface UnparsedRow {
  rowNumber: number;
  description: string;
  reason: string;
}

export interface MappingResult {
  txns: Txn[];
  excludedOpeningBalanceRows: { description: string; amount: number }[];
  unparsedRows: UnparsedRow[];
}

export function applyMapping(rows: Record<string, unknown>[], mapping: ColumnMapping): MappingResult {
  const txns: Txn[] = [];
  const excludedOpeningBalanceRows: { description: string; amount: number }[] = [];
  const unparsedRows: UnparsedRow[] = [];

  // Resolve the date order ONCE per file, never per cell - per-cell
  // guessing can parse rows of the same file inconsistently. The client
  // normally resolves this (mapping.dateOrder, from inference or the
  // user's explicit choice when ambiguous); the server-side inference
  // here is the fallback for direct API callers. DMY as the last-resort
  // default matches the dd-mm-yyyy convention of the tool's primary
  // audience (Saudi/Gulf, UK-style exports).
  let dateOrder: DateOrder;
  if (mapping.dateOrder) {
    dateOrder = mapping.dateOrder;
  } else {
    const inferred = inferDateOrder(rows.map((r) => r[mapping.dateCol]));
    dateOrder = inferred === "AMBIGUOUS" || inferred === "NO_TEXT_DATES" ? "DMY" : inferred;
  }
  const toDate = makeDateParser(dateOrder);

  // Parse one amount cell. Blank cells count as 0 (common in In/Out
  // layouts where only one of the pair is filled); non-blank cells that
  // fail to parse return null so the row can be reported instead of
  // silently treated as zero. A DR/CR suffix on a cell is applied as
  // direction (DR = reduces the balance by default); the existing
  // flip-sign / direction toggles invert it if a file means the opposite.
  const parseCell = (cell: unknown): number | null => {
    if (isBlank(cell)) return 0;
    const p = parseAmountDetailed(cell);
    if (p.value === null) return null;
    if (p.drcr) return (p.drcr === "DR" ? -1 : 1) * Math.abs(p.value);
    return p.value;
  };

  rows.forEach((row, i) => {
    const rowNumber = i + 2; // +1 for 1-based, +1 for the header row
    const description = String(row[mapping.descriptionCol] ?? "");
    const dateRaw = row[mapping.dateCol];
    const date = toDate(dateRaw);

    let amount: number | null;
    if (mapping.amountMode === "single") {
      const v = parseCell(row[mapping.amountCol!]);
      amount = v === null ? null : v * (mapping.amountSign ?? 1);
    } else {
      const inV = parseCell(row[mapping.moneyInCol!]);
      const outV = parseCell(row[mapping.moneyOutCol!]);
      amount = inV === null || outV === null ? null : inV - outV;
    }

    if (!date) {
      // A row with no readable date and zero amount is a blank/footer row -
      // skip silently, as before. A row with real money on it (or an
      // unreadable amount) but no readable date is a data problem the
      // user must see.
      if (amount === null || amount !== 0) {
        unparsedRows.push({
          rowNumber,
          description,
          reason: isBlank(dateRaw) ? "missing date" : `unreadable date "${String(dateRaw)}"`,
        });
      }
      return;
    }

    if (amount === null) {
      unparsedRows.push({ rowNumber, description, reason: "unreadable amount" });
      return;
    }

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

  return { txns, excludedOpeningBalanceRows, unparsedRows };
}
