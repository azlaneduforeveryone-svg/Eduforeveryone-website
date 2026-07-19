import type { MatchedTxn } from "./types";

/** Short, plain-English explanation of why a row sits where it does -
 * used only in the side-by-side sheet's Remarks column. The Match_Status
 * column elsewhere stays a plain status word so SUMIFS formulas keep
 * working; this is the human-facing layer on top of it. */
export function remarkFor(txn: MatchedTxn, side: "bank" | "book"): string {
  switch (txn.status) {
    case "Matched":
      if (txn.dateDiffDays === 0) return "Matched - same date";
      if (txn.dateDiffDays === 1) return "Matched - cleared 1 day later";
      if (txn.dateDiffDays != null) return `Matched - cleared ${txn.dateDiffDays} days later`;
      return "Matched";

    case "Split Match (verify)":
      return "Split match - part of a multi-line group, verify the grouping";

    case "Unmatched":
      if (side === "book") {
        return txn.amount > 0
          ? "Deposit in transit - recorded in books, not yet on the bank statement"
          : "Outstanding payment - recorded in books, not yet cleared by the bank";
      }
      return txn.amount > 0
        ? "Bank credit not yet recorded in the books (e.g. interest, direct deposit)"
        : "Bank charge not yet recorded in the books (e.g. fee, standing order)";

    default:
      return "";
  }
}
