"use client";
import { useState, useEffect, useRef, Fragment } from "react";
import Link from "next/link";
import QuranScriptSelector, { QuranScript, QURAN_SCRIPTS } from "@/components/quran/QuranScriptSelector";
import type { TajweedPageSurah } from "@/lib/quranTajweedServer";
import { TAJWEED_RULE_IDS, type TajweedRuleId, type TajweedRun, type TajweedWord, type WbwSurah, type WbwWord } from "@/lib/quranTajweed";

// ── Tajweed Rules Map ─────────────────────────────────────────────────────────
// Keys are the rule names in the QUL tajweed data (lib/quranTajweed.ts).
const TAJWEED_RULES: Record<TajweedRuleId, { color: string; name: string; nameAr: string; desc: { en: string; ur: string; hi: string } }> = {
  ham_wasl:                  { color:"#AAAAAA", name:"Hamzat ul Wasl",          nameAr:"همزة الوصل",      desc:{ en:"Silent Hamza, not pronounced when joined to the word before it", ur:"ہمزۃ الوصل، پچھلے لفظ سے ملا کر پڑھیں تو نہیں پڑھا جاتا", hi:"हम्ज़तुल वस्ल, पिछले शब्द से मिलाकर पढ़ें तो नहीं पढ़ा जाता" }},
  laam_shamsiyah:            { color:"#AAAAAA", name:"Laam Shamsiyah",          nameAr:"اللام الشمسية",   desc:{ en:"The Laam is not pronounced; it merges into the following sun letter", ur:"لام نہیں پڑھا جاتا، اگلے شمسی حرف میں مدغم ہو جاتا ہے", hi:"लाम नहीं पढ़ा जाता, अगले शम्सी हर्फ़ में मिल जाता है" }},
  slnt:                      { color:"#AAAAAA", name:"Silent Letter",           nameAr:"حرف لا يُنطق",    desc:{ en:"Written in the Mushaf but not pronounced", ur:"مصحف میں لکھا ہے مگر پڑھا نہیں جاتا", hi:"मुसहफ़ में लिखा है पर पढ़ा नहीं जाता" }},
  madda_normal:              { color:"#537FFF", name:"Madd Tabee'i (2 counts)", nameAr:"المد الطبيعي",    desc:{ en:"Natural prolongation of 2 counts on Alif, Waw or Ya", ur:"الف، واو یا یا پر 2 حرکت کا طبعی کھینچاؤ", hi:"अलिफ़, वाव या या पर 2 हरकत का स्वाभाविक खिंचाव" }},
  madda_permissible:         { color:"#4050FF", name:"Madd 'Arid (2, 4 or 6)",  nameAr:"المد العارض للسكون", desc:{ en:"When you stop at the end of the ayah, this madd may be held for 2, 4 or 6 counts", ur:"آیت کے آخر میں وقف کریں تو یہ مد 2، 4 یا 6 حرکت تک کھینچ سکتے ہیں", hi:"आयत के आख़िर में रुकें तो यह मद 2, 4 या 6 हरकत तक खींच सकते हैं" }},
  madda_necessary:           { color:"#000EBC", name:"Madd Lazim (6 counts)",   nameAr:"المد اللازم",     desc:{ en:"Necessary prolongation, always 6 counts, before a Shaddah or Sukoon", ur:"مد لازم، شدہ یا سکون سے پہلے ہمیشہ 6 حرکت", hi:"मद लाज़िम, शद्दा या सुकून से पहले हमेशा 6 हरकत" }},
  madda_obligatory_mottasel: { color:"#2144C1", name:"Madd Muttasil (4 or 5)",  nameAr:"المد المتصل",     desc:{ en:"A madd letter followed by Hamza in the same word: 4 or 5 counts", ur:"ایک ہی لفظ میں حرف مد کے بعد ہمزہ: 4 یا 5 حرکت", hi:"एक ही शब्द में मद के हर्फ़ के बाद हम्ज़ा: 4 या 5 हरकत" }},
  madda_obligatory_monfasel: { color:"#2144C1", name:"Madd Munfasil (4 or 5)",  nameAr:"المد المنفصل",    desc:{ en:"A madd letter at the end of a word and Hamza at the start of the next: 4 or 5 counts", ur:"لفظ کے آخر میں حرف مد اور اگلے لفظ کے شروع میں ہمزہ: 4 یا 5 حرکت", hi:"शब्द के आख़िर में मद का हर्फ़ और अगले शब्द के शुरू में हम्ज़ा: 4 या 5 हरकत" }},
  qalaqah:                   { color:"#DD0008", name:"Qalqala",                 nameAr:"القلقلة",         desc:{ en:"Echoing bounce on ق ط ب ج د when they have Sukoon", ur:"ق ط ب ج د پر سکون ہو تو گونج والا اچھال", hi:"ق ط ب ج د पर सुकून हो तो गूँज वाली उछाल" }},
  ikhafa:                    { color:"#9400A8", name:"Ikhfa",                   nameAr:"الإخفاء",         desc:{ en:"Noon Sakin or Tanween before 15 letters: hidden nasal sound for 2 counts", ur:"نون ساکن یا تنوین 15 حروف سے پہلے: 2 حرکت غنہ کے ساتھ چھپانا", hi:"नून साकिन या तन्वीन 15 हर्फ़ों से पहले: 2 हरकत ग़ुन्ना के साथ छुपाना" }},
  ikhafa_shafawi:            { color:"#D500B7", name:"Ikhfa Shafawi",           nameAr:"الإخفاء الشفوي",  desc:{ en:"Meem Sakin followed by Ba: light nasal sound for 2 counts", ur:"میم ساکن کے بعد با: 2 حرکت ہلکا غنہ", hi:"मीम साकिन के बाद बा: 2 हरकत हल्का ग़ुन्ना" }},
  idgham_ghunnah:            { color:"#209000", name:"Idghaam with Ghunna",     nameAr:"الإدغام بغنة",    desc:{ en:"Noon Sakin or Tanween before ي ن م و: merges with a nasal sound", ur:"نون ساکن یا تنوین ي ن م و سے پہلے: غنہ کے ساتھ ادغام", hi:"नून साकिन या तन्वीन ي ن م و से पहले: ग़ुन्ना के साथ इदग़ाम" }},
  idgham_wo_ghunnah:         { color:"#33B800", name:"Idghaam without Ghunna",  nameAr:"الإدغام بلا غنة", desc:{ en:"Noon Sakin or Tanween before ل ر: merges without a nasal sound", ur:"نون ساکن یا تنوین ل ر سے پہلے: بغیر غنہ ادغام", hi:"नून साकिन या तन्वीन ل ر से पहले: बिना ग़ुन्ना इदग़ाम" }},
  idgham_shafawi:            { color:"#058C00", name:"Idghaam Shafawi",         nameAr:"الإدغام الشفوي",  desc:{ en:"Meem Sakin followed by another Meem: merge with ghunna for 2 counts", ur:"میم ساکن کے بعد میم: 2 حرکت غنہ کے ساتھ ادغام", hi:"मीम साकिन के बाद मीम: 2 हरकत ग़ुन्ना के साथ इदग़ाम" }},
  idgham_mutajanisayn:       { color:"#A1A1A1", name:"Idghaam Mutajanisayn",    nameAr:"إدغام المتجانسين", desc:{ en:"Two letters from the same point of articulation: the first (with Sukoon) merges into the second", ur:"ایک ہی مخرج کے دو حروف: پہلا (ساکن) دوسرے میں مدغم ہوتا ہے", hi:"एक ही मख़रज के दो हर्फ़: पहला (साकिन) दूसरे में मिल जाता है" }},
  idgham_mutaqaribayn:       { color:"#A1A1A1", name:"Idghaam Mutaqaribayn",    nameAr:"إدغام المتقاربين", desc:{ en:"Two letters with close points of articulation: the first (with Sukoon) merges into the second", ur:"قریب مخرج والے دو حروف: پہلا (ساکن) دوسرے میں مدغم ہوتا ہے", hi:"क़रीबी मख़रज वाले दो हर्फ़: पहला (साकिन) दूसरे में मिल जाता है" }},
  iqlab:                     { color:"#26BFFD", name:"Iqlab",                   nameAr:"الإقلاب",         desc:{ en:"Noon Sakin or Tanween before Ba: changes to Meem with ghunna", ur:"نون ساکن یا تنوین با سے پہلے: غنہ کے ساتھ میم بن جاتا ہے", hi:"नून साकिन या तन्वीन बा से पहले: ग़ुन्ना के साथ मीम बन जाता है" }},
  ghunnah:                   { color:"#FF7E1E", name:"Ghunna",                  nameAr:"الغنة",           desc:{ en:"Nasal sound on Noon or Meem with Shaddah for 2 counts", ur:"نون یا میم مشدد پر 2 حرکت ناک سے آواز", hi:"नून या मीम मुशद्दद पर 2 हरकत नाक से आवाज़" }},
};

