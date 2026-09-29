import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Code2, Workflow, ArrowRight, Layers, ShoppingBag, Bot, Webhook, Database } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Web Design & n8n Automation | Emran Raj" },
      { name: "description", content: "Two focused practices: custom WordPress web design and n8n + AI automation. Pick your path." },
      { property: "og:title", content: "Services | Emran Raj" },
      { property: "og:description", content: "Web design and n8n automation services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesHub,
});

const pillars = [
  {
    to: "/services/webdesign",
    tag: "Practice 01",
    title: "Web Development",
    subtitle: "Full-stack web apps and modern sites engineered for speed, SEO, and conversion.",
    icon: Code2,
    bullets: [
      { icon: Layers, label: "React, Next.js & Modern CMS" },
      { icon: ShoppingBag, label: "E-Commerce & Storefronts" },
      { icon: Code2, label: "Custom apps & clean code" },
    ],
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    to: "/services/automation",
    tag: "Practice 02",
    title: "n8n Automation",
    subtitle: "AI-powered workflows that connect your entire stack.",
    icon: Workflow,
    bullets: [
      { icon: Bot, label: "OpenAI agents & scoring" },
      { icon: Webhook, label: "Webhook & API pipelines" },
      { icon: Database, label: "CRM & database sync" },
    ],
    gradient: "from-secondary/20 via-accent/10 to-transparent",
  },
] as const;

function ServicesHub() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title={<>Two practices, <span className="text-gradient">one studio</span></>}
        description="Choose the discipline you need — or combine both for a system that ships and scales itself."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.to} delay={i * 0.08}>
                <Link
                  to={p.to}
                  className={`group relative block overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-10 hover-lift shadow-soft`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-60 pointer-events-none`} />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                        {p.tag}
                      </span>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-elegant">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground text-lg">{p.subtitle}</p>

                    <ul className="mt-6 space-y-2">
                      {p.bullets.map((b) => {
                        const BIcon = b.icon;
                        return (
                          <li key={b.label} className="flex items-center gap-3 text-sm">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                              <BIcon className="h-4 w-4 text-foreground" />
                            </span>
                            <span className="font-medium">{b.label}</span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Explore {p.title}
                      <ArrowRight className="h-4 w-4" />
                    </div>
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
