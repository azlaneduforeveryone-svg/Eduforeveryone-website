import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online Tools for Students | EduForEveryone",
  description:
    "Free educational tools for students — number to words converter, and more. No sign-up required.",
  alternates: { canonical: "https://eduforeveryone.com/tools" },
  openGraph: {
    title: "Free Online Tools — EduForEveryone",
    description: "Free tools for students including number to words converter in 8 languages.",
    url: "https://eduforeveryone.com/tools",
    siteName: "EduForEveryone",
    type: "website",
  },
};

const tools = [
  {
    href: "/tools/number-to-words",
    emoji: "🔢",
    title: "Number to Words Converter",
    description:
      "Convert any number to words in 8 languages — English, Arabic, Hindi, Urdu, Spanish, French, German, and Turkish. Supports 8 currencies.",
    tags: ["English", "Arabic", "Hindi", "Urdu", "Currency"],
    badge: "Popular",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-1">
          Free Tools
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Educational Tools</h1>
        <p className="text-gray-500">
          Free tools to help students learn, practice, and get things done. No sign-up. No cost.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">{tool.emoji}</span>
              {tool.badge && (
                <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100">
                  {tool.badge}
                </span>
              )}
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {tool.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{tool.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded-md border border-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}