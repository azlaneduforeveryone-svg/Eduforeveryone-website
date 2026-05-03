"use client";
import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const TAJWEED_RULES = [
  { color:"#537FFF", name:"Madd (Normal)",       desc:"Natural prolongation — 2 counts" },
  { color:"#4050FF", name:"Madd (Permissible)",  desc:"2, 4 or 6 counts" },
  { color:"#000EBC", name:"Madd (Necessary)",    desc:"Always 6 counts" },
  { color:"#9400A8", name:"Ikhfa",               desc:"Hidden nasal sound — 2 counts" },
  { color:"#DD0008", name:"Qalqala",             desc:"Echoing bounce on ق ط ب ج د" },
  { color:"#FF7E1E", name:"Ghunna",              desc:"Nasal sound on ن or م with Shaddah" },
  { color:"#058C00", name:"Idghaam",             desc:"Merging into next letter" },
  { color:"#26BFFD", name:"Iqlab",               desc:"Noon converts to Meem before ب" },
  { color:"#D500B7", name:"Ikhfa Shafawi",       desc:"Meem Sakin before ب" },
  { color:"#aaaaaa", name:"Hamzat ul Wasl",      desc:"Silent Hamza at start" },
];

const SURAH_15LINE: Record<number,number> = {
  1:2,2:4,3:77,4:106,5:128,6:151,7:177,8:208,9:218,10:236,
  11:250,12:262,13:273,14:280,15:286,16:292,17:304,18:315,19:326,20:333,
  21:341,22:349,23:357,24:364,25:372,26:377,27:385,28:392,29:400,30:406,
  31:411,32:414,33:416,34:424,35:429,36:433,37:437,38:443,39:447,40:453,
  41:459,42:463,43:467,44:472,45:474,46:476,47:479,48:482,49:485,50:487,
  51:489,52:491,53:493,54:495,55:497,56:499,57:501,58:504,59:507,60:510,
  61:512,62:514,63:515,64:516,65:517,66:519,67:520,68:522,69:524,70:525,
  71:526,72:527,73:528,74:529,75:531,76:532,77:533,78:534,79:535,80:536,
  81:537,82:538,83:538,84:539,85:540,86:541,87:541,88:542,89:542,90:543,
  91:543,92:544,93:544,94:545,95:545,96:545,97:546,98:546,99:547,100:547,
  101:548,102:548,103:549,104:549,105:549,106:550,107:550,108:550,
  109:550,110:551,111:551,112:551,113:551,114:552,
};

const SURAH_13LINE: Record<number,number> = {
  1:4,2:7,3:108,4:149,5:179,6:211,7:247,8:290,9:304,10:329,
  11:349,12:366,13:381,14:391,15:399,16:407,17:424,18:439,19:455,20:464,
  21:475,22:487,23:498,24:507,25:518,26:525,27:537,28:546,29:557,30:566,
  31:573,32:577,33:580,34:591,35:598,36:603,37:609,38:617,39:623,40:631,
  41:639,42:645,43:651,44:658,45:660,46:663,47:667,48:671,49:676,50:678,
  51:681,52:684,53:687,54:690,55:692,56:695,57:698,58:702,59:706,60:710,
  61:713,62:716,63:717,64:719,65:720,66:723,67:724,68:727,69:730,70:731,
  71:733,72:734,73:735,74:737,75:740,76:741,77:742,78:744,79:745,80:747,
  81:748,82:749,83:749,84:751,85:752,86:753,87:753,88:755,89:755,90:756,
  91:756,92:758,93:758,94:759,95:759,96:759,97:760,98:760,99:762,100:762,
  101:763,102:763,103:765,104:765,105:765,106:766,107:766,108:766,
  109:766,110:767,111:767,112:767,113:767,114:769,
};

