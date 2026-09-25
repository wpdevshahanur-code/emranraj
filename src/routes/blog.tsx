import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Search } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — WordPress, Automation & AI Insights | NovaStack" },
      { name: "description", content: "Deep dives on WordPress performance, n8n automation, AI workflows, technical SEO and modern web tutorials." },
      { property: "og:title", content: "NovaStack Blog" },
      { property: "og:description", content: "WordPress, automation, AI and SEO insights." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const categories = ["All", "WordPress", "Automation", "AI", "SEO", "Tutorials"] as const;

type Post = {
  title: string;
  excerpt: string;
  category: (typeof categories)[number];
  date: string;
  read: string;
  gradient: string;
  image: string;
  featured?: boolean;
};

const posts: Post[] = [
  {
    title: "Why WordPress + n8n Beats Custom SaaS for 90% of Businesses",
    excerpt: "You don't need a custom app. You need WordPress, n8n and a weekend. Here's the stack I use for six-figure client operations.",
    category: "Automation",
    date: "Jun 12, 2026",
    read: "8 min",
    gradient: "from-primary to-secondary",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
  {
    title: "The Core Web Vitals Playbook for WooCommerce in 2026",
    excerpt: "Every optimisation I apply on client stores to hit 95+ PageSpeed without breaking checkout.",
    category: "SEO",
    date: "May 28, 2026",
    read: "12 min",
    gradient: "from-accent to-primary",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Building AI Lead Scoring with OpenAI and Fluent CRM",
    excerpt: "A step-by-step walkthrough of the workflow scoring leads in near-real time.",
    category: "AI",
    date: "May 09, 2026",
    read: "10 min",
    gradient: "from-secondary to-accent",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Ten JetEngine Patterns I Use on Every Real Estate Build",
    excerpt: "Relations, listings, meta queries and hidden performance tricks.",
    category: "WordPress",
    date: "Apr 22, 2026",
    read: "9 min",
    gradient: "from-primary to-accent",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Automating Client Onboarding with n8n and Notion",
    excerpt: "How I onboard new clients in 90 seconds — contracts, folders, Slack channels included.",
    category: "Automation",
    date: "Apr 03, 2026",
    read: "7 min",
    gradient: "from-accent to-secondary",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "A Practical Guide to Technical SEO for WordPress",
    excerpt: "Schema, sitemaps, hreflang, canonical tags — the whole checklist I run before every launch.",
    category: "SEO",
    date: "Mar 18, 2026",
    read: "14 min",
    gradient: "from-secondary to-primary",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Custom Elementor Widgets Without the Bloat",
    excerpt: "Ship performant custom widgets without loading a hundred kilobytes of unused CSS.",
    category: "Tutorials",
    date: "Mar 02, 2026",
    read: "11 min",
    gradient: "from-primary to-accent",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "RAG-Powered Support Bots on WordPress in Under a Day",
    excerpt: "The exact stack I use to build knowledge-grounded chatbots for client sites.",
    category: "AI",
    date: "Feb 14, 2026",
    read: "10 min",
    gradient: "from-accent to-primary",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Migrating a Live WooCommerce Store With Zero Downtime",
    excerpt: "Runbook for high-stakes migrations without losing orders, sessions, or SEO equity.",
    category: "WordPress",
    date: "Jan 29, 2026",
    read: "13 min",
    gradient: "from-secondary to-accent",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
  },
];

function BlogPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [q, setQ] = useState("");
  const visible = posts.filter((p) => (cat === "All" || p.category === cat) && p.title.toLowerCase().includes(q.toLowerCase()));
  const featured = posts.find((p) => p.featured);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Journal"
        title={<>Ideas, playbooks and <span className="text-gradient">field notes</span></>}
        description="Everything I learn shipping WordPress and automation for clients — written up so you don't have to relearn it."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {featured && (
            <Reveal>
              <Link to="/blog" className="group block rounded-3xl overflow-hidden glass hover-lift mb-12">
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-muted">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 text-primary px-3 py-1 text-[11px] font-bold backdrop-blur-md">FEATURED</span>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex gap-3 text-xs text-muted-foreground mb-4">
                      <span className="rounded-md bg-muted px-2 py-0.5">{featured.category}</span>
                      <span>{featured.date}</span>
                      <span>· {featured.read} read</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">{featured.title}</h2>
                    <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read article <ArrowRight className="h-3.5 w-3.5" /></span>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${cat === c ? "bg-gradient-brand text-white shadow-elegant" : "glass text-muted-foreground hover:text-foreground"}`}>
                  {c}
                </button>
              ))}
            </div>
            <div className="relative md:ml-auto md:max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…" className="w-full rounded-xl glass pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.filter((p) => !p.featured).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <Link to="/blog" className="group block h-full rounded-2xl overflow-hidden glass hover-lift">
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 text-primary px-3 py-1 text-[11px] font-bold backdrop-blur-md">{p.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 text-xs text-muted-foreground">
                      <span>{p.date}</span><span>· {p.read} read</span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
