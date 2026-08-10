import Link from "next/link";

// app/tools/finance-tools/page.tsx
//
// Category landing page for finance tools. Add a new entry to TOOLS
// below each time you ship another one.

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
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-black text-gray-900 mb-2">Finance Tools</h1>
      <p className="text-gray-600 mb-10">
        Free finance and accounting utilities. No signup required.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {TOOLS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="block p-5 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50 transition-all shadow-sm"
          >
            <div className="text-2xl mb-2">{t.icon}</div>
            <h2 className="font-semibold text-gray-900 mb-1">{t.title}</h2>
            <p className="text-sm text-gray-600">{t.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
