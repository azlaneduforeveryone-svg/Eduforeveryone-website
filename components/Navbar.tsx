"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import UserButton from "./UserButton";

const NAV_LINKS = [
  { href: "/islamic-studies", label: "☪ Islamic Studies" },
  { href: "/courses",         label: "Courses"           },
  { href: "/ielts",           label: "IELTS"             },
  { href: "/notes",           label: "Notes"             },
  { href: "/quiz",            label: "Quiz"              },
  { href: "/games",           label: "Games"             },
  { href: "/tools",           label: "Tools"             },
];

const ABOUT_LINKS = [
  { href: "/about",          label: "About Us"      },
  { href: "/contact",        label: "Contact"       },
  { href: "/privacy-policy", label: "Privacy Policy"},
];

export default function Navbar() {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-black text-gray-900 text-lg">
            <Image 
              src="/Main_Logo.jpg" 
              alt="EduForEveryone Logo" 
              width={32} 
              height={32}
              className="rounded-lg"
            />
            <span className="hidden sm:block">EduForEveryone</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all">
                {l.label}
              </Link>
            ))}

            {/* About dropdown */}
            <div className="relative">
              <button onClick={() => setAboutOpen(v => !v)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all">
                About
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setAboutOpen(false)} />
                  <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-gray-100 rounded-xl shadow-lg z-40 py-1.5 overflow-hidden">
                    {ABOUT_LINKS.map(l => (
                      <Link key={l.href} href={l.href} onClick={() => setAboutOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 font-medium">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Right side — UserButton + mobile menu */}
          <div className="flex items-center gap-3">
            <UserButton />
            <button onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all">
              {menuOpen
                ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 space-y-1">
            {NAV_LINKS.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-all">
                {l.label}
              </Link>
            ))}
            {ABOUT_LINKS.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-all">
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
