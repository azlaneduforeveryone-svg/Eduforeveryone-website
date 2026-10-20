// app/tools/finance-tools/bank-reconciliation/page.tsx
//
// REPLACES the old bank reconciliation page entirely - the tool now lives
// at /tools/finance-tools/reconciliation/[type]. This stub keeps the old
// URL working for existing links and search results. permanentRedirect
// sends a 308, which tells search engines to transfer the old URL's
// ranking to the new one.

import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Bank Reconciliation Tool | EduForEveryone",
  description:
    "Free automated bank reconciliation tool. Match transactions, find discrepancies, and generate reports.",
  alternates: {
    canonical: "https://eduforeveryone.com/tools/finance-tools/reconciliation/bank",
  },
};

export default function BankReconciliationRedirect() {
  permanentRedirect("/tools/finance-tools/reconciliation/bank");
}