const SURAHS: [number, string, string][] = [
  [1,"Al-Fatiha","الفاتحة"],[2,"Al-Baqarah","البقرة"],[3,"Al-Imran","آل عمران"],
  [4,"An-Nisa","النساء"],[5,"Al-Maidah","المائدة"],[6,"Al-Anam","الأنعام"],
  [7,"Al-Araf","الأعراف"],[8,"Al-Anfal","الأنفال"],[9,"At-Tawbah","التوبة"],
  [10,"Yunus","يونس"],[11,"Hud","هود"],[12,"Yusuf","يوسف"],
  [13,"Ar-Rad","الرعد"],[14,"Ibrahim","إبراهيم"],[15,"Al-Hijr","الحجر"],
  [16,"An-Nahl","النحل"],[17,"Al-Isra","الإسراء"],[18,"Al-Kahf","الكهف"],
  [19,"Maryam","مريم"],[20,"Ta-Ha","طه"],[21,"Al-Anbiya","الأنبياء"],
  [22,"Al-Hajj","الحج"],[23,"Al-Muminun","المؤمنون"],[24,"An-Nur","النور"],
  [25,"Al-Furqan","الفرقان"],[26,"Ash-Shuara","الشعراء"],[27,"An-Naml","النمل"],
  [28,"Al-Qasas","القصص"],[29,"Al-Ankabut","العنكبوت"],[30,"Ar-Rum","الروم"],
  [31,"Luqman","لقمان"],[32,"As-Sajdah","السجدة"],[33,"Al-Ahzab","الأحزاب"],
  [34,"Saba","سبأ"],[35,"Fatir","فاطر"],[36,"Ya-Sin","يس"],
  [37,"As-Saffat","الصافات"],[38,"Sad","ص"],[39,"Az-Zumar","الزمر"],
  [40,"Ghafir","غافر"],[41,"Fussilat","فصلت"],[42,"Ash-Shura","الشورى"],
  [43,"Az-Zukhruf","الزخرف"],[44,"Ad-Dukhan","الدخان"],[45,"Al-Jathiyah","الجاثية"],
  [46,"Al-Ahqaf","الأحقاف"],[47,"Muhammad","محمد"],[48,"Al-Fath","الفتح"],
  [49,"Al-Hujurat","الحجرات"],[50,"Qaf","ق"],[51,"Adh-Dhariyat","الذاريات"],
  [52,"At-Tur","الطور"],[53,"An-Najm","النجم"],[54,"Al-Qamar","القمر"],
  [55,"Ar-Rahman","الرحمن"],[56,"Al-Waqiah","الواقعة"],[57,"Al-Hadid","الحديد"],
  [58,"Al-Mujadila","المجادلة"],[59,"Al-Hashr","الحشر"],[60,"Al-Mumtahanah","الممتحنة"],
  [61,"As-Saf","الصف"],[62,"Al-Jumuah","الجمعة"],[63,"Al-Munafiqun","المنافقون"],
  [64,"At-Taghabun","التغابن"],[65,"At-Talaq","الطلاق"],[66,"At-Tahrim","التحريم"],
  [67,"Al-Mulk","الملك"],[68,"Al-Qalam","القلم"],[69,"Al-Haqqah","الحاقة"],
  [70,"Al-Maarij","المعارج"],[71,"Nuh","نوح"],[72,"Al-Jinn","الجن"],
  [73,"Al-Muzzammil","المزمل"],[74,"Al-Muddaththir","المدثر"],[75,"Al-Qiyamah","القيامة"],
  [76,"Al-Insan","الإنسان"],[77,"Al-Mursalat","المرسلات"],[78,"An-Naba","النبأ"],
  [79,"An-Naziat","النازعات"],[80,"Abasa","عبس"],[81,"At-Takwir","التكوير"],
  [82,"Al-Infitar","الانفطار"],[83,"Al-Mutaffifin","المطففين"],[84,"Al-Inshiqaq","الانشقاق"],
  [85,"Al-Buruj","البروج"],[86,"At-Tariq","الطارق"],[87,"Al-Ala","الأعلى"],
  [88,"Al-Ghashiyah","الغاشية"],[89,"Al-Fajr","الفجر"],[90,"Al-Balad","البلد"],
  [91,"Ash-Shams","الشمس"],[92,"Al-Layl","الليل"],[93,"Ad-Duha","الضحى"],
  [94,"Ash-Sharh","الشرح"],[95,"At-Tin","التين"],[96,"Al-Alaq","العلق"],
  [97,"Al-Qadr","القدر"],[98,"Al-Bayyinah","البينة"],[99,"Az-Zalzalah","الزلزلة"],
  [100,"Al-Adiyat","العاديات"],[101,"Al-Qariah","القارعة"],[102,"At-Takathur","التكاثر"],
  [103,"Al-Asr","العصر"],[104,"Al-Humazah","الهمزة"],[105,"Al-Fil","الفيل"],
  [106,"Quraysh","قريش"],[107,"Al-Maun","الماعون"],[108,"Al-Kawthar","الكوثر"],
  [109,"Al-Kafirun","الكافرون"],[110,"An-Nasr","النصر"],[111,"Al-Masad","المسد"],
  [112,"Al-Ikhlas","الإخلاص"],[113,"Al-Falaq","الفلق"],[114,"An-Nas","الناس"],
];

