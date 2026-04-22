import { getAllNotes, getAllSubjects } from '@/lib/data';
import Card from '@/components/Card';

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Study Notes</h1>
        <p className="text-lg text-gray-500">Concise, well-structured notes to support your learning.</p>
      </div>
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
  );
}