// Grammar colours of the English word by word (QUL classes).
const WBW_CLASSES: Record<string, { color: string; dark: string; label: string }> = {
  n:     { color:"#0f766e", dark:"#5eead4", label:"Noun" },
  v:     { color:"#be123c", dark:"#fda4af", label:"Verb" },
  p:     { color:"#4b5563", dark:"#d1d5db", label:"Particle" },
  pn:    { color:"#7c3aed", dark:"#c4b5fd", label:"Proper noun" },
  paren: { color:"#9ca3af", dark:"#6b7280", label:"(Added for meaning)" },
  punc:  { color:"#9ca3af", dark:"#6b7280", label:"" },
};

// Global tajweed CSS (one class per rule)
const TAJWEED_CSS = Object.entries(TAJWEED_RULES)
  .map(([id, r]) => `.tj-${id} { color: ${r.color}; cursor: pointer; }`)
  .join("\n");

const ARABIC_FONT_CSS = `@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');`;

type ReaderLang = "en" | "ur" | "hi";

interface RulePopup {
  rule: TajweedRuleId;
  x: number;
  y: number;
}

/** Coloured runs of Quran text. The letters are never changed. */
function TajweedRunsView({ runs }: { runs: TajweedRun[] }) {
  return (
    <>
      {runs.map((run, i) => {
        if (run.length === 1) return <Fragment key={i}>{run[0]}</Fragment>;
        const rule = TAJWEED_RULE_IDS[run[1]];
        return <span key={i} className={`tj-${rule}`} data-rule={rule}>{run[0]}</span>;
      })}
    </>
  );
}

