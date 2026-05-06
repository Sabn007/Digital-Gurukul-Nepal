import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpenCheck,
  Gamepad2,
  Sparkles,
  Wand2,
  ArrowRight,
  Star,
  GraduationCap,
  School,
  Users,
  Clock,
  Headphones,
  Laptop,
  Presentation,
  PartyPopper,
  Target,
  Puzzle,
  Lightbulb,
  MessageCircle,
  Code2,
  MapPin,
  Layers,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Learn coding the fun way with interactive lessons, quizzes, and projects for grades 5–10.",
};

const features = [
  {
    title: "Interactive learning",
    body: "Short bursts of instruction with instant checks, perfect for busy school days.",
    icon: Sparkles,
  },
  {
    title: "Quizzes that feel like games",
    body: "MCQs and playful challenges reinforce ideas without the stress of exams.",
    icon: Gamepad2,
  },
  {
    title: "Real mini-projects",
    body: "Ship a profile page, Scratch story, or Python art piece you can show off.",
    icon: Wand2,
  },
];

const stats = [
  { value: "5+", label: "tracks", sub: "HTML → Python", icon: Code2 },
  { value: "40+", label: "lesson ideas", sub: "ready to sequence", icon: BookOpenCheck },
  { value: "5–10", label: "grade band", sub: "middle & early high", icon: GraduationCap },
  { value: "100%", label: "school-first", sub: "pilot-friendly setup", icon: School },
];

const audiences = [
  {
    title: "For students",
    blurb: "Big visuals, clear goals, and “I built this!” moments every unit.",
    points: [
      "Start with blocks, grow into real code at your pace.",
      "Celebrate progress with shareable projects and class showcases.",
      "Practice debugging like a puzzle, not a punishment.",
    ],
    icon: Laptop,
    tint: "from-primary/12 to-primary/[0.04] ring-primary/25",
    iconBg: "bg-primary text-white",
  },
  {
    title: "For teachers & schools",
    blurb: "Slides, pacing guides, and checkpoints so class time stays smooth.",
    points: [
      "Term-ready outlines aligned to weekly computer periods.",
      "Rubrics and exit prompts that fit Nepali school calendars.",
      "Optional live onboarding for your IT lab or classroom.",
    ],
    icon: Presentation,
    tint: "from-accent/12 to-accent/[0.05] ring-accent/30",
    iconBg: "bg-accent text-white",
  },
];

const steps = [
  {
    step: "01",
    title: "Discover your goals",
    body: "Pick tracks, grade levels, and how many periods per week you can dedicate.",
    icon: Target,
  },
  {
    step: "02",
    title: "Plan the term",
    body: "We map modules to your calendar, exams, holidays, and lab availability included.",
    icon: Puzzle,
  },
  {
    step: "03",
    title: "Teach with confidence",
    body: "Use our lesson flows, demos, and practice sheets in class or hybrid labs.",
    icon: Lightbulb,
  },
  {
    step: "04",
    title: "Showcase & level up",
    body: "Host a demo day, capture portfolios, and choose what to teach next term.",
    icon: PartyPopper,
  },
];

const skillOutcomes = [
  { title: "Computational thinking", body: "Break problems into steps, patterns, and rules.", icon: Puzzle },
  { title: "Creative expression", body: "Turn stories and art into code, especially in Scratch.", icon: Sparkles },
  { title: "Digital citizenship", body: "Safe sharing, attribution, and kind collaboration online.", icon: Users },
  { title: "Debugging grit", body: "Read errors, test fixes, and celebrate small wins.", icon: MessageCircle },
];

const lmsHighlights = [
  {
    title: "All-in-one course hub",
    body: "Our learning management system (LMS) keeps each track in one place—lessons, links, and files—so students always know where to go.",
    icon: Layers,
  },
  {
    title: "Practice next to teaching",
    body: "Quizzes and activities sit alongside instruction so learners can check understanding without leaving the platform.",
    icon: BookOpenCheck,
  },
  {
    title: "Works for school workflows",
    body: "Facilitators can follow pacing, see who is engaged, and support both online check-ins and lab sessions from the same system.",
    icon: School,
  },
];

