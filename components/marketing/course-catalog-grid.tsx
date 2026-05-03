"use client";

import Link from "next/link";
import { Banknote, Clock, Layers } from "lucide-react";
import type { Course } from "@/types/course";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { annualFeePerCourseLabel } from "@/lib/pricing";
import { cn } from "@/lib/utils";

const accentBorder: Record<Course["accent"], string> = {
  indigo: "border-primary/25 bg-primary/[0.06]",
  sky: "border-accent/30 bg-accent/[0.08]",
  amber: "border-primary/20 bg-primary/[0.04]",
  emerald: "border-accent/25 bg-accent/[0.06]",
  violet: "border-accent/20 bg-accent/[0.05]",
};

export function CourseCatalogGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, i) => (
        <Reveal key={course.id} delayMs={i * 70}>
        <Card
          className={cn(
            "flex flex-col border-2 transition-transform duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl",
            accentBorder[course.accent],
          )}
        >
          <CardTitle>{course.title}</CardTitle>
          <CardDescription>{course.shortDescription}</CardDescription>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 text-foreground ring-1 ring-slate-200/80">
              <Layers className="h-3.5 w-3.5" />
              {course.level}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 text-foreground ring-1 ring-slate-200/80">
              <Clock className="h-3.5 w-3.5" />
              {course.durationWeeks} weeks
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-primary ring-1 ring-primary/20">
              <Banknote className="h-3.5 w-3.5" />
              {annualFeePerCourseLabel}/yr
            </span>
          </div>
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            <ButtonLink href="/contact" variant="primary" className="!py-2">
              Request details
            </ButtonLink>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-bold text-primary transition-colors duration-200 hover:underline"
            >
              Why us
            </Link>
          </div>
        </Card>
        </Reveal>
      ))}
    </div>
  );
}
