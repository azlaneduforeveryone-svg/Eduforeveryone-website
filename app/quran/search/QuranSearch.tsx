"use client";
import { useEffect, useMemo, useRef, useState, Fragment } from "react";
import Link from "next/link";
import SurahName from "@/components/quran/SurahName";
import { SURAH_META } from "@/lib/quranSurahMeta";
import { buildWordIndex, matchWords, normFor, guessLang, type SearchLang, type WordIndex } from "@/lib/quranSearch";

// Search files built by scripts/quran-search-data.ts (Quran order, 6,236 ayahs).
interface ArFile { ayahCounts: number[]; ayahs: string[] }
interface WbwFile { ayahCounts: number[]; ayahs: string[][] }

const PAGE = 50;
const LANGS: { id: SearchLang; label: string; hint: string }[] = [
  { id: "ar", label: "Arabic", hint: "e.g. \u0627\u0644\u0635\u0628\u0631  or  \u064A\u0627 \u0627\u064A\u0647\u0627 \u0627\u0644\u0630\u064A\u0646 \u0627\u0645\u0646\u0648\u0627" },
  { id: "en", label: "English", hint: "e.g. patience  or  those who believe" },
  { id: "ur", label: "\u0627\u0631\u062F\u0648", hint: "\u0645\u062B\u0644\u0627\u064B: \u0635\u0628\u0631  \u06CC\u0627  \u062C\u0646\u062A" },
];
const URDU_FONT = "var(--font-indopak), 'Noto Naskh Arabic', serif";
const splitArabic = (t: string) => t.split(/([ \u00A0])/);

/** Ayah references in Quran order: [surah, ayah, global number]. */
function refsFrom(counts: number[]): [number, number, number][] {
  const out: [number, number, number][] = [];
  let g = 0;
  counts.forEach((c, i) => { for (let a = 1; a <= c; a++) out.push([i + 1, a, ++g]); });
  return out;
}

