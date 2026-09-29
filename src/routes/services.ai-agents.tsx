import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  Bot,
  Sparkles,
  Zap,
  MessageSquare,
  Cpu,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Database,
  Brain,
  Workflow,
  Search,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/services/ai-agents")({
  head: () => ({
    meta: [
      { title: "AI Workflows & Autonomous Agents | Emran Raj" },
      {
        name: "description",
        content:
          "Practical OpenAI agents, custom RAG support chatbots, automated lead scoring, and multi-agent business workflows engineered by Emran Raj.",
      },
      { property: "og:title", content: "AI Workflows & Agents | Emran Raj" },
      {
        property: "og:description",
        content: "Custom AI agents and autonomous workflows that run your business operations 24/7.",
      },
      { property: "og:url", content: "/services/ai-agents" },
    ],
    links: [{ rel: "canonical", href: "/services/ai-agents" }],
  }),
  component: AIAgentsPage,
});

const capabilities = [
  {
    icon: MessageSquare,
    title: "RAG Customer Support Chatbots",
    desc: "Intelligent assistants trained strictly on your documentation, past tickets, and product catalog — with automatic human fallback and transcript logging.",
  },
  {
    icon: Brain,
    title: "Autonomous Lead Qualification",
    desc: "AI agents that interact with inbound prospects, score fit based on revenue criteria, extract pain points, and book meetings directly into your calendar.",
  },
  {
    icon: Workflow,
    title: "Multi-Agent Workflow Chains",
    desc: "Connect LLMs to real-world tools (n8n, HubSpot, Slack, Stripe). One agent gathers data, another synthesizes insights, and a third triggers actions.",
  },
  {
    icon: Sparkles,
    title: "Automated Content & Copy Pipelines",
    desc: "Turn raw briefs into brand-aligned email campaigns, social posts, case studies, or product descriptions using structured OpenAI prompt templates.",
  },
  {
    icon: ShieldCheck,
    title: "Hallucination Guardrails & Safety",
    desc: "Strict system prompts, deterministic retrieval schemas, and fact-checking validators that guarantee your AI never gives inaccurate promises.",
  },
  {
    icon: Users,
    title: "WhatsApp & Omnichannel Bots",
    desc: "Two-way conversational AI on WhatsApp, Telegram, or Web Chat that handles customer FAQs, order lookups, and reservation booking in real time.",
  },
];

const highlights = [
  { metric: "24/7", label: "Autonomous Operation" },
  { metric: "< 5s", label: "Instant Intelligent Responses" },
  { metric: "80%", label: "Reduction in Support Repetitions" },
  { metric: "100%", label: "Private & Secure API Integration" },
];

const featuredAIDemos = [
  {
    title: "ChatGenius Conversational Agent",
    category: "AI Chat Assistant",
    result: "Instant user engagement",
    tech: ["OpenAI GPT-4o", "React", "Vector Embeddings"],
    url: "https://itsemranraj.com/aichatbot",
    desc: "Production-ready customer care bot with context retention, product recommendations, and human escalation.",
  },
  {
    title: "FlowAutomate AI Workflow System",
    category: "Workflow Orchestrator",
    result: "80% reduction in manual clicks",
    tech: ["n8n", "OpenAI", "Webhooks", "REST APIs"],
    url: "https://itsemranraj.com/aiautomation",
    desc: "Multi-step automated pipeline connecting forms, CRM lead routing, AI email drafting, and Slack notifications.",
  },
  {
    title: "CopyForge AI Content Engine",
    category: "Generative Content",
    result: "10x faster copy drafting",
    tech: ["Next.js", "GPT-4o APIs", "Tailwind CSS"],
    url: "https://itsemranraj.com/aiconentwritter",
    desc: "Automated copywriting assistant with tone-of-voice picker, split-screen live comparison, and template library.",
  },
  {
    title: "RankPulse AI SEO Suite",
    category: "Market Intelligence",
    result: "3.2x lead capture rate",
    tech: ["React", "SEO APIs", "Tailwind CSS"],
    url: "https://itsemranraj.com/aiseo",
    desc: "AI-driven competitor search engine analysis, content gap discovery, and automated audit report generation.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Use Case & Knowledge Mapping",
    desc: "We identify your highest-leverage bottleneck, collect source documentation, and define exact input/output specifications.",
  },
  {
    step: "02",
    title: "Prompt Engineering & Guardrails",
    desc: "We construct robust system prompts, test edge cases, configure temperature settings, and implement validation rules.",
  },
  {
    step: "03",
    title: "Tool Calling & System Wiring",
    desc: "We connect the AI agent to your existing stack: database queries, email APIs, CRMs, and webhook triggers via n8n.",
  },
  {
    step: "04",
    title: "Testing, Logging & Monitoring",
    desc: "We run end-to-end evaluation runs, set up cost tracking to prevent API token surprises, and deploy to production.",
  },
];

