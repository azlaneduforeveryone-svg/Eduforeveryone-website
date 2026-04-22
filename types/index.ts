export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'text';
  youtubeId?: string;
  content?: string;
}

export interface Course {
  id: string;
  title: string;
  subject: string;
  description: string;
  thumbnail: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessonCount: number;
  featured: boolean;
  lessons: Lesson[];
}

export interface Note {
  id: string;
  title: string;
  subject: string;
  summary: string;
  content: string;
  readTime: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  description: string;
  questionCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  questions: QuizQuestion[];
}
