import Link from "next/link";
import { CourseCatalogGrid } from "@/components/marketing/course-catalog-grid";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllCourses } from "@/lib/courses";
import { annualFeePerCourseLabel } from "@/lib/pricing";
import { breadcrumbJsonLd, courseListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Courses",
  socialTitle: "Digital Gurukul Courses | HTML, CSS, JavaScript, Scratch & Python",
  description:
    "Explore Digital Gurukul Nepal coding courses—HTML, CSS, JavaScript, Scratch, and Python tracks for grades 5–10 with clear levels and durations.",
  path: "/courses",
  keywords: ["digital gurukul courses", "coding courses Nepal"],
});

export default function CoursesPage() {
  const courses = getAllCourses();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Digital Gurukul Courses
          </h1>
          <p className="mt-4 text-lg font-medium text-muted">
            Overview of Digital Gurukul Nepal coding tracks—reach out for syllabi, pacing, and how
            we support teachers.
            Annual tuition is {annualFeePerCourseLabel} per course—see{" "}
            <Link href="/pricing" className="font-bold text-primary hover:underline">
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
  );
}
