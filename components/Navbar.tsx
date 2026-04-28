"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const islamicLinks = [
  { href: "/quran",             label: "📖 Quran",        desc: "Read with 40+ translations & audio" },
  { href: "/quiz/islamic-quiz", label: "🧠 Islamic Quiz",  desc: "English, Urdu & Hindi · 7 categories" },
];

const mainLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/notes",   label: "Notes"   },
  { href: "/quiz",    label: "Quiz"    },
  { href: "/games",   label: "Games"   },
  { href: "/tools",   label: "Tools"   },
];

export default function Navbar() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [islamicOpen, setIslamicOpen] = useState(false);
  const [aboutOpen,   setAboutOpen]   = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/Main_Logo.jpg" alt="EduForEveryone" width={36} height={36} className="rounded-lg" />
            <span className="font-bold text-gray-900 text-lg hidden sm:block">EduForEveryone</span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-0.5">

            {/* Home */}
            <Link href="/"
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all">
              Home
            </Link>

            {/* Islamic Studies dropdown */}
            <div className="relative"
              onMouseEnter={() => setIslamicOpen(true)}
              onMouseLeave={() => setIslamicOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all">
                ☪ Islamic Studies
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${islamicOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {islamicOpen && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-white border border-gray-200 rounded-2xl shadow-lg py-2 z-50">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 pt-1 pb-2">Islamic Studies</p>
                  {islamicLinks.map(l => (
                    <Link key={l.href} href={l.href}
                      className="flex flex-col px-4 py-2.5 hover:bg-teal-50 transition-colors">
                      <span className="text-sm font-semibold text-gray-900">{l.label}</span>
                      <span className="text-xs text-gray-500">{l.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Main links */}
            {mainLinks.map(l => (
              <Link key={l.href} href={l.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all">
                {l.label}
              </Link>
            ))}

            {/* About + Contact dropdown */}
            <div className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all">
                About
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutOpen && (
                <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg py-2 z-50">
                  <Link href="/about"
                    className="flex flex-col px-4 py-2.5 hover:bg-teal-50 transition-colors">
                    <span className="text-sm font-semibold text-gray-900">👋 About Us</span>
                    <span className="text-xs text-gray-500">Our mission & vision</span>
                  </Link>
                  <Link href="/contact"
                    className="flex flex-col px-4 py-2.5 hover:bg-teal-50 transition-colors">
                    <span className="text-sm font-semibold text-gray-900">✉️ Contact</span>
                    <span className="text-xs text-gray-500">Get in touch with us</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* ── Mobile menu button ── */}
          <button onClick={() => setMenuOpen(v => !v)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100 space-y-0.5 pb-4">

            <Link href="/" onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
              🏠 Home
            </Link>

            {/* Islamic Studies — mobile */}
            <div className="px-4 py-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">☪ Islamic Studies</p>
              <div className="space-y-0.5 pl-1">
                {islamicLinks.map(l => (
                  <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Main links — mobile */}
            {mainLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
                {l.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="border-t border-gray-100 my-2 mx-4" />

            {/* About + Contact — mobile */}
            <Link href="/about" onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
              👋 About Us
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
              ✉️ Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}