export default function QuranSearch() {
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState<SearchLang>("ar");
  const [userPickedLang, setUserPickedLang] = useState(false);
  const [ar, setAr] = useState<ArFile | null>(null);
  const [wbw, setWbw] = useState<Partial<Record<"en" | "ur", WbwFile>>>({});
  const [error, setError] = useState(false);
  const [shown, setShown] = useState(PAGE);
  const [debounced, setDebounced] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const urlRead = useRef(false);

  // Start from ?q= and ?lang= so searches can be shared and opened from other pages.
  useEffect(() => {
    if (urlRead.current) return; // read the address once (React may run this twice in development)
    urlRead.current = true;
    const p = new URLSearchParams(window.location.search);
    const q = p.get("q") ?? "";
    const l = p.get("lang") as SearchLang | null;
    setQuery(q); setDebounced(q);
    if (l && ["ar", "en", "ur"].includes(l)) { setLang(l); setUserPickedLang(true); }
    else if (q) setLang(guessLang(q));
    inputRef.current?.focus();
  }, []);

  // Typing in another script switches between Arabic and English, unless the user chose.
  useEffect(() => {
    if (userPickedLang || !query.trim()) return;
    const g = guessLang(query);
    if (g === "en" && lang !== "en") setLang("en");
    if (g === "ar" && lang === "en") setLang("ar");
  }, [query, userPickedLang, lang]);

  // Search 250 ms after typing stops. Nothing to do when they already agree (also on page load,
  // so the ?q= search is not wiped by an empty first run).
  useEffect(() => {
    if (query === debounced) return;
    const t = setTimeout(() => setDebounced(query), 250);
    return () => clearTimeout(t);
  }, [query, debounced]);

  useEffect(() => {
    setShown(PAGE);
    if (!urlRead.current || debounced !== query) return; // write only settled searches, after reading
    const url = new URL(window.location.href);
    if (debounced) { url.searchParams.set("q", debounced); url.searchParams.set("lang", lang); }
    else { url.searchParams.delete("q"); url.searchParams.delete("lang"); }
    window.history.replaceState(null, "", url.toString());
  }, [debounced, lang, query]);

  // Arabic text is always needed to show results; English/Urdu only when used.
  useEffect(() => {
    if (ar) return;
    fetch("/quran/search/ar.json").then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(setAr).catch(() => setError(true));
  }, [ar]);
  useEffect(() => {
    if (lang === "ar" || wbw[lang]) return;
    fetch(`/quran/search/${lang}.json`).then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then((d: WbwFile) => setWbw(w => ({ ...w, [lang]: d }))).catch(() => setError(true));
  }, [lang, wbw]);

  const refs = useMemo(() => (ar ? refsFrom(ar.ayahCounts) : []), [ar]);
  const arWords = useMemo(() => (ar ? ar.ayahs.map(t => t.split(/[ \u00A0]/)) : []), [ar]);
  const index = useMemo<Partial<Record<SearchLang, WordIndex[]>>>(() => {
    const out: Partial<Record<SearchLang, WordIndex[]>> = {};
    if (ar) out.ar = arWords.map(w => buildWordIndex("ar", w));
    if (wbw.en) out.en = wbw.en.ayahs.map(w => buildWordIndex("en", w));
    if (wbw.ur) out.ur = wbw.ur.ayahs.map(w => buildWordIndex("ur", w));
    return out;
  }, [ar, arWords, wbw]);

  const norm = normFor(lang, debounced);
  const tooShort = debounced.trim() !== "" && norm.replace(/ /g, "").length < 2;
  const ready = !!ar && (lang === "ar" || !!wbw[lang]);
  const results = useMemo(() => {
    const idx = index[lang];
    if (!idx || !norm || tooShort) return [];
    const out: { i: number; hit: number[] }[] = [];
    idx.forEach((x, i) => {
      const hit = matchWords(x, norm, lang === "en");
      if (hit) out.push({ i, hit });
    });
    return out;
  }, [index, lang, norm, tooShort]);

  const chooseLang = (l: SearchLang) => { setLang(l); setUserPickedLang(true); inputRef.current?.focus(); };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/quran" className="hover:text-teal-600">Quran</Link>
        <span>/</span>
        <span className="text-gray-900">Search</span>
      </nav>

      <div className="bg-gradient-to-b from-teal-600 to-teal-700 text-white rounded-2xl p-6 sm:p-8 mb-5">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">Search the Quran</h1>
        <p className="text-teal-100 text-sm mb-5">
          Type Arabic words (harakat not needed), or an English or Urdu meaning.
        </p>
        <form onSubmit={e => { e.preventDefault(); setDebounced(query); }} role="search">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={LANGS.find(l => l.id === lang)!.hint}
              dir="auto"
              aria-label="Search the Quran"
              className="flex-1 min-w-0 rounded-xl px-4 py-3 text-gray-900 text-lg outline-none focus:ring-4 focus:ring-teal-300"
              style={lang !== "en" ? { fontFamily: lang === "ur" ? URDU_FONT : "var(--font-arabic), serif" } : undefined}
            />
            <button type="submit" className="px-5 rounded-xl bg-white text-teal-700 font-bold hover:bg-teal-50">Search</button>
          </div>
        </form>
        <div className="flex flex-wrap items-center gap-2 mt-4" role="group" aria-label="Search in">
          <span className="text-teal-100 text-xs">Search in:</span>
          {LANGS.map(l => (
            <button key={l.id} type="button" onClick={() => chooseLang(l.id)} aria-pressed={lang === l.id}
              className={`px-3 py-1 rounded-full text-sm font-bold border transition-colors ${lang === l.id ? "bg-white text-teal-700 border-white" : "bg-white/10 text-white border-white/30 hover:bg-white/20"}`}
              style={l.id === "ur" ? { fontFamily: URDU_FONT } : undefined}>
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Status */}
      <div className="text-sm text-gray-500 mb-4 min-h-[1.25rem]" aria-live="polite">
        {error ? <span className="text-red-600">Could not load the search data. Please check your connection and try again.</span>
          : !ready ? "Loading search data..."
          : tooShort ? "Type at least 2 letters."
          : !debounced.trim() ? "Results appear as you type."
          : results.length === 0 ? (
            <>No ayahs found for &ldquo;{debounced}&rdquo; in {LANGS.find(l => l.id === lang)!.label}.
              {lang === "ar" && " Try fewer words, or search the meaning in English or Urdu."}
              {lang === "ur" && " If you typed Arabic, choose Arabic above."}</>
          )
          : <><strong className="text-gray-900">{results.length.toLocaleString()}</strong> {results.length === 1 ? "ayah" : "ayahs"} found</>}
      </div>

      {/* Results */}
      <div className="space-y-3">
        {ready && results.slice(0, shown).map(({ i, hit }) => {
          const [s, a, g] = refs[i];
          const meta = SURAH_META[s - 1];
          const hits = new Set(hit);
          const words = lang === "ar" ? null : wbw[lang]!.ayahs[i];
          return (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2 mb-3">
                <Link href={`/quran/${s}#ayah-${g}`} className="text-sm font-bold text-teal-700 hover:underline">
                  {meta.name} {s}:{a}
                </Link>
                <SurahName surah={s} size={20} className="text-gray-500" />
              </div>
              {/* Arabic: QPC Hafs text, unchanged; matched words highlighted in Arabic search */}
              <p className="font-quran-qpc-hafs text-right text-gray-900" dir="rtl" style={{ fontSize: "26px", lineHeight: 2.3 }}>
                {lang === "ar"
                  ? (() => { let w = -1; return splitArabic(ar!.ayahs[i]).map((part, k) => {
                      if (part === " " || part === "\u00A0") return <Fragment key={k}>{part}</Fragment>;
                      w++;
                      return hits.has(w) ? <mark key={k} className="bg-amber-200 text-inherit rounded px-0.5">{part}</mark> : <Fragment key={k}>{part}</Fragment>;
                    }); })()
                  : ar!.ayahs[i]}
              </p>
              {words && (
                <p className="mt-2 text-sm text-gray-600 leading-relaxed" dir={lang === "ur" ? "rtl" : "ltr"}
                   style={lang === "ur" ? { fontFamily: URDU_FONT, lineHeight: 2 } : undefined}>
                  {words.map((w, k) => (
                    <Fragment key={k}>
                      {k > 0 && " "}
                      {hits.has(k) ? <mark className="bg-amber-200 text-gray-900 rounded px-0.5">{w}</mark> : w}
                    </Fragment>
                  ))}
                </p>
              )}
            </div>
          );
        })}
      </div>
      {ready && results.length > shown && (
        <button onClick={() => setShown(n => n + PAGE)}
          className="mt-5 w-full py-3 rounded-xl border border-gray-200 bg-white font-semibold text-gray-700 hover:border-teal-400">
          Show more ({(results.length - shown).toLocaleString()} left)
        </button>
      )}

      <p className="text-xs text-gray-400 text-center mt-10">
        Arabic: KFGQPC QPC Hafs. Word-by-word meanings: English by Tarteel AI and Urdu, from the{" "}
        <a href="https://qul.tarteel.ai" target="_blank" rel="noopener noreferrer" className="underline">Quranic Universal Library</a>.
        Translation search uses word-by-word meanings, so it finds literal wording.
      </p>
    </div>
  );
}
