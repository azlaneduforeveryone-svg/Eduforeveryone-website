'use client';
import { useState } from 'react';
import { Lesson } from '@/types';

export default function LessonViewer({ lessons }: { lessons: Lesson[] }) {
  const [active, setActive] = useState(0);
  const lesson = lessons[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Lesson content */}
      <div className="lg:col-span-2">
        <div className="efe-card shadow-sm overflow-hidden">
          <div className="p-6 border-b border-efe-line">
            <h2 className="text-xl font-bold text-efe-fg font-display">{lesson.title}</h2>
            <p className="text-sm text-efe-muted mt-1">{lesson.duration} · {lesson.type}</p>
          </div>
          <div className="p-6">
            {lesson.type === 'video' && lesson.youtubeId ? (
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${lesson.youtubeId}`}
                  title={lesson.title}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            ) : (
              <div className="prose max-w-none text-efe-fg leading-relaxed whitespace-pre-wrap">
                {lesson.content}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div>
        <h3 className="font-bold text-efe-fg font-display mb-4">Lessons</h3>
        <div className="space-y-2">
          {lessons.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setActive(i)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                i === active
                  ? 'bg-efe-accent-soft border-efe-accent text-efe-accent-ink'
                  : 'bg-efe-surface border-efe-line text-efe-muted hover:border-efe-accent hover:bg-efe-accent-soft/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{l.type === 'video' ? '▶' : '📄'}</span>
                <div>
                  <p className="font-semibold text-sm">{l.title}</p>
                  <p className="text-xs text-efe-muted mt-0.5">{l.duration}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
