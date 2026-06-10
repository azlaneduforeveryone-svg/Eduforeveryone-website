# EduForEveryone.com — SEO & Homepage Improvement Instructions
# For: Claude Code (VS Code extension)
# Date: June 2026
# Mode: SAFE — data-preserving. Read the Safety Rules before touching anything.

---

## ⛔ SAFETY RULES — READ FIRST, NON-NEGOTIABLE

These rules override every instruction below. If any task conflicts with these rules, STOP and ask me instead of proceeding.

1. **Work on a new git branch.** Before any change, run:
   ```
   git checkout -b seo-improvements-june2026
   ```
   Commit after each completed phase with a descriptive message. NEVER commit directly to main/master. NEVER force-push.

2. **NEVER delete, truncate, overwrite, or "regenerate" any data file.** Protected file types and locations (do not modify content inside them):
   - All Quran data: surah text, ayah data, translations, tajweed data, audio file references, PDF files
   - All IELTS question banks: reading passages, question JSON/TS data files, writing prompts data, listening data, speaking cue cards
   - All quiz data files (Islamic Quiz, subject quizzes, Quiz Battle, WordWise word lists)
   - All course content files and lesson data
   - Any file in `/public` containing data, PDFs, audio, or images
   - `.env`, `.env.local`, Firebase config, API keys, auth config
   - `CLAUDE.md` and any existing protection rules in it
   - Database/Firestore rules and any user data

3. **You may READ data files** to understand structure (e.g., to build surah page metadata), but modifications to data files are forbidden. If a task seems to require editing a data file, STOP and ask me first.

4. **Additive over destructive.** Prefer creating new files and new routes over rewriting existing ones. When editing an existing page component, change only the specific elements named in the task (text, links, metadata, JSX structure of presentational sections). Do not refactor, reformat, or "clean up" unrelated code.

