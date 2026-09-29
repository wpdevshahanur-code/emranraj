import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Award, Clock, HeartHandshake, ShieldCheck, Sparkles, Rocket, Briefcase, Workflow, Bot, Trophy } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Full-Stack WordPress & Automation Architect | Emran Raj" },
      { name: "description", content: "Meet Emran Raj. 8+ years building enterprise WordPress sites, Crocoblock JetEngine platforms, and AI automation for clients across four continents." },
      { property: "og:title", content: "About Emran Raj" },
      { property: "og:description", content: "Full-Stack WordPress developer and AI automation architect." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2022", title: "First WordPress agency role", d: "Cut my teeth on Elementor Pro builds and WooCommerce migrations.", icon: Briefcase, tag: "Chapter 01", metric: "12 sites shipped" },
  { year: "2023", title: "Went independent", d: "Launched studio focused on premium WordPress and Crocoblock JetEngine work.", icon: Rocket, tag: "Chapter 02", metric: "First 6-figure year" },
  { year: "2024", title: "Deep dive into automation", d: "Started shipping self-hosted n8n and webhook pipelines alongside every build.", icon: Workflow, tag: "Chapter 03", metric: "40+ workflows live" },
  { year: "2025", title: "AI-first automation", d: "Integrated OpenAI into client stacks — lead scoring, RAG bots, content ops.", icon: Bot, tag: "Chapter 04", metric: "9k+ AI actions/day" },
  { year: "2026", title: "50+ shipped projects", d: "Now serving founders across the US, EU, UK, Canada and Australia.", icon: Trophy, tag: "Chapter 05", metric: "4 continents served" },
];

const whyMe = [
  { icon: Award, title: "Deep specialisation", d: "Only two things: high-end WordPress and automation. Nothing else." },
  { icon: Clock, title: "Predictable delivery", d: "Weekly milestones, transparent progress, no ghosting — ever." },
  { icon: ShieldCheck, title: "You own everything", d: "Code, credentials, workflows, documentation. All yours, day one." },
  { icon: HeartHandshake, title: "Long-term partnership", d: "Care plans and iteration cycles for the businesses I help launch." },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "WordPress",
  "Elementor Pro",
  "Crocoblock",
  "JetEngine",
  "WooCommerce",
  "PHP",
  "Tailwind CSS",
  "REST API",
  "Webhooks",
  "n8n",
  "OpenAI",
  "Docker",
  "Redis",
];

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
            <div className="rounded-3xl glass p-8 sm:p-10 lg:p-14 border border-border/80 shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-8 border-b border-border/60">
                <div className="flex items-center gap-4">
                  <img
                    src="/author-emran.png"
                    alt="Emran Raj"
                    className="h-20 w-20 rounded-2xl object-cover shadow-elegant ring-2 ring-primary/40 shrink-0"
                  />
                  <div>
                    <div className="font-display text-2xl font-bold tracking-tight">Hi, I'm Emran Raj.</div>
                    <div className="text-sm font-medium text-primary">Full-Stack WordPress Engineer & Automation Architect</div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      <span>Available for projects on Upwork</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.upwork.com/freelancers/~015c9f89118b7be509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-2.5 text-xs font-semibold text-white shadow-elegant hover:shadow-glow transition-all"
                  >
                    Hire on Upwork
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-xs font-semibold text-foreground hover:border-primary/40 transition-all"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I'm a senior Full-Stack WordPress Engineer and Automation Architect with over <span className="text-foreground font-semibold">8+ years of production experience</span> delivering custom web applications, complex relational databases, and automated back-office workflows for founders and growing businesses worldwide.
                </p>
                <p>
                  Rather than running a bloated agency with junior handoffs and communication bottlenecks, I work directly with founders and product teams. My core engineering practices cover:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2.5 text-sm text-foreground/90 my-4">
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>Full-Stack Apps:</strong> React, Next.js, TypeScript & clean APIs</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>WordPress & Elementor:</strong> Pixel-perfect builds (95+ PageSpeed)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>Crocoblock JetEngine:</strong> Dynamic CPTs, bookings & smart filters</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>WooCommerce:</strong> 1-Click checkout funnels & payment gateways</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>n8n Automations:</strong> Self-hosted workflow orchestration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>AI Workflows:</strong> OpenAI agents, RAG bots & lead scoring</span>
                  </li>
                </ul>
                <p>
                  With <span className="text-foreground font-semibold">50+ successful production platforms</span> shipped across North America, Europe, Australia, and Asia — from industrial portals like Canoil Canada and mining corporations like Guardian Metal Resources PLC to high-converting research stores like Fixion Fuel — I build software that runs reliably, scales gracefully, and drives measurable revenue.
                </p>
              </div>

              {/* Highlight Metrics */}
              <div className="mt-8 pt-6 border-t border-border/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="rounded-xl glass p-3.5">
                  <div className="font-display text-2xl font-bold text-gradient">50+</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Projects Shipped</div>
                </div>
                <div className="rounded-xl glass p-3.5">
                  <div className="font-display text-2xl font-bold text-gradient">100%</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Job Success Score</div>
                </div>
                <div className="rounded-xl glass p-3.5">
                  <div className="font-display text-2xl font-bold text-gradient">95+</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">PageSpeed Guarantee</div>
                </div>
                <div className="rounded-xl glass p-3.5">
                  <div className="font-display text-2xl font-bold text-gradient">15+</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">Countries Served</div>
                </div>
              </div>
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
