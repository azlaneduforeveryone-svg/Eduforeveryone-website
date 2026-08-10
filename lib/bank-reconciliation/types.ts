// Shared types for the public reconciliation tool (bank / supplier /
// customer / intercompany).
//
// Design note on sign convention: after column mapping, BOTH sides use
// the same normalized convention - a positive amount INCREASES the
// balance of that account as recorded in its own file, a negative
// amount reduces it. For a bank recon that means money in = positive on
// both the statement and the cash book. For supplier/customer/
// intercompany recons it means invoices/charges = positive and
// payments/credits = negative on both sides, which works because the
// mapping step asks each file independently which column increases the
// balance. The column-mapping step is responsible for producing that
// normalized signed amount from whatever the user's file actually has
// (a single signed column, or separate in/out columns).

import type { DateOrder } from "./parsing";

export interface Txn {
  id: number;            // stable row id within its own sheet, 0-based
  date: Date;
  description: string;
  amount: number;        // signed, in the account's own currency (not cents)
  reference?: string;    // cheque / transfer reference, if the file has one
  raw: Record<string, unknown>; // original row, for writing back to Excel unchanged
}

export type MatchStatus =
  | "Matched"
  | "Split Match"
  | "Split Match (verify)"
  | "Unmatched";

export interface MatchedTxn extends Txn {
  status: MatchStatus;
  matchGroupId: number | null;
  seqCode: string;            // e.g. "M-001", "S-001" - blank for Unmatched
  dateDiffDays: number | null; // days between the two sides for this group, null if Unmatched
  matchedWith: string; // comma-separated reference/description of counterpart(s), for display
}

export interface ReconcileResult {
  bookTxns: MatchedTxn[];
  bankTxns: MatchedTxn[];
}

// ---- Column mapping (produced by the UI step, one per uploaded file) ----

export type AmountMode = "single" | "inOut";

export interface ColumnMapping {
  dateCol: string;
  /** Token order for TEXT dates in dateCol, resolved client-side by
   *  inferDateOrder() or chosen by the user when inference was
   *  ambiguous. Omitted when the column holds real Excel date cells or
   *  when the client could not resolve it - the server then falls back
   *  to its own inference (see applyMapping). */
  dateOrder?: DateOrder;
  descriptionCol: string;
  amountMode: AmountMode;
  amountCol?: string;      // amountMode === "single"
  amountSign?: 1 | -1;     // 1 = positive-in-file means money in; -1 = flip
  moneyInCol?: string;     // amountMode === "inOut"
  moneyOutCol?: string;    // amountMode === "inOut"
  referenceCol?: string;
  balanceCol?: string;     // optional running-balance column, used to default the closing balance
}

export interface ReconcileConfig {
  dateToleranceDays: number;
  splitDateWindowDays: number;
  maxSplitLines: number;
  maxCandidatePool: number;
  maxComboAttempts: number;          // hard ceiling across the whole split pass
  maxComboAttemptsPerAnchor: number; // ceiling for a single anchor, so one
                                      // expensive row can't eat the whole budget
  /** When true, Pass 1 reference/group matches and reference-equal
   *  individual matches ignore the date windows entirely. Needed for
   *  supplier/customer recons, where invoice date vs posting date
   *  routinely differs by weeks - a reference match is stronger
   *  evidence than a date window there. Amount-only matches (no shared
   *  reference) still respect the windows. */
  referenceMatchIgnoresDate: boolean;
  /** A reference appearing on more than this many rows on either side is
   *  a "weak" reference (a type code like JV/TRF, not a document number)
   *  and does NOT earn the ignore-the-date-window privilege above -
   *  generic references at unlimited date distance produce confident
   *  wrong matches. */
  weakReferenceRowLimit: number;
}

export const DEFAULT_CONFIG: ReconcileConfig = {
  dateToleranceDays: 3,      // tighter than the intercompany case - a bank
                              // clears within a few days, not weeks
  splitDateWindowDays: 5,
  maxSplitLines: 6,
  maxCandidatePool: 30,
  maxComboAttempts: 300_000,
  maxComboAttemptsPerAnchor: 20_000,
  referenceMatchIgnoresDate: false, // bank default; overridden per recon type
  weakReferenceRowLimit: 8,
};
