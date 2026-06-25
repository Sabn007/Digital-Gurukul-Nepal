"use client";

import Link from "next/link";
import { Banknote, Clock, Layers } from "lucide-react";
import type { Course } from "@/types/course";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { courseFeeLabel } from "@/lib/pricing";
import { cn } from "@/lib/utils";

const cardTheme = (index: number) =>
  index % 2 === 0
    ? {
        card: "border-accent/25 bg-accent/[0.06]",
        fee: "bg-accent/10 text-accent ring-accent/20",
        button: "secondary" as const,
        link: "text-accent",
      }
    : {
        card: "border-primary/25 bg-primary/[0.06]",
        fee: "bg-primary/10 text-primary ring-primary/20",
        button: "primary" as const,
        link: "text-primary",
      };

export function CourseCatalogGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, i) => {
        const theme = cardTheme(i);
        return (
        <Reveal key={course.id} delayMs={i * 70}>
        <Card
          className={cn(
            "flex flex-col border-2 transition-transform duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl",
            theme.card,
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
            <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-1 ring-1", theme.fee)}>
              <Banknote className="h-3.5 w-3.5" />
              {courseFeeLabel}/course
            </span>
          </div>
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            <ButtonLink href="/contact" variant={theme.button} className="!py-2">
              Request details
            </ButtonLink>
            <Link
              href="/about"
              className={cn(
                "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-bold transition-colors duration-200 hover:underline",
                theme.link,
              )}
            >
              Why us
            </Link>
          </div>
        </Card>
        </Reveal>
        );
      })}
    </div>
  );
}
