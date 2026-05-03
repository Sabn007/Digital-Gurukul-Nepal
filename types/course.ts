export type CourseLevel = "Beginner" | "Intermediate";

export type LessonType = "video" | "text";

export type QuizOption = {
  id: string;
  label: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
  correctOptionId: string;
};

export type Lesson = {
  id: string;
  courseId: string;
  title: string;
  order: number;
  type: LessonType;
  durationMinutes: number;
  summary: string;
  quiz?: QuizQuestion[];
};

export type Course = {
  id: string;
  title: string;
  shortDescription: string;
  level: CourseLevel;
  durationWeeks: number;
  accent: "indigo" | "sky" | "amber" | "emerald" | "violet";
  lessons: Lesson[];
};
