"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Edition {
  identifier: string;
  language: string;
  name: string;
  englishName: string;
  format: string;
  type: string;
  direction: string;
}

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  page: number;
  audio?: string;
}

interface SurahData {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
  ayahs: Ayah[];
}

const AUDIO_CDN = "https://cdn.islamic.network/quran/audio/128/ar.alafasy";

// Full language names with flags
const LANG_NAMES: Record<string, { name: string; flag: string }> = {
  ar:    { name: "Arabic",              flag: "🇸🇦" },
  en:    { name: "English",             flag: "🇬🇧" },
  ur:    { name: "Urdu",                flag: "🇵🇰" },
  hi:    { name: "Hindi",               flag: "🇮🇳" },
  bn:    { name: "Bengali",             flag: "🇧🇩" },
  tr:    { name: "Turkish",             flag: "🇹🇷" },
  fr:    { name: "French",              flag: "🇫🇷" },
  de:    { name: "German",              flag: "🇩🇪" },
  es:    { name: "Spanish",             flag: "🇪🇸" },
  id:    { name: "Indonesian",          flag: "🇮🇩" },
  ms:    { name: "Malay",               flag: "🇲🇾" },
  ru:    { name: "Russian",             flag: "🇷🇺" },
  nl:    { name: "Dutch",               flag: "🇳🇱" },
  it:    { name: "Italian",             flag: "🇮🇹" },
  fa:    { name: "Persian (Farsi)",     flag: "🇮🇷" },
  ps:    { name: "Pashto",              flag: "🇦🇫" },
  so:    { name: "Somali",              flag: "🇸🇴" },
  sw:    { name: "Swahili",             flag: "🇰🇪" },
  ha:    { name: "Hausa",               flag: "🇳🇬" },
  sq:    { name: "Albanian",            flag: "🇦🇱" },
  az:    { name: "Azerbaijani",         flag: "🇦🇿" },
  bs:    { name: "Bosnian",             flag: "🇧🇦" },
  bg:    { name: "Bulgarian",           flag: "🇧🇬" },
  cs:    { name: "Czech",               flag: "🇨🇿" },
  dv:    { name: "Divehi (Maldivian)",  flag: "🇲🇻" },
  fi:    { name: "Finnish",             flag: "🇫🇮" },
  gu:    { name: "Gujarati",            flag: "🇮🇳" },
  he:    { name: "Hebrew",              flag: "🇮🇱" },
  ja:    { name: "Japanese",            flag: "🇯🇵" },
  ko:    { name: "Korean",              flag: "🇰🇷" },
  ku:    { name: "Kurdish",             flag: "🏳️" },
  ml:    { name: "Malayalam",           flag: "🇮🇳" },
  mr:    { name: "Marathi",             flag: "🇮🇳" },
  nb:    { name: "Norwegian",           flag: "🇳🇴" },
  pl:    { name: "Polish",              flag: "🇵🇱" },
  pt:    { name: "Portuguese",          flag: "🇵🇹" },
  ro:    { name: "Romanian",            flag: "🇷🇴" },
  sd:    { name: "Sindhi",              flag: "🇵🇰" },
  si:    { name: "Sinhala",             flag: "🇱🇰" },
  sl:    { name: "Slovenian",           flag: "🇸🇮" },
  sr:    { name: "Serbian",             flag: "🇷🇸" },
  ta:    { name: "Tamil",               flag: "🇮🇳" },
  te:    { name: "Telugu",              flag: "🇮🇳" },
  tg:    { name: "Tajik",               flag: "🇹🇯" },
  th:    { name: "Thai",                flag: "🇹🇭" },
  uz:    { name: "Uzbek",               flag: "🇺🇿" },
  zh:    { name: "Chinese",             flag: "🇨🇳" },
};

function getLangDisplay(code: string): { name: string; flag: string } {
  return LANG_NAMES[code] ?? { name: code.toUpperCase(), flag: "🌐" };
}

