import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, ExternalLink } from "lucide-react";

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
  url?: string;
};

const projects: Project[] = [
  {
    title: "Canoil Canada Industrial Platform",
    category: "Business",
    tech: ["WordPress", "Elementor", "Custom Theme", "B2B Catalog"],
    challenge: "Legacy industrial website with slow navigation and fragmented product technical data sheets.",
    solution: "Custom WordPress rebuild with dynamic lubricant & grease product catalog and B2B inquiry system.",
    result: "3.5x B2B quote inquiries",
    gradient: "from-primary to-accent",
    image: "/projects/canoil.png",
    url: "https://canoilcanadaltd.com/",
  },
  {
    title: "Guardian Metal Resources PLC",
    category: "Business",
    tech: ["WordPress", "Elementor Pro", "Financial APIs", "Tailwind"],
    challenge: "Dual-listed (LSE/NASDAQ) mining firm requiring real-time stock ticker integration, investor portals, and regulatory compliance.",
    solution: "Premium corporate WordPress rebuild featuring live market feeds, interactive Nevada project maps, and investor relations portal.",
    result: "100% regulatory compliance",
    gradient: "from-secondary to-primary",
    image: "/projects/guardianmetal.png",
    url: "https://guardianmetalresources.com",
  },
  {
    title: "Fixion Fuel Research Store",
    category: "Ecommerce",
    tech: ["WooCommerce", "WordPress", "Stripe", "Elementor"],
    challenge: "Complex lab-tested peptide catalog requiring COA (Certificate of Analysis) verification, fast checkout, and high trust.",
    solution: "High-converting WooCommerce store with 1-click checkout, batch verification system, and mobile-first speed.",
    result: "+44% checkout conversion",
    gradient: "from-accent to-secondary",
    image: "/projects/fixionfuel.png",
    url: "https://fixionfuel.shop/",
  },
  {
    title: "Warmtepomp Expert Utrecht",
    category: "Automation",
    tech: ["WordPress", "Elementor", "JetEngine", "n8n"],
    challenge: "High inbound lead volume for heat pump consultations with manual eligibility checks and scheduling delays.",
    solution: "Dynamic lead capture with custom quote calculator, JetEngine service areas, and automated n8n calendar booking.",
    result: "65% faster lead qualification",
    gradient: "from-primary to-secondary",
    image: "/projects/warmtepomp.jpg",
    url: "https://warmtepompexpert-utrecht.nl/",
  },
  {
    title: "Amazon Resources Limited Portal",
    category: "Business",
    tech: ["WordPress", "REST API", "ACF Pro", "n8n"],
    challenge: "Distributed project reporting and partner documentation across international resource exploration teams.",
    solution: "Secure corporate portal with multi-language capability, stakeholder updates, and automated asset pipeline.",
    result: "70% faster reporting cycles",
    gradient: "from-secondary to-accent",
    image: "/projects/amazonresources.jpg",
    url: "https://amazonresourceslimited.com/",
  },
  {
    title: "Hear Clear Mobile Clinic Booking",
    category: "Healthcare",
    tech: ["WordPress", "Elementor", "JetBooking", "Twilio SMS"],
    challenge: "Mobile audiology clinic struggling with booking cancellations, phone tag, and route management across Somerset.",
    solution: "Mobile-first patient self-booking system with automated SMS reminders and postcode radius validation.",
    result: "72% fewer no-shows",
    gradient: "from-accent to-primary",
    image: "/projects/hearclear.jpg",
    url: "https://hearclearmobile.com",
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
        description="A selection of recent work across WordPress, WooCommerce and AI automation — filter by industry to see what's most relevant."
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

          <div className="grid gap-6 lg:grid-cols-2">
            {visible.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <article className="group h-full rounded-3xl glass overflow-hidden hover-lift flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="rounded-full bg-white/90 text-primary px-3 py-1 text-[11px] font-bold tracking-wider uppercase backdrop-blur-md">
                          {p.category}
                        </span>
                      </div>
                      {p.url && (
                        <div className="absolute top-4 right-4 z-10">
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-black/60 hover:bg-black/85 text-white px-3 py-1 text-[11px] font-semibold backdrop-blur-md transition-all shadow-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live Website <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      )}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-white drop-shadow-sm">
                          {p.url ? (
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline inline-flex items-center gap-2 group-hover:text-primary-foreground"
                            >
                              <span>{p.title}</span>
                              <ExternalLink className="h-5 w-5 opacity-70 shrink-0" />
                            </a>
                          ) : (
                            p.title
                          )}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {p.tech.map((t) => (
                          <span key={t} className="text-[11px] rounded-md bg-muted px-2 py-0.5 text-muted-foreground">{t}</span>
                        ))}
                      </div>
                      <dl className="space-y-3 text-sm">
                        <div><dt className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Challenge</dt><dd className="mt-1">{p.challenge}</dd></div>
                        <div><dt className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Solution</dt><dd className="mt-1">{p.solution}</dd></div>
                        <div><dt className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Result</dt><dd className="mt-1 font-semibold text-gradient">{p.result}</dd></div>
                      </dl>
                    </div>
                  </div>
                  <div className="px-6 pb-6 lg:px-8 lg:pb-8 pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/40">
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline group/link"
                      >
                        <span>Visit Live Website</span>
                        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span />
                    )}
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                      Discuss Similar Project <ArrowRight className="h-3 w-3" />
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
