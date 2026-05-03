import { courses } from "@/data/courses";
import type { Course, Lesson } from "@/types/course";

export function getAllCourses(): Course[] {
  return courses;
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getLessonByIds(
  courseId: string,
  lessonId: string,
): { course: Course; lesson: Lesson } | undefined {
  const course = getCourseById(courseId);
  if (!course) return undefined;
  const lesson = course.lessons.find((l) => l.id === lessonId);
  if (!lesson) return undefined;
  return { course, lesson };
}

export function getAdjacentLessonIds(courseId: string, lessonId: string) {
  const course = getCourseById(courseId);
  if (!course) return { prev: null as string | null, next: null as string | null };
  const idx = course.lessons.findIndex((l) => l.id === lessonId);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? course.lessons[idx - 1]!.id : null,
    next: idx < course.lessons.length - 1 ? course.lessons[idx + 1]!.id : null,
  };
}