export default function QuranReader({ surahId }: { surahId: number }) {
  const [surah, setSurah] = useState<SurahData | null>(null);
  const [editions, setEditions] = useState<Edition[]>([]);
  const [selectedEditions, setSelectedEditions] = useState<string[]>(["en.sahih"]);
  const [translations, setTranslations] = useState<Record<string, Ayah[]>>({});
  const [loading, setLoading] = useState(true);
  const [loadingTrans, setLoadingTrans] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState<number | null>(null);
  const [showEditions, setShowEditions] = useState(false);
  const [searchEd, setSearchEd] = useState("");
  const [bookmark, setBookmark] = useState<number | null>(null);
  const [fontSize, setFontSize] = useState(28);
  const [playAll, setPlayAll] = useState(false);
  const [currentAyahPlay, setCurrentAyahPlay] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load Surah + editions
  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surahId}`).then(r => r.json()),
      fetch("https://api.alquran.cloud/v1/edition?format=text&type=translation").then(r => r.json()),
    ]).then(([surahRes, edRes]) => {
      setSurah(surahRes.data);
      setEditions(edRes.data || []);
      setLoading(false);
    }).catch(() => setLoading(false));

    // Load bookmarks
    const saved = localStorage.getItem(`quran-bookmark-${surahId}`);
    if (saved) setBookmark(parseInt(saved));
  }, [surahId]);

  // Load translations when editions change
  useEffect(() => {
    if (selectedEditions.length === 0) return;
    setLoadingTrans(true);
    const edStr = selectedEditions.join(",");
    fetch(`https://api.alquran.cloud/v1/surah/${surahId}/editions/${edStr}`)
      .then(r => r.json())
      .then(d => {
        const newTrans: Record<string, Ayah[]> = {};
        (d.data || []).forEach((ed: { edition: Edition; ayahs: Ayah[] }) => {
          newTrans[ed.edition.identifier] = ed.ayahs;
        });
        setTranslations(newTrans);
        setLoadingTrans(false);
      }).catch(() => setLoadingTrans(false));
  }, [selectedEditions, surahId]);

  const playAudio = (ayahNum: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (audioPlaying === ayahNum) { setAudioPlaying(null); return; }
    const audio = new Audio(`${AUDIO_CDN}/${ayahNum}.mp3`);
    audioRef.current = audio;
    audio.play();
    setAudioPlaying(ayahNum);
    audio.onended = () => {
      setAudioPlaying(null);
      if (playAll && surah) {
        const next = ayahNum + 1;
        if (next <= surah.ayahs[surah.ayahs.length - 1].number) {
          setTimeout(() => playAudio(next), 500);
          setCurrentAyahPlay(next);
        } else {
          setPlayAll(false);
        }
      }
    };
  };

  const toggleEdition = (id: string) => {
    setSelectedEditions(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
    // Keep panel open so user can select multiple — close only on X button
  };

  const saveBookmark = (ayahNum: number) => {
    setBookmark(ayahNum);
    localStorage.setItem(`quran-bookmark-${surahId}`, ayahNum.toString());
  };

  const filteredEditions = editions.filter(e => {
    const langFull = getLangDisplay(e.language).name.toLowerCase();
    return (
      e.englishName.toLowerCase().includes(searchEd.toLowerCase()) ||
      e.language.toLowerCase().includes(searchEd.toLowerCase()) ||
      langFull.includes(searchEd.toLowerCase())
    );
  });

  // Group editions by language
  const byLang: Record<string, Edition[]> = {};
  filteredEditions.forEach(e => {
    if (!byLang[e.language]) byLang[e.language] = [];
    byLang[e.language].push(e);
  });

  if (loading) return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-4">
        {Array(5).fill(0).map((_, i) => <div key={i} className="h-32 bg-gray-100 rounded-2xl animate-pulse" />)}
      </div>
    </div>
  );

  if (!surah) return <div className="text-center py-20 text-gray-500">Surah not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/quran" className="hover:text-teal-600 transition-colors">Quran</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">{surah.englishName}</span>
      </nav>

      {/* Surah Header */}
      <div className="bg-gradient-to-b from-teal-600 to-teal-700 text-white rounded-2xl p-8 text-center mb-6">
        <div className="flex justify-center items-center gap-3 mb-3">
          <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">
            {surah.number}
          </span>
          <p className="text-5xl font-bold" style={{ fontFamily: "var(--font-arabic), 'Amiri', serif" }}>
            {surah.name}
          </p>
        </div>
        <p className="text-2xl font-semibold mb-1">{surah.englishName}</p>
        <p className="text-teal-200 mb-4">{surah.englishNameTranslation}</p>
        <div className="flex justify-center gap-6 text-sm">
          <span className="bg-white/10 px-3 py-1 rounded-full">{surah.numberOfAyahs} Ayahs</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">{surah.revelationType}</span>
        </div>
        {/* Bismillah — only show for Surahs that have it, NOT Surah 1 (it starts with Bismillah as first ayah) and NOT Surah 9 */}
        {surah.number !== 1 && surah.number !== 9 && (
          <p className="text-3xl mt-6 font-bold border-t border-white/20 pt-5"
            style={{ fontFamily: "var(--font-arabic), 'Amiri', serif" }}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        )}
      </div>

      {/* Controls */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6 flex flex-wrap gap-3 items-center justify-between">
        {/* Navigation */}
        <div className="flex gap-2">
          {surah.number > 1 && (
            <Link href={`/quran/${surah.number - 1}`}
              className="px-3 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:border-teal-300 transition-all">
              ← Prev
            </Link>
          )}
          {surah.number < 114 && (
            <Link href={`/quran/${surah.number + 1}`}
              className="px-3 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:border-teal-300 transition-all">
              Next →
            </Link>
          )}
        </div>

        {/* Font size */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Arabic size:</span>
          <button onClick={() => setFontSize(f => Math.max(20, f - 2))} className="w-8 h-8 rounded-lg border border-gray-200 text-sm font-bold hover:border-teal-300">−</button>
          <span className="text-sm font-semibold w-8 text-center">{fontSize}</span>
          <button onClick={() => setFontSize(f => Math.min(48, f + 2))} className="w-8 h-8 rounded-lg border border-gray-200 text-sm font-bold hover:border-teal-300">+</button>
        </div>

        {/* Play all */}
        <button onClick={() => { setPlayAll(true); playAudio(surah.ayahs[0].number); }}
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-xl text-sm font-semibold hover:bg-teal-700 transition-colors">
          🔊 Play All
        </button>

        {/* Translations button */}
        <button onClick={() => setShowEditions(v => !v)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-teal-300 transition-all">
          🌐 Translations ({selectedEditions.length})
        </button>
      </div>

      {/* Editions Panel */}
      {showEditions && (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900">Select Translations</h3>
            <button onClick={() => setShowEditions(false)} className="text-gray-400 hover:text-gray-600 text-xl">×</button>
          </div>
          <input type="text" value={searchEd} onChange={e => setSearchEd(e.target.value)}
            placeholder="Search by language name or translator..."
            className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500" />
          <div className="max-h-80 overflow-y-auto space-y-4">
            {Object.entries(byLang).sort(([a], [b]) => {
              const nameA = getLangDisplay(a).name;
              const nameB = getLangDisplay(b).name;
              return nameA.localeCompare(nameB);
            }).map(([lang, eds]) => {
              const { name, flag } = getLangDisplay(lang);
              return (
              <div key={lang}>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span>{flag}</span><span>{name}</span>
                </p>
                <div className="space-y-1.5">
                  {eds.map(e => (
                    <label key={e.identifier} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2">
                      <input type="checkbox" checked={selectedEditions.includes(e.identifier)}
                        onChange={() => toggleEdition(e.identifier)}
                        className="w-4 h-4 text-teal-600 rounded" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{e.englishName}</p>
                        <p className="text-xs text-gray-500">{e.name}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            );
            })}
          </div>
          {/* Done button */}
          <div className="pt-3 border-t border-gray-100 mt-2 flex justify-between items-center">
            <p className="text-xs text-gray-400">{selectedEditions.length} translation(s) selected</p>
            <button onClick={() => setShowEditions(false)}
              className="px-5 py-2 bg-teal-600 text-white rounded-xl text-sm font-bold hover:bg-teal-700 transition-colors">
              Done ✓
            </button>
          </div>
        </div>
      )}

      {/* Bookmark jump */}
      {bookmark && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex justify-between items-center">
          <span className="text-amber-800 text-sm font-semibold">🔖 Bookmark at Ayah {bookmark}</span>
          <a href={`#ayah-${bookmark}`} className="text-amber-700 text-xs font-bold hover:underline">Jump →</a>
        </div>
      )}

      {/* Ayahs */}
      <div className="space-y-4">
        {surah.ayahs.map((ayah) => {
          return (
          <div key={ayah.numberInSurah} id={`ayah-${ayah.number}`}
            className={`bg-white border rounded-2xl p-5 transition-all ${audioPlaying === ayah.number ? "border-teal-300 bg-teal-50" : "border-gray-200"}`}>

            {/* Ayah number + controls */}
            <div className="flex justify-between items-center mb-4">
              <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                {ayah.numberInSurah}
              </div>
              <div className="flex gap-2">
                <button onClick={() => playAudio(ayah.number)}
                  className={`w-9 h-9 rounded-xl border text-sm transition-all flex items-center justify-center
                    ${audioPlaying === ayah.number ? "bg-teal-600 border-teal-700 text-white" : "border-gray-200 text-gray-500 hover:border-teal-300"}`}>
                  {audioPlaying === ayah.number ? "⏸" : "▶"}
                </button>
                <button onClick={() => saveBookmark(ayah.number)}
                  className={`w-9 h-9 rounded-xl border text-sm transition-all flex items-center justify-center
                    ${bookmark === ayah.number ? "bg-amber-100 border-amber-300 text-amber-700" : "border-gray-200 text-gray-500 hover:border-amber-300"}`}>
                  🔖
                </button>
                <span className="text-xs text-gray-400 self-center">Juz {ayah.juz}</span>
              </div>
            </div>

            {/* Arabic text */}
            <p className="text-right leading-loose text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-arabic), 'Amiri', serif", fontSize: `${fontSize}px`, direction: "rtl", lineHeight: "2.5" }}>
              {ayah.text}
            </p>

            {/* Translations */}
            {loadingTrans ? (
              <div className="h-8 bg-gray-100 rounded animate-pulse" />
            ) : (
              <div className="space-y-3 border-t border-gray-100 pt-4">
                {selectedEditions.map(edId => {
                  const trans = translations[edId];
                  const ayahTrans = trans?.[ayah.numberInSurah - 1];
                  const edInfo = editions.find(e => e.identifier === edId);
                  if (!ayahTrans) return null;
                  const isRtl = edInfo?.direction === "rtl";
                  return (
                    <div key={edId}>
                      <p className="text-xs font-bold text-teal-600 mb-1">{edInfo?.englishName}</p>
                      <p className={`text-sm text-gray-700 leading-relaxed ${isRtl ? "text-right" : ""}`}
                        style={isRtl ? { direction: "rtl", fontFamily: "var(--font-arabic), 'Amiri', serif", lineHeight: "2.2" } : {}}>
                        {ayahTrans.text}
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

      {/* Bottom navigation */}
      <div className="flex justify-between mt-8">
        {surah.number > 1 ? (
          <Link href={`/quran/${surah.number - 1}`}
            className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-teal-300 transition-all">
            ← Previous Surah
          </Link>
        ) : <div />}
        <Link href="/quran" className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-all">
          All Surahs
        </Link>
        {surah.number < 114 ? (
          <Link href={`/quran/${surah.number + 1}`}
            className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-teal-300 transition-all">
            Next Surah →
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}