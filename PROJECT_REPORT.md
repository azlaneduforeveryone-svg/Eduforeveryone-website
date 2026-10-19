# EduForEveryone — Comprehensive Project Architecture & Technical Report

> **Target Audience:** AI Engineering Assistants & Technical Planners  
> **Repository:** `eduforeveryone` (Live at: [eduforeveryone.com](https://eduforeveryone.com))  
> **Date Generated:** October 2026  
> **Status:** Read-only architectural analysis and feature inventory  

---

## 1. OVERVIEW

### 1.1 Purpose & Mission
EduForEveryone is an open-access, zero-cost educational web platform dedicated to eliminating barriers to education for students worldwide, particularly in South Asia (Pakistan, India, Bangladesh) and developing countries. The platform hosts comprehensive preparation materials for global standardized tests (IELTS Academic & General Training, GMAT Focus Edition), school and university academic curriculums (Mathematics, Science, English, History), authentic Islamic education (The Holy Quran with 40+ translations and color-coded Tajweed, Duas & Azkar with audio, and an authentic trilingual Islamic Quiz), educational games, and professional financial accounting tools (multi-party automated statement reconciliation and financial calculators).

The project operates under a strict non-profit philosophy:
- **100% Free Forever:** No subscriptions, paywalls, or gated content tiers.
- **Optional Authentication:** All practice tests, readers, and tools function immediately without creating an account or logging in. User authentication (via Firebase) is strictly optional to persist personal progress, save test history, and compete on leaderboards.
- **Monetization:** Passive, non-intrusive Google AdSense advertising. Islamic Studies and Quran sections are strictly ad-free.

### 1.2 Core Technology Stack & Versions
| Layer | Specification / Version | Notes |
| :--- | :--- | :--- |
| **Framework** | Next.js `14.2.5` | App Router exclusively (`app/` directory). Zero Pages Router usage. |
| **Runtime UI** | React `18.3.1` / React DOM `18.3.1` | Portal rendering (`createPortal`) used for centered modals. |
| **Language** | TypeScript `5.x` | Strict mode enabled (`"strict": true` in `tsconfig.json`, target `ES2017`). |
| **Styling** | Tailwind CSS `3.4.1` | Utility-first styling with PostCSS `8` and Autoprefixer `10`. No UI component libraries (no shadcn/ui, MUI, or Chakra). |
| **Package Manager** | `npm` | Configured via `package.json` and `package-lock.json` (Lockfile v3). |
| **Hosting & Deployment** | Vercel | Automatic CI/CD deployments triggered on pushes to the GitHub `main` branch. |
| **Authentication** | Firebase Auth `12.14.0` | Google OAuth and Email/Password with password reset flows. |
| **Database** | Firebase Firestore | User profiles, quiz sessions, IELTS/GMAT test history, and leaderboards. |
| **External APIs** | DeepSeek Chat API | Edge runtime routes for IELTS Writing and Speaking evaluations. |
| **Media & CDN** | Cloudflare R2 | CDN hosting for high-resolution Quran Mushaf PDFs (`pub-8abd18b123d249afbfea45177c4d7d94.r2.dev`). |
| **Quranic Services** | Quran.com API v4 & Islamic Network CDN | Real-time Tajweed HTML verses from `api.qurancdn.com` and verse audio from `cdn.islamic.network`. |

### 1.3 Hosting, Build & Deployment Configuration
- **Vercel Config (`vercel.json`):**
  - Framework: `nextjs`
  - Build command: `next build`
  - Output directory: `.next`
  - Install command: `npm install`
  - Security Headers: Injects `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `X-XSS-Protection: 1; mode=block`, and `Referrer-Policy: strict-origin-when-cross-origin`.
  - Cache Headers: Immutable 1-year browser caching (`public, max-age=31536000, immutable`) for static assets (`.js`, `.css`, `.png`, `.jpg`, `.svg`, `.ico`, `.woff2`).
- **Next.js Config (`next.config.mjs`):**
  - Image remote patterns configured for Cloudflare R2, Google User Content (`lh3.googleusercontent.com`), and Firebase Storage (`firebasestorage.googleapis.com`).
  - Security headers configured for `Cross-Origin-Embedder-Policy: unsafe-none` and `Cross-Origin-Opener-Policy: same-origin-allow-popups` (enabling Firebase popup auth).

### 1.4 Environment Variables Reference
The platform relies on the following environment variable names (stored in `.env.local` and Vercel project settings). **No secrets or values are recorded in this document:**
- `NODE_ENV`: Runtime environment (`production` vs `development`).
- `DATA_SOURCE`: Configures data layer mode (`local`, `firebase`, or `supabase`).
- `DEEPSEEK_API_KEY`: API key for automated IELTS writing and speaking evaluation via DeepSeek Chat.
- `ADMIN_PASSWORD`: Plaintext password used for authenticating into the admin panel (`/admin`).
- `ADMIN_SECRET`: Cryptographic secret key used to generate and verify HMAC SHA-256 signatures for `admin_token` cookies.
- `NEXT_PUBLIC_FIREBASE_API_KEY`: Firebase web API key.
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`: Firebase authentication domain (`eduforeveryone-ded2d.firebaseapp.com`).
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: Firebase project identifier (`eduforeveryone-ded2d`).
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`: Firebase cloud storage bucket (`eduforeveryone-ded2d.firebasestorage.app`).
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: Firebase Cloud Messaging sender ID.
- `NEXT_PUBLIC_FIREBASE_APP_ID`: Firebase web application ID.
- `NEXT_PUBLIC_SUPABASE_URL` & `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Reserved placeholders for optional Supabase migration.

---

## 2. FOLDER STRUCTURE

```
eduforeveryone/
├── app/                                # Next.js 14 App Router routes, layouts, and endpoints
│   ├── api/                            # Serverless & Edge API route handlers
│   │   ├── admin/                      # Admin authentication, token verification, and logout
│   │   ├── bank-reconciliation/        # In-memory financial reconciliation processor & Excel generator
│   │   ├── speaking/                   # Edge route for IELTS speaking transcript AI evaluation
│   │   └── writing/                    # Edge route for IELTS writing essay AI evaluation
│   ├── courses/                        # Academic courses catalog, lessons, and Math curriculum hub
│   │   ├── [id]/                       # Dynamic course detail pages
│   │   ├── english-essay-writing/      # Dedicated English essay writing lesson
│   │   ├── history-world-war-1/        # Dedicated World War I lesson
│   │   ├── mathematics/                # 20-topic comprehensive math curriculum hub & topic viewer
│   │   └── science-biology-cells/      # Dedicated Cell Biology lesson
│   ├── duas/                           # Authentic Duas & Azkar with audio, 8 translations, and Tasbeeh
│   ├── games/                          # Educational games (Math Puzzle, WordWise, Quiz Battle)
│   ├── gmat/                           # GMAT Focus Edition practice (Quant, Verbal, Data Insights, Full Mock)
│   ├── ielts/                          # CD-IELTS preparation hub (Reading, Listening, Writing, Speaking, Mock)
│   ├── islamic-studies/                # Islamic studies gateway and resource directory
│   ├── notes/                          # Subject study notes and cheat sheets ([id] dynamic viewer)
│   ├── quiz/                           # General subject quizzes ([id]) and Trilingual Islamic Quiz
│   ├── quran/                          # Holy Quran digital reader, Tajweed color-coded reader, and PDF viewers
│   ├── tools/                          # Financial, scientific, CFA, and math utility calculators
│   │   ├── cfa-calculator/             # BA II Plus financial calculator emulator
│   │   ├── finance-tools/              # Multi-party statement reconciliation (bank/supplier/customer/interco)
│   │   ├── number-to-words/            # Cheque and financial number-to-words generator
│   │   ├── scientific-calculator/      # Full-featured scientific calculator
│   │   └── simple-calculator/          # Basic 4-function arithmetic calculator
│   ├── layout.tsx                      # Root layout, Google Fonts injection, PWA registration, Analytics
│   ├── page.tsx                        # Global homepage with hero, features, search, and testimonials
│   ├── sitemap.ts                      # Dynamic sitemap generator containing >500 indexed URLs
│   └── manifest.ts                     # Progressive Web App (PWA) manifest configuration
├── components/                         # Reusable React UI components
│   ├── duas/                           # Dua cards, canvas frame sharing modal, and custom PDF viewer
│   ├── gmat/                           # GMAT question renderers, practice runner, and DI calculator
│   ├── ielts/                          # IELTS section runners, audio player, SVG chart figures, and score card
│   ├── pwa/                            # Mobile navigation tab bar and service worker registrar
│   ├── quiz/                           # Quiz score canvas sharing modals
│   ├── quran/                          # Quranic script style selector (Uthmani, Indo-Pak, Maghribi)
│   ├── AuthModal.tsx                   # React Portal-based modal for Google and Email authentication
│   ├── Footer.tsx                      # Global site footer with navigation links and disclaimers
│   ├── HomeHero.tsx                    # Dynamic interactive homepage hero component
│   ├── JsonLd.tsx                      # Structured schema.org JSON-LD injector component
│   ├── Navbar.tsx                      # Sticky global header navigation bar with user profile dropdown
│   └── UserButton.tsx                  # Profile, leaderboard, and session dropdown menu
├── contexts/                           # Global React Context providers
│   └── AuthContext.tsx                 # Firebase Auth state subscriber and authentication methods
├── data/                               # Static JSON fallback seed data
│   ├── courses.json                    # Seed course listings and lessons
│   ├── notes.json                      # Seed study notes and articles
│   └── quizzes.json                    # Seed general subject multiple-choice quizzes
├── lib/                                # Domain logic, database abstraction, and question banks
│   ├── bank-reconciliation/            # Core reconciliation engine, file parsers, and Excel statement builders
│   ├── gmat/                           # GMAT Focus Edition question banks (Quant, Verbal, DI), engine, and types
│   ├── ielts/                          # IELTS question banks (Reading 110 passages, Listening, Model Answers)
│   ├── adminDB.ts                      # Firestore batch-upload and admin data management functions
│   ├── data.ts                         # Static JSON data accessors for courses, notes, and quizzes
│   ├── duasData.ts                     # Curated database of 38 authentic Duas with 8 language translations
│   ├── firebase.ts                     # Firebase app, auth, and firestore singleton initialization
│   ├── firebaseDB.ts                   # Firestore queries, profile persistence, and session score logging
│   ├── islamicQuizQuestions.ts         # Bank of 160 verified unique trilingual Islamic quiz questions
│   ├── mathTopics.ts                   # Curriculum data for 20 Mathematics topics across 5 difficulty levels
│   ├── quranAudio.ts                   # Quran recitation audio helpers and CDNs
│   └── quranSurahMeta.ts               # Metadata, names, ayah counts, and revelation places for all 114 Surahs
├── public/                             # Static public assets served at root
│   ├── icons/                          # PWA icons (192px, 512px, Apple touch icon)
│   ├── ielts/listening/                # Pre-rendered MP3 listening audio recordings and manifests
│   ├── quran-pdfs/                     # 15-line standard and 13-line color Tajweed Quran PDF files
│   ├── robots.txt                      # Search engine crawling rules and sitemap pointer
│   ├── sw.js                           # PWA service worker for offline asset caching
│   └── ads.txt                         # Google AdSense publisher verification file
├── scripts/                            # Operational, validation, and content generation CLI scripts
│   ├── audit-gmat.ts                   # Detailed GMAT bank sanity, contradiction, and classifier audit script
│   ├── validate-duas.ts                # Integrity and schema validator for Duas database
│   ├── validate-gmat.ts                # Structural validator for GMAT question banks
│   └── ielts/listening/                # Python Edge-TTS audio generator pipeline and transcript manifests
├── types/                              # Core shared TypeScript type definitions
│   └── index.ts                        # Shared Course, Lesson, Note, and Quiz interfaces
├── package.json                        # Project dependencies, scripts, and package metadata
├── tailwind.config.ts                  # Tailwind CSS theme configuration (custom fonts, colors, animations)
├── tsconfig.json                       # TypeScript compiler configuration (path aliases, strict options)
└── vercel.json                         # Vercel deployment, caching headers, and security rules
```

---

## 3. ALL ROUTES AND PAGES

### 3.1 Public Pages Directory
The platform contains **68 distinct page routes** (compiled into **528 static and pre-rendered SSG pages** at build time).

| URL Path | File Location | Render Type | Description |
| :--- | :--- | :--- | :--- |
| `/` | `app/page.tsx` | Static (○) | Homepage with hero section, subject highlights, search bar, and FAQs. |
| `/about` | `app/about/page.tsx` | Static (○) | Mission statement, educational vision, and platform background. |
| `/admin` | `app/admin/page.tsx` | Static (○) / Client | Password-protected admin dashboard for uploading content to Firestore. |
| `/calculators` | `app/calculators/page.tsx` | Static (○) | Permanent 308 redirect to `/tools`. |
| `/contact` | `app/contact/page.tsx` | Static (○) | Contact information, feedback channels, and inquiries. |
| `/courses` | `app/courses/page.tsx` | Static (○) | Catalog of academic courses with client-side subject filter tabs. |
| `/courses/[id]` | `app/courses/[id]/page.tsx` | SSG (●) | Dynamic course syllabus, metadata, and lesson directory (4 paths). |
| `/courses/english-essay-writing/lesson` | `app/courses/english-essay-writing/lesson/page.tsx` | Static (○) | Full interactive lesson for English essay writing with quiz. |
| `/courses/history-world-war-1/lesson` | `app/courses/history-world-war-1/lesson/page.tsx` | Static (○) | Full interactive lesson for World War I history with quiz. |
| `/courses/mathematics` | `app/courses/mathematics/page.tsx` | Static (○) | Mathematics curriculum hub covering 20 topics from Elementary to Professional. |
| `/courses/mathematics/[topicId]` | `app/courses/mathematics/[topicId]/page.tsx` | SSG (●) | 4-tab interactive Math study page (Explain, Examples, Practice, Quiz; 20 paths). |
| `/courses/mathematics/fractions-basics/lesson` | `app/courses/mathematics/fractions-basics/lesson/page.tsx` | Static (○) | Dedicated fractions lesson with interactive practice exercises. |
| `/courses/science-biology-cells/lesson` | `app/courses/science-biology-cells/lesson/page.tsx` | Static (○) | Full interactive cell biology lesson with exercises and quiz. |
| `/duas` | `app/duas/page.tsx` | Static (○) | Duas & Azkar viewer with audio recitation, 8 languages, and digital Tasbeeh. |
| `/games` | `app/games/page.tsx` | Static (○) | Educational games hub. |
| `/games/math-puzzle` | `app/games/math-puzzle/page.tsx` | Static (○) | Timed mental math and arithmetic puzzle game. |
| `/games/quiz-battle` | `app/games/quiz-battle/page.tsx` | Static (○) | Rapid-fire 10-question survival trivia quiz with lives and streak multipliers. |
| `/games/word-puzzle` | `app/games/word-puzzle/page.tsx` | Static (○) | WordWise educational 5-letter vocabulary puzzle (Wordle-style). |
| `/gmat` | `app/gmat/page.tsx` | Static (○) | GMAT Focus Edition preparation hub and exam overview. |
| `/gmat/data-insights` | `app/gmat/data-insights/page.tsx` | Static (○) | Data Insights section practice runner (DS, MSR, Tables, Graphs, Two-Part). |
| `/gmat/full-test` | `app/gmat/full-test/page.tsx` | Static (○) | Full 64-question GMAT Focus Edition timed mock simulation. |
| `/gmat/quant` | `app/gmat/quant/page.tsx` | Static (○) | Quantitative Reasoning practice runner (254 Problem Solving items). |
| `/gmat/verbal` | `app/gmat/verbal/page.tsx` | Static (○) | Verbal Reasoning practice runner (Critical Reasoning & Reading Comp). |
| `/ielts` | `app/ielts/page.tsx` | Static (○) | CD-IELTS hub with 4 skill cards, test structure, and scoring criteria. |
| `/ielts/full-test` | `app/ielts/full-test/page.tsx` | Static (○) | Complete 4-module timed CD-IELTS computer-delivered exam simulation. |
| `/ielts/guide` | `app/ielts/guide/page.tsx` | Static (○) | Comprehensive guide on test formats, band descriptors, and prep strategies. |
| `/ielts/listening` | `app/ielts/listening/page.tsx` | Static (○) | IELTS Listening test with real audio player, transcripts, fill-ins, and MCQs. |
| `/ielts/practice` | `app/ielts/practice/page.tsx` | Static (○) | Quick-start IELTS practice navigator. |
| `/ielts/progress` | `app/ielts/progress/page.tsx` | Static (○) | Historical test results, score analytics, and band progress charts. |
| `/ielts/reading` | `app/ielts/reading/page.tsx` | Static (○) | IELTS Academic & General Reading passage directory with filters. |
| `/ielts/reading/[passageId]` | `app/ielts/reading/[passageId]/page.tsx` | SSG (●) | Timed split-pane reading test exam engine with 10 random questions (110 paths). |
| `/ielts/speaking` | `app/ielts/speaking/page.tsx` | Static (○) | Speaking practice with Part 1/2/3 cards, speech-to-text dictation, and AI grading. |
| `/ielts/writing` | `app/ielts/writing/page.tsx` | Static (○) | Writing test editor with word counter, prompt selector, and AI essay grading. |
| `/ielts/writing/gt-task-1` | `app/ielts/writing/gt-task-1/page.tsx` | Static (○) | Directory of General Training Task 1 letter prompts and model answers. |
| `/ielts/writing/gt-task-1/[slug]` | `app/ielts/writing/gt-task-1/[slug]/page.tsx` | SSG (●) | Individual GT Task 1 model letter viewer and analysis (20 paths). |
| `/ielts/writing/task-1` | `app/ielts/writing/task-1/page.tsx` | Static (○) | Directory of Academic Task 1 chart/graph prompts and model reports. |
| `/ielts/writing/task-1/[slug]` | `app/ielts/writing/task-1/[slug]/page.tsx` | SSG (●) | Individual Academic Task 1 model report viewer with SVG figure (20 paths). |
| `/ielts/writing/task-2` | `app/ielts/writing/task-2/page.tsx` | Static (○) | Directory of Task 2 essay prompts, band 9 model essays, and breakdowns. |
| `/ielts/writing/task-2/[slug]` | `app/ielts/writing/task-2/[slug]/page.tsx` | SSG (●) | Individual Task 2 model essay viewer and scoring breakdown (20 paths). |
| `/islamic-studies` | `app/islamic-studies/page.tsx` | Static (○) | Islamic Studies portal (Quran, Duas, Quiz, and upcoming collections). |
| `/leaderboard` | `app/leaderboard/page.tsx` | Static (○) / Client | Global and category-specific user rankings powered by Firestore. |
| `/notes` | `app/notes/page.tsx` | Static (○) | Study notes and revision guides directory. |
| `/notes/[id]` | `app/notes/[id]/page.tsx` | SSG (●) | Individual revision note reader with article formatting (5 paths). |
| `/offline` | `app/offline/page.tsx` | Static (○) | PWA offline fallback screen when network connectivity is lost. |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Static (○) | Official privacy policy and data protection declaration. |
| `/profile` | `app/profile/page.tsx` | Static (○) / Client | Authenticated user profile dashboard with statistics and recent sessions. |
| `/quiz` | `app/quiz/page.tsx` | Static (○) | General subject quizzes hub. |
| `/quiz/[id]` | `app/quiz/[id]/page.tsx` | SSG (●) | Interactive multiple-choice subject quiz engine (Algebra, Biology, WWII; 3 paths). |
| `/quiz/islamic-quiz` | `app/quiz/islamic-quiz/page.tsx` | Static (○) | Gamified trilingual Islamic quiz engine with timer, streaks, and Firestore save. |
| `/quran` | `app/quran/page.tsx` | Static (○) | Quran portal with options for Digital Reader, Tajweed, 15-Line, and 13-Line PDFs. |
| `/quran/[id]` | `app/quran/[id]/page.tsx` | SSG (●) | Digital Surah reader with 40+ translations and audio recitation (114 paths). |
| `/quran/juz/[juzId]` | `app/quran/juz/[juzId]/page.tsx` | SSG (●) | Digital Juz reader displaying verses partitioned by Juz (30 paths). |
| `/quran/pdf/13line` | `app/quran/pdf/13line/page.tsx` | Static (○) | 13-line color-coded Tajweed Mushaf PDF viewer (851 pages). |
| `/quran/pdf/15line` | `app/quran/pdf/15line/page.tsx` | Static (○) | 15-line standard Uthmani Mushaf PDF viewer (612 pages). |
| `/quran/pdf-reader` | `app/quran/pdf-reader/page.tsx` | Static (○) | Unlinked duplicate viewer rendering the 15-line PDF. |
| `/quran/read` | `app/quran/read/page.tsx` | Static (○) | Comprehensive digital Quran reader with script selectors and search. |
| `/quran/tajweed` | `app/quran/tajweed/page.tsx` | Static (○) | Directory of all 114 Surahs with Tajweed rules guide. |
| `/quran/tajweed/[id]` | `app/quran/tajweed/[id]/page.tsx` | SSG (●) | Color-coded Tajweed reader with click-to-explain rule popups (114 paths). |
| `/search` | `app/search/page.tsx` | Static (○) / Client | Full-text client search across courses, topics, surahs, and tools. |
| `/tools` | `app/tools/page.tsx` | Static (○) | Utility tools and calculators directory. |
| `/tools/cfa-calculator` | `app/tools/cfa-calculator/page.tsx` | Static (○) | Texas Instruments BA II Plus financial calculator emulator. |
| `/tools/finance-tools` | `app/tools/finance-tools/page.tsx` | Static (○) | Financial and accounting tools index. |
| `/tools/finance-tools/bank-reconciliation` | `app/tools/finance-tools/bank-reconciliation/page.tsx` | Static (○) | Permanent 308 redirect to `/tools/finance-tools/reconciliation/bank`. |
| `/tools/finance-tools/reconciliation/[type]` | `app/tools/finance-tools/reconciliation/[type]/page.tsx` | SSG (●) | Multi-party reconciliation tool for bank, supplier, customer, and interco (4 paths). |
| `/tools/number-to-words` | `app/tools/number-to-words/page.tsx` | Static (○) | Numbers-to-words converter for financial cheques and amounts. |
| `/tools/scientific-calculator` | `app/tools/scientific-calculator/page.tsx` | Static (○) | Advanced scientific calculator with trigonometry and logarithmic functions. |
| `/tools/simple-calculator` | `app/tools/simple-calculator/page.tsx` | Static (○) | Clean 4-function arithmetic calculator. |

### 3.2 API Route Handlers

| Endpoint | HTTP Method | Runtime | Purpose | External Services Called |
| :--- | :--- | :--- | :--- | :--- |
| `/api/writing` | `POST` | Edge | Grades IELTS Academic & General Training essays across 4 official criteria (TA/TR, CC, LR, GRA) on a 1.0–9.0 band scale. | **DeepSeek Chat API** (`https://api.deepseek.com/chat/completions`, model `deepseek-chat`). |
| `/api/speaking` | `POST` | Edge | Evaluates transcribed IELTS speaking responses across Lexical Resource, Grammar, and Coherence on a 1.0–9.0 scale. | **DeepSeek Chat API** (`https://api.deepseek.com/chat/completions`, model `deepseek-chat`). |
| `/api/bank-reconciliation` | `POST` | Node.js | In-memory parsing of two uploaded statements (CSV/XLSX), column mapping application, multi-pass match reconciliation, and Excel generation. | **None** (Self-contained in-memory processing via `exceljs`, `papaparse`, and `xlsx`). |
| `/api/admin/auth` | `POST` | Node.js | Verifies admin password via timing-safe crypto comparison and issues a signed HMAC SHA-256 `admin_token` httpOnly cookie. | **None** (Node.js native `crypto`). |
| `/api/admin/logout` | `POST` | Node.js | Clears the `admin_token` authentication cookie. | **None**. |
| `/api/admin/verify` | `GET` | Node.js | Validates the HMAC signature and 24-hour expiration of the `admin_token` cookie. | **None** (Node.js native `crypto`). |

---

## 4. FEATURES BY SECTION

### 4.1 IELTS Preparation Module (`/ielts`)
- **What Exists & Works:**
  - **Full Mock Simulation (`/ielts/full-test`):** End-to-end computer-delivered IELTS exam simulation with automated module transitions (Listening → Reading → Writing → Speaking), active test timers, and consolidated final score reporting.
  - **Reading Test Engine (`/ielts/reading/[passageId]`):** 110 full-length Academic reading passages. Split-pane layout with sticky passage left (55%) and questions right (45%), responsive mobile drawer, 20-minute timer with auto-submit, numbered navigation grid (1–10), and randomized question sampling with localStorage no-repeat rotation. Automatic band score calculation (1.0–9.0) and post-test answer review with inline explanations. Supports multiple question types: Multiple Choice (MCQ), True/False/Not Given (TFNG), Yes/No/Not Given (YNNG), Sentence Completion, and Short Answer.
  - **Listening Engine (`/ielts/listening`):** 4 sections complete with pre-rendered native audio recordings (`/public/ielts/listening/section-1.mp3` through `section-4.mp3`), 45-second reading period countdown, pause/replay toggles, interactive transcript fill-in-the-blank inputs, and multiple-choice questions.
  - **Writing Module (`/ielts/writing`):** 60 pre-rendered model answer pages (20 Academic Task 1 reports with interactive SVG charts/maps, 20 Task 2 essays, and 20 General Training Task 1 formal/semi-formal/informal letters). Features a live timed writing workspace with character and word counters, minimum word requirement enforcement, and instant AI grading via the Edge API (`/api/writing`).
  - **Speaking Practice (`/ielts/speaking`):** Part 1 interview, Part 2 cue card (with 1-minute prep timer and 2-minute response timer), and Part 3 two-way discussion. Integrates `react-speech-recognition` for real-time microphone speech transcription and submits transcripts to `/api/speaking` for AI band scoring and constructive examiner feedback.
  - **Progress Tracking (`/ielts/progress`):** Visual progress dashboard showing recent test sessions, band score distribution, and skill breakdown (stored locally and synced with Firestore).
- **Unfinished / Work in Progress:**
  - `app/ielts/page.tsx:150` contains a comment: `// TODO: build band score calculator — would be a good future feature (was a dead /ielts self-link, removed June 2026)`.
  - `app/ielts/speaking/SpeakingPage.tsx:532` renders `More topics coming soon` text below the 2 existing topics (Technology and Education).
- **Data Location & Schemas:**
  - Files: `lib/ielts/readingData.ts`, `lib/ielts/listeningData.ts`, `lib/ielts/writingData.ts`, `lib/ielts/ielts-speaking-data.ts`, `lib/ielts/ielts-types.ts`.

```typescript
// Core IELTS Interfaces (lib/ielts/readingData.ts & ielts-types.ts)
export interface Question {
  id: number;
  type: string; // "mcq" | "tfng" | "ynng" | "sentence_completion" | "short_answer"
  q: string;
  opts?: string[];
  answer: string;
  acceptedAnswers?: string[];
  explanation: string;
  sentenceTemplate?: string;
}

export interface Passage {
  id: string;
  tag: string;
  level: string;
  title: string;
  text: string;
  wordCount: number;
  questions: Question[];
}

export interface BankListeningQ {
  id: number;
  type: "fill" | "mcq";
  q: string;
  opts?: string[];
  answer: string;
  acceptedAnswers?: string[];
  explanation: string;
}

export interface BankListeningSection {
  id: string;
  test: string;
  format: string;
  part: number;
  kind: string;
  title: string;
  context: string;
  audio: string;
  transcript: string;
  questions: BankListeningQ[];
}
```

---

### 4.2 GMAT Focus Edition Module (`/gmat`)
- **What Exists & Works:**
  - **Full Exam Simulator (`/gmat/full-test`):** Exact emulation of the GMAT Focus Edition (64 questions, 2h 15m duration, 205–805 score scale). Enforces official test rules: 3 sections of 45 minutes each, section order selection, answer bookmarking, and editing up to 3 answers per section.
  - **Quantitative Practice (`/gmat/quant`):** 254 Problem Solving items across Arithmetic, Algebra, Number Properties, Word Problems, and Rates.
  - **Verbal Practice (`/gmat/verbal`):** 144 items (182 gradable units) covering Critical Reasoning and Reading Comprehension with full passage stimuli.
  - **Data Insights Practice (`/gmat/data-insights`):** 137 items (148 gradable units) covering all 5 modern Focus Edition question types: Data Sufficiency (with standard 5 statements), Multi-Source Reasoning (with tabbed documents), Table Analysis (with sortable columns), Graphics Interpretation (with custom bar/line/scatter SVG charts and dropdown blanks), and Two-Part Analysis (two-column selection). Includes an integrated on-screen calculator (`components/gmat/DataInsightsCalculator.tsx`).
  - **Validation Infrastructure:** `scripts/validate-gmat.ts` verifies structural integrity (535 total items, 584 gradable units).
- **Unfinished / Work in Progress:**
  - `reports/gmat-ds-mutation.txt` tracks 22 early cohort Data Sufficiency items requiring fine-tuning of distractor classifications.
- **Data Location & Schemas:**
  - Files: `lib/gmat/quant.ts`, `lib/gmat/verbal.ts`, `lib/gmat/data-insights.ts`, `lib/gmat/types.ts`, `lib/gmat/engine.ts`.

```typescript
// Core GMAT Interfaces (lib/gmat/types.ts)
export type GmatSection = "quant" | "verbal" | "data-insights";

export type GmatQuestionType =
  | "problem-solving"
  | "critical-reasoning"
  | "reading-comprehension"
  | "data-sufficiency"
  | "multi-source-reasoning"
  | "table-analysis"
  | "graphics-interpretation"
  | "two-part-analysis";

export interface GmatBase {
  id: string;
  section: GmatSection;
  type: GmatQuestionType;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: string;
  explanation: string;
}

export interface GmatMcq extends GmatBase {
  type: "problem-solving" | "critical-reasoning";
  stem: string;
  passage?: string;
  options: string[];
  correct: number;
  optionExplanations?: string[];
}

export interface GmatDataSufficiency extends GmatBase {
  type: "data-sufficiency";
  stem: string;
  statements: [string, string];
  correct: number; // Index into standard DS_OPTIONS (0-4)
  optionExplanations?: string[];
}

export interface GmatTwoPartAnalysis extends GmatBase {
  type: "two-part-analysis";
  intro: string;
  prompt: string;
  colHeaders: [string, string];
  rows: string[];
  correctA: number;
  correctB: number;
}
```

---

### 4.3 Quran and Islamic Education (`/quran`, `/duas`, `/islamic-studies`, `/quiz/islamic-quiz`)
- **What Exists & Works:**
  - **Strictly Ad-Free Policy:** Islamic education pages contain no advertisements.
  - **Digital Quran Reader (`/quran/read`, `/quran/[id]`, `/quran/juz/[juzId]`): All 114 Surahs and 30 Juz pre-rendered SSG. Offers 40+ translations (English, Urdu, Hindi, Turkish, Indonesian, etc.), audio recitations (Mishary Alafasy), script font switcher (`QuranScriptSelector.tsx`: Uthmani, Indo-Pak, Maghribi), font sizing controls, ayah bookmarking, and night/dark mode.
  - **Color-Coded Tajweed Reader (`/quran/tajweed/[id]`):** Fetches real Tajweed markup from `api.qurancdn.com`. Features 14 color-coded pronunciation rules (Ghunnah, Ikhfa, Idgham, Qalqalah, Iqlab, etc.) with a click-to-explain modal providing trilingual explanations (English, Urdu, Hindi) and audio playback from `cdn.islamic.network`.
  - **Mushaf PDF Readers (`/quran/pdf/15line`, `/quran/pdf/13line`):** High-resolution 15-line standard Uthmani Mushaf (612 pages) and 13-line color Tajweed Mushaf (851 pages) hosted on Cloudflare R2 and rendered client-side via `react-pdf`.
  - **Duas & Azkar Engine (`/duas`):** 38 verified authentic Duas across 8 categories with Quranic/Hadith references and grading badges (Sahih, Hasan, Quranic). Provides 8 translation languages, verse-synced audio player, interactive Tasbeeh counter with haptic vibration, hide-text memorization mode, and canvas-rendered social share cards (`DuaShareModal.tsx`) with WhatsApp image sharing.
  - **Trilingual Islamic Quiz (`/quiz/islamic-quiz`):** Gamified quiz engine (`IslamicQuizGame.tsx`) containing 160 unique questions across 7 categories in English, Urdu, and Hindi. Includes Arabic ayah citations with full harakat, countdown timers based on difficulty (8s–25s), speed bonuses, streak counters, Fisher-Yates option shuffling, and Firestore leaderboard integration.
- **Unfinished / Work in Progress:**
  - `app/islamic-studies/page.tsx:102-119` displays three "Coming Soon / In Development" placeholder cards:
    - Hadith (الحديث الشريف): Collections of Bukhari, Muslim, and Tirmidhi.
    - Sirat-un-Nabwi (السيرة النبوية): Life of Prophet Muhammad ﷺ.
    - Islamic Books (الكتب الإسلامية): Digital Islamic library.
  - `app/quran/QuranPage.tsx` is an unused duplicate file left over from a refactor into `app/quran/read/QuranPage.tsx`.
  - `app/quran/pdf-reader/page.tsx` is an unlinked duplicate route without metadata that mirrors `/quran/pdf/15line`.
  - Three large PDF mushaf files sit loose in the project root directory.
- **Data Location & Schemas:**
  - Files: `lib/duasData.ts`, `lib/islamicQuizQuestions.ts`, `lib/quranSurahMeta.ts`, `lib/quranAudio.ts`.

```typescript
// Duas Database Schema (lib/duasData.ts)
export type LanguageCode = "ur" | "en" | "hi" | "tr" | "es" | "fr" | "bn" | "id";
export type HadithGrading = "quran" | "sahih" | "hasan";

export interface DuaItem {
  id: string;
  category: "rabbana" | "morning" | "evening" | "daily" | "salah" | "forgiveness" | "protection";
  title: { en: string; ur: string; ar: string };
  arabic: string;
  transliteration: string;
  surahInfo?: { surah: number; ayah: number };
  repeatTarget: number;
  benefit: { en: string; ur: string };
  source: string;
  translations: Record<LanguageCode, string>;
  grading?: HadithGrading;
  sourceRefs?: { collection: string; number: string }[];
}

// Islamic Quiz Question Schema (lib/islamicQuizQuestions.ts)
export interface LangData {
  q: string;
  opts: string[];
  ans: number;
}

export interface Question {
  id?: string;
  cat: string;
  diff: "easy" | "medium" | "hard" | "expert";
  pts: number;
  en: LangData;
  ur: LangData;
  hi: LangData;
  arabicAyah?: string;
  reference?: string;
}
```

---

### 4.4 Financial Tools & Statement Reconciliation (`/tools/finance-tools/reconciliation/[type]`)
- **What Exists & Works:**
  - **Multi-Party Statement Reconciliation Engine:** Specialized tools for 4 accounting workflows:
    - Bank Reconciliation (`/tools/finance-tools/reconciliation/bank`)
    - Supplier Statement Reconciliation (`/supplier`)
    - Customer Statement Reconciliation (`/customer`)
    - Intercompany Reconciliation (`/intercompany`)
  - **File Ingestion & Parsing:** Supports CSV and Excel (`.xlsx`, `.xls`) uploads up to 3MB per file using `papaparse` and `xlsx`.
  - **Client Column Mapping (`lib/bank-reconciliation/mapping.ts`):** Allows users to map Date, Description, Amount (single signed or In/Out columns), and Reference. Automatically detects and parses international date tokens (DMY, MDY, YMD).
  - **In-Memory Matching Algorithm (`lib/bank-reconciliation/engine.ts`):**
    - Pass 1: Exact reference matching (date-tolerant for banks; date-agnostic for supplier/customer invoices).
    - Pass 2: Exact amount matching within configurable date windows (default 3 days).
    - Pass 3: One-to-many and many-to-many split transaction matching via a combinatorial knapsack solver (evaluates combinations up to 6 lines within strict iteration ceilings).
  - **Automated Excel Workbook Generation (`statement.ts`):** Streams back a downloadable, styled Excel `.xlsx` workbook generated via `exceljs` with Summary tie-out sheets, matched groups (e.g. `M-001`, `S-001`), and separate sheets for unmatched external and internal ledger records. Zero database storage or disk writes.
  - **Calculators:**
    - CFA Financial Calculator (`/tools/cfa-calculator`): Texas Instruments BA II Plus financial calculator emulator (Time Value of Money, NPV/IRR, Depreciation).
    - Scientific Calculator (`/tools/scientific-calculator`): Trigonometric, logarithmic, and power calculations with dark/light theme toggle.
    - Simple Calculator (`/tools/simple-calculator`): 4-function arithmetic.
    - Number to Words Converter (`/tools/number-to-words`): Numeric to English word currency formatters for cheques.
- **Unfinished / Work in Progress:**
  - Legacy stub `/tools/finance-tools/bank-reconciliation` performs an HTTP 308 redirect to `/tools/finance-tools/reconciliation/bank`.
- **Data Location & Schemas:**
  - Files: `lib/bank-reconciliation/types.ts`, `lib/bank-reconciliation/reconTypes.ts`, `lib/bank-reconciliation/engine.ts`.

```typescript
// Bank Reconciliation Types (lib/bank-reconciliation/types.ts)
export interface Txn {
  id: number;
  date: Date;
  description: string;
  amount: number;
  reference?: string;
  raw: Record<string, unknown>;
}

export type MatchStatus = "Matched" | "Split Match" | "Split Match (verify)" | "Unmatched";

export interface MatchedTxn extends Txn {
  status: MatchStatus;
  matchGroupId: number | null;
  seqCode: string;
  dateDiffDays: number | null;
  matchedWith: string;
}

export interface ColumnMapping {
  dateCol: string;
  dateOrder?: "DMY" | "MDY" | "YMD" | "YDM";
  descriptionCol: string;
  amountMode: "single" | "inOut";
  amountCol?: string;
  amountSign?: 1 | -1;
  moneyInCol?: string;
  moneyOutCol?: string;
  referenceCol?: string;
  balanceCol?: string;
}
```

---

### 4.5 Academic Courses, Notes & Mathematics Hub
- **What Exists & Works:**
  - **Mathematics Curriculum Hub (`/courses/mathematics`, `/courses/mathematics/[topicId]`):** 20 comprehensive mathematics topics across 5 progressive levels (Elementary, Middle School, High School, University, Professional). Each topic features an interactive 4-tab interface: Concept Explanation, Step-by-Step Worked Examples, Practice Problems with revealable hints, and a 5-question Quiz with instant feedback.
  - **Full Interactive Lessons:** Dedicated multi-tab lessons for Fractions (`/courses/mathematics/fractions-basics/lesson`), Biology Cells (`/courses/science-biology-cells/lesson`), English Essay Writing (`/courses/english-essay-writing/lesson`), and World War I (`/courses/history-world-war-1/lesson`).
  - **Study Notes (`/notes`, `/notes/[id]`):** Structured revision notes covering Algebra, Cell Biology, Essay Writing, and Mechanics.
  - **General Quizzes (`/quiz`, `/quiz/[id]`):** Interactive multiple-choice tests powered by `QuizEngine.tsx`.
- **Unfinished / Work in Progress:**
  - While all 20 math topics have full interactive 4-tab pages in `[topicId]/MathTopicPage.tsx`, only `fractions-basics` has a separate dedicated `/lesson` sub-route.
  - Local JSON files (`data/courses.json`, `data/notes.json`, `data/quizzes.json`) contain small initial seed catalogs; planned database backends were deferred.
- **Data Location & Schemas:**
  - Files: `lib/mathTopics.ts`, `data/courses.json`, `data/notes.json`, `data/quizzes.json`, `types/index.ts`.

```typescript
// Math Curriculum Schema (lib/mathTopics.ts)
export type Level = "Elementary" | "Middle School" | "High School" | "University" | "Professional";

export interface MathTopic {
  id: string;
  title: string;
  subtitle: string;
  level: Level;
  category: string;
  emoji: string;
  description: string;
  explanation: string[];
  keyPoints: string[];
  examples: { title: string; problem: string; steps: string[]; answer: string }[];
  exercises: { problem: string; hint: string; answer: string; solution: string }[];
  quiz: { q: string; opts: string[]; ans: number; explanation: string }[];
  relatedTopics: string[];
  tags: string[];
}
```

---

### 4.6 Educational Games (`/games`)
- **What Exists & Works:**
  - **Math Puzzle (`/games/math-puzzle`):** Mental arithmetic, missing operators, and numerical sequence challenges across 4 timed difficulty levels.
  - **WordWise (`/games/word-puzzle`):** 5-letter educational vocabulary puzzle with Wordle-style feedback (green/yellow/gray tiles) across Math, Science, and English dictionaries.
  - **Quiz Battle (`/games/quiz-battle`):** Survival trivia game with 3 lives, 10 progressive questions, score multipliers, and streak mechanics.
  - **ShareScore Integration:** Canvas-based shareable score cards for WhatsApp, Twitter/X, and image downloads.
- **Unfinished / Work in Progress:**
  - Game scores are stored locally in the browser; they are not currently synced to the global Firestore leaderboard used by Islamic Quiz.

---

## 5. SHARED COMPONENTS AND DESIGN

### 5.1 Reusable UI Components Directory
| Component | Location | Description |
| :--- | :--- | :--- |
| `Navbar` | `components/Navbar.tsx` | Sticky global header with mobile hamburger drawer, desktop links, and UserButton. |
| `Footer` | `components/Footer.tsx` | Global footer with categorized navigation links, copyright, and educational disclaimer. |
| `UserButton` | `components/UserButton.tsx` | Dropdown showing user profile info, links to `/profile` and `/leaderboard`, and sign-out action. |
| `AuthModal` | `components/AuthModal.tsx` | Centered modal for Google OAuth and Email sign-in/up; renders into `document.body` via React Portal. |
| `Card` | `components/Card.tsx` | Standard card component with hover elevation for course and note items. |
| `HomeHero` | `components/HomeHero.tsx` | Homepage hero banner with dynamic stat badges, CTA buttons, and interactive category tabs. |
| `JsonLd` | `components/JsonLd.tsx` | Injects Schema.org JSON-LD structured data for WebSite, Organization, Breadcrumb, and Courses. |
| `MarqueeBanner` | `components/MarqueeBanner.tsx` | Smooth horizontal scrolling announcement banner. |
| `SearchBar` | `components/SearchBar.tsx` | Full-text client search input with keyboard navigation and grouped result dropdown. |
| `TrademarkDisclaimer` | `components/TrademarkDisclaimer.tsx` | Legal disclaimers for Cambridge/IDP (IELTS) and GMAC (GMAT) trademarks. |
| `MobileTabBar` | `components/pwa/MobileTabBar.tsx` | Fixed bottom navigation bar for mobile viewports with iPhone home indicator safe-area padding. |
| `ServiceWorkerRegistrar` | `components/pwa/ServiceWorkerRegistrar.tsx` | Registers `/sw.js` service worker in production environments. |
| `ShareScore` | `components/ShareScore.tsx` | Canvas-based score card generator with social sharing buttons. |
| `QuizEngine` | `app/quiz/[id]/QuizEngine.tsx` | Reusable multiple-choice quiz runner with progress bar, option buttons, and answer explanations. |
| `QuestionRenderer` | `components/gmat/QuestionRenderer.tsx` | Modular renderer handling all 7 GMAT question formats (MCQ, DS, MSR, Tables, Graphs, Two-Part). |
| `QuranScriptSelector`| `components/quran/QuranScriptSelector.tsx` | Script switcher for Quran readers (Uthmani, Indo-Pak, Maghribi). |
| `DuaShareModal` | `components/duas/DuaShareModal.tsx` | Generates customizable canvas image cards for Duas with WhatsApp picture sharing. |

### 5.2 Design System & Aesthetics
- **Color Palette:**
  - Primary Brand Teal: `brand-600` (`#0d9488`), `brand-700` (`#0f766e`), `brand-50` (`#f0fdf9`). 3D button press style: `box-shadow: 0 4px 0 #0f6e56`.
  - Section Accents: Amber (`amber-500/600`) for Quran and Duas; Indigo (`indigo-600/700`) for IELTS; Teal for Math and Financial Tools; Green (`green-600`) for Biology; Purple (`purple-600`) for English; Red (`red-700`) for History.
  - Neutrals: Background default `gray-50` (`#f8fafc`); Card surfaces `white` with border `gray-200` (`#e2e8f0`); Primary text `gray-900` (`#0f172a`), secondary text `gray-500` (`#64748b`).
- **Typography & Fonts:**
  - Managed via `next/font/google` in `app/layout.tsx` (zero layout shift, automatically preloaded):
    - Body: `DM Sans` (`variable: '--font-body'`, class `.font-body`).
    - Display Headings: `Playfair Display` (`variable: '--font-display'`, class `.font-display`).
    - Arabic Text: `Amiri` (`variable: '--font-arabic'`, weights 400 and 700).
    - Indo-Pak Script: `Noto Naskh Arabic` (`variable: '--font-indopak'`, weights 400, 600, 700).
    - Maghribi Script: `Lateef` (`variable: '--font-maghribi'`, weights 400, 700).
    - Uthmani Script: `Scheherazade New` (`variable: '--font-uthmani'`, weights 400, 700).
- **Theme & Dark Mode Handling:**
  - There is **no global dark mode theme** across the entire website. The global layout defaults to light mode (`bg-gray-50 text-gray-900`).
  - Dark mode is implemented locally via component state in:
    - Quran Digital Reader (`app/quran/[id]/QuranReader.tsx`)
    - Quran Tajweed Reader (`app/quran/tajweed/[id]/TajweedQuranReader.tsx`)
    - Scientific Calculator (`app/tools/scientific-calculator/ScientificCalculator.tsx`)
- **Arabic Text & RTL Handling:**
  - Utility classes configured in `app/globals.css`: `.font-arabic`, `.font-uthmani`, `.font-indopak`, `.font-maghribi`.
  - Direction: Explicit `dir="rtl"` attribute and `style={{ direction: "rtl", fontFamily: "var(--font-arabic), 'Amiri', serif" }}`.
  - Line Heights: Enforced minimum `lineHeight: 2.2` to prevent Arabic diacritics (harakat/tashkeel) from overlapping.
  - Script Switcher: `QuranScriptSelector.tsx` allows users to dynamically switch between Uthmani, Indo-Pak, and Maghribi font faces.
  - Tablet Fallback: `@import` rule for Google Fonts Amiri embedded as a fallback for older tablet browsers.

---

## 6. DEPENDENCIES

### 6.1 Production Dependencies (`dependencies`)
| Package | Version | Purpose |
| :--- | :--- | :--- |
| `exceljs` | `^4.4.0` | Server-side Excel generation in `/api/bank-reconciliation` (creates formatted `.xlsx` workbooks with multiple tabs and styles). |
| `firebase` | `^12.14.0` | Client SDK for Firebase Auth (Google OAuth, Email/Password) and Cloud Firestore database operations. |
| `next` | `^14.2.5` | Core Next.js 14 App Router framework (SSG, server components, Edge and Node API routes). |
| `papaparse` | `^5.5.4` | In-browser and server-side CSV statement parser for the reconciliation tool. |
| `pdfjs-dist` | `^6.2.108` | PDF parsing and rendering engine used by `react-pdf`. |
| `react` | `^18` | Core React 18 library. |
| `react-dom` | `^18` | React DOM renderer; powers `createPortal` for modals. |
| `react-pdf` | `^10.4.1` | Client-side PDF canvas renderer for 15-line and 13-line Quran Mushafs. |
| `react-speech-recognition` | `^4.0.1` | Web Speech API speech-to-text dictation hook used in IELTS Speaking practice. |
| `xlsx` | `^0.18.5` | SheetJS library used to parse uploaded Excel spreadsheets (`.xlsx`, `.xls`) in the reconciliation tool. |

### 6.2 Development Dependencies (`devDependencies`)
| Package | Version | Purpose |
| :--- | :--- | :--- |
| `@types/node` | `^20` | TypeScript definitions for Node.js runtime. |
| `@types/papaparse` | `^5.5.2` | TypeScript definitions for PapaParse. |
| `@types/react` | `^18` | TypeScript definitions for React 18. |
| `@types/react-dom` | `^18` | TypeScript definitions for React DOM 18. |
| `@types/react-speech-recognition` | `^3.9.6` | TypeScript definitions for react-speech-recognition. |
| `autoprefixer` | `^10.0.1` | PostCSS vendor prefixing plugin. |
| `broken-link-checker` | `^0.7.8` | CLI crawler used in `npm run check-links` to audit live links on the production website. |
| `eslint` | `^8` | JavaScript and TypeScript linter. |
| `eslint-config-next` | `14.2.5` | Next.js linting rule preset. |
| `playwright` | `^1.62.1` | Headless browser automation library used for offline service worker and bundle testing. |
| `postcss` | `^8` | CSS processor for Tailwind CSS. |
| `tailwindcss` | `^3.4.1` | Utility-first CSS framework. |
| `tsx` | `^4.22.4` | TypeScript execution CLI used to run maintenance and validation scripts (`validate-gmat`, `validate-duas`). |
| `typescript` | `^5` | TypeScript compiler. |

### 6.3 Dependency Flags & Observations
- **Missing ESLint Config:** Although `eslint` and `eslint-config-next` are declared in `package.json`, there is no `.eslintrc.json` or `.eslintrc.js` file in the repository. Running `npm run lint` prompts interactively and exits with an error in non-interactive environments.
- **Dual Spreadsheet Libraries:** Both `xlsx` (SheetJS) and `exceljs` are installed. `xlsx` is used for reading user files and `exceljs` for writing formatted outputs.
- **Outdated Browserslist:** Next.js build emits a warning that `caniuse-lite` is out of date and recommends running `npx update-browserslist-db@latest`.

---

## 7. SEO, ANALYTICS AND STORAGE

### 7.1 Metadata & SEO Architecture
- **Server Metadata Pattern:** Static pages export an `export const metadata: Metadata` object containing title, description, canonical URL, and OpenGraph/Twitter cards. Dynamic pages (e.g. `/ielts/reading/[passageId]`, `/courses/mathematics/[topicId]`, `/tools/finance-tools/reconciliation/[type]`) export an `export async function generateMetadata({ params }): Promise<Metadata>` function.
- **Structured Data (JSON-LD):** `components/JsonLd.tsx` injects Schema.org metadata across pages:
  - `Organization` & `WebSite` metadata in root `app/layout.tsx`.
  - `BreadcrumbList` on content, surah, and PDF reading pages.
  - `Course` schema on educational and math hub pages.
- **Sitemap (`app/sitemap.ts`):** Automatically generates `/sitemap.xml` dynamically containing over 500 URLs covering static hubs, all 20 math topics, 110 IELTS reading passages, 60 writing model answers, all 114 Quran surahs, 114 Tajweed pages, and 30 Juz.
- **Robots Config (`public/robots.txt`):**
  - Allows full crawling (`Allow: /`).
  - Explicitly allows `/_next/static/` and `/_next/image` so crawlers can render styling and images.
  - Disallows internal and admin paths (`/api/`, `/admin/`).
  - Disallows legacy WordPress URLs from previous site migration (`/wp-content/`, `/wp-admin/`, `/?p=`, `/?page_id=`).

### 7.2 Analytics & Advertisements
- **Google Analytics 4:** Measurement ID `G-F7MCW76675` loaded in `app/layout.tsx` using `next/script` with `strategy="afterInteractive"`. It is conditionally executed only in production (`process.env.NODE_ENV === 'production'`).
- **Google AdSense:** Publisher ID `pub-4849924746775880` verified via `public/ads.txt`. Advertisements are non-intrusive and strictly omitted from Islamic content.

### 7.3 Storage Layers (Client, Cookies, and Database)
- **Browser LocalStorage:**
  - `ielts_sessions`: Stores the last 200 IELTS practice test results locally.
  - `ielts_seen_${passageId}`: Array of seen question IDs for no-repeat test question cycling.
  - `gmat_history`: Stores the last 200 GMAT section and mock results.
  - `dua_favorites`: Array of favorited Dua IDs.
  - `tasbeeh_counts`: Persists individual digital Tasbeeh counter tallies.
  - `quran_bookmarks`: Persists ayah bookmark positions.
  - `wordwise_stats`: Word puzzle streak, win count, and guess distribution.
- **HTTP Cookies:**
  - `admin_token`: HttpOnly, Secure, SameSite=Strict cookie storing an HMAC SHA-256 signed token for 24-hour admin dashboard authentication.
- **Firebase Firestore Database:**
  - `users/{uid}`: Profile data, total scores, questions answered, streaks, category breakdowns.
  - `quizSessions/{sessionId}`: Quiz session records with game name, category, score, and timestamp.
  - `leaderboard/{uid}`: Global user score rankings.
  - `leaderboard_{category}/{uid}`: Category-specific leaderboard records.
  - `ieltsSessions/{sessionId}`: IELTS test records with band scores and skill breakdowns.
  - `gmatResults/{uid}/sessions/{sessionId}`: GMAT mock results with section scores and estimated totals.
  - `admin_quiz`: Question bank documents managed via the admin panel.
  - `admin_ielts_listening`: Admin-uploaded listening test data.
  - `admin_uploads`: Audit log of batch uploads performed by the admin.
- **Cloudflare R2 Storage:**
  - Public bucket `pub-8abd18b123d249afbfea45177c4d7d94.r2.dev` hosting large Quran Mushaf PDF documents.

---

## 8. RECENT CHANGES

### 8.1 Summary of the Last 30 Git Commits
The repository reflects active feature additions, refactoring, and SEO enhancements:

| Commit | Date | Description | Key Files Touched |
| :--- | :--- | :--- | :--- |
| `0565bb1` | 2026-08-26 | Merge branch 'refactor/gmat-data-layout' into main | Git merge |
| `1392044` | 2026-08-26 | refactor(gmat): pass section bank via props to enable route-level code splitting | `app/gmat/*`, `components/gmat/PracticeRunner.tsx` |
| `5ee9828` | 2026-08-26 | refactor(gmat): split lib/gmat/data.ts into quant, verbal, data-insights, and form | `lib/gmat/*`, `app/gmat/full-test/GmatFullMock.tsx` |
| `8991da0` | 2026-08-26 | docs(gmat): add sw.js and firebase offline analysis and add playwright devDependency | `package.json`, `reports/gmat-offline-analysis.txt` |
| `b3d83e2` | 2026-08-26 | docs(gmat): document client bundle composition, import hierarchy, and service worker offline caching | `reports/gmat-client-bundle.txt` |
| `0e81ad6` | 2026-08-26 | docs(gmat): regenerate DS mutation note with exact 22-item unclassified list | `reports/gmat-ds-mutation.txt` |
| `1f0bb2e` | 2026-08-26 | docs(gmat): replace mutation test with DS classifier coverage note and delete mutation script | `reports/gmat-ds-mutation.txt`, `scripts/mutation-test-ds.ts` |
| `b785fad` | 2026-08-26 | test(gmat): update mutation audit metrics and export early cohort items for manual review | `reports/*`, `scripts/audit-gmat.ts` |
| `4fe0586` | 2026-08-26 | test(gmat): add DS mutation audit and narrow audit-gmat classifier input | `reports/gmat-audit.txt`, `scripts/audit-gmat.ts` |
| `d742fdc` | 2026-08-26 | fix(gmat): reword distractor explanation in gmat-ps-0220 | `lib/gmat/data.ts` |
| `4a341b4` | 2026-08-26 | test(gmat): rebuild audit-gmat script with separated contradictions, style, and generalised DS check | `reports/gmat-audit.txt`, `scripts/audit-gmat.ts` |
| `be97832` | 2026-08-26 | refactor(gmat): move gmat data, types, and engine into lib/gmat/ | `components/gmat/*`, `lib/gmat/*`, `lib/firebaseDB.ts` |
| `7625365` | 2026-08-26 | fix(gmat): reconcile budget arithmetic and clarify statement 3 in gmat-msr-0003 | `lib/gmat-data.ts` |
| `0e22cab` | 2026-08-26 | fix(gmat): correct answer index for gmat-ds-0039 | `lib/gmat-data.ts` |
| `e3514d8` | 2026-08-26 | fix(gmat): resolve contradictory statements in gmat-ds-0004 | `lib/gmat-data.ts` |
| `63680ba` | 2026-08-26 | build: ignore and untrack tsconfig.tsbuildinfo | `.gitignore`, `tsconfig.tsbuildinfo` |
| `4a6ed79` | 2026-08-22 | Disable spellcheck, autocorrect, and grammar extensions in IELTS test inputs | `app/ielts/*`, `components/ielts/*` |
| `ba6b8e0` | 2026-08-19 | fix(seo): allow Next.js static assets and images in robots.txt | `public/robots.txt` |
| `2175a97` | 2026-08-16 | fix(duas,quiz): fix mobile image download and WhatsApp picture sharing in frame cards | `components/duas/DuaShareModal.tsx`, `components/quiz/*` |
| `a2a1639` | 2026-08-16 | feat(duas): polish UI with Hadith grading badges, unreviewed translation notices, audio scoping, and text spacing | `app/duas/page.tsx`, `components/duas/DuaCard.tsx` |
| `393824d` | 2026-08-16 | feat(duas): merge 24 new duas and update rabbana category title | `lib/duasData.ts` |
| `515a1bb` | 2026-08-16 | feat(duas): populate hadith grading and sourceRefs for existing 14 duas | `lib/duasData.ts`, `scripts/validate-duas.ts` |
| `6991862` | 2026-08-16 | feat(duas): extend DuaItem schema with HadithGrading, SourceRef, and translationStatus | `lib/duasData.ts`, `scripts/validate-duas.ts` |
| `7b1ac12` | 2026-08-16 | fix(duas): fix defects in evening icon, Spanish waking-up, Indonesian rabbana-4, and add validation script | `lib/duasData.ts`, `scripts/validate-duas.ts` |
| `006883d` | 2026-08-16 | fix: Adjust Dua frame canvas vertical spacing to prevent heading and Arabic text overlap | `components/duas/DuaShareModal.tsx` |
| `2ca2cb6` | 2026-08-16 | feat: Upgrade IELTS Reading UI engine to CD-IELTS standards and consolidate all IELTS data files into lib/ielts/ | `app/ielts/*`, `components/ielts/*`, `lib/ielts/*` |
| `57fe855` | 2026-08-11 | Merge and deduplicate Islamic Quiz questions bank into islamicQuizQuestions.ts and optimize IslamicQuizGame.tsx | `app/quiz/islamic-quiz/*`, `lib/islamicQuizQuestions.ts` |
| `f979f07` | 2026-08-11 | fix: Add stable question IDs, shuffle option answer positions, and fix Hindi text in quiz bank | `lib/islamicQuizQuestions.ts` |
| `64c725c` | 2026-08-11 | fix: Strip answer hints from options & clean authentic Islamic question bank | `lib/islamicQuizQuestions.ts` |
| `6879897` | 2026-08-11 | feat: Add 530+ unique Islamic quiz questions, single-file consolidation, Dua card frames & audio fix | `app/api/bank-reconciliation/route.ts`, `lib/duasData.ts` |

### 8.2 Uncommitted Changes
The working tree on branch `main` is completely clean:
```
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

---

## 9. PROBLEMS AND RISKS

### 9.1 Build & Lint Verification Results
- **Production Build (`npm run build`):**
  - **Status:** **PASS** (Exit code `0`).
  - **Output:** Generated **528 static pages** without compile errors or fatal warnings.
  - **Build Warnings:**
    - `Browserslist: browsers data (caniuse-lite) is 6 months old. Please run: npx update-browserslist-db@latest`
    - `⚠ Using edge runtime on a page currently disables static generation for that page` (emitted for Edge API routes `/api/writing` and `/api/speaking`).
- **Linter (`npm run lint`):**
  - **Status:** **FAIL / UNCONFIGURED** (Exit code `1`).
  - **Root Cause:** Next.js lint dependencies (`eslint`, `eslint-config-next`) are installed in `package.json`, but no ESLint configuration file (`.eslintrc.json` or `eslint.config.js`) exists in the project root. When executed non-interactively, `next lint` prompts `? How would you like to configure ESLint?` and terminates with code 1. Adding a standard `.eslintrc.json` with `{"extends": "next/core-web-vitals"}` is required to enable automated linting.

### 9.2 Technical Debt, Fragile Points & Redundancies
1. **Large Binary Files in Project Root:**
   - Three large PDF mushaf files are checked directly into the root folder:
     - `13 line quran with beautiful color coded tajweed rules pdf.pdf` (84.3 MB)
     - `15LineStandardQuranPDF for Mohammad Malikzai_240313_052919 1.pdf` (49.0 MB)
     - `Quran (Tajweed) - Noorehira (1).pdf` (17.5 MB)
   - These files duplicate assets already located in `public/quran-pdfs/` and hosted on Cloudflare R2, bloating git clone times and disk footprint.
   - Root scratch files `project_structure.txt` (3.4 MB) and `Here are 5 unique, full-length Acad.txt` (30 KB) should also be cleaned up.
2. **Very Large TypeScript Data Bundles:**
   - Several TypeScript files act as static databases and are extremely large:
     - `lib/ielts/readingData.ts` (778 KB, 4,433 lines)
     - `lib/ielts/listeningData.ts` (512 KB, 4,121 lines)
     - `lib/gmat/verbal.ts` (286 KB)
     - `lib/gmat/quant.ts` (168 KB)
     - `lib/islamicQuizQuestions.ts` (165 KB, 5,850 lines)
     - `lib/duasData.ts` (137 KB, 1,686 lines)
     - `lib/gmat/data-insights.ts` (142 KB)
   - Although Next.js compiles these during SSG, importing them into client components can inflate client bundle chunks unless guarded by code splitting (as recently implemented in commit `1392044` for GMAT section banks).
3. **Dead / Duplicate Components:**
   - `components/AuthContext.tsx` (82 lines): A dead mock file containing dummy `console.log` auth methods and `// TODO: connect Firebase`. The actual active auth context is `contexts/AuthContext.tsx`.
   - `app/quran/QuranPage.tsx` (5.6 KB): An orphaned duplicate of `app/quran/read/QuranPage.tsx`.
   - `app/quran/pdf-reader/page.tsx`: An unstyled duplicate route of `app/quran/pdf/15line/page.tsx` lacking metadata.
4. **Internal Link Inconsistency:**
   - `app/quran/QuranPage.tsx` and `app/quran/read/QuranPage.tsx` link to `/quran/pdf-reader` instead of the canonical, metadata-rich `/quran/pdf/15line`.
5. **Cloudflare R2 CORS Sensitivity:**
   - In-browser PDF rendering via `react-pdf` fetches files directly from `pub-8abd18b123d249afbfea45177c4d7d94.r2.dev`. If CORS headers on the R2 bucket do not permit cross-origin access from custom domains, PDF rendering will fail in client browsers.
6. **Automated Test Coverage:**
   - Aside from data integrity validation scripts (`scripts/validate-gmat.ts` and `scripts/validate-duas.ts`), there is no automated unit test runner (Jest/Vitest) or CI test suite for component behavior.

---

## 10. QUICK FACTS FOR NEW FEATURES

### 10.1 Placement Conventions for New Code
- **Where a New Page Should Go:**
  - Create a directory under `app/[feature-name]/page.tsx`.
  - Maintain the **Server/Client Component Split**:
    - `page.tsx` MUST be a Server Component (no `"use client"`). It must export `metadata: Metadata` (with title, description, and canonical URL) and render the client component.
    - Interactive logic belongs in a sibling client component (e.g. `[Feature]Client.tsx` or `[Feature]Page.tsx`) marked with `"use client"`.
    - Dynamic route pages: `app/[feature-name]/[id]/page.tsx` must export `generateStaticParams()` for pre-rendering and `generateMetadata({ params })` for dynamic SEO tags.
  - Register the new path in `app/sitemap.ts` under `staticRoutes` or data-driven URLs.
- **Where a New Data File Should Go:**
  - Place static TypeScript banks in `lib/[feature-name]/` (e.g., `lib/gmat/` or `lib/ielts/`).
  - Declare data interfaces in a dedicated `types.ts` file within that folder (e.g., `lib/[feature-name]/types.ts`).
  - If the content is generic seed data (like courses or notes), place JSON files in `data/[feature].json` and expose accessor functions through `lib/data.ts`.
- **Arabic Text Requirements:**
  - Always apply `dir="rtl"` and `style={{ direction: "rtl", fontFamily: "var(--font-arabic), 'Amiri', serif", lineHeight: "2.2" }}`.
  - Never render Arabic text with default system fonts.

### 10.2 Existing Reusable Quiz & Multiple-Choice Components
When building new games or interactive quizzes, choose from these established components:

1. **`app/quiz/[id]/QuizEngine.tsx` (Recommended for Standard MCQs):**
   - Clean, lightweight, and fully functional multiple-choice engine.
   - **Interface:** Accepts `questions: QuizQuestion[]` where `QuizQuestion = { id: string; question: string; options: string[]; correct: number; explanation: string }`.
   - **Features:** Linear progress bar, lettered option buttons (A, B, C, D), immediate color-coded correctness feedback (green/red), explanation box upon selection, score tally with celebratory emojis, and a "Try Again" reset button.
2. **`app/quiz/islamic-quiz/IslamicQuizGame.tsx` (Recommended for Timed / Gamified Modes):**
   - Rich game engine featuring configurable countdown timers per difficulty (8s–25s), speed bonus scoring, streak multipliers, sound effects, Fisher-Yates option shuffling, and Firestore leaderboard integration.
3. **`app/games/quiz-battle/QuizBattleGame.tsx` (Recommended for Survival / Trivia Games):**
   - Arcade-style quiz runner with a 3-lives mechanic, streak bonuses, and instant restarts.
4. **`components/gmat/QuestionRenderer.tsx` (Recommended for Advanced Question Formats):**
   - Component capable of rendering 7 distinct question formats including 5-option MCQs, Data Sufficiency statements, sortable tables, and two-column selection matrices.
5. **`components/ShareScore.tsx` & `components/quiz/QuizResultShareModal.tsx`:**
   - Plug-and-play canvas graphic generators that convert quiz and game scores into downloadable image cards with one-click sharing to WhatsApp and Twitter/X.
