"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ── Tajweed Rules Map ─────────────────────────────────────────────────────────
const TAJWEED_RULES: Record<string, { color: string; name: string; nameAr: string; desc: string }> = {
  ham_wasl:           { color:"#aaaaaa", name:"Hamzat ul Wasl",        nameAr:"همزة الوصل",     desc:"Silent Hamza — not pronounced when preceded by another word" },
  laam_shamsiyah:     { color:"#aaaaaa", name:"Laam Shamsiyah",        nameAr:"اللام الشمسية",  desc:"The Laam assimilates into the following sun letter" },
  madda_normal:       { color:"#537FFF", name:"Madd Normal (2 counts)", nameAr:"المد الطبيعي",   desc:"Natural prolongation of 2 counts on Alif, Waw or Ya" },
  madda_permissible:  { color:"#4050FF", name:"Madd Ja'iz (2-4-6)",    nameAr:"المد الجائز",    desc:"Permissible prolongation of 2, 4 or 6 counts before Hamza" },
  madda_necessary:    { color:"#000EBC", name:"Madd Lazim (6 counts)",  nameAr:"المد اللازم",    desc:"Necessary prolongation — always 6 counts before Shaddah or Sukoon" },
  madda_obligatory:   { color:"#2144C1", name:"Madd Wajib (4-5)",      nameAr:"المد الواجب",    desc:"Obligatory prolongation of 4-5 counts before Hamza in same word" },
  qalaqalah:          { color:"#DD0008", name:"Qalqala",               nameAr:"القلقلة",        desc:"Echoing bounce on ق ط ب ج د when they have Sukoon" },
  ikhfa_shafawi:      { color:"#D500B7", name:"Ikhfa Shafawi",         nameAr:"الإخفاء الشفوي", desc:"Meem Sakin followed by Ba — light nasal sound for 2 counts" },
  ikhfa:              { color:"#9400A8", name:"Ikhfa",                  nameAr:"الإخفاء",        desc:"Noon Sakin or Tanween before 15 letters — hidden nasal sound for 2 counts" },
  idghaam_shafawi:    { color:"#058C00", name:"Idghaam Shafawi",       nameAr:"الإدغام الشفوي", desc:"Meem Sakin followed by another Meem — merge with ghunna for 2 counts" },
  idghaam_ghunnah:    { color:"#209000", name:"Idghaam with Ghunna",   nameAr:"الإدغام بغنة",   desc:"Noon Sakin or Tanween before ي ن م و — merges with nasal sound" },
  idghaam_wo_ghunnah: { color:"#33B800", name:"Idghaam without Ghunna",nameAr:"الإدغام بلا غنة", desc:"Noon Sakin or Tanween before ل ر — merges without nasal sound" },
  iqlab:              { color:"#26BFFD", name:"Iqlab",                  nameAr:"الإقلاب",        desc:"Noon Sakin or Tanween before Ba — converts to Meem with ghunna" },
  ghunnah:            { color:"#FF7E1E", name:"Ghunna",                 nameAr:"الغنة",          desc:"Nasal sound on Noon or Meem with Shaddah for 2 counts" },
};

// Inject global tajweed CSS
const TAJWEED_CSS = Object.entries(TAJWEED_RULES)
  .map(([cls, r]) => `tajweed.${cls} { color: ${r.color}; cursor: pointer; }`)
  .join("\n");

interface Ayah {
  id: number;
  verse_number: number;
  text_uthmani_tajweed: string;
  juz_number?: number;
}

interface Surah {
  id: number;
  name_arabic: string;
  name_simple: string;
  translated_name: { name: string };
  verses_count: number;
  revelation_place: string;
}

interface RulePopup {
  rule: string;
  x: number;
  y: number;
}

