"use client";
// components/AdminNotesSection.tsx
// Reads admin-uploaded notes from Firebase and displays them
// Import this into app/notes/page.tsx

import { useAdminCollection } from "@/lib/useAdminCollection";
import Link from "next/link";

interface AdminNote {
  id:      string;
  title:   string;
  subject: string;
  content: string;
  tags:    string[];
}

function transformNotes(raw: Record<string, unknown>[]): AdminNote[] {
  return raw
    .filter(r => (r.type === "note" || !r.type) && (r.note_id || r.id))
    .map(r => ({
      id:      String(r.note_id || r.id || ""),
      title:   String(r.title || ""),
      subject: String(r.subject || "General"),
      content: String(r.content || ""),
      tags:    Array.isArray(r.tags)
        ? r.tags.map(String)
        : String(r.tags || "").split(",").map(s => s.trim()).filter(Boolean),
    }))
    .filter(n => n.id && n.title);
}

const SUBJECT_COLORS: Record<string, string> = {
  Mathematics: "border-teal-200 bg-teal-50",
  Science:     "border-green-200 bg-green-50",
  English:     "border-purple-200 bg-purple-50",
  History:     "border-red-200 bg-red-50",
  General:     "border-gray-200 bg-gray-50",
};

const SUBJECT_ICONS: Record<string, string> = {
  Mathematics: "🧮", Science: "🔬", English: "✏️",
  History: "📜", General: "📄",
};

export default function AdminNotesSection() {
  const { data: notes, loading, fromFirebase } = useAdminCollection(
    "admin_notes",
    transformNotes,
    []
  );

  if (!loading && !fromFirebase) return null;

  if (loading) return (
    <div className="mb-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1,2,3].map(i => (
          <div key={i} className="border border-gray-200 rounded-2xl p-5 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-3" />
            <div className="h-3 bg-gray-100 rounded w-full mb-2" />
            <div className="h-3 bg-gray-100 rounded w-4/5" />
          </div>
        ))}
      </div>
    </div>
  );

  if (notes.length === 0) return null;

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">📥 Recently Added Notes</h2>
        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
          {notes.length} from admin
        </span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <Link key={note.id} href={`/notes/${note.id}`}
            className={`group border rounded-2xl p-5 hover:shadow-md transition-all ${SUBJECT_COLORS[note.subject] || SUBJECT_COLORS.General}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{SUBJECT_ICONS[note.subject] || "📄"}</span>
              <span className="text-xs font-semibold text-gray-600">{note.subject}</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-teal-600 transition-colors">
              {note.title}
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3">
              {note.content.slice(0, 120)}…
            </p>
            {note.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {note.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs bg-white/70 text-gray-500 px-2 py-0.5 rounded-full border border-white">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
