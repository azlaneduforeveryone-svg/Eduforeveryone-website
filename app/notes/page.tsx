import type { Metadata } from "next";
import AdminNotesSection from "@/components/AdminNotesSection";
import { getAllNotes } from '@/lib/data';
import Card from '@/components/Card';
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Study Notes — Free | EduForEveryone",
  description: "Concise, well-structured study notes for Mathematics, Science, English and History.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <div className="efe-page">
      <PageHeader
        title="Study Notes"
        description="Concise, well-structured notes to support your learning."
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Admin-uploaded notes from Firebase */}
        <AdminNotesSection />

        {/* Local notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <Card
              key={note.id}
              href={`/notes/${note.id}`}
              emoji="📝"
              title={note.title}
              subject={note.subject}
              description={note.summary}
              meta={note.readTime + ' read'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
