import { useEffect, useState, type FormEvent } from 'react'
import HeroLogo from './HeroLogo'
import {
  ArrowRight, BookOpen, Palette, BookMarked, Book, HandHeart, CircleHelp, Languages,
  Headphones, BookText, PenLine, Mic, Timer, Sparkles, MessageSquareQuote, TrendingUp, Compass,
  Sigma, Quote, ChartLine, Puzzle, Divide, Swords, Landmark, Users, Handshake, Network,
  Calculator, Banknote, Hash, Search, GraduationCap, Gamepad2, type LucideIcon,
} from 'lucide-react'

const SITE = 'https://eduforeveryone.com'

type Tile = { name: string; href: string; icon: LucideIcon; isNew?: boolean }
type Section = {
  id: string
  title: string
  chip: string
  chipIcon: LucideIcon
  description: string
  hub: string
  arabic?: string
  badge?: string
  tiles: Tile[]
}

const SECTIONS: Section[] = [
  {
    id: 'islamic',
    title: 'Islamic Studies',
    chip: 'Islamic Studies',
    chipIcon: BookOpen,
    description: 'Read the Quran with 40+ translations, learn Tajweed, and keep your daily duas close.',
    hub: '/islamic-studies',
    arabic: 'اقْرَأْ',
    badge: 'Always ad-free',
    tiles: [
      { name: 'Quran Reader', href: '/quran/read', icon: BookOpen },
      { name: 'Tajweed Quran', href: '/quran/tajweed', icon: Palette },
      { name: 'Mushaf 15-Line', href: '/quran/pdf/15line', icon: BookMarked },
      { name: 'Mushaf 13-Line', href: '/quran/pdf/13line', icon: Book },
      { name: 'Duas & Tasbeeh', href: '/duas', icon: HandHeart },
      { name: 'Islamic Quiz', href: '/quiz/islamic-quiz', icon: CircleHelp },
      { name: 'Quran Word Meanings', href: '/islamic-studies/quran-words', icon: Languages, isNew: true },
    ],
  },
  {
    id: 'ielts',
    title: 'IELTS Preparation',
    chip: 'IELTS',
    chipIcon: GraduationCap,
    description: 'Practise all four skills, sit a full timed mock, and get instant AI feedback on Writing and Speaking.',
    hub: '/ielts',
    tiles: [
      { name: 'Listening', href: '/ielts/listening', icon: Headphones },
      { name: 'Reading', href: '/ielts/reading', icon: BookText },
      { name: 'Writing', href: '/ielts/writing', icon: PenLine },
      { name: 'Speaking', href: '/ielts/speaking', icon: Mic },
      { name: 'Full Mock Test', href: '/ielts/full-test', icon: Timer },
      { name: 'Word Upgrade', href: '/ielts/word-upgrade', icon: Sparkles, isNew: true },
      { name: 'Phrase Upgrade', href: '/ielts/phrase-upgrade', icon: MessageSquareQuote, isNew: true },
      { name: 'My Progress', href: '/ielts/progress', icon: TrendingUp },
      { name: 'IELTS Guide', href: '/ielts/guide', icon: Compass },
    ],
  },
  {
    id: 'gmat',
    title: 'GMAT Focus Edition',
    chip: 'GMAT',
    chipIcon: Sigma,
    description: 'Section practice from a 500+ question bank and a full 64-question timed simulation.',
    hub: '/gmat',
    tiles: [
      { name: 'Quant', href: '/gmat/quant', icon: Sigma },
      { name: 'Verbal', href: '/gmat/verbal', icon: Quote },
      { name: 'Data Insights', href: '/gmat/data-insights', icon: ChartLine },
      { name: 'Full Mock Test', href: '/gmat/full-test', icon: Timer },
    ],
  },
  {
    id: 'games',
    title: 'Learning Games',
    chip: 'Games',
    chipIcon: Gamepad2,
    description: 'Short games that sharpen vocabulary, mental maths and general knowledge.',
    hub: '/games',
    tiles: [
      { name: 'Word Puzzle', href: '/games/word-puzzle', icon: Puzzle },
      { name: 'Math Puzzle', href: '/games/math-puzzle', icon: Divide },
      { name: 'Quiz Battle', href: '/games/quiz-battle', icon: Swords },
    ],
  },
  {
    id: 'finance',
    title: 'Finance & Accounting Tools',
    chip: 'Finance Tools',
    chipIcon: Calculator,
    description: 'Reconcile statements in minutes and run the calculators accountants and CFA candidates use.',
    hub: '/tools',
    tiles: [
      { name: 'Bank Reconciliation', href: '/tools/finance-tools/reconciliation/bank', icon: Landmark },
      { name: 'Supplier Reconciliation', href: '/tools/finance-tools/reconciliation/supplier', icon: Handshake },
      { name: 'Customer Reconciliation', href: '/tools/finance-tools/reconciliation/customer', icon: Users },
      { name: 'Intercompany Reconciliation', href: '/tools/finance-tools/reconciliation/intercompany', icon: Network },
      { name: 'CFA Calculator', href: '/tools/cfa-calculator', icon: Banknote },
      { name: 'Number to Words', href: '/tools/number-to-words', icon: Hash },
      { name: 'Scientific Calculator', href: '/tools/scientific-calculator', icon: Sigma },
      { name: 'Simple Calculator', href: '/tools/simple-calculator', icon: Calculator },
    ],
  },
]

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return active
}