const faqs = [
  {
    q: "How do you prevent the AI from hallucinating or making up answers?",
    a: "We implement Retrieval-Augmented Generation (RAG) with strict negative constraints in the system prompt. If the answer cannot be verified from your specific uploaded documents, the agent is instructed to gracefully say it does not know and route the inquiry to a human.",
  },
  {
    q: "Will our proprietary business data be used to train public AI models?",
    a: "No. When using OpenAI or Anthropic business APIs, your data is never used to train future public models, adhering to strict enterprise data privacy and SOC-2 guidelines.",
  },
  {
    q: "How much will API tokens cost to run each month?",
    a: "For most small-to-medium businesses handling hundreds of conversations per day, OpenAI API token costs typically range between $5 to $30 per month — a tiny fraction of the cost of hiring full-time support staff.",
  },
  {
    q: "Can the AI agent take real actions, like booking a call or creating a CRM deal?",
    a: "Yes! Through Function Calling and tool orchestration (via n8n or LangChain), the AI can actively search databases, create deals in HubSpot, send confirmation emails, and reserve calendar slots.",
  },
];

function AIAgentsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Specialized Practice"
        title={
          <>
            Intelligent AI Agents.{" "}
            <span className="text-gradient">Automating Your Growth 24/7.</span>
          </>
        }
        description="I build production-grade AI agents and practical OpenAI automations that triage inquiries, qualify incoming leads, draft personalized replies, and autonomously execute business tasks."
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
            <span>Explore AI Live Demos</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHeader>

      {/* Metrics Bar */}
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

      {/* Capabilities */}
      <section className="py-16 bg-surface/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Capabilities
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Practical AI Systems that <span className="text-gradient">Deliver Real ROI</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              No generic hype — just robust, deterministic AI agents built to save your team
              hundreds of hours of repetitive manual toil.
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

      {/* Featured AI Demos */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Live Platforms
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold">Featured AI Demos</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <span>Explore all AI showcase projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredAIDemos.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-border/60 glass p-8 flex flex-col justify-between h-full hover-lift">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                      {p.category}
                    </span>
                    <h3 className="font-display text-xl font-bold mt-4 text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    <div className="mt-5 p-4 rounded-xl bg-gradient-brand-soft border border-primary/15">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                        <Sparkles className="h-3.5 w-3.5" /> Outcome
                      </div>
                      <div className="text-base font-bold text-foreground mt-0.5">{p.result}</div>
                    </div>
                  </div>
                  <div className="mt-8 pt-5 border-t border-border/50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] rounded-md bg-muted px-2.5 py-0.5 font-medium text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      <span>Explore Live Demo</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-surface/40 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Deployment Workflow
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Deploying Safe, Deterministic <span className="text-gradient">AI Agents</span>
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

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              FAQ
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
                  Ready to Deploy an AI Agent for Your Business?
                </h3>
                <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
                  Let's audit your repetitive workflows and build custom AI assistants that scale
                  your capacity. Available for direct milestone contracts via Upwork.
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
                    <span>Discuss AI Use Case</span>
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
