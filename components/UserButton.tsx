"use client";
// components/UserButton.tsx
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "./AuthModal";

export default function UserButton() {
  const { user, logout } = useAuth();
  const [showAuth,    setShowAuth]    = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  if (!user) return (
    <>
      <button onClick={() => setShowAuth(true)}
        className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-teal-700 transition-all"
        style={{ boxShadow: "0 3px 0 #0F6E56" }}>
        Sign In
      </button>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );

  return (
    <div className="relative">
      <button onClick={() => setShowDropdown(v => !v)}
        className="flex items-center gap-2 hover:bg-gray-100 rounded-xl px-2 py-1.5 transition-all">
        {user.photoURL
          ? <img src={user.photoURL} alt="" className="w-8 h-8 rounded-full" />
          : <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm font-black">
              {(user.displayName || user.email || "U")[0].toUpperCase()}
            </div>}
        <span className="text-sm font-semibold text-gray-700 max-w-24 truncate hidden sm:block">
          {user.displayName?.split(" ")[0] || "Profile"}
        </span>
        <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showDropdown && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setShowDropdown(false)} />
          <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-200 rounded-2xl shadow-xl z-40 overflow-hidden">
            <div className="px-4 py-3 bg-teal-50 border-b border-gray-100">
              <p className="text-sm font-bold text-gray-900 truncate">{user.displayName || "User"}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
            <div className="py-1.5">
              <Link href="/profile" onClick={() => setShowDropdown(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 font-medium">
                👤 My Profile
              </Link>
              <Link href="/leaderboard" onClick={() => setShowDropdown(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 font-medium">
                🏆 Leaderboard
              </Link>
              <Link href="/quiz/islamic-quiz" onClick={() => setShowDropdown(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 font-medium">
                ☪️ Islamic Quiz
              </Link>
              <div className="border-t border-gray-100 mt-1 pt-1">
                <button onClick={() => { logout(); setShowDropdown(false); }}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 font-medium">
                  🚪 Sign Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}