const IDS = SECTIONS.map((s) => s.id)

export default function App() {
  const active = useActiveSection(IDS)
  const [query, setQuery] = useState('')
  const onSearch = (e: FormEvent) => e.preventDefault()

  return (
    <>
      <header className="topbar gutter">
        <div className="wrap topbar-inner">
          <a className="brand" href={SITE}>
            <span className="brand-mark">E</span>
            EduForEveryone
          </a>
          <nav className="toplinks" aria-label="Main">
            <a href={`${SITE}/ielts`}>IELTS</a>
            <a href={`${SITE}/quran`}>Quran</a>
            <a href={`${SITE}/gmat`}>GMAT</a>
            <a href={`${SITE}/about`}>About</a>
          </nav>
        </div>
      </header>

      <section className="hero gutter">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="wrap hero-split">
        <div className="hero-inner">
          <div className="hero-eyebrow rise d1">EduForEveryone</div>
          <h1 className="rise d2">Learn something useful today.</h1>
          <p className="rise d3">IELTS, Islamic Studies, GMAT and finance tools in one place.</p>
          <form className="hero-search rise d4" onSubmit={onSearch} role="search">
            <Search size={18} aria-hidden="true" />
            <input
              id="home-search"
              type="search"
              placeholder="Search surahs, IELTS topics, tools…"
              aria-label="Search the site"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          <div className="hero-stats rise d5">
            <span><b>114</b> surahs</span>
            <span><b>110</b> reading passages</span>
            <span><b>38</b> authentic duas</span>
            <span><b>500+</b> GMAT questions</span>
          </div>
        </div>
        <div className="rise d3"><HeroLogo /></div>
        </div>
      </section>

      <nav className="switcher gutter" aria-label="Sections">
        <div className="wrap switcher-row">
          {SECTIONS.map((s) => {
            const Icon = s.chipIcon
            return (
              <a key={s.id} className="chip" href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined}>
                <Icon size={15} aria-hidden="true" />
                {s.chip}
              </a>
            )
          })}
        </div>
      </nav>

      <main className="gutter">
        <div className="wrap">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="section" aria-labelledby={`${s.id}-title`}>
              <div className="section-grid">
                <div className="section-head reveal">
                  <div className="section-eyebrow">
                    {s.arabic && <span className="arabic-mark" lang="ar" dir="rtl">{s.arabic}</span>}
                    <span>{s.tiles.length} tools</span>
                  </div>
                  <h2 id={`${s.id}-title`}>{s.title}</h2>
                  <p>{s.description}</p>
                  {s.badge && <span className="badge-free">{s.badge}</span>}
                  <a className="view-all" href={`${SITE}${s.hub}`}>
                    View all <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
                <div className="tiles">
                  {s.tiles.map((t) => {
                    const Icon = t.icon
                    return (
                      <a key={t.href} className="tile reveal" href={`${SITE}${t.href}`}>
                        {t.isNew && <span className="tile-new">New</span>}
                        <span className="tile-icon"><Icon size={22} strokeWidth={1.9} aria-hidden="true" /></span>
                        <span className="tile-name">{t.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="gutter">
        <div className="wrap footer">
          <span>© 2026 EduForEveryone · Free education for all</span>
          <span>
            <a href={`${SITE}/about`}>About & FAQ</a> · <a href={`${SITE}/contact`}>Contact</a> · <a href={`${SITE}/privacy-policy`}>Privacy</a>
          </span>
        </div>
      </footer>
    </>
  )
}
