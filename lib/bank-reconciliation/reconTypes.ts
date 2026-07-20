// lib/bank-reconciliation/reconTypes.ts
//
// Single source of truth for the four reconciliation types. The engine and
// statement generator stay shared; everything type-specific lives here:
// labels, sheet names, balance-field guidance, amount-direction wording
// for the column mapping step, statement section labels, unmatched-item
// remarks, output filename, and matching overrides (merged over
// DEFAULT_CONFIG in engine.ts).
//
// Naming convention throughout: "their" side = the external statement
// (bank statement, supplier statement, customer statement, counterparty
// ledger) and maps to the current "bank*" form fields and variables.
// "our" side = the user's own ledger and maps to the current "book*"
// fields.
//
// Sign convention (see types.ts): positive = increases the balance of
// that account as recorded in its own file. All statement labels and
// remarks below assume that convention.
//
// SHEET NAME RULES: theirSheetName / ourSheetName / compareSheetName are
// used as Excel worksheet names and inside formulas - they must be 31
// characters or fewer and contain none of : \ / ? * [ ]. The display
// labels (theirLabel/ourLabel) have no such restriction.

import type { ReconcileConfig } from "./types";

export type ReconTypeId = "bank" | "supplier" | "customer" | "intercompany";

/** Wording for the amount-direction questions in the column-mapping UI.
 *  The page renders: "Does <col> {questionSuffix}" with {inRadio}/{outRadio}
 *  as the radio labels; {flipSignLabel} is the single-signed-column
 *  checkbox; the last two label the in/out column selects. */
export interface AmountDirectionCopy {
  questionSuffix: string;
  inRadio: string;
  outRadio: string;
  flipSignLabel: string;
  moneyInSelect: string;
  moneyOutSelect: string;
}

/** Labels for the four adjustment lines and two adjusted-balance rows on
 *  the reconciliation statement. "oursOnly*" lines adjust THEIR closing
 *  balance (items in our ledger their statement hasn't caught up with);
 *  "theirsOnly*" lines adjust OUR closing balance. Positive/negative
 *  refers to the normalized sign of the unmatched items summed. */
export interface StatementCopy {
  oursOnlyPositive: string;
  oursOnlyNegative: string;
  theirsOnlyPositive: string;
  theirsOnlyNegative: string;
  adjustedTheirs: string;
  adjustedOurs: string;
}

/** Sign-aware remarks written on unmatched rows in the side-by-side sheet. */
export interface RemarkCopy {
  theirsPositive: string;
  theirsNegative: string;
  oursPositive: string;
  oursNegative: string;
}

export interface ReconType {
  id: ReconTypeId;
  displayName: string;
  outputFilename: string;
  /** External side (statement received from the other party). */
  theirLabel: string;
  /** The user's own ledger side. */
  ourLabel: string;
  /** Excel-safe worksheet names - see SHEET NAME RULES above. */
  theirSheetName: string;
  ourSheetName: string;
  compareSheetName: string;
  theirBalanceHint: string;
  ourBalanceHint: string;
  amountDirection: AmountDirectionCopy;
  statement: StatementCopy;
  remarks: RemarkCopy;
  /** Merged over DEFAULT_CONFIG by reconcile() - keys are real
   *  ReconcileConfig keys, checked by the compiler. */
  matching: Partial<ReconcileConfig>;
}

