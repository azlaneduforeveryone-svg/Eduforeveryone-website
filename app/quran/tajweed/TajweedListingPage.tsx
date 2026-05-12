"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

type Lang = "en" | "ur" | "hi";

const LANG_LABELS: Record<Lang, string> = { en:"English", ur:"اردو", hi:"हिन्दी" };

const COLOR_GUIDE: Record<Lang, { name: string; rules: { color: string; en: string; ur: string; hi: string }[] }> = {
  en: { name:"Colour Guide", rules:[
    { color:"#537FFF", en:"Madd Normal — Natural prolongation of 2 counts",                           ur:"مد طبیعی — قدرتی 2 الف کھینچاؤ",              hi:"मद तबई — 2 मात्रा का स्वाभाविक खिंचाव" },
    { color:"#9400A8", en:"Ikhfa — Noon Sakin hidden with nasal sound for 2 counts",                  ur:"اخفاء — نون ساکن 2 الف غنہ سے چھپائی",         hi:"इख़फ़ा — नून साकिन 2 मात्रा ग़ुन्ना के साथ" },
    { color:"#DD0008", en:"Qalqala — Echoing bounce on ق ط ب ج د with Sukoon",                       ur:"قلقلہ — ق ط ب ج د پر سکون میں گونج",            hi:"क़लक़ला — ق ط ب ج د पर सुकून में गूँज" },
    { color:"#FF7E1E", en:"Ghunna — Nasal sound on Noon/Meem with Shaddah (2 counts)",               ur:"غنہ — نون/میم مشدد پر ناک سے آواز",             hi:"ग़ुन्ना — نून/میم मुशद्दद पर नाकी आवाज़" },
    { color:"#209000", en:"Idghaam with Ghunna — Noon merges into ي ن م و with nasal",              ur:"ادغام مع غنہ — نون ي ن م و میں مدغم",          hi:"इदग़ाम मअ ग़ुन्ना — नून ي ن م و में मिलना" },
    { color:"#26BFFD", en:"Iqlab — Noon converts to Meem before Ba with Ghunna",                      ur:"اقلاب — نون با سے پہلے میم بنتی ہے",            hi:"इक़लाब — नून 'ب' से पहले मीम बन जाती है" },
    { color:"#D500B7", en:"Ikhfa Shafawi — Meem Sakin before Ba, light nasal 2 counts",              ur:"اخفاء شفوی — میم ساکن با سے پہلے",             hi:"इख़फ़ा शफ़वी — मीम साकिन 'ب' से पहले" },
    { color:"#4050FF", en:"Madd Ja'iz — Permissible prolongation 2/4/6 counts before Hamza",         ur:"مد جائز — ہمزہ سے پہلے 2/4/6 الف",             hi:"मद जाइज़ — हम्ज़ा से पहले 2/4/6 मात्राएँ" },
    { color:"#000EBC", en:"Madd Lazim — Obligatory 6 counts before permanent Sukoon/Shaddah",        ur:"مد لازم — مستقل سکون/شدہ سے پہلے 6 الف",       hi:"मद लाज़िम — स्थायी सुकून/शद्दा से पहले 6" },
    { color:"#33B800", en:"Idghaam without Ghunna — Noon merges into ل ر, no nasal sound",           ur:"ادغام بلا غنہ — نون ل ر میں بغیر غنہ",         hi:"इदग़ाम बिला ग़ुन्ना — नون ل ر में बिना ग़ुन्ना" },
  ]},
  ur: { name:"رنگ گائیڈ", rules:[] },
  hi: { name:"रंग गाइड", rules:[] },
};
// ur and hi share same rules array (just shown in their lang)
COLOR_GUIDE.ur.rules = COLOR_GUIDE.en.rules;
COLOR_GUIDE.hi.rules = COLOR_GUIDE.en.rules;

interface Surah {
  id: number;
  name_arabic: string;
  name_simple: string;
  translated_name: { name: string };
  verses_count: number;
  revelation_place: string;
}

