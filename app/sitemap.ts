import type { MetadataRoute } from "next";
import { MATH_TOPICS } from "@/lib/mathTopics";
import { PASSAGES } from "@/lib/ielts-reading-academic-data";
import { SURAH_META } from "@/lib/quranSurahMeta";
import { TASK1_MODEL_ANSWERS } from "@/lib/ielts-writing-model-answers";
import { GT_TASK1_MODEL_ANSWERS } from "@/lib/ielts-gt-task1-model-answers";
import { TASK2_MODEL_ANSWERS } from "@/lib/ielts-task2-model-answers";
import { getAllCourses, getAllNotes, getAllQuizzes } from "@/lib/data";

type Freq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://eduforeveryone.com";

  const make = (path: string, priority: number, changeFrequency: Freq, lastModified?: Date) => ({
    url: `${base}${path}`,
    ...(lastModified ? { lastModified } : {}),
    changeFrequency,
    priority,
  });

  // ── Static / hub routes ───────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    make("",                            1.0, "weekly"),
    make("/ielts",                      0.9, "weekly"),
    make("/ielts/reading",              0.8, "weekly"),
    make("/ielts/listening",            0.8, "weekly"),
    make("/ielts/writing",              0.8, "weekly"),
    make("/ielts/speaking",             0.8, "weekly"),
    make("/ielts/practice",             0.7, "weekly"),
    make("/ielts/full-test",            0.7, "weekly"),
    make("/ielts/guide",                0.6, "monthly"),
    make("/ielts/progress",             0.4, "monthly"),
    make("/gmat",                       0.9, "weekly"),
    make("/gmat/quant",                 0.8, "weekly"),
    make("/gmat/verbal",                0.8, "weekly"),
    make("/gmat/data-insights",         0.8, "weekly"),
    make("/gmat/full-test",             0.7, "weekly"),
    make("/quran",                      0.9, "weekly"),
    make("/quran/read",                 0.8, "weekly"),
    make("/quran/tajweed",              0.8, "weekly"),
    make("/quran/pdf/15line",           0.7, "monthly"),
    make("/quran/pdf/13line",           0.7, "monthly"),
    make("/islamic-studies",            0.8, "weekly"),
    make("/courses",                    0.9, "weekly"),
    make("/courses/mathematics",        0.8, "weekly"),
    make("/notes",                      0.8, "weekly"),
    make("/quiz",                       0.8, "weekly"),
    make("/quiz/islamic-quiz",          0.8, "weekly"),
    make("/tools",                      0.9, "weekly"),
    make("/tools/simple-calculator",    0.9, "monthly"),
    make("/tools/scientific-calculator",0.9, "monthly"),
    make("/tools/cfa-calculator",       0.9, "monthly"),
    make("/tools/number-to-words",      0.9, "monthly"),
    make("/tools/finance-tools",                            0.9, "weekly"),
    make("/tools/finance-tools/reconciliation/bank",        0.9, "monthly"),
    make("/tools/finance-tools/reconciliation/supplier",    0.9, "monthly"),
    make("/tools/finance-tools/reconciliation/customer",    0.9, "monthly"),
    make("/tools/finance-tools/reconciliation/intercompany",0.9, "monthly"),
    make("/games",                      0.9, "weekly"),
    make("/games/math-puzzle",          0.9, "monthly"),
    make("/games/word-puzzle",          0.9, "monthly"),
    make("/games/quiz-battle",          0.9, "monthly"),
    make("/search",                     0.5, "monthly"),
    make("/about",                      0.7, "monthly"),
    make("/contact",                    0.6, "monthly"),
    make("/privacy-policy",             0.4, "monthly"),
  ];

  // ── Data-driven routes ────────────────────────────────────────────────────
  const courseUrls    = getAllCourses().map(c => make(`/courses/${c.id}`, 0.7, "monthly"));
  const noteUrls      = getAllNotes().map(n => make(`/notes/${n.id}`, 0.7, "monthly"));
  const quizUrls      = getAllQuizzes().map(q => make(`/quiz/${q.id}`, 0.7, "monthly"));
  const mathUrls      = MATH_TOPICS.map(t => make(`/courses/mathematics/${t.id}`, 0.8, "monthly"));
  const readingUrls   = PASSAGES.map(p => make(`/ielts/reading/${p.id}`, 0.7, "monthly"));
  const writingUrls   = TASK1_MODEL_ANSWERS.map(m => make(`/ielts/writing/task-1/${m.slug}`, 0.7, "monthly"));
  const gtWritingUrls = GT_TASK1_MODEL_ANSWERS.map(m => make(`/ielts/writing/gt-task-1/${m.slug}`, 0.7, "monthly"));
  const task2Urls     = TASK2_MODEL_ANSWERS.map(m => make(`/ielts/writing/task-2/${m.slug}`, 0.7, "monthly"));
  const surahUrls     = SURAH_META.map(s => make(`/quran/${s.number}`, 0.7, "monthly"));
  const tajweedUrls   = SURAH_META.map(s => make(`/quran/tajweed/${s.number}`, 0.6, "monthly"));
  const juzUrls       = Array.from({ length: 30 }, (_, i) => make(`/quran/juz/${i + 1}`, 0.5, "monthly"));

  return [
    ...staticRoutes,
    ...courseUrls,
    ...noteUrls,
    ...quizUrls,
    ...mathUrls,
    ...readingUrls,
    ...writingUrls,
    ...gtWritingUrls,
    ...task2Urls,
    ...surahUrls,
    ...tajweedUrls,
    ...juzUrls,
  ];
}
