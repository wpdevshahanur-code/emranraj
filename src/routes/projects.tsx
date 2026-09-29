import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Case Studies | Emran Raj" },
      { name: "description", content: "A curated portfolio of WordPress, WooCommerce and AI automation builds with real results." },
      { property: "og:title", content: "Projects & Case Studies | Emran Raj" },
      { property: "og:description", content: "Portfolio of premium WordPress and automation projects." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const categories = ["All", "Business", "Ecommerce", "Healthcare", "Automation"] as const;

type Project = {
  title: string;
  category: (typeof categories)[number];
  tech: string[];
  challenge: string;
  solution: string;
  result: string;
  gradient: string;
  image: string;
  url: string;
  domain: string;
};

const projects: Project[] = [
  {
    title: "Canoil Canada Industrial Platform",
    category: "Business",
    domain: "canoilcanadaltd.com",
    url: "https://canoilcanadaltd.com/",
    tech: ["WordPress", "Elementor", "Custom Theme", "B2B Catalog"],
    challenge: "Legacy industrial website with slow navigation and fragmented product technical data sheets.",
    solution: "Custom WordPress rebuild with dynamic lubricant & grease product catalog and B2B inquiry system.",
    result: "3.5x B2B quote inquiries",
    gradient: "from-primary to-accent",
    image: "/projects/canoil.png",
  },
  {
    title: "Guardian Metal Resources PLC",
    category: "Business",
    domain: "guardianmetalresources.com",
    url: "https://guardianmetalresources.com",
    tech: ["WordPress", "Elementor Pro", "Financial APIs", "Tailwind"],
    challenge: "Dual-listed (LSE/NASDAQ) mining firm requiring real-time stock ticker integration, investor portals, and regulatory compliance.",
    solution: "Premium corporate WordPress rebuild featuring live market feeds, interactive Nevada project maps, and investor relations portal.",
    result: "100% regulatory compliance",
    gradient: "from-secondary to-primary",
    image: "/projects/guardianmetal.png",
  },
  {
    title: "Fixion Fuel Research Store",
    category: "Ecommerce",
    domain: "fixionfuel.shop",
    url: "https://fixionfuel.shop/",
    tech: ["WooCommerce", "WordPress", "Stripe", "Elementor"],
    challenge: "Complex lab-tested peptide catalog requiring COA (Certificate of Analysis) verification, fast checkout, and high trust.",
    solution: "High-converting WooCommerce store with 1-click checkout, batch verification system, and mobile-first speed.",
    result: "+44% checkout conversion",
    gradient: "from-accent to-secondary",
    image: "/projects/fixionfuel.png",
  },
  {
    title: "Warmtepomp Expert Utrecht",
    category: "Automation",
    domain: "warmtepompexpert-utrecht.nl",
    url: "https://warmtepompexpert-utrecht.nl/",
    tech: ["WordPress", "Elementor", "JetEngine", "n8n"],
    challenge: "High inbound lead volume for heat pump consultations with manual eligibility checks and scheduling delays.",
    solution: "Dynamic lead capture with custom quote calculator, JetEngine service areas, and automated n8n calendar booking.",
    result: "65% faster lead qualification",
    gradient: "from-primary to-secondary",
    image: "/projects/warmtepomp.jpg",
  },
  {
    title: "Amazon Resources Limited Portal",
    category: "Business",
    domain: "amazonresourceslimited.com",
    url: "https://amazonresourceslimited.com/",
    tech: ["WordPress", "REST API", "ACF Pro", "n8n"],
    challenge: "Distributed project reporting and partner documentation across international resource exploration teams.",
    solution: "Secure corporate portal with multi-language capability, stakeholder updates, and automated asset pipeline.",
    result: "70% faster reporting cycles",
    gradient: "from-secondary to-accent",
    image: "/projects/amazonresources.jpg",
  },
  {
    title: "Hear Clear Mobile Clinic Booking",
    category: "Healthcare",
    domain: "hearclearmobile.com",
    url: "https://hearclearmobile.com",
    tech: ["WordPress", "Elementor", "JetBooking", "Twilio SMS"],
    challenge: "Mobile audiology clinic struggling with booking cancellations, phone tag, and route management across Somerset.",
    solution: "Mobile-first patient self-booking system with automated SMS reminders and postcode radius validation.",
    result: "72% fewer no-shows",
    gradient: "from-accent to-primary",
    image: "/projects/hearclear.jpg",
  },
];

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Case Studies"
        title={<>Real projects. <span className="text-gradient">Real outcomes.</span></>}
        description="A curated selection of live client websites, ecommerce stores, and automation platforms — filtered by category."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === c
                      ? "bg-gradient-brand text-white shadow-elegant"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="group h-full rounded-2xl border border-border/60 bg-card/70 backdrop-blur-xl hover:border-primary/40 hover:shadow-glow transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div>
                    {/* Modern Browser Frame Bar */}
                    <div className="flex items-center justify-between px-3.5 py-2.5 bg-muted/60 dark:bg-black/40 border-b border-border/60 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                        <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                        <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-background/80 border border-border/50 text-[11px] font-mono text-muted-foreground truncate max-w-[170px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="truncate">{p.domain}</span>
                      </div>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Open live site"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                      
                      <div className="absolute top-3 left-3 z-10">
                        <span className="rounded-full bg-background/90 text-primary border border-primary/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md shadow-sm">
                          {p.category}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 z-10">
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full bg-black/65 hover:bg-black/85 text-white px-2.5 py-0.5 text-[10px] font-semibold backdrop-blur-md transition-all shadow-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live ↗
                        </a>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex flex-col gap-3.5">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground/80 flex items-center gap-1 text-[11px]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          Verified Client Build
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-start justify-between gap-1"
                        >
                          <span>{p.title}</span>
                        </a>
                      </h3>

                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] rounded-md bg-muted/80 text-muted-foreground px-2 py-0.5 font-medium border border-border/40"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Key Outcome Highlight */}
                      <div className="rounded-xl bg-gradient-brand-soft border border-primary/15 p-3">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                          <Sparkles className="h-3 w-3" /> Key Impact
                        </div>
                        <div className="mt-0.5 text-sm font-bold text-foreground">
                          {p.result}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {p.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="px-5 pb-5 pt-3 border-t border-border/50 flex items-center justify-between gap-2">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline group/btn"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>Hire Me</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
