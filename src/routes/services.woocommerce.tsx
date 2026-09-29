import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  ShoppingBag,
  CreditCard,
  Zap,
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Package,
  Layers,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/services/woocommerce")({
  head: () => ({
    meta: [
      { title: "WooCommerce Store Development & Optimization | Emran Raj" },
      {
        name: "description",
        content:
          "Custom WooCommerce online store design, conversion rate optimization (CRO), frictionless 1-click checkout, Stripe payment gateways, and automated inventory sync.",
      },
      { property: "og:title", content: "WooCommerce Development | Emran Raj" },
      {
        property: "og:description",
        content: "High-converting WooCommerce store development and optimization by Emran Raj.",
      },
      { property: "og:url", content: "/services/woocommerce" },
    ],
    links: [{ rel: "canonical", href: "/services/woocommerce" }],
  }),
  component: WooCommercePage,
});

const capabilities = [
  {
    icon: TrendingUp,
    title: "1-Click Checkout & Funnel Optimization",
    desc: "Eliminate cart abandonment with distraction-free single-page checkouts, auto-address autocomplete, Apple Pay / Google Pay, and post-purchase one-click upsells.",
  },
  {
    icon: CreditCard,
    title: "Global Payment Gateways & Compliance",
    desc: "Seamless integration with Stripe, PayPal, Klarna, Authorize.net, and localized currencies with automated tax calculation and fraud detection.",
  },
  {
    icon: Layers,
    title: "Custom Variations & B2B Wholesale Pricing",
    desc: "Dynamic product bundles, tiered quantity discounts, wholesale login portals, and custom product configurators with live price calculators.",
  },
  {
    icon: Zap,
    title: "High-SKU Speed & Database Optimization",
    desc: "High-performance WooCommerce caching, object cache with Redis, WooCommerce High-Performance Order Storage (HPOS), and instant search.",
  },
  {
    icon: RefreshCw,
    title: "Automated Fulfillment & CRM Pipelines",
    desc: "Automate order routing to 3PL warehouses, shipping label generation, inventory sync with QuickBooks/Airtable, and customer follow-up via n8n.",
  },
  {
    icon: Lock,
    title: "Security & Fraud Hardening",
    desc: "PCI-DSS compliant setups, automated bot protection on checkout endpoints, CAPTCHA tuning, and automated daily database backups.",
  },
];

const highlights = [
  { metric: "+44%", label: "Average Checkout Conversion Lift" },
  { metric: "< 1.2s", label: "Fast Storefront Page Loads" },
  { metric: "100%", label: "HPOS & Modern WooCommerce Stack" },
  { metric: "Zero Drop", label: "Frictionless Checkout Flow" },
];

const featuredClientProjects = [
  {
    title: "Fixion Fuel Research Store",
    client: "Fixion Fuel LLC",
    domain: "fixionfuel.shop",
    url: "https://fixionfuel.shop/",
    tech: ["WooCommerce", "WordPress", "Stripe", "Elementor Pro"],
    result: "+44% checkout conversion",
    desc: "High-converting lab-tested research peptide store featuring batch COA verification, 1-click express checkout, and instant mobile load.",
  },
  {
    title: "WanderLust Tours & Travel Agency",
    client: "WanderLust Travel",
    domain: "itsemranraj.com/tourandtravel",
    url: "https://itsemranraj.com/tourandtravel",
    tech: ["WooCommerce", "JetBooking", "Elementor", "Payment Gateways"],
    result: "Full online booking flow",
    desc: "End-to-end multi-day package booking engine with automated invoice generation, group sizing, and secure deposit handling.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Catalog & Checkout Audit",
    desc: "We analyze your product catalog, shipping rules, tax liabilities, and identify friction points in your current cart-to-purchase funnel.",
  },
  {
    step: "02",
    title: "Storefront UI/UX Build",
    desc: "We design clean, high-trust product pages, clear call-to-actions, trust badges, and frictionless category filtering.",
  },
  {
    step: "03",
    title: "Payment & Order Automation",
    desc: "We connect Stripe/PayPal, configure automatic shipping calculation, set up transactional emails, and link n8n webhooks for order sync.",
  },
  {
    step: "04",
    title: "Load Testing & Live Go-Live",
    desc: "We stress test concurrent checkouts, verify payment webhooks in live mode, test tracking pixels, and deploy seamlessly.",
  },
];

const faqs = [
  {
    q: "Why choose WooCommerce over Shopify?",
    a: "Unlike Shopify which charges monthly transaction fees, locks you into their proprietary ecosystem, and limits custom checkout code, WooCommerce gives you 100% platform ownership, 0% platform transaction fees, and complete freedom to customize any aspect of your customer journey.",
  },
  {
    q: "Can you migrate my existing store from Shopify or BigCommerce?",
    a: "Yes. I can migrate all products, customer records, order history, and SEO redirects seamlessly without losing search rankings or customer account data.",
  },
  {
    q: "How do you solve cart abandonment on WooCommerce?",
    a: "By implementing clean single-step checkouts, Apple Pay/Google Pay express buttons, removal of unnecessary input fields, transparent shipping calculations, and automated cart abandonment email/SMS reminders.",
  },
  {
    q: "Does WooCommerce scale for high traffic?",
    a: "Yes! Using WooCommerce's High-Performance Order Storage (HPOS), Redis object caching, Cloudflare CDN, and optimized queries, WooCommerce easily handles thousands of concurrent shoppers and hundreds of orders per hour.",
  },
];

function WooCommercePage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Specialized Practice"
        title={
          <>
            WooCommerce Store Development.{" "}
            <span className="text-gradient">Engineered to Sell.</span>
          </>
        }
        description="I build conversion-optimized WooCommerce stores with streamlined 1-click checkouts, bulletproof payment gateways, and automated order fulfillment pipelines that maximize revenue per visitor."
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
            <span>View E-Commerce Work</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHeader>

      {/* Highlights Bar */}
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
              E-Commerce Architecture that <span className="text-gradient">Maximizes GMV</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Every detail from thumbnail loading to order confirmation is optimized to eliminate
              hesitation, reduce abandoned carts, and increase average order value.
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

      {/* Real Case Studies */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Client Results
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold">Featured E-Commerce Stores</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <span>Explore all e-commerce case studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredClientProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-border/60 glass p-8 flex flex-col justify-between h-full hover-lift">
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span className="font-mono text-sm text-foreground font-semibold">
                        {p.domain}
                      </span>
                      <span className="text-emerald-500 font-semibold flex items-center gap-1 text-xs">
                        <CheckCircle2 className="h-4 w-4" /> Verified Client Store
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    <div className="mt-5 p-4 rounded-xl bg-gradient-brand-soft border border-primary/15">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                        <Sparkles className="h-3.5 w-3.5" /> Proven Result
                      </div>
                      <div className="text-lg font-bold text-foreground mt-0.5">{p.result}</div>
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
                      <span>Visit Live Store</span>
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
              Execution Process
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
              From Product Catalog to <span className="text-gradient">Automated Sales</span>
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
                  Ready to Scale Your E-Commerce Revenue?
                </h3>
                <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
                  Let's audit your checkout funnel or build a brand-new high-converting WooCommerce
                  store. Available for direct milestone contracts via Upwork.
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
                    <span>Send Store Brief</span>
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
