"use client";
// components/AdminNotesSection.tsx
// Reads admin-uploaded notes from Firebase and displays them
// Import this into app/notes/page.tsx

import { useAdminCollection } from "@/lib/useAdminCollection";
import Card from "@/components/ui/Card";

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
          <div key={i} className="efe-card p-5 animate-pulse">
            <div className="h-4 bg-efe-line rounded w-2/3 mb-3" />
            <div className="h-3 bg-efe-bg rounded w-full mb-2" />
            <div className="h-3 bg-efe-bg rounded w-4/5" />
          </div>
        ))}
      </div>
    </div>
  );

  if (notes.length === 0) return null;

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-efe-fg">📥 Recently Added Notes</h2>
        <span className="text-xs text-efe-muted bg-efe-surface border border-efe-line px-3 py-1 rounded-full">
          {notes.length} from admin
        </span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <Card key={note.id} href={`/notes/${note.id}`} className="p-5 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{SUBJECT_ICONS[note.subject] || "📄"}</span>
                <span className="text-xs font-semibold text-efe-accent-ink uppercase tracking-wider">{note.subject}</span>
              </div>
              <h3 className="font-bold text-efe-fg text-sm mb-2 group-hover:text-efe-accent transition-colors">
                {note.title}
              </h3>
              <p className="text-efe-muted text-xs leading-relaxed mb-3 line-clamp-3">
                {note.content.slice(0, 120)}…
              </p>
            </div>
            {note.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {note.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs bg-efe-bg text-efe-muted px-2 py-0.5 rounded-full border border-efe-line">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
