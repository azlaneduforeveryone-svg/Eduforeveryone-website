# CLAUDE.md — EduForEveryone Project Memory
> Last updated: May 2026 (IELTS module fully live) | Use this file at the start of every Claude session to avoid re-scanning the codebase.

---

## 1. Project Overview

- **Site:** https://eduforeveryone.com
- **Purpose:** Free, barrier-free educational platform covering academic subjects + Islamic education
- **Business Goal:** Zero-cost learning for every student globally. Revenue via Google AdSense (non-intrusive). No subscriptions, no paywalls.
- **Target Audience:** Students ages 10–30, Muslim learners, Urdu/Hindi speakers, developing-world users on mobile
- **Stage:** Active development — core features live, scaling content + AI features next

---

## 2. Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14.2.5 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS (utility-first, no component libraries) |
| Fonts | DM Sans (body), Playfair Display (headings), Amiri (Arabic) via `next/font/google` |
| Auth | Firebase Auth — Google OAuth + Email/Password |
| Database | Firebase Firestore (NoSQL) |
| File Storage | Cloudflare R2 (Quran PDFs) |
| Hosting | Vercel (auto-deploy from GitHub main branch) |
| Analytics | Google Analytics (G-F7MCW76675) |
| Ads | Google AdSense (pub-4849924746775880) |
| Quran API | `api.qurancdn.com` (Quran.com API v4) — primary |
| Quran Audio | `cdn.islamic.network/quran/audio/128/ar.alafasy` |
| Link Checker | `broken-link-checker` (npm script: `check-links`) |

### Key Environment Variables (`.env.local` + Vercel)
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN        # eduforeveryone-ded2d.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID         # eduforeveryone-ded2d
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET     # eduforeveryone-ded2d.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```

---

## 3. Folder Structure

```
app/
├── page.tsx                    # Homepage
├── layout.tsx                  # Root layout — AuthProvider, Navbar, Footer, fonts, Analytics
├── sitemap.ts                  # Dynamic sitemap (114 Quran surahs + all routes)
├── courses/
│   ├── page.tsx                # Courses listing (CoursesFilter client component)
│   ├── mathematics/
│   │   ├── page.tsx            # Math hub — 20 topics with search/filter
│   │   └── [topicId]/
│   │       ├── page.tsx        # Server wrapper (generateStaticParams)
│   │       └── MathTopicPage.tsx # Client: 4 tabs (Explain/Examples/Practice/Quiz)
│   │   └── fractions-basics/lesson/  # Full lesson page
│   ├── science-biology-cells/
│   │   ├── page.tsx + lesson/
│   ├── english-essay-writing/
│   │   ├── page.tsx + lesson/
│   ├── history-world-war-1/
│   │   └── lesson/
├── notes/
│   └── [noteId]/page.tsx       # Individual note pages
├── quiz/
│   ├── page.tsx                # Quiz hub
│   ├── islamic-quiz/
│   │   ├── page.tsx
│   │   └── IslamicQuizGame.tsx # Full quiz engine (157+ questions, trilingual)
│   ├── algebra-quiz/
│   ├── cell-biology-quiz/
│   └── wwii-quiz/
├── games/
│   ├── math-puzzle/            # MathPuzzleGame.tsx
│   ├── word-puzzle/            # WordWise game
│   └── quiz-battle/            # QuizBattleGame.tsx
├── tools/
│   ├── simple-calculator/
│   ├── scientific-calculator/
│   ├── cfa-calculator/         # CFA financial calculator
│   └── number-to-words/
├── ielts/
│   ├── page.tsx                    # IELTS hub — indigo card layout (same pattern as /courses)
│   ├── reading/
│   │   ├── page.tsx                # Server (metadata)
│   │   ├── ReadingPage.tsx         # Passage listing — links to dynamic routes
│   │   └── [passageId]/
│   │       ├── page.tsx            # Server (generateStaticParams + generateMetadata per passage)
│   │       └── ReadingTest.tsx     # Full exam: 20-min timer, split-pane, no-repeat localStorage rotation
│   ├── listening/
│   │   ├── page.tsx
│   │   └── ListeningPage.tsx       # 2 sections live (transcript fill-in + MCQ)
│   ├── writing/
│   │   ├── page.tsx
│   │   └── WritingPage.tsx         # 4 prompts, custom timer, live word counter
│   └── speaking/
│       ├── page.tsx
│       └── SpeakingPage.tsx        # 2 topics, Part 1/2/3 cards, cue card timer
├── islamic-studies/
│   └── page.tsx                # Islamic Studies landing
├── quran/
│   ├── page.tsx                # QuranLandingPage — 4 option cards
│   ├── read/                   # Full digital reader (40+ translations)
│   ├── tajweed/
│   │   ├── TajweedListingPage.tsx # 114 surahs grid
│   │   └── [id]/
│   │       ├── page.tsx
│   │       └── TajweedQuranReader.tsx # Colour-coded + click-to-explain + trilingual
│   ├── pdf/
│   │   ├── 15line/             # react-pdf viewer
│   │   └── 13line/             # Colour Tajweed PDF
│   ├── juz/[juzId]/            # JuzPage.tsx
│   └── [surahId]/              # SurahPage.tsx
├── profile/
│   ├── page.tsx
│   └── ProfilePage.tsx         # User dashboard (Firebase)
├── leaderboard/
│   ├── page.tsx
│   └── LeaderboardPage.tsx     # Global + category leaderboards
├── search/                     # Full-text search
├── about/
├── contact/
├── privacy-policy/
└── calculators/                # Redirects to /tools

components/
├── Navbar.tsx                  # Sticky nav with UserButton
├── Footer.tsx
├── UserButton.tsx              # Auth dropdown (sign in/out/profile)
├── AuthModal.tsx               # Portal-based modal (Google + Email auth)
├── ShareScore.tsx              # Social share component (all games)
├── MarqueeBanner.tsx           # Scrolling announcement

contexts/
└── AuthContext.tsx             # Firebase auth state, signInGoogle, signInEmail, etc.

lib/
├── firebase.ts                 # Firebase init (getApps guard)
├── firebaseDB.ts               # All Firestore functions
├── data.ts                     # getAllCourses(), getAllSubjects()
├── mathTopics.ts               # 20 MATH_TOPICS with full content
├── ieltsReadingData.ts         # 7 passages × 10Q each (70Q total); types: mcq/tfng/ynng/sentence_completion/short_answer
└── searchData.ts               # Search index

public/
├── Main_Logo.jpg
├── Islamic_Quiz_Logo.jpeg
└── (Quran PDFs served from Cloudflare R2)
```