export default function TajweedQuranReader({ surahId }: { surahId: number }) {
  const [surah,      setSurah]      = useState<Surah | null>(null);
  const [ayahs,      setAyahs]      = useState<Ayah[]>([]);
  const [loading,    setLoading]    = useState(true);
  const [fontSize,   setFontSize]   = useState(28);
  const [showGuide,  setShowGuide]  = useState(false);
  const [darkMode,   setDarkMode]   = useState(false);
  const [popup,      setPopup]      = useState<RulePopup | null>(null);
  const [audioPlaying, setAudioPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const AUDIO_CDN = "https://cdn.islamic.network/quran/audio/128/ar.alafasy";

  useEffect(() => {
    setLoading(true); setSurah(null); setAyahs([]);
    // Quran.com API — returns proper tajweed HTML
    Promise.all([
      fetch(`https://api.qurancdn.com/api/qdc/chapters/${surahId}?language=en`).then(r => r.json()),
      fetch(`https://api.qurancdn.com/api/qdc/verses/by_chapter/${surahId}?words=false&per_page=286&fields=text_uthmani_tajweed,juz_number&page=1`).then(r => r.json()),
    ]).then(([chapRes, versesRes]) => {
      setSurah(chapRes.chapter || null);
      setAyahs(versesRes.verses || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [surahId]);

  // Handle click on tajweed-coloured text
  const handleTajweedClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const tajweedEl = target.closest("tajweed") as HTMLElement | null;
    if (tajweedEl) {
      const cls = tajweedEl.className;
      if (TAJWEED_RULES[cls]) {
        setPopup({ rule: cls, x: e.clientX, y: e.clientY });
      }
    } else {
      setPopup(null);
    }
  };

  const playAudio = (ayahNum: number) => {
    audioRef.current?.pause(); audioRef.current = null;
    if (audioPlaying === ayahNum) { setAudioPlaying(null); return; }
    const audio = new Audio(`${AUDIO_CDN}/${ayahNum}.mp3`);
    audioRef.current = audio; audio.play(); setAudioPlaying(ayahNum);
    audio.onended = () => setAudioPlaying(null);
  };

  const bg   = darkMode ? "bg-gray-950 min-h-screen" : "bg-gray-50 min-h-screen";
  const card = darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";
  const text = darkMode ? "text-gray-100" : "text-gray-900";
  const sub  = darkMode ? "text-gray-400" : "text-gray-500";

  // Calculate global ayah number for audio
  const getGlobalAyahNum = (ayah: Ayah) => {
    // Simple calculation: sum of all ayahs before this surah + ayah number
    const SURAH_AYAH_COUNTS = [7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,110,183,8,27,28,28,66,30,20,22,21,52,21,22,20,33,34,27,31,25,22,26,19,25,9,12,21,46,29,29,21,15,36,40,10,8,5,11,7,4,12,9,5,4,20,7,3,6,11,5,4,5,4,5,6,5,5,8,9,3,5,5,8,5,8,8,15,5,12,8,8,51,10,4,10,4,13,28,6];
    let globalNum = 0;
    for (let i = 0; i < surahId - 1; i++) globalNum += SURAH_AYAH_COUNTS[i] || 0;
    return globalNum + ayah.verse_number;
  };

  if (loading) return (
    <div className={`${bg} flex items-center justify-center`}>
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500 text-sm">Loading Tajweed Quran...</p>
      </div>
    </div>
  );

  if (!surah) return <div className="text-center py-20 text-gray-500">Could not load Surah. Please try again.</div>;

  return (
    <div className={bg} onClick={() => setPopup(null)}>
      {/* Inject Tajweed CSS */}
      <style>{TAJWEED_CSS}</style>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className={`flex items-center gap-2 text-sm ${sub} mb-6`}>
          <Link href="/quran" className="hover:text-teal-600">Quran</Link>
          <span>/</span>
          <Link href="/quran/tajweed" className="hover:text-amber-600">Tajweed</Link>
          <span>/</span>
          <span className={text}>{surah.name_simple}</span>
        </nav>

        {/* Header */}
        <div className="bg-gradient-to-b from-amber-500 to-orange-600 text-white rounded-2xl p-8 text-center mb-5">
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">{surahId}</span>
            <p className="text-5xl font-bold leading-normal" style={{ fontFamily:"var(--font-arabic),'Amiri',serif" }}>{surah.name_arabic}</p>
          </div>
          <p className="text-2xl font-semibold mb-1">{surah.name_simple}</p>
          <p className="text-orange-200 mb-3">{surah.translated_name?.name}</p>
          <div className="flex justify-center gap-4 text-sm flex-wrap">
            <span className="bg-white/10 px-3 py-1 rounded-full">{surah.verses_count} Ayahs</span>
            <span className="bg-white/10 px-3 py-1 rounded-full capitalize">{surah.revelation_place}</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🎨 Colour Coded Tajweed</span>
          </div>
          {/* Colour strip */}
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {Object.values(TAJWEED_RULES).slice(0,7).map(r => (
              <div key={r.name} className="flex items-center gap-1 text-xs text-white/70">
                <div className="w-2.5 h-2.5 rounded-full" style={{background:r.color}} />
                <span className="hidden sm:inline">{r.name.split(" ")[0]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className={`${card} border rounded-2xl p-4 mb-5 flex flex-wrap gap-3 items-center justify-between`}>
          <div className="flex gap-2">
            {surahId > 1 && <Link href={`/quran/tajweed/${surahId-1}`} className={`px-3 py-2 rounded-xl border ${darkMode?"border-gray-700 text-gray-300":"border-gray-200 text-gray-600"} text-sm font-semibold hover:border-amber-400`}>← Prev</Link>}
            {surahId < 114 && <Link href={`/quran/tajweed/${surahId+1}`} className={`px-3 py-2 rounded-xl border ${darkMode?"border-gray-700 text-gray-300":"border-gray-200 text-gray-600"} text-sm font-semibold hover:border-amber-400`}>Next →</Link>}
          </div>
          {/* Font size */}
          <div className="flex items-center gap-1.5">
            <span className={`text-xs ${sub}`}>Size:</span>
            <button onClick={() => setFontSize(s=>Math.max(18,s-2))} className={`w-7 h-7 rounded-lg border ${darkMode?"border-gray-700":"border-gray-200"} text-sm font-bold ${sub} hover:border-amber-400`}>−</button>
            <span className={`text-xs font-semibold w-6 text-center ${text}`}>{fontSize}</span>
            <button onClick={() => setFontSize(s=>Math.min(52,s+2))} className={`w-7 h-7 rounded-lg border ${darkMode?"border-gray-700":"border-gray-200"} text-sm font-bold ${sub} hover:border-amber-400`}>+</button>
          </div>
          <button onClick={() => setShowGuide(v=>!v)}
            className={`px-3 py-2 rounded-xl text-sm font-semibold border transition-all ${showGuide?"bg-amber-500 text-white border-amber-600":`${darkMode?"border-gray-700 text-gray-300":"border-gray-200 text-gray-600"} hover:border-amber-400`}`}>
            🎨 Colour Guide
          </button>
          <button onClick={() => setDarkMode(v=>!v)}
            className={`px-3 py-2 border ${darkMode?"border-gray-700 text-gray-300":"border-gray-200 text-gray-600"} rounded-xl text-sm font-semibold`}>
            {darkMode?"☀️ Light":"🌙 Dark"}
          </button>
        </div>

        {/* Hint */}
        <div className={`${darkMode?"bg-amber-900/20 border-amber-800":"bg-amber-50 border-amber-100"} border rounded-xl px-4 py-2.5 mb-5 flex items-center gap-2`}>
          <span>👆</span>
          <p className={`text-sm ${darkMode?"text-amber-300":"text-amber-700"}`}>
            <strong>Tap any coloured word</strong> to see which Tajweed rule applies and its explanation.
          </p>
        </div>

        {/* Colour Guide Panel */}
        {showGuide && (
          <div className={`${card} border rounded-2xl p-5 mb-5`}>
            <h3 className={`font-bold ${text} mb-4`}>🎨 Tajweed Colour Guide</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(TAJWEED_RULES).map(([key, rule]) => (
                <div key={key} className={`flex items-start gap-3 p-3 rounded-xl border ${darkMode?"border-gray-700":"border-gray-100"}`}>
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 shadow-sm" style={{background:rule.color}} />
                  <div>
                    <p className={`text-sm font-bold ${text}`}>{rule.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{rule.nameAr}</p>
                    <p className={`text-xs ${sub} mt-1 leading-relaxed`}>{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ayahs */}
        <div className="space-y-4" onClick={handleTajweedClick}>
          {ayahs.map(ayah => {
            const globalNum = getGlobalAyahNum(ayah);
            return (
              <div key={ayah.verse_number} className={`${card} border rounded-2xl p-5 transition-all`}>
                <div className="flex justify-between items-center mb-4">
                  <div className="w-9 h-9 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {ayah.verse_number}
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={e => { e.stopPropagation(); playAudio(globalNum); }}
                      className={`w-9 h-9 rounded-xl border text-sm flex items-center justify-center transition-all
                        ${audioPlaying===globalNum?"bg-amber-500 border-amber-600 text-white":`border ${darkMode?"border-gray-700":"border-gray-200"} ${sub} hover:border-amber-400`}`}>
                      {audioPlaying===globalNum?"⏸":"▶"}
                    </button>
                    {ayah.juz_number && <span className={`text-xs ${sub}`}>Juz {ayah.juz_number}</span>}
                  </div>
                </div>
                {/* Tajweed Arabic text */}
                <div
                  className="text-right leading-loose"
                  style={{ fontFamily:"var(--font-arabic),'Amiri',serif", fontSize:`${fontSize}px`, direction:"rtl", lineHeight:"2.8", color: darkMode?"#f0fdf4":"#111827" }}
                  dangerouslySetInnerHTML={{ __html: ayah.text_uthmani_tajweed }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom nav */}
        <div className="flex justify-between mt-8">
          {surahId > 1
            ? <Link href={`/quran/tajweed/${surahId-1}`} className={`px-5 py-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-gray-200"} border rounded-xl font-semibold ${sub} hover:border-amber-400`}>← Previous</Link>
            : <div />}
          <Link href="/quran/tajweed" className="px-5 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600">All Surahs</Link>
          {surahId < 114
            ? <Link href={`/quran/tajweed/${surahId+1}`} className={`px-5 py-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-gray-200"} border rounded-xl font-semibold ${sub} hover:border-amber-400`}>Next →</Link>
            : <div />}
        </div>
      </div>

      {/* ── Tajweed Rule Popup ── */}
      {popup && TAJWEED_RULES[popup.rule] && (
        <div
          className="fixed z-50 bg-white border border-amber-200 rounded-2xl shadow-2xl p-4 w-72"
          style={{ top: Math.min(popup.y + 10, window.innerHeight - 200), left: Math.min(popup.x - 100, window.innerWidth - 300) }}
          onClick={e => e.stopPropagation()}>
          <div className="flex items-start gap-3 mb-3">
            <div className="w-8 h-8 rounded-full flex-shrink-0" style={{background:TAJWEED_RULES[popup.rule].color}} />
            <div>
              <p className="font-black text-gray-900 text-base">{TAJWEED_RULES[popup.rule].name}</p>
              <p className="text-sm text-gray-500" style={{fontFamily:"'Amiri',serif"}}>{TAJWEED_RULES[popup.rule].nameAr}</p>
            </div>
            <button onClick={() => setPopup(null)} className="ml-auto text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed bg-amber-50 rounded-xl p-3">
            {TAJWEED_RULES[popup.rule].desc}
          </p>
        </div>
      )}
    </div>
  );
}
