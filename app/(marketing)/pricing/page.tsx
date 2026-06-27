import Link from "next/link";
import { Banknote, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { COURSE_FEE_NPR, courseFeeLabel } from "@/lib/pricing";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing",
  socialTitle: "Digital Gurukul Pricing | School Coding Programs Nepal",
  description:
    "Transparent pricing for Digital Gurukul Nepal coding courses NPR 7,500 per course for digital education programs in grades 4–10.",
  path: "/pricing",
  keywords: ["digital gurukul pricing", "coding school fees Nepal"],
});

const included = [
  "Full access to one complete course track",
  "Lesson flows, practice activities, and project ideas",
  "Email support for teachers and coordinators",
  "Flexible online or in-person delivery options",
];

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="dg-blob pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-accent/20 blur-3xl will-change-transform" />
      <div className="dg-blob-reverse pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-primary/15 blur-3xl will-change-transform" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-accent ring-1 ring-accent/25">
              Simple · transparent
            </p>
            <h1 className="mt-4 bg-linear-to-r from-primary to-accent bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
              Digital Gurukul Pricing
            </h1>
            <p className="mt-4 text-lg font-medium text-muted">
              One straightforward fee per Digital Gurukul course so schools and families can plan
              ahead.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 max-w-lg">
          <Reveal delayMs={80}>
            <Card className="relative overflow-hidden border-2 border-accent/25 bg-linear-to-br from-white via-white to-accent/[0.06] shadow-lg shadow-accent/10">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-accent">
                  <Banknote className="h-4 w-4" aria-hidden />
                  Per course
                </div>
                <CardTitle className="mt-3 text-3xl sm:text-4xl">
                  <span className="text-primary">{courseFeeLabel}</span>
                  <span className="text-lg font-bold text-muted"> per course</span>
                </CardTitle>
                <CardDescription className="mt-3! text-base! font-medium!">
                  Each student enrolls in one course at a time. Need multiple tracks or a
                  whole-grade bundle? We&apos;ll quote a package when you{" "}
                  <Link href="/contact" className="font-bold text-accent hover:underline">
                    get in touch
                  </Link>
                  .
                </CardDescription>
                <ul className="mt-6 space-y-3">
                  {included.map((line, i) => (
                    <li key={line} className="flex gap-3 text-sm font-semibold text-foreground">
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          i % 2 === 0 ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact" variant="primary" className="justify-center">
                    Enroll or ask a question
                  </ButtonLink>
                  <ButtonLink href="/courses" variant="outlineAccent" className="justify-center">
                    View courses
                  </ButtonLink>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
        <JsonLd
          id="ld-breadcrumb-pricing"
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ])}
        />
        <JsonLd
          id="ld-pricing-offer"
          data={{
            "@context": "https://schema.org",
            "@type": "Offer",
            name: "Course tuition (per course)",
            description:
              "NPR 7,500 per course for Digital Gurukul Nepal programs (grades 4–10).",
            price: COURSE_FEE_NPR,
            priceCurrency: "NPR",
            category: "Education",
            availability: "https://schema.org/InStock",
            eligibleRegion: { "@type": "Country", name: "Nepal" },
          }}
        />
      </div>
    </div>
  );
}
