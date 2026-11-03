"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const calcs = [
  { href: "/tools/simple-calculator", label: "Simple", emoji: "🔢" },
  { href: "/tools/scientific-calculator", label: "Scientific", emoji: "🔬" },
  { href: "/tools/cfa-calculator", label: "Financial", emoji: "📊" },
  { href: "/tools/number-to-words", label: "Words", emoji: "🔡" },
];

export default function CalcNav() {
  const path = usePathname();
  return (
    <nav className="w-full mb-6">
      <p className="text-xs text-efe-muted mb-2 text-center">Switch Calculator</p>
      <div className="grid grid-cols-4 gap-2">
        {calcs.map((c) => {
          const active = path === c.href;
          return (
            <Link key={c.href} href={c.href}
              className={`flex flex-col items-center gap-1 py-2 px-1 rounded-xl border text-center transition-all text-xs font-semibold
                ${active
                  ? "bg-efe-accent text-white border-efe-accent-ink shadow-md"
                  : "bg-efe-surface text-efe-muted border-efe-line hover:border-efe-accent hover:text-efe-accent"
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