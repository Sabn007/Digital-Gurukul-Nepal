"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-[box-shadow,background-color] duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold transition-opacity duration-200 hover:opacity-90"
        >
          <span className="relative flex h-14 w-32 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200/60 sm:h-16 sm:w-16">
            <Image
              src="/dgn.jpg"
              alt="Digital Gurukul Nepal"
              fill
              sizes="(max-width: 640px) 56px, 64px"
              className="object-contain p-1"
              quality={100}
              priority
              unoptimized
            />
          </span>
          <span className="hidden bg-gradient-to-r from-primary to-accent bg-clip-text text-lg text-transparent sm:inline">
            Digital Gurukul Nepal
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-bold transition-[background-color,color] duration-200 hover:bg-primary/10",
                  active ? "bg-primary/15 text-primary" : "text-muted",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <ButtonLink href="/contact" variant="primary" className="!py-2 !text-sm">
          Enroll now
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-foreground shadow-sm transition-[background-color,transform] duration-200 active:scale-95 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200/80 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm font-bold text-foreground hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href="/contact"
              variant="primary"
              className="mt-2 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Contact us
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
