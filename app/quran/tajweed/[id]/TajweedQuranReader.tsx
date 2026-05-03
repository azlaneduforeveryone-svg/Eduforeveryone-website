"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// ── Tajweed CSS colour map ────────────────────────────────────────────────────
const TAJWEED_COLORS: Record<string, { color: string; name: string; desc: string }> = {
  ham_wasl:           { color: "#aaaaaa", name: "Hamzat ul Wasl",       desc: "Silent Hamza — not pronounced at the start of a word when preceded by another word" },
  laam_shamsiyah:     { color: "#aaaaaa", name: "Laam Shamsiyah",       desc: "The Laam assimilates into the following sun letter (ش س ص ض ط ظ ن ر ل ز ذ د ث ت)" },
  madda_normal:       { color: "#537FFF", name: "Madd Asli (Normal)",   desc: "Natural prolongation — 2 counts. Every Alif, Waw or Ya preceded by its matching short vowel" },
  madda_permissible:  { color: "#4050FF", name: "Madd Ja'iz (2-4-6)",  desc: "Permissible prolongation — 2, 4 or 6 counts when Madd letter is followed by Hamza in next word" },
  madda_necessary:    { color: "#000EBC", name: "Madd Lazim (6 counts)",desc: "Necessary prolongation — always 6 counts. Madd letter followed by Shaddah or Sukoon" },
  madda_obligatory:   { color: "#2144C1", name: "Madd Wajib (4-5)",    desc: "Obligatory prolongation — 4 or 5 counts. Madd letter followed by Hamza in same word" },
  qalaqalah:          { color: "#DD0008", name: "Qalqala",              desc: "Echoing bounce on ق ط ب ج د when they have Sukoon — slight bounce at end of syllable" },
  ikhfa_shafawi:      { color: "#D500B7", name: "Ikhfa Shafawi",        desc: "Meem Sakin followed by Ba — pronounced with light nasal sound (ghunna) for 2 counts" },
  ikhfa:              { color: "#9400A8", name: "Ikhfa",                desc: "Noon Sakin or Tanween followed by 15 letters — hidden with nasal sound for 2 counts" },
  idghaam_shafawi:    { color: "#058C00", name: "Idghaam Shafawi",      desc: "Meem Sakin followed by another Meem — merge together with ghunna for 2 counts" },
  idghaam_ghunnah:    { color: "#209000", name: "Idghaam with Ghunna",  desc: "Noon Sakin or Tanween followed by ي ن م و — merges with nasal sound for 2 counts" },
  idghaam_wo_ghunnah: { color: "#33B800", name: "Idghaam without Ghunna",desc: "Noon Sakin or Tanween followed by ل ر — merges without nasal sound" },
  iqlab:              { color: "#26BFFD", name: "Iqlab",                desc: "Noon Sakin or Tanween followed by Ba — converts to Meem with ghunna for 2 counts" },
  ghunnah:            { color: "#FF7E1E", name: "Ghunna",               desc: "Nasal sound — observed on Noon or Meem with Shaddah for 2 counts" },
};

interface Surah {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
  revelationType: string;
}

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
}

