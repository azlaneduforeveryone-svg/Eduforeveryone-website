import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

// app/tools/finance-tools/page.tsx
//
// Category landing page for finance tools. Add a new entry to TOOLS
// below each time you ship another one.

export const metadata: Metadata = {
  title: "Free Finance & Accounting Tools — Reconciliations & Utilities | EduForEveryone",
  description:
    "Free finance and accounting tools including bank reconciliation, supplier statements, and business financial utilities with formula-driven Excel downloads.",
  alternates: {
    canonical: "https://eduforeveryone.com/tools/finance-tools",
  },
  openGraph: {
    title: "Free Finance & Accounting Tools | EduForEveryone",
    description:
      "Free finance and accounting utilities including bank reconciliation with Excel downloads. No signup required.",
    url: "https://eduforeveryone.com/tools/finance-tools",
    siteName: "EduForEveryone",
    type: "website",
  },
};

const TOOLS = [
  {
    href: "/tools/finance-tools/reconciliation/bank",
    title: "Reconciliations",
    description:
      "Bank, supplier, customer, and intercompany reconciliations. Upload both sides, get a formula-driven reconciliation statement back as an Excel download.",
    icon: "🏦",
  },
  // { href: "/tools/finance-tools/next-tool", title: "...", description: "...", icon: "..." },
];

export default function FinanceToolsPage() {
  return (
    <div className="efe-page">
      <PageHeader
        title="Finance Tools"
        description="Free finance and accounting utilities. No signup required."
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {TOOLS.map((t) => (
            <Card key={t.href} href={t.href} className="p-6">
              <div className="w-12 h-12 rounded-[14px] bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-2xl mb-4 group-hover:bg-efe-accent group-hover:text-white transition-colors">
                {t.icon}
              </div>
              <h2 className="text-lg font-bold text-efe-fg mb-2 group-hover:text-efe-accent transition-colors">{t.title}</h2>
              <p className="text-sm text-efe-muted leading-relaxed">{t.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
