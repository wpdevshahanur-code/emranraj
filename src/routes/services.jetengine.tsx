import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  Boxes,
  Database,
  Filter,
  Calendar,
  MapPin,
  FileCheck2,
  Layers,
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Workflow,
  Search,
  Code2,
} from "lucide-react";

export const Route = createFileRoute("/services/jetengine")({
  head: () => ({
    meta: [
      { title: "JetEngine Dynamic Sites & Booking Systems | Emran Raj" },
      {
        name: "description",
        content:
          "Transform WordPress into a dynamic web app with Crocoblock JetEngine, JetSmartFilters, JetBooking, and custom post types (CPTs). Custom directories, booking engines, and multi-vendor portals.",
      },
      { property: "og:title", content: "JetEngine Dynamic Sites | Emran Raj" },
      {
        property: "og:description",
        content: "Advanced Crocoblock JetEngine and dynamic WordPress development by Emran Raj.",
      },
      { property: "og:url", content: "/services/jetengine" },
    ],
    links: [{ rel: "canonical", href: "/services/jetengine" }],
  }),
  component: JetEnginePage,
});

const capabilities = [
  {
    icon: Database,
    title: "Custom Post Types & Data Relations",
    desc: "Complex data architectures with CPTs, custom taxonomies, and multi-level post relations (Parent/Child, 1:1, 1:N, N:N) for deep data connections.",
  },
  {
    icon: Filter,
    title: "JetSmartFilters Instant Faceted Search",
    desc: "Lightning-fast Ajax search filters with zero page reloads — including range sliders, hierarchical selects, checkboxes, visual radio buttons, and search indexers.",
  },
  {
    icon: Calendar,
    title: "JetBooking & JetAppointment Engines",
    desc: "End-to-end booking workflows with check-in/out calendars, dynamic pricing based on seasons or guest count, slot buffer times, and Stripe payment integration.",
  },
  {
    icon: MapPin,
    title: "Interactive Geolocation Maps",
    desc: "Dynamic map listings using OpenStreetMap/Leaflet or Google Maps with custom marker clusters, popup info cards, and proximity radius search.",
  },
  {
    icon: FileCheck2,
    title: "Front-End Dashboards & Submissions",
    desc: "Custom user profile account portals using JetFormBuilder. Users, agents, or employers can submit listings, manage bookings, and edit data securely.",
  },
  {
    icon: Code2,
    title: "Custom Query Builder & REST APIs",
    desc: "Optimized SQL queries, custom query builder rules, and dynamic REST endpoints that pull clean data without bogging down WordPress performance.",
  },
];

const highlights = [
  { metric: "10+", label: "Dynamic Engines Shipped" },
  { metric: "0 Reload", label: "Instant Ajax Smart Filtering" },
  { metric: "100%", label: "Custom Post Relations" },
  { metric: "Automated", label: "Booking & Calendar Sync" },
];

const featuredDemos = [
  {
    title: "AutoPrime Car Dealership & Listing",
    category: "Automotive Directory",
    result: "Faceted inventory filters",
    tech: ["JetEngine", "JetSmartFilters", "Elementor", "Custom CPTs"],
    url: "https://itsemranraj.com/carlisting",
    desc: "Multi-parameter vehicle search by make, model, price, mileage, and fuel type with interactive test-drive booking.",
  },
  {
    title: "EstateHub Real Estate Portal",
    category: "Property Directory",
    result: "Dynamic map listings",
    tech: ["JetEngine", "Leaflet Maps", "ACF Pro", "Smart Filters"],
    url: "https://itsemranraj.com/realstate",
    desc: "MLS-style real estate search with live interactive map pins, price sliders, agent profiles, and WhatsApp inquiry buttons.",
  },
  {
    title: "RentGo Vehicle Rental Management",
    category: "Fleet Booking Engine",
    result: "Dynamic fleet reservation",
    tech: ["JetBooking", "WooCommerce", "Elementor Pro"],
    url: "https://itsemranraj.com/carrental",
    desc: "Dual location date-range booking calendar, vehicle tier selector, insurance add-ons, and automated confirmation.",
  },
  {
    title: "NextCareer Job Board & Talent Directory",
    category: "Job Marketplace",
    result: "Instant dynamic search",
    tech: ["JetEngine", "Ajax Filters", "Custom Dashboards"],
    url: "https://itsemranraj.com/jobboard",
    desc: "Scalable recruitment portal with salary filters, employer company pages, and front-end resume submissions.",
  },
  {
    title: "MedCenter Doctor Appointment System",
    category: "Healthcare Booking",
    result: "Automated clinic scheduling",
    tech: ["JetAppointment", "Twilio SMS", "Elementor"],
    url: "https://itsemranraj.com/doctorappointment",
    desc: "Multi-department doctor directory with real-time consultation slot reservation and automated SMS confirmations.",
  },
  {
    title: "Grand Hotel & Luxury Resort Booking",
    category: "Hospitality Reservation",
    result: "Complete hotel booking system",
    tech: ["JetBooking", "Elementor Pro", "Stripe"],
    url: "https://itsemranraj.com/grandhotelbooking",
    desc: "Room availability calendar with seasonal rate calculation, suite upgrade options, and automated confirmation emails.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Database & Relation Modeling",
    desc: "We define custom post types, custom taxonomies, meta fields, and data relationships to ensure your directory structure is scalable.",
  },
  {
    step: "02",
    title: "Listing Template Design",
    desc: "We build modern, responsive listing grid items, archive layouts, and single post templates in Elementor with dynamic tags.",
  },
  {
    step: "03",
    title: "Smart Filters & Booking Setup",
    desc: "We configure Ajax indexers, hierarchical filters, booking calendars, pricing logic, and dynamic SQL queries.",
  },
  {
    step: "04",
    title: "Front-End Forms & Testing",
    desc: "We build user dashboard forms for listings and profile management, test edge cases, and ensure fast database query execution.",
  },
];

