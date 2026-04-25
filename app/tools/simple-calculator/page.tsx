import type { Metadata } from "next";
import SimpleCalculator from "./SimpleCalculator";
export const metadata: Metadata = {
  title: "Simple Calculator | EduForEveryone",
  description: "Free online simple calculator for students. Add, subtract, multiply and divide with calculation history.",
  alternates: { canonical: "https://eduforeveryone.com/tools/simple-calculator" },
};
export default function Page() {
  return (
    <div className="max-w-sm mx-auto px-4 py-10">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <a href="/tools" className="hover:text-gray-600">Tools</a><span>/</span>
        <span className="text-gray-700 font-medium">Simple Calculator</span>
      </nav>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">🔢</span>
        <div><h1 className="text-2xl font-bold text-gray-900">Simple Calculator</h1>
        <p className="text-gray-500 text-sm">Basic arithmetic with history</p></div>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <SimpleCalculator />
      </div>
    </div>
  );
}