import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Sparkles, Zap, Bot, Layers, Rocket, Shield, Gauge,
  Workflow, Code2, ShoppingBag, Boxes, Wand2, Star, ChevronDown,
  CheckCircle2, Globe, Cpu, Database, Webhook, Mail, MessageSquare, ExternalLink,
  Search, Clock, ShieldCheck,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { useState } from "react";

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
  {
    icon: Code2,
    title: "Full-Stack Web Apps",
    desc: "Custom web applications and modern websites built with React, Next.js, and clean code — fast, scalable, and zero bloat.",
    to: "/services/full-stack",
  },
  {
    icon: Layers,
    title: "WordPress & Elementor",
    desc: "Pixel-perfect, high-performance WordPress sites built with Elementor or custom blocks so your team can easily manage content.",
    to: "/services/wordpress",
  },
  {
    icon: Boxes,
    title: "JetEngine Dynamic Sites",
    desc: "Complex directories, custom post types (CPTs), booking engines, and advanced listing platforms powered by Crocoblock.",
    to: "/services/jetengine",
  },
  {
    icon: ShoppingBag,
    title: "WooCommerce & Stores",
    desc: "Conversion-optimized online stores with frictionless checkout, tuned payment gateways, and automated order handling.",
    to: "/services/woocommerce",
  },
  {
    icon: Workflow,
    title: "n8n Workflow Automation",
    desc: "Self-hosted automated pipelines connecting your CRM, email, WhatsApp, and forms to eliminate repetitive busywork.",
    to: "/services/automation",
  },
  {
    icon: Bot,
    title: "AI Workflows & Agents",
    desc: "Practical OpenAI and custom AI agents that qualify leads, draft smart replies, and handle repetitive tasks 24/7.",
    to: "/services/ai-agents",
  },
];

const processSteps = [
  {
    n: "01",
    tag: "Phase 01 · Strategy",
    timeline: "2–4 Days",
    title: "Discovery & System Architecture",
    desc: "A focused 1-on-1 strategy session to audit business goals, relational data structures, user flows, and automation bottlenecks. You receive a complete technical specification before writing a single line of code.",
    icon: Search,
    deliverables: [
      "Relational database schema & Custom Post Types map",
      "Full-stack tech stack & automation pipeline diagram",
      "Fixed-price scope, milestones & transparent roadmap",
    ],
    tech: ["Database Schema", "CPT Blueprint", "Automation Flow"],
    highlight: "Direct founder-to-founder consultation with zero agency fluff.",
  },
  {
    n: "02",
    tag: "Phase 02 · Design",
    timeline: "3–7 Days",
    title: "High-Converting UI/UX & Prototyping",
    desc: "Translating wireframes into modern, pixel-perfect user interfaces built to convert. Every layout is crafted mobile-first, ensuring high contrast, intuitive navigation, frictionless checkout paths, and seamless micro-interactions.",
    icon: Layers,
    deliverables: [
      "Mobile-first responsive layouts & design tokens",
      "Conversion-optimized funnels & call-to-action paths",
      "Interactive staging sandbox for collaborative review",
    ],
    tech: ["Figma Tokens", "Tailwind Design System", "Conversion UX"],
    highlight: "100% custom UI aligned precisely with your brand identity.",
  },
  {
    n: "03",
    tag: "Phase 03 · Engineering",
    timeline: "1–2 Weeks",
    title: "Dynamic WordPress & Full-Stack Builds",
    desc: "Pixel-perfect development using Elementor Pro, Crocoblock JetEngine, and clean React/PHP code. We build custom post types, relational data queries, zero-reload Ajax SmartFilters, and WooCommerce 1-click checkouts — with zero plugin bloat.",
    icon: Code2,
    deliverables: [
      "Dynamic CPTs, listings & instant Ajax SmartFilters",
      "WooCommerce frictionless single-step checkout funnels",
      "Clean, semantic, modular code built for long-term scale",
    ],
    tech: ["WordPress", "JetEngine", "WooCommerce", "PHP / React"],
    highlight: "Engineered for 95+ PageSpeed with zero third-party bloat.",
  },
  {
    n: "04",
    tag: "Phase 04 · Automation",
    timeline: "3–5 Days",
    title: "n8n Pipelines & Production AI Agents",
    desc: "Connecting your digital platform directly into your business back-office. We wire self-hosted n8n workflows, OpenAI customer support & lead qualification agents, and bi-directional webhook sync across your CRM, email, WhatsApp, and Slack.",
    icon: Workflow,
    deliverables: [
      "Self-hosted n8n automation container & webhook listeners",
      "OpenAI RAG chatbot or autonomous lead-scoring agent",
      "Automated CRM syncing (HubSpot/Airtable/Stripe) & alerts",
    ],
    tech: ["n8n Self-Hosted", "OpenAI Agents", "Webhooks", "CRM Sync"],
    highlight: "Runs 24/7 hands-off without recurring third-party SaaS fees.",
  },
  {
    n: "05",
    tag: "Phase 05 · QA & Launch",
    timeline: "2–3 Days",
    title: "Speed Audits, Security & Zero-Downtime Launch",
    desc: "Comprehensive cross-browser, cross-device testing across 25+ viewports. We tune Core Web Vitals, implement Redis object caching, configure Cloudflare SSL/security, and execute a zero-downtime production deployment.",
    icon: Gauge,
    deliverables: [
      "95+ Google Lighthouse & PageSpeed optimization",
      "Full security hardening, spam shield & Cloudflare setup",
      "Zero-downtime DNS propagation & analytics tracking",
    ],
    tech: ["Core Web Vitals", "Redis Caching", "Cloudflare", "SEO Schema"],
    highlight: "Guaranteed 95+ PageSpeed score and zero downtime during switchover.",
  },
  {
    n: "06",
    tag: "Phase 06 · Handover",
    timeline: "Ongoing",
    title: "100% Asset Handover & 30-Day Launch Care",
    desc: "You own everything from day one — source code, database credentials, workflows, and documentation. I provide tailored Loom video tutorials showing you and your team how to operate everything effortlessly, backed by 30 days of complimentary support.",
    icon: ShieldCheck,
    deliverables: [
      "Full Git repository, admin credentials & n8n keys transfer",
      "Custom Loom video training library for your team",
      "30 days of post-launch bug fixing & priority care",
    ],
    tech: ["100% Asset Ownership", "Loom Video Library", "30-Day Warranty"],
    highlight: "You own all code and credentials on day one — no vendor lock-in.",
  },
];

