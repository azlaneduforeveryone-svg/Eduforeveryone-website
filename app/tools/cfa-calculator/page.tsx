import type { Metadata } from "next";
import CFACalculator from "./CFACalculator";
import CalcNav from "@/components/CalcNav";

export const metadata: Metadata = {
  title: "CFA Financial Calculator Online Free | EduForEveryone",
  description: "Free CFA-style financial calculator. Time Value of Money (TVM): compute N, I/Y, PV, PMT, FV. BA II Plus style. Perfect for finance students and CFA exam prep.",
  keywords: ["CFA calculator", "TVM calculator", "time value of money calculator", "financial calculator", "BA II plus calculator", "PV FV calculator", "finance calculator online", "CFA exam calculator"],
  alternates: { canonical: "https://eduforeveryone.com/tools/cfa-calculator" },
  openGraph: {
    title: "CFA Financial Calculator — Free TVM | EduForEveryone",
    description: "Time Value of Money calculator: N, I/Y, PV, PMT, FV. Free for finance students.",
    url: "https://eduforeveryone.com/tools/cfa-calculator",
    siteName: "EduForEveryone",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Free CFA Financial Calculator | EduForEveryone" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "CFA Financial Calculator",
        url: "https://eduforeveryone.com/tools/cfa-calculator",
        description: "Free CFA-style TVM financial calculator for students.",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        provider: { "@type": "Organization", name: "EduForEveryone", url: "https://eduforeveryone.com" },
      })}} />
      <div className="max-w-sm mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <a href="/tools" className="hover:text-gray-600">Tools</a><span>/</span>
          <span className="text-gray-700 font-medium">CFA Calculator</span>
        </nav>
        <CalcNav />
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">📊</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Financial Calculator</h1>
            <p className="text-gray-500 text-sm">Time Value of Money — N, I/Y, PV, PMT, FV</p>
          </div>
        </div>
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-5 shadow-lg">
          <CFACalculator />
        </div>
        <div className="mt-6 space-y-3">
          <h2 className="font-bold text-gray-900 text-lg">TVM Variables</h2>
          {[
            ["N", "Number of periods (months or years)"],
            ["I/Y", "Annual interest rate (%)"],
            ["PV", "Present Value — use negative for loan amounts"],
            ["PMT", "Payment amount per period"],
            ["FV", "Future Value"],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3 bg-gray-50 rounded-xl p-3">
              <span className="font-mono font-bold text-teal-700 w-10 shrink-0">{k}</span>
              <span className="text-gray-600 text-sm">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}