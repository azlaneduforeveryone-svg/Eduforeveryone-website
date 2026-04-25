# EduForEveryone

> Free, high-quality education for every student. No fees. No barriers.

Live at: [eduforeveryone.com](https://eduforeveryone.com)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Data | Local JSON (swap-ready for Firebase/Supabase) |
| Deployment | Vercel |

---

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/your-username/eduforeveryone.git
cd eduforeveryone
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
/app
  layout.tsx          # Root layout with Navbar + Footer
  page.tsx            # Home page
  not-found.tsx       # 404 page
  /courses
    page.tsx          # Course listing with subject filter
    CoursesFilter.tsx # Client filter tabs
    /[id]
      page.tsx        # Course detail + lesson sidebar
      LessonViewer.tsx # Video + text lesson renderer
  /notes
    page.tsx          # Notes listing grouped by subject
    /[id]
      page.tsx        # Note detail with article renderer
  /quiz
    page.tsx          # Quiz listing
    /[id]
      page.tsx        # Quiz detail wrapper
      QuizEngine.tsx  # Interactive quiz with scoring

/components
  Navbar.tsx          # Sticky responsive navbar
  Footer.tsx          # Site footer
  Card.tsx            # Reusable content card

/data
  courses.json        # Course and lesson data
  notes.json          # Study notes data
  quizzes.json        # Quiz questions and answers

/lib
  data.ts             # Data access layer (swap here for Firebase/Supabase)

/types
  index.ts            # All TypeScript types
```

---

## Deployment to Vercel

### Option A: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option B: GitHub Integration (recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Click **Deploy** — no config needed

### Connect Custom Domain

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add `eduforeveryone.com` and `www.eduforeveryone.com`
3. Update your domain registrar's DNS:
   - **A record**: `@` → `76.76.19.61`
   - **CNAME**: `www` → `cname.vercel-dns.com`

---

## Adding New Content

### Add a new course

Edit `/data/courses.json` and add a new object following this schema:

```json
{
  "id": "unique-course-id",
  "title": "Course Title",
  "subject": "Mathematics",
  "description": "Course description here.",
  "thumbnail": "🧮",
  "level": "Beginner",
  "lessonCount": 3,
  "featured": false,
  "lessons": [
    {
      "id": "unique-lesson-id",
      "title": "Lesson Title",
      "duration": "10 min",
      "type": "video",
      "youtubeId": "YOUTUBE_VIDEO_ID"
    }
  ]
}
```

### Add a new quiz

Edit `/data/quizzes.json` and add a new quiz object following the existing pattern.

---

## Migrating to Firebase or Supabase

All data fetching is centralized in `/lib/data.ts`. To switch:

1. Install your database SDK (`firebase` or `@supabase/supabase-js`)
2. Add credentials to `.env.local` (see `.env.example`)
3. Replace the implementations in `lib/data.ts` only
4. All pages and components remain unchanged

---

## License

## License
© 2025 EduForEveryone. All rights reserved.
This website and its content are protected by copyright law.
No part of this website may be copied, modified, distributed,
or used for commercial purposes without written permission
from the owner.
