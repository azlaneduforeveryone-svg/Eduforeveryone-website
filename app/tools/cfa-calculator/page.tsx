import type { Metadata } from "next";
import CFACalculator from "./CFACalculator";
export const metadata: Metadata = {
  title: "CFA Financial Calculator | EduForEveryone",
  description: "Free CFA-style financial calculator with TVM functions — N, I/Y, PV, PMT, FV. Compute any time value of money variable instantly.",
  alternates: { canonical: "https://eduforeveryone.com/tools/cfa-calculator" },
};
export default function Page() {
  return (
    <div className="max-w-sm mx-auto px-4 py-10">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <a href="/tools" className="hover:text-gray-600">Tools</a><span>/</span>
        <span className="text-gray-700 font-medium">CFA Calculator</span>
      </nav>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">📊</span>
        <div><h1 className="text-2xl font-bold text-gray-900">CFA Financial Calculator</h1>
        <p className="text-gray-500 text-sm">TVM: N, I/Y, PV, PMT, FV</p></div>
      </div>
      <div className="bg-gray-950 border border-gray-800 rounded-2xl p-5 shadow-lg">
        <CFACalculator />
      </div>
      <div className="mt-6 space-y-3">
        <h2 className="font-bold text-gray-900">How to use TVM</h2>
        {[["N","Number of periods (months/years)"],["I/Y","Interest rate per year (%)"],["PV","Present Value — enter as negative for loans"],["PMT","Payment per period"],["FV","Future Value"]].map(([k,v])=>(
          <div key={k} className="flex gap-3 bg-gray-50 rounded-xl p-3">
            <span className="font-mono font-bold text-green-700 w-10">{k}</span>
            <span className="text-gray-600 text-sm">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}