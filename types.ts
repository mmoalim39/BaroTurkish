
export interface Flashcard {
  turkish: string;
  somali: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string; // Could be markdown or plain text
  videoUrl?: string; // e.g., "30-90s clip explaining grammar"
  pdfUrl?: string; // e.g., "Notes for the lesson"
}

export interface Level {
  id: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  levelCode: string;
  description: string;
  lessons: Lesson[];
  vocabulary: Flashcard[];
  quizzes: QuizQuestion[];
}

export interface Curriculum {
  beginner: Level;
  intermediate: Level;
  advanced: Level;
}
