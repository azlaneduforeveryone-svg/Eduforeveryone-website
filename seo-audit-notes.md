# SEO Audit Notes — Phase 0 Reconnaissance
> Working note (not deployed). Branch: `seo-improvements-june2026`. Created June 2026.

## Project shape
- **Framework:** Next.js 14 **App Router** (`app/` dir). TypeScript.
- **Metadata pattern:** server `page.tsx` exports `export const metadata` (static) or
  `generateMetadata()` (dynamic routes). Client components (`"use client"`) CANNOT export
  metadata — they must be wrapped by a server `page.tsx`.
- **Root layout:** `app/layout.tsx` — shared `<Navbar/>` + `<Footer/>`, AuthProvider, GA4
  (`G-F7MCW76675`). Root `metadata` has a generic title/description, **no `metadataBase`,
  no canonical, no keywords** (good). All pages inherit Navbar + Footer from here.
- **Nav & Footer are single shared components** (`components/Navbar.tsx`,
  `components/Footer.tsx`), imported only in `layout.tsx`. No page forks them.

## Routing map (public pages)
- Home `/` → `app/page.tsx` (server, has metadata + keywords + EducationalOrganization JSON-LD)
- `/ielts` hub, `/ielts/reading` (+ `/ielts/reading/[passageId]`), `/ielts/listening`,
  `/ielts/writing`, `/ielts/speaking`, `/ielts/full-test`, `/ielts/practice`, `/ielts/guide`,
  `/ielts/progress`
- `/quran` (landing), `/quran/read`, `/quran/tajweed` (+ `/[id]`), `/quran/pdf/15line`,
  `/quran/pdf/13line`, `/quran/pdf-reader`, `/quran/[id]` (114 surah reader, SSG),
  `/quran/juz/[juzId]`
- `/courses` (+ `/courses/[id]`, `/courses/mathematics` + `/[topicId]`, lesson pages)
- `/islamic-studies`, `/notes` (+ `/[id]`), `/quiz` (+ `/[id]`, `/islamic-quiz`),
  `/games` (+ math-puzzle, word-puzzle, quiz-battle), `/tools` (+ 4 calculators),
  `/about`, `/contact`, `/privacy-policy`, `/search`, `/leaderboard`, `/profile`, `/calculators`

## Data files — PROTECTED (read-only per Safety Rules)
- IELTS: `lib/ielts-reading-academic-data.ts`, `ielts-reading-gt-data.ts`,
  `ielts-reading-bank.ts`, `ielts-writing-data.ts`, `ielts-listening-data.ts`,
  `ielts-listening-bank.ts`, `ielts-speaking-data.ts`, `ielts-data.ts`, `ielts-types.ts`
- Other: `lib/data.ts` (courses/notes), `lib/searchData.ts`, `lib/mathTopics.ts`
- Quiz/games data embedded in their components (e.g. `IslamicQuizGame.tsx`, `WordWiseGame.tsx`)
- `/public`: `quran-pdfs/`, `ielts/` (audio), `Main_Logo.jpg`, `Islamic_Quiz_Logo.jpeg`,
  `ads.txt`, `googlea9f7e69d3ac60582.html`
- Config (per inner CLAUDE.md, never touch): `.env.local`, `lib/firebase.ts`,
  `next.config.mjs`, `vercel.json`

## Key data structures (for later phases)
- **IELTS Reading passages** (`ielts-reading-academic-data.ts`): exports `PASSAGES: Passage[]`
  at ~line 457, built partly from `READING_BANK` (`ielts-reading-bank.ts`, ids `passage_001…`).
  Hand-written passage ids are `AR-T1…AR-T5` (+ a `GT-A`). Route `/ielts/reading/[passageId]`
  uses `generateStaticParams()` = `PASSAGES.map(p => p.id)` and already has per-passage
  `generateMetadata` (title from `passage.title`). **`passage.questions.length`, `.title`,
  `.id` available.**
- **IELTS Writing prompts** (`ielts-writing-data.ts`): Academic Task 1 pool ids `AT1-A…AT1-J`
  with `chartType`, `chartTypeLabel`, `prompt`, `minWords`. Plus GT Task 1 + Task 2 pools
  (per `WritingPage.tsx`: `academicTask1Pool`, `gtTask1Pool`, `task2Pool`). Good slug source
  for Phase 6.
