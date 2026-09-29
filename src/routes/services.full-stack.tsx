import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  Code2,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  Database,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Rocket,
  Flame,
  Terminal,
  Server,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/services/full-stack")({
  head: () => ({
    meta: [
      { title: "Full-Stack Web App Development | Emran Raj" },
      {
        name: "description",
        content:
          "Custom full-stack web applications, SaaS dashboards, and modern reactive frontends built with React, Next.js, TypeScript, and clean code. Zero bloat, maximum performance.",
      },
      { property: "og:title", content: "Full-Stack Web App Development | Emran Raj" },
      {
        property: "og:description",
        content: "Custom SaaS platforms and web applications engineered for speed, scale, and conversion.",
      },
      { property: "og:url", content: "/services/full-stack" },
    ],
    links: [{ rel: "canonical", href: "/services/full-stack" }],
  }),
  component: FullStackPage,
});

const capabilities = [
  {
    icon: Terminal,
    title: "Custom SaaS MVPs & Portals",
    desc: "End-to-end web apps from database schemas to interactive client dashboards, user authentication, and subscription billing.",
  },
  {
    icon: Zap,
    title: "Next.js & React Frontend Architecture",
    desc: "Blazing fast server-side rendering (SSR), static generation (SSG), and sub-second page transitions powered by React & Vite.",
  },
  {
    icon: Database,
    title: "Database & Backend Integrations",
    desc: "Scalable data layer integrations with PostgreSQL, Supabase, Redis, and custom RESTful/GraphQL microservice APIs.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Auth & Payments",
    desc: "Bulletproof authentication (OAuth, JWT, NextAuth) with Stripe webhook synchronization, tiered subscriptions, and invoicing.",
  },
  {
    icon: Cpu,
    title: "Modern UI/UX & Motion Systems",
    desc: "Pixel-perfect Tailwind CSS design systems, Framer Motion micro-interactions, dark mode support, and accessible components.",
  },
  {
    icon: Server,
    title: "Edge Deployment & CI/CD",
    desc: "Automated deployment pipelines to Vercel, Cloudflare Pages, or AWS with zero-downtime rollouts and automated testing.",
  },
];

const highlights = [
  { metric: "< 0.8s", label: "Average First Contentful Paint" },
  { metric: "100/100", label: "Core Web Vitals Target" },
  { metric: "Zero Bloat", label: "Modular, Semantic Clean Code" },
  { metric: "Full Ownership", label: "Clean Git Repo & Documentation" },
];

const featuredProjects = [
  {
    title: "Apex Cloud Analytics SaaS",
    category: "SaaS Platform",
    result: "Sub-second initial render",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "ChartJS"],
    url: "https://itsemranraj.com/saas2",
  },
  {
    title: "FinFlow Enterprise Billing",
    category: "Fintech Platform",
    result: "+52% demo request conversion",
    tech: ["React", "Tailwind CSS", "Stripe Elements"],
    url: "https://itsemranraj.com/saas6",
  },
  {
    title: "HyperScale Workflow Engine",
    category: "Developer Tool",
    result: "Zero-latency UI transitions",
    tech: ["React", "Vite", "Tailwind CSS", "Lucide"],
    url: "https://itsemranraj.com/saas4",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Architecture & User Flow",
    desc: "We analyze your product goals, define database models, map API contracts, and draft wireframes for high UX clarity.",
  },
  {
    step: "02",
    title: "Rapid Frontend Sprint",
    desc: "We build responsive, high-fidelity components in React/Next.js with interactive state management and accessible UI.",
  },
  {
    step: "03",
    title: "Backend & Integrations",
    desc: "We hook up databases, authentication providers, payment webhooks, and third-party API pipelines.",
  },
  {
    step: "04",
    title: "Audits, QA & Cloud Launch",
    desc: "Lighthouse optimization, end-to-end user testing, edge caching setup, and handoff with complete documentation.",
  },
];

const faqs = [
  {
    q: "Why choose custom React/Next.js instead of WordPress?",
    a: "If your product requires complex client-side state, real-time analytics, user dashboards, custom SaaS logic, or proprietary algorithms, React/Next.js provides unmatched performance, full architectural control, and infinite scalability without CMS overhead.",
  },
  {
    q: "Do I get full ownership of the source code?",
    a: "100% yes. All code is pushed directly to your private GitHub repository with clean commits, environment configuration guides, and modular architecture.",
  },
  {
    q: "Can you integrate Stripe and custom billing tiers?",
    a: "Yes. I specialize in integrating Stripe Checkout, Customer Portals, Webhooks for subscription lifecycle events (upgrades, cancellations, trial periods), and invoice automation.",
  },
  {
    q: "How fast can you deliver an MVP?",
    a: "A standard SaaS MVP or high-converting full-stack web app typically ships within 2 to 3 weeks with iterative milestones and continuous staging previews.",
  },
];

function FullStackPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Specialized Practice"
        title={
          <>
            Custom Full-Stack Web Apps.{" "}
            <span className="text-gradient">Engineered for Scale.</span>
          </>
        }
        description="I build fast, reliable web applications and modern SaaS platforms using React, Next.js, and TypeScript — eliminating technical bloat and prioritizing speed, security, and conversion."
      >
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <a
            href="https://www.upwork.com/freelancers/~015c9f89118b7be509"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-all"
          >
            <span>Hire on Upwork</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold hover:bg-muted transition-colors"
          >
            <span>Explore 30+ Live Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHeader>

      {/* Metrics Banner */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl glass shadow-soft border border-border/60">
              {highlights.map((h) => (
                <div key={h.label} className="text-center p-3">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {h.metric}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{h.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-surface/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Capabilities
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Full-Stack Solutions for <span className="text-gradient">Modern Products</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Every system is engineered from the ground up to solve business challenges, handle
              high concurrency, and provide an effortless user experience.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="group relative h-full rounded-2xl glass p-8 hover-lift border border-border/60 transition-all duration-300">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-elegant">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Live Demos */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Live Demonstrations
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold">Recent Web App Builds</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <span>View all full-stack demos</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-border/60 glass p-6 flex flex-col justify-between h-full hover-lift">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                      {p.category}
                    </span>
                    <h3 className="font-display text-lg font-bold mt-4 text-foreground">
                      {p.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-500 font-semibold">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>{p.result}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] rounded-md bg-muted px-2 py-0.5 font-medium text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      <span>Explore Live Demo</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-surface/40 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Workflow
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
              From Idea to Production in <span className="text-gradient">4 Clear Steps</span>
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.08}>
                <div className="rounded-2xl glass p-6 border border-border/60 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-3xl font-extrabold text-primary/40">
                      {step.step}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Answers
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold">Frequently Asked Questions</h2>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="rounded-2xl glass p-6 border border-border/60">
                  <h3 className="font-display font-semibold text-base text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>{f.q}</span>
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed pl-6">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 lg:p-14 text-white shadow-elegant text-center">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="font-display text-3xl md:text-4xl font-bold">
                  Ready to Build Your Full-Stack Web App?
                </h3>
                <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
                  Let's discuss your project scope, architecture, and timeline. Available for fixed-price
                  contracts and hourly sprints directly via Upwork.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://www.upwork.com/freelancers/~015c9f89118b7be509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white text-primary px-7 py-3.5 text-sm font-semibold shadow-soft hover:bg-white/95 transition-all"
                  >
                    <span>Hire on Upwork</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    <span>Send a Message</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
