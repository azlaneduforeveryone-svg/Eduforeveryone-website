"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// ── Surah Names ───────────────────────────────────────────────────────────────
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

// ── PDF Page Mappings ────────────────────────────────────────────────────────
const SURAH_15LINE: Record<number, number> = {
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

const SURAH_13LINE: Record<number, number> = {
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

// ── PDF Files ─────────────────────────────────────────────────────────────────
const PDF_FILES = [
  {
    id: "15line",
    name: "15 Line Standard Quran",
    nameAr: "المصحف الشريف (15 سطر)",
    file: "https://pub-8abd18b123d249afbfea45177c4d7d94.r2.dev/15line-standard.pdf",
    totalPages: 612,
    getPage: (surah: number) => SURAH_15LINE[surah] || 1,
    publisher: "Standard 15-Line Quran Script",
    credit: "Traditional 15-line Uthmani script format",
    hasTajweed: false,
    description: "Classic 15-line per page Uthmani script",
  },
  {
    id: "13line-color",
    name: "13 Line Colour Coded Tajweed",
    nameAr: "المصحف المجود ملون (13 سطر)",
    file: "https://pub-8abd18b123d249afbfea45177c4d7d94.r2.dev/13line-color-tajweed.pdf",
    totalPages: 851,
    getPage: (surah: number) => SURAH_13LINE[surah] || 1,
    publisher: "Colour Coded Tajweed Rules Quran",
    credit: "13 Line Script with Beautiful Colour Coded Tajweed Rules",
    hasTajweed: true,
    description: "Color-coded Tajweed rules for proper recitation",
  },
];

// ── Tajweed Rules ─────────────────────────────────────────────────────────────
const TAJWEED_RULES = [
  {
    name: "Ikhfa",
    nameAr: "إخفاء",
    color: "#00AEEF",
    colorName: "Blue",
    description: "Concealment — pronounced with a light nasal sound",
    detail: "When ن (noon sakin) or tanween is followed by any of these 15 letters: ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك — pronounce with light nasal sound for 2 counts.",
    example: "مِن تَحْتِهِم",
  },
  {
    name: "Ghunna",
    nameAr: "غنة",
    color: "#FF6600",
    colorName: "Orange",
    description: "Nasalization — nasal sound on م and ن with shaddah",
    detail: "When ن or م has a shaddah (ّ), it must be nasalized for 2 counts (2 beats). The sound comes from the nose.",
    example: "إِنَّ الَّذِينَ",
  },
  {
    name: "Ikhfa Meem Saakin",
    nameAr: "إخفاء ميم ساكن",
    color: "#FF1493",
    colorName: "Pink/Magenta",
    description: "When ب comes after م sakin — light nasal sound",
    detail: "When a م (meem) with sukoon is followed by ب (baa), the meem is pronounced with a light nasal sound (ghunna) for 2 counts.",
    example: "تَرْمِيهِم بِحِجَارَة",
  },
  {
    name: "Idghaam",
    nameAr: "إدغام",
    color: "#008000",
    colorName: "Green",
    description: "Merging — letter assimilates into the next",
    detail: "When ن sakin or tanween is followed by ي ن م و ل ر — the noon merges into the following letter. With ghunna for ي ن م و, without ghunna for ل ر.",
    example: "مَن يَقُولُ",
  },
  {
    name: "Qalqala",
    nameAr: "قلقلة",
    color: "#FF0000",
    colorName: "Red",
    description: "Echoing bounce on 5 letters: ق ط ب ج د",
    detail: "The 5 Qalqala letters are: ق ط ب ج د. When any has a sukoon (including at pause/end of word), it produces a slight echoing or bouncing sound.",
    example: "يَخْلُقُ — قُلْ",
  },
  {
    name: "Qalb",
    nameAr: "قلب",
    color: "#000080",
    colorName: "Dark Blue/Navy",
    description: "Conversion — noon becomes meem before ب",
    detail: "When ن sakin or tanween is followed by ب (baa), the noon converts (changes) into a meem م and is recited with ghunna for 2 counts.",
    example: "مِن بَعْدِ",
  },
  {
    name: "Idghaam Meem Saakin",
    nameAr: "إدغام ميم ساكن",
    color: "#008000",
    colorName: "Light Green",
    description: "When م follows another م — merge with ghunna",
    detail: "When a م (meem) with sukoon is followed by another م (meem), both meems merge together and are recited with ghunna (nasal sound) for 2 counts.",
    example: "لَهُم مَّا",
  },
  {
    name: "Madd",
    nameAr: "مد",
    color: "#8B0000",
    colorName: "Dark Red",
    description: "Prolongation — extending vowel sounds",
    detail: "Madd means lengthening/prolongation. Natural Madd (2 counts): ا و ي without cause. Madd due to hamza or sukoon: 4-6 counts. Always shown by elongation marks.",
    example: "جَآءَ — وَلَا الضَّآلِّين",
  },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function QuranPDFViewer() {
  const [selectedPDF,   setSelectedPDF]   = useState(0);
  const [currentPage,   setCurrentPage]   = useState(1);
  const [searchSurah,   setSearchSurah]   = useState("");
  const [showSurahList, setShowSurahList] = useState(false);
  const [showTajweed,   setShowTajweed]   = useState(false);
  const [selectedRule,  setSelectedRule]  = useState<number|null>(null);
  const [showInfo,      setShowInfo]      = useState(true);
  const pageInputRef = useRef<HTMLInputElement>(null);

  const pdf = PDF_FILES[selectedPDF];

  const goToSurah = (surahNum: number) => {
    const page = pdf.getPage(surahNum);
    setCurrentPage(page);
    setShowSurahList(false);
    setSearchSurah("");
  };

  const filteredSurahs = SURAHS.filter(([num, name, nameAr]) =>
    (name as string).toLowerCase().includes(searchSurah.toLowerCase()) ||
    (nameAr as string).includes(searchSurah) ||
    num.toString().includes(searchSurah)
  );

  const pdfUrl = `${pdf.file}#page=${currentPage}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Header ── */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-800 text-white px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Link href="/quran" className="text-teal-200 text-sm hover:text-white">← Digital Reader</Link>
            <span className="text-teal-400">|</span>
            <h1 className="font-bold text-lg">Quran PDF Reader</h1>
          </div>

          {/* PDF Selector */}
          <div className="flex flex-wrap gap-2 mb-3">
            {PDF_FILES.map((f, i) => (
              <button key={f.id} onClick={() => { setSelectedPDF(i); setCurrentPage(1); }}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${selectedPDF === i ? "bg-white text-teal-700" : "bg-white/10 text-white hover:bg-white/20"}`}>
                {f.name}
                {f.hasTajweed && <span className="ml-1.5 text-xs bg-amber-400 text-amber-900 px-1.5 py-0.5 rounded-full">Tajweed</span>}
              </button>
            ))}
          </div>

          {/* Controls row */}
          <div className="flex flex-wrap gap-2 items-center">
            {/* Surah search */}
            <div className="relative">
              <button onClick={() => setShowSurahList(v => !v)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-2 rounded-xl text-sm font-semibold">
                📖 Jump to Surah
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showSurahList && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl z-50 overflow-hidden">
                  <div className="p-3 border-b border-gray-100">
                    <input type="text" value={searchSurah} onChange={e => setSearchSurah(e.target.value)}
                      placeholder="Search Surah name or number..."
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      autoFocus />
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {filteredSurahs.map(([num, name, nameAr]) => (
                      <button key={num} onClick={() => goToSurah(num)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-teal-50 transition-colors text-left">
                        <span className="w-7 h-7 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{num}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{name}</p>
                          <p className="text-xs text-gray-500" style={{fontFamily:"'Amiri',serif"}}>{nameAr}</p>
                        </div>
                        <span className="ml-auto text-xs text-gray-400">p.{pdf.getPage(num)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Page input */}
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-3 py-1.5">
              <span className="text-sm text-teal-200">Page</span>
              <input type="number" ref={pageInputRef} value={currentPage} min={1} max={pdf.totalPages}
                onChange={e => setCurrentPage(Math.min(pdf.totalPages, Math.max(1, parseInt(e.target.value)||1)))}
                className="w-16 bg-transparent text-white text-center text-sm font-bold focus:outline-none" />
              <span className="text-sm text-teal-200">/ {pdf.totalPages}</span>
            </div>

            {/* Prev/Next */}
            <div className="flex gap-1">
              <button onClick={() => setCurrentPage(p => Math.max(1, p-1))}
                disabled={currentPage <= 1}
                className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold disabled:opacity-40">←</button>
              <button onClick={() => setCurrentPage(p => Math.min(pdf.totalPages, p+1))}
                disabled={currentPage >= pdf.totalPages}
                className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold disabled:opacity-40">→</button>
            </div>

            {/* Tajweed Rules toggle */}
            {pdf.hasTajweed && (
              <button onClick={() => setShowTajweed(v => !v)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all ${showTajweed ? "bg-amber-400 text-amber-900" : "bg-white/10 text-white hover:bg-white/20 border border-white/20"}`}>
                🎨 Tajweed Rules
              </button>
            )}

            {/* Info toggle */}
            <button onClick={() => setShowInfo(v => !v)}
              className="px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm">
              ℹ️
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className={`grid gap-4 ${showTajweed ? "lg:grid-cols-3" : "grid-cols-1"}`}>

          {/* ── PDF Viewer ── */}
          <div className={showTajweed ? "lg:col-span-2" : "col-span-1"}>

            {/* Publisher Credit */}
            {showInfo && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">📚 Publisher Credit</p>
                    <p className="text-sm font-semibold text-amber-900">{pdf.publisher}</p>
                    <p className="text-xs text-amber-700 mt-0.5">{pdf.credit}</p>
                    <p className="text-xs text-amber-600 mt-2">
                      ⚠️ These Quran PDFs are shared for educational and religious purposes only.
                      All rights belong to their respective publishers.
                    </p>
                  </div>
                  <button onClick={() => setShowInfo(false)} className="text-amber-400 hover:text-amber-600 text-xl flex-shrink-0 ml-3">×</button>
                </div>
              </div>
            )}

            {/* PDF viewer — loads from Cloudflare R2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden" style={{height:"80vh"}}>
              <iframe
                key={`${pdf.id}-${currentPage}`}
                src={`${pdf.file}#page=${currentPage}`}
                className="w-full h-full border-0"
                title={`${pdf.name} - Page ${currentPage}`}
                allowFullScreen
              />
            </div>

            {/* Page navigation bottom */}
            <div className="flex justify-between items-center mt-3 bg-white rounded-xl px-4 py-3 shadow-sm">
              <button onClick={() => setCurrentPage(p => Math.max(1, p-1))} disabled={currentPage <= 1}
                className="px-4 py-2 bg-teal-600 text-white rounded-xl text-sm font-bold disabled:opacity-40 hover:bg-teal-700">
                ← Previous
              </button>
              <span className="text-sm text-gray-500 font-medium">Page {currentPage} of {pdf.totalPages}</span>
              <button onClick={() => setCurrentPage(p => Math.min(pdf.totalPages, p+1))} disabled={currentPage >= pdf.totalPages}
                className="px-4 py-2 bg-teal-600 text-white rounded-xl text-sm font-bold disabled:opacity-40 hover:bg-teal-700">
                Next →
              </button>
            </div>
          </div>

          {/* ── Tajweed Rules Panel ── */}
          {showTajweed && (
            <div className="space-y-3">
              <div className="bg-white rounded-2xl shadow-sm p-4">
                <h2 className="font-black text-gray-900 text-base mb-1">🎨 Tajweed Color Guide</h2>
                <p className="text-xs text-gray-500 mb-4">Click any rule to learn more. When reading, look for these colors in the text.</p>

                <div className="space-y-2">
                  {TAJWEED_RULES.map((rule, i) => (
                    <button key={rule.name} onClick={() => setSelectedRule(selectedRule === i ? null : i)}
                      className={`w-full text-left rounded-xl border transition-all ${selectedRule === i ? "border-gray-300 bg-gray-50" : "border-gray-100 bg-white hover:border-gray-200"}`}>
                      <div className="flex items-center gap-3 p-3">
                        <div className="w-5 h-5 rounded-full flex-shrink-0" style={{background: rule.color}} />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 text-sm">{rule.name}</p>
                          <p className="text-gray-500 text-xs mt-0.5" style={{fontFamily:"'Amiri',serif"}}>{rule.nameAr}</p>
                        </div>
                        <svg className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${selectedRule===i?"rotate-180":""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      {selectedRule === i && (
                        <div className="px-3 pb-3 border-t border-gray-100 mt-0">
                          <div className="mt-2 space-y-2">
                            <p className="text-xs font-semibold text-gray-700">{rule.description}</p>
                            <p className="text-xs text-gray-600 leading-relaxed">{rule.detail}</p>
                            <div className="bg-gray-50 rounded-lg p-2">
                              <p className="text-xs text-gray-500 mb-1">Example:</p>
                              <p className="text-base font-bold text-right" style={{fontFamily:"'Amiri',serif", color: rule.color}}>
                                {rule.example}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Surah navigator */}
              <div className="bg-white rounded-2xl shadow-sm p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-3">📖 Quick Surah Jump</h3>
                <div className="grid grid-cols-2 gap-1.5 max-h-64 overflow-y-auto">
                  {SURAHS.slice(0, 30).map(([num, name]) => (
                    <button key={num} onClick={() => goToSurah(num)}
                      className={`text-left px-2 py-1.5 rounded-lg text-xs font-medium transition-all border
                        ${pdf.getPage(num) === currentPage ? "bg-teal-600 text-white border-teal-700" : "bg-gray-50 text-gray-700 border-gray-100 hover:border-teal-300 hover:bg-teal-50"}`}>
                      <span className="font-bold mr-1">{num}.</span>{name}
                    </button>
                  ))}
                </div>
                <button onClick={() => setShowSurahList(true)} className="w-full mt-2 text-xs text-teal-600 font-semibold hover:underline">
                  View all 114 Surahs →
                </button>
              </div>

              {/* Link to digital reader */}
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4">
                <p className="text-sm font-bold text-teal-900 mb-1">Want translations & audio?</p>
                <p className="text-xs text-teal-700 mb-3">Switch to the Digital Reader for 40+ translations, audio recitation and dark mode.</p>
                <Link href="/quran" className="block text-center bg-teal-600 text-white py-2 rounded-xl text-sm font-bold hover:bg-teal-700">
                  📖 Open Digital Reader →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
