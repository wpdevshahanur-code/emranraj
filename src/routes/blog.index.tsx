import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Search, Tag, Clock, Calendar, BookOpen, ExternalLink, X } from "lucide-react";
import { blogPosts, blogCategories, type BlogCategory } from "@/data/blogPosts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog & Field Notes — WordPress, Automation & AI | Emran Raj" },
      {
        name: "description",
        content:
          "Deep technical guides, architecture breakdowns, n8n automation recipes, and WooCommerce performance playbooks by Emran Raj.",
      },
      { property: "og:title", content: "Blog & Field Notes | Emran Raj" },
      {
        property: "og:description",
        content:
          "Production-tested insights on WordPress engineering, n8n automations, AI workflows, and technical SEO.",
      },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        post.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: blogPosts.length };
    blogPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  const featuredPost = useMemo(() => {
    // If user is searching or has filtered, don't show separate hero if it's filtered out
    if (selectedCategory !== "All" || searchQuery.trim() !== "") {
      return null;
    }
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, [selectedCategory, searchQuery]);

  const regularPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Journal & Field Notes"
        title={
          <>
            Engineering playbooks and <span className="text-gradient">field notes</span>
          </>
        }
        description="Authentic technical guides, production-tested n8n automation recipes, WooCommerce performance tuning, and AI agent architectures."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Featured Article Banner */}
          {featuredPost && (
            <Reveal className="mb-14">
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group relative block rounded-3xl overflow-hidden glass hover-lift border border-border/60 hover:border-primary/50 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-12 items-stretch">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-7 overflow-hidden bg-muted">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
                    <span className="absolute top-5 left-5 rounded-full bg-gradient-brand text-white px-3.5 py-1 text-xs font-bold shadow-soft">
                      ★ FEATURED ARTICLE
                    </span>
                  </div>

                  <div className="p-8 lg:p-12 lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                        <span className="rounded-full bg-primary/10 text-primary font-semibold px-2.5 py-0.5 border border-primary/20">
                          {featuredPost.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" /> {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" /> {featuredPost.read} read
                        </span>
                      </div>

                      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors leading-tight">
                        {featuredPost.title}
                      </h2>

                      <p className="mt-4 text-muted-foreground line-clamp-3 text-sm md:text-base leading-relaxed">
                        {featuredPost.excerpt}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {featuredPost.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-[11px] font-medium bg-secondary/50 text-secondary-foreground px-2 py-0.5 rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="h-8 w-8 rounded-full object-cover ring-2 ring-primary/20"
                        />
                        <div className="text-xs">
                          <div className="font-medium text-foreground">{featuredPost.author.name}</div>
                          <div className="text-muted-foreground">{featuredPost.author.role.split("&")[0]}</div>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                        Read Guide <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Filter Bar: Categories & Search */}
          <div className="mb-10 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {blogCategories.map((c) => {
                const count = categoryCounts[c] || 0;
                const isSelected = selectedCategory === c;
                return (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      isSelected
                        ? "bg-gradient-brand text-white shadow-elegant scale-[1.02]"
                        : "glass text-muted-foreground hover:text-foreground hover:border-primary/40"
                    }`}
                  >
                    <span>{c}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        isSelected ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, keywords, tags…"
                className="w-full rounded-xl glass pl-10 pr-9 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground/70"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Results Count & Active Filter Pills */}
          {(searchQuery || selectedCategory !== "All") && (
            <div className="mb-8 flex items-center justify-between text-xs text-muted-foreground px-1">
              <div>
                Showing <span className="font-bold text-foreground">{filteredPosts.length}</span>{" "}
                {filteredPosts.length === 1 ? "article" : "articles"}
                {selectedCategory !== "All" && (
                  <span>
                    {" "}
                    in <span className="font-semibold text-primary">{selectedCategory}</span>
                  </span>
                )}
                {searchQuery && (
                  <span>
                    {" "}
                    matching &ldquo;<span className="font-semibold text-foreground">{searchQuery}</span>&rdquo;
                  </span>
                )}
              </div>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {regularPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.04} className="h-full flex flex-col">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group relative h-full flex flex-col justify-between rounded-3xl overflow-hidden glass hover-lift border border-border/60 hover:border-primary/40 transition-all duration-300"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        <span className="absolute top-3.5 left-3.5 rounded-full bg-background/90 backdrop-blur-md text-primary font-semibold text-[11px] px-3 py-0.5 shadow-sm border border-border/40">
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {post.date}
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {post.read}
                          </span>
                        </div>

                        <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-medium bg-muted/70 text-muted-foreground px-2 py-0.5 rounded"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer with Author and CTA */}
                    <div className="p-6 pt-0 mt-auto border-t border-border/40 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-6 w-6 rounded-full object-cover"
                        />
                        <span className="text-xs font-medium text-foreground">{post.author.name}</span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="rounded-3xl glass p-12 text-center max-w-xl mx-auto my-8 border border-border/60">
              <BookOpen className="h-12 w-12 text-muted-foreground/60 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold">No articles found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}. Try searching for a different keyword or resetting your filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-all"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Bottom Newsletter / Upwork Advisory Banner */}
          <div className="mt-20">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden glass p-8 md:p-12 border border-border/80 text-center max-w-4xl mx-auto">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                <span className="text-xs font-bold uppercase tracking-wider text-primary">Technical Advisory</span>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">
                  Need custom implementation for your business?
                </h3>
                <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                  From high-performance WooCommerce architectures to self-hosted n8n automation clusters and custom JetEngine databases — let&apos;s build it right the first time.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://www.upwork.com/freelancers/~015c9f89118b7be509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-all"
                  >
                    Hire on Upwork <ExternalLink className="h-4 w-4" />
                  </a>
                  <Link
                    to="/book-call"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40 transition-all"
                  >
                    Schedule a Discovery Call <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
