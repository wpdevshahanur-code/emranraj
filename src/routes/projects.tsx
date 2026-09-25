import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Case Studies | NovaStack" },
      { name: "description", content: "A curated portfolio of WordPress, WooCommerce and AI automation builds with real results." },
      { property: "og:title", content: "Projects & Case Studies | NovaStack" },
      { property: "og:description", content: "Portfolio of premium WordPress and automation projects." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const categories = ["All", "Business", "Healthcare", "Real Estate", "Education", "Agency", "Ecommerce", "Automation"] as const;

type Project = {
  title: string;
  category: (typeof categories)[number];
  tech: string[];
  challenge: string;
  solution: string;
  result: string;
  gradient: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Lumen Health Booking Platform",
    category: "Healthcare",
    tech: ["WordPress", "JetBooking", "n8n", "Twilio"],
    challenge: "Manual patient booking and 40% no-show rate.",
    solution: "Self-service booking with SMS reminders and AI triage.",
    result: "72% fewer no-shows",
    gradient: "from-primary to-accent",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Northwind Realty Listings",
    category: "Real Estate",
    tech: ["JetEngine", "Elementor", "OpenAI"],
    challenge: "Slow listings site with poor lead capture.",
    solution: "Dynamic CPT-driven listings + AI lead scoring pipeline.",
    result: "3.2x qualified leads",
    gradient: "from-secondary to-primary",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Copperleaf Checkout Rebuild",
    category: "Ecommerce",
    tech: ["WooCommerce", "Stripe", "Cloudflare"],
    challenge: "Cart abandonment above 78%.",
    solution: "One-page checkout, edge caching and Apple Pay.",
    result: "+41% conversion",
    gradient: "from-accent to-secondary",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Tessera Learning LMS",
    category: "Education",
    tech: ["LearnDash", "Elementor", "OpenAI"],
    challenge: "Tutors overwhelmed with manual grading.",
    solution: "AI-assisted grading with human review loop.",
    result: "8h saved per tutor / week",
    gradient: "from-primary to-secondary",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Helios Agency Website",
    category: "Agency",
    tech: ["WordPress", "GSAP", "Tailwind"],
    challenge: "Legacy site hurting brand perception.",
    solution: "Bespoke design system with rich motion.",
    result: "2.4x avg. session time",
    gradient: "from-secondary to-accent",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Aurora Retail Sync",
    category: "Automation",
    tech: ["n8n", "Shopify", "Airtable"],
    challenge: "Inventory drift across 3 sales channels.",
    solution: "Bi-directional sync workflow with alerting.",
    result: "Zero stock errors in 6 months",
    gradient: "from-accent to-primary",
    image: "https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Meridian Legal Portal",
    category: "Business",
    tech: ["WordPress", "ACF", "REST API"],
    challenge: "Client documents scattered across email.",
    solution: "Client portal with document versioning.",
    result: "60% fewer support tickets",
    gradient: "from-primary to-accent",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Willow Boutique Store",
    category: "Ecommerce",
    tech: ["WooCommerce", "Klaviyo", "n8n"],
    challenge: "No post-purchase engagement.",
    solution: "Automated flows for reviews, upsells and win-backs.",
    result: "+29% repeat revenue",
    gradient: "from-secondary to-primary",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Foundry AI Support Bot",
    category: "Automation",
    tech: ["OpenAI", "n8n", "Fluent CRM"],
    challenge: "Support team drowning in repetitive tickets.",
    solution: "RAG-powered chatbot with CRM handoff.",
    result: "68% tickets self-resolved",
    gradient: "from-accent to-secondary",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
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
                <article className="group h-full rounded-3xl glass overflow-hidden hover-lift">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-white/90 text-primary px-3 py-1 text-[11px] font-bold tracking-wider uppercase backdrop-blur-md">
                        {p.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white drop-shadow-sm">{p.title}</h3>
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
                    <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View Case Study <ArrowRight className="h-3.5 w-3.5" />
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