interface Props {
  type: "15line" | "13line";
}

export default function QuranPDFViewer({ type }: Props) {
  const is15 = type === "15line";
  const pdfUrl = is15
    ? "https://pub-8abd18b123d249afbfea45177c4d7d94.r2.dev/15line-standard.pdf"
    : "https://pub-8abd18b123d249afbfea45177c4d7d94.r2.dev/13line-color-tajweed.pdf";
  const pageMap = is15 ? SURAH_15LINE : SURAH_13LINE;
  const totalPages = is15 ? 612 : 851;

  const [numPages,     setNumPages]     = useState<number>(0);
  const [currentPage,  setCurrentPage]  = useState(1);
  const [searchSurah,  setSearchSurah]  = useState("");
  const [showSurahs,   setShowSurahs]   = useState(false);
  const [showTajweed,  setShowTajweed]  = useState(!is15);
  const [scale,        setScale]        = useState(1.2);
  const [loading,      setLoading]      = useState(true);
  const [error,        setError]        = useState(false);

  const onDocumentLoad = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages); setLoading(false);
  }, []);

  const onDocumentError = useCallback(() => {
    setError(true); setLoading(false);
  }, []);

  const goToSurah = (surahNum: number) => {
    setCurrentPage(pageMap[surahNum] || 1);
    setShowSurahs(false); setSearchSurah("");
  };

  const filtered = SURAHS.filter(([num, name]) =>
    (name as string).toLowerCase().includes(searchSurah.toLowerCase()) ||
    num.toString().includes(searchSurah)
  );

  const color = is15 ? "teal" : "purple";
  const headerGradient = is15 ? "from-slate-700 to-slate-800" : "from-purple-600 to-purple-700";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className={`bg-gradient-to-r ${headerGradient} text-white px-4 py-4 sticky top-0 z-40`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <Link href="/quran" className="text-white/70 text-sm hover:text-white">← Quran</Link>
            <span className="text-white/40">|</span>
            <h1 className="font-bold">{is15 ? "15 Line Standard Quran" : "13 Line Colour Tajweed Quran"}</h1>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {/* Surah jump */}
            <div className="relative">
              <button onClick={() => setShowSurahs(v => !v)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-2 rounded-xl text-sm font-semibold">
                📖 Jump to Surah ▾
              </button>
              {showSurahs && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl z-50 overflow-hidden">
                  <div className="p-3 border-b border-gray-100">
                    <input type="text" value={searchSurah} onChange={e => setSearchSurah(e.target.value)}
                      placeholder="Search Surah..." autoFocus
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {filtered.map(([num, name, nameAr]) => (
                      <button key={num} onClick={() => goToSurah(num)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-left">
                        <span className="w-7 h-7 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{num}</span>
                        <span className="text-sm font-semibold text-gray-900 flex-1">{name as string}</span>
                        <span className="text-sm text-gray-500" style={{fontFamily:"'Amiri',serif"}}>{nameAr as string}</span>
                        <span className="text-xs text-gray-400 ml-1">p.{pageMap[num]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Page nav */}
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-3 py-1.5">
              <button onClick={() => setCurrentPage(p => Math.max(1,p-1))} disabled={currentPage<=1}
                className="text-white font-bold disabled:opacity-40 hover:text-amber-300">←</button>
              <span className="text-sm font-semibold">{currentPage} / {numPages || totalPages}</span>
              <button onClick={() => setCurrentPage(p => Math.min(numPages||totalPages,p+1))} disabled={currentPage>=numPages}
                className="text-white font-bold disabled:opacity-40 hover:text-amber-300">→</button>
            </div>

            {/* Zoom */}
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-xl px-3 py-1.5">
              <button onClick={() => setScale(s => Math.max(0.7,s-0.1))} className="text-white font-bold">−</button>
              <span className="text-sm">{Math.round(scale*100)}%</span>
              <button onClick={() => setScale(s => Math.min(2.5,s+0.1))} className="text-white font-bold">+</button>
            </div>

            {/* Tajweed guide (only for 13-line) */}
            {!is15 && (
              <button onClick={() => setShowTajweed(v => !v)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold border transition-all ${showTajweed?"bg-white text-purple-700 border-white":"bg-white/10 text-white border-white/20 hover:bg-white/20"}`}>
                🎨 Tajweed Guide
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className={`grid gap-4 ${showTajweed && !is15 ? "lg:grid-cols-3" : ""}`}>
          {/* PDF Viewer */}
          <div className={showTajweed && !is15 ? "lg:col-span-2" : ""}>
            {/* Publisher credit */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">📚 Publisher Credit</p>
                <p className="text-sm font-semibold text-amber-900 mt-0.5">
                  {is15 ? "Standard 15-Line Uthmani Script Quran" : "13 Line Colour Coded Tajweed Rules Quran"}
                </p>
                <p className="text-xs text-amber-600 mt-0.5">Shared for educational and religious purposes only. All rights belong to their respective publishers.</p>
              </div>
            </div>

            {/* PDF Document */}
            <div className="bg-white rounded-2xl shadow-md overflow-auto flex justify-center" style={{minHeight:"80vh"}}>
              {error ? (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-4xl mb-4">⚠️</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Could not load PDF</h3>
                  <p className="text-gray-500 text-sm mb-4">The PDF may still be loading from our servers.</p>
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer"
                    className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700">
                    Open PDF directly →
                  </a>
                </div>
              ) : (
                <div className="py-4">
                  {loading && (
                    <div className="flex flex-col items-center justify-center py-20">
                      <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mb-4" />
                      <p className="text-gray-500 text-sm">Loading Quran PDF...</p>
                      <p className="text-gray-400 text-xs mt-1">Large file — please wait</p>
                    </div>
                  )}
                  <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoad}
                    onLoadError={onDocumentError}
                    loading=""
                  >
                    <Page
                      pageNumber={currentPage}
                      scale={scale}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </Document>
                </div>
              )}
            </div>

            {/* Bottom page nav */}
            <div className="flex justify-between items-center mt-4 bg-white rounded-2xl px-5 py-3 shadow-sm">
              <button onClick={() => setCurrentPage(p => Math.max(1,p-1))} disabled={currentPage<=1}
                className="px-5 py-2 bg-teal-600 text-white rounded-xl font-bold disabled:opacity-40 hover:bg-teal-700 text-sm">
                ← Prev
              </button>
              <span className="text-sm text-gray-500">Page {currentPage} of {numPages || totalPages}</span>
              <button onClick={() => setCurrentPage(p => Math.min(numPages||totalPages,p+1))} disabled={currentPage>=numPages}
                className="px-5 py-2 bg-teal-600 text-white rounded-xl font-bold disabled:opacity-40 hover:bg-teal-700 text-sm">
                Next →
              </button>
            </div>
          </div>

          {/* Tajweed Guide Panel — 13 line only */}
          {showTajweed && !is15 && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-sm p-4 sticky top-24">
                <h2 className="font-black text-gray-900 text-base mb-1">🎨 Tajweed Colour Guide</h2>
                <p className="text-xs text-gray-500 mb-4">Look for these colours in the PDF text.</p>
                <div className="space-y-2.5">
                  {TAJWEED_RULES.map(rule => (
                    <div key={rule.name} className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-gray-50 group">
                      <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 shadow-sm" style={{ background: rule.color }} />
                      <div>
                        <p className="text-xs font-bold text-gray-900">{rule.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{rule.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link href="/quran/tajweed" className="block text-center bg-purple-600 text-white py-2 rounded-xl text-sm font-bold hover:bg-purple-700">
                    🎨 Tajweed Digital Reader →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
