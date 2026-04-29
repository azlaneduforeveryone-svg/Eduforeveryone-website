"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Edition {
  identifier: string; language: string; name: string;
  englishName: string; format: string; type: string; direction: string;
}
interface Ayah {
  number: number; text: string; numberInSurah: number; juz: number; page: number;
}
interface SurahData {
  number: number; name: string; englishName: string;
  englishNameTranslation: string; numberOfAyahs: number;
  revelationType: string; ayahs: Ayah[];
}

const AUDIO_CDN = "https://cdn.islamic.network/quran/audio/128/ar.alafasy";

// ── Language names ───────────────────────────────────────────────────────────
const LANG_NAMES: Record<string, { name: string; flag: string }> = {
  ar:{name:"Arabic",flag:"🇸🇦"},en:{name:"English",flag:"🇬🇧"},ur:{name:"Urdu",flag:"🇵🇰"},
  hi:{name:"Hindi",flag:"🇮🇳"},bn:{name:"Bengali",flag:"🇧🇩"},tr:{name:"Turkish",flag:"🇹🇷"},
  fr:{name:"French",flag:"🇫🇷"},de:{name:"German",flag:"🇩🇪"},es:{name:"Spanish",flag:"🇪🇸"},
  id:{name:"Indonesian",flag:"🇮🇩"},ms:{name:"Malay",flag:"🇲🇾"},ru:{name:"Russian",flag:"🇷🇺"},
  nl:{name:"Dutch",flag:"🇳🇱"},it:{name:"Italian",flag:"🇮🇹"},fa:{name:"Persian",flag:"🇮🇷"},
  ps:{name:"Pashto",flag:"🇦🇫"},so:{name:"Somali",flag:"🇸🇴"},sw:{name:"Swahili",flag:"🇰🇪"},
  ha:{name:"Hausa",flag:"🇳🇬"},sq:{name:"Albanian",flag:"🇦🇱"},az:{name:"Azerbaijani",flag:"🇦🇿"},
  bs:{name:"Bosnian",flag:"🇧🇦"},bg:{name:"Bulgarian",flag:"🇧🇬"},cs:{name:"Czech",flag:"🇨🇿"},
  fi:{name:"Finnish",flag:"🇫🇮"},gu:{name:"Gujarati",flag:"🇮🇳"},ja:{name:"Japanese",flag:"🇯🇵"},
  ko:{name:"Korean",flag:"🇰🇷"},ml:{name:"Malayalam",flag:"🇮🇳"},mr:{name:"Marathi",flag:"🇮🇳"},
  pl:{name:"Polish",flag:"🇵🇱"},pt:{name:"Portuguese",flag:"🇵🇹"},ro:{name:"Romanian",flag:"🇷🇴"},
  sd:{name:"Sindhi",flag:"🇵🇰"},si:{name:"Sinhala",flag:"🇱🇰"},ta:{name:"Tamil",flag:"🇮🇳"},
  te:{name:"Telugu",flag:"🇮🇳"},th:{name:"Thai",flag:"🇹🇭"},uz:{name:"Uzbek",flag:"🇺🇿"},
  zh:{name:"Chinese",flag:"🇨🇳"},ku:{name:"Kurdish",flag:"🏳️"},dv:{name:"Divehi",flag:"🇲🇻"},
};
const getLang = (code: string) => LANG_NAMES[code] ?? { name: code.toUpperCase(), flag: "🌐" };

