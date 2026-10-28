'use client';
import { useState } from 'react';
import Card from '@/components/Card';
import Chip from '@/components/ui/Chip';
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
          <Chip
            key={s}
            active={active === s}
            onClick={() => setActive(s)}
          >
            {s}
          </Chip>
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
            badgeColor="bg-efe-accent-soft text-efe-accent-ink"
            meta={`${course.lessonCount} lessons`}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-16 text-efe-muted">
          <div className="text-5xl mb-4">📚</div>
          <p>No courses found for this subject.</p>
        </div>
      )}
    </div>
  );
}
