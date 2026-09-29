import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Award, Clock, HeartHandshake, ShieldCheck, Sparkles, Rocket, Briefcase, Workflow, Bot, Trophy } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Freelance WordPress & AI Automation Specialist | Emran Raj" },
      { name: "description", content: "Meet Emran Raj. Four years building WordPress sites and AI automation for clients across four continents." },
      { property: "og:title", content: "About Emran Raj" },
      { property: "og:description", content: "Freelance WordPress developer and AI automation specialist." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2022", title: "First WordPress agency role", d: "Cut my teeth on Elementor Pro builds and WooCommerce migrations.", icon: Briefcase, tag: "Chapter 01", metric: "12 sites shipped" },
  { year: "2023", title: "Went independent", d: "Launched NovaStack focused on premium WordPress and Crocoblock work.", icon: Rocket, tag: "Chapter 02", metric: "First 6-figure year" },
  { year: "2024", title: "Deep dive into automation", d: "Started shipping n8n and Make workflows alongside every build.", icon: Workflow, tag: "Chapter 03", metric: "40+ workflows live" },
  { year: "2025", title: "AI-first automation", d: "Integrated OpenAI into client stacks — lead scoring, RAG bots, content ops.", icon: Bot, tag: "Chapter 04", metric: "9k+ AI actions/day" },
  { year: "2026", title: "50+ shipped projects", d: "Now serving founders across the US, EU, UK and Australia.", icon: Trophy, tag: "Chapter 05", metric: "4 continents served" },
];

const whyMe = [
  { icon: Award, title: "Deep specialisation", d: "Only two things: high-end WordPress and automation. Nothing else." },
  { icon: Clock, title: "Predictable delivery", d: "Weekly milestones, transparent progress, no ghosting — ever." },
  { icon: ShieldCheck, title: "You own everything", d: "Code, credentials, workflows, documentation. All yours, day one." },
  { icon: HeartHandshake, title: "Long-term partnership", d: "Care plans and iteration cycles for the businesses I help launch." },
];

const stack = ["WordPress", "Elementor", "Crocoblock", "JetEngine", "WooCommerce", "PHP", "JavaScript", "CSS", "REST API", "Webhook", "n8n", "OpenAI"];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title={<>One specialist. <span className="text-gradient">The whole stack.</span></>}
        description="I'm a freelance WordPress developer and AI automation specialist helping founders and small teams ship faster, run leaner, and grow smarter."
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl glass p-10 lg:p-14">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={heroPortrait}
                  alt="Profile Portrait"
                  className="h-16 w-16 rounded-2xl object-cover shadow-elegant ring-2 ring-primary/40 shrink-0"
                />
                <div>
                  <div className="font-display text-xl font-bold">Hi, I'm Emran Raj.</div>
                  <div className="text-sm text-muted-foreground">Freelance WordPress + AI automation specialist</div>
                </div>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Four years ago I was building fast WordPress sites for a boutique agency. Today I run my studio solo — built for founders who want senior-level execution without the agency overhead. My focus is narrow
                on purpose: <span className="text-foreground font-medium">premium WordPress builds</span> and{" "}
                <span className="text-foreground font-medium">AI-powered automation</span>. That's it. When you hire me,
                you're not getting a jack-of-all-trades — you're getting a specialist who's shipped 50+ production
                projects across healthcare, real estate, education, agencies and ecommerce.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ModernTimeline />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <Reveal className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Why work with me</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyMe.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl glass p-6 hover-lift">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-elegant">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Technology stack</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {stack.map((s) => (
                <span key={s} className="glass rounded-xl px-5 py-2.5 text-sm font-semibold">{s}</span>
              ))}
            </div>
            <div className="mt-12">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant">
                Let's talk about your project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function ModernTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
            The Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            From first commit to <span className="text-gradient">50+ shipped projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Five years, four continents, one obsession — building things that work beautifully and scale quietly.
          </p>
        </Reveal>

        <div ref={ref} className="relative">
          {/* Rail */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 w-px bg-gradient-to-b from-primary via-secondary to-accent shadow-[0_0_12px_var(--primary)]"
          />

          <div className="space-y-12 md:space-y-24">
            {timeline.map((t, i) => {
              const Icon = t.icon;
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-0 items-center ${left ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  {/* Card */}
                  <div className={`pl-20 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <div className="group relative inline-block w-full">
                      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-40 blur-lg transition-opacity" />
                      <div className="relative rounded-2xl glass p-6 md:p-7 hover-lift">
                        <div className={`flex items-center gap-2 mb-3 ${left ? "md:justify-end" : "md:justify-start"}`}>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{t.tag}</span>
                          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                          <span className="text-[10px] font-semibold text-primary">{t.metric}</span>
                        </div>
                        <h3 className="font-display text-xl md:text-2xl font-bold leading-tight">{t.title}</h3>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.d}</p>
                      </div>
                    </div>
                  </div>

                  {/* Node with year */}
                  <div className={`absolute md:relative left-0 md:left-auto top-0 md:top-auto flex ${left ? "md:justify-start md:pl-16" : "md:justify-end md:pr-16"} items-center`}>
                    <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.15, type: "spring", stiffness: 200 }}
                        className="relative"
                      >
                        <span className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse" />
                        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-elegant ring-4 ring-background">
                          <Icon className="h-5 w-5" />
                        </span>
                      </motion.div>
                    </div>
                    <div className={`hidden md:block ${left ? "pl-24" : "pr-24"}`}>
                      <div className="font-display text-5xl lg:text-6xl font-black text-gradient tabular-nums leading-none">
                        {t.year}
                      </div>
                    </div>
                    <div className="md:hidden absolute left-20 top-2 font-display text-2xl font-black text-gradient tabular-nums">
                      {t.year}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End cap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center mt-8"
          >
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 -top-4 h-4 w-4 rounded-full bg-gradient-brand shadow-[0_0_20px_var(--primary)]" />
            <span className="ml-16 md:ml-0 mt-4 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Next chapter — maybe with you
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
