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
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">{lesson.title}</h2>
            <p className="text-sm text-gray-400 mt-1">{lesson.duration} · {lesson.type}</p>
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
              <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                {lesson.content}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Lessons</h3>
        <div className="space-y-2">
          {lessons.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setActive(i)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                i === active
                  ? 'bg-teal-50 border-teal-200 text-teal-700'
                  : 'bg-white border-gray-100 text-gray-600 hover:border-teal-100 hover:bg-teal-50/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{l.type === 'video' ? '▶' : '📄'}</span>
                <div>
                  <p className="font-semibold text-sm">{l.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{l.duration}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