- **Quran surah metadata:** ⚠️ **NO local data file.** Surah list + names + ayah counts are
  fetched **client-side at runtime** from `https://api.alquran.cloud/v1/surah`
  (`app/quran/QuranPage.tsx`, `QuranReader.tsx`). `JUZ_STARTS` in `JuzPage.tsx` has only Juz
  boundaries (30 entries), not full 114. **DECISION NEEDED at Phase 5** (see below).

## FINDINGS / ISSUES BY PHASE

### Phase 1 (links)
- ✅ Confirmed bugs: Homepage **Games "View all →"** → `/courses` (should be `/games`)
  [`app/page.tsx:200`]; bottom CTA **"Play Games 🎮"** → `/courses` (should be `/games`)
  [`app/page.tsx:357`].
- `/ielts` hub misleading links/cards (`app/ielts/page.tsx`): "Take Free Diagnostic Test"
  (none present — hero CTAs are "Start Free Preparation"/"Take Full Mock Test"/"My Progress"/
  "Download Guide"; verify exact button before relabel), `FREE_TOOLS` array contains
  "Full-Length Practice Tests", "Academic Vocabulary Banks", "Band Score Calculator" cards
  → remove; explore-chips "IELTS UKVI" & "Computer vs Paper" link to `/ielts` itself → convert
  to plain text or anchor links.
- ⚠️ **Phase 1 item 4 (nav inconsistency) — premise NOT reproduced.** Nav is a single shared
  `components/Navbar.tsx` (imported only in layout) and ALREADY includes the IELTS link
  (`Navbar.tsx:10`). `/courses` does not fork the nav. **No action needed; will note as
  already-satisfied.**

### Phase 2 (claims)
- Stats row `100% / 4+ / 10+ / ∞` at `app/page.tsx:87`.
- Closing CTA "Join thousands of students…" at `app/page.tsx:353`.
- "guarantee results" in `app/ielts/page.tsx` closing section.
  - Other `guarantee` hits — `WWILesson.tsx`, `privacy-policy/page.tsx`,
    `IslamicQuizGame.tsx` — are NOT score-related (lesson content / legal / quiz copy).
    Leaving them; flagging here for awareness. Phase 2 only mandates the `/ielts` one.
- "🧬 Science Quiz — 5 Questions" tile = `components/MarqueeBanner.tsx:15` (the scrolling
  strip). Remove in Phase 2/4. (Quiz itself untouched.)
- Footer copyright text — verify exact string in `components/Footer.tsx` at Phase 2.
- Verifiable counts so far: Academic reading passages exported by `PASSAGES` (count at Phase 5
  via import — hardcoded slugs in sitemap are stale, see below). Writing Task 1 academic pool
  = 10 (AT1-A..J) + GT + Task 2 (confirm total at Phase 6). Quran "40+ translations" supported
  by `QuranReader` LANG_NAMES (40+ entries) ✅.

### Phase 3 (metadata)
- **21 files contain `keywords:`** to delete: `app/page.tsx`, `app/ielts/page.tsx`,
  `app/ielts/reading/page.tsx`, `app/ielts/reading/[passageId]/page.tsx`,
  `app/ielts/listening/page.tsx`, `app/ielts/writing/page.tsx`, `app/ielts/speaking/page.tsx`,
  `app/islamic-studies/page.tsx`, `app/courses/page.tsx`, `app/courses/mathematics/page.tsx`,
  `app/courses/mathematics/[topicId]/page.tsx`, `app/games/page.tsx`,
  `app/games/math-puzzle/page.tsx`, `app/games/word-puzzle/page.tsx`,
  `app/games/quiz-battle/page.tsx`, `app/quiz/islamic-quiz/page.tsx`,
  `app/quran/QuranLandingPage.tsx`, `app/tools/*` (4 files).
