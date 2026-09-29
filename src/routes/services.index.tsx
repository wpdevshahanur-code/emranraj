import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  Code2,
  Workflow,
  ArrowRight,
  Layers,
  ShoppingBag,
  Bot,
  Boxes,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Specialized Services & Engineering Practices | Emran Raj" },
      {
        name: "description",
        content:
          "Explore specialized web development and automation practices: Full-Stack React/Next.js, WordPress & Elementor, Crocoblock JetEngine, WooCommerce, n8n automations, and AI agents.",
      },
      { property: "og:title", content: "Services | Emran Raj" },
      {
        property: "og:description",
        content: "High-performance web development, JetEngine dynamic platforms, and AI automation services.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesHub,
});

const serviceList = [
  {
    to: "/services/full-stack",
    tag: "Practice 01",
    title: "Full-Stack Web Apps",
    subtitle: "Custom SaaS platforms, dashboards, and modern websites built with React, Next.js, and TypeScript with zero bloat.",
    icon: Code2,
    bullets: ["Next.js & React SSR/SSG", "REST & GraphQL APIs", "Stripe Subscription Billing"],
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    to: "/services/wordpress",
    tag: "Practice 02",
    title: "WordPress & Elementor",
    subtitle: "Pixel-perfect, high-performance WordPress sites built with Elementor Pro or ACF Pro for effortless content management.",
    icon: Layers,
    bullets: ["Figma to Pixel-Perfect Build", "95+ Mobile PageSpeed Score", "ACF Pro Flexible Blocks"],
    gradient: "from-secondary/20 via-primary/10 to-transparent",
  },
  {
    to: "/services/jetengine",
    tag: "Practice 03",
    title: "JetEngine Dynamic Sites",
    subtitle: "Complex directories, custom post types (CPTs), booking engines, and advanced listing platforms powered by Crocoblock.",
    icon: Boxes,
    bullets: ["Instant Ajax SmartFilters", "Custom Post Relations & CPTs", "Front-End Submission Portals"],
    gradient: "from-accent/20 via-secondary/10 to-transparent",
  },
  {
    to: "/services/woocommerce",
    tag: "Practice 04",
    title: "WooCommerce & Stores",
    subtitle: "Conversion-optimized online stores with frictionless 1-click checkout, global payment gateways, and automated order handling.",
    icon: ShoppingBag,
    bullets: ["1-Click Express Checkout", "Stripe & Global Gateways", "HPOS Database Speed Tuning"],
    gradient: "from-primary/20 via-accent/10 to-transparent",
  },
  {
    to: "/services/automation",
    tag: "Practice 05",
    title: "n8n Workflow Automation",
    subtitle: "Self-hosted automated pipelines connecting your CRM, email, WhatsApp, forms, and databases to eliminate repetitive busywork.",
    icon: Workflow,
    bullets: ["Multi-Step n8n Pipelines", "Bi-Directional CRM Sync", "WhatsApp & Slack Triggers"],
    gradient: "from-secondary/20 via-accent/10 to-transparent",
  },
  {
    to: "/services/ai-agents",
    tag: "Practice 06",
    title: "AI Workflows & Agents",
    subtitle: "Practical OpenAI and custom LLM agents that qualify inbound leads, draft smart replies, and handle business tasks 24/7.",
    icon: Bot,
    bullets: ["RAG Customer Support Bots", "Autonomous Lead Qualification", "Hallucination Guardrails"],
    gradient: "from-accent/20 via-primary/10 to-transparent",
  },
] as const;

function ServicesHub() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Specialized Practices"
        title={
          <>
            Six disciplines, <span className="text-gradient">one dedicated engineer</span>
          </>
        }
        description="Choose the exact service you need — or combine multiple disciplines for a full-stack system that ships quickly, runs autonomously, and scales your business."
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceList.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.to} delay={i * 0.06}>
                <Link
                  to={p.to}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 hover-lift shadow-soft h-full"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-50 pointer-events-none group-hover:opacity-75 transition-opacity`}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground font-mono">
                        {p.tag}
                      </span>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-elegant">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{p.subtitle}</p>

                    <ul className="mt-6 space-y-2 border-t border-border/40 pt-4">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative mt-8 pt-4 border-t border-border/40 inline-flex items-center gap-2 text-xs font-semibold text-primary group-hover:gap-3 transition-all">
                    <span>Explore {p.title}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
