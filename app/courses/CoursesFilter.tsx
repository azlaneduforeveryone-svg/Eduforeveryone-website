'use client';
import { useState } from 'react';
import Card from '@/components/Card';
import { Course } from '@/types';

interface Props {
  courses: Course[];
  subjects: string[];
}

export default function CoursesFilter({ courses, subjects }: Props) {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? courses : courses.filter((c) => c.subject === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {subjects.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              active === s
                ? 'bg-teal-600 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300 hover:text-teal-600'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((course) => (
          <Card
            key={course.id}
            href={`/courses/${course.id}`}
            emoji={course.thumbnail}
            title={course.title}
            subject={course.subject}
            description={course.description}
            badge={course.level}
            badgeColor="bg-teal-100 text-teal-700"
            meta={`${course.lessonCount} lessons`}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-4">📚</div>
          <p>No courses found for this subject.</p>
        </div>
      )}
    </div>
  );
}