---

## 4. Routing Structure

```
/                               Homepage
/courses                        All courses + Math Hub banner
/courses/mathematics            Math Hub (20 topics, filters)
/courses/mathematics/[topicId]  Individual topic (Explain/Examples/Practice/Quiz tabs)
/courses/[courseId]             Other courses (Science, English, History)
/courses/[courseId]/lesson      Full lesson page (FractionsLesson etc.)
/notes                          Notes hub
/notes/[noteId]                 Individual note
/quiz                           Quiz hub
/quiz/islamic-quiz              IslamicQuizGame (trilingual, 157+ Q, Firebase scoring)
/quiz/[quizId]                  Other subject quizzes
/games                          Games hub
/games/math-puzzle              MathPuzzleGame
/games/word-puzzle              WordWise
/games/quiz-battle              QuizBattle
/tools                          Tools hub
/tools/simple-calculator
/tools/scientific-calculator
/tools/cfa-calculator
/tools/number-to-words
/calculators                    301 redirect → /tools
/islamic-studies                Islamic Studies landing
/quran                          Quran landing (4 options)
/quran/read                     Digital reader
/quran/tajweed                  Tajweed listing (114 surahs)
/quran/tajweed/[id]             Tajweed reader (colour-coded)
/quran/pdf/15line               PDF viewer (15-line)
/quran/pdf/13line               PDF viewer (13-line colour)
/quran/[surahId]                Surah reader
/quran/juz/[juzId]              Juz reader
/ielts                          IELTS hub — 4 skill cards (indigo theme, same card layout as /courses)
/ielts/reading                  Passage listing (7 Academic passages, 10Q bank each)
/ielts/reading/[passageId]      Full exam — 20-min timer, 10 random Q/session, no-repeat localStorage rotation
/ielts/listening                2 sections live (transcript fill-in + MCQ); Sections 3–4 coming soon
/ielts/writing                  4 prompts (2× Task 1, 2× Task 2), timed editor, word counter
/ielts/speaking                 2 topics (Technology, Education), Part 1/2/3 cards, cue card timer
/profile                        User dashboard
/leaderboard                    Global + category leaderboards
/search                         Full-text search
/about / /contact / /privacy-policy
```

