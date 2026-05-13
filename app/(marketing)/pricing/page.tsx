import type { Metadata } from "next";
import Link from "next/link";
import { Banknote, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { ANNUAL_FEE_PER_COURSE_NPR, annualFeePerCourseLabel } from "@/lib/pricing";
import { breadcrumbJsonLd, openGraphBase, twitterBase } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple annual pricing per course for Digital Gurukul Nepal programs for grades 5–10.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    ...openGraphBase,
    url: "/pricing",
    title: "Pricing · Digital Gurukul",
    description:
      "Transparent annual tuition per course for school coding programs across Nepal.",
  },
  twitter: {
    ...twitterBase,
    title: "Pricing · Digital Gurukul",
    description:
      "Transparent annual tuition per course for school coding programs across Nepal.",
  },
};

const included = [
  "Full access to one course track for the school year",
  "Lesson flows, practice activities, and project ideas",
  "Email support for teachers and coordinators",
  "Flexible online or in-person delivery options",
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Pricing
          </h1>
          <p className="mt-4 text-lg font-medium text-muted">
            One straightforward annual fee per course so schools and families can plan ahead.
          </p>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 max-w-lg">
        <Reveal delayMs={80}>
          <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-white to-primary/[0.06] shadow-lg shadow-primary/10">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-primary">
                <Banknote className="h-4 w-4" aria-hidden />
                Per course · per year
              </div>
              <CardTitle className="mt-3 text-3xl sm:text-4xl">
                <span className="text-primary">{annualFeePerCourseLabel}</span>
                <span className="text-lg font-bold text-muted"> / year</span>
              </CardTitle>
              <CardDescription className="!mt-3 !text-base !font-medium">
                Each student enrolls in one course at a time for the full academic year. Need
                multiple tracks or a whole-grade bundle? We&apos;ll quote a package when you{" "}
                <Link href="/contact" className="font-bold text-primary hover:underline">
                  get in touch
                </Link>
                .
              </CardDescription>
              <ul className="mt-6 space-y-3">
                {included.map((line) => (
                  <li key={line} className="flex gap-3 text-sm font-semibold text-foreground">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
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
          name: "Annual course tuition (per course)",
          description:
            "One annual tuition per course for Digital Gurukul Nepal programs (grades 5–10).",
          price: ANNUAL_FEE_PER_COURSE_NPR,
          priceCurrency: "NPR",
          category: "Education",
          availability: "https://schema.org/InStock",
          eligibleRegion: { "@type": "Country", name: "Nepal" },
        }}
      />
    </div>
  );
}