// ── Strip Bismillah from Ayah 1 text ─────────────────────────────────────────
// Removes all diacritics then checks if text starts with Bismillah
function stripBismillah(text: string): string {
  // Remove Arabic diacritics (tashkeel)
  const removeDiacritics = (s: string) =>
    s.replace(/[\u064B-\u065F\u0670\u0671\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/g, "")
     .replace(/\u0627\u0644/g, "ال")  // normalize alef
     .trim();

  const normalized = removeDiacritics(text);
  // Bismillah without diacritics — multiple possible forms
  const bismillahPatterns = [
    "بسم الله الرحمن الرحيم",
    "بسم اللّه الرّحمن الرّحيم",
    "بسم اللہ الرحمن الرحیم",
  ];

  for (const pattern of bismillahPatterns) {
    if (normalized.startsWith(pattern)) {
      // Count original chars to skip (including diacritics)
      let skip = 0, matched = 0;
      while (matched < pattern.length && skip < text.length) {
        const ch = removeDiacritics(text[skip]);
        if (ch.length > 0) matched += ch.length;
        skip++;
      }
      // Also skip any trailing space/diacritics
      while (skip < text.length && (text[skip] === " " || text[skip] === "\u00A0")) skip++;
      const result = text.slice(skip).trim();
      if (result.length > 0) return result;
    }
  }

  // Fallback: if text starts with ب and contains الرحيم in first 80 chars, strip up to and including it
  if (text.trimStart().startsWith("ب") || text.trimStart().startsWith("بِ") || text.trimStart().startsWith("بِسۡ")) {
    // Find end of Bismillah by looking for الرحيم followed by space
    const idx = text.search(/ر[\u064B-\u065F]*ح[\u064B-\u065F]*[يی][\u064B-\u065F]*م[\u064B-\u065F]*/);
    if (idx !== -1 && idx < 80) {
      // Find end of that word
      let end = idx;
      while (end < text.length && text[end] !== " " && text[end] !== "\u00A0") end++;
      const result = text.slice(end).trim();
      if (result.length > 5) return result;
    }
  }

  return text;
}

export default function QuranReader({ surahId }: { surahId: number }) {
  const [surah,           setSurah]           = useState<SurahData | null>(null);
  const [editions,        setEditions]        = useState<Edition[]>([]);
  const [selectedEd,      setSelectedEd]      = useState<string[]>([]);
  const [translations,    setTranslations]    = useState<Record<string, Ayah[]>>({});
  const [loading,         setLoading]         = useState(true);
  const [loadingTrans,    setLoadingTrans]    = useState(false);
  const [audioPlaying,    setAudioPlaying]    = useState<number | null>(null);
  const [showEditions,    setShowEditions]    = useState(false);
  const [searchEd,        setSearchEd]        = useState("");
  const [bookmark,        setBookmark]        = useState<number | null>(null);
  const [arabicSize,      setArabicSize]      = useState(28);
  const [transSize,       setTransSize]       = useState(14);
  const [darkMode,        setDarkMode]        = useState(false);
  const [playAll,         setPlayAll]         = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ── Load Surah + Editions ─────────────────────────────────────────────────
  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surahId}`).then(r => r.json()),
      fetch("https://api.alquran.cloud/v1/edition?format=text&type=translation").then(r => r.json()),
    ]).then(([s, e]) => { setSurah(s.data); setEditions(e.data || []); setLoading(false); })
      .catch(() => setLoading(false));
    const saved = localStorage.getItem(`qb-${surahId}`);
    if (saved) setBookmark(parseInt(saved));
  }, [surahId]);

  // ── Load Translations ──────────────────────────────────────────────────────
  useEffect(() => {
    if (selectedEd.length === 0) { setTranslations({}); return; }
    setLoadingTrans(true);
    fetch(`https://api.alquran.cloud/v1/surah/${surahId}/editions/${selectedEd.join(",")}`)
      .then(r => r.json())
      .then(d => {
        const t: Record<string, Ayah[]> = {};
        (d.data || []).forEach((ed: { edition: Edition; ayahs: Ayah[] }) => {
          t[ed.edition.identifier] = ed.ayahs;
        });
        setTranslations(t); setLoadingTrans(false);
      }).catch(() => setLoadingTrans(false));
  }, [selectedEd, surahId]);

  // ── Audio ──────────────────────────────────────────────────────────────────
  const playAudio = (ayahNum: number) => {
    audioRef.current?.pause(); audioRef.current = null;
    if (audioPlaying === ayahNum) { setAudioPlaying(null); return; }
    const audio = new Audio(`${AUDIO_CDN}/${ayahNum}.mp3`);
    audioRef.current = audio; audio.play(); setAudioPlaying(ayahNum);
    audio.onended = () => {
      setAudioPlaying(null);
      if (playAll && surah) {
        const next = ayahNum + 1;
        if (next <= surah.ayahs[surah.ayahs.length - 1].number) {
          setTimeout(() => playAudio(next), 500);
        } else setPlayAll(false);
      }
    };
  };

  const toggleEd = (id: string) => setSelectedEd(p => p.includes(id) ? p.filter(e => e !== id) : [...p, id]);
  const saveBookmark = (n: number) => { setBookmark(n); localStorage.setItem(`qb-${surahId}`, n.toString()); };

  // ── Filter + group editions ────────────────────────────────────────────────
  const filtered = editions.filter(e => {
    const l = getLang(e.language).name.toLowerCase();
    const q = searchEd.toLowerCase();
    return e.englishName.toLowerCase().includes(q) || e.language.includes(q) || l.includes(q);
  });
  const byLang: Record<string, Edition[]> = {};
  filtered.forEach(e => { if (!byLang[e.language]) byLang[e.language] = []; byLang[e.language].push(e); });

  // ── Theme ──────────────────────────────────────────────────────────────────
  const bg      = darkMode ? "bg-gray-950" : "bg-white";
  const bgPage  = darkMode ? "bg-gray-900" : "bg-gray-50";
  const border  = darkMode ? "border-gray-800" : "border-gray-200";
  const text    = darkMode ? "text-gray-100" : "text-gray-900";
  const sub     = darkMode ? "text-gray-400" : "text-gray-500";
  const cardBg  = darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";
  const inputCls = darkMode
    ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500 focus:ring-teal-500"
    : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-teal-500";

  if (loading) return (
    <div className={`${bgPage} min-h-screen`}>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-4">
        {Array(5).fill(0).map((_, i) => <div key={i} className="h-32 rounded-2xl animate-pulse bg-gray-200" />)}
      </div>
    </div>
  );
  if (!surah) return <div className="text-center py-20 text-gray-500">Surah not found</div>;

  return (
    <div className={`${bgPage} min-h-screen`}>
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className={`flex items-center gap-2 text-sm ${sub} mb-6`}>
          <Link href="/quran" className="hover:text-teal-500">Quran</Link>
          <span>/</span>
          <span className={text}>{surah.englishName}</span>
        </nav>

        {/* ── Surah Header ── */}
        <div className="bg-gradient-to-b from-teal-600 to-teal-700 text-white rounded-2xl p-8 text-center mb-5">
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">
              {surah.number}
            </span>
            <p className="text-5xl font-bold leading-normal"
              style={{ fontFamily: "var(--font-arabic),'Amiri',serif" }}>
              {surah.name}
            </p>
          </div>
          <p className="text-2xl font-semibold mb-1">{surah.englishName}</p>
          <p className="text-teal-200 mb-4">{surah.englishNameTranslation}</p>
          <div className="flex justify-center gap-4 text-sm mb-0">
            <span className="bg-white/10 px-3 py-1 rounded-full">{surah.numberOfAyahs} Ayahs</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">{surah.revelationType}</span>
          </div>
          {/* Bismillah — all Surahs except At-Tawbah (9) */}
          {surah.number !== 9 && (
            <p className="text-3xl mt-5 pt-5 border-t border-white/20 font-bold"
              style={{ fontFamily: "var(--font-arabic),'Amiri',serif" }}>
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          )}
        </div>

        {/* ── Controls bar ── */}
        <div className={`${cardBg} border rounded-2xl p-4 mb-5 flex flex-wrap gap-3 items-center justify-between`}>
          {/* Prev/Next */}
          <div className="flex gap-2">
            {surah.number > 1 && (
              <Link href={`/quran/${surah.number - 1}`}
                className={`px-3 py-2 rounded-xl border ${border} text-sm font-semibold ${sub} hover:border-teal-400 transition-all`}>
                ← Prev
              </Link>
            )}
            {surah.number < 114 && (
              <Link href={`/quran/${surah.number + 1}`}
                className={`px-3 py-2 rounded-xl border ${border} text-sm font-semibold ${sub} hover:border-teal-400 transition-all`}>
                Next →
              </Link>
            )}
          </div>

          {/* Arabic font size */}
          <div className="flex items-center gap-1.5">
            <span className={`text-xs ${sub}`}>Arabic:</span>
            <button onClick={() => setArabicSize(s => Math.max(18, s-2))}
              className={`w-7 h-7 rounded-lg border ${border} text-sm font-bold ${sub} hover:border-teal-400`}>−</button>
            <span className={`text-xs font-semibold w-6 text-center ${text}`}>{arabicSize}</span>
            <button onClick={() => setArabicSize(s => Math.min(52, s+2))}
              className={`w-7 h-7 rounded-lg border ${border} text-sm font-bold ${sub} hover:border-teal-400`}>+</button>
          </div>

          {/* Translation font size */}
          <div className="flex items-center gap-1.5">
            <span className={`text-xs ${sub}`}>Trans:</span>
            <button onClick={() => setTransSize(s => Math.max(10, s-1))}
              className={`w-7 h-7 rounded-lg border ${border} text-sm font-bold ${sub} hover:border-teal-400`}>−</button>
            <span className={`text-xs font-semibold w-6 text-center ${text}`}>{transSize}</span>
            <button onClick={() => setTransSize(s => Math.min(22, s+1))}
              className={`w-7 h-7 rounded-lg border ${border} text-sm font-bold ${sub} hover:border-teal-400`}>+</button>
          </div>

          {/* Play all */}
          <button onClick={() => { setPlayAll(true); playAudio(surah.ayahs[0].number); }}
            className="flex items-center gap-1.5 px-3 py-2 bg-teal-600 text-white rounded-xl text-sm font-semibold hover:bg-teal-700">
            🔊 Play
          </button>

          {/* Dark mode */}
          <button onClick={() => setDarkMode(v => !v)}
            className={`px-3 py-2 border ${border} rounded-xl text-sm font-semibold ${sub} hover:border-teal-400`}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* ── Quick Language Buttons ── */}
        <div className={`${cardBg} border ${border} rounded-2xl p-4 mb-5`}>
          <p className={`text-xs font-bold ${sub} uppercase tracking-wider mb-3`}>🌐 Quick Translation</p>
          <div className="flex flex-wrap gap-2">
            {[
              { id:"en.sahih",      label:"🇬🇧 English",  },
              { id:"ur.jalandhry",  label:"🇵🇰 Urdu",     },
              { id:"hi.hindi",      label:"🇮🇳 Hindi",    },
              { id:"fa.ayati",      label:"🇮🇷 Farsi",    },
            ].map(l => (
              <button key={l.id} onClick={() => toggleEd(l.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all
                  ${selectedEd.includes(l.id)
                    ? "bg-teal-600 text-white border-teal-700"
                    : `${darkMode ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-white border-gray-200 text-gray-600"} hover:border-teal-400`}`}>
                {l.label}
              </button>
            ))}
            <button onClick={() => setShowEditions(v => !v)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all
                ${showEditions
                  ? "bg-gray-800 text-white border-gray-900"
                  : `${darkMode ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-white border-gray-200 text-gray-600"} hover:border-teal-400`}`}>
              🌐 More {selectedEd.filter(e => !["en.sahih","ur.jalandhry","hi.hindi","fa.ayati"].includes(e)).length > 0 &&
                <span className="ml-1 bg-teal-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  +{selectedEd.filter(e => !["en.sahih","ur.jalandhry","hi.hindi","fa.ayati"].includes(e)).length}
                </span>}
            </button>
            {selectedEd.length > 0 && (
              <button onClick={() => setSelectedEd([])}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all
                  ${darkMode ? "bg-red-900/30 border-red-800 text-red-400" : "bg-red-50 border-red-200 text-red-600"} hover:opacity-80`}>
                ✕ Clear All
              </button>
            )}
          </div>
        </div>

        {/* Hidden Translations button placeholder - keep for reference */}
        <div className="hidden">
          {/* Translations */}
          <button onClick={() => setShowEditions(v => !v)}
            className={`flex items-center gap-1.5 px-3 py-2 border ${border} rounded-xl text-sm font-semibold ${sub} hover:border-teal-400`}>
            🌐 Translations {selectedEd.length > 0 && <span className="bg-teal-600 text-white text-xs px-1.5 py-0.5 rounded-full">{selectedEd.length}</span>}
          </button>
        </div>

        {/* ── Translations Panel ── */}
        {showEditions && (
          <div className={`${cardBg} border ${border} rounded-2xl p-5 mb-5`}>
            <div className="flex justify-between items-center mb-3">
              <h3 className={`font-bold ${text}`}>Select Translations</h3>
              <button onClick={() => setShowEditions(false)} className={`${sub} hover:${text} text-xl`}>×</button>
            </div>
            <input type="text" value={searchEd} onChange={e => setSearchEd(e.target.value)}
              placeholder="Search by language or translator..."
              className={`w-full border rounded-xl px-4 py-2 text-sm mb-4 focus:outline-none focus:ring-2 ${inputCls}`} />
            <div className="max-h-72 overflow-y-auto space-y-4">
              {Object.entries(byLang).sort(([a],[b]) => getLang(a).name.localeCompare(getLang(b).name)).map(([lang, eds]) => {
                const { name, flag } = getLang(lang);
                return (
                  <div key={lang}>
                    <p className={`text-xs font-bold ${sub} uppercase tracking-wider mb-2 flex items-center gap-1.5`}>
                      <span>{flag}</span><span>{name}</span>
                    </p>
                    <div className="space-y-1">
                      {eds.map(e => (
                        <label key={e.identifier} className={`flex items-center gap-3 cursor-pointer hover:bg-teal-50 ${darkMode?"hover:bg-teal-900/20":""} rounded-lg p-2`}>
                          <input type="checkbox" checked={selectedEd.includes(e.identifier)}
                            onChange={() => toggleEd(e.identifier)} className="w-4 h-4 text-teal-600 rounded" />
                          <div>
                            <p className={`text-sm font-semibold ${text}`}>{e.englishName}</p>
                            <p className={`text-xs ${sub}`}>{e.name}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`pt-3 mt-2 border-t ${border} flex justify-between items-center`}>
              <p className={`text-xs ${sub}`}>{selectedEd.length} translation(s) selected</p>
              <button onClick={() => setShowEditions(false)}
                className="px-5 py-2 bg-teal-600 text-white rounded-xl text-sm font-bold hover:bg-teal-700">
                Done ✓
              </button>
            </div>
          </div>
        )}

        {/* ── Bookmark jump ── */}
        {bookmark && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex justify-between items-center">
            <span className="text-amber-800 text-sm font-semibold">🔖 Bookmark at Ayah {bookmark}</span>
            <a href={`#ayah-${bookmark}`} className="text-amber-700 text-xs font-bold hover:underline">Jump →</a>
          </div>
        )}

        {/* ── Ayahs ── */}
        <div className="space-y-4">
          {surah.ayahs.map(ayah => {
            // Strip Bismillah from Ayah 1 for all Surahs except Al-Fatiha (1) and At-Tawbah (9)
            const shouldStrip = surah.number !== 1 && surah.number !== 9 && ayah.numberInSurah === 1;
            const displayText = shouldStrip ? stripBismillah(ayah.text) : ayah.text;

            return (
              <div key={ayah.numberInSurah} id={`ayah-${ayah.number}`}
                className={`${cardBg} border ${audioPlaying === ayah.number ? "border-teal-400" : border} rounded-2xl p-5 transition-all`}>

                {/* Ayah controls row */}
                <div className="flex justify-between items-center mb-4">
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {ayah.numberInSurah}
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => playAudio(ayah.number)}
                      className={`w-9 h-9 rounded-xl border text-sm flex items-center justify-center transition-all
                        ${audioPlaying === ayah.number ? "bg-teal-600 border-teal-700 text-white" : `border ${border} ${sub} hover:border-teal-400`}`}>
                      {audioPlaying === ayah.number ? "⏸" : "▶"}
                    </button>
                    <button onClick={() => saveBookmark(ayah.number)}
                      className={`w-9 h-9 rounded-xl border text-sm flex items-center justify-center transition-all
                        ${bookmark === ayah.number ? "bg-amber-100 border-amber-300 text-amber-700" : `border ${border} ${sub} hover:border-amber-300`}`}>
                      🔖
                    </button>
                    <span className={`text-xs ${sub}`}>Juz {ayah.juz}</span>
                  </div>
                </div>

                {/* Arabic text */}
                <p className="text-right mb-4"
                  style={{ fontFamily:"var(--font-arabic),'Amiri',serif", fontSize:`${arabicSize}px`, direction:"rtl", lineHeight:"2.6", color: darkMode?"#f0fdf4":"#111827" }}>
                  {displayText}
                </p>

                {/* Translations */}
                {selectedEd.length > 0 && (
                  <div className={`border-t ${border} pt-4 space-y-4`}>
                    {loadingTrans ? (
                      <div className={`h-8 ${darkMode?"bg-gray-800":"bg-gray-100"} rounded animate-pulse`} />
                    ) : selectedEd.map(edId => {
                      const trans = translations[edId];
                      const t = trans?.[ayah.numberInSurah - 1];
                      const edInfo = editions.find(e => e.identifier === edId);
                      if (!t) return null;
                      const isRtl = edInfo?.direction === "rtl";
                      return (
                        <div key={edId}>
                          <p className="text-xs font-bold text-teal-600 mb-1.5">
                            {getLang(edInfo?.language || "").flag} {edInfo?.englishName}
                          </p>
                          <p className={`${sub} leading-relaxed ${isRtl ? "text-right" : ""}`}
                            style={{ fontSize:`${transSize}px`, ...(isRtl ? { direction:"rtl", fontFamily:"var(--font-arabic),'Amiri',serif", lineHeight:"2.2" } : {}) }}>
                            {t.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Bottom nav ── */}
        <div className="flex justify-between mt-8">
          {surah.number > 1
            ? <Link href={`/quran/${surah.number - 1}`} className={`px-5 py-3 ${bg} border ${border} rounded-xl font-semibold ${sub} hover:border-teal-400`}>← Previous</Link>
            : <div />}
          <Link href="/quran" className="px-5 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700">All Surahs</Link>
          {surah.number < 114
            ? <Link href={`/quran/${surah.number + 1}`} className={`px-5 py-3 ${bg} border ${border} rounded-xl font-semibold ${sub} hover:border-teal-400`}>Next →</Link>
            : <div />}
        </div>
      </div>
    </div>
  );
}