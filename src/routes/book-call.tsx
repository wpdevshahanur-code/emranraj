import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, CheckCircle2, Clock, Sparkles, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/book-call")({
  head: () => ({
    meta: [
      { title: "Book a Discovery Call | NovaStack" },
      { name: "description", content: "Book a free 30-minute discovery call. No pitch deck, no pressure — just a real conversation about your project." },
      { property: "og:title", content: "Book a Discovery Call | NovaStack" },
      { property: "og:description", content: "Schedule a 30-minute call to discuss your WordPress or automation project." },
      { property: "og:url", content: "/book-call" },
    ],
    links: [{ rel: "canonical", href: "/book-call" }],
  }),
  component: BookCallPage,
});

const benefits = [
  "A tailored technical recommendation for your project",
  "Rough scope, timeline and investment range",
  "Automation opportunities you may have missed",
  "No pitch deck. No pressure. No follow-up spam.",
];

const faqs = [
  { q: "How long is the call?", a: "30 minutes. If we need more time we schedule a follow-up." },
  { q: "Is the call really free?", a: "Yes. Zero cost, zero commitment. It's how I qualify fit for both sides." },
  { q: "What should I prepare?", a: "A rough idea of your goals, current stack (if any) and any references you love." },
  { q: "Which tools do we use?", a: "Google Meet by default. Zoom or Whereby on request." },
  { q: "Can I bring my team?", a: "Absolutely — the more decision makers, the faster we can move." },
];

function BookCallPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Book a Call"
        title={<>Let's map your <span className="text-gradient">next 90 days</span></>}
        description="Grab a 30-minute slot below. We'll talk goals, stack, and the smallest engagement that gets you shipping fast."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl glass p-4 md:p-6 shadow-soft">
              {/* Calendly embed placeholder */}
              <div className="rounded-2xl bg-gradient-hero border border-border/60 aspect-[4/3] md:aspect-[16/12] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(37,99,235,0.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(124,58,237,0.4), transparent 50%)" }} />
                <div className="relative text-center p-8">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-elegant mx-auto">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">Calendly embed placeholder</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                    Drop your Calendly inline widget here — the container is styled and ready.
                  </p>
                  <a href="https://calendly.com" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-elegant">
                    Open scheduling
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-elegant">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-display font-semibold">What you'll get</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> 30 minutes · Free</div>
                </div>
              </div>
              <ul className="space-y-2.5 text-sm">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-brand text-white p-6 shadow-elegant">
              <div className="font-display text-lg font-bold">Prefer async?</div>
              <p className="mt-1 text-sm text-white/85">Send the brief by email and I'll reply within 24 hours.</p>
              <a href="mailto:hello@novastack.dev" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white text-primary px-4 py-2 text-sm font-semibold">
                hello@novastack.dev
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Common questions</h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.03}>
                <div className="glass rounded-2xl overflow-hidden">
                  <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="font-semibold">{f.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                  </button>
                  {open === i && <div className="px-6 pb-5 text-sm text-muted-foreground animate-fade-up">{f.a}</div>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