---

## 5. Existing Features

### Islamic Quiz (`/quiz/islamic-quiz`)
- **157+ MCQ questions** across 8 categories: quran, hadith, fiqh, seerah, history, pillars, names + tajweed/arabic/stories/tafseer merged into "quran"
- **Trilingual:** EN/UR/HI — every question has all 3 languages, same permutation shuffle
- **Arabic ayahs** with full harakat (تشكيل) + Quran reference shown above question
- **Fisher-Yates shuffle** for options every load — no repeat until all 157+ seen
- **No-repeat system:** `seenIdsRef` tracks seen questions across games; resets when bank exhausted
- **Firebase scoring:** saves to Firestore on game end; guest prompt to sign in
- **Timer per difficulty:** easy 25s, medium 18s, hard 12s, expert 8s
- **Streak + bonus pts** for speed
- **ShareScore** component integrated

### Math Curriculum (`/courses/mathematics`)
- **20 topics** from Elementary → Professional
- Each topic: explanation paragraphs, key points, worked examples (step-by-step), exercises (hint+answer+solution), 5-Q quiz with wrong-answer explanations
- Live search + level filter + category filter
- `lib/mathTopics.ts` — single source of truth

### Quran Tajweed Reader
- Fetches from `api.qurancdn.com` — returns real tajweed HTML with `<tajweed class="rule-name">` tags
- **14 colour-coded rules** with click-to-explain popup
- **Trilingual rule explanations:** EN/UR/HI selector on both listing and reader
- Audio playback via `cdn.islamic.network`
- Dark mode, font size control, prev/next navigation
- Bug fixed: `e.stopPropagation()` on click to prevent popup clearing

### Firebase Auth + User System
- `contexts/AuthContext.tsx` — Google OAuth + Email/Password + reset
- `AuthModal.tsx` — **React Portal** (`createPortal`) renders into `document.body` (fixes centering on all pages)
- `ProfilePage.tsx` — stats, category breakdown, math topics completed, recent sessions
- `LeaderboardPage.tsx` — global + per-category, podium for top 3
- **Firestore collections:** `users`, `quizSessions`, `leaderboard`, `leaderboard_[category]`

### Lesson Pages (4 subjects)
- `FractionsLesson.tsx` → `/courses/mathematics/fractions-basics/lesson`
- `CellsLesson.tsx` → `/courses/science-biology-cells/lesson`
- `EssayWritingLesson.tsx` → `/courses/english-essay-writing/lesson`
- `WWILesson.tsx` → `/courses/history-world-war-1/lesson`
- Each: Lesson tab + Practice tab + Quiz tab (5 Qs with explanations)

### Tools
- Simple calculator, Scientific calculator, CFA financial calculator, Number-to-Words converter

### Games
- **MathPuzzle:** timed math challenges
- **WordWise:** word puzzle game
- **QuizBattle:** rapid-fire quiz game
- All games have `ShareScore` component

### IELTS Module (`/ielts`)
- **Hub page** (`/ielts`): indigo-600/700 colour scheme; card layout matches `/courses` page pattern; comprehensive content: test format, band score table, marking criteria, strategies, FAQs, official sources
- **Linked** from Navbar (`IELTS` link), homepage (block between Featured Courses and Games), and `/courses` (indigo banner)
- **Reading** (`/ielts/reading/[passageId]`):
  - 7 Academic passages in `lib/ieltsReadingData.ts`, 10Q bank each (70Q total)
  - Question types: MCQ (A–D, Fisher-Yates shuffled options), True/False/Not Given, Yes/No/Not Given, Sentence Completion, Short Answer
  - 10 random questions per session; localStorage no-repeat rotation — bank cycles, resets when exhausted
  - 20-minute countdown timer; auto-submits at zero
  - Desktop: split-pane (passage sticky-left 55%, questions right 45%); Mobile: passage accordion toggle above questions
  - Numbered navigation panel (1–10 dots); Previous / Next / Submit All flow
  - Band score estimate 4.0–9.0 on results; full answer review with explanations
  - SSG: `generateStaticParams` pre-renders all 7 routes; `generateMetadata` gives each passage its own SEO title/description
