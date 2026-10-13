import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2, Search, X, Zap, Layers, Globe } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Portfolio | Emran Raj" },
      {
        name: "description",
        content: "Explore 30+ live client websites, dynamic booking engines, SaaS landing pages, and AI web applications built by Emran Raj.",
      },
      { property: "og:title", content: "Projects & Portfolio | Emran Raj" },
      { property: "og:description", content: "Curated portfolio of live client projects, dynamic booking platforms, and high-converting landing pages." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const filterTabs = [
  "All",
  "Client Work",
  "Landing Pages",
  "Dynamic Sites",
  "SaaS & AI",
  "Booking & Directory",
] as const;

type FilterTab = (typeof filterTabs)[number];

type Project = {
  title: string;
  group: "Client Work" | "Landing Pages" | "Dynamic Sites";
  category: "Business" | "Corporate" | "Ecommerce" | "Healthcare" | "Automation" | "SaaS & AI" | "Booking & Directory";
  domain: string;
  url: string;
  image: string;
  tech: string[];
  challenge: string;
  solution: string;
  result: string;
};

const projects: Project[] = [
  // -------------------------------------------------------------
  // 1. VERIFIED CLIENT WORK (6 Sites)
  // -------------------------------------------------------------
  {
    title: "Canoil Canada Industrial Platform",
    group: "Client Work",
    category: "Business",
    domain: "canoilcanadaltd.com",
    url: "https://canoilcanadaltd.com/",
    image: "/projects/canoil.png",
    tech: ["WordPress", "Elementor", "Custom Theme", "B2B Catalog"],
    challenge: "Legacy industrial website with slow navigation and fragmented product technical data sheets.",
    solution: "Custom WordPress rebuild with dynamic lubricant & grease product catalog and B2B inquiry system.",
    result: "3.5x B2B quote inquiries",
  },
  {
    title: "Guardian Metal Resources PLC",
    group: "Client Work",
    category: "Corporate",
    domain: "guardianmetalresources.com",
    url: "https://guardianmetalresources.com",
    image: "/projects/guardianmetal.png",
    tech: ["WordPress", "Elementor Pro", "Financial APIs", "Tailwind"],
    challenge: "Dual-listed (LSE/NASDAQ) mining firm requiring real-time stock ticker integration, investor portals, and regulatory compliance.",
    solution: "Premium corporate WordPress rebuild featuring live market feeds, interactive Nevada project maps, and investor relations portal.",
    result: "100% regulatory compliance",
  },
  {
    title: "Fixion Fuel Research Store",
    group: "Client Work",
    category: "Ecommerce",
    domain: "fixionfuel.shop",
    url: "https://fixionfuel.shop/",
    image: "/projects/fixionfuel.png",
    tech: ["WooCommerce", "WordPress", "Stripe", "Elementor"],
    challenge: "Complex lab-tested peptide catalog requiring COA verification, fast checkout, and high trust.",
    solution: "High-converting WooCommerce store with 1-click checkout, batch verification system, and mobile-first speed.",
    result: "+44% checkout conversion",
  },
  {
    title: "Warmtepomp Expert Utrecht",
    group: "Client Work",
    category: "Automation",
    domain: "warmtepompexpert-utrecht.nl",
    url: "https://warmtepompexpert-utrecht.nl/",
    image: "/projects/warmtepomp.jpg",
    tech: ["WordPress", "Elementor", "JetEngine", "n8n"],
    challenge: "High inbound lead volume for heat pump consultations with manual eligibility checks and scheduling delays.",
    solution: "Dynamic lead capture with custom quote calculator, JetEngine service areas, and automated n8n calendar booking.",
    result: "65% faster lead qualification",
  },
  {
    title: "Amazon Resources Limited Portal",
    group: "Client Work",
    category: "Corporate",
    domain: "amazonresourceslimited.com",
    url: "https://amazonresourceslimited.com/",
    image: "/projects/amazonresources.jpg",
    tech: ["WordPress", "REST API", "ACF Pro", "n8n"],
    challenge: "Distributed project reporting and partner documentation across international resource exploration teams.",
    solution: "Secure corporate portal with multi-language capability, stakeholder updates, and automated asset pipeline.",
    result: "70% faster reporting cycles",
  },
  {
    title: "Hear Clear Mobile Clinic Booking",
    group: "Client Work",
    category: "Healthcare",
    domain: "hearclearmobile.com",
    url: "https://hearclearmobile.com",
    image: "/projects/hearclear.jpg",
    tech: ["WordPress", "Elementor", "JetBooking", "Twilio SMS"],
    challenge: "Mobile audiology clinic struggling with booking cancellations, phone tag, and route management across Somerset.",
    solution: "Mobile-first patient self-booking system with automated SMS reminders and postcode radius validation.",
    result: "72% fewer no-shows",
  },

  // -------------------------------------------------------------
  // 2. LANDING PAGES (17 Sites)
  // -------------------------------------------------------------
  {
    title: "SaaS Nexus Cloud Platform (SaaS 1)",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/saas1",
    url: "https://itsemranraj.com/saas1",
    image: "/projects/saas1.png",
    tech: ["React", "Tailwind CSS", "Modern UI", "Motion"],
    challenge: "Creating an engaging product narrative for a developer cloud toolkit with high conversion rates.",
    solution: "Sleek SaaS landing page featuring feature comparison matrix, dynamic pricing slider, and dark aesthetic.",
    result: "98% PageSpeed Performance",
  },
  {
    title: "Apex Cloud Analytics (SaaS 2)",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/saas2",
    url: "https://itsemranraj.com/saas2",
    image: "/projects/saas2.png",
    tech: ["Next.js", "Tailwind", "Framer Motion", "SaaS Design"],
    challenge: "Communicating complex telemetry and BI metrics to executive buyers without cognitive overload.",
    solution: "Interactive data visualization dashboard previews, interactive ROI calculator, and clean hero showcase.",
    result: "Sub-second initial render",
  },
  {
    title: "SyncWave Team Collaboration (SaaS 3)",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/saas3",
    url: "https://itsemranraj.com/saas3",
    image: "/projects/saas3.png",
    tech: ["TypeScript", "Tailwind CSS", "Framer Motion"],
    challenge: "Standing out in a competitive workplace collaboration & project management SaaS market.",
    solution: "Vibrant high-contrast Bento grid layout, animated feature cards, and frictionless signup flow.",
    result: "+38% CTA click-through rate",
  },
  {
    title: "HyperScale Workflow Engine (SaaS 4)",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/saas4",
    url: "https://itsemranraj.com/saas4",
    image: "/projects/saas4.png",
    tech: ["React", "Vite", "Tailwind CSS", "Lucide"],
    challenge: "Explaining multi-step serverless workflows and trigger chains clearly to enterprise engineering leads.",
    solution: "Animated pipeline visualizer, code-syntax tabs, and enterprise security badge integrations.",
    result: "Zero-latency UI transitions",
  },
  {
    title: "DevPulse Code Insights (SaaS 5)",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/saas5",
    url: "https://itsemranraj.com/saas5",
    image: "/projects/saas5.png",
    tech: ["Next.js", "Tailwind", "Responsive Layout"],
    challenge: "Crafting a minimalist developer-first landing page with high clarity and low visual noise.",
    solution: "Terminal command previews, interactive live SDK demo code snippets, and fast-track signup modal.",
    result: "100/100 Core Web Vitals",
  },
  {
    title: "FinFlow Enterprise Billing (SaaS 6)",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/saas6",
    url: "https://itsemranraj.com/saas6",
    image: "/projects/saas6.png",
    tech: ["React", "Tailwind CSS", "Stripe Elements"],
    challenge: "Building financial credibility and security trust for recurring B2B invoicing solutions.",
    solution: "SOC-2 trust architecture, interactive currency converter, and real-time revenue projection demo.",
    result: "+52% demo request conversion",
  },
  {
    title: "OmniDesk Customer Experience (SaaS 7)",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/saas7",
    url: "https://itsemranraj.com/saas7",
    image: "/projects/saas7.png",
    tech: ["Modern UI", "Tailwind CSS", "Elementor"],
    challenge: "Unifying omnichannel ticketing, live chat, and voice support into an intuitive visual story.",
    solution: "Multi-tab product switcher, automated SLA countdown teaser, and customer proof testimonial slider.",
    result: "Mobile-first responsive design",
  },
  {
    title: "LaunchPad Product Suite (SaaS 8)",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/saas8",
    url: "https://itsemranraj.com/saas8",
    image: "/projects/saas8.png",
    tech: ["React", "Tailwind CSS", "Motion UI"],
    challenge: "Guiding early-stage founders to quickly adopt a unified growth and launch toolkit.",
    solution: "Gamified onboarding preview, interactive checklist showcase, and tier pricing matrix.",
    result: "+41% early-access conversions",
  },
  {
    title: "Cognitive Core AI Portal (AI 1)",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/ai1",
    url: "https://itsemranraj.com/ai1",
    image: "/projects/ai1.png",
    tech: ["Next.js", "Tailwind CSS", "OpenAI APIs"],
    challenge: "Showcasing multimodal AI inference capabilities with futuristic yet accessible UI.",
    solution: "Glow effects, animated neural wave visualizer, and dynamic prompt playground emulator.",
    result: "Top-tier visual presentation",
  },
  {
    title: "Synthetix AI Solutions Agency",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/aiagency",
    url: "https://itsemranraj.com/aiagency",
    image: "/projects/aiagency.png",
    tech: ["WordPress", "Tailwind", "Custom Layouts"],
    challenge: "Positioning an artificial intelligence consultancy for Fortune 500 enterprise transformation engagements.",
    solution: "High-end dark cyber aesthetic, client case studies carousel, and instant AI audit booking form.",
    result: "4.8x client inquiry rate",
  },
  {
    title: "Cortex Cloud AI Enterprise",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/aisoftware",
    url: "https://itsemranraj.com/aisoftware",
    image: "/projects/aisoftware.png",
    tech: ["React", "Tailwind", "ChartJS", "Modern UX"],
    challenge: "Presenting automated machine learning pipelines and model deployment services.",
    solution: "Interactive pipeline builder showcase, latency benchmark graphs, and instant API token sandbox.",
    result: "Ultra-fast interactive UI",
  },
  {
    title: "FlowAutomate AI Workflow System",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/aiautomation",
    url: "https://itsemranraj.com/aiautomation",
    image: "/projects/aiautomation.png",
    tech: ["n8n", "React", "Tailwind CSS", "Webhooks"],
    challenge: "Demonstrating autonomous multi-agent task execution without confusing non-technical stakeholders.",
    solution: "Interactive node graph diagram, pre-built trigger recipe library, and time-saved ROI calculator.",
    result: "80% reduction in manual clicks",
  },
  {
    title: "ChatGenius Conversational Agent",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/aichatbot",
    url: "https://itsemranraj.com/aichatbot",
    image: "/projects/aichatbot.png",
    tech: ["React", "LLM Integration", "Tailwind CSS"],
    challenge: "Highlighting 24/7 intelligent customer care bots that handle nuanced support resolutions.",
    solution: "Interactive live chatbot simulator right on the hero banner with real-time response generation.",
    result: "Instant user engagement",
  },
  {
    title: "CopyForge AI Content Engine",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/aiconentwritter",
    url: "https://itsemranraj.com/aiconentwritter",
    image: "/projects/aiconentwritter.png",
    tech: ["Next.js", "GPT-4o APIs", "Tailwind CSS"],
    challenge: "Differentiating an automated copywriting assistant from generic generative text toys.",
    solution: "Split-screen before/after copy comparison, tone-of-voice picker, and one-click template explorer.",
    result: "10x faster copy drafting",
  },
  {
    title: "StudioAI Video Creator & Editor",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/aivideoeditor",
    url: "https://itsemranraj.com/aivideoeditor",
    image: "/projects/aivideoeditor.png",
    tech: ["React", "Video Rendering", "Tailwind CSS"],
    challenge: "Showcasing automated text-to-video, voice cloning, and AI B-roll generation capabilities.",
    solution: "Interactive timeline editor mockup, multi-aspect ratio preview (16:9 / 9:16), and instant render demos.",
    result: "High-engagement showcase",
  },
  {
    title: "RankPulse AI SEO & Audit Suite",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/aiseo",
    url: "https://itsemranraj.com/aiseo",
    image: "/projects/aiseo.png",
    tech: ["React", "SEO APIs", "Tailwind CSS"],
    challenge: "Visualizing automated SERP competitor analysis and content gap scoring for growth marketers.",
    solution: "Interactive domain search bar, live keyword rank tracker widget, and automated audit report preview.",
    result: "3.2x lead capture rate",
  },
  {
    title: "NeuroArt AI Image Studio",
    group: "Landing Pages",
    category: "SaaS & AI",
    domain: "itsemranraj.com/imagegenerator",
    url: "https://itsemranraj.com/imagegenerator",
    image: "/projects/imagegenerator.png",
    tech: ["Stable Diffusion", "React", "Canvas API"],
    challenge: "Showcasing ultra-high-resolution art generation styles and prompt engineering tools.",
    solution: "Interactive style carousel, prompt remixer sandbox, and high-definition masonry gallery.",
    result: "Immersive visual experience",
  },

  // -------------------------------------------------------------
  // 3. DYNAMIC SITES (10 Sites)
  // -------------------------------------------------------------
  {
    title: "NextCareer Job Board & Talent Directory",
    group: "Dynamic Sites",
    category: "Booking & Directory",
    domain: "itsemranraj.com/jobboard",
    url: "https://itsemranraj.com/jobboard",
    image: "/projects/jobboard.png",
    tech: ["WordPress", "JetEngine", "Custom Post Types", "Ajax Filters"],
    challenge: "Building a scalable recruitment marketplace with multi-tier employer listings, resumes, and search.",
    solution: "Dynamic faceted search by salary, job type, and location, automated employer dashboard, and applicant tracking.",
    result: "Instant dynamic search",
  },
  {
    title: "AutoPrime Car Dealership & Listing",
    group: "Dynamic Sites",
    category: "Booking & Directory",
    domain: "itsemranraj.com/carlisting",
    url: "https://itsemranraj.com/carlisting",
    image: "/projects/carlisting.png",
    tech: ["WordPress", "JetEngine", "Elementor", "Smart Filters"],
    challenge: "Vehicle inventory management with detailed specifications, finance calculator, and dealer leads.",
    solution: "Multi-parameter filter (make, model, year, price, fuel), 360 view gallery, and instant test-drive scheduler.",
    result: "Faceted inventory filters",
  },
  {
    title: "WanderLust Tours & Travel Agency",
    group: "Dynamic Sites",
    category: "Booking & Directory",
    domain: "itsemranraj.com/tourandtravel",
    url: "https://itsemranraj.com/tourandtravel",
    image: "/projects/tourandtravel.png",
    tech: ["WordPress", "WooCommerce", "JetBooking", "Elementor"],
    challenge: "Coordinating multi-day travel packages with date-based availability, group sizing, and itineraries.",
    solution: "Interactive booking calendar, day-by-day interactive itinerary maps, and automated invoice delivery.",
    result: "Full online booking flow",
  },
  {
    title: "EstateHub Real Estate & Property Portal",
    group: "Dynamic Sites",
    category: "Booking & Directory",
    domain: "itsemranraj.com/realstate",
    url: "https://itsemranraj.com/realstate",
    image: "/projects/realstate.png",
    tech: ["WordPress", "JetEngine", "Leaflet Maps", "ACF Pro"],
    challenge: "Providing an MLS-style property search with geolocation pins, floor plans, and agent assignment.",
    solution: "Interactive map search, dynamic price range sliders, virtual tour embedding, and instant agent WhatsApp connect.",
    result: "Dynamic map listings",
  },
  {
    title: "Serenity Luxury Spa & Wellness Retreat",
    group: "Dynamic Sites",
    category: "Booking & Directory",
    domain: "itsemranraj.com/spa",
    url: "https://itsemranraj.com/spa",
    image: "/projects/spa.png",
    tech: ["WordPress", "Elementor", "JetAppointment", "Stripe"],
    challenge: "High friction in booking spa treatments, therapist selection, and private wellness rooms.",
    solution: "Step-by-step service wizard, therapist timetable selection, automated SMS confirmations, and deposit payment.",
    result: "Seamless appointment booking",
  },
  {
    title: "RentGo Vehicle Rental & Fleet Management",
    group: "Dynamic Sites",
    category: "Booking & Directory",
    domain: "itsemranraj.com/carrental",
    url: "https://itsemranraj.com/carrental",
    image: "/projects/carrental.png",
    tech: ["WordPress", "JetBooking", "Elementor Pro", "WooCommerce"],
    challenge: "Car rental reservations requiring flexible pickup/dropoff locations, insurance add-ons, and dynamic pricing.",
    solution: "Dual location date-range picker, vehicle tier selector, damage deposit handling, and instant reservation confirmation.",
    result: "Dynamic fleet reservation",
  },
  {
    title: "Grand Hotel & Luxury Resort Booking",
    group: "Dynamic Sites",
    category: "Booking & Directory",
    domain: "itsemranraj.com/grandhotelbooking",
    url: "https://itsemranraj.com/grandhotelbooking",
    image: "/projects/grandhotelbooking.png",
    tech: ["WordPress", "JetBooking", "Elementor", "Payment Gateway"],
    challenge: "Luxury hotel room reservation system with seasonal rate calculation, room amenities, and guest options.",
    solution: "Check-in/check-out date picker with live room availability, suite upgrade selector, and instant booking summary.",
    result: "Complete hotel booking system",
  },
  {
    title: "MedCenter Doctor & Clinic Appointment System",
    group: "Dynamic Sites",
    category: "Booking & Directory",
    domain: "itsemranraj.com/doctorappointment",
    url: "https://itsemranraj.com/doctorappointment",
    image: "/projects/doctorappointment.png",
    tech: ["WordPress", "JetAppointment", "Elementor", "Twilio"],
    challenge: "Coordinating multi-specialty physician appointments, working hours, and emergency schedule slots.",
    solution: "Department filter, doctor profile picker, real-time time-slot allocation, and automated reminder notifications.",
    result: "Automated clinic scheduling",
  },
  {
    title: "Cutcloud Barbershop & Grooming Booking",
    group: "Dynamic Sites",
    category: "Booking & Directory",
    domain: "itsemranraj.com/berberappointment",
    url: "https://itsemranraj.com/berberappointment",
    image: "/projects/berberappointment.png",
    tech: ["WordPress", "JetAppointment", "Elementor", "Stripe"],
    challenge: "Walk-in queuing and chaotic barber appointment schedules during peak evening hours.",
    solution: "Barber stylist selection, service combo menu, real-time calendar slot reservation, and automated reminder texts.",
    result: "Zero scheduling overlap",
  },
  {
    title: "Canoil High-Performance Lubricants (Oily)",
    group: "Dynamic Sites",
    category: "Corporate",
    domain: "itsemranraj.com/oily",
    url: "https://itsemranraj.com/oily",
    image: "/projects/oily.png",
    tech: ["WordPress", "Elementor", "GSAP Animations", "Mega Menu"],
    challenge: "Presenting complex industrial fluid formulation, analytical testing services, and B2B packaging solutions.",
    solution: "GSAP scroll-triggered text reveals, comprehensive industrial mega menu, and dynamic product catalog.",
    result: "Modern animated industrial UX",
  },
];

function ProjectsPage() {
  const [filter, setFilter] = useState<FilterTab>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const tabCounts = useMemo(() => {
    return {
      All: projects.length,
      "Client Work": projects.filter((p) => p.group === "Client Work").length,
      "Landing Pages": projects.filter((p) => p.group === "Landing Pages").length,
      "Dynamic Sites": projects.filter((p) => p.group === "Dynamic Sites").length,
      "SaaS & AI": projects.filter((p) => p.category === "SaaS & AI").length,
      "Booking & Directory": projects.filter((p) => p.category === "Booking & Directory").length,
    };
  }, []);

  const visibleProjects = useMemo(() => {
    return projects.filter((p) => {
      // 1. Tab filter
      let matchesTab = true;
      if (filter === "Client Work") matchesTab = p.group === "Client Work";
      else if (filter === "Landing Pages") matchesTab = p.group === "Landing Pages";
      else if (filter === "Dynamic Sites") matchesTab = p.group === "Dynamic Sites";
      else if (filter === "SaaS & AI") matchesTab = p.category === "SaaS & AI";
      else if (filter === "Booking & Directory") matchesTab = p.category === "Booking & Directory";

      if (!matchesTab) return false;

      // 2. Search query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        p.title.toLowerCase().includes(q) ||
        p.domain.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.group.toLowerCase().includes(q) ||
        p.solution.toLowerCase().includes(q) ||
        p.result.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [filter, searchQuery]);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Portfolio & Live Demos"
        title={
          <>
            Real projects. <span className="text-gradient">Real results.</span>
          </>
        }
        description={`Explore ${projects.length} verified client builds, custom SaaS landing pages, and dynamic database-driven web platforms.`}
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Controls: Search and Filter Tabs */}
          <Reveal>
            <div className="flex flex-col items-center gap-6 mb-12">
              {/* Search Bar */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, tech (React, JetEngine...), or topic..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-full glass border border-border/60 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    title="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Filter Tabs with Badges */}
              <div className="flex flex-wrap justify-center gap-2">
                {filterTabs.map((tab) => {
                  const count = tabCounts[tab] ?? 0;
                  const isActive = filter === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setFilter(tab)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                        isActive
                          ? "bg-gradient-brand text-white shadow-elegant scale-[1.02]"
                          : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
                      }`}
                    >
                      <span>{tab}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                          isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Results Count Counter */}
              <div className="text-xs text-muted-foreground font-medium">
                Showing <span className="font-semibold text-foreground">{visibleProjects.length}</span> of{" "}
                <span className="font-semibold text-foreground">{projects.length}</span> projects
                {searchQuery && (
                  <span>
                    {" "}
                    matching "<span className="text-primary">{searchQuery}</span>"
                  </span>
                )}
              </div>
            </div>
          </Reveal>

          {/* 3-Column Modern Cards Grid */}
          {visibleProjects.length === 0 ? (
            <div className="text-center py-20 glass rounded-3xl border border-border/60 max-w-lg mx-auto">
              <p className="text-lg font-semibold text-foreground">No projects found</p>
              <p className="text-xs text-muted-foreground mt-1">
                Try searching for something else or reset your filter.
              </p>
              <button
                onClick={() => {
                  setFilter("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((p, i) => (
                <Reveal key={p.url + p.title} delay={Math.min(i * 0.04, 0.4)} className="h-full">
                  <article className="group h-full rounded-2xl border border-border/60 bg-card/70 backdrop-blur-xl hover:border-primary/40 hover:shadow-glow transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    {/* Entire Card Body is Clickable to p.url */}
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block flex-1 cursor-pointer focus:outline-none"
                      title={`Visit ${p.title} live site`}
                    >
                      {/* Modern Browser Frame Header Bar */}
                      <div className="flex items-center justify-between px-3.5 py-2.5 bg-muted/60 dark:bg-black/40 border-b border-border/60 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                          <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-background/80 border border-border/50 text-[11px] font-mono text-muted-foreground truncate max-w-[190px]">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span className="truncate">{p.domain}</span>
                        </div>
                        <span className="text-muted-foreground group-hover:text-primary transition-colors">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </span>
                      </div>

                      {/* Screenshot Container */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                        {/* Top-Left Category Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="rounded-full bg-background/90 text-primary border border-primary/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase backdrop-blur-md shadow-sm">
                            {p.category}
                          </span>
                        </div>

                        {/* Top-Right Live Action Pill */}
                        <div className="absolute top-3 right-3 z-10">
                          <span className="inline-flex items-center gap-1 rounded-full bg-black/65 group-hover:bg-black/90 text-white px-2.5 py-0.5 text-[10px] font-semibold backdrop-blur-md transition-all shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live ↗
                          </span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-5 flex flex-col gap-3.5">
                        {/* Status Label */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          {p.group === "Client Work" ? (
                            <span className="font-semibold text-emerald-500 flex items-center gap-1 text-[11px]">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              Verified Client Build
                            </span>
                          ) : p.group === "Dynamic Sites" ? (
                            <span className="font-semibold text-sky-400 flex items-center gap-1 text-[11px]">
                              <Layers className="h-3.5 w-3.5" />
                              Dynamic Web Platform
                            </span>
                          ) : (
                            <span className="font-semibold text-amber-400 flex items-center gap-1 text-[11px]">
                              <Zap className="h-3.5 w-3.5" />
                              High-Converting Landing Page
                            </span>
                          )}
                          <span className="text-[10px] font-mono uppercase text-muted-foreground/80">
                            {p.group}
                          </span>
                        </div>

                        {/* Project Title */}
                        <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors flex items-start justify-between gap-1">
                          <span>{p.title}</span>
                        </h3>

                        {/* Tech Stack Tags */}
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

                        {/* Key Metric & Solution Highlight */}
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
                    </a>

                    {/* Actions Bar */}
                    <div className="px-5 pb-5 pt-3 border-t border-border/50 flex items-center justify-between gap-2">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline group/btn"
                      >
                        <Globe className="h-3.5 w-3.5" />
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
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