const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS",
  "WordPress", "Elementor", "JetEngine", "Crocoblock", "WooCommerce",
  "REST APIs", "Webhooks", "n8n", "OpenAI", "PostgreSQL", "PHP", "Git & GitHub",
];

const testimonials = [
  {
    name: "Dr. Gamil Alhakimi",
    role: "President",
    domain: "canoilcanadaltd.com",
    url: "https://canoilcanadaltd.com/",
    platform: "Upwork Verified",
    quote: "Excellent freelancer to work with. Very professional, responsive, and reliable throughout the project. The quality of work was strong, communication was clear, and feedback was incorporated quickly and effectively. They were easy to collaborate with and showed good attention to detail. I would be happy to work with them again and would highly recommend them to others.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
    initials: "GA",
  },
  {
    name: "Rik Bakker",
    role: "Owner",
    domain: "warmtepompexpert-utrecht.nl",
    url: "https://warmtepompexpert-utrecht.nl/",
    platform: "Upwork Verified",
    quote: "Working with Emran was an excellent experience from start to finish. He is professional, friendly, patient, and extremely skilled in WordPress and Elementor. He understood my vision immediately and delivered high-quality results.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    initials: "RB",
  },
  {
    name: "Daniel Solis",
    role: "Owner",
    domain: "fixionfuel.shop",
    url: "https://fixionfuel.shop/",
    platform: "Upwork Verified",
    quote: "Emran did a fantastic job designing our website. Very responsive and helpful. Highly recommend.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    initials: "DS",
  },
  {
    name: "Liang Tung",
    role: "Project Coordinator",
    domain: "amazonresourceslimited.com",
    url: "https://amazonresourceslimited.com/",
    platform: "Upwork Verified",
    quote: "This is my second time working with Emran. He is consistently professional, efficient, and great at development. He understands requirements perfectly and delivers high-quality work on time. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    initials: "LT",
  },
  {
    name: "Oliver Butt",
    role: "Owner",
    domain: "guardianmetalresources.com",
    url: "https://guardianmetalresources.com",
    platform: "Upwork Verified",
    quote: "Emran did a fantastic job with my WordPress project. He is professional, highly skilled, and very reliable. I highly recommend him to anyone looking for top-tier web development.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
    initials: "OB",
  },
  {
    name: "Anika Russel",
    role: "Owner",
    domain: "hearclearmobile.com",
    url: "https://hearclearmobile.com",
    platform: "Upwork Verified",
    quote: "He understood the brief fully, worked hard to meet deadlines, suggested improvements to my ideas, solved unexpected issues along the way and was very friendly. Would hire again!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    initials: "AR",
  },
];