5. **Verify after every phase.** Run `npm run build` (or the project's build command) after each phase. If the build fails, fix the failure before moving on. If you cannot fix it within the scope of these rules, revert the phase and report.

6. **No new dependencies** unless strictly necessary. If a task needs a package, ask me before installing.

7. **Do not invent facts.** Where these instructions say `[NEEDS AZLAN'S INPUT]`, insert a clearly marked placeholder (`<!-- TODO: Azlan to provide -->`) — do not fabricate statistics, names, testimonials, or claims.

8. **Inspect before assuming.** This is a Next.js project, but routing style (App Router vs Pages Router), data file locations, and component structure must be discovered by reading the codebase — not assumed. Start every phase by locating the relevant files.

---

## PHASE 0 — Reconnaissance (no changes)

Before editing anything:
1. Map the project: routing style, where page metadata is defined (metadata export / Head component / layout), where the homepage, /ielts, /quran, /courses, /islamic-studies pages live.
2. Locate the data files for: Quran surahs, IELTS writing prompts, IELTS reading passages, FAQ content.
3. List your findings in a file `seo-audit-notes.md` at project root (this is your only new root file; it's a working note, not deployed).
4. Confirm with a build that the project currently compiles before you change anything.

---

## PHASE 1 — Fix broken & misleading links (bugs)

These are wrong link targets. Fix the `href` only; do not redesign the components.

1. **Homepage bottom CTA "Play Games 🎮"** currently links to `/courses`. Change to `/games`.
2. **Homepage games section "View all →"** currently links to `/courses`. Change to `/games`.
3. **/ielts page — misleading links.** The following currently point to pages that don't match their labels:
   - "Take Free Diagnostic Test" → links to `/ielts/reading`. Either relabel the button to "Start Reading Practice" OR remove it. Do NOT leave a "diagnostic test" label pointing at a passage list.
   - "Full-Length Practice Tests — Simulated exam conditions" card → no such feature exists. REMOVE this card.
   - "Academic Vocabulary Banks — 2,500+ essential words" card → links to `/ielts` itself; content doesn't exist. REMOVE this card.
   - "Band Score Calculator" card → links to `/ielts` itself; doesn't exist. REMOVE this card. (Optional: leave a `<!-- TODO: build band score calculator -->` comment — it would be a good future feature.)
   - "IELTS UKVI" and "Computer vs Paper" explore-links that point back to `/ielts` itself → convert from links to plain text chips, or anchor-link them to the relevant section on the same page (`#test-types`, `#exam-format`).
4. **Navigation inconsistency:** the nav on `/courses` omits the IELTS link while other pages include it. Make the nav identical across all pages — ideally by confirming all pages use one shared Nav component; if any page has a duplicated/forked nav, point it to the shared component.

Commit: `fix: broken CTAs and misleading links on homepage and IELTS hub`

---

## PHASE 2 — Remove credibility-damaging claims

Text changes only.

1. Homepage stats row: replace the four stats (`100% Free Forever / 4+ Subjects / 10+ Free Tools / ∞ Students Supported`) with verifiable, specific numbers pulled from the actual data files. Use this pattern (verify exact counts against the codebase before writing them):
   - `11 IELTS Reading Passages` (count the actual passage files)
   - `20 Writing Prompts` (count actual prompts)
   - `40+ Quran Translations`
   - `100% Free — No Sign-up`
2. Homepage closing CTA: replace "Join thousands of students who learn for free every day" with "Everything is free. No sign-up. No credit card. Start learning in one click."
3. `/ielts` closing section: replace "guarantee results" — change "Use our expert tools today to build confidence and guarantee results" to "Practice with real exam-style questions and track your progress — completely free." NEVER use the words "guarantee" or "guaranteed" anywhere on the site in relation to scores.
4. Remove the "🧬 Science Quiz — 5 Questions" tile from the homepage scrolling strip (advertising a 5-question quiz undermines credibility). Leave the quiz itself untouched.
5. Footer copyright: soften "Unauthorized use, copying or distribution is strictly prohibited." to "© 2026 EduForEveryone. Free for personal and educational use."

Commit: `content: remove unverifiable claims and guarantee language`

---

## PHASE 3 — Metadata overhaul (titles, descriptions, canonicals)

Rules for this phase:
- Every page gets a unique `<title>` (≤60 chars where possible) and unique meta description (≤155 chars).
- Every page gets a correct canonical URL.
- DELETE all `meta keywords` tags site-wide (ignored by Google since 2009).
- Update any "2025" in titles/descriptions/headings to "2026" — or remove the year where it adds nothing.

Apply these exact values (adjust only if char limits force trimming):

| Page | Title | Meta Description |
|---|---|---|
| `/` | Free IELTS Practice & Quran Online — EduForEveryone | Free IELTS practice tests for all 4 skills, Quran with 40+ translations, math tools and quizzes. No fees, no sign-up, ever. |
| `/ielts` | Free IELTS Preparation 2026 — Academic & General Training | Free IELTS prep: test format, band scores 0–9, marking criteria and practice for Listening, Reading, Writing & Speaking. No sign-up. |
| `/ielts/reading` | IELTS Reading Practice — Free Tests with Instant Scoring | 11 free IELTS Reading passages (Academic & General Training) with T/F/NG, MCQ and sentence completion. Instant scoring and explanations. |
| `/ielts/writing` | IELTS Writing Practice — Task 1 & Task 2 with AI Feedback | 20 free IELTS Writing prompts: Task 1 charts, maps, processes and Task 2 essays. Timed practice with word counter and AI band feedback. |
| `/ielts/listening` | IELTS Listening Practice — Free 4-Section Tests | Free IELTS Listening practice with 4-section tests and audio. Practice all question types with instant scoring. No sign-up needed. |
| `/ielts/speaking` | IELTS Speaking Practice — Part 1, 2 & 3 Cue Cards | Free IELTS Speaking practice: Part 1 questions, Part 2 cue cards and Part 3 discussions with model answers. |
| `/quran` | Read Quran Online — 40+ Translations, Tajweed & PDF | Read the Holy Quran online free: 40+ translations (English, Urdu, Hindi), color-coded Tajweed, audio recitation, 15-line PDF. Ad-free. |
| `/quran/read` | Quran with English & Urdu Translation — All 114 Surahs | Complete Quran with 40+ translations, audio recitation, bookmarks and dark mode. All 114 surahs, 6,236 ayahs. Free and ad-free. |
| `/quran/tajweed` | Color Coded Tajweed Quran Online — Interactive Rules | Read the Quran with color-coded Tajweed rules. Click any word to learn the rule applied. 8 rules, all 114 surahs, free. |
| `/quran/pdf/15line` | 15 Line Quran PDF — Uthmani Script (Read Online & Free) | Traditional 15-line Uthmani script Quran PDF, 612 pages — the standard mushaf used in Pakistan and South Asia. Read free online. |
| `/quran/pdf/13line` | Color Coded Tajweed Quran PDF — 13 Line Mushaf | 13-line color-coded Tajweed Quran PDF, 851 pages. Every Tajweed rule highlighted in its color. Free, ad-free reading. |
| `/islamic-studies` | Islamic Studies — Quran, Islamic Quiz in 3 Languages | Free Islamic Studies: read the Quran with 40+ translations, Islamic Quiz in English, Urdu & Hindi across 7 categories. Ad-free forever. |
| `/courses` | Free Online Courses — Math, Science, English & History | Free courses including a complete 20-topic Mathematics curriculum from elementary to university level. Learn at your own pace. |
| `/tools` | Free Calculators — Scientific, Financial (TVM/NPV/IRR) & More | Free online tools: scientific calculator, financial calculator (TVM, NPV, IRR, bonds), number-to-words in 8 languages. |

**CRITICAL:** `/quran` and its sub-pages currently fall back to the default site title. Confirm each gets its own metadata after the change by checking the rendered HTML (`npm run build` + inspect output, or dev-server view-source).

Commit: `seo: unique titles, descriptions, canonicals; remove meta keywords; 2025→2026`

---

## PHASE 4 — Homepage restructure

Restructure the homepage hero and section order. Do not delete any section's underlying components — reorder and reword.

1. **New H1:** `Free IELTS Practice Tests — All 4 Skills, No Sign-up`
   Sub-headline: `Reading, Writing, Listening and Speaking practice with instant scoring and AI feedback. Plus the Holy Quran with 40+ translations, free math tools and quizzes.`
2. **Hero CTAs:** Primary button → `Start IELTS Practice` → `/ielts`. Secondary button → `Read the Quran` → `/quran`. (Replace current "Browse Courses" / "Play Math Puzzle" pair.)
3. **Section order (top to bottom):**
   1. Hero (IELTS-led, as above)
   2. IELTS Preparation section (the existing 4-skills cards — move up from 4th position)
   3. Islamic Studies / Quran section (build a small section mirroring the IELTS one: Quran card + Islamic Quiz card linking to `/quran` and `/quiz/islamic-quiz`)
   4. Stats row (the new verifiable stats from Phase 2)
   5. Tools strip (calculators)
   6. Games strip
   7. Courses + Notes + Quizzes (condensed)
   8. FAQ
   9. Closing CTA (primary: Start IELTS Practice)
4. **FAQ update:** Add two FAQs to the existing list:
   - "Is the IELTS practice really free?" → "Yes. All Reading, Writing, Listening and Speaking practice is free with no sign-up. AI writing feedback is also free."
   - "Can I read the Quran with Urdu translation?" → "Yes — the Quran reader includes 40+ translations including English, Urdu and Hindi, with audio recitation and a color-coded Tajweed mode."
5. Keep the scrolling tiles strip but reorder so IELTS and Quran tiles come first; remove the Science Quiz tile (Phase 2).

Commit: `feat: IELTS-led homepage restructure`

---

## PHASE 5 — Quran SEO expansion (highest traffic potential)

**Read-only on data; new routes/metadata only.**

1. Inspect how surah pages are routed (e.g., `/quran/read/[surah]`). If individual surah URLs already exist:
   - Give each surah page a unique title: `Surah {TransliteratedName} ({ArabicName}) with Urdu & English Translation — Surah {Number}` (trim to fit 60 chars; prioritize transliterated name + "translation").
   - Unique description: `Read Surah {Name} (Surah {Number}, {AyahCount} ayahs) online with 40+ translations including Urdu and English. Audio recitation, free and ad-free.`
   - Generate these programmatically from the existing surah metadata in the data files — do NOT hand-write 114 entries and do NOT modify the data files themselves.
2. If surah-level URLs do NOT exist (reader is a single-page client app), do NOT rebuild the reader. Instead create lightweight statically-generated landing pages at `/quran/surah/[slug]` containing: surah name (Arabic + transliteration), number, ayah count, revelation place, a 2–3 sentence intro `[NEEDS AZLAN'S INPUT — generate neutral factual intros from surah metadata only, no tafsir claims]`, and a prominent "Read Surah {Name} →" button that deep-links into the reader. Add all of these to the sitemap.
3. **Sitemap:** ensure `sitemap.xml` exists and includes every public route including all surah pages, all reading passage pages, and (after Phase 6) all writing prompt pages. If no sitemap generation exists, add Next.js sitemap generation (built-in `sitemap.ts` — no new dependency).
4. **robots.txt:** confirm it exists, allows crawling, and references the sitemap.

Commit: `seo: surah-level metadata/landing pages + sitemap + robots`

---

## PHASE 6 — Individual IELTS Writing prompt pages

1. Read the writing prompts data file (read-only). For each of the 20 Task 1 prompts (and Task 2 if structured similarly), create an individual route, e.g. `/ielts/writing/task-1/bar-chart-car-ownership` (slug derived from prompt content).
2. Each page contains: the full prompt, task type badge, time/word requirements, a "Start Writing →" button into the existing editor with that prompt preloaded, and a model answer section.
3. **Model answers:** generate a Band 8-level model answer for each prompt, but wrap each in a clearly marked block and add to `seo-audit-notes.md` a checklist: `MODEL ANSWERS — PENDING AZLAN'S REVIEW BEFORE DEPLOY`. Do not present them as examiner-written; label on-page as "Sample Band 8 Response" with a short note "Model answer written by EduForEveryone — for guidance only."
4. Unique title pattern: `IELTS Task 1 {ChartType} Sample Answer — {ShortTopic} | EduForEveryone`. Unique descriptions per page.
5. The `/ielts/writing` hub keeps its current card grid; each card now links to its prompt page (in addition to or instead of launching the editor directly — preserve the existing direct-practice flow if it's wired into the editor; ask me if unsure).
6. Add all new pages to the sitemap.

Commit: `feat: individual writing prompt pages with model answers (pending review)`

---

## PHASE 7 — Structured data (JSON-LD)

Add JSON-LD scripts. No visual changes.

1. **Organization** schema on the root layout: name `EduForEveryone`, url, logo.
2. **WebSite** schema with `potentialAction` SearchAction only if site search exists (check first; if no search, omit SearchAction).
3. **FAQPage** schema on `/` and `/ielts`, generated from the exact FAQ text already on those pages (keep schema and visible text in sync — generate from the same data source if FAQs live in a data structure).
4. **BreadcrumbList** on IELTS sub-pages and Quran sub-pages.
5. Validate output structure (well-formed JSON, required fields). Note in `seo-audit-notes.md`: "Validate with Google Rich Results Test after deploy."

Commit: `seo: JSON-LD structured data (Organization, FAQPage, Breadcrumbs)`

---

## PHASE 8 — Footer & internal linking

1. Footer "Subjects" column: currently plain text. Either link each subject to its filtered courses view, or replace the column entirely with the site's real pillars:
   - Column "IELTS": Reading, Writing, Listening, Speaking (linked)
   - Column "Islamic Studies": Quran, Tajweed Quran, 15-Line PDF, Islamic Quiz (linked)
   - Column "Learn": Courses, Notes, Quizzes, Tools, Games (linked)
   - Column "Legal/About": About, Privacy Policy
2. Ensure the footer is a single shared component used by all pages.

Commit: `seo: footer internal linking restructure`

---

## PHASE 9 — About page (E-E-A-T)

1. Check the current About page state. Build/fix a real About page with this structure, using placeholders for personal facts:
   - Who built this: `<!-- TODO: Azlan to provide 2–3 sentence bio. Suggested angle: finance professional (ACCA) based in Saudi Arabia who built EduForEveryone as a free education project for students in Pakistan and South Asia. -->`
   - Why it's free, what's on the site, what's coming.
   - A contact method: `<!-- TODO: Azlan to provide contact email -->`
2. Do not fabricate credentials, testimonials, team members, or history.

Commit: `feat: About page skeleton (pending Azlan's bio + contact)`

---

## FINAL VERIFICATION CHECKLIST

Run through all of these and record results in `seo-audit-notes.md`:

- [ ] `npm run build` passes with zero errors
- [ ] All data files untouched: `git diff --stat main..seo-improvements-june2026` shows NO changes to data/JSON/content files, `/public` assets, env/config files
- [ ] Every public page has a unique title + description + canonical (spot-check rendered HTML for `/`, `/ielts`, `/quran`, `/quran/pdf/15line`, one surah page, one writing prompt page)
- [ ] No `meta keywords` tags remain anywhere
- [ ] No occurrence of: "guarantee", "∞", "thousands of students", "2025" in titles/headings
- [ ] All homepage CTAs link to correct destinations (Games→/games, etc.)
- [ ] sitemap.xml includes all new pages; robots.txt references it
- [ ] FAQ JSON-LD matches visible FAQ text exactly
- [ ] Nav and footer identical on every page
- [ ] List of items still needing my input: About bio, contact email, model-answer review

**Do not merge to main. Leave the branch ready for my review and tell me exactly what needs my manual input before deploy.**
