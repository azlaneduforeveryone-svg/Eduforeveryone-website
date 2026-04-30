"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { MATH_TOPICS, LEVELS, CATEGORIES, searchTopics, type Level } from "@/lib/mathTopics";

const LEVEL_COLORS: Record<string, string> = {
  "Elementary":   "bg-green-100 text-green-700 border-green-200",
  "Middle School":"bg-blue-100 text-blue-700 border-blue-200",
  "High School":  "bg-purple-100 text-purple-700 border-purple-200",
  "University":   "bg-orange-100 text-orange-700 border-orange-200",
  "Professional": "bg-red-100 text-red-700 border-red-200",
};

const LEVEL_EMOJIS: Record<string, string> = {
  "Elementary":   "🌱",
  "Middle School":"📗",
  "High School":  "📘",
  "University":   "🎓",
  "Professional": "💼",
};

export default function MathHubPage() {
  const [query,       setQuery]       = useState("");
  const [levelFilter, setLevelFilter] = useState<Level | "All">("All");
  const [catFilter,   setCatFilter]   = useState("All");

  const filtered = useMemo(() => {
    let topics = query.trim().length >= 2 ? searchTopics(query) : MATH_TOPICS;
    if (levelFilter !== "All") topics = topics.filter(t => t.level === levelFilter);
    if (catFilter   !== "All") topics = topics.filter(t => t.category === catFilter);
    return topics;
  }, [query, levelFilter, catFilter]);

  // Group by level for display
  const byLevel = useMemo(() => {
    const groups: Record<string, typeof filtered> = {};
    filtered.forEach(t => {
      if (!groups[t.level]) groups[t.level] = [];
      groups[t.level].push(t);
    });
    return groups;
  }, [filtered]);

  const showGroups = !query && levelFilter === "All" && catFilter === "All";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2">Mathematics</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Mathematics</h1>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          From elementary counting to university calculus. Every topic includes
          clear explanation, worked examples, practice exercises and a quiz.
        </p>
      </div>

      {/* Level badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {LEVELS.map(l => (
          <div key={l} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${LEVEL_COLORS[l]}`}>
            <span>{LEVEL_EMOJIS[l]}</span>
            <span>{l}</span>
            <span className="bg-white/60 px-1.5 rounded-full">{MATH_TOPICS.filter(t=>t.level===l).length}</span>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search topics... e.g. algebra, fractions, calculus, trigonometry"
          className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl text-base focus:outline-none focus:border-teal-500 bg-white"
        />
        {query && (
          <button onClick={() => setQuery("")} className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600">✕</button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {/* Level filter */}
        <div className="flex gap-1.5 flex-wrap">
          {(["All", ...LEVELS] as (Level|"All")[]).map(l => (
            <button key={l} onClick={() => setLevelFilter(l)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all
                ${levelFilter===l ? "bg-teal-600 text-white border-teal-700" : "bg-white text-gray-500 border-gray-200 hover:border-teal-300"}`}>
              {l === "All" ? "All Levels" : `${LEVEL_EMOJIS[l]} ${l}`}
            </button>
          ))}
        </div>
        {/* Category filter */}
        <div className="flex gap-1.5 flex-wrap">
          {["All", ...CATEGORIES].map(c => (
            <button key={c} onClick={() => setCatFilter(c)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all
                ${catFilter===c ? "bg-gray-800 text-white border-gray-900" : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`}>
              {c === "All" ? "All Topics" : c}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {(query || levelFilter !== "All" || catFilter !== "All") && (
        <p className="text-sm text-gray-500 mb-4">
          {filtered.length} topic{filtered.length !== 1 ? "s" : ""} found
          {query ? ` for "${query}"` : ""}
          {levelFilter !== "All" ? ` in ${levelFilter}` : ""}
        </p>
      )}

      {/* ── Grouped by Level ── */}
      {showGroups ? (
        <div className="space-y-12">
          {LEVELS.map(level => {
            const levelTopics = byLevel[level];
            if (!levelTopics?.length) return null;
            return (
              <div key={level}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{LEVEL_EMOJIS[level]}</span>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{level}</h2>
                    <p className="text-gray-500 text-sm">{levelTopics.length} topics</p>
                  </div>
                  <div className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-bold border ${LEVEL_COLORS[level]}`}>{level}</div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {levelTopics.map(topic => (
                    <TopicCard key={topic.id} topic={topic} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Flat list when filtering/searching */
        filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">No topics found</h2>
            <p className="text-gray-500 text-sm mb-6">Try searching for: algebra, fractions, calculus...</p>
            <button onClick={() => { setQuery(""); setLevelFilter("All"); setCatFilter("All"); }}
              className="bg-teal-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-teal-700">
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(topic => <TopicCard key={topic.id} topic={topic} />)}
          </div>
        )
      )}
    </div>
  );
}

function TopicCard({ topic }: { topic: typeof MATH_TOPICS[0] }) {
  return (
    <Link href={`/courses/mathematics/${topic.id}`}
      className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-teal-300 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{topic.emoji}</span>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${LEVEL_COLORS[topic.level]}`}>
          {topic.level}
        </span>
      </div>
      <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-teal-600 transition-colors">
        {topic.title}
      </h3>
      <p className="text-gray-500 text-xs mb-3 leading-relaxed">{topic.subtitle}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
          {topic.category}
        </span>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>💡 {topic.examples.length} examples</span>
          <span>✏️ {topic.exercises.length} exercises</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        {["📖","✏️","🧠"].map((icon, i) => (
          <span key={i} className="text-xs bg-teal-50 text-teal-600 px-2 py-0.5 rounded-full">
            {icon} {i===0?"Explain":i===1?"Practice":"Quiz"}
          </span>
        ))}
      </div>
    </Link>
  );
}
