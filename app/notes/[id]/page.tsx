import type { Metadata } from 'next';
import { getNoteById, getAllNotes } from '@/lib/data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllNotes().map((n) => ({ id: n.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const note = getNoteById(params.id);
  if (!note) {
    return {
      title: 'Study Note Not Found | EduForEveryone',
    };
  }
  return {
    title: `${note.title} — Study Notes | EduForEveryone`,
    description: `${note.title} study notes for ${note.subject}. Read time: ${note.readTime}. Free revision notes on EduForEveryone.`,
    alternates: {
      canonical: `https://eduforeveryone.com/notes/${params.id}`,
    },
    openGraph: {
      title: `${note.title} — Study Notes | EduForEveryone`,
      description: `${note.title} study notes for ${note.subject}. Free revision notes on EduForEveryone.`,
      url: `https://eduforeveryone.com/notes/${params.id}`,
      siteName: 'EduForEveryone',
      type: 'article',
    },
  };
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
