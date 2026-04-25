import type { Metadata } from "next";
import SimpleCalculator from "./SimpleCalculator";
import CalcNav from "@/components/CalcNav";

export const metadata: Metadata = {
  title: "Simple Calculator Online Free | EduForEveryone",
  description: "Free simple online calculator for students. Add, subtract, multiply and divide with full calculation history. Works on mobile and desktop.",
  keywords: ["simple calculator", "online calculator", "free calculator", "basic calculator", "calculator for students"],
  alternates: { canonical: "https://eduforeveryone.com/tools/simple-calculator" },
  openGraph: {
    title: "Simple Calculator — Free Online | EduForEveryone",
    description: "Basic arithmetic calculator with history. Free for all students.",
    url: "https://eduforeveryone.com/tools/simple-calculator",
    siteName: "EduForEveryone",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Free Simple Calculator | EduForEveryone" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Simple Calculator",
        url: "https://eduforeveryone.com/tools/simple-calculator",
        description: "Free simple calculator with history for students.",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        provider: { "@type": "Organization", name: "EduForEveryone", url: "https://eduforeveryone.com" },
      })}} />
      <div className="max-w-sm mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <a href="/tools" className="hover:text-gray-600">Tools</a><span>/</span>
          <span className="text-gray-700 font-medium">Simple Calculator</span>
        </nav>
        <CalcNav />
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🔢</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Simple Calculator</h1>
            <p className="text-gray-500 text-sm">Basic arithmetic with history</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <SimpleCalculator />
        </div>
      </div>
    </>
  );
}