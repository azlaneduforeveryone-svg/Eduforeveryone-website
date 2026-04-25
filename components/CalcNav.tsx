"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const calcs = [
  { href: "/tools/simple-calculator", label: "Simple", emoji: "🔢" },
  { href: "/tools/scientific-calculator", label: "Scientific", emoji: "🔬" },
  { href: "/tools/cfa-calculator", label: "CFA / TVM", emoji: "📊" },
  { href: "/tools/number-to-words", label: "Words", emoji: "🔡" },
];

export default function CalcNav() {
  const path = usePathname();
  return (
    <nav className="w-full mb-6">
      <p className="text-xs text-gray-400 mb-2 text-center">Switch Calculator</p>
      <div className="grid grid-cols-4 gap-2">
        {calcs.map((c) => {
          const active = path === c.href;
          return (
            <Link key={c.href} href={c.href}
              className={`flex flex-col items-center gap-1 py-2 px-1 rounded-xl border text-center transition-all text-xs font-semibold
                ${active
                  ? "bg-teal-600 text-white border-teal-700 shadow-md"
                  : "bg-white text-gray-500 border-gray-200 hover:border-teal-300 hover:text-teal-600"
                }`}
            >
              <span className="text-lg">{c.emoji}</span>
              <span className="leading-tight">{c.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}