const faqs = [
  {
    q: "Do students need their own laptops?",
    a: "A shared computer lab works great. We design activities so pairs can collaborate if devices are limited.",
  },
  {
    q: "Can we start with just one grade?",
    a: "Yes. Many schools pilot with a single grade or club, then expand once teachers feel comfortable.",
  },
  {
    q: "Is content only in English?",
    a: "Core materials are in English (like most CS resources), with space to explain concepts in Nepali during class.",
  },
  {
    q: "What about internet and power cuts?",
    a: "We prioritize offline-friendly exercises where possible and share backup activities for low-connectivity days.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(219,37,55,0.3),transparent_52%),radial-gradient(ellipse_at_bottom_left,rgba(42,150,222,0.22),transparent_48%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:gap-14 lg:py-16">
          <div className="dg-animate-in flex-1 space-y-5">
            <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-accent">
              <MapPin className="h-4 w-4" aria-hidden />
              Where we teach coding
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              In your labs, classrooms, and club across Nepal
            </h2>
            <p className="max-w-xl text-base font-medium leading-relaxed text-slate-300">
              We partner with schools to run hands-on coding blocks: live demos at the projector,
              pair work in the computer lab, and guided projects students can finish at home when
              they have access. You choose the rhythm; we bring the structure.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Weekly CS periods & term-long sequences",
                "Scratch → web → Python pathways",
                "Teacher-friendly notes & answer keys",
                "Showcases parents and principals love",
              ].map((line) => (
                <li
                  key={line}
                  className="flex gap-2 text-sm font-semibold text-slate-200"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <ButtonLink
                href="/contact"
                variant="secondary"
                className="justify-center"
              >
                Plan a visit or call
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href="/courses"
                variant="ghost"
                className="justify-center !border-2 !border-white/30 !bg-white/5 !text-white !ring-0 hover:!bg-white/15"
              >
                See what we teach
              </ButtonLink>
            </div>
          </div>
          <div className="dg-animate-in dg-animate-in-delay-2 relative w-full flex-1 lg:max-w-lg">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/10 transition-transform duration-500 ease-out motion-safe:hover:scale-[1.02]">
              <Image
                src="/banner.jpg"
                alt="Digital Gurukul Nepal teaching coding in schools"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
                priority
              />
            </div>
          
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-b from-accent/10 via-white to-primary/3">
        <div className="dg-blob pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-accent/25 blur-3xl will-change-transform" />
        <div className="dg-blob-reverse pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl will-change-transform" />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-24">
          <div className="dg-animate-in dg-animate-in-delay-1 flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-primary ring-1 ring-primary/20">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              Grades 5–10
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Learn Coding the Fun Way
            </h1>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-muted">
              Bright, school-ready coding programs in HTML, CSS, JavaScript, Scratch, and Python, built
              so students stay curious and confident.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/courses" variant="primary" className="justify-center sm:w-auto">
                Explore courses
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="outlineAccent"
                className="justify-center sm:w-auto"
              >
                Talk to us
              </ButtonLink>
            </div>
            <p className="text-sm font-semibold text-muted">
              Tell us about your school with us, we&apos;ll help you plan a pilot or partnership.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs font-bold text-muted">
              <span className="rounded-full bg-white/90 px-3 py-1.5 ring-1 ring-slate-200/80">
                Block + text coding
              </span>
              <span className="rounded-full bg-white/90 px-3 py-1.5 ring-1 ring-slate-200/80">
                Teacher guides
              </span>
              <span className="rounded-full bg-white/90 px-3 py-1.5 ring-1 ring-slate-200/80">
                Project showcases
              </span>
            </div>
          </div>
          <div className="dg-animate-in dg-animate-in-delay-2 flex flex-1 justify-center lg:justify-end">
            <div className="dg-float-water w-full max-w-md">
            <Card className="relative w-full border-2 border-primary/15 bg-white/90 shadow-2xl backdrop-blur motion-safe:transition-shadow motion-safe:duration-300 motion-safe:hover:shadow-[0_28px_60px_-24px_rgba(15,23,42,0.35)]">
              <div className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-lg font-black text-white shadow-lg">
                Hi!
              </div>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpenCheck className="h-7 w-7 text-primary" />
                This week&apos;s wins
              </CardTitle>
              <CardDescription>
                A sample mix of what a fun, balanced week can look like, swap topics to match your
                syllabus.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm font-bold text-foreground">
                <li className="flex items-center gap-2 rounded-2xl bg-primary/[0.08] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  HTML: structure a hero section
                </li>
                <li className="flex items-center gap-2 rounded-2xl bg-accent/10 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Scratch: animate a sprite loop
                </li>
                <li className="flex items-center gap-2 rounded-2xl bg-primary/[0.06] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Python: print your nickname art
                </li>
              </ul>
              <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted">
                <Headphones className="h-4 w-4 shrink-0 text-primary" />
                Need help? We can join a live session for your facilitators.
              </p>
            </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delayMs={i * 75}>
              <div
                className="flex items-start gap-4 rounded-3xl bg-slate-50/80 p-5 ring-1 ring-slate-100 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md motion-safe:transition-transform motion-safe:duration-300"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="text-sm font-extrabold text-primary">{s.label}</p>
                  <p className="text-xs font-semibold text-muted">{s.sub}</p>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <Reveal>
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200/80 bg-white px-6 py-10 text-center shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)] motion-safe:transition-shadow motion-safe:duration-300 motion-safe:hover:shadow-[0_24px_55px_-20px_rgba(15,23,42,0.22)] sm:px-12 sm:py-12">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Both{" "}
            <span className="text-[#db2537]">Online</span>
            {" "}&{" "}
            <span className="text-[#2a96de]">Physical</span>
            {" "}
            Classes Available
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-muted sm:text-lg">
            Experience the best of both worlds with our online and physical classes, tailored to meet
            your learning needs.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact" variant="primary" className="justify-center px-8">
              Book a Free Demo Now
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
        </Reveal>
      </section>

      <section className="border-y border-slate-200/80 bg-slate-50/80 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-wide text-primary">
                Learning management system
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
                Your classes run on a real LMS
              </h2>
              <p className="mt-3 text-base font-medium text-muted">
                We don&apos;t just send PDFs, students and teachers use a dedicated platform built for
                structured coding programs, progress, and communication.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {lmsHighlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delayMs={i * 80}>
                  <Card className="h-full border-2 border-slate-200/80 bg-white transition-transform duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lg">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <CardTitle className="mt-4 text-lg">{item.title}</CardTitle>
                    <CardDescription className="!mt-2 !text-sm !leading-relaxed">
                      {item.body}
                    </CardDescription>
                  </Card>
                </Reveal>
              );
            })}
          </div>
          <Reveal delayMs={120}>
            <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 text-center">
              <p className="text-sm font-semibold text-muted">Want a walkthrough of the LMS?</p>
              <ButtonLink href="/contact" variant="outlineAccent" className="justify-center">
                Request a demo
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Everything you need to start strong
          </h2>
          <p className="mt-3 text-base font-medium text-muted">
            Friendly pacing, big buttons, and cheerful cards because learning should feel
            encouraging.
          </p>
        </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delayMs={i * 90}>
              <Card
                className="border-2 border-white bg-white/90 transition-transform duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <CardTitle className="mt-4">{f.title}</CardTitle>
                <CardDescription>{f.body}</CardDescription>
              </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-accent/[0.07] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              Built for real classrooms
            </h2>
            <p className="mt-3 text-base font-medium text-muted">
              Whether you run a weekly lab or a dedicated coding club, we keep both audiences in
              mind.
            </p>
          </div>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {audiences.map((a, idx) => {
              const Icon = a.icon;
              const bullet = idx === 0 ? "bg-primary" : "bg-accent";
              return (
                <Reveal key={a.title} delayMs={idx * 100}>
                <Card
                  className={`border-2 bg-gradient-to-br ${a.tint} transition-transform duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lg`}
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${a.iconBg}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <CardTitle className="mt-4 text-xl">{a.title}</CardTitle>
                  <CardDescription className="!mt-2 font-medium">{a.blurb}</CardDescription>
                  <ul className="mt-5 space-y-2.5 text-sm font-semibold text-foreground">
                    {a.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${bullet}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
        <div className="flex flex-col gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">How we roll out</h2>
            <p className="mt-3 text-base font-medium text-muted">
              A simple path from first conversation to confident facilitators with no jargon required.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-muted lg:justify-end">
            <Clock className="h-4 w-4 text-primary" />
            Typical planning: 1–2 working sessions
          </div>
        </div>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.step} delayMs={i * 80}>
              <Card
                className="relative overflow-hidden border-2 border-slate-100 pt-8 transition-[border-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-primary/25 motion-safe:hover:shadow-md"
              >
                <span className="absolute right-4 top-4 text-3xl font-black text-primary/15">
                  {s.step}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <CardTitle className="mt-4 text-base">{s.title}</CardTitle>
                <CardDescription className="!text-sm !leading-relaxed">{s.body}</CardDescription>
              </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-foreground sm:text-4xl">
            Skills students carry forward
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            Beyond syntax, the habits that help in science fairs, math class, and everyday problem
            solving.
          </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skillOutcomes.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delayMs={i * 70}>
                <div
                  className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-5 transition-[background-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-white motion-safe:hover:shadow-md"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <p className="mt-3 font-extrabold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-muted">{item.body}</p>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="border-y border-slate-200/80 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-foreground sm:text-4xl">
            Students are cheering
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            Dummy quotes for layout, swap with real stories from your school             community.
          </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delayMs={i * 90}>
              <Card className="relative overflow-hidden border-2 border-slate-100 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1">
                <div className="absolute right-4 top-4 text-4xl font-black text-primary/10">
                  “
                </div>
                <p className="text-sm font-semibold leading-relaxed text-foreground">{t.quote}</p>
                <p className="mt-4 text-sm font-extrabold text-primary">{t.name}</p>
                <p className="text-xs font-bold text-muted">
                  {t.role} · {t.school}
                </p>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Questions schools ask first
          </h2>
          <p className="mt-3 text-base font-medium text-muted">
            Straight answers you can share with your principal or parent council.
          </p>
        </div>
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delayMs={i * 60}>
            <details
              className="group rounded-2xl border-2 border-slate-200 bg-white px-5 py-1 transition-[border-color,box-shadow] duration-300 open:border-primary/30 open:shadow-md open:shadow-primary/5"
            >
              <summary className="cursor-pointer list-none py-4 font-extrabold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  {item.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 ease-out group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-slate-100 pb-4 pt-3 text-sm font-medium leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-[#b91d2e] to-accent px-6 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16">
          <div className="dg-blob pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-white/10 blur-2xl will-change-transform" />
          <div className="dg-blob-reverse pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-accent/25 blur-2xl will-change-transform" />
          <h2 className="relative text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Ready to show families what your students can build?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm font-semibold text-white/85 sm:text-base">
            Share your school name, grades, and weekly periods with us, we&apos;ll suggest a realistic
            first term.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="!bg-white !text-primary !shadow-[0_4px_0_0] !shadow-[#6b1520]/35"
            >
              Book a conversation
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="/courses"
              variant="ghost"
              className="!border-2 !border-white/40 !bg-white/10 !text-white !ring-0 hover:!bg-white/20"
            >
              Browse all tracks
            </ButtonLink>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