- **Listening** (`/ielts/listening`): 2 sections live — Section 1 (everyday conversation, transcript + fill-in) and Section 2 (monologue, MCQ); Sections 3–4 UI placeholder "coming soon"
- **Writing** (`/ielts/writing`): 4 prompts (2× Task 1 bar/line chart, 2× Task 2 essay); custom timer hook with pause/resume; live word counter + progress bar; min-word enforcement before submit; key points reveal after submission
- **Speaking** (`/ielts/speaking`): 2 topics (Technology, Education); Part 1/2/3 question cards; cue card timer (1-min prep → 2-min speak phases); expandable model answers per question
- **No login required** for all practice; guest scores via localStorage

### Quran PDF Viewer
- `react-pdf` with `{ ssr: false }` dynamic import (fixes DOMMatrix SSR error)
- PDFs on Cloudflare R2: `pub-8abd18b123d249afbfea45177c4d7d94.r2.dev`
  - `15line-standard.pdf` (612 pages)
  - `13line-color-tajweed.pdf` (851 pages)

---

## 6. Shared Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `Navbar` | `components/Navbar.tsx` | Sticky nav, mobile menu, UserButton |
| `UserButton` | `components/UserButton.tsx` | Auth dropdown — sign in/out/profile/leaderboard |
| `AuthModal` | `components/AuthModal.tsx` | Portal modal — Google + Email auth |
| `ShareScore` | `components/ShareScore.tsx` | Social sharing for all games/quizzes |
| `Footer` | `components/Footer.tsx` | Site footer |
| `MarqueeBanner` | `components/MarqueeBanner.tsx` | Scrolling banner |

### Patterns
- Server `page.tsx` → client `ComponentPage.tsx` split (required for metadata + interactivity)
- `generateStaticParams` in server page for dynamic routes
- `"use client"` only in interactive components

---

## 7. Design System

