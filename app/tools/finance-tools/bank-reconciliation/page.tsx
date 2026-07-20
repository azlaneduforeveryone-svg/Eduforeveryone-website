// app/tools/finance-tools/bank-reconciliation/page.tsx
//
// REPLACES the old bank reconciliation page entirely - the tool now lives
// at /tools/finance-tools/reconciliation/[type]. This stub keeps the old
// URL working for existing links and search results. permanentRedirect
// sends a 308, which tells search engines to transfer the old URL's
// ranking to the new one.

import { permanentRedirect } from "next/navigation";

export default function BankReconciliationRedirect() {
  permanentRedirect("/tools/finance-tools/reconciliation/bank");
}