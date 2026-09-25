import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  Zap, Webhook, Workflow, Bot, Database, Mail, MessageSquare, ArrowRight,
  UserPlus, MessagesSquare, CalendarCheck, FileText, Send, Phone, RefreshCw, Package, HeartHandshake,
} from "lucide-react";

export const Route = createFileRoute("/services/automation")({
  head: () => ({
    meta: [
      { title: "Automation Solutions — n8n & AI Workflows | NovaStack" },
      { name: "description", content: "AI and n8n automation for lead capture, CRM sync, invoicing, appointments and more. Ship the workflow, not the manual work." },
      { property: "og:title", content: "AI & n8n Automation Solutions | NovaStack" },
      { property: "og:description", content: "Custom automation workflows built with n8n and OpenAI." },
      { property: "og:url", content: "/services/automation" },
    ],
    links: [{ rel: "canonical", href: "/services/automation" }],
  }),
  component: AutomationPage,
});

const flow = [
  { icon: Zap, label: "Trigger" },
  { icon: Webhook, label: "Webhook" },
  { icon: Workflow, label: "n8n" },
  { icon: Bot, label: "OpenAI" },
  { icon: Database, label: "CRM" },
  { icon: Mail, label: "Email" },
  { icon: MessageSquare, label: "Slack" },
  { icon: Database, label: "Database" },
];

const examples = [
  { icon: UserPlus, title: "Lead Capture", desc: "Forms, chat and ads unified into a scored, deduped pipeline hitting your CRM in seconds." },
  { icon: MessagesSquare, title: "AI Chat Support", desc: "RAG-powered assistants trained on your docs, with human handoff and full transcript logging." },
  { icon: CalendarCheck, title: "Appointment Booking", desc: "End-to-end booking: availability, payments, reminders, no-show follow-up." },
  { icon: FileText, title: "Invoice Automation", desc: "Auto-generate, send, chase and reconcile invoices across Stripe, Xero and QuickBooks." },
  { icon: Send, title: "Email Automation", desc: "Behaviour-driven sequences powered by segmentation and AI-personalised copy." },
  { icon: Phone, title: "WhatsApp Automation", desc: "Two-way WhatsApp flows for order updates, reminders and support triage." },
  { icon: RefreshCw, title: "CRM Sync", desc: "Bi-directional sync between HubSpot, Pipedrive, Airtable, Notion and your website." },
  { icon: Package, title: "Order Processing", desc: "From cart to fulfilment: inventory sync, packing slips, carrier labels, tracking." },
  { icon: HeartHandshake, title: "Customer Follow-up", desc: "NPS surveys, review requests and win-back sequences that actually convert." },
];

function AutomationPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Automation Solutions"
        title={<>Stop doing the work. <span className="text-gradient">Automate it.</span></>}
        description="Every repetitive task is an opportunity. I design n8n and AI-powered workflows that quietly run your business — 24/7, reliably, at a fraction of the cost of hiring."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl glass p-6 lg:p-10 shadow-soft">
              <h2 className="font-display text-2xl font-semibold text-center mb-8">How a workflow flows</h2>
              <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
                {flow.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 lg:gap-4">
                    <div className="flex flex-col items-center gap-2 min-w-[76px]">
                      <div className="h-14 w-14 rounded-2xl bg-gradient-brand text-white flex items-center justify-center shadow-elegant">
                        <f.icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground text-center">{f.label}</span>
                    </div>
                    {i < flow.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Automation examples I <span className="text-gradient">ship every month</span>
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {examples.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.04}>
                <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 hover-lift gradient-border">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-soft text-primary shadow-soft transition-all duration-300 group-hover:bg-gradient-brand group-hover:text-white group-hover:shadow-elegant">
                      <e.icon className="h-5 w-5" />
                    </span>
                    <ArrowRight className="h-5 w-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-brand text-white p-10 lg:p-14 shadow-elegant text-center">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <h3 className="relative font-display text-3xl md:text-4xl font-bold">Have a task you keep doing manually?</h3>
              <p className="relative mt-3 text-white/85 max-w-xl mx-auto">Let's map it in 30 minutes and quote a fixed automation sprint.</p>
              <Link to="/book-call" className="relative mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-primary px-6 py-3 text-sm font-semibold">
                Book automation call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
