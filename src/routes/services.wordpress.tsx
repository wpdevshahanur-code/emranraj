import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  Layers,
  Palette,
  Gauge,
  CheckCircle2,
  Shield,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Smartphone,
  Search,
  FileCode2,
  Sliders,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/services/wordpress")({
  head: () => ({
    meta: [
      { title: "WordPress & Elementor Development | Emran Raj" },
      {
        name: "description",
        content:
          "High-performance WordPress websites built with Elementor Pro, custom themes, and ACF Pro. Clean, secure, pixel-perfect, and engineered for high conversion.",
      },
      { property: "og:title", content: "WordPress & Elementor Development | Emran Raj" },
      {
        property: "og:description",
        content: "Custom WordPress website design and Elementor development by Emran Raj.",
      },
      { property: "og:url", content: "/services/wordpress" },
    ],
    links: [{ rel: "canonical", href: "/services/wordpress" }],
  }),
  component: WordPressPage,
});

const capabilities = [
  {
    icon: Palette,
    title: "Pixel-Perfect Figma to Elementor",
    desc: "Flawless translation of Figma, Adobe XD, or Sketch designs into clean Elementor Pro layouts with exact typography, spacing, and micro-interactions.",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals & Speed Tuning",
    desc: "Speed optimization that hits 90+ on Google PageSpeed Insights. Asset minification, caching hierarchies, CDN setups, and image compression.",
  },
  {
    icon: Sliders,
    title: "Advanced Custom Fields (ACF Pro)",
    desc: "Structured custom fields and reusable flexible content blocks that let non-technical marketing teams edit every page without touching code.",
  },
  {
    icon: Smartphone,
    title: "Fluid Mobile-First Responsiveness",
    desc: "Dedicated breakpoints for desktop, laptop, tablet, and mobile ensuring seamless readability and conversion flow on every handheld device.",
  },
  {
    icon: Search,
    title: "Technical SEO & Schema Foundation",
    desc: "Clean semantic HTML structure, JSON-LD Schema markup, Open Graph social tags, and automatic sitemap generation for rapid Google indexing.",
  },
  {
    icon: Shield,
    title: "Security Hardening & Backups",
    desc: "Protection against brute-force attacks, XML-RPC hardening, SSL encryption enforcement, and scheduled off-site cloud backups.",
  },
];

const highlights = [
  { metric: "95+", label: "Mobile PageSpeed Target" },
  { metric: "50+", label: "Live WordPress Sites Delivered" },
  { metric: "0 Bloat", label: "Carefully Selected Plugin Stack" },
  { metric: "100%", label: "Editor-Friendly Content Control" },
];

const featuredClientProjects = [
  {
    title: "Canoil Canada Industrial Platform",
    client: "Canoil Canada Ltd",
    domain: "canoilcanadaltd.com",
    url: "https://canoilcanadaltd.com/",
    tech: ["WordPress", "Elementor Pro", "B2B Catalog", "Custom Theme"],
    result: "3.5x B2B quote inquiries",
    desc: "Complete rebuild of an enterprise industrial lubricant distributor with high-speed catalog navigation.",
  },
  {
    title: "Guardian Metal Resources PLC",
    client: "Guardian Metal Resources (LSE/NASDAQ)",
    domain: "guardianmetalresources.com",
    url: "https://guardianmetalresources.com",
    tech: ["WordPress", "Elementor Pro", "Financial Market APIs"],
    result: "100% regulatory compliance",
    desc: "High-stakes corporate investor relations platform featuring live stock ticker feeds and interactive project maps.",
  },
  {
    title: "Amazon Resources Limited Portal",
    client: "Amazon Resources Limited",
    domain: "amazonresourceslimited.com",
    url: "https://amazonresourceslimited.com/",
    tech: ["WordPress", "ACF Pro", "REST API", "n8n"],
    result: "70% faster reporting cycles",
    desc: "Secure international mining exploration partner portal with automated asset updates and stakeholder documentation.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit & Content Architecture",
    desc: "We analyze your business objectives, target audience, brand assets, and map out a high-converting sitemap and wireframe structure.",
  },
  {
    step: "02",
    title: "Design & Elementor Pro Build",
    desc: "We build out the website using modern Elementor theme builder, global styling tokens, and modular template widgets.",
  },
  {
    step: "03",
    title: "Speed Tuning & Cross-Browser QA",
    desc: "We benchmark performance, optimize database queries, minimize CSS/JS payloads, and test responsiveness across Safari, Chrome, and iOS.",
  },
  {
    step: "04",
    title: "Launch & Walkthrough Video",
    desc: "Zero-downtime DNS cutover, SSL verification, search console submission, and a personalized Loom video training for your internal team.",
  },
];

const faqs = [
  {
    q: "Doesn't Elementor make websites slow?",
    a: "Elementor only becomes slow when amateur developers pile on 25+ heavy third-party add-on plugins and unoptimized media. In my workflow, I use Elementor Pro natively with minimal clean extensions, asset un-loading, and advanced server caching to consistently achieve 90+ PageSpeed scores.",
  },
  {
    q: "Will my team be able to update text and photos easily?",
    a: "Yes! That is the core benefit of my WordPress builds. You get an intuitive visual front-end editor where anyone on your team can change text, replace images, or publish new blog articles without ever writing a line of code.",
  },
  {
    q: "Do you handle migration from my old website?",
    a: "Yes. I manage the entire migration process, including redirecting old URLs (301 redirects) so you maintain all your existing Google SEO rankings and domain authority.",
  },
  {
    q: "Can you convert my Figma or Adobe XD design to WordPress?",
    a: "Absolutely. I provide 1-to-1 pixel-perfect conversion from Figma to Elementor Pro, preserving exact typography, padding, colors, and responsive behaviors.",
  },
];

function WordPressPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Specialized Practice"
        title={
          <>
            WordPress & Elementor Development.{" "}
            <span className="text-gradient">Engineered to Convert.</span>
          </>
        }
        description="I craft custom, high-performance WordPress websites with Elementor Pro and ACF Pro — empowering your marketing team to edit content with ease while keeping page load speeds lightning-fast."
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
            <span>View Verified Client Builds</span>
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
              WordPress Development <span className="text-gradient">Without Compromise</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Say goodbye to messy code, broken updates, and sluggish performance. Get a tailored
              WordPress engine engineered to elevate your brand.
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

      {/* Real Client Case Studies */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Client Proof
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold">Featured Client Websites</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <span>Explore all case studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredClientProjects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-border/60 glass p-6 flex flex-col justify-between h-full hover-lift">
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span className="font-mono text-[11px] text-foreground font-semibold">
                        {p.domain}
                      </span>
                      <span className="text-emerald-500 font-semibold flex items-center gap-1 text-[11px]">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                    <div className="mt-4 p-3 rounded-xl bg-gradient-brand-soft border border-primary/15">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                        <Sparkles className="h-3 w-3" /> Key Impact
                      </div>
                      <div className="text-sm font-bold text-foreground mt-0.5">{p.result}</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {p.tech.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] rounded-md bg-muted px-2 py-0.5 font-medium text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 bg-surface/40 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              The Process
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Predictable, Transparent <span className="text-gradient">Website Delivery</span>
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
                  Ready for a World-Class WordPress Website?
                </h3>
                <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
                  Get in touch today to discuss your new website build, redesign, or Elementor
                  performance overhaul. Available on Upwork with 100% Job Success.
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
                    <span>Contact Directly</span>
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
