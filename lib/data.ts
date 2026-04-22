import { Course, Note, Quiz } from '@/types';
import coursesData from '@/data/courses.json';
import notesData from '@/data/notes.json';
import quizzesData from '@/data/quizzes.json';

const courses: Course[] = coursesData as Course[];
const notes: Note[] = notesData as Note[];
const quizzes: Quiz[] = quizzesData as Quiz[];

// Courses
export function getAllCourses(): Course[] {
  return courses;
}

export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.featured);
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getCoursesBySubject(subject: string): Course[] {
  if (subject === 'All') return courses;
  return courses.filter((c) => c.subject === subject);
}

// Notes
export function getAllNotes(): Note[] {
  return notes;
}

export function getNoteById(id: string): Note | undefined {
  return notes.find((n) => n.id === id);
}

export function getNotesBySubject(subject: string): Note[] {
  if (subject === 'All') return notes;
  return notes.filter((n) => n.subject === subject);
}

// Quizzes
export function getAllQuizzes(): Quiz[] {
  return quizzes;
}

export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find((q) => q.id === id);
}

// Subjects
export function getAllSubjects(): string[] {
  const subjects = new Set([
    ...courses.map((c) => c.subject),
    ...notes.map((n) => n.subject),
    ...quizzes.map((q) => q.subject),
  ]);
  return ['All', ...Array.from(subjects).sort()];
}
