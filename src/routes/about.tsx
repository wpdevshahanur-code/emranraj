import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowRight, Award, Clock, HeartHandshake, ShieldCheck, Sparkles,
  Rocket, Briefcase, Workflow, Bot, Trophy, Search, Code2, CheckCircle2,
  Zap, ExternalLink, ChevronRight, Layers, Star,
} from "lucide-react";

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

const deliveryProcess = [
  {
    step: "01",
    tag: "Phase 01 · Architecture",
    timeline: "2–4 Days",
    title: "1-on-1 Scoping & Relational Blueprint",
    desc: "A focused strategy session directly between founder and engineer. We map out database relationships, Custom Post Types (CPTs), third-party API endpoints, and automation logic before writing any code.",
    icon: Search,
    deliverables: [
      "Relational CPT schema & taxonomy hierarchy",
      "Full-stack tech stack & automation flow blueprint",
      "Fixed milestone delivery roadmap with zero fluff",
    ],
    tech: ["Database Schema", "CPT Blueprint", "n8n Logic Flow"],
    highlight: "Direct founder access — no junior account managers or telephone game.",
    spotlight: "Every database relationship and workflow mapped before writing code.",
    metric: "1-on-1 Strategy Session",
  },
  {
    step: "02",
    tag: "Phase 02 · Design",
    timeline: "3–7 Days",
    title: "Conversion-Focused UI/UX & Prototyping",
    desc: "Crafting modern, pixel-perfect user interfaces in Figma or interactive staging sandboxes. Built mobile-first with high contrast, intuitive navigation, frictionless checkout paths, and seamless micro-interactions.",
    icon: Layers,
    deliverables: [
      "Mobile-first responsive layouts & design tokens",
      "Conversion-optimized checkout & lead capture funnels",
      "Live interactive staging sandbox for founder review",
    ],
    tech: ["Figma Design", "Tailwind UI Tokens", "Conversion UX"],
    highlight: "100% custom visual styling aligned strictly with your brand identity.",
    spotlight: "Clean, frictionless user flows engineered for maximum lead and sales conversion.",
    metric: "Mobile-First Prototypes",
  },
  {
    step: "03",
    tag: "Phase 03 · Engineering",
    timeline: "1–2 Weeks",
    title: "Dynamic WordPress & JetEngine Builds",
    desc: "Transforming approved designs into clean, semantic code with Elementor Pro, Crocoblock JetEngine, and React/PHP. We build dynamic CPT listings, instant Ajax SmartFilters, custom booking systems, and WooCommerce checkout funnels.",
    icon: Code2,
    deliverables: [
      "Custom CPTs, listings & zero-reload Ajax SmartFilters",
      "WooCommerce single-step checkout funnels & payment gateways",
      "Modular, clean-code architecture with zero plugin bloat",
    ],
    tech: ["WordPress", "Crocoblock JetEngine", "WooCommerce", "PHP / React"],
    highlight: "Engineered for 95+ Core Web Vitals with zero third-party bloat.",
    spotlight: "Custom relational data engines that scale effortlessly without slowing down.",
    metric: "95+ PageSpeed Architecture",
  },
  {
    step: "04",
    tag: "Phase 04 · Automation",
    timeline: "3–5 Days",
    title: "n8n Pipelines & Autonomous AI Agents",
    desc: "Connecting your digital platform directly to your business back-office. We wire self-hosted n8n workflows, OpenAI customer support & lead qualification agents, and bi-directional webhook sync across your CRM, email, WhatsApp, and Slack.",
    icon: Workflow,
    deliverables: [
      "Self-hosted n8n production Docker instance & webhook listeners",
      "OpenAI RAG customer support or autonomous lead-scoring agent",
      "Automated CRM syncing (HubSpot, Airtable, Stripe) & alerts",
    ],
    tech: ["Self-Hosted n8n", "OpenAI API", "Webhooks", "CRM Sync"],
    highlight: "Runs 24/7 hands-off without recurring third-party SaaS fees.",
    spotlight: "Hands-free lead routing, instant notifications, and 24/7 autonomous support.",
    metric: "24/7 Hands-Free Automation",
  },
  {
    step: "05",
    tag: "Phase 05 · Launch & Care",
    timeline: "2–3 Days",
    title: "Speed Audits, Security & 100% Handover",
    desc: "Rigorous cross-browser QA, Redis caching, and Cloudflare security hardening followed by zero-downtime DNS deployment. You receive full Git repository access, credentials, and custom Loom video tutorials showing your team how to manage everything.",
    icon: ShieldCheck,
    deliverables: [
      "95+ Google Lighthouse audit & Redis object caching",
      "Zero-downtime DNS deployment & security hardening",
      "Complete Git & credential transfer with custom Loom video tutorials",
    ],
    tech: ["95+ PageSpeed", "Redis Caching", "Loom Video Guides", "30-Day Warranty"],
    highlight: "You own 100% of all code and credentials on Day 1 — zero lock-in.",
    spotlight: "Day-one repository transfer, zero vendor lock-in, and 30-day bug-fix warranty.",
    metric: "100% Asset Ownership Day 1",
  },
];

