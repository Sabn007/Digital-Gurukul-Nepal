import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/marketing/contact-form";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Digital Gurukul about school partnerships, pilots, and student programs.",
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
                  href="mailto:hello@digitalgurukul.example"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  hello@digitalgurukul.example
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
    </div>
  );
}
