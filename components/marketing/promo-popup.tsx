"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const POPUP_INTERVAL_MS = 10 * 60 * 1000;

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
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-2xl motion-safe:animate-[dg-enter-up_450ms_cubic-bezier(0.22,1,0.36,1)_forwards]">
        <button
          type="button"
          aria-label="Close popup"
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-slate-100"
        >
          ×
        </button>

        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="relative block aspect-square w-full"
        >
          <Image
            src="/promo-website-design-ai.jpg"
            alt="Website Design and AI Tools for grades 4–10 — admission open at Digital Gurukul Nepal. Learn coding, design, and AI with our own LMS featuring a coding playground, leaderboard, and smart learning badges."
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
            priority
          />
        </Link>

        <div className="flex flex-wrap gap-2 border-t border-slate-200 bg-white px-4 py-4">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="rounded-xl bg-linear-to-r from-primary to-[#b91d2e] px-4 py-2 text-sm font-bold text-white shadow-sm transition-[transform,opacity] duration-200 hover:scale-[1.02] hover:opacity-95"
          >
            Enroll now
          </Link>
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
  );
}