const journeyMilestones = [
  {
    year: "2022",
    tag: "Chapter 01 · Agency Foundation",
    title: "Boutique Agency WordPress Engineer",
    desc: "Cut teeth building fast, high-converting WordPress websites for a boutique agency. Mastered Elementor Pro custom widgets, ACF Pro flexible content systems, and high-SKU WooCommerce migrations.",
    icon: Briefcase,
    metric: "12+ Agency Builds Shipped",
    achievements: [
      "Shipped 12+ production client platforms on time",
      "Mastered ACF Pro & Elementor Pro custom widget architecture",
      "Migrated legacy WooCommerce stores with zero revenue downtime",
    ],
    tech: ["WordPress", "Elementor Pro", "WooCommerce", "ACF Pro", "PHP"],
    badge: "Agency Veteran",
    takeaway: "Mastered high-performance Elementor Pro and WooCommerce migrations before founding the solo studio.",
  },
  {
    year: "2023",
    tag: "Chapter 02 · Independence",
    title: "Launched Independent Solo Studio",
    desc: "Went solo — built specifically for founders who want senior-level execution without agency overhead or junior handoffs. Specialized deeply in Crocoblock JetEngine, relational CPT schemas, dynamic booking platforms, and instant Ajax SmartFilters.",
    icon: Rocket,
    metric: "First 6-Figure Year · 100% JSS",
    achievements: [
      "First 6-figure year working directly with startup founders",
      "Architected complex relational databases with Crocoblock JetEngine",
      "Maintained a verified 100% Job Success Score on Upwork",
    ],
    tech: ["JetEngine", "Dynamic CPTs", "SmartFilters", "JetBooking", "MySQL"],
    badge: "Solo Studio Founder",
    takeaway: "Built solo studio directly for founders wanting senior-level execution without agency overhead.",
  },
  {
    year: "2024",
    tag: "Chapter 03 · Systems",
    title: "Automation Architecture & n8n Pipelines",
    desc: "Recognized that websites need to talk to back-offices. Started deploying self-hosted n8n instances and webhook orchestration pipelines alongside every build, connecting CRMs, form submissions, payment events, and WhatsApp messaging.",
    icon: Workflow,
    metric: "40+ Production Workflows Live",
    achievements: [
      "Engineered 40+ self-hosted n8n automation pipelines",
      "Eliminated 20+ hours/week of manual client data entry",
      "Bi-directional webhook sync across HubSpot, Airtable, and Stripe",
    ],
    tech: ["Self-Hosted n8n", "Webhooks", "REST APIs", "Docker", "CRM Sync"],
    badge: "Automation Architect",
    takeaway: "Pioneered self-hosted n8n pipelines alongside WordPress to eliminate manual back-office tasks.",
  },
  {
    year: "2025",
    tag: "Chapter 04 · Intelligence",
    title: "Production AI Agents & Workflow Automation",
    desc: "Integrated OpenAI LLMs and custom AI agents directly into WordPress and automation stacks. Shipped autonomous lead qualification pipelines, 24/7 RAG customer support bots with human handoff, and automated content operations.",
    icon: Bot,
    metric: "9,000+ AI Actions Handled / Day",
    achievements: [
      "Deployed 24/7 RAG customer support agents with WhatsApp fallback",
      "Autonomous lead scoring & instant calendar qualification workflows",
      "Handling 9,000+ automated AI actions daily with zero manual oversight",
    ],
    tech: ["OpenAI API", "RAG Support Bots", "Lead Scoring", "Vector DBs"],
    badge: "AI Workflow Specialist",
    takeaway: "Brought enterprise LLMs and RAG agents directly into client WordPress and WhatsApp ecosystems.",
  },
  {
    year: "2026",
    tag: "Chapter 05 · Global Scale",
    title: "50+ Shipped Platforms Across 4 Continents",
    desc: "Now trusted by founders, industrial leaders (Canoil Canada), mining enterprises (Guardian Metal Resources PLC), and high-growth stores (Fixion Fuel) across the US, UK, Canada, Europe, and Australia. Delivering senior-level execution with guaranteed 95+ PageSpeed.",
    icon: Trophy,
    metric: "50+ Platforms · 15+ Countries",
    achievements: [
      "Shipped 50+ production platforms across 4 continents",
      "100% Upwork Job Success Score with verified enterprise clients",
      "Guaranteed 95+ PageSpeed & Core Web Vitals on every build",
    ],
    tech: ["Next.js", "WordPress", "Enterprise JetEngine", "Redis", "Security"],
    badge: "Top Rated Specialist",
    takeaway: "Delivering senior-level execution for international founders with 100% Job Success Score.",
  },
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
  const [activeTab, setActiveTab] = useState<"process" | "journey">("process");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 overflow-hidden border-t border-border/60">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <Reveal className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary mb-4 border border-primary/20">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand animate-pulse" />
            {activeTab === "process" ? "Proven 5-Stage Delivery Process" : "The Solo Studio Journey"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            {activeTab === "process" ? (
              <>
                How I work with founders: <span className="text-gradient">Blueprint to launch</span>
              </>
            ) : (
              <>
                From agency roots to <span className="text-gradient">50+ shipped platforms</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            {activeTab === "process"
              ? "Built specifically for founders who want senior-level execution without agency overhead. You talk directly with the engineer who designs the architecture, writes the code, and builds the automations."
              : "Four years, four continents, one obsession — building high-performance WordPress platforms and autonomous AI pipelines that scale quietly."}
          </p>

          {/* Interactive Mode Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-2xl glass border border-border/80 shadow-soft">
            <button
              type="button"
              onClick={() => setActiveTab("process")}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition-all ${
                activeTab === "process"
                  ? "bg-gradient-brand text-white shadow-elegant scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              <Zap className="h-4 w-4" />
              <span>How I Work (5-Step Process)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("journey")}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition-all ${
                activeTab === "journey"
                  ? "bg-gradient-brand text-white shadow-elegant scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              <Rocket className="h-4 w-4" />
              <span>Growth Journey (2022–2026)</span>
            </button>
          </div>

          {/* Quick Pillars Strip (Shown on Process tab) */}
          {activeTab === "process" && (
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="glass rounded-xl p-3 border border-border/60 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                <div className="text-xs font-semibold text-foreground/90">Direct Founder Access</div>
              </div>
              <div className="glass rounded-xl p-3 border border-border/60 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                <div className="text-xs font-semibold text-foreground/90">Fixed Sprint Milestones</div>
              </div>
              <div className="glass rounded-xl p-3 border border-border/60 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                <div className="text-xs font-semibold text-foreground/90">95+ PageSpeed Target</div>
              </div>
              <div className="glass rounded-xl p-3 border border-border/60 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                <div className="text-xs font-semibold text-foreground/90">100% Asset Ownership</div>
              </div>
            </div>
          )}
        </Reveal>

        {/* Central Connected Timeline / Stepper */}
        <div ref={ref} className="relative mt-12">
          {/* Central Vertical Rail */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border/70" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 w-px bg-gradient-to-b from-primary via-secondary to-accent shadow-[0_0_12px_var(--primary)]"
          />

          {/* TAB 1: HOW I WORK (DELIVERY PROCESS) */}
          {activeTab === "process" && (
            <div className="space-y-12 md:space-y-20">
              {deliveryProcess.map((p, i) => {
                const Icon = p.icon;
                const left = i % 2 === 0;
                return (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: 0.05 }}
                    className="relative"
                  >
                    {/* Center Node Badge on the rail */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-20">
                      <div className="relative">
                        <span className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse" />
                        <span className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-elegant ring-4 ring-background">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                    </div>

                    {/* Two Column Grid */}
                    <div className="grid md:grid-cols-2 items-center gap-6 md:gap-0">
                      {/* Left Column */}
                      {left ? (
                        /* Left Column: Full Deliverables Card */
                        <div className="pl-20 md:pl-0 md:pr-12 lg:pr-16 text-left">
                          <div className="group relative rounded-3xl card-glass p-7 md:p-8 hover-lift border border-border/80 hover:border-primary/40 transition-all">
                            <div className="flex items-center justify-between gap-2 mb-4">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                {p.tag}
                              </span>
                              <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 bg-muted/60 px-2.5 py-0.5 rounded-md border border-border/40">
                                <Clock className="h-3.5 w-3.5 text-primary" />
                                {p.timeline}
                              </span>
                            </div>

                            <div className="font-mono text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                              STEP {p.step}
                            </div>
                            <h3 className="font-display text-xl md:text-2xl font-bold mt-1 text-foreground">
                              {p.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                              {p.desc}
                            </p>

                            <div className="mt-5 pt-4 border-t border-border/60">
                              <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-2.5">
                                Key Deliverables
                              </div>
                              <ul className="space-y-1.5">
                                {p.deliverables.map((d) => (
                                  <li key={d} className="flex items-start gap-2 text-xs text-foreground/85">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{d}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
                              {p.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] font-medium rounded-md bg-muted/80 px-2.5 py-0.5 text-muted-foreground border border-border/40"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Left Column: Phase Spotlight Card (Desktop) */
                        <div className="hidden md:flex flex-col items-end pr-12 lg:pr-16 text-right">
                          <div className="glass rounded-3xl p-7 border border-primary/15 max-w-md w-full shadow-soft hover-lift">
                            <div className="font-display text-6xl font-black text-gradient tabular-nums opacity-90 leading-none">
                              {p.step}
                            </div>
                            <div className="mt-3 text-sm font-semibold text-foreground/90">
                              {p.spotlight}
                            </div>
                            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                              <Sparkles className="h-3.5 w-3.5" />
                              {p.metric}
                            </div>
                            <div className="mt-3 text-[11px] text-muted-foreground">
                              {p.highlight}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Right Column */}
                      {left ? (
                        /* Right Column: Phase Spotlight Card (Desktop) */
                        <div className="hidden md:flex flex-col items-start pl-12 lg:pl-16 text-left">
                          <div className="glass rounded-3xl p-7 border border-primary/15 max-w-md w-full shadow-soft hover-lift">
                            <div className="font-display text-6xl font-black text-gradient tabular-nums opacity-90 leading-none">
                              {p.step}
                            </div>
                            <div className="mt-3 text-sm font-semibold text-foreground/90">
                              {p.spotlight}
                            </div>
                            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                              <Sparkles className="h-3.5 w-3.5" />
                              {p.metric}
                            </div>
                            <div className="mt-3 text-[11px] text-muted-foreground">
                              {p.highlight}
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Right Column: Full Deliverables Card */
                        <div className="pl-20 md:pl-12 lg:pl-16 text-left">
                          <div className="group relative rounded-3xl card-glass p-7 md:p-8 hover-lift border border-border/80 hover:border-primary/40 transition-all">
                            <div className="flex items-center justify-between gap-2 mb-4">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                {p.tag}
                              </span>
                              <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 bg-muted/60 px-2.5 py-0.5 rounded-md border border-border/40">
                                <Clock className="h-3.5 w-3.5 text-primary" />
                                {p.timeline}
                              </span>
                            </div>

                            <div className="font-mono text-xs font-bold text-muted-foreground/60 uppercase tracking-widest">
                              STEP {p.step}
                            </div>
                            <h3 className="font-display text-xl md:text-2xl font-bold mt-1 text-foreground">
                              {p.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                              {p.desc}
                            </p>

                            <div className="mt-5 pt-4 border-t border-border/60">
                              <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-2.5">
                                Key Deliverables
                              </div>
                              <ul className="space-y-1.5">
                                {p.deliverables.map((d) => (
                                  <li key={d} className="flex items-start gap-2 text-xs text-foreground/85">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{d}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
                              {p.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] font-medium rounded-md bg-muted/80 px-2.5 py-0.5 text-muted-foreground border border-border/40"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* TAB 2: THE JOURNEY (2022–2026 EVOLUTION) */}
          {activeTab === "journey" && (
            <div className="space-y-12 md:space-y-20">
              {journeyMilestones.map((t, i) => {
                const Icon = t.icon;
                const left = i % 2 === 0;
                return (
                  <motion.div
                    key={t.year}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: 0.05 }}
                    className="relative"
                  >
                    {/* Center Node Badge on the rail */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 z-20">
                      <div className="relative">
                        <span className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-pulse" />
                        <span className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-elegant ring-4 ring-background">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                    </div>

                    {/* Two Column Grid */}
                    <div className="grid md:grid-cols-2 items-center gap-6 md:gap-0">
                      {/* Left Column */}
                      {left ? (
                        /* Left Column: Narrative Card */
                        <div className="pl-20 md:pl-0 md:pr-12 lg:pr-16 text-left">
                          <div className="group relative rounded-3xl card-glass p-7 md:p-8 hover-lift border border-border/80 hover:border-primary/40 transition-all">
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                {t.tag}
                              </span>
                              <span className="text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                                {t.metric}
                              </span>
                            </div>

                            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                              {t.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                              {t.desc}
                            </p>

                            <div className="mt-5 pt-4 border-t border-border/60">
                              <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-2.5">
                                Verified Achievements
                              </div>
                              <ul className="space-y-1.5">
                                {t.achievements.map((a) => (
                                  <li key={a} className="flex items-start gap-2 text-xs text-foreground/85">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{a}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
                              {t.tech.map((s) => (
                                <span
                                  key={s}
                                  className="text-[10px] font-medium rounded-md bg-muted/80 px-2.5 py-0.5 text-muted-foreground border border-border/40"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Left Column: Milestone Impact Card (Desktop) */
                        <div className="hidden md:flex flex-col items-end pr-12 lg:pr-16 text-right">
                          <div className="glass rounded-3xl p-7 border border-primary/15 max-w-md w-full shadow-soft hover-lift">
                            <div className="font-display text-6xl font-black text-gradient tabular-nums opacity-90 leading-none">
                              {t.year}
                            </div>
                            <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                              <Sparkles className="h-3.5 w-3.5" />
                              {t.badge}
                            </div>
                            <div className="mt-4 text-sm font-semibold text-foreground/90">
                              "{t.takeaway}"
                            </div>
                            <div className="mt-3 text-xs text-muted-foreground font-mono">
                              {t.metric}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Right Column */}
                      {left ? (
                        /* Right Column: Milestone Impact Card (Desktop) */
                        <div className="hidden md:flex flex-col items-start pl-12 lg:pl-16 text-left">
                          <div className="glass rounded-3xl p-7 border border-primary/15 max-w-md w-full shadow-soft hover-lift">
                            <div className="font-display text-6xl font-black text-gradient tabular-nums opacity-90 leading-none">
                              {t.year}
                            </div>
                            <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                              <Sparkles className="h-3.5 w-3.5" />
                              {t.badge}
                            </div>
                            <div className="mt-4 text-sm font-semibold text-foreground/90">
                              "{t.takeaway}"
                            </div>
                            <div className="mt-3 text-xs text-muted-foreground font-mono">
                              {t.metric}
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Right Column: Narrative Card */
                        <div className="pl-20 md:pl-12 lg:pl-16 text-left">
                          <div className="group relative rounded-3xl card-glass p-7 md:p-8 hover-lift border border-border/80 hover:border-primary/40 transition-all">
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                {t.tag}
                              </span>
                              <span className="text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                                {t.metric}
                              </span>
                            </div>

                            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                              {t.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                              {t.desc}
                            </p>

                            <div className="mt-5 pt-4 border-t border-border/60">
                              <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-2.5">
                                Verified Achievements
                              </div>
                              <ul className="space-y-1.5">
                                {t.achievements.map((a) => (
                                  <li key={a} className="flex items-start gap-2 text-xs text-foreground/85">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{a}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap gap-1.5">
                              {t.tech.map((s) => (
                                <span
                                  key={s}
                                  className="text-[10px] font-medium rounded-md bg-muted/80 px-2.5 py-0.5 text-muted-foreground border border-border/40"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* End cap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center mt-12"
          >
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 -top-4 h-4 w-4 rounded-full bg-gradient-brand shadow-[0_0_20px_var(--primary)]" />
            <span className="ml-16 md:ml-0 mt-4 inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-xs font-semibold text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {activeTab === "process"
                ? "Every project backed by a 30-day post-launch warranty"
                : "Next chapter — maybe with you"}
            </span>
          </motion.div>
        </div>

        {/* Bottom Founder Commitment Banner */}
        <Reveal className="mt-16">
          <div className="rounded-3xl glass p-8 md:p-10 border border-primary/20 shadow-glow flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <img
                src="/author-emran.png"
                alt="Emran Raj"
                className="h-16 w-16 md:h-20 md:w-20 rounded-2xl object-cover shadow-elegant ring-2 ring-primary/40 shrink-0"
              />
              <div>
                <div className="font-display text-xl md:text-2xl font-bold tracking-tight">
                  Work directly with a senior specialist.
                </div>
                <p className="mt-1 text-sm text-muted-foreground max-w-xl">
                  No junior developers, no middle-management telephone game. Just reliable WordPress engineering and AI automation that delivers.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-all"
              >
                Discuss Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.upwork.com/freelancers/~015c9f89118b7be509"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/40 transition-all"
              >
                Hire on Upwork <ExternalLink className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
