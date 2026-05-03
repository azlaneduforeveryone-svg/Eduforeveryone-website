"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

const JUZS = Array.from({ length: 30 }, (_, i) => i + 1);

export default function QuranPage() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "makki" | "madani">("all");

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then(r => r.json())
      .then(d => { setSurahs(d.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = surahs.filter(s => {
    const matchSearch = s.englishName.toLowerCase().includes(search.toLowerCase()) ||
      s.name.includes(search) || s.number.toString().includes(search);
    const matchFilter = filter === "all" || s.revelationType.toLowerCase() === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2">Islamic Studies</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">The Holy Quran</h1>
        <p className="text-gray-500" style={{ fontFamily: "var(--font-arabic), 'Amiri', serif" }}>القرآن الكريم</p>
        <p className="text-gray-400 text-sm mt-2">114 Surahs · 6,236 Ayahs · 40+ Translations · Audio Recitation</p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search Surah by name or number..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <div className="flex gap-2">
          {(["all", "makki", "madani"] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all capitalize
                ${filter === f ? "bg-teal-600 text-white border-teal-700" : "bg-white text-gray-500 border-gray-200 hover:border-teal-300"}`}>
              {f === "all" ? "All" : f === "makki" ? "🕋 Makki" : "🕌 Madani"}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="h-24 bg-gray-100 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(s => (
            <Link key={s.number} href={`/quran/${s.number}`}
              className="group bg-white border border-gray-200 rounded-2xl p-4 hover:border-teal-300 hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-50 border border-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-teal-700 font-bold text-sm">{s.number}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-gray-900 text-base group-hover:text-teal-600 transition-colors">{s.englishName}</p>
                    <p className="text-gray-500 text-xs">{s.englishNameTranslation}</p>
                    <p className="text-gray-400 text-xs">{s.numberOfAyahs} Ayahs · {s.revelationType}</p>
                  </div>
                  <p className="text-2xl font-bold text-teal-700 ml-2"
                    style={{ fontFamily: "var(--font-arabic), 'Amiri', serif", direction: "rtl" }}>
                    {s.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* PDF Reader Banner */}
      <div className="mt-10 bg-amber-50 border border-amber-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-amber-900 mb-1">📄 Prefer reading from a PDF?</p>
          <p className="text-amber-700 text-sm">Read the Quran in beautiful 15-line or colour-coded Tajweed PDF format. Jump to any Surah instantly.</p>
        </div>
        <Link href="/quran/pdf-reader" className="bg-amber-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-amber-600 whitespace-nowrap">
          Open PDF Reader →
        </Link>
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📑 Navigate by Juz</h2>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {JUZS.map(j => (
            <Link key={j} href={`/quran/juz/${j}`}
              className="bg-white border border-gray-200 rounded-xl py-3 text-center text-sm font-bold text-gray-700 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 transition-all">
              {j}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}