import Link from "next/link";
import { Mail, Share2 } from "lucide-react";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <>
      <footer className="mt-auto border-t border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-extrabold text-foreground">Digital Gurukul</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Friendly coding lessons for grades 5-10, built for curious students and supportive
              schools.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Explore</p>
            <ul className="mt-3 flex flex-col gap-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Say hello</p>
            <div className="mt-3 flex gap-3">
              <a
                href="mailto:dgurukulnepal@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-foreground transition-[background-color,color,transform] duration-200 hover:bg-primary/15 hover:text-primary motion-safe:hover:scale-105"
                aria-label="Email dgurukulnepal@gmail.com"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/dgurukulnepal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-foreground transition-[background-color,color,transform] duration-200 hover:bg-primary/15 hover:text-primary motion-safe:hover:scale-105"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <Share2 className="h-5 w-5" aria-hidden />
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 py-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} Digital Gurukul Nepal. Demo content, extend with your school
          branding.
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-50 overflow-hidden border-t border-white/20 bg-linear-to-r from-primary via-[#b91d2e] to-accent py-2 text-white shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.5)]">
        <div className="dg-ticker-track">
          <p className="px-6 text-sm font-semibold tracking-wide">
            Big updates are almost here: new coding tracks, live school demos, student showcases,
            and surprise rewards. Stay tuned and follow Digital Gurukul Nepal.
          </p>
          <p className="px-6 text-sm font-semibold tracking-wide" aria-hidden>
            Big updates are almost here: new coding tracks, live school demos, student showcases,
            and surprise rewards. Stay tuned and follow Digital Gurukul Nepal.
          </p>
        </div>
      </div>
    </>
  );
}
