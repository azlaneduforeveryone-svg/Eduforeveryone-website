// app/tools/finance-tools/reconciliation/[type]/page.tsx
//
// Server wrapper for the four reconciliation types. Each type gets its own
// URL (/reconciliation/bank, /supplier, /customer, /intercompany) for SEO -
// people search "supplier statement reconciliation tool" specifically - while
// the tools grid keeps a single "Reconciliations" card pointing at
// /reconciliation/bank.
//
// NOTE on Next.js versions: params is typed as a Promise (Next 15 style).
// On Next 13/14, change the two signatures to `{ params }: { params: { type: string } }`
// and drop the awaits.

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { RECON_TYPES, type ReconTypeId } from "../../../../../lib/bank-reconciliation/reconTypes";
import ReconciliationClient from "./ReconciliationClient";

export function generateStaticParams() {
  return Object.keys(RECON_TYPES).map((type) => ({ type }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ type: string }> }
): Promise<Metadata> {
  const { type } = await params;
  const rt = RECON_TYPES[type as ReconTypeId];
  if (!rt) return {};
  return {
    title: `${rt.displayName} Tool - Free Online | EduForEveryone`,
    description:
      `Free online ${rt.displayName.toLowerCase()} tool. Upload your ` +
      `${rt.theirLabel.toLowerCase()} and your ${rt.ourLabel.toLowerCase()} and get a full ` +
      `Excel reconciliation statement with matched, split, and unmatched items. ` +
      `No signup, nothing stored.`,
  };
}

export default async function ReconciliationTypePage(
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;
  const rt = RECON_TYPES[type as ReconTypeId];
  if (!rt) notFound();
  return <ReconciliationClient rt={rt} />;
}
