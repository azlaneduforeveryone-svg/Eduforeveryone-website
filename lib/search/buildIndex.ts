/**
 * Builds the site search index. SERVER-ONLY: call it from a page.tsx and pass
 * the result to the client search box as a prop, so the big data files
 * (notes, mind maps, IELTS passages) never reach the browser. Only titles,
 * links and a short list of key words are sent.
 */
import type { SearchEntry } from "./fuzzy";
import { SEARCH_DATA } from "@/lib/searchData";
import { ALL_O_LEVEL_TOPICS } from "@/lib/courses/accountingSyllabus";
import { ALL_O_LEVEL_BIOLOGY_TOPICS } from "@/lib/courses/biologySyllabus";
import { ALL_MATHS_TOPICS } from "@/lib/courses/mathsSyllabus";
import { MATHS_REVISION } from "@/lib/courses/mathsRevision";
import { O_LEVEL_ACCOUNTING_REVISION } from "@/lib/courses/oLevelAccountingRevision";
import { O_LEVEL_BIOLOGY_REVISION } from "@/lib/courses/oLevelBiologyRevision";
import type { TopicRevision } from "@/lib/courses/oLevelAccountingRevisionTypes";
import { SURAH_META } from "@/lib/quranSurahMeta";
import { PASSAGES } from "@/lib/ielts/readingData";
import { HOME_SECTIONS } from "@/lib/homeSections";

/** Key terms from a topic's mind map: branch labels and the term before each ":". */
function topicKeywords(rev: TopicRevision | undefined): string {
  if (!rev) return "";
  const terms = new Set<string>();
  const add = (s: string) =>
    s
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length >= 3)
      .forEach((w) => terms.add(w));
  add(rev.mindMap.centre);
  for (const b of rev.mindMap.branches) {
    add(b.label);
    for (const item of b.items) add(item.split(":")[0]);
  }
  return Array.from(terms).join(" ");
}

let cached: SearchEntry[] | null = null;

export function getSearchIndex(): SearchEntry[] {
  if (cached) return cached;

  const pages: SearchEntry[] = SEARCH_DATA.map((s) => ({
    t: s.title,
    h: s.href,
    c: s.category,
    e: s.emoji,
    d: s.description,
    k: s.tags.join(" "),
  }));

  const accounting: SearchEntry[] = ALL_O_LEVEL_TOPICS.map((tp) => ({
    t: tp.topicTitle,
    h: `/courses/accounting/o-level/${tp.slug}`,
    c: "O Level Accounting",
    e: "📊",
    d: `Topic ${tp.topic}`,
    k: `accounting 7707 ${topicKeywords(O_LEVEL_ACCOUNTING_REVISION[tp.topic])}`,
  }));

  const biology: SearchEntry[] = ALL_O_LEVEL_BIOLOGY_TOPICS.map((tp) => ({
    t: tp.topicTitle,
    h: `/courses/biology/o-level/${tp.slug}`,
    c: "O Level Biology",
    e: "🧬",
    d: `Topic ${tp.topic}`,
    k: `biology 5090 ${topicKeywords(O_LEVEL_BIOLOGY_REVISION[tp.topic])}`,
  }));

  const maths: SearchEntry[] = ALL_MATHS_TOPICS.map((tp) => ({
    t: tp.topicTitle,
    h: `/courses/mathematics/${tp.slug}`,
    c: "Maths",
    e: "🧮",
    d: tp.oLevel ? `O Level ${tp.oLevel}, IGCSE ${tp.topic}` : `IGCSE ${tp.topic} (Extended)`,
    k: `maths math mathematics 4024 0580 ${topicKeywords(MATHS_REVISION[tp.topic])}`,
  }));

  const surahs: SearchEntry[] = SURAH_META.map((s) => ({
    t: `Surah ${s.name}`,
    h: `/quran/${s.number}`,
    c: "Surah",
    e: "📖",
    d: `Surah ${s.number}, ${s.ayahs} ayahs`,
    // Common spellings: "al baqara", "baqarah", surah number.
    k: `quran surah ${s.number} ${s.name.replace(/^(al|an|ar|as|ash|at|az|ad|adh)-/i, "")} ${s.name.replace(/[^A-Za-z]/g, "")}`,
  }));

  const passages: SearchEntry[] = PASSAGES.map((p) => ({
    t: p.title,
    h: `/ielts/reading/${p.id}`,
    c: "IELTS Reading",
    e: "📰",
    d: "IELTS reading passage",
    k: "ielts reading passage",
  }));

  // Every tile on the home page (IELTS mock, GMAT Quant, Duas...), labelled by section.
  const tiles: SearchEntry[] = HOME_SECTIONS.flatMap((sec) =>
    sec.tiles.map((tile) => ({
      t: sec.id === "ielts" || sec.id === "gmat" ? `${sec.chip} ${tile.name}` : tile.name,
      h: tile.href,
      c: sec.chip,
      e: "🔗",
      k: `${sec.title} ${sec.chip}`,
    }))
  );

  // Keep the first entry for each link.
  const seen = new Set<string>();
  cached = [...pages, ...tiles, ...accounting, ...biology, ...maths, ...surahs, ...passages].filter((e) => {
    if (seen.has(e.h)) return false;
    seen.add(e.h);
    return true;
  });
  return cached;
}
