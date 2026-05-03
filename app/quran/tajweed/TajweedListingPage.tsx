"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Surah {
  number: number; name: string; englishName: string;
  englishNameTranslation: string; numberOfAyahs: number; revelationType: string;
}

export default function TajweedListingPage() {
  const [surahs,  setSurahs]  = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);
  const [search,  setSearch]  = useState("");
  const [filter,  setFilter]  = useState<"all"|"makki"|"madani">("all");

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then(r => r.json()).then(d => { setSurahs(d.data); setLoading(false); })
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
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/quran" className="hover:text-teal-600">Quran</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Tajweed Quran</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">🎨 Colour Coded</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Tajweed Quran</h1>
        <p className="text-3xl text-gray-500 mb-4" style={{ fontFamily: "'Amiri', serif" }}>القرآن بالتجويد الملون</p>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
          Each Tajweed rule is shown in its correct colour. Hover over coloured text to learn which rule applies.
        </p>
        {/* Colour legend strip */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {[["#537FFF","Madd"],["#9400A8","Ikhfa"],["#DD0008","Qalqala"],["#FF7E1E","Ghunna"],["#058C00","Idghaam"],["#26BFFD","Iqlab"],["#D500B7","Ikhfa Shafawi"]].map(([color,name]) => (
            <div key={name} className="flex items-center gap-1.5 text-xs text-gray-600">
              <div className="w-3 h-3 rounded-full" style={{background:color}} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input type="text" placeholder="Search Surah by name or number..."
          value={search} onChange={e => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-amber-500" />
        <div className="flex gap-2">
          {(["all","makki","madani"] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border capitalize transition-all
                ${filter===f?"bg-amber-500 text-white border-amber-600":"bg-white text-gray-500 border-gray-200 hover:border-amber-300"}`}>
              {f==="all"?"All":f==="makki"?"🕋 Makki":"🕌 Madani"}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(12).fill(0).map((_,i) => <div key={i} className="h-24 bg-gray-100 rounded-2xl animate-pulse" />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(s => (
            <Link key={s.number} href={`/quran/tajweed/${s.number}`}
              className="group bg-white border border-gray-200 rounded-2xl p-4 hover:border-amber-300 hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-amber-700 font-bold text-sm">{s.number}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-gray-900 text-base group-hover:text-amber-600 transition-colors">{s.englishName}</p>
                    <p className="text-gray-500 text-xs">{s.englishNameTranslation}</p>
                    <p className="text-gray-400 text-xs">{s.numberOfAyahs} Ayahs · {s.revelationType}</p>
                  </div>
                  <p className="text-2xl font-bold text-amber-700 ml-2" style={{ fontFamily: "'Amiri',serif" }}>{s.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
