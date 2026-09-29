import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Share2,
  Bookmark,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) {
      return {
        meta: [
          { title: "Article Not Found | Emran Raj" },
          { name: "robots", content: "noindex, follow" },
        ],
      };
    }
    return {
      meta: [
        { title: `${post.title} | Emran Raj` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.image },
        { property: "og:url", content: `/blog/${post.slug}` },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: post.title },
        { property: "twitter:description", content: post.excerpt },
        { property: "twitter:image", content: post.image },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
    };
  },
  component: SingleBlogPostPage,
});

function CodeBlock({
  code,
  language,
  filename,
}: {
  code: string;
  language: string;
  filename?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-border/80 bg-black/90 shadow-xl text-xs md:text-sm">
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10 text-muted-foreground font-mono">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </span>
          {filename && <span className="ml-2 text-foreground font-medium">{filename}</span>}
        </div>
        <div className="flex items-center gap-3">
          <span className="uppercase text-[11px] font-semibold text-primary/80">{language}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-white transition-colors"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto text-emerald-300 font-mono leading-relaxed">
        <pre>{code}</pre>
      </div>
    </div>
  );
}

function SingleBlogPostPage() {
  const { slug } = useParams({ from: "/blog/$slug" });
  const post = useMemo(() => blogPosts.find((p) => p.slug === slug), [slug]);

  const [copiedLink, setCopiedLink] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeTocId, setActiveTocId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }

      if (post?.tableOfContents) {
        const headings = post.tableOfContents.map((t) => document.getElementById(t.id));
        const scrollPosition = window.scrollY + 180;
        for (let i = headings.length - 1; i >= 0; i--) {
          const el = headings[i];
          if (el && el.offsetTop <= scrollPosition) {
            setActiveTocId(post.tableOfContents[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.slug !== post.slug)
      .slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <SiteLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-24">
          <BookOpen className="h-16 w-16 text-muted-foreground/60 mb-6" />
          <h1 className="font-display text-3xl md:text-4xl font-bold">Article Not Found</h1>
          <p className="mt-3 text-muted-foreground max-w-md">
            The article you are looking for does not exist or may have been moved.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Return to all articles
          </Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-border/40 pointer-events-none">
        <div
          className="h-full bg-gradient-brand transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <article className="pt-28 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary font-medium">{post.category}</span>
          </nav>

          {/* Post Header */}
          <header className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap items-center gap-3 text-xs mb-5">
              <span className="rounded-full bg-gradient-brand text-white font-bold px-3 py-1 text-xs shadow-soft">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" /> {post.date}
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {post.read} read
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-foreground">
              {post.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Bar */}
            <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div>
                  <div className="font-display font-semibold text-foreground text-sm">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 text-xs font-medium rounded-xl glass px-3.5 py-2 text-muted-foreground hover:text-foreground transition-all"
                  title="Copy link"
                >
                  {copiedLink ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-3.5 w-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>
                <a
                  href={post.author.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-xl bg-gradient-brand text-white px-4 py-2 shadow-elegant hover:shadow-glow transition-all"
                >
                  Hire on Upwork <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </header>

          {/* Featured Cover Image */}
          <div className="max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden glass border border-border/80 shadow-elegant aspect-[16/9] bg-muted relative">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          {/* Main Layout: Article + Sticky Sidebar */}
          <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              {/* Key Takeaways Box */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="rounded-3xl p-6 md:p-8 bg-primary/5 border border-primary/20 shadow-soft">
                  <div className="flex items-center gap-2 text-primary font-display font-bold text-base md:text-lg mb-4">
                    <Sparkles className="h-5 w-5" /> Key Takeaways & Executive Summary
                  </div>
                  <ul className="space-y-3">
                    {post.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sections Rendering */}
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28 space-y-5">
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground border-b border-border/50 pb-3">
                    {section.title}
                  </h2>

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-base text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Callout Card */}
                  {section.callout && (
                    <div
                      className={`my-6 rounded-2xl p-5 border flex items-start gap-3.5 ${
                        section.callout.type === "warning"
                          ? "bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-amber-200"
                          : section.callout.type === "tip"
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-950 dark:text-emerald-200"
                          : "bg-primary/10 border-primary/30 text-foreground"
                      }`}
                    >
                      {section.callout.type === "warning" ? (
                        <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                      ) : section.callout.type === "tip" ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      ) : (
                        <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="font-semibold text-sm mb-1">{section.callout.title}</div>
                        <div className="text-xs md:text-sm opacity-90 leading-relaxed">
                          {section.callout.text}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Code Snippet */}
                  {section.code && (
                    <CodeBlock
                      code={section.code.code}
                      language={section.code.language}
                      filename={section.code.filename}
                    />
                  )}

                  {/* Stats Cards */}
                  {section.stats && (
                    <div className="my-6 grid sm:grid-cols-2 gap-4">
                      {section.stats.map((st, sIdx) => (
                        <div key={sIdx} className="rounded-2xl glass p-5 border border-border/60">
                          <div className="font-display text-2xl md:text-3xl font-extrabold text-gradient">
                            {st.value}
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Checklist */}
                  {section.checklist && (
                    <div className="my-6 rounded-2xl glass p-6 border border-border/60 space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                        Action Checklist
                      </div>
                      {section.checklist.map((item, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-3 text-sm">
                          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary/20 text-primary font-bold text-xs shrink-0">
                            ✓
                          </span>
                          <span className="text-foreground/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {/* Tags Box */}
              <div className="pt-8 border-t border-border/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-muted-foreground mr-1">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-lg glass px-3 py-1 text-xs font-medium text-muted-foreground border border-border/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio Box */}
              <div className="rounded-3xl glass p-8 border border-border/80 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-20 w-20 rounded-2xl object-cover ring-4 ring-primary/20 shrink-0"
                />
                <div className="space-y-3 text-center sm:text-left">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Written by {post.author.name}
                    </h3>
                    <p className="text-xs text-primary font-medium">{post.author.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Full-Stack WordPress Engineer & Automation Architect with 8+ years experience
                    shipping high-converting WooCommerce stores, complex JetEngine directories, and
                    mission-critical n8n automation pipelines.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                    <a
                      href={post.author.upworkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-xs font-semibold text-white shadow-elegant hover:shadow-glow transition-all"
                    >
                      Hire on Upwork <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <Link
                      to="/book-call"
                      className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2 text-xs font-semibold text-foreground hover:border-primary/40 transition-all"
                    >
                      Book Discovery Call <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-28 space-y-8">
                {/* Table of Contents */}
                {post.tableOfContents && post.tableOfContents.length > 0 && (
                  <div className="rounded-3xl glass p-6 border border-border/80 shadow-soft">
                    <div className="flex items-center gap-2 font-display text-sm font-bold text-foreground mb-4">
                      <BookOpen className="h-4 w-4 text-primary" /> Table of Contents
                    </div>
                    <ul className="space-y-2 text-xs">
                      {post.tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className={`block py-1 px-2 rounded-lg transition-all ${
                              activeTocId === item.id
                                ? "bg-primary/10 text-primary font-bold translate-x-1"
                                : "text-muted-foreground hover:text-foreground hover:translate-x-0.5"
                            }`}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Direct Hire CTA Widget */}
                <div className="rounded-3xl p-6 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent border border-primary/30 text-center space-y-4 shadow-elegant">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-soft mx-auto">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-base font-bold">
                    Need this built for your business?
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Skip the learning curve. Get custom WordPress builds and bulletproof n8n automations delivered on time.
                  </p>
                  <a
                    href={post.author.upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-2.5 text-xs font-semibold text-white shadow-elegant hover:shadow-glow transition-all"
                  >
                    Hire Emran on Upwork <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-24 pt-16 border-t border-border/60">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Keep Reading
                  </span>
                  <h3 className="font-display text-2xl font-bold mt-1">Related Articles & Guides</h3>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  View all articles <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    to={`/blog/${rPost.slug}`}
                    className="group rounded-2xl overflow-hidden glass hover-lift border border-border/60 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          src={rPost.image}
                          alt={rPost.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute top-3 left-3 rounded-full bg-background/90 backdrop-blur-md text-primary font-semibold text-[10px] px-2.5 py-0.5 shadow-sm">
                          {rPost.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <div className="text-[11px] text-muted-foreground mb-2 flex items-center gap-2">
                          <span>{rPost.date}</span>
                          <span>·</span>
                          <span>{rPost.read} read</span>
                        </div>
                        <h4 className="font-display text-sm font-bold group-hover:text-primary transition-colors line-clamp-2">
                          {rPost.title}
                        </h4>
                        <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                          {rPost.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="p-5 pt-0 mt-auto border-t border-border/40 flex items-center justify-end">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </SiteLayout>
  );
}