const projects = [
  {
    title: "Canoil Canada Industrial Platform",
    cat: "Business",
    tech: ["WordPress", "Elementor", "B2B Catalog"],
    result: "3.5x quote inquiries",
    image: "/projects/canoil.png",
    url: "https://canoilcanadaltd.com/",
  },
  {
    title: "Guardian Metal Resources PLC",
    cat: "Corporate",
    tech: ["WordPress", "Elementor Pro", "Financial APIs"],
    result: "100% compliance",
    image: "/projects/guardianmetal.png",
    url: "https://guardianmetalresources.com",
  },
  {
    title: "Fixion Fuel Research Store",
    cat: "Ecommerce",
    tech: ["WooCommerce", "WordPress", "Stripe"],
    result: "+44% conversion",
    image: "/projects/fixionfuel.png",
    url: "https://fixionfuel.shop/",
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
    slug: "why-wordpress-n8n-beats-custom-saas",
    title: "Why WordPress + n8n Beats Custom SaaS for 90% of Businesses",
    tag: "Automation",
    date: "Jun 12, 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "core-web-vitals-playbook-woocommerce-2026",
    title: "The Core Web Vitals Playbook for WooCommerce in 2026",
    tag: "SEO",
    date: "May 28, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "ai-lead-scoring-openai-fluentcrm",
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
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Full-Stack Development · AI Automation
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
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              I build fast, reliable web applications and connect systems with smart AI automations.
              Basically, I handle the technical heavy lifting so you and your team can stop doing
              repetitive busywork and focus on growing your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="https://www.upwork.com/freelancers/~015c9f89118b7be509"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-shadow"
              >
                Hire on Upwork
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
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

          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-[380px] sm:max-w-[390px] mx-auto lg:mr-0 lg:ml-auto"
    >
      {/* Dynamic Ambient Glow Behind Card */}
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-brand opacity-30 blur-2xl pointer-events-none" />
      <motion.div
        animate={{ scale: [1, 1.06, 1], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-8 rounded-full bg-gradient-to-tr from-primary/30 via-secondary/25 to-accent/25 opacity-40 blur-3xl pointer-events-none"
      />

      {/* Main Image Frame */}
      <div className="relative rounded-[2.25rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(37,99,235,0.3)] ring-1 ring-white/30 border border-white/20 aspect-[4/5] bg-gradient-brand group">
        <img
          src="/author-emran.png"
          alt="Emran Raj — Full-Stack Developer & AI Automation Specialist"
          className="absolute inset-0 h-full w-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
          loading="eager"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/15 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

        {/* Top Floating Pill Inside Card */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-slate-950/70 backdrop-blur-xl px-3.5 py-1.5 text-[11px] font-semibold text-white/95 border border-white/15 shadow-lg shadow-black/40">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for new projects
        </div>

        {/* Bottom Glass Info Bar */}
        <div className="absolute inset-x-3.5 bottom-3.5 z-10 rounded-2xl bg-slate-950/75 backdrop-blur-2xl p-3.5 border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-sky-400/90 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Specialist
              </div>
              <div className="font-display text-base font-bold text-white leading-tight mt-0.5">
                Emran Raj
              </div>
            </div>
            <span className="rounded-xl bg-gradient-brand px-3 py-1.5 text-[11px] font-bold text-white shadow-md shadow-primary/25 shrink-0 border border-white/15">
              Full-Stack & AI
            </span>
          </div>
        </div>
      </div>

      {/* Floating Badge 1: Speed (Top-Left) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{ delay: 0.8, duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:flex absolute -left-7 top-10 items-center gap-2.5 rounded-2xl bg-slate-950/80 backdrop-blur-xl px-3.5 py-2 border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] z-20"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-md shadow-primary/25 shrink-0">
          <Zap className="h-4 w-4" />
        </span>
        <div>
          <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Performance</div>
          <div className="text-xs font-bold text-white">98 PageSpeed</div>
        </div>
      </motion.div>

      {/* Floating Badge 2: AI Actions (Top-Right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
        transition={{ delay: 1.0, duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:flex absolute -right-4 lg:-right-3 top-16 items-center gap-2.5 rounded-2xl bg-slate-950/80 backdrop-blur-xl px-3.5 py-2 border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] z-20"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-md shadow-primary/25 shrink-0">
          <Bot className="h-4 w-4" />
        </span>
        <div>
          <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">AI Automated</div>
          <div className="text-xs font-bold text-white">9.4k / 24h</div>
        </div>
      </motion.div>

      {/* Floating Badge 3: n8n Flows (Mid-Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -5, 0] }}
        transition={{ delay: 1.2, duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:flex absolute -left-8 bottom-24 items-center gap-2.5 rounded-2xl bg-slate-950/80 backdrop-blur-xl px-3.5 py-2 border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] z-20"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-md shadow-primary/25 shrink-0">
          <Workflow className="h-4 w-4" />
        </span>
        <div>
          <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Pipelines</div>
          <div className="text-xs font-bold text-white">128 n8n Flows</div>
        </div>
      </motion.div>

      {/* Floating Badge 4: Security / Production (Mid-Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, 5, 0] }}
        transition={{ delay: 1.4, duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:flex absolute -right-4 lg:-right-3 bottom-20 items-center gap-2.5 rounded-2xl bg-slate-950/80 backdrop-blur-xl px-3.5 py-2 border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] z-20"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-md shadow-primary/25 shrink-0">
          <Shield className="h-4 w-4" />
        </span>
        <div>
          <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Production Ready</div>
          <div className="text-xs font-bold text-white">SSL · WAF · 100%</div>
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
            From custom full-stack web apps and advanced WordPress/JetEngine platforms to smart AI automations — everything you need to ship and scale.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const isN8n = s.title.includes("Automation");
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
                    <Link to={s.to} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
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
    <section className="py-24 bg-surface/40 border-y border-border/60 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary mb-4 border border-primary/20">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand animate-pulse" />
            Proven 6-Stage Delivery Framework
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            A transparent path from <span className="text-gradient">blueprint to launch</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Built specifically for founders who want senior-level execution without agency overhead. You work directly with the engineer who architectures the system, writes the code, and builds the automations.
          </p>

          {/* Quick Pillars Strip */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
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
        </Reveal>

        {/* 6 Phased Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.n} delay={i * 0.06}>
                <div className="group relative h-full rounded-3xl card-glass p-7 md:p-8 hover-lift flex flex-col justify-between border border-border/70 hover:border-primary/40 transition-all duration-300">
                  <div className="absolute -inset-0.5 rounded-3xl bg-gradient-brand opacity-0 group-hover:opacity-20 blur-xl transition-opacity pointer-events-none" />

                  <div className="relative">
                    {/* Top Row: Tag & Timeline */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        {p.tag}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 bg-muted/60 px-2.5 py-0.5 rounded-md border border-border/40">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        {p.timeline}
                      </span>
                    </div>

                    {/* Step Icon & Title */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-elegant">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-mono text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">
                          STEP {p.n}
                        </div>
                        <h3 className="font-display text-xl font-bold mt-0.5 leading-snug group-hover:text-primary transition-colors">
                          {p.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mt-6 pt-5 border-t border-border/50">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-3">
                        Key Deliverables
                      </div>
                      <ul className="space-y-2">
                        {p.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-xs text-foreground/85">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="relative mt-6 pt-5 border-t border-border/50">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-medium rounded-md bg-muted/80 px-2.5 py-0.5 text-muted-foreground border border-border/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Founder Guarantee Highlight */}
                    <div className="rounded-xl bg-primary/5 border border-primary/15 p-3 text-[11px] text-foreground/90 font-medium flex items-center gap-2.5">
                      <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span className="leading-tight">{p.highlight}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Founder Commitment Banner */}
        <Reveal className="mt-14" delay={0.3}>
          <div className="rounded-3xl glass p-8 md:p-10 border border-primary/20 shadow-glow flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <img
                src="/author-emran.png"
                alt="Emran Raj"
                className="h-16 w-16 md:h-20 md:w-20 rounded-2xl object-cover shadow-elegant ring-2 ring-primary/40 shrink-0"
              />
              <div>
                <div className="font-display text-xl md:text-2xl font-bold tracking-tight">
                  Ready to ship without the agency overhead?
                </div>
                <p className="mt-1 text-sm text-muted-foreground max-w-xl">
                  Whether you need a high-converting WordPress platform, a dynamic JetEngine relational system, or autonomous n8n workflows — let's review your specs.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-all"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="h-full card-glass rounded-2xl p-8 hover-lift">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {t.platform && (
                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {t.platform}
                    </span>
                  )}
                </div>
                <p className="text-base leading-relaxed text-foreground/90">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-1.5 mt-0.5">
                      <span>{t.role}</span>
                      {t.domain && (
                        <>
                          <span>·</span>
                          {t.url ? (
                            <a
                              href={t.url.startsWith("http") ? t.url : `https://${t.url}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium transition-colors"
                            >
                              {t.domain}
                              <ExternalLink className="h-3 w-3 inline opacity-70" />
                            </a>
                          ) : (
                            <span className="text-primary font-medium">{t.domain}</span>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.upwork.com/freelancers/~015c9f89118b7be509"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-all hover-lift"
          >
            <span>View all reviews on Upwork</span>
            <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
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
              <Link to={`/blog/${a.slug}`} className="group block h-full rounded-2xl overflow-hidden card-glass hover-lift">
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
                <a
                  href="https://www.upwork.com/freelancers/~015c9f89118b7be509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-primary px-6 py-3.5 text-sm font-semibold hover:bg-white/95"
                >
                  <Rocket className="h-4 w-4" /> Hire on Upwork
                </a>
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