- **"2025"** appears only in `app/ielts/page.tsx` (title "IELTS Preparation 2025…").
- ⚠️ **CRITICAL — pages with NO metadata (fall back to root default title):**
  `app/quran/page.tsx`, `app/quran/read/page.tsx`, `app/quran/tajweed/page.tsx`,
  `app/quran/tajweed/[id]/page.tsx`, `app/quran/pdf/15line/page.tsx`,
  `app/quran/pdf/13line/page.tsx`, `app/quran/pdf-reader/page.tsx`,
  `app/quran/juz/[juzId]/page.tsx`, `app/quiz/page.tsx`, `app/quiz/[id]/page.tsx`,
  `app/courses/[id]/page.tsx`, `app/notes/[id]/page.tsx`, `app/calculators/page.tsx`,
  `app/leaderboard/page.tsx`, `app/profile/page.tsx`, `app/ielts/full-test/page.tsx`,
  `app/ielts/progress/page.tsx`, `app/admin/page.tsx`.
  - The Phase-3 table targets `/quran`, `/quran/read`, `/quran/tajweed`, `/quran/pdf/15line`,
    `/quran/pdf/13line` — all currently metadata-less. These page.tsx files likely render
    client components; Phase 3 must add `export const metadata` to each server `page.tsx`
    (splitting client logic out if a page.tsx is itself `"use client"` — verify per file).
  - Root layout has no `metadataBase`; canonicals use absolute URLs already, so OK.

### Phase 4 (homepage)
- Hero at `app/page.tsx:58-79` ("Learn Anything. Completely Free.", CTAs Browse Courses /
  Play Math Puzzle). Section order currently: Hero → Marquee → Stats → Subjects →
  Featured Courses → IELTS → Games → Tools → Notes+Quiz → FAQ → CTA. IELTS must move up to 2nd.
- No existing Islamic Studies/Quran section on homepage — Phase 4 builds one.
- FAQ is a local `faqs` array (`app/page.tsx:34`) — easy to extend + reuse for JSON-LD (Phase 7).
- ⚠️ MarqueeBanner has **no IELTS tile** — Phase 4 item 5 ("IELTS & Quran tiles first")
  requires ADDING an IELTS tile and moving Quran (`MarqueeBanner.tsx:5`) to front; remove
  Science Quiz tile.

### Phase 5 (Quran)
- `/quran/[id]` already exists (SSG, 114 pages) with numeric-only `generateMetadata`
  ("Surah {id}"). Phase 5 wants surah NAMES in titles.
- ⚠️ **DECISION NEEDED:** no local surah metadata. Options:
  (a) Add a NEW additive local file (e.g. `lib/quranSurahMeta.ts`) with the 114 canonical
      surah names / ayah counts / revelation type (public-domain factual data) and generate
      titles from it — does not modify any existing data file; OR
  (b) keep numeric titles. The spec says "generate from existing data files, don't hand-write
      114 entries" — but there IS no existing local file. Will treat (a) as additive (allowed)
      using well-established factual data, NOT invented. **Flag for Azlan.**
- **Sitemaps — TWO exist & conflict:** static `public/sitemap.xml` AND dynamic `app/sitemap.ts`
  (Next serves the dynamic one at `/sitemap.xml`, shadowing the static — must remove/repoint
  the static file in Phase 5). `app/sitemap.ts` is **missing** all Quran routes, math topics,
  `/ielts/practice|full-test|guide|progress`, `/islamic-studies`, `/quiz/islamic-quiz`,
  `/search`, and its hardcoded reading slugs (`sleep-science`, `urban-farming`, `bilingualism`,
  `wood-wide-web`, …) **DO NOT match real passage ids** (`AR-T*`/`passage_*`) → stale/404.
  Phase 5 must regenerate sitemap programmatically from `PASSAGES.map(p=>p.id)` etc.
- `public/robots.txt` exists, allows crawling, references `/sitemap.xml` ✅.

### Phase 6 (writing prompt pages)
- Data available (`ielts-writing-data.ts`): `academicTask1Pool` (AT1-A..J, has chartTypeLabel),
  `gtTask1Pool`, `task2Pool`. Editor flow in `app/ielts/writing/WritingPage.tsx` (client) —
  preserve direct-practice flow; new prompt pages link into it.
- Model answers must be labeled "Sample Band 8 Response — Model answer written by
  EduForEveryone, for guidance only" + added to PENDING REVIEW checklist below.

