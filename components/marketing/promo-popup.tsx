"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const POPUP_INTERVAL_MS = 10 * 60 * 1000;
const BOOTCAMP_REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfcTKj3IbaHwLoft0bzQIq1q2ZfwkcGtP63ypkz0FmaC45Hxg/viewform";

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openTimer = window.setTimeout(() => setIsOpen(true), 8000);
    const interval = window.setInterval(() => setIsOpen(true), POPUP_INTERVAL_MS);

    return () => {
      window.clearTimeout(openTimer);
      window.clearInterval(interval);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-[2px]">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-2xl motion-safe:animate-[dg-enter-up_450ms_cubic-bezier(0.22,1,0.36,1)_forwards]">
        <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-52 w-52 rounded-full bg-accent/20 blur-3xl" />
        <button
          type="button"
          aria-label="Close popup"
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-slate-100"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[220px] overflow-hidden md:min-h-full">
            <Image
              src="/banner.jpg"
              alt="Students learning coding in class"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/65 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-white ring-1 ring-white/35 backdrop-blur-sm">
                Limited seats
              </p>
              <p className="mt-2 text-sm font-bold text-white/95">
                7 days of hands-on HTML, CSS, JavaScript, Node.js &amp; React.
              </p>
            </div>
          </div>

          <div className="space-y-4 px-5 py-5 md:px-6 md:py-6">
            <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-primary">
              7-Day Tech Bootcamp
            </div>
            <h3 className="text-2xl font-extrabold leading-tight text-foreground">
              Future Innovators Tech Bootcamp
            </h3>
            <p className="text-sm font-medium leading-relaxed text-muted">
              Join our intensive 7-day bootcamp covering HTML, CSS, JavaScript, Node.js, and React. Build real
              projects, learn modern web development, and level up your coding skills—open for
              classes 4 through 12 and +2 students.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={BOOTCAMP_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-linear-to-r from-primary to-[#b91d2e] px-4 py-2 text-sm font-bold text-white shadow-sm transition-[transform,opacity] duration-200 hover:scale-[1.02] hover:opacity-95"
              >
                Register now
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-bold text-foreground transition-colors hover:bg-slate-50"
              >
                Remind me later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
