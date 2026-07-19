// Shared types for the public bank-vs-book reconciliation tool.
// Design note: unlike an intercompany recon (opposite-signed books),
// bank statement and cash book use the SAME sign convention here -
// money added to the account is positive on both sides, money removed
// is negative. The column-mapping step is responsible for producing
// that normalized signed amount from whatever the user's file actually
// has (a single signed column, or separate in/out columns).

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
}

export const DEFAULT_CONFIG: ReconcileConfig = {
  dateToleranceDays: 3,      // tighter than the intercompany case - a bank
                              // clears within a few days, not weeks
  splitDateWindowDays: 5,
  maxSplitLines: 6,
  maxCandidatePool: 30,
  maxComboAttempts: 300_000,
  maxComboAttemptsPerAnchor: 20_000,
};