export const RECON_TYPES: Record<ReconTypeId, ReconType> = {
  bank: {
    id: "bank",
    displayName: "Bank Reconciliation",
    outputFilename: "Bank_Reconciliation.xlsx",
    theirLabel: "Bank Statement",
    ourLabel: "Cash Book",
    theirSheetName: "Bank Statement",
    ourSheetName: "Cash Book",
    compareSheetName: "Bank vs Cash Book",
    theirBalanceHint:
      "Opening and closing balance exactly as printed on the bank statement.",
    ourBalanceHint:
      "Opening and closing balance of the bank/cash ledger account in your books.",
    amountDirection: {
      questionSuffix: "mean money added to this account, or money leaving it?",
      inRadio: "money IN",
      outRadio: "money OUT",
      flipSignLabel:
        "Withdrawals/payments show as positive numbers in this column (flip the sign)",
      moneyInSelect: "Money IN column (deposits)",
      moneyOutSelect: "Money OUT column (withdrawals)",
    },
    statement: {
      oursOnlyPositive:
        "Add: Deposits in transit (recorded in books, not yet on the bank statement)",
      oursOnlyNegative:
        "Less: Outstanding payments (recorded in books, not yet cleared by the bank)",
      theirsOnlyPositive:
        "Add: Bank credits not yet recorded in the books (e.g. interest, direct deposits)",
      theirsOnlyNegative:
        "Less: Bank charges not yet recorded in the books (e.g. fees, standing orders)",
      adjustedTheirs: "Adjusted Bank Balance",
      adjustedOurs: "Adjusted Cash Book Balance",
    },
    remarks: {
      theirsPositive: "Bank credit not yet recorded in the books",
      theirsNegative: "Bank charge/payment not yet recorded in the books",
      oursPositive: "Deposit in transit",
      oursNegative: "Unpresented payment / cheque",
    },
    matching: {}, // pure DEFAULT_CONFIG - tuned for bank clearing timelines
  },

  supplier: {
    id: "supplier",
    displayName: "Supplier Reconciliation",
    outputFilename: "Supplier_Reconciliation.xlsx",
    theirLabel: "Supplier Statement",
    ourLabel: "AP Ledger (Your Books)",
    theirSheetName: "Supplier Statement",
    ourSheetName: "AP Ledger",
    compareSheetName: "Statement vs AP Ledger",
    theirBalanceHint:
      "Balance shown on the supplier's statement of account (the amount they say is outstanding). Enter it as shown, without changing the sign.",
    ourBalanceHint:
      "Balance of this supplier's account in your payables ledger, as shown in your books.",
    amountDirection: {
      questionSuffix:
        "increase the balance owed to this supplier (invoices/charges), or reduce it (payments and credit notes)?",
      inRadio: "increases balance owed",
      outRadio: "reduces balance owed",
      flipSignLabel:
        "Payments/credit notes show as positive numbers in this column (flip the sign)",
      moneyInSelect: "Increases column (invoices/charges)",
      moneyOutSelect: "Reductions column (payments/credit notes)",
    },
    statement: {
      oursOnlyPositive:
        "Add: Invoices/charges in your ledger not yet on the supplier statement",
      oursOnlyNegative:
        "Less: Payments and credit notes in your ledger not yet on the supplier statement (payments in transit)",
      theirsOnlyPositive:
        "Add: Invoices/charges on the supplier statement not yet recorded in your ledger",
      theirsOnlyNegative:
        "Less: Payments/credits on the supplier statement not yet recorded in your ledger",
      adjustedTheirs: "Adjusted Supplier Statement Balance",
      adjustedOurs: "Adjusted AP Ledger Balance",
    },
    remarks: {
      theirsPositive: "Invoice on supplier statement, not in your ledger",
      theirsNegative: "Payment/credit on supplier statement, not in your ledger",
      oursPositive: "Invoice in your ledger, not on supplier statement",
      oursNegative: "Payment/credit note in transit (not yet on their statement)",
    },
    matching: {
      dateToleranceDays: 45,
      splitDateWindowDays: 60, // one payment settling invoices from the past 1-2 months is normal
      maxSplitLines: 8,
      referenceMatchIgnoresDate: true,
    },
  },

  customer: {
    id: "customer",
    displayName: "Customer Reconciliation",
    outputFilename: "Customer_Reconciliation.xlsx",
    theirLabel: "Customer Statement / Confirmation",
    ourLabel: "AR Ledger (Your Books)",
    theirSheetName: "Customer Statement",
    ourSheetName: "AR Ledger",
    compareSheetName: "Statement vs AR Ledger",
    theirBalanceHint:
      "Balance the customer confirms or shows on their statement of your account. Enter it as shown, without changing the sign.",
    ourBalanceHint:
      "Balance of this customer's account in your receivables ledger, as shown in your books.",
    amountDirection: {
      questionSuffix:
        "increase the balance this customer owes (invoices/charges), or reduce it (receipts and credit notes)?",
      inRadio: "increases balance owed",
      outRadio: "reduces balance owed",
      flipSignLabel:
        "Receipts/credit notes show as positive numbers in this column (flip the sign)",
      moneyInSelect: "Increases column (invoices/charges)",
      moneyOutSelect: "Reductions column (receipts/credit notes)",
    },
    statement: {
      oursOnlyPositive:
        "Add: Invoices in your ledger not yet on the customer statement",
      oursOnlyNegative:
        "Less: Receipts and credit notes in your ledger not yet on the customer statement",
      theirsOnlyPositive:
        "Add: Invoices/charges the customer shows that are not in your ledger",
      theirsOnlyNegative:
        "Less: Payments the customer shows that you have not yet allocated",
      adjustedTheirs: "Adjusted Customer Statement Balance",
      adjustedOurs: "Adjusted AR Ledger Balance",
    },
    remarks: {
      theirsPositive: "Charge on customer statement, not in your ledger",
      theirsNegative: "Customer payment not yet allocated in your ledger",
      oursPositive: "Invoice in your ledger, not acknowledged by customer",
      oursNegative: "Receipt/credit note in transit (not yet on their statement)",
    },
    matching: {
      dateToleranceDays: 45,
      splitDateWindowDays: 60,
      maxSplitLines: 8,
      referenceMatchIgnoresDate: true,
    },
  },

  intercompany: {
    id: "intercompany",
    displayName: "Intercompany Reconciliation",
    outputFilename: "Intercompany_Reconciliation.xlsx",
    theirLabel: "Counterparty Ledger",
    ourLabel: "Your Ledger",
    theirSheetName: "Counterparty Ledger",
    ourSheetName: "Your Ledger",
    compareSheetName: "Counterparty vs Your Ledger",
    theirBalanceHint:
      "Opening and closing balance of the intercompany account in the counterparty entity's books.",
    ourBalanceHint:
      "Opening and closing balance of the intercompany account in your entity's books.",
    amountDirection: {
      questionSuffix: "increase the intercompany account balance, or reduce it?",
      inRadio: "increases balance",
      outRadio: "reduces balance",
      flipSignLabel:
        "Reductions show as positive numbers in this column (flip the sign)",
      moneyInSelect: "Increases column",
      moneyOutSelect: "Reductions column",
    },
    statement: {
      oursOnlyPositive:
        "Add: Entries in your ledger not yet posted by the counterparty",
      oursOnlyNegative:
        "Less: Reductions in your ledger not yet posted by the counterparty",
      theirsOnlyPositive:
        "Add: Entries in the counterparty ledger not yet posted in your books",
      theirsOnlyNegative:
        "Less: Reductions in the counterparty ledger not yet posted in your books",
      adjustedTheirs: "Adjusted Counterparty Balance",
      adjustedOurs: "Adjusted Balance per Your Books",
    },
    remarks: {
      theirsPositive: "In counterparty ledger, not yet posted in your books",
      theirsNegative: "Reduction in counterparty ledger, not yet in your books",
      oursPositive: "In your ledger, not yet posted by counterparty",
      oursNegative: "Reduction in your ledger, not yet posted by counterparty",
    },
    matching: {
      dateToleranceDays: 7,
      splitDateWindowDays: 10,
      maxSplitLines: 8,
      referenceMatchIgnoresDate: true,
    },
  },
};

export function getReconType(raw: unknown): ReconType | null {
  const id = String(raw ?? "bank"); // default keeps the existing page working
  return (RECON_TYPES as Record<string, ReconType>)[id] ?? null;
}
