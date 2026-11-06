import type { Metadata } from "next";
import NumberToWordsConverter from "./NumberToWordsConverter";

export const metadata: Metadata = {
  title: "Number to Words Converter | English, Arabic, Hindi, Urdu & More",
  description:
    "Free online number to words converter. Instantly convert numbers to words in English, Arabic, Hindi, Urdu, Spanish, French, German, and Turkish. Supports currency mode with USD, SAR, INR, PKR, EUR, GBP and more.",
  alternates: { canonical: "https://eduforeveryone.com/tools/number-to-words" },
  openGraph: {
    title: "Number to Words Converter — 8 Languages + Currency Support",
    description:
      "Convert any number to words instantly in English, Arabic, Hindi, Urdu, Spanish, French, German, and Turkish.",
    url: "https://eduforeveryone.com/tools/number-to-words",
    siteName: "EduForEveryone",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Number to Words Converter — 8 Languages + Currency",
    description:
      "Free tool to convert numbers to words in 8 languages including Arabic, Hindi, and Urdu. Includes currency support.",
  },
};

export default function NumberToWordsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Number to Words Converter",
            url: "https://eduforeveryone.com/tools/number-to-words",
            description:
              "Convert numbers to words in 8 languages including English, Arabic, Hindi, Urdu, Spanish, French, German, and Turkish.",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Any",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            provider: {
              "@type": "Organization",
              name: "EduForEveryone",
              url: "https://eduforeveryone.com",
            },
          }),
        }}
      />

      <div className="efe-page">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-efe-muted mb-6">
          <a href="/tools" className="hover:text-efe-accent transition-colors">Tools</a>
          <span>/</span>
          <span className="text-efe-fg font-medium">Number to Words</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl">🔢</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-efe-fg font-display">
              Number to Words Converter
            </h1>
          </div>
          <p className="text-efe-muted text-base leading-relaxed">
            Convert any number to words in <strong className="text-efe-fg">8 languages</strong> —
            English, Arabic, Hindi, Urdu, Spanish, French, German, and Turkish.
            Add currency for cheques, invoices, and documents.
          </p>
        </div>

        {/* Converter */}
        <div className="efe-card p-6 shadow-sm">
          <NumberToWordsConverter />
        </div>

        {/* Info Section */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {[
            { flag: "🇺🇸", lang: "English", example: "1,234 → one thousand two hundred thirty-four" },
            { flag: "🇸🇦", lang: "Arabic (تفقيط)", example: "١٬٢٣٤ → ألف ومئتان وأربعة وثلاثون" },
            { flag: "🇮🇳", lang: "Hindi", example: "1,234 → एक हज़ार दो सौ चौंतीस" },
            { flag: "🇵🇰", lang: "Urdu", example: "1,234 → ایک ہزار دو سو چونتیس" },
          ].map((item) => (
            <div key={item.lang} className="efe-card p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{item.flag}</span>
                <span className="font-semibold text-efe-fg text-sm">{item.lang}</span>
              </div>
              <p className="text-efe-muted text-xs leading-relaxed">{item.example}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-efe-fg font-display">Frequently asked questions</h2>
          {[
            {
              q: "What is number to words conversion?",
              a: "Number to words conversion is the process of writing a numeric value as its equivalent spelled-out text. For example, 1500 becomes 'one thousand five hundred' in English.",
            },
            {
              q: "Why do I need amount in words for cheques?",
              a: "Banks require the amount in words on cheques to prevent fraud. Our currency mode generates the exact phrase needed for cheques in USD, SAR, INR, PKR, EUR, GBP, and more.",
            },
            {
              q: "What is Tafqeet (تفقيط)?",
              a: "Tafqeet is the Arabic term for writing numbers in words, commonly used in accounting, banking, and legal documents across Arab countries.",
            },
            {
              q: "How large a number can I convert?",
              a: "This tool supports numbers from 0 up to 999,999,999,999 (999 billion), covering virtually all practical use cases.",
            },
          ].map((faq) => (
            <div key={faq.q} className="efe-card p-5">
              <h3 className="font-semibold text-efe-fg mb-2">{faq.q}</h3>
              <p className="text-efe-muted text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
