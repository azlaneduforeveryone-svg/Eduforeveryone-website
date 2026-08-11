"use client";

import { useState, useEffect } from "react";
import {
  DUAS_DATABASE,
  DUA_CATEGORIES,
  SUPPORTED_LANGUAGES,
  LanguageCode,
  DuaCategory,
} from "@/lib/duasData";
import { HUMAN_RECITERS } from "@/lib/quranAudio";
import DuaCard from "@/components/duas/DuaCard";
import PdfDuaViewer from "@/components/duas/PdfDuaViewer";
import Link from "next/link";

export default function DuasPage() {
  const [selectedCategory, setSelectedCategory] = useState<DuaCategory>("all");
  const [currentLang, setCurrentLang] = useState<LanguageCode>("ur");
  const [globalReciterId, setGlobalReciterId] = useState<string>("alafasy");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isHifzMode, setIsHifzMode] = useState(false);
  const [hifzHideArabic, setHifzHideArabic] = useState(false);
  const [hifzHideTranslation, setHifzHideTranslation] = useState(true);

  // Load saved favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("edu_duas_favorites");
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load favorites:", e);
    }
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const updated = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      try {
        localStorage.setItem("edu_duas_favorites", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save favorites:", e);
      }
      return updated;
    });
  };

  // Filter logic
  const filteredDuas = DUAS_DATABASE.filter(dua => {
    // Category check
    if (selectedCategory === "favorites") {
      if (!favorites.includes(dua.id)) return false;
    } else if (selectedCategory !== "all" && dua.category !== selectedCategory) {
      return false;
    }

    // Search query check
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitleEn = dua.title.en.toLowerCase().includes(q);
      const matchTitleUr = dua.title.ur.toLowerCase().includes(q);
      const matchArabic = dua.arabic.includes(q);
      const matchTrans = dua.transliteration.toLowerCase().includes(q);
      const matchSource = dua.source.toLowerCase().includes(q);
      const matchTranslation = (dua.translations[currentLang] || dua.translations.en).toLowerCase().includes(q);

      return matchTitleEn || matchTitleUr || matchArabic || matchTrans || matchSource || matchTranslation;
    }

    return true;
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Duas & Azkar with Human Recitations",
            url: "https://eduforeveryone.com/duas",
            description:
              "Read, listen to human voice recitations, and memorize 40 Rabbana Duas, Morning & Evening Azkar with translations in Urdu, English, Hindi, Turkish, Spanish, French.",
            isPartOf: {
              "@type": "WebSite",
              name: "EduForEveryone",
              url: "https://eduforeveryone.com",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-teal-50/40 via-white to-gray-50 pb-20">
        
        {/* Navigation Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <Link href="/islamic-studies" className="hover:text-teal-600 transition-colors">
              ☪ Islamic Studies
            </Link>
            <span>/</span>
            <span className="text-teal-700 font-semibold">Duas & Azkar</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 text-teal-800 text-xs font-bold mb-4">
            <span>🤲</span> Duas & Azkar Supplications
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mb-2 tracking-tight">
            Duas & Azkar <span className="text-teal-600">الأدعية والأذكار</span>
          </h1>
          <p className="text-2xl text-gray-500 font-arabic mb-4" style={{ fontFamily: "'Amiri', serif" }}>
            وَمَن يُعَظِّمْ شَعَائِرَ اللَّهِ فَإِنَّهَا مِن تَقْوَى الْقُلُوبِ
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Listen to <strong>100% real human voice recitations</strong> (Sheikh Mishary Alafasy, Sudais & Ghamdi), learn 40 Rabbana Duas & daily Azkar with multi-language translations, digital Tasbeeh counter, and memorization helper.
          </p>
        </div>

        {/* Multi-Language Selector Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-3 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
              <span>🌐</span> Translation Language:
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {SUPPORTED_LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    currentLang === lang.code
                      ? "bg-teal-600 text-white shadow-sm scale-105"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Workspace Controls: Search, Category Filters & Memorization Toggle */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 space-y-4">
          
          {/* Top Bar: Search + Hifz Mode Toggle + Reciter Selector */}
          <div className="grid md:grid-cols-12 gap-4 items-center">
            
            {/* Search Bar */}
            <div className="md:col-span-6 relative">
              <input
                type="text"
                placeholder="Search Dua by title, verse, Arabic, or translation..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Global Human Reciter Selector */}
            <div className="md:col-span-3">
              <div className="bg-white border border-gray-200 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-sm">
                <span className="text-sm">🎙️</span>
                <div className="flex-1">
                  <p className="text-[10px] uppercase font-bold text-gray-400">Default Reciter</p>
                  <select
                    value={globalReciterId}
                    onChange={e => setGlobalReciterId(e.target.value)}
                    className="w-full text-xs font-bold text-gray-800 bg-transparent outline-none cursor-pointer"
                  >
                    {HUMAN_RECITERS.map(r => (
                      <option key={r.id} value={r.id}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Memorization Mode Toggle */}
            <div className="md:col-span-3">
              <button
                onClick={() => setIsHifzMode(v => !v)}
                className={`w-full py-3 px-4 rounded-2xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 border ${
                  isHifzMode
                    ? "bg-amber-500 text-white border-amber-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-amber-50 hover:text-amber-700"
                }`}
              >
                <span>🧠</span>
                <span>{isHifzMode ? "Hifz Mode Active" : "Enable Memorization (Hifz) Mode"}</span>
              </button>
            </div>

          </div>

          {/* Sub-bar if Memorization Mode is active */}
          {isHifzMode && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-amber-900 font-bold">
                <span>🎯 Hifz Memorization Helper:</span>
                <span>Self-test your memory by hiding text blocks!</span>
              </div>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1.5 cursor-pointer font-semibold text-amber-900">
                  <input
                    type="checkbox"
                    checked={hifzHideArabic}
                    onChange={e => setHifzHideArabic(e.target.checked)}
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span>Hide Arabic</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer font-semibold text-amber-900">
                  <input
                    type="checkbox"
                    checked={hifzHideTranslation}
                    onChange={e => setHifzHideTranslation(e.target.checked)}
                    className="rounded text-amber-600 focus:ring-amber-500"
                  />
                  <span>Hide Translation</span>
                </label>
              </div>
            </div>
          )}

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {DUA_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  selectedCategory === cat.id
                    ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{currentLang === "ur" ? cat.titleUr : cat.titleEn}</span>
                {cat.id === "favorites" && favorites.length > 0 && (
                  <span className="ml-1 bg-amber-400 text-gray-900 px-1.5 py-0.5 rounded-full text-[10px]">
                    {favorites.length}
                  </span>
                )}
              </button>
            ))}
          </div>

        </div>

        {/* Content Area: Grid of Dua Cards or PDF Viewer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {selectedCategory === "pdf" ? (
            <PdfDuaViewer />
          ) : filteredDuas.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredDuas.map(dua => (
                <DuaCard
                  key={dua.id}
                  dua={dua}
                  currentLang={currentLang}
                  isFavorite={favorites.includes(dua.id)}
                  onToggleFavorite={toggleFavorite}
                  hifzHideArabic={isHifzMode && hifzHideArabic}
                  hifzHideTranslation={isHifzMode && hifzHideTranslation}
                  globalReciterId={globalReciterId}
                  onReciterChange={setGlobalReciterId}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-3xl p-12 text-center max-w-lg mx-auto my-12">
              <span className="text-5xl mb-4 inline-block">🔍</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Duas Found</h3>
              <p className="text-gray-500 text-sm mb-6">
                {selectedCategory === "favorites"
                  ? "You have not saved any favorite Duas yet. Click the star icon on any Dua to save it here!"
                  : "No supplication matches your search filter. Try clearing the search query."}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-5 py-2.5 bg-teal-600 text-white rounded-xl font-bold text-xs hover:bg-teal-700 transition-all"
              >
                Clear Search & Show All
              </button>
            </div>
          )}
        </div>

      </div>
    </>
  );
}
