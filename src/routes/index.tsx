import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Zap, Bot, Layers, Rocket, Shield, Gauge,
  Workflow, Code2, ShoppingBag, Boxes, Wand2, Star, ChevronDown,
  CheckCircle2, Globe, Cpu, Database, Webhook, Mail, MessageSquare,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { useState } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emran Raj — WordPress Development & AI Automation Studio" },
      {
        name: "description",
        content:
          "Freelance WordPress developer & AI automation specialist. Build faster, automate smarter, and scale with n8n, OpenAI and modern WordPress stacks.",
      },
      { property: "og:title", content: "Emran Raj — Build Faster. Automate Smarter." },
      { property: "og:description", content: "Premium WordPress development and AI automation for ambitious teams." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const techBadges = ["WordPress", "Elementor", "WooCommerce", "JetEngine", "n8n", "OpenAI", "Webhook", "REST API"];

const services = [
  { icon: Code2, title: "WordPress Development", desc: "Custom themes and blocks built for speed, SEO and long-term maintainability." },
  { icon: ShoppingBag, title: "WooCommerce Stores", desc: "Conversion-obsessed storefronts with tuned checkout and payment flows." },
  { icon: Boxes, title: "JetEngine Dynamic Sites", desc: "Complex directories, listings and CPT-driven experiences with Crocoblock." },
  { icon: Workflow, title: "n8n Automation", desc: "Self-hosted workflows that connect your CRM, email, WhatsApp and more." },
  { icon: Bot, title: "AI Workflows", desc: "OpenAI-powered agents that qualify leads, draft replies and score deals." },
  { icon: Gauge, title: "Speed & SEO", desc: "Core Web Vitals in the green with technical SEO baked in from day one." },
];

const process = [
  { n: "01", t: "Discovery", d: "Deep dive into goals, users and success metrics." },
  { n: "02", t: "Planning", d: "Sitemap, tech stack and delivery roadmap you can trust." },
  { n: "03", t: "Design", d: "Conversion-focused UI aligned with your brand." },
  { n: "04", t: "Development", d: "Clean, semantic, performant code — no bloat." },
  { n: "05", t: "Automation", d: "n8n + AI workflows wired into your stack." },
  { n: "06", t: "Testing", d: "Cross-device QA, accessibility and performance audits." },
  { n: "07", t: "Launch", d: "Zero-downtime deployment with analytics dialed in." },
  { n: "08", t: "Support", d: "Ongoing care plans and iteration cycles." },
];

const stack = [
  "WordPress", "Elementor", "WooCommerce", "JetEngine", "Crocoblock",
  "PHP", "JavaScript", "CSS", "Tailwind", "React",
  "Node.js", "REST API", "Webhook", "n8n", "OpenAI", "GitHub",
];

const testimonials = [
  {
    name: "Sarah Whitfield",
    role: "Founder, Lumen Health",
    quote: "Our booking system used to eat 10 hours a week. Emran automated the entire pipeline in two weeks — and the site loads twice as fast.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    initials: "SW",
  },
  {
    name: "Marcus Rivera",
    role: "COO, Northwind Realty",
    quote: "The JetEngine listings site is a machine. Leads flow straight into our CRM with AI-scored priority. We closed 3 extra deals in the first month.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    initials: "MR",
  },
  {
    name: "Priya Anand",
    role: "CEO, Copperleaf Studio",
    quote: "Every agency promised speed. Emran actually delivered a 96 PageSpeed score and rebuilt our checkout in a weekend.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
    initials: "PA",
  },
  {
    name: "Daniel Okafor",
    role: "Founder, Tessera Learning",
    quote: "The LMS + AI grading workflow is a game changer. Students get instant feedback, tutors get their evenings back.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    initials: "DO",
  },
];

const projects = [
  {
    title: "Lumen Health Booking Platform",
    cat: "Healthcare",
    tech: ["WordPress", "JetBooking", "n8n"],
    result: "72% fewer no-shows",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Northwind Realty Listings",
    cat: "Real Estate",
    tech: ["JetEngine", "Elementor", "OpenAI"],
    result: "3.2x qualified leads",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Copperleaf Checkout Rebuild",
    cat: "Ecommerce",
    tech: ["WooCommerce", "Stripe", "Cloudflare"],
    result: "+41% conversion",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
  },
];

const faqs = [
  { q: "How long does a typical WordPress project take?", a: "Most marketing sites ship in 3–5 weeks. Complex JetEngine builds or WooCommerce stores usually take 6–10 weeks depending on scope and content readiness." },
  { q: "Do you build with page builders or custom code?", a: "Both — the right tool for the job. Elementor and Crocoblock when they earn their keep, hand-coded blocks and templates when performance or complexity demands it." },
  { q: "What kind of automations can you build with n8n?", a: "Lead capture, CRM sync, AI chat support, invoice generation, appointment booking, WhatsApp workflows, order processing, customer follow-ups — anything with an API can talk to anything else." },
  { q: "Do you work with international clients?", a: "Yes. Most of my clients are in the US, EU, UK and Australia. Async-friendly workflow with weekly video syncs." },
  { q: "Can you integrate AI into an existing WordPress site?", a: "Absolutely. I add OpenAI-powered features — smart search, content generation, lead scoring, chat support — without rebuilding your site." },
  { q: "Do you offer ongoing maintenance?", a: "Yes. Care plans include core/plugin updates, security patching, backups, uptime monitoring and monthly performance reports." },
  { q: "What's your pricing model?", a: "Fixed-price for defined scope, retainers for automation ops, and hourly for exploratory work. Full pricing on the Pricing page." },
  { q: "Do you migrate existing websites?", a: "Yes — including tricky WooCommerce and membership migrations with zero downtime and full 301 redirect mapping." },
  { q: "Will I own everything at the end?", a: "100%. Code, credentials, workflows, documentation — it all lives in your accounts from day one." },
  { q: "What if I only need automation, not a website?", a: "Perfect. Automation-only engagements start at a Discovery Call to map your workflows and quote a fixed sprint." },
];

const articles = [
  {
    title: "Why WordPress + n8n Beats Custom SaaS for 90% of Businesses",
    tag: "Automation",
    date: "Jun 12, 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "The Core Web Vitals Playbook for WooCommerce in 2026",
    tag: "SEO",
    date: "May 28, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Building AI Lead Scoring with OpenAI and Fluent CRM",
    tag: "AI",
    date: "May 09, 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
];

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <Services />
      <FeaturedProjects />
      <AutomationShowcase />
      <Process />
      <TechStack />
      <Testimonials />
      <FAQ />
      <LatestArticles />
      <CTASection />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-40 h-96 w-96 rounded-full bg-secondary/30 blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/25 blur-3xl animate-blob" style={{ animationDelay: "-8s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              WordPress Development · AI Automation
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              Build Faster.<br />
              Automate Smarter.<br />
              <span className="text-gradient">Scale Your Business.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl"
            >
              I help businesses build high-performance WordPress websites and
              automate repetitive workflows with AI, n8n and modern APIs — so your
              team ships more and drags less.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-shadow">
                Start Your Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold hover:bg-muted transition-colors">
                View My Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground"
            >
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 50+ projects delivered</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 4+ years experience</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 100% client satisfaction</span>
            </motion.div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0"
    >
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-brand opacity-30 blur-3xl" />
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-10 rounded-full bg-gradient-brand opacity-20 blur-3xl"
      />

      <div className="relative gradient-border rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/5] bg-gradient-brand">
        <img
          src={heroPortrait}
          alt="Freelance WordPress Developer and AI Automation Specialist"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-accent/20 mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/70">Available for new projects</div>
            <div className="mt-1 font-display text-xl sm:text-2xl font-bold text-white leading-tight">
              WordPress Dev · AI Automation
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full glass px-2.5 py-1 text-[10px] font-semibold text-white">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            LIVE
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
        className="hidden sm:flex absolute -left-6 top-16 items-center gap-2 rounded-xl glass shadow-elegant px-3 py-2"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white">
          <Zap className="h-4 w-4" />
        </span>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Speed</div>
          <div className="text-xs font-semibold">98 PageSpeed</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.6 }}
        className="hidden sm:flex absolute -left-8 bottom-24 items-center gap-2 rounded-xl glass shadow-elegant px-3 py-2"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white">
          <Workflow className="h-4 w-4" />
        </span>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">n8n Flows</div>
          <div className="text-xs font-semibold">128 active</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden sm:flex absolute -right-6 top-28 items-center gap-2 rounded-xl glass shadow-elegant px-3 py-2"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white">
          <Bot className="h-4 w-4" />
        </span>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">AI Actions</div>
          <div className="text-xs font-semibold">9.4k / 24h</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.35, duration: 0.6 }}
        className="hidden sm:flex absolute -right-8 bottom-10 items-center gap-2 rounded-xl glass shadow-elegant px-3 py-2"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white">
          <Shield className="h-4 w-4" />
        </span>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Secure</div>
          <div className="text-xs font-semibold">SSL · WAF · Backups</div>
        </div>
      </motion.div>
    </motion.div>
  );
}


