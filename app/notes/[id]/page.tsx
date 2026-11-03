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
    <div className="efe-page min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <span className="text-xs font-semibold text-efe-accent uppercase tracking-wide">{note.subject}</span>
          <h1 className="text-4xl font-bold text-efe-fg font-display mt-2 mb-3">{note.title}</h1>
          <p className="text-efe-muted">{note.readTime} read</p>
        </div>
        <div className="efe-card shadow-sm p-8">
          <div className="prose max-w-none text-efe-fg leading-relaxed whitespace-pre-wrap">
            {note.content}
          </div>
        </div>
      </div>
    </div>
  );
}