### Phase 7 (JSON-LD)
- Homepage already has an `EducationalOrganization` JSON-LD (`app/page.tsx:47`). Phase 7 adds
  Organization (layout), FAQPage (/ + /ielts), BreadcrumbList (IELTS + Quran sub-pages).
- **Site search EXISTS** (`/search`, `components/SearchBar.tsx`, `lib/searchData.ts`) → WebSite
  `SearchAction` is valid to include (confirm search URL param format at Phase 7).

### Phase 8 (footer) / Phase 9 (about)
- Footer is shared; restructure columns (read `Footer.tsx` at Phase 8).
- About page exists (`app/about/page.tsx`) — review/rebuild at Phase 9 with placeholders.

## MODEL ANSWERS — ✅ REVIEWED & APPROVED BY AZLAN (2026-06-11)
Azlan reviewed all 20 Academic Task 1 model answers and approved them for deploy.
Phase 6 created 20 individual Academic Task 1 prompt pages at
`/ielts/writing/task-1/[slug]`, each with a sample Band 8 model answer written by
EduForEveryone (labelled on-page as "for guidance only, not an official examiner
response"). **All 20 reviewed and approved by Azlan (2026-06-11):**
- [x] AT1-A bar-chart-car-ownership          - [x] AT1-K table-household-expenditure
- [x] AT1-B line-graph-city-temperatures     - [x] AT1-L table-international-students
- [x] AT1-C pie-chart-australia-household-energy - [x] AT1-M process-diagram-glass-bottle-recycling
- [x] AT1-D table-country-population-gdp-life-expectancy - [x] AT1-N process-diagram-butterfly-life-cycle
- [x] AT1-E process-diagram-rainwater-treatment - [x] AT1-O map-town-centre-development
- [x] AT1-F bar-chart-university-subject-choices - [x] AT1-P map-island-tourist-development
- [x] AT1-G line-graph-coffee-consumption    - [x] AT1-Q map-university-campus-2030
- [x] AT1-H bar-chart-leisure-activities-by-age - [x] AT1-R bar-chart-waste-recycling-by-country
- [x] AT1-I line-graph-tourist-attraction-visitors - [x] AT1-S line-graph-ageing-population
- [x] AT1-J pie-chart-electricity-generation-sources - [x] AT1-T pie-chart-water-use-by-sector

### GT Task 1 + Task 2 prompt pages — ✅ REVIEWED & APPROVED BY AZLAN (2026-06-11)
The 40 follow-up pages have been BUILT and APPROVED: 20 GT Task 1 letters at
`/ielts/writing/gt-task-1/[slug]` and 20 Task 2 essays at `/ielts/writing/task-2/[slug]`,
each with a sample Band 8 model answer labelled "Sample Band 8 Response — written by
EduForEveryone, for guidance only." **Azlan reviewed and approved all 40 model answers
on 2026-06-11:**

GT Task 1 (letters):
- [x] GT1-A letter-hotel-conference-booking-change   - [x] GT1-K letter-house-sitting-instructions
- [x] GT1-B letter-landlord-moving-out               - [x] GT1-L letter-damaged-online-order
- [x] GT1-C letter-friend-visit-plans                - [x] GT1-M letter-evening-classes-enquiry
- [x] GT1-D letter-faulty-laptop-complaint           - [x] GT1-N letter-visiting-my-country
- [x] GT1-E letter-sports-club-hours                 - [x] GT1-O letter-poor-repair-work
- [x] GT1-F letter-hotel-staff-praise                - [x] GT1-P letter-time-off-request
- [x] GT1-G letter-new-city-invitation               - [x] GT1-Q letter-apology-damaged-item
- [x] GT1-H letter-part-time-job-application          - [x] GT1-R letter-library-opening-hours
- [x] GT1-I letter-building-site-noise               - [x] GT1-S letter-thanking-a-neighbour
- [x] GT1-J letter-training-course-feedback          - [x] GT1-T letter-train-delay-complaint

Task 2 (essays):
- [x] T2-A essay-free-university-education            - [x] T2-K essay-studying-abroad
- [x] T2-B essay-living-alone-trend                  - [x] T2-L essay-school-starting-age
- [x] T2-C essay-traffic-congestion                  - [x] T2-M essay-social-networking-impact
- [x] T2-D essay-children-screen-time                - [x] T2-N essay-urban-wealth-gap
- [x] T2-E essay-permanent-working-from-home         - [x] T2-O essay-feeling-unsafe
- [x] T2-F essay-technology-modern-life              - [x] T2-P essay-living-in-large-cities
- [x] T2-G essay-individuals-and-the-environment     - [x] T2-Q essay-public-services-vs-the-arts
- [x] T2-H essay-longer-prison-sentences             - [x] T2-R essay-devices-and-literacy
- [x] T2-I essay-rising-obesity                      - [x] T2-S essay-work-life-balance
- [x] T2-J essay-choosing-to-stay-single             - [x] T2-T essay-working-longer-retiring-later

## Phase 7 — JSON-LD validation
- [ ] After deploy, validate structured data with the Google Rich Results Test
      (https://search.google.com/test/rich-results) for: `/` (Organization, WebSite,
      FAQPage), `/ielts` (FAQPage + BreadcrumbList), a surah page, a reading passage,
      and a writing prompt page (BreadcrumbList).
- WebSite SearchAction points to `/search?q={search_term_string}`; the search page now
  seeds its query from `?q=` so the action resolves to a working search.

## ITEMS NEEDING AZLAN'S INPUT (running list)
- [x] Phase 5: approved adding `lib/quranSurahMeta.ts` (proceeded with approach A).
- [x] Phase 6: 20 Academic Task 1 model answers — REVIEWED & APPROVED by Azlan (2026-06-11).
- [x] Phase 9: About **founder bio** + **contact email** — DONE (finalized 2026-06-11; real
      bio, `mailto:` and Facebook link now live on `/about`).
- [x] Phase 6 follow-up: the **20 GT Task 1** and **20 Task 2** prompt pages + model answers
      are BUILT and REVIEWED & APPROVED by Azlan (2026-06-11).
- [ ] Validate JSON-LD with Google Rich Results Test after deploy (Phase 7).

---

## FINAL VERIFICATION RESULTS (all phases complete)
- [x] `npm run build` passes with zero errors (clean `.next` build exits 0).
- [x] Data files untouched: `git diff --stat main..seo-improvements-june2026` shows NO changes
      to any data/JSON/content file (ielts-*-data, data.ts, searchData, mathTopics), no env/
      config (.env, next.config.mjs, vercel.json, lib/firebase.ts), no PDFs/audio/images.
      The ONLY `/public` change is the deletion of the broken `public/sitemap.xml` (it
      contained raw TypeScript and shadowed the dynamic `/sitemap.xml`). Two NEW additive lib
      files were created: `quranSurahMeta.ts`, `ielts-writing-model-answers.ts`.
- [x] Unique title + description + canonical on the spec's pages; rendered HTML spot-checked
      for `/`, `/ielts`, `/quran`, `/quran/pdf/15line`, a surah page, a writing prompt page.
- [x] No `meta keywords` tags remain anywhere in `app/`.
- [x] No "guarantee" / "∞" / "thousands of students" / "2025" in titles/headings. (Note: `∞`
      remains only in WordWise game content — a math limit example and a streak display — not
      a title/heading or claim.)
- [x] Homepage CTAs corrected (Games "View all" + "Play Games" → /games; hero/closing → /ielts
      & /quran).
- [x] sitemap.xml (dynamic, app/sitemap.ts) includes all new pages — 454 URLs incl. 114 surahs,
      114 tajweed, 30 juz, 20 maths topics, all reading passages, 20 writing prompt pages.
      robots.txt references /sitemap.xml and allows crawling.
- [x] FAQ JSON-LD generated from the same arrays the pages render (9 on `/`, 5 on `/ielts`).
- [x] Nav and Footer are single shared components used by every page (via app/layout.tsx).

### Still needs Azlan before merge/deploy
1. About page: founder bio + contact email — DONE (finalized 2026-06-11).
2. Run Google Rich Results Test on deployed URLs (JSON-LD).
3. GT Task 1 + Task 2 prompt pages / model answers — BUILT and approved by Azlan (2026-06-11).
Branch `seo-improvements-june2026` is ready for review. NOT merged to main.

## Build status
- Phase 0 baseline build: see commit message / terminal — confirmed compiling before changes.
