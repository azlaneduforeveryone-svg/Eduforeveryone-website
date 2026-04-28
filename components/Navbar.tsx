"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/notes", label: "Notes" },
  { href: "/quiz", label: "Quiz" },
  { href: "/games", label: "Games" },
  { href: "/tools", label: "Tools" },
];

const islamicLinks = [
  { href: "/quran", label: "📖 Quran", desc: "Read with 40+ translations" },
  { href: "/quiz/islamic-quiz", label: "🧠 Islamic Quiz", desc: "English, Urdu & Hindi" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [islamicOpen, setIslamicOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Main_Logo.jpg" alt="EduForEveryone" width={36} height={36} className="rounded-lg" />
            <span className="font-bold text-gray-900 text-lg">EduForEveryone</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all">
                {l.label}
              </Link>
            ))}

            {/* Islamic Studies Dropdown */}
            <div className="relative" onMouseEnter={() => setIslamicOpen(true)} onMouseLeave={() => setIslamicOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all">
                ☪ Islamic Studies
                <svg className={`w-4 h-4 transition-transform ${islamicOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {islamicOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-2xl shadow-lg py-2 z-50">
                  {islamicLinks.map(l => (
                    <Link key={l.href} href={l.href}
                      className="flex flex-col px-4 py-3 hover:bg-teal-50 transition-colors">
                      <span className="text-sm font-semibold text-gray-900">{l.label}</span>
                      <span className="text-xs text-gray-500">{l.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all">About</Link>
            <Link href="/contact" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(v => !v)} className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100 space-y-1">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
                {l.label}
              </Link>
            ))}
            {/* Islamic Studies mobile */}
            <div className="px-4 py-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">☪ Islamic Studies</p>
              {islamicLinks.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all">
                  {l.label}
                </Link>
              ))}
            </div>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}