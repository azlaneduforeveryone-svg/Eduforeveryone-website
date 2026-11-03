"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { searchContent, SEARCH_DATA, type SearchItem } from "@/lib/searchData";
import SearchBar from "@/components/SearchBar";

const CATEGORIES = ["All", "Course", "Notes", "Quiz", "Game", "Tool", "Islamic", "Page"];

const CATEGORY_COLORS: Record<string, string> = {
  Course:  "bg-blue-100 text-blue-700 border-blue-200",
  Notes:   "bg-purple-100 text-purple-700 border-purple-200",
  Quiz:    "bg-amber-100 text-amber-700 border-amber-200",
  Game:    "bg-green-100 text-green-700 border-green-200",
  Tool:    "bg-orange-100 text-orange-700 border-orange-200",
  Islamic: "bg-teal-100 text-teal-700 border-teal-200",
  Page:    "bg-gray-100 text-gray-600 border-gray-200",
};

const POPULAR = [
  "algebra", "calculator", "quran", "biology", "math puzzle",
  "urdu", "financial calculator", "wordwise", "quiz", "science",
];

export default function SearchPage() {
  const [query,    setQuery]    = useState("");
  const [catFilter, setCatFilter] = useState("All");

  // Seed the query from a ?q= URL parameter (enables shareable search links and
  // a working WebSite SearchAction target).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
  }, []);

  const results = query.trim().length >= 2 ? searchContent(query) : SEARCH_DATA;
  const filtered = catFilter === "All" ? results : results.filter(r => r.category === catFilter);

  return (
    <div className="efe-page min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-efe-fg font-display mb-2">Search EduForEveryone</h1>
          <p className="text-efe-muted text-sm mb-5">Find courses, notes, quizzes, tools, games and more</p>
          <SearchBar />
        </div>

        {/* Popular searches */}
        {!query && (
          <div className="mb-8">
            <p className="text-xs font-bold text-efe-muted uppercase tracking-wider mb-3">Popular Searches</p>
            <div className="flex flex-wrap gap-2">
              {POPULAR.map(p => (
                <button key={p} onClick={() => setQuery(p)}
                  className="efe-chip capitalize">
                  🔍 {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setCatFilter(cat)}
              className={`efe-chip whitespace-nowrap ${catFilter === cat ? "efe-chip-active" : ""}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        {query.trim().length >= 2 && (
          <p className="text-sm text-efe-muted mb-4">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for <strong>"{query}"</strong>
            {catFilter !== "All" && ` in ${catFilter}`}
          </p>
        )}

        <div className="space-y-3">
          {filtered.map(item => (
            <Link key={item.href} href={item.href}
              className="flex items-start gap-4 efe-card p-4 hover:border-efe-accent hover:shadow-md transition-all group">
              <span className="text-3xl flex-shrink-0">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h2 className="font-bold text-efe-fg font-display group-hover:text-efe-accent transition-colors">
                    {item.title}
                  </h2>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold border ${CATEGORY_COLORS[item.category] || ""}`}>
                    {item.category}
                  </span>
                </div>
                <p className="text-efe-muted text-sm leading-relaxed">{item.description}</p>
                <p className="text-efe-accent text-xs mt-2 font-medium">eduforeveryone.com{item.href}</p>
              </div>
              <svg className="w-5 h-5 text-efe-muted group-hover:text-efe-accent flex-shrink-0 mt-1 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && query.trim().length >= 2 && (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <h2 className="text-xl font-bold text-efe-fg font-display mb-2">No results found</h2>
            <p className="text-efe-muted text-sm mb-6">Try searching for: algebra, quran, calculator, biology...</p>
            <button onClick={() => { setQuery(""); setCatFilter("All"); }}
              className="efe-btn efe-btn-primary">
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}