export default function TajweedListingPage() {
  const [surahs,     setSurahs]     = useState<Surah[]>([]);
  const [loading,    setLoading]    = useState(true);
  const [search,     setSearch]     = useState("");
  const [filter,     setFilter]     = useState<"all"|"makkah"|"madinah">("all");
  const [lang,       setLang]       = useState<Lang>("en");
  const [showGuide,  setShowGuide]  = useState(false);

  useEffect(() => {
    fetch("https://api.qurancdn.com/api/qdc/chapters?language=en&per_page=114")
      .then(r => r.json())
      .then(d => { setSurahs(d.chapters || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = surahs.filter(s => {
    const matchSearch =
      s.name_simple.toLowerCase().includes(search.toLowerCase()) ||
      s.name_arabic.includes(search) ||
      s.id.toString().includes(search) ||
      s.translated_name?.name?.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || s.revelation_place === filter;
    return matchSearch && matchFilter;
  });

  const ruleText = (r: { en: string; ur: string; hi: string }) =>
    lang === "ur" ? r.ur : lang === "hi" ? r.hi : r.en;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Inject Arabic font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        .arabic-text { font-family: 'Amiri', var(--font-arabic), 'Noto Naskh Arabic', serif !important; }
      `}</style>

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/quran" className="hover:text-teal-600">Quran</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Tajweed Quran</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">🎨 Colour Coded</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Tajweed Quran</h1>
        <p className="text-2xl text-amber-700 mb-3 arabic-text">القرآن بالتجويد الملوَّن</p>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed mb-4">
          {lang === "en" ? "Each Tajweed rule is shown in its correct colour. Tap any coloured word to learn the rule."
          :lang === "ur" ? "ہر تجویدی قاعدہ اس کے صحیح رنگ میں دکھایا گیا ہے۔ کسی بھی رنگین لفظ پر ٹیپ کریں۔"
          : "हर तजवीद क़ाइदा उसके सही रंग में दिखाया गया है। किसी भी रंगीन शब्द पर टैप करें।"}
        </p>

        {/* Colour strip */}
        <div className="flex justify-center gap-3 flex-wrap mb-4">
          {COLOR_GUIDE.en.rules.slice(0,6).map((r,i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{background:r.color}} />
              <span>{r.en.split(" —")[0]}</span>
            </div>
          ))}
        </div>

        {/* Language selector */}
        <div className="flex justify-center gap-2 mb-2">
          {(["en","ur","hi"] as Lang[]).map(l => (
            <button key={l} onClick={() => setLang(l)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all
                ${lang===l?"bg-amber-500 text-white border-amber-600":"bg-white text-gray-500 border-gray-200 hover:border-amber-300"}`}>
              {LANG_LABELS[l]}
            </button>
          ))}
        </div>
      </div>

      {/* Colour Guide Toggle */}
      <button onClick={() => setShowGuide(v=>!v)}
        className={`w-full mb-5 py-3 rounded-xl border font-semibold text-sm transition-all
          ${showGuide?"bg-amber-500 text-white border-amber-600":"bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400"}`}>
        🎨 {showGuide ? (lang==="en"?"Hide ":"چھپائیں ") + COLOR_GUIDE[lang].name : (lang==="en"?"Show ":"دیکھیں ") + COLOR_GUIDE[lang].name} {showGuide?"▲":"▼"}
      </button>

      {/* Colour Guide Panel */}
      {showGuide && (
        <div className="bg-white border border-amber-100 rounded-2xl p-5 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {COLOR_GUIDE[lang].rules.map((r, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 shadow-sm" style={{background:r.color}} />
              <p className={`text-sm text-gray-700 leading-relaxed ${lang==="ur"?"text-right":""}`}
                 style={lang==="ur"?{fontFamily:"'Noto Nastaliq Urdu',serif"}:{}}>
                {ruleText(r)}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input type="text"
          placeholder={lang==="en"?"Search Surah by name or number...":lang==="ur"?"نام یا نمبر سے سورت تلاش کریں...":"नाम या नंबर से सूरत खोजें..."}
          value={search} onChange={e => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-amber-500" />
        <div className="flex gap-2">
          {([["all","All / سب","सभी"],["makkah","🕋 Makki","🕋 मक्की"],["madinah","🕌 Madani","🕌 मदनी"]] as const).map(([f,en_label]) => (
            <button key={f} onClick={() => setFilter(f as "all"|"makkah"|"madinah")}
              className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all
                ${filter===f?"bg-amber-500 text-white border-amber-600":"bg-white text-gray-500 border-gray-200 hover:border-amber-300"}`}>
              {f==="all"?(lang==="en"?"All":lang==="ur"?"سب":"सभी"):f==="makkah"?"🕋 Makki":"🕌 Madani"}
            </button>
          ))}
        </div>
      </div>

      {/* Surah Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(12).fill(0).map((_,i) => <div key={i} className="h-24 bg-gray-100 rounded-2xl animate-pulse" />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(s => (
            <Link key={s.id} href={`/quran/tajweed/${s.id}`}
              className="group bg-white border border-gray-200 rounded-2xl p-4 hover:border-amber-300 hover:shadow-md transition-all flex items-center gap-3">
              {/* Number */}
              <div className="w-11 h-11 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-amber-700 font-bold text-sm">{s.id}</span>
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 text-sm group-hover:text-amber-600 transition-colors truncate">{s.name_simple}</p>
                <p className="text-gray-500 text-xs truncate">{s.translated_name?.name}</p>
                <p className="text-gray-400 text-xs">{s.verses_count} Ayahs · {s.revelation_place}</p>
              </div>
              {/* Arabic name — fixed font */}
              <div className="flex-shrink-0 text-right">
                <p className="text-amber-700 font-bold arabic-text leading-loose"
                   style={{ fontSize:"clamp(16px, 3vw, 22px)", lineHeight:"2" }}>
                  {s.name_arabic}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Count */}
      {!loading && (
        <p className="text-center text-gray-400 text-sm mt-6">
          {filtered.length} {lang==="en"?"Surahs":lang==="ur"?"سورتیں":"सूरतें"}
        </p>
      )}
    </div>
  );
}