// Parse tajweed text and render with colours
function TajweedText({ html, fontSize }: { html: string; fontSize: number }) {
  // Replace <tajweed class=X> with <span style="color:Y" title="Z">
  const parsed = html
    .replace(/<tajweed class=["']?([^"'>]+)["']?>/g, (_, cls) => {
      const rule = TAJWEED_COLORS[cls];
      if (!rule) return `<span>`;
      return `<span style="color:${rule.color}" data-rule="${cls}" title="${rule.name}: ${rule.desc}">`;
    })
    .replace(/<\/tajweed>/g, "</span>")
    .replace(/<span class=["']?end["']?>/g, '<span style="color:#aaa;font-size:0.8em">');

  return (
    <p
      className="text-right leading-loose"
      style={{ fontFamily: "var(--font-arabic),'Amiri',serif", fontSize: `${fontSize}px`, direction: "rtl", lineHeight: "2.8" }}
      dangerouslySetInnerHTML={{ __html: parsed }}
    />
  );
}

export default function TajweedQuranReader({ surahId }: { surahId: number }) {
  const [surah,      setSurah]      = useState<{ number:number; name:string; englishName:string; englishNameTranslation:string; numberOfAyahs:number; revelationType:string } | null>(null);
  const [ayahs,      setAyahs]      = useState<Ayah[]>([]);
  const [loading,    setLoading]    = useState(true);
  const [fontSize,   setFontSize]   = useState(28);
  const [showGuide,  setShowGuide]  = useState(true);
  const [darkMode,   setDarkMode]   = useState(false);
  const [hoveredRule,setHoveredRule]= useState<string|null>(null);
  const AUDIO_CDN = "https://cdn.islamic.network/quran/audio/128/ar.alafasy";
  const [audioPlaying, setAudioPlaying] = useState<number|null>(null);

  useEffect(() => {
    setLoading(true);
    // Fetch surah info + tajweed text
    Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surahId}`).then(r => r.json()),
      fetch(`https://api.alquran.cloud/v1/surah/${surahId}/quran-tajweed`).then(r => r.json()),
    ]).then(([info, tajweed]) => {
      setSurah(info.data);
      setAyahs(tajweed.data.ayahs || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [surahId]);

  const playAudio = (ayahNum: number) => {
    const existing = document.getElementById("quran-audio") as HTMLAudioElement;
    if (existing) existing.pause();
    if (audioPlaying === ayahNum) { setAudioPlaying(null); return; }
    const audio = new Audio(`${AUDIO_CDN}/${ayahNum}.mp3`);
    audio.id = "quran-audio";
    audio.play();
    setAudioPlaying(ayahNum);
    audio.onended = () => setAudioPlaying(null);
  };

  const bg     = darkMode ? "bg-gray-950 min-h-screen" : "bg-gray-50 min-h-screen";
  const card   = darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";
  const text   = darkMode ? "text-gray-100" : "text-gray-900";
  const sub    = darkMode ? "text-gray-400" : "text-gray-500";

  if (loading) return (
    <div className={`${bg} flex items-center justify-center`}>
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className={sub}>Loading Tajweed Quran...</p>
      </div>
    </div>
  );

  if (!surah) return <div className="text-center py-20 text-gray-500">Surah not found</div>;

  return (
    <div className={bg}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className={`flex items-center gap-2 text-sm ${sub} mb-6`}>
          <Link href="/quran" className="hover:text-teal-600">Quran</Link>
          <span>/</span>
          <Link href="/quran/tajweed" className="hover:text-teal-600">Tajweed</Link>
          <span>/</span>
          <span className={text}>{surah.englishName}</span>
        </nav>

        {/* Header */}
        <div className="bg-gradient-to-b from-amber-500 to-orange-600 text-white rounded-2xl p-8 text-center mb-5">
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">{surah.number}</span>
            <p className="text-5xl font-bold leading-normal" style={{ fontFamily: "var(--font-arabic),'Amiri',serif" }}>{surah.name}</p>
          </div>
          <p className="text-2xl font-semibold mb-1">{surah.englishName}</p>
          <p className="text-orange-200 mb-3">{surah.englishNameTranslation}</p>
          <div className="flex justify-center gap-4 text-sm">
            <span className="bg-white/10 px-3 py-1 rounded-full">{surah.numberOfAyahs} Ayahs</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">{surah.revelationType}</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🎨 Colour Coded Tajweed</span>
          </div>
        </div>

        {/* Controls */}
        <div className={`${card} border rounded-2xl p-4 mb-5 flex flex-wrap gap-3 items-center justify-between`}>
          {/* Prev/Next */}
          <div className="flex gap-2">
            {surah.number > 1 && <Link href={`/quran/tajweed/${surah.number-1}`} className={`px-3 py-2 rounded-xl border ${darkMode?"border-gray-700 text-gray-300":"border-gray-200 text-gray-600"} text-sm font-semibold hover:border-teal-400`}>← Prev</Link>}
            {surah.number < 114 && <Link href={`/quran/tajweed/${surah.number+1}`} className={`px-3 py-2 rounded-xl border ${darkMode?"border-gray-700 text-gray-300":"border-gray-200 text-gray-600"} text-sm font-semibold hover:border-teal-400`}>Next →</Link>}
          </div>
          {/* Font size */}
          <div className="flex items-center gap-1.5">
            <span className={`text-xs ${sub}`}>Size:</span>
            <button onClick={() => setFontSize(s => Math.max(18,s-2))} className={`w-7 h-7 rounded-lg border ${darkMode?"border-gray-700":"border-gray-200"} text-sm font-bold ${sub}`}>−</button>
            <span className={`text-xs font-semibold w-6 text-center ${text}`}>{fontSize}</span>
            <button onClick={() => setFontSize(s => Math.min(52,s+2))} className={`w-7 h-7 rounded-lg border ${darkMode?"border-gray-700":"border-gray-200"} text-sm font-bold ${sub}`}>+</button>
          </div>
          {/* Colour guide toggle */}
          <button onClick={() => setShowGuide(v => !v)} className={`px-3 py-2 rounded-xl text-sm font-semibold border transition-all ${showGuide?"bg-amber-500 text-white border-amber-600":`${darkMode?"border-gray-700 text-gray-300":"border-gray-200 text-gray-600"} hover:border-amber-400`}`}>
            🎨 Colour Guide
          </button>
          {/* Dark mode */}
          <button onClick={() => setDarkMode(v => !v)} className={`px-3 py-2 border ${darkMode?"border-gray-700 text-gray-300":"border-gray-200 text-gray-600"} rounded-xl text-sm font-semibold`}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Colour Guide Panel */}
        {showGuide && (
          <div className={`${card} border rounded-2xl p-5 mb-5`}>
            <h3 className={`font-bold ${text} mb-3 text-sm`}>🎨 Tajweed Colour Guide — Hover over coloured text in the Quran to see rule details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(TAJWEED_COLORS).map(([key, rule]) => (
                <div key={key} className={`flex items-start gap-2.5 p-2 rounded-xl ${darkMode?"hover:bg-gray-800":"hover:bg-gray-50"} cursor-default`}
                  onMouseEnter={() => setHoveredRule(key)} onMouseLeave={() => setHoveredRule(null)}>
                  <div className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5" style={{ background: rule.color }} />
                  <div>
                    <p className={`text-xs font-bold ${text}`}>{rule.name}</p>
                    {hoveredRule === key && <p className={`text-xs ${sub} mt-0.5 leading-relaxed`}>{rule.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ayahs */}
        <div className="space-y-4">
          {ayahs.map(ayah => (
            <div key={ayah.numberInSurah} className={`${card} border rounded-2xl p-5`}>
              <div className="flex justify-between items-center mb-4">
                <div className="w-9 h-9 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {ayah.numberInSurah}
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => playAudio(ayah.number)}
                    className={`w-9 h-9 rounded-xl border text-sm flex items-center justify-center transition-all
                      ${audioPlaying===ayah.number?"bg-amber-500 border-amber-600 text-white":`border ${darkMode?"border-gray-700":"border-gray-200"} ${sub} hover:border-amber-400`}`}>
                    {audioPlaying===ayah.number?"⏸":"▶"}
                  </button>
                  <span className={`text-xs ${sub}`}>Juz {ayah.juz}</span>
                </div>
              </div>
              <TajweedText html={ayah.text} fontSize={fontSize} />
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="flex justify-between mt-8">
          {surah.number > 1
            ? <Link href={`/quran/tajweed/${surah.number-1}`} className={`px-5 py-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-gray-200"} border rounded-xl font-semibold ${sub} hover:border-teal-400`}>← Previous</Link>
            : <div />}
          <Link href="/quran/tajweed" className="px-5 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600">All Surahs</Link>
          {surah.number < 114
            ? <Link href={`/quran/tajweed/${surah.number+1}`} className={`px-5 py-3 ${darkMode?"bg-gray-900 border-gray-800":"bg-white border-gray-200"} border rounded-xl font-semibold ${sub} hover:border-teal-400`}>Next →</Link>
            : <div />}
        </div>
      </div>
    </div>
  );
}
