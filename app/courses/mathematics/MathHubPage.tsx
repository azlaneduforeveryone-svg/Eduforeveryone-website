"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { MATH_TOPICS, LEVELS, CATEGORIES, searchTopics, type Level, type MathTopic } from "@/lib/mathTopics";
import { useAdminCollection } from "@/lib/useAdminCollection";

// ── Transform Firebase admin_math → MathTopic[] ───────────────────────────────
function transformMathTopics(raw: Record<string, unknown>[]): MathTopic[] {
  return raw
    .filter(r => r.topic_id || r.id)
    .map(r => ({
      id:            String(r.topic_id || r.id || ""),
      title:         String(r.title || ""),
      subtitle:      String(r.description || ""),
      emoji:         "🧮",
      level:         String(r.level || "High School") as Level,
      category:      String(r.category || "algebra"),
      description:   String(r.description || ""),
      keyPoints:     [r.key_point_1, r.key_point_2, r.key_point_3, r.key_point_4, r.key_point_5]
        .filter(Boolean).map(String),
      explanation:   [String(r.description || "")],
      examples: r.example_problem ? [{
      title:   String(r.title || "Example"),
      problem: String(r.example_problem),
      steps:   String(r.example_solution || "").split("\n").filter(Boolean),
      answer:  String(r.example_solution || ""),
    }] : [],
      exercises:     [],
      quiz:          [],
      relatedTopics: [] as string[],
      tags:          [] as string[],
    }))
    .filter(t => t.id && t.title);
}

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

  // Load from Firebase admin_math — merges with local MATH_TOPICS
  const { data: fbTopics, loading: fbLoading, fromFirebase } = useAdminCollection(
    "admin_math",
    transformMathTopics,
    []
  );

  // Combine: Firebase topics first, then local ones not already in Firebase
  const ALL_TOPICS = useMemo(() => {
    if (!fromFirebase) return MATH_TOPICS;
    const fbIds = new Set(fbTopics.map(t => t.id));
    const localOnly = MATH_TOPICS.filter(t => !fbIds.has(t.id));
    return [...fbTopics, ...localOnly];
  }, [fbTopics, fromFirebase]);

  const filtered = useMemo(() => {
    let topics = query.trim().length >= 2 ? searchTopics(query) : ALL_TOPICS;
    if (levelFilter !== "All") topics = topics.filter(t => t.level === levelFilter);
    if (catFilter   !== "All") topics = topics.filter(t => t.category === catFilter);
    return topics;
  }, [query, levelFilter, catFilter, ALL_TOPICS]);

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
    <div className="efe-page min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-efe-accent font-semibold text-sm uppercase tracking-wider mb-2">Mathematics</p>
          <h1 className="text-4xl font-bold text-efe-fg font-display mb-3">Mathematics</h1>
          <p className="text-efe-muted max-w-2xl mx-auto leading-relaxed">
            From elementary counting to university calculus. Every topic includes
            clear explanation, worked examples, practice exercises and a quiz.
          </p>
          {fromFirebase && (
            <div className="inline-flex items-center gap-2 mt-3 bg-efe-accent-soft border border-efe-line text-efe-accent-ink text-xs font-semibold px-3 py-1.5 rounded-full">
              ✅ {fbTopics.length} topics loaded from admin panel · {ALL_TOPICS.length} total
            </div>
          )}
          {fbLoading && (
            <div className="inline-flex items-center gap-2 mt-3 text-efe-muted text-xs">
              <span className="w-3 h-3 border-2 border-efe-line border-t-efe-accent rounded-full animate-spin" />
              Loading topics…
            </div>
          )}
        </div>

        {/* Level badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {LEVELS.map(l => (
            <div key={l} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${LEVEL_COLORS[l]}`}>
              <span>{LEVEL_EMOJIS[l]}</span>
              <span>{l}</span>
              <span className="bg-white/60 px-1.5 rounded-full">{ALL_TOPICS.filter(t=>t.level===l).length}</span>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg className="absolute left-4 top-3.5 w-5 h-5 text-efe-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search topics... e.g. algebra, fractions, calculus, trigonometry"
            className="w-full pl-12 pr-4 py-3.5 border-2 border-efe-line rounded-2xl text-base text-efe-fg focus:outline-none focus:border-efe-accent bg-efe-surface"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-4 top-3.5 text-efe-muted hover:text-efe-fg">✕</button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="flex gap-1.5 flex-wrap">
            {(["All", ...LEVELS] as (Level|"All")[]).map(l => (
              <button key={l} onClick={() => setLevelFilter(l)}
                className={`efe-chip ${levelFilter===l ? "efe-chip-active" : ""}`}>
                {l === "All" ? "All Levels" : `${LEVEL_EMOJIS[l]} ${l}`}
              </button>
            ))}
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {["All", ...CATEGORIES].map(c => (
              <button key={c} onClick={() => setCatFilter(c)}
                className={`efe-chip ${catFilter===c ? "efe-chip-active" : ""}`}>
                {c === "All" ? "All Topics" : c}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        {(query || levelFilter !== "All" || catFilter !== "All") && (
          <p className="text-sm text-efe-muted mb-4">
            {filtered.length} topic{filtered.length !== 1 ? "s" : ""} found
            {query ? ` for "${query}"` : ""}
            {levelFilter !== "All" ? ` in ${levelFilter}` : ""}
          </p>
        )}

        {/* Grouped by Level */}
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
                      <h2 className="text-xl font-bold text-efe-fg font-display">{level}</h2>
                      <p className="text-efe-muted text-sm">{levelTopics.length} topics</p>
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
          filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">🔍</p>
              <h2 className="text-xl font-bold text-efe-fg font-display mb-2">No topics found</h2>
              <p className="text-efe-muted text-sm mb-6">Try searching for: algebra, fractions, calculus...</p>
              <button onClick={() => { setQuery(""); setLevelFilter("All"); setCatFilter("All"); }}
                className="efe-btn efe-btn-primary">
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
    </div>
  );
}

function TopicCard({ topic }: { topic: typeof MATH_TOPICS[0] }) {
  return (
    <Link href={`/courses/mathematics/${topic.id}`}
      className="group efe-card p-5 hover:border-efe-accent hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{topic.emoji}</span>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${LEVEL_COLORS[topic.level]}`}>
          {topic.level}
        </span>
      </div>
      <h3 className="font-bold text-efe-fg font-display text-base mb-1 group-hover:text-efe-accent transition-colors">
        {topic.title}
      </h3>
      <p className="text-efe-muted text-xs mb-3 leading-relaxed">{topic.subtitle}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-efe-muted bg-efe-bg px-2 py-0.5 rounded-full border border-efe-line">
          {topic.category}
        </span>
        <div className="flex items-center gap-2 text-xs text-efe-muted">
          <span>💡 {topic.examples.length} examples</span>
          <span>✏️ {topic.exercises.length} exercises</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        {["📖","✏️","🧠"].map((icon, i) => (
          <span key={i} className="text-xs bg-efe-accent-soft text-efe-accent-ink px-2 py-0.5 rounded-full">
            {icon} {i===0?"Explain":i===1?"Practice":"Quiz"}
          </span>
        ))}
      </div>
    </Link>
  );
}