const faqs = [
  {
    q: "Why use Crocoblock JetEngine instead of a pre-made ThemeForest directory theme?",
    a: "Pre-made directory themes are notoriously rigid, bloated, and almost impossible to customize when your business model changes. JetEngine gives you a 100% custom, lightweight architecture where every field, filter, and booking rule is built specifically for your exact workflow without unwanted bloat.",
  },
  {
    q: "Can users submit their own listings from the front end?",
    a: "Yes! Using JetFormBuilder and JetEngine, we can create front-end forms for users, employers, or property agents to create accounts, submit listings, upload images, and manage their listings from a custom dashboard.",
  },
  {
    q: "Will the site remain fast with thousands of listings?",
    a: "Yes. By using JetEngine's Custom Content Types (CCT) which store data in dedicated SQL tables rather than the standard WordPress postmeta table, database queries remain blisteringly fast even with tens of thousands of items.",
  },
  {
    q: "Can I connect payments and Stripe to the booking system?",
    a: "Yes. JetBooking and JetAppointment integrate seamlessly with WooCommerce and Stripe, allowing you to charge full payments, security deposits, or percentage down-payments automatically.",
  },
];

function JetEnginePage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Specialized Practice"
        title={
          <>
            Complex Directories & Booking Engines.{" "}
            <span className="text-gradient">Powered by JetEngine.</span>
          </>
        }
        description="I transform WordPress into a dynamic web application. Build advanced custom post types (CPTs), relational databases, instant Ajax faceted filters, booking calendars, and interactive map directories with Crocoblock JetEngine."
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
            <span>View Dynamic Sites Portfolio</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageHeader>

      {/* Metrics Bar */}
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
              Dynamic Architecture for <span className="text-gradient">Complex Data</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Whatever complex directory, rental platform, or booking marketplace you envision,
              JetEngine delivers native WordPress performance with web-app versatility.
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

      {/* Live Demonstrations Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Live Platforms
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold">Featured Dynamic Sites</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <span>Explore all dynamic platforms</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredDemos.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-border/60 glass p-6 flex flex-col justify-between h-full hover-lift">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                      {p.category}
                    </span>
                    <h3 className="font-display text-lg font-bold mt-4 text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                    <div className="mt-4 p-3 rounded-xl bg-gradient-brand-soft border border-primary/15">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                        <Sparkles className="h-3 w-3" /> Key Capability
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
                      <span>Explore Live Demo</span>
                      <ExternalLink className="h-3 w-3" />
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
              The Architecture Process
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Building Resilient <span className="text-gradient">Dynamic Platforms</span>
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
                  Ready to Build Your Dynamic Web Platform?
                </h3>
                <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
                  Whether you need a real estate portal, booking platform, or custom directory, I
                  deliver enterprise-grade Crocoblock JetEngine architectures directly on Upwork.
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
                    <span>Request Architecture Review</span>
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
