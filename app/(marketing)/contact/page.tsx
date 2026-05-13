import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/marketing/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, openGraphBase, twitterBase } from "@/lib/seo";
import { siteContact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Digital Gurukul about school partnerships, pilots, and student programs.",
  alternates: { canonical: "/contact" },
  openGraph: {
    ...openGraphBase,
    url: "/contact",
    title: "Contact Digital Gurukul",
    description:
      "Reach out about school partnerships, pilots, and student coding programs in Nepal.",
  },
  twitter: {
    ...twitterBase,
    title: "Contact Digital Gurukul",
    description:
      "Reach out about school partnerships, pilots, and student coding programs in Nepal.",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <Reveal>
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Contact us
          </h1>
          <p className="mt-4 text-lg font-medium text-muted">
            Share a note about your school or ask a question. We&apos;ll route this to your inbox once a backend is
            connected.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-foreground">Email</p>
                <a
                  href="mailto:dgurukulnepal@gmail.com"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  dgurukulnepal@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-foreground">Call us</p>
                <a
                  href="tel:+9779812781125"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  9812781125
                </a>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
        <Reveal delayMs={80}>
        <ContactForm />
        </Reveal>
      </div>
      <JsonLd
        id="ld-breadcrumb-contact"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd
        id="ld-contact-page"
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Digital Gurukul",
          description:
            "Reach Digital Gurukul Nepal for school partnerships, pilots, and student programs.",
          mainEntity: {
            "@type": "Organization",
            name: "Digital Gurukul Nepal",
            email: siteContact.email,
            telephone: siteContact.phone,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: siteContact.email,
              telephone: siteContact.phone,
              areaServed: siteContact.addressCountry,
              availableLanguage: ["en", "ne"],
            },
          },
        }}
      />
    </div>
  );
}
