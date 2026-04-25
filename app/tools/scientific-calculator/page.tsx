import type { Metadata } from "next";
import ScientificCalculator from "./ScientificCalculator";
export const metadata: Metadata = {
  title: "Scientific Calculator | EduForEveryone",
  description: "Free scientific calculator for students. Trigonometry, logarithms, powers, roots, factorial, memory functions. DEG/RAD/GRAD modes.",
  alternates: { canonical: "https://eduforeveryone.com/tools/scientific-calculator" },
};
export default function Page() {
  return (
    <div className="max-w-sm mx-auto px-4 py-10">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <a href="/tools" className="hover:text-gray-600">Tools</a><span>/</span>
        <span className="text-gray-700 font-medium">Scientific Calculator</span>
      </nav>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">🔬</span>
        <div><h1 className="text-2xl font-bold text-gray-900">Scientific Calculator</h1>
        <p className="text-gray-500 text-sm">Trig, logs, powers, memory & more</p></div>
      </div>
      <div className="bg-gray-950 border border-gray-800 rounded-2xl p-5 shadow-lg">
        <ScientificCalculator />
      </div>
    </div>
  );
}