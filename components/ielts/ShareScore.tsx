"use client";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const SITE = "https://eduforeveryone.com/ielts";

export default function ShareScore({
  skill,
  band,
}: { skill: string; band: number }) {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);

  const who = user?.displayName || name.trim();
  const lead = who ? `${who} scored` : "I scored";
  const text = `${lead} Band ${band} on IELTS ${skill} at EduForEveryone — free IELTS practice with instant scoring. Try it: ${SITE}`;

  const share = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "My IELTS score", text, url: SITE });
        return;
      } catch { /* user cancelled — fall through to copy */ }
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* clipboard blocked — no-op */ }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 mt-4">
      <p className="font-bold text-gray-900 text-sm mb-2">📣 Share your result</p>
      {!user && (
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      )}
      <button
        onClick={share}
        className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all"
      >
        {copied ? "✓ Copied to clipboard!" : "Share my Band " + band}
      </button>
      <p className="text-xs text-gray-400 mt-2 text-center">
        Shares your score and a link — friends get a fresh test.
      </p>
    </div>
  );
}
