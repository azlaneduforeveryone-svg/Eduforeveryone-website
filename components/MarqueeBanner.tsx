"use client";
import Link from "next/link";

const items = [
  { emoji:"📖", label:"Holy Quran",          href:"/quran",                  tag:"40+ Translations" },
  { emoji:"🧮", label:"Math Puzzle Game",    href:"/games/math-puzzle",      tag:"4 Levels"         },
  { emoji:"🔤", label:"WordWise",            href:"/games/word-puzzle",      tag:"1682 Words"       },
  { emoji:"🧠", label:"Quiz Battle",         href:"/games/quiz-battle",      tag:"4 Subjects"       },
  { emoji:"☪️", label:"Islamic Quiz",        href:"/quiz/islamic-quiz",      tag:"3 Languages"      },
  { emoji:"🔬", label:"Scientific Calc",     href:"/tools/scientific-calculator", tag:"Free Tool"  },
  { emoji:"📊", label:"Financial Calc",      href:"/tools/cfa-calculator",   tag:"TVM·NPV·IRR"      },
  { emoji:"🔡", label:"Number to Words",     href:"/tools/number-to-words",  tag:"8 Languages"      },
  { emoji:"📚", label:"Free Courses",        href:"/courses",                tag:"4 Subjects"       },
  { emoji:"📝", label:"Study Notes",         href:"/notes",                  tag:"Free"             },
  { emoji:"🧬", label:"Science Quiz",        href:"/quiz",                   tag:"5 Questions"      },
  { emoji:"🌍", label:"History Courses",     href:"/courses",                tag:"Free"             },
];

// Duplicate for seamless loop
const doubled = [...items, ...items];

export default function MarqueeBanner() {
  return (
    <section className="bg-gray-900 py-4 overflow-hidden">
      <div className="flex animate-marquee gap-0" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <Link key={i} href={item.href}
            className="flex items-center gap-2.5 mx-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-colors whitespace-nowrap group flex-shrink-0">
            <span className="text-xl">{item.emoji}</span>
            <div>
              <p className="text-white text-sm font-semibold leading-none group-hover:text-teal-300 transition-colors">
                {item.label}
              </p>
              <p className="text-gray-400 text-xs mt-0.5">{item.tag}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
