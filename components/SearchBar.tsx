"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { searchContent, type SearchItem } from "@/lib/searchData";

const CATEGORY_COLORS: Record<string, string> = {
  Course:  "bg-blue-100 text-blue-700",
  Notes:   "bg-purple-100 text-purple-700",
  Quiz:    "bg-amber-100 text-amber-700",
  Game:    "bg-green-100 text-green-700",
  Tool:    "bg-orange-100 text-orange-700",
  Islamic: "bg-teal-100 text-teal-700",
  Page:    "bg-gray-100 text-gray-600",
};

export default function SearchBar() {
  const [query,   setQuery]   = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [open,    setOpen]    = useState(false);
  const [focused, setFocused] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const wrapRef   = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  // Search on query change
  useEffect(() => {
    if (query.trim().length >= 2) {
      const found = searchContent(query);
      setResults(found);
      setOpen(true);
      setActiveIdx(-1);
    } else {
      setResults([]);
      setOpen(false);
    }
  }, [query]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false); setFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Keyboard navigation
  const handleKey = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === "ArrowDown")  { e.preventDefault(); setActiveIdx(i => Math.min(i+1, results.length-1)); }
    if (e.key === "ArrowUp")    { e.preventDefault(); setActiveIdx(i => Math.max(i-1, -1)); }
    if (e.key === "Escape")     { setOpen(false); inputRef.current?.blur(); }
    if (e.key === "Enter" && activeIdx >= 0) {
      window.location.href = results[activeIdx].href;
      setOpen(false); setQuery("");
    }
  };

  const clear = () => { setQuery(""); setOpen(false); inputRef.current?.focus(); };

  return (
    <div ref={wrapRef} className="relative w-full max-w-xl">
      {/* Input */}
      <div className={`flex items-center gap-2 bg-white border-2 rounded-2xl px-4 py-2.5 transition-all ${focused ? "border-teal-500 shadow-lg shadow-teal-100" : "border-gray-200"}`}>
        <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => { setFocused(true); if (results.length > 0) setOpen(true); }}
          onKeyDown={handleKey}
          placeholder="Search courses, tools, games, Quran..."
          className="flex-1 text-sm text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none min-w-0"
          autoComplete="off"
        />
        {query && (
          <button onClick={clear} className="text-gray-400 hover:text-gray-600 flex-shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden">
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center">
              <p className="text-2xl mb-2">🔍</p>
              <p className="text-gray-500 text-sm">No results for <strong>"{query}"</strong></p>
              <p className="text-gray-400 text-xs mt-1">Try searching for math, science, quran, calculator...</p>
            </div>
          ) : (
            <>
              <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                <p className="text-xs text-gray-400 font-semibold">{results.length} result{results.length !== 1 ? "s" : ""} for "{query}"</p>
                <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 text-lg leading-none">×</button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {results.map((item, i) => (
                  <Link key={item.href} href={item.href}
                    onClick={() => { setOpen(false); setQuery(""); }}
                    className={`flex items-start gap-3 px-4 py-3 hover:bg-teal-50 transition-colors border-b border-gray-50 last:border-0 ${i === activeIdx ? "bg-teal-50" : ""}`}>
                    <span className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium flex-shrink-0 ${CATEGORY_COLORS[item.category] || "bg-gray-100 text-gray-600"}`}>
                          {item.category}
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed truncate">{item.description}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}