function TrustBar() {
  const stats = [
    { n: 50, s: "+", l: "Projects Delivered" },
    { n: 100, s: "%", l: "Client Satisfaction" },
    { n: 4, s: "+", l: "Years Experience" },
    { n: 24, s: "h", l: "Avg. Response Time" },
  ];
  return (
    <section className="border-y border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trusted by businesses worldwide
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center opacity-70 mb-14">
          {["LUMEN", "NORTHWIND", "COPPERLEAF", "TESSERA", "HELIOS", "AURORA"].map((l) => (
            <div key={l} className="text-center font-display text-lg font-bold tracking-widest text-muted-foreground">
              {l}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="card-glass rounded-2xl p-6 text-center hover-lift">
                <div className="font-display text-4xl font-bold text-gradient">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Services</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need to <span className="text-gradient">ship and scale</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From pixel-perfect WordPress builds to AI-driven automation, one specialist covers the whole stack.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const isN8n = s.title === "n8n Automation";
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group relative h-full rounded-2xl card-glass p-8 hover-lift">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-brand transition-opacity ${isN8n ? "opacity-10" : "opacity-0 group-hover:opacity-10"}`} />
                  <div className="relative">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-elegant">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section className="py-24 bg-surface/40 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Case Studies</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Recent work, real results
            </h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-semibold hover:bg-muted w-fit">
            All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group h-full rounded-2xl overflow-hidden card-glass hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white/95 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm px-2.5 py-1 rounded-md bg-black/40">
                    {p.cat}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[11px] rounded-md bg-muted px-2 py-0.5 text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gradient font-semibold">{p.result}</span>
                    <Link to="/projects" className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                      Case study <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AutomationShowcase() {
  const flow = [
    { icon: Zap, label: "Trigger" },
    { icon: Webhook, label: "Webhook" },
    { icon: Workflow, label: "n8n" },
    { icon: Bot, label: "OpenAI" },
    { icon: Database, label: "CRM" },
    { icon: Mail, label: "Email" },
    { icon: MessageSquare, label: "Slack" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Automation</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Workflows that <span className="text-gradient">work while you sleep</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every repetitive task is an automation waiting to happen. Here's how a lead becomes a booked call — end to end, hands off.
          </p>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl card-glass p-6 lg:p-10 shadow-soft">
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
              {flow.map((f, i) => (
                <div key={f.label} className="flex items-center gap-3 lg:gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-elegant">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">{f.label}</span>
                  </div>
                  {i < flow.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 text-center">
          <Link to="/services/automation" className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant hover:shadow-glow">
            Explore Automation Solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 bg-surface/40 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">My Process</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            A clear path from <span className="text-gradient">idea to launch</span>
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <div className="relative h-full rounded-2xl card-glass p-6 hover-lift">
                <div className="font-display text-4xl font-bold text-gradient/70 opacity-40">{p.n}</div>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Technology Stack</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Battle-tested tools, <span className="text-gradient">no fluff</span>
          </h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3">
          {stack.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              className="card-glass rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors cursor-default"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-surface/40 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Testimonials</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Clients who <span className="text-gradient">shipped and scaled</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="h-full card-glass rounded-2xl p-8 hover-lift">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-base leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">FAQ</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Questions, <span className="text-gradient">answered</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.02}>
              <div className="card-glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground animate-fade-up">{f.a}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestArticles() {
  return (
    <section className="py-24 bg-surface/40 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Journal</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Latest articles
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-semibold hover:bg-muted w-fit">
            Visit blog <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <Link to="/blog" className="group block h-full rounded-2xl overflow-hidden card-glass hover-lift">
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 text-primary px-3 py-1 text-[11px] font-semibold backdrop-blur-md">{a.tag}</span>
                </div>
                <div className="p-6">
                  <div className="text-xs text-muted-foreground">{a.date}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 lg:p-16 text-white shadow-elegant">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                  Ready to build something that actually converts?
                </h2>
                <p className="mt-4 text-white/85 max-w-lg">
                  Book a 30-minute discovery call. No pitch deck, no pressure — just a real conversation about your goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <Link to="/book-call" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-primary px-6 py-3.5 text-sm font-semibold hover:bg-white/95">
                  <Rocket className="h-4 w-4" /> Book Discovery Call
                </Link>
                <Link to="/pricing" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold hover:bg-white/10">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
