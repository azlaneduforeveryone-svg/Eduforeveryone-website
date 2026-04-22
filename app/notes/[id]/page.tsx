import { getNoteById, getAllNotes } from '@/lib/data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllNotes().map((n) => ({ id: n.id }));
}

export default function NoteDetailPage({ params }: { params: { id: string } }) {
  const note = getNoteById(params.id);
  if (!note) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{note.subject}</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">{note.title}</h1>
        <p className="text-gray-500">{note.readTime} read</p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
          {note.content}
        </div>
      </div>
    </div>
  );
}
