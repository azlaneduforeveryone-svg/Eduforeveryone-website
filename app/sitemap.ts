import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eduforeveryone.com";
  const now = new Date();

  return [
    // ── Core Pages ──────────────────────────────────────────────
    { url: base,                           lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/courses`,              lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/notes`,                lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/quiz`,                 lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/tools`,                lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/games`,                lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/about`,                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,              lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy-policy`,       lastModified: now, changeFrequency: "monthly", priority: 0.4 },

    // ── Courses ─────────────────────────────────────────────────
    { url: `${base}/courses/math-algebra-basics`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses/science-biology-cells`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/courses/history-world-war-2`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Notes ───────────────────────────────────────────────────
    { url: `${base}/notes/algebra-cheatsheet`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/notes/cell-biology-notes`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/notes/essay-writing-guide`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Quizzes ─────────────────────────────────────────────────
    { url: `${base}/quiz/algebra-quiz`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/quiz/cell-biology-quiz`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/quiz/wwii-quiz`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Tools ───────────────────────────────────────────────────
    { url: `${base}/tools/simple-calculator`,        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/scientific-calculator`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/cfa-calculator`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools/number-to-words`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // ── Games ───────────────────────────────────────────────────
    { url: `${base}/games/math-puzzle`,              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/games/word-puzzle`,              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/games/quiz-battle`,              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}