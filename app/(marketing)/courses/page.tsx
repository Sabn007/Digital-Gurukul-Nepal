import Link from "next/link";
import { CourseCatalogGrid } from "@/components/marketing/course-catalog-grid";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllCourses } from "@/lib/courses";
import { courseFeeLabel } from "@/lib/pricing";
import { breadcrumbJsonLd, courseListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Courses",
  socialTitle: "Digital Gurukul Courses | HTML, CSS, JavaScript, Scratch & Python",
  description:
    "Explore Digital Gurukul Nepal coding courses HTML, CSS, JavaScript, Scratch, and Python tracks for grades 4–10 with clear levels and durations.",
  path: "/courses",
  keywords: ["digital gurukul courses", "coding courses Nepal"],
});

export default function CoursesPage() {
  const courses = getAllCourses();
  return (
    <div className="relative overflow-hidden">
      <div className="dg-blob pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-accent/20 blur-3xl will-change-transform" />
      <div className="dg-blob-reverse pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-primary/15 blur-3xl will-change-transform" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-accent ring-1 ring-accent/25">
            Grades 4–10 · HTML to Python
          </p>
          <h1 className="mt-4 bg-linear-to-r from-primary to-accent bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Digital Gurukul Courses
          </h1>
          <p className="mt-4 text-lg font-medium text-muted">
            Overview of Digital Gurukul Nepal coding tracks reach out for syllabi, pacing, and how
            we support teachers.
            Tuition is {courseFeeLabel} per course see{" "}
            <Link href="/pricing" className="font-bold text-accent hover:underline">
              pricing
            </Link>{" "}
            for details.
          </p>
        </div>
      </Reveal>
      <div className="mt-12">
        <CourseCatalogGrid courses={courses} />
      </div>
      <JsonLd id="ld-courses" data={courseListJsonLd(courses)} />
      <JsonLd
        id="ld-breadcrumb-courses"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Courses", path: "/courses" },
        ])}
      />
      </div>
    </div>
  );
}
