import { Heart, Lightbulb, Users } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { teamMembers } from "@/data/team";

export const metadata = pageMetadata({
  title: "About",
  socialTitle: "About Digital Gurukul Nepal | Digital Coding School",
  description:
    "Learn about Digital Gurukul Nepal our mission to bring digital coding education to students in grades 4–10, and the team behind our school programs.",
  path: "/about",
  keywords: ["about digital gurukul", "digital gurukul team"],
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          About Digital Gurukul
        </h1>
        <p className="mt-4 text-lg font-medium text-muted">
          We believe every student deserves a confident start in computational thinking.
        </p>
      </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal delayMs={40}>
          <Card className="border-2 border-primary/20 bg-linear-to-br from-white to-primary/6 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Lightbulb className="h-6 w-6" />
            </div>
            <CardTitle className="mt-4">Mission</CardTitle>
            <CardDescription>
              Make coding approachable with structured paths, delightful visuals, and classroom-ready
              pacing for grades 4–10.
            </CardDescription>
          </Card>
        </Reveal>
        <Reveal delayMs={100}>
          <Card className="border-2 border-accent/25 bg-linear-to-br from-white to-accent/[0.08] motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-0.5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white">
              <Heart className="h-6 w-6" />
            </div>
            <CardTitle className="mt-4">Vision</CardTitle>
            <CardDescription>
              A regional hub where schools share projects, celebrate creativity, and graduate students
              who are unafraid to build.
            </CardDescription>
          </Card>
        </Reveal>
      </div>

      <section className="mt-16">
        <Reveal>
        <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">Why coding?</h2>
        <p className="mt-3 max-w-3xl text-muted">
          Coding strengthens problem-solving, storytelling, and persistence. Starting in middle
          school gives learners time to explore many languages from visual blocks to Python before
          higher-stakes academics. Our curriculum balances fun, rigor, and frequent wins.
        </p>
        </Reveal>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Translate ideas into working prototypes, not just slides.",
            "Practice debugging: the ultimate growth-mindset workout.",
            "Connect math and language skills through logic and communication.",
            "Open doors to robotics, data, and design electives later on.",
          ].map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition-[box-shadow,transform] duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* <section className="mt-16">
        <Reveal>
        <div className="flex items-center gap-3">
          <Users className="h-8 w-8 text-primary" />
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">Team</h2>
        </div>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {teamMembers.map((m, i) => (
            <Reveal key={m.id} delayMs={i * 80}>
            <Card className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-lg font-black text-white">
                {m.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </div>
              <CardTitle className="mt-4">{m.name}</CardTitle>
              <p className="text-xs font-bold uppercase tracking-wide text-primary">{m.role}</p>
              <CardDescription>{m.bio}</CardDescription>
            </Card>
            </Reveal>
          ))}
        </div>
      </section> */}
      <JsonLd
        id="ld-breadcrumb-about"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </div>
  );
}
