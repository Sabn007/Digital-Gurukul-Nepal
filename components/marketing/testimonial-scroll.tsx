import { Card } from "@/components/ui/card";
import type { BootcampTestimonial } from "@/data/bootcamp-testimonials";

function TestimonialCard({ t }: { t: BootcampTestimonial }) {
  return (
    <Card className="relative w-80 shrink-0 overflow-hidden border-2 border-slate-100 bg-white p-6 shadow-sm">
      <div className="absolute right-4 top-4 text-4xl font-black text-primary/10" aria-hidden>
        &ldquo;
      </div>
      <p className="text-sm font-semibold leading-relaxed text-foreground">{t.quote}</p>
      <p className="mt-4 text-sm font-extrabold text-primary">{t.name}</p>
      <p className="text-xs font-bold text-muted">
        {t.grade} · {t.school}
      </p>
      <p className="mt-3 inline-flex rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-accent">
        7-Day HTML, CSS & JS Bootcamp
      </p>
    </Card>
  );
}

export function TestimonialScroll({ items }: { items: BootcampTestimonial[] }) {
  const renderCards = (prefix: string) =>
    items.map((t) => <TestimonialCard key={`${prefix}-${t.id}`} t={t} />);

  return (
    <div className="overflow-hidden py-2">
      <div className="dg-ticker-track-testimonials">
        {renderCards("a")}
        <div aria-hidden className="contents">
          {renderCards("b")}
        </div>
      </div>
    </div>
  );
}
