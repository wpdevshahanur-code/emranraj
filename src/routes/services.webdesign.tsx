import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  Code2, Layers, ShoppingBag, Boxes, CalendarCheck, UserCheck, Home as HomeIcon,
  GraduationCap, Gauge, Search, Wrench, Plug, Puzzle, Workflow, Bot, Webhook,
  Database, LineChart, ArrowRight, Zap, Mail, MessageSquare,
} from "lucide-react";

const automationFlow = [
  { icon: Zap, label: "Trigger" },
  { icon: Webhook, label: "Webhook" },
  { icon: Workflow, label: "n8n" },
  { icon: Bot, label: "OpenAI" },
  { icon: Database, label: "CRM" },
  { icon: Mail, label: "Email" },
  { icon: MessageSquare, label: "Slack" },
  { icon: Database, label: "Database" },
];

export const Route = createFileRoute("/services/webdesign")({
  head: () => ({
    meta: [
      { title: "Web Design & WordPress Development | NovaStack" },
      { name: "description", content: "Custom WordPress, WooCommerce, Elementor, JetEngine and Crocoblock builds engineered for speed, SEO and conversion." },
      { property: "og:title", content: "Web Design Services | NovaStack" },
      { property: "og:description", content: "WordPress and web design services for growing businesses." },
      { property: "og:url", content: "/services/webdesign" },
    ],
    links: [{ rel: "canonical", href: "/services/webdesign" }],
  }),
  component: WebDesignPage,
});

const groups = [
  {
    title: "WordPress Development",
    items: [
      { icon: Code2, name: "WordPress Website Development", desc: "Custom themes, blocks and CMS builds tuned for editors and search engines." },
      { icon: Layers, name: "Elementor Development", desc: "Pixel-perfect Elementor builds with custom widgets and dynamic content." },
      { icon: ShoppingBag, name: "WooCommerce Store", desc: "Optimised storefronts with fast checkout, subscriptions and payment flows." },
      { icon: Puzzle, name: "Crocoblock Solutions", desc: "Advanced Croco stacks for booking, listings, membership and directories." },
      { icon: Boxes, name: "JetEngine Dynamic Websites", desc: "CPT-heavy sites with meta boxes, relations and REST-powered listings." },
      { icon: CalendarCheck, name: "Booking Systems", desc: "Multi-service booking with reminders, payments and calendar sync." },
      { icon: UserCheck, name: "Membership Websites", desc: "Gated content, tiered plans and subscription-based communities." },
      { icon: HomeIcon, name: "Real Estate Websites", desc: "IDX-style listings, agent portals and lead-capture funnels." },
      { icon: GraduationCap, name: "LMS Websites", desc: "Course delivery, quizzes, cohorts and certificates that scale." },
    ],
  },
  {
    title: "Performance & Growth",
    items: [
      { icon: Gauge, name: "Speed Optimization", desc: "Core Web Vitals in the green — LCP, INP, CLS all handled." },
      { icon: Search, name: "Technical SEO", desc: "Schema, sitemaps, indexing and Core Web Vitals audits." },
      { icon: Wrench, name: "Website Maintenance", desc: "Care plans covering updates, backups, security and uptime." },
      { icon: Plug, name: "API Integration", desc: "Connect WordPress to any REST, GraphQL or webhook-driven service." },
      { icon: Puzzle, name: "Custom Plugin Development", desc: "Bespoke functionality when a plugin from the repo won't cut it." },
    ],
  },
  {
    title: "Automation & AI",
    items: [
      { icon: Workflow, name: "n8n Automation", desc: "Self-hosted workflows that connect your entire tech stack." },
      { icon: Bot, name: "AI Workflow Automation", desc: "OpenAI-powered agents for triage, drafting and lead scoring." },
      { icon: Webhook, name: "Webhook Integration", desc: "Real-time event pipelines between forms, CRMs and APIs." },
      { icon: Database, name: "CRM Automation", desc: "Sync HubSpot, Pipedrive, Fluent CRM and more — bi-directional." },
      { icon: LineChart, name: "Business Process Automation", desc: "Turn spreadsheets and Slack pings into reliable workflows." },
    ],
  },
];

function WebDesignPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title={<>Every service you need to <span className="text-gradient">launch and scale</span></>}
        description="From bespoke WordPress builds to AI-driven automation, everything is delivered by one specialist with a decade in the trenches."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-20">
          {groups.map((g) => (
            <div key={g.title}>
              <Reveal>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">{g.title}</h2>
              </Reveal>

              {g.title === "Automation & AI" && (
                <Reveal>
                  <div className="rounded-3xl glass p-6 lg:p-10 shadow-soft mb-8">
                    <h3 className="font-display text-xl font-semibold text-center mb-6">How a workflow flows</h3>
                    <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
                      {automationFlow.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 lg:gap-4">
                          <div className="flex flex-col items-center gap-2 min-w-[76px]">
                            <div className="h-14 w-14 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-elegant">
                              <f.icon className="h-5 w-5" />
                            </div>
                            <span className="text-xs font-semibold text-muted-foreground text-center">{f.label}</span>
                          </div>
                          {i < automationFlow.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {g.items.map((s, i) => (
                  <Reveal key={s.name} delay={i * 0.03}>
                    <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 hover-lift gradient-border">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex items-start justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft text-primary shadow-soft transition-all duration-300 group-hover:bg-gradient-brand group-hover:text-white group-hover:shadow-elegant">
                          <s.icon className="h-5 w-5" />
                        </span>
                        <ArrowRight className="h-5 w-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{s.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          <Reveal>
            <div className="rounded-3xl glass p-10 lg:p-14 text-center">
              <h3 className="font-display text-3xl md:text-4xl font-bold">Not sure which service fits?</h3>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Tell me what you're trying to build. I'll recommend the smallest engagement that gets you there fastest.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link to="/book-call" className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant hover:shadow-glow">
                  Book a discovery call <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/pricing" className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold hover:bg-muted">
                  See pricing
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