### Colors
- **Primary:** `teal-600` (#0D9488) — main CTAs, active states
- **Islamic/Quran:** `amber-500/600` — Quran, tajweed features
- **Math:** `teal-600/700`
- **Science:** `green-600`
- **English:** `purple-600`
- **History:** `red-700`
- **IELTS:** `indigo-600/700` — hub, reading, listening, writing, speaking
- **Background:** `gray-50`
- **Cards:** `white` with `border-gray-200`

### Typography
- Body: `DM Sans` (`font-body`) — clean, modern
- Display: `Playfair Display` (`font-display`) — headings
- Arabic: `Amiri` (`font-arabic`, `var(--font-arabic)`) — always explicit + Google Fonts `@import` fallback for tablets

### Button Style Pattern
```tsx
className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all"
style={{ boxShadow: "0 4px 0 #0F6E56" }}  // 3D press effect
```

### Card Pattern
```tsx
className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
```

### Spacing
- Page max-width: `max-w-6xl` (courses) or `max-w-4xl` (content)
- Horizontal padding: `px-4 sm:px-6`
- Vertical padding: `py-8` or `py-12`
- Gap: `gap-3` or `gap-4` standard

### Responsive Strategy
- **Mobile-first** — default styles are mobile, `sm:` and `lg:` for larger
- No CSS media queries in components — Tailwind only
- Arabic text: always `direction: "rtl"` + explicit `fontFamily` + `lineHeight: 2.2+`

---

## 8. Coding Standards

### File Organization
- Server components: `app/[route]/page.tsx` — has `metadata`, `generateStaticParams`
- Client components: `app/[route]/ComponentName.tsx` — has `"use client"`
- Never mix `metadata` export with `"use client"` in the same file

### TypeScript Patterns
```typescript
// Always type props
interface Props { surahId: number; onClose: () => void; }

// Prefer const with explicit type
const RULES: Record<string, { color: string; name: string }> = { ... }

// Lang type pattern (reused everywhere)
type Lang = "en" | "ur" | "hi";
type Diff = "easy" | "medium" | "hard" | "expert";
```

### API Handling
```typescript
// Always handle loading and error states
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

// Use Promise.all for parallel fetches
Promise.all([fetch(url1), fetch(url2)])
  .then(([r1, r2]) => Promise.all([r1.json(), r2.json()]))
  .then(([d1, d2]) => { ... })
  .catch(() => setLoading(false));
```

### Component Structure
```typescript
"use client";
// 1. Imports
// 2. Types/interfaces
// 3. Constants (outside component for performance)
// 4. Component function
//   a. State
//   b. Refs
//   c. Effects
//   d. Handlers
//   e. Computed values
//   f. Return JSX
```

### Naming Conventions
- Components: `PascalCase.tsx`
- Pages: `page.tsx` (lowercase, Next.js convention)
- Hooks: `useXxx`
- Constants: `UPPER_SNAKE_CASE`
- Functions: `camelCase`
- CSS variables: `--font-arabic`, `--font-body`

### PowerShell (Windows dev environment)
```powershell
# NOT: tail, head
Select-Object -Last 20   # tail equivalent
Select-Object -First 20  # head equivalent
npm run build 2>&1 | Select-Object -Last 20
```

### Build Workflow
```bash
npm run build 2>&1 | Select-Object -Last 20  # verify locally
git add . && git commit -m "message" && git push origin main  # Vercel auto-deploys
npm run check-links  # run after deploy to verify no broken links
```

---

## 9. Database Architecture (Firebase Firestore)

### Collections

**`users/{uid}`**
```typescript
{
  uid, displayName, email, photoURL,
  createdAt, lastSeen,
  totalScore, totalGames, totalCorrect, totalQuestions,
  currentStreak, bestStreak,
  categoryScores: Record<string, { games, correct, total, totalScore, bestScore }>,
  mathTopicsCompleted: string[],
  mathScores: Record<topicId, { score, total, completedAt }>
}
```

**`quizSessions/{auto-id}`**
```typescript
{ uid, displayName, photoURL, gameName, category, difficulty, score, correct, total, playedAt }
```

**`leaderboard/{uid}`** — Global leaderboard entry
```typescript
{ uid, displayName, photoURL, totalScore, totalGames, bestScore, updatedAt }
```

**`leaderboard_{category}/{uid}`** — Per-category leaderboard
```typescript
{ uid, displayName, photoURL, totalScore, bestScore, games, updatedAt }
```

### Auth Flow
1. User clicks Sign In → `AuthModal` (Portal)
2. Google popup OR email form → Firebase Auth
3. `onAuthStateChanged` in `AuthContext` → calls `createOrUpdateUser()`
4. Creates/updates Firestore `users/{uid}` doc
5. Score saving: after each quiz game → `saveQuizScore()` → updates user doc + session + both leaderboard docs

### Storage (Cloudflare R2)
- Bucket: `pub-8abd18b123d249afbfea45177c4d7d94.r2.dev`
- Files: `15line-standard.pdf`, `13line-color-tajweed.pdf`
- CORS must be configured for react-pdf to work

---

## 10. AI Features

### Current
- None live yet

### Planned / In Progress
- **IELTS Writing Evaluator** — Claude API grades essays (Task 1 + Task 2)
- **Islamic Quiz Auto-Generator** — Claude generates new questions from Quran content
- **Math Problem Explainer** — step-by-step AI explanation
- **Essay Feedback** — writing improvement suggestions

### AI Integration Pattern (for Claude API in Artifacts)
```javascript
const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1000,
    messages: [{ role: "user", content: prompt }]
  })
});
```

---

## 11. SEO Structure

### Metadata Pattern
```typescript
// In server page.tsx (never client component)
export const metadata: Metadata = {
  title: "Page Title | EduForEveryone",
  description: "...",
  keywords: [...],
  alternates: { canonical: "https://eduforeveryone.com/path" },
  openGraph: { title, description, url, siteName, type: "website" }
};
```

### Sitemap
- `app/sitemap.ts` — dynamic, includes all 114 Quran surahs + 30 Juz + 20 math topics + all routes
- Submitted to Google Search Console
- Update sitemap when adding new routes

### Analytics
- GA4: `G-F7MCW76675`
- Loaded via `next/script` with `strategy="afterInteractive"` in `layout.tsx`
- AdSense: `ca-pub-4849924746775880`

---

## 12. Performance Optimizations

- **SSG by default** — all static pages pre-rendered at build time
- **`generateStaticParams`** for dynamic routes (`/courses/mathematics/[topicId]`, `/quran/[surahId]`)
- **`{ ssr: false }` dynamic imports** for browser-only libraries:
  ```typescript
  const PDFViewer = dynamic(() => import("./PDFViewer"), { ssr: false });
  ```
- **React Portal** for `AuthModal` — avoids transform stacking context issues
- **`useRef` for seen questions** — no re-renders when tracking quiz progress
- **`useCallback`** on all handler functions inside quiz engines
- **Pre-built shuffled options** — all 10 quiz options computed before game starts (stored in `optsListRef`)
- **Questions outside component** — `QB` array is module-level constant, not recreated on render
- **Fonts via `next/font`** — zero layout shift, preloaded

---

## 13. Current Problems / Technical Debt

| Issue | Severity | Notes |
|-------|----------|-------|
| `images.domains` deprecated warning | Low | Migrate to `remotePatterns` in `next.config.mjs` |
| `npm audit` — 15 vulnerabilities in Next.js 14.2.5 | Medium | Should upgrade to Next.js 15 eventually |
| Cloudflare R2 CORS config | Medium | May block react-pdf in some environments |
| No test coverage | Medium | No unit or e2e tests |
| `lib/data.ts` is local JSON | Low | Works fine; Firebase migration deferred |
| Islamic Quiz `cat` type includes unused tajweed/arabic/stories/tafseer categories | Low | All questions use `cat:"quran"` — UI only shows 8 CAT_KEYS |
| Duplicate questions | Low | Some questions appear twice after merges |
| `any` type in some Firebase handlers | Low | `userData` typed as `UserProfile` but some casting issues |
| `saveScore` in quiz uses setState callback nesting | Medium | Hacky way to access latest state values — refactor with useRef |

---

## 14. Future Roadmap

### Immediate (Next Sprint)
1. Wire `UserButton` into Navbar on live site
2. Add Firebase score saving to Math Topic quizzes
3. Fix R2 CORS configuration
4. Add `UserButton` links to Profile/Leaderboard in mobile menu
5. IELTS Listening — add Sections 3 & 4 with audio
6. IELTS Writing — AI evaluation via Claude API (see Section 15)

### Short Term
1. More lesson pages (remaining 17 math topics)
2. Progress tracking per math topic in ProfilePage
3. IELTS Speaking — audio recording or self-assessment flow
4. Email notifications for leaderboard milestones
5. Upgrade to Next.js 15

### Medium Term
1. AI Essay evaluator (Claude API)
2. AI Math explainer
3. More Quran features (bookmarks, notes, highlighting)
4. Mobile app (React Native or PWA)
5. Social features (share progress, challenge friends)

### Long Term
1. Teacher dashboard
2. Class/group management
3. Certificate system
4. Multilingual UI (full Urdu/Hindi interface)
5. Video lessons (self-hosted or YouTube embed)

---

## 15. IELTS Module (Live)

### Status: All 4 skills live at `/ielts`. No login required for any practice.

### Reading — Key Implementation Details
- **Data file:** `lib/ieltsReadingData.ts` — `PASSAGES: Passage[]` array, exported types `Question`, `Passage`, `QuestionType`
- **Question types:** `"mcq" | "tfng" | "ynng" | "sentence_completion" | "short_answer"`
- **`Question` interface:** `{ id, type, q, opts?, answer, acceptedAnswers?, explanation, sentenceTemplate? }`
  - MCQ `answer`: `"A"–"D"` (pre-shuffle canonical letter)
  - TFNG `answer`: `"TRUE" | "FALSE" | "NOT GIVEN"`
  - YNNG `answer`: `"YES" | "NO" | "NOT GIVEN"`
  - Text types `answer`: exact word/phrase; `acceptedAnswers[]` for alternate forms
- **No-repeat localStorage key:** `ielts_seen_${passageId}` → `number[]` of seen question IDs; resets when bank exhausted
- **Band map (10Q session):** 10→9.0, 9→8.5, 8→8.0, 7→7.5, 6→7.0, 5→6.5, 4→6.0, 3→5.5, 2→5.0, 1→4.5, 0→4.0
- **Grading text answers:** case-insensitive match against `acceptedAnswers` array; strips leading "the " for flexibility

### When Adding More Passages
1. Add to `PASSAGES` array in `lib/ieltsReadingData.ts`
2. `generateStaticParams` auto-picks it up — no other file changes needed
3. Add URL to `app/sitemap.ts`

### Planned: AI Writing Evaluation
```typescript
// Target: /ielts/writing — "Evaluate with AI" button after submission
const WRITING_PROMPT = `
You are an IELTS examiner. Evaluate this essay on official band descriptors (0–9):
Task: [task prompt]
Essay: [user essay]
Return JSON: { ta: number, cc: number, lr: number, gra: number, overall: number, feedback: string, improvements: string[] }
`;
// criteria: Task Achievement/Response, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy
```

### Planned: Firestore Score Saving
```typescript
// Firestore: ieltsResults/{uid}/sessions/{auto-id}
{ skill: "reading" | "writing" | "listening" | "speaking", testId: string, score: number, band: number, aiFeedback?: string, completedAt: Timestamp }
```

---

## 16. Developer Instructions

**Before generating ANY code, follow these steps:**

1. **Check existing patterns** — look at a similar existing component before creating a new one
2. **Server vs Client split** — `page.tsx` = server (metadata, generateStaticParams), `ComponentPage.tsx` = client
3. **Never put `"use client"` and `export const metadata` in the same file**
4. **Use `var(--font-arabic)` + `'Amiri'` + Google Fonts `@import` fallback for ALL Arabic text**
5. **Arabic text always needs:** `direction: "rtl"`, `fontFamily`, `lineHeight: 2.2+`
6. **Modals must use `createPortal(modal, document.body)`** to fix centering on scrolled pages
7. **Build before push:** `npm run build 2>&1 | Select-Object -Last 20`
8. **Run link checker after deploy:** `npm run check-links`
9. **PowerShell environment** — no `tail`/`head` commands
10. **Firebase Authorized Domains** — add new domains to Firebase Console → Authentication → Settings → Authorized Domains

### When Adding New Questions (Islamic Quiz)
- All questions must have `en`, `ur`, `hi` objects with `q`, `opts[]`, `ans`
- `arabicAyah` (with full harakat) and `reference` are optional but preferred
- Add to `cat: "quran"` unless it's a clearly different category
- Answers should NOT predominantly be index 2 — distribute A/B/C/D evenly

### When Adding New Routes
1. Create `app/[route]/page.tsx` (server) + `ComponentPage.tsx` (client)
2. Add metadata to `page.tsx`
3. Add to `app/sitemap.ts`
4. Run `npm run check-links` after deployment

---

## 17. Important Rules

These are non-negotiable project principles:

1. **Free education** — zero cost forever. No paywalls, no premium tiers
2. **Optional signup** — every feature works without an account; auth only enhances (saves scores, leaderboard)
3. **No subscription model** — revenue only via Google AdSense
4. **Mobile-first design** — default styles target mobile; `sm:` and `lg:` for larger screens
5. **Trilingual by default** — Islamic content must have EN + UR + HI. Academic content English-first, translations added progressively
6. **Arabic text integrity** — never render Arabic without explicit font loading. Always use `'Amiri'` + `@import` fallback
7. **SEO-first** — every page needs proper `metadata` export with title, description, canonical URL, OG tags
8. **No external UI libraries** — Tailwind only (no shadcn, no MUI, no Chakra). Keep bundle small
9. **Reusable components** — build `ShareScore`, `AuthModal` etc. once and reuse everywhere
10. **Accessibility** — semantic HTML, proper labels, keyboard navigation, sufficient color contrast
11. **Performance** — SSG where possible, `{ ssr: false }` for browser-only libs, no heavy client-side data fetching on initial load
12. **No data selling** — user data only used for their own progress tracking. Privacy Policy must be accurate
13. **Google-compliant ads** — AdSense only, no intrusive ad patterns, no interstitials
14. **Content accuracy** — Islamic content (Quran, Hadith, Tajweed rules) must be verified for correctness. Reference sources.
15. **Graceful degradation** — if Firebase/API fails, the page should still render usably

---

## Quick Reference Cheatsheet

```bash
# Build check
npm run build 2>&1 | Select-Object -Last 20

# Link check (after deploy)
npm run check-links

# Push to production
git add . && git commit -m "feat: description" && git push origin main

# Firebase project
Project: eduforeveryone-ded2d
Console: https://console.firebase.google.com/project/eduforeveryone-ded2d

# Live site
https://eduforeveryone.com

# GitHub
https://github.com/azlaneduforeveryone-svg/Eduforeveryone-website

# Vercel
Auto-deploys on push to main branch

# Cloudflare R2 PDFs
https://pub-8abd18b123d249afbfea45177c4d7d94.r2.dev/15line-standard.pdf
https://pub-8abd18b123d249afbfea45177c4d7d94.r2.dev/13line-color-tajweed.pdf

# Quran API
https://api.qurancdn.com/api/qdc/chapters/{id}?language=en
https://api.qurancdn.com/api/qdc/verses/by_chapter/{id}?words=false&per_page=286&fields=text_uthmani_tajweed,juz_number
```