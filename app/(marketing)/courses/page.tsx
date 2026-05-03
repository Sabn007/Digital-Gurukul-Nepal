import type { Metadata } from "next";
import { CourseCatalogGrid } from "@/components/marketing/course-catalog-grid";
import { Reveal } from "@/components/ui/reveal";
import { getAllCourses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse HTML, CSS, JavaScript, Scratch, and Python courses for grades 5–10 with durations and levels.",
};

export default function CoursesPage() {
  const courses = getAllCourses();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Courses
          </h1>
          <p className="mt-4 text-lg font-medium text-muted">
            Overview of our tracks, reach out for syllabi, pacing, and how we support teachers.
          </p>
        </div>
      </Reveal>
      <div className="mt-12">
        <CourseCatalogGrid courses={courses} />
      </div>
    </div>
  );
}
