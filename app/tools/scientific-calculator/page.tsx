import type { Metadata } from "next";
import ScientificCalculator from "./ScientificCalculator";
import CalcNav from "@/components/CalcNav";

export const metadata: Metadata = {
  title: "Scientific Calculator Online Free | EduForEveryone",
  description: "Free scientific calculator for students. Trigonometry (sin, cos, tan), logarithms, powers, roots, factorial, memory. DEG, RAD, GRAD modes. Inverse trig with 2ND key.",
  keywords: ["scientific calculator", "online scientific calculator", "free scientific calculator", "sin cos tan calculator", "trig calculator", "logarithm calculator", "scientific calculator for students"],
  alternates: { canonical: "https://eduforeveryone.com/tools/scientific-calculator" },
  openGraph: {
    title: "Scientific Calculator — Free Online | EduForEveryone",
    description: "Trig, logs, powers, memory & more. DEG/RAD/GRAD modes. Free for students.",
    url: "https://eduforeveryone.com/tools/scientific-calculator",
    siteName: "EduForEveryone",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Free Scientific Calculator | EduForEveryone" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Scientific Calculator",
        url: "https://eduforeveryone.com/tools/scientific-calculator",
        description: "Free scientific calculator with trig, logs, powers, memory and more.",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        provider: { "@type": "Organization", name: "EduForEveryone", url: "https://eduforeveryone.com" },
      })}} />
      <div className="max-w-sm mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <a href="/tools" className="hover:text-gray-600">Tools</a><span>/</span>
          <span className="text-gray-700 font-medium">Scientific Calculator</span>
        </nav>
        <CalcNav />
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🔬</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Scientific Calculator</h1>
            <p className="text-gray-500 text-sm">Trig, logs, powers, memory & more</p>
          </div>
        </div>
        <ScientificCalculator />
        <div className="mt-8 space-y-3">
          <h2 className="font-bold text-gray-900 text-lg">Functions Available</h2>
          {[
            ["Trigonometry", "sin, cos, tan and their inverses (sin⁻¹, cos⁻¹, tan⁻¹) via 2ND key"],
            ["Angle Modes", "Degrees (DEG), Radians (RAD), Gradians (GRAD)"],
            ["Logarithms", "log (base 10), ln (natural), 10ˣ, eˣ"],
            ["Powers & Roots", "x², x³, √x, ∛x, xʸ (any power)"],
            ["Other", "n! (factorial), |x| (absolute), 1/x, %, π, e"],
            ["Memory", "M+ (store), M- (subtract), MR (recall), MC (clear)"],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3 bg-gray-50 rounded-xl p-3">
              <span className="font-bold text-teal-700 text-sm w-28 shrink-0">{k}</span>
              <span className="text-gray-600 text-sm">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}