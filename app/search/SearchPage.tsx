"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { fuzzySearch, type SearchEntry } from "@/lib/search/fuzzy";
import { useSearchIndex } from "@/lib/search/useSearchIndex";

const POPULAR = [
  "quran", "depreciation", "osmosis", "photosynthesis", "ielts writing",
  "gmat mock", "bank reconciliation", "duas", "calculator", "word puzzle",
];

const CATEGORY_COLORS: Record<string, string> = {
  Course: "bg-blue-100 text-blue-700 border-blue-200",
  "O Level Accounting": "bg-blue-100 text-blue-700 border-blue-200",
  "O Level Biology": "bg-emerald-100 text-emerald-700 border-emerald-200",
  Notes: "bg-purple-100 text-purple-700 border-purple-200",
  Quiz: "bg-amber-100 text-amber-700 border-amber-200",
  Game: "bg-green-100 text-green-700 border-green-200",
  Games: "bg-green-100 text-green-700 border-green-200",
  Tool: "bg-orange-100 text-orange-700 border-orange-200",
  Tools: "bg-orange-100 text-orange-700 border-orange-200",
  Islamic: "bg-teal-100 text-teal-700 border-teal-200",
  "Islamic Studies": "bg-teal-100 text-teal-700 border-teal-200",
  Surah: "bg-teal-100 text-teal-700 border-teal-200",
  IELTS: "bg-indigo-100 text-indigo-700 border-indigo-200",
  "IELTS Reading": "bg-indigo-100 text-indigo-700 border-indigo-200",
  GMAT: "bg-rose-100 text-rose-700 border-rose-200",
  Page: "bg-gray-100 text-gray-600 border-gray-200",
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [catFilter, setCatFilter] = useState("All");
  const { index, ensure } = useSearchIndex();

  // Load the index straight away on this page, and seed the query from ?q=
  // (shareable search links and the WebSite SearchAction target).
  useEffect(() => {
    ensure();
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
  }, [ensure]);

  const results: SearchEntry[] = useMemo(
    () => (index && query.trim().length >= 2 ? fuzzySearch(index, query, 40) : []),
    [index, query]
  );
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(results.map((r) => r.c)))],
    [results]
  );
  const filtered = catFilter === "All" ? results : results.filter((r) => r.c === catFilter);

  useEffect(() => setCatFilter("All"), [query]);

  const searching = query.trim().length >= 2;

  return (
    <div className="efe-page min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-efe-fg font-display mb-2">Search EduForEveryone</h1>
          <p className="text-efe-muted text-sm mb-5">
            Courses and topics, surahs, IELTS and GMAT practice, tools and games. Small spelling mistakes are fine.
          </p>
          <div className="flex items-center gap-2 bg-white border-2 border-gray-200 focus-within:border-teal-500 rounded-2xl px-4 py-2.5 max-w-xl">
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search surahs, courses, IELTS topics, tools…"
              aria-label="Search the site"
              className="flex-1 text-sm text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none min-w-0"
              autoComplete="off"
              spellCheck={false}
              autoFocus
            />
          </div>
        </div>

        {!searching && (
          <div className="mb-8">
            <p className="text-xs font-bold text-efe-muted uppercase tracking-wider mb-3">Popular searches</p>
            <div className="flex flex-wrap gap-2">
              {POPULAR.map((p) => (
                <button key={p} onClick={() => setQuery(p)} className="efe-chip capitalize">
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {searching && results.length > 0 && (
          <>
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCatFilter(cat)}
                  className={`efe-chip whitespace-nowrap ${catFilter === cat ? "efe-chip-active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-sm text-efe-muted mb-4">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""} for <strong>&ldquo;{query}&rdquo;</strong>
              {catFilter !== "All" && ` in ${catFilter}`}
            </p>
          </>
        )}

        <div className="space-y-3">
          {filtered.map((item) => (
            <Link
              key={item.h}
              href={item.h}
              className="flex items-start gap-4 efe-card p-4 hover:border-efe-accent hover:shadow-md transition-all group"
            >
              <span className="text-3xl flex-shrink-0" aria-hidden="true">{item.e}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h2 className="font-bold text-efe-fg font-display group-hover:text-efe-accent transition-colors">
                    {item.t}
                  </h2>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold border ${CATEGORY_COLORS[item.c] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                    {item.c}
                  </span>
                </div>
                {item.d && <p className="text-efe-muted text-sm leading-relaxed">{item.d}</p>}
                <p className="text-efe-accent text-xs mt-2 font-medium">eduforeveryone.com{item.h}</p>
              </div>
            </Link>
          ))}
        </div>

        {searching && index && results.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-xl font-bold text-efe-fg font-display mb-2">No results found</h2>
            <p className="text-efe-muted text-sm mb-6">Try a shorter word, for example: quran, osmosis, depreciation, ielts.</p>
            <button onClick={() => setQuery("")} className="efe-btn efe-btn-primary">
              Clear search
            </button>
          </div>
        )}

        {searching && !index && <p className="text-sm text-efe-muted">Loading…</p>}
      </div>
    </div>
  );
}
