import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Check, X, ArrowRight, Sparkles, Rocket, Building2 } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Transparent WordPress & Automation Rates | Emran Raj" },
      { name: "description", content: "Simple, honest pricing for WordPress development and AI automation. Starter, Professional and Enterprise plans." },
      { property: "og:title", content: "Pricing | Emran Raj" },
      { property: "og:description", content: "Fixed-scope pricing for premium WordPress and automation work." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Starter",
    icon: Sparkles,
    price: "$1,900",
    tagline: "Perfect for small businesses launching their first professional site.",
    features: [
      "Up to 5 pages",
      "Custom WordPress theme",
      "Elementor / block editor",
      "Mobile-first responsive",
      "Basic on-page SEO",
      "Contact form + spam protection",
      "30 days post-launch support",
    ],
    excludes: ["Advanced automations", "eCommerce", "Custom plugins"],
    popular: false,
  },
  {
    name: "Professional",
    icon: Rocket,
    price: "$4,500",
    tagline: "For businesses ready to scale with automation baked in.",
    features: [
      "Up to 15 pages",
      "Custom design system",
      "WooCommerce or JetEngine build",
      "3 n8n automation workflows",
      "AI-powered contact routing",
      "Advanced SEO + schema",
      "Speed optimization (95+ PageSpeed)",
      "90 days post-launch support",
    ],
    excludes: ["Custom plugin development", "Dedicated 24/7 care plan"],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    tagline: "Complex platforms, dynamic content, and mission-critical automation.",
    features: [
      "Unlimited pages & CPTs",
      "Bespoke UI/UX design",
      "Advanced JetEngine / Crocoblock stack",
      "Unlimited automations",
      "Custom plugin development",
      "CRM & ERP integrations",
      "AI agent development",
      "High-availability SLA guarantee",
      "Direct engineer communication",
      "Dedicated ongoing care plan",
    ],
    excludes: [],
    popular: false,
  },
];

const compare = [
  ["Custom design", true, true, true],
  ["Elementor / blocks", true, true, true],
  ["WooCommerce", false, true, true],
  ["JetEngine dynamic", false, true, true],
  ["n8n automation workflows", false, "3 included", "Unlimited"],
  ["AI workflow integration", false, true, true],
  ["Custom plugin development", false, false, true],
  ["Priority support", false, false, true],
] as const;

function PricingPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Pricing"
        title={<>Simple pricing. <span className="text-gradient">Zero surprises.</span></>}
        description="Fixed-scope engagements with a clear deliverable and timeline. Every project starts with a discovery call to confirm fit."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3 items-stretch">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06} className="h-full flex flex-col">
                <div className={`relative h-full flex flex-col justify-between rounded-3xl p-8 hover-lift ${t.popular ? "bg-gradient-brand text-white shadow-elegant" : "glass"}`}>
                  {t.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white text-primary text-[11px] font-bold px-3 py-1 shadow-soft">
                      MOST POPULAR
                    </span>
                  )}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${t.popular ? "bg-white/20" : "bg-gradient-brand text-white shadow-elegant"}`}>
                        <t.icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                    </div>
                    <div className="mt-6">
                      <div className="font-display text-5xl font-bold">{t.price}</div>
                      <div className={`text-sm ${t.popular ? "text-white/80" : "text-muted-foreground"}`}>starting from</div>
                    </div>
                    <p className={`mt-4 text-sm min-h-[40px] ${t.popular ? "text-white/90" : "text-muted-foreground"}`}>{t.tagline}</p>
                    <ul className="mt-6 space-y-2.5 text-sm flex-1">
                      {t.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <Check className={`h-4 w-4 shrink-0 mt-0.5 ${t.popular ? "text-white" : "text-primary"}`} />
                          <span>{f}</span>
                        </li>
                      ))}
                      {t.excludes.map((f) => (
                        <li key={f} className={`flex gap-2 ${t.popular ? "text-white/60" : "text-muted-foreground/60"}`}>
                          <X className="h-4 w-4 shrink-0 mt-0.5" />
                          <span className="line-through">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 pt-2">
                    <Link
                      to="/book-call"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                        t.popular ? "bg-white text-primary hover:bg-white/90 shadow-elegant" : "bg-gradient-brand text-white shadow-elegant hover:shadow-glow"
                      }`}
                    >
                      Request Custom Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl glass overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="text-left p-5 font-semibold">Feature</th>
                    <th className="p-5 font-semibold">Starter</th>
                    <th className="p-5 font-semibold text-gradient">Professional</th>
                    <th className="p-5 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((row, i) => (
                    <tr key={i} className="border-b border-border/40 last:border-0">
                      <td className="p-5 font-medium">{row[0]}</td>
                      {[row[1], row[2], row[3]].map((cell, k) => (
                        <td key={k} className="p-5 text-center">
                          {cell === true ? <Check className="h-4 w-4 text-primary inline" /> :
                           cell === false ? <X className="h-4 w-4 text-muted-foreground/40 inline" /> :
                           <span className="text-muted-foreground">{cell}</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