// English pieces are stored separately, punctuation included: "any", "[", "one", "]".
// No space after an opening bracket or before closing punctuation.
function needsSpace(prev: string, next: string): boolean {
  return !/^[\[(/]$/.test(prev) && !/^[\]),.!?:/]$/.test(next);
}

/** One word of QPC Hafs text with its tajweed colours. */
function TajweedWordView({ word }: { word: TajweedWord }) {
  return <TajweedRunsView runs={word.r} />;
}

export default function TajweedQuranReader({ surahId, initialSurah }: { surahId: number; initialSurah: TajweedPageSurah }) {
  // Arabic is self-hosted and loaded at build time (KFGQPC QPC Hafs + QUL tajweed rules).
  const surah = initialSurah;
  const [fontSize,   setFontSize]   = useState(28);
  const [showGuide,  setShowGuide]  = useState(false);
  const [darkMode,   setDarkMode]   = useState(false);
  const [popup,      setPopup]      = useState<RulePopup | null>(null);
  const [audioPlaying, setAudioPlaying] = useState<number | null>(null);
  const [ruleLang,   setRuleLang]   = useState<ReaderLang>("en");
  const [scriptStyle, setScriptStyle] = useState<QuranScript>("uthmani");
  const [hifzMode,   setHifzMode]   = useState(false);
  const [showScripts, setShowScripts] = useState(false);
  const [showWbw,    setShowWbw]    = useState(false);
  const [wbw,        setWbw]        = useState<WbwSurah | null>(null);
  const [wbwState,   setWbwState]   = useState<"idle" | "loading" | "error">("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const AUDIO_CDN = "https://cdn.islamic.network/quran/audio/128/ar.alafasy";

  useEffect(() => {
    const savedScript = localStorage.getItem("quran-script-style") as QuranScript;
    if (savedScript && ["uthmani", "indopak"].includes(savedScript)) {
      setScriptStyle(savedScript);
    }
    const savedHifz = localStorage.getItem("quran-hifz-mode");
    if (savedHifz === "true") setHifzMode(true);
    if (localStorage.getItem("quran-tajweed-wbw") === "true") setShowWbw(true);
  }, []);

  // English word by word is only downloaded when switched on (it is large for long surahs).
  useEffect(() => {
    if (!showWbw || (wbw && wbw.surah === surahId)) return;
    let cancelled = false;
    setWbwState("loading");
    fetch(`/quran/wbw-en/${surahId}.json`)
      .then(r => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
      .then((d: WbwSurah) => { if (!cancelled) { setWbw(d); setWbwState("idle"); } })
      .catch(() => { if (!cancelled) setWbwState("error"); });
    return () => { cancelled = true; };
  }, [showWbw, surahId, wbw]);

  const handleSelectScript = (s: QuranScript) => {
    setScriptStyle(s);
    localStorage.setItem("quran-script-style", s);
  };

  const handleToggleHifzMode = (enabled: boolean) => {
    setHifzMode(enabled);
    localStorage.setItem("quran-hifz-mode", String(enabled));
  };

  const toggleWbw = () => {
    setShowWbw(v => {
      localStorage.setItem("quran-tajweed-wbw", String(!v));
      return !v;
    });
  };

  // Handle click on tajweed-coloured text
  const handleTajweedClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const ruleEl = target.closest("[data-rule]") as HTMLElement | null;
    const rule = ruleEl?.dataset.rule as TajweedRuleId | undefined;
    if (rule && TAJWEED_RULES[rule]) {
      e.stopPropagation(); // prevent bubble clearing the popup
      setPopup({ rule, x: e.clientX, y: e.clientY });
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

  const isUthmani = scriptStyle === "uthmani";
  const fontClass = isUthmani ? "font-quran-qpc-hafs" : "font-quran-indopak";
  const scriptLineHeight = isUthmani ? "2.6" : "3.0";
  const arabicColor = darkMode ? "#f0fdf4" : "#111827";

  const englishFor = (ayahNum: number, word: TajweedWord): WbwWord[] =>
    wbw && wbw.surah === surahId ? word.q.map(n => wbw.ayahs[String(ayahNum)]?.[n - 1] ?? null) : [];

  return (
    <div className={bg} onClick={() => setPopup(null)}>
      {/* Inject Tajweed CSS + Arabic font */}
      {/* Set as raw CSS so server and browser render it identically (no hydration mismatch). */}
      <style dangerouslySetInnerHTML={{ __html: ARABIC_FONT_CSS + "\n" + TAJWEED_CSS }} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className={`flex items-center gap-2 text-sm ${sub} mb-6`}>
          <Link href="/quran" className="hover:text-teal-600">Quran</Link>
          <span>/</span>
          <Link href="/quran/tajweed" className="hover:text-amber-600">Tajweed</Link>
          <span>/</span>
          <span className={text}>{surah.englishName}</span>
        </nav>

        {/* Header */}
        <div className="bg-gradient-to-b from-amber-500 to-orange-600 text-white rounded-2xl p-6 sm:p-8 text-center mb-5">
          <div className="flex justify-center items-center gap-3 mb-3 flex-wrap">
            <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">{surahId}</span>
            <p className="text-amber-100 font-bold font-quran-qpc-hafs"
               style={{ fontSize:"clamp(26px, 5vw, 44px)", lineHeight:"2.2", direction:"rtl" }}>
              {surah.name}
            </p>
          </div>
          <p className="text-xl sm:text-2xl font-semibold mb-1">{surah.englishName}</p>
          <p className="text-orange-200 mb-3">{surah.englishNameTranslation}</p>
          <div className="flex justify-center gap-3 text-sm flex-wrap mb-3">
            <span className="bg-white/10 px-3 py-1 rounded-full">{surah.numberOfAyahs} Ayahs</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">{surah.revelationType}</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🎨 Colour Coded Tajweed</span>
          </div>
          {/* Language selector for rule explanations */}
          <div className="flex justify-center gap-2 mb-3">
            <span className="text-white/60 text-xs self-center">Rule language:</span>
            {(["en","ur","hi"] as ReaderLang[]).map(l => (
              <button key={l} onClick={e => { e.stopPropagation(); setRuleLang(l); }}
                className={`px-3 py-1 rounded-full text-xs font-bold border transition-all
                  ${ruleLang===l?"bg-white text-amber-700 border-white":"bg-white/10 text-white border-white/30 hover:bg-white/20"}`}>
                {l==="en"?"English":l==="ur"?"اردو":"हिन्दी"}
              </button>
            ))}
          </div>
          {/* Colour strip */}
          <div className="flex justify-center gap-2 flex-wrap">
            {(["ham_wasl","madda_normal","madda_necessary","qalaqah","ikhafa","idgham_ghunnah","ghunnah"] as TajweedRuleId[]).map(id => TAJWEED_RULES[id]).map(r => (
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

          {/* Script selection button */}
          <button
            onClick={(e) => { e.stopPropagation(); setShowScripts(v => !v); }}
            className={`flex items-center gap-1.5 px-3 py-2 border rounded-xl text-sm font-semibold transition-all ${
              showScripts
                ? "bg-amber-500 text-white border-amber-600"
                : `${darkMode ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-600"} hover:border-amber-400`
            }`}
          >
            <span>✒️ Script:</span>
            <span className="font-bold text-amber-600 dark:text-amber-400">
              {QURAN_SCRIPTS.find(s => s.id === scriptStyle)?.name.split(" ")[0]}
            </span>
            {scriptStyle === "indopak" && hifzMode && (
              <span className="bg-emerald-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                15-Line
              </span>
            )}
          </button>

          {/* Font size */}
          <div className="flex items-center gap-1.5">
            <span className={`text-xs ${sub}`}>Size:</span>
            <button onClick={() => setFontSize(s=>Math.max(18,s-2))} className={`w-7 h-7 rounded-lg border ${darkMode?"border-gray-700":"border-gray-200"} text-sm font-bold ${sub} hover:border-amber-400`}>−</button>
            <span className={`text-xs font-semibold w-6 text-center ${text}`}>{fontSize}</span>
            <button onClick={() => setFontSize(s=>Math.min(52,s+2))} className={`w-7 h-7 rounded-lg border ${darkMode?"border-gray-700":"border-gray-200"} text-sm font-bold ${sub} hover:border-amber-400`}>+</button>
          </div>
          <button onClick={(e) => { e.stopPropagation(); toggleWbw(); }}
            aria-pressed={showWbw}
            className={`px-3 py-2 rounded-xl text-sm font-semibold border transition-all ${showWbw?"bg-amber-500 text-white border-amber-600":`${darkMode?"border-gray-700 text-gray-300":"border-gray-200 text-gray-600"} hover:border-amber-400`}`}>
            🔤 Word by Word
          </button>
          <button onClick={() => setShowGuide(v=>!v)}
            className={`px-3 py-2 rounded-xl text-sm font-semibold border transition-all ${showGuide?"bg-amber-500 text-white border-amber-600":`${darkMode?"border-gray-700 text-gray-300":"border-gray-200 text-gray-600"} hover:border-amber-400`}`}>
            🎨 Colour Guide
          </button>
          <button onClick={() => setDarkMode(v=>!v)}
            className={`px-3 py-2 border ${darkMode?"border-gray-700 text-gray-300":"border-gray-200 text-gray-600"} rounded-xl text-sm font-semibold`}>
            {darkMode?"☀️ Light":"🌙 Dark"}
          </button>
        </div>

        {/* ── Script Selection Panel ── */}
        {showScripts && (
          <div className="mb-5" onClick={(e) => e.stopPropagation()}>
            <QuranScriptSelector
              currentScript={scriptStyle}
              onSelectScript={(s) => {
                handleSelectScript(s);
                setShowScripts(false);
              }}
              hifzMode={hifzMode}
              onToggleHifzMode={handleToggleHifzMode}
              darkMode={darkMode}
            />
          </div>
        )}

        {/* Script Toolbar Compact Pills */}
        <div className={`${card} border rounded-2xl p-4 mb-5 flex justify-between items-center`} onClick={(e) => e.stopPropagation()}>
          <QuranScriptSelector
            currentScript={scriptStyle}
            onSelectScript={handleSelectScript}
            hifzMode={hifzMode}
            onToggleHifzMode={handleToggleHifzMode}
            darkMode={darkMode}
            compact={true}
          />
        </div>

        {/* Hint */}
        <div className={`${darkMode?"bg-amber-900/20 border-amber-800":"bg-amber-50 border-amber-100"} border rounded-xl px-4 py-2.5 mb-5 flex items-center gap-2`}>
            <span>👆</span>
            <p className={`text-sm ${darkMode?"text-amber-300":"text-amber-700"}`}>
              <strong>Tap any coloured letter</strong> to see which Tajweed rule applies and its explanation.
            </p>
          </div>
        {!isUthmani && showWbw && (
          <div className={`${darkMode?"bg-amber-900/20 border-amber-800":"bg-amber-50 border-amber-100"} border rounded-xl px-4 py-2.5 mb-5 flex flex-wrap items-center justify-between gap-2`}
               onClick={(e) => e.stopPropagation()}>
            <p className={`text-sm ${darkMode?"text-amber-300":"text-amber-700"}`}>
              Word by word English is available in the <strong>Uthmani</strong> script only.
            </p>
            <button onClick={() => handleSelectScript("uthmani")}
              className="px-3 py-1.5 rounded-lg bg-amber-500 text-white text-xs font-bold hover:bg-amber-600">
              Show Uthmani
            </button>
          </div>
        )}

        {/* ── 15-Line Hifz Mode Indicator Banner ── */}
        {scriptStyle === "indopak" && hifzMode && (
          <div className="bg-gradient-to-r from-emerald-600 to-amber-600 text-white rounded-xl p-3 mb-4 text-center flex items-center justify-between px-4 text-xs sm:text-sm font-medium">
            <span>📖 <strong>15-Line Indo-Pak Hifz Mode Active</strong> (Compact memorization line spacing)</span>
            <button onClick={() => handleToggleHifzMode(false)} className="underline font-semibold hover:opacity-80">
              Switch to Normal
            </button>
          </div>
        )}

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
                    <p className="text-xs text-gray-500 mt-0.5" style={{fontFamily:"'Amiri',serif", direction:"rtl"}}>{rule.nameAr}</p>
                    <p className={`text-xs ${sub} mt-1 leading-relaxed ${ruleLang==="ur"?"text-right":""}`}
                       style={ruleLang==="ur"?{fontFamily:"'Noto Nastaliq Urdu',serif"}:{}}>
                      {rule.desc[ruleLang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Word by word legend and status */}
        {showWbw && isUthmani && (
          <div className={`${card} border rounded-2xl px-4 py-3 mb-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs`}>
            <span className={`font-semibold ${text}`}>English word colours:</span>
            {Object.entries(WBW_CLASSES).filter(([, c]) => c.label).map(([k, c]) => (
              <span key={k} style={{ color: darkMode ? c.dark : c.color }}>{c.label}</span>
            ))}
            {wbwState === "loading" && <span className={sub}>Loading English...</span>}
            {wbwState === "error" && <span className="text-red-500">Could not load the English. Please try again.</span>}
          </div>
        )}

        {/* Ayahs */}
        <div className="space-y-4" onClick={handleTajweedClick}>
          {surah.ayahs.map(ayah => {
            const words = ayah.tajweed.words;
            return (
              <div key={ayah.numberInSurah} id={`ayah-${ayah.number}`} className={`${card} border rounded-2xl p-5 transition-all ${
                scriptStyle === "indopak" && hifzMode ? "hifz-compact-container rounded-xl" : ""
              }`}>
                <div className="flex justify-between items-center mb-4">
                  {/* The ornament at the end of the ayah already shows its number. */}
                  <span className="sr-only">Ayah {ayah.numberInSurah}</span>
                  <div className="flex items-center gap-2">
                    <button onClick={e => { e.stopPropagation(); playAudio(ayah.number); }}
                      className={`w-9 h-9 rounded-xl border text-sm flex items-center justify-center transition-all
                        ${audioPlaying===ayah.number?"bg-amber-500 border-amber-600 text-white":`border ${darkMode?"border-gray-700":"border-gray-200"} ${sub} hover:border-amber-400`}`}>
                      {audioPlaying===ayah.number?"⏸":"▶"}
                    </button>
                    <span className={`text-xs ${sub}`}>Juz {ayah.juz}</span>
                  </div>
                </div>

                {!isUthmani ? (
                  // Indo-Pak: QUL Indo-Pak Nastaleeq text, same as the Quran Reader, with tajweed colours.
                  <p className={`text-right ${fontClass}`}
                     style={{ fontSize:`${fontSize}px`, direction:"rtl", lineHeight: scriptLineHeight, color: arabicColor }}>
                    <TajweedRunsView runs={ayah.indopak} />
                  </p>
                ) : showWbw && wbw && wbw.surah === surahId ? (
                  // Word by word: each Arabic word with its English underneath.
                  <div className="flex flex-wrap gap-x-4 gap-y-3" style={{ direction:"rtl" }}>
                    {words.map((w, i) => (
                      <div key={i} className="flex flex-col items-center text-center">
                        <span className={fontClass} style={{ fontSize:`${fontSize}px`, lineHeight: scriptLineHeight, color: arabicColor }}>
                          <TajweedWordView word={w} />
                        </span>
                        {w.q.length > 0 && (
                          <span className="text-xs leading-snug max-w-[9rem]" style={{ direction:"ltr" }}>
                            {englishFor(ayah.numberInSurah, w).map((pieces, k) => (
                              <Fragment key={k}>
                                {k > 0 && " "}
                                {pieces?.map(([cls, t], m) => (
                                  <Fragment key={m}>
                                    {m > 0 && needsSpace(pieces[m - 1][1], t) && " "}
                                    <span style={{ color: darkMode ? (WBW_CLASSES[cls]?.dark ?? "#d1d5db") : (WBW_CLASSES[cls]?.color ?? "#4b5563") }}>{t}</span>
                                  </Fragment>
                                ))}
                              </Fragment>
                            ))}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  // Uthmani: KFGQPC QPC Hafs text exactly as in the Quran Reader, with tajweed colours.
                  <p className={`text-right ${fontClass}`}
                     style={{ fontSize:`${fontSize}px`, direction:"rtl", lineHeight: scriptLineHeight, color: arabicColor }}>
                    {words.map((w, i) => (
                      <Fragment key={i}>
                        <TajweedWordView word={w} />
                        {i < ayah.tajweed.sep.length ? ayah.tajweed.sep[i] : null}
                      </Fragment>
                    ))}
                  </p>
                )}
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

        {/* ── Source credit ── */}
        <p className={`text-xs ${sub} text-center mt-8`}>
          Uthmani text and font: <a href="https://qurancomplex.gov.sa" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-600">King Fahd Glorious Quran Printing Complex</a> (QPC Hafs).
          Tajweed rules and word by word English (Tarteel AI): <a href="https://qul.tarteel.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-600">Quranic Universal Library</a>.
          Indo-Pak text: QUL Indo-Pak Nastaleeq; font: AlQuran IndoPak by <a href="https://quranwbw.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-600">QuranWBW</a>.
          Audio: <a href="https://alquran.cloud" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-600">AlQuran Cloud</a>.
        </p>
      </div>

      {/* ── Tajweed Rule Popup ── */}
      {popup && TAJWEED_RULES[popup.rule] && (() => {
        const rule = TAJWEED_RULES[popup.rule];
        const vw = typeof window !== "undefined" ? window.innerWidth : 400;
        const vh = typeof window !== "undefined" ? window.innerHeight : 800;
        const popW = 288;
        const popH = 170;
        const x = Math.max(8, Math.min(popup.x - popW / 2, vw - popW - 8));
        const y = popup.y + 16 + popH > vh ? popup.y - popH - 10 : popup.y + 16;
        return (
          <div
            className="fixed z-50 bg-white border border-amber-200 rounded-2xl shadow-2xl p-4 w-72"
            style={{ top: y, left: x }}
            onClick={e => e.stopPropagation()}>
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full flex-shrink-0" style={{background: rule.color}} />
              <div className="flex-1">
                <p className="font-black text-gray-900 text-base">{rule.name}</p>
                <p className="text-sm text-amber-700" style={{fontFamily:"'Amiri',serif", direction:"rtl"}}>{rule.nameAr}</p>
              </div>
              <button onClick={() => setPopup(null)} className="text-gray-400 hover:text-gray-600 text-xl leading-none flex-shrink-0">×</button>
            </div>
            <p className={`text-sm text-gray-700 leading-relaxed bg-amber-50 rounded-xl p-3 ${ruleLang==="ur"?"text-right":""}`}
               style={ruleLang==="ur"?{fontFamily:"'Noto Nastaliq Urdu',serif"}:{}}>
              {rule.desc[ruleLang]}
            </p>
          </div>
        );
      })()}
    </div>
  );
}
