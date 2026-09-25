import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles, ChevronDown, Code2, Workflow } from "lucide-react";

const serviceItems = [
  { to: "/services/webdesign", label: "Web Design", desc: "WordPress builds & UX", icon: Code2 },
  { to: "/services/automation", label: "n8n Automation", desc: "AI & workflow automation", icon: Workflow },
] as const;

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services", hasDropdown: true },
  { to: "/projects", label: "Projects" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-elegant">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Emran <span className="text-gradient">Raj</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) =>
              "hasDropdown" in l && l.hasDropdown ? (
                <div key={l.to} className="relative group">
                  <Link
                    to={l.to}
                    activeProps={{ className: "text-foreground bg-muted" }}
                    inactiveProps={{ className: "text-muted-foreground hover:text-foreground hover:bg-muted/60" }}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    {l.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full pt-2 w-72 z-50">
                    <div className="glass rounded-2xl p-2 shadow-elegant border border-border">
                      {serviceItems.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.to}
                            to={s.to}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                          >
                            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white shrink-0">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="flex flex-col">
                              <span className="text-sm font-semibold text-foreground">{s.label}</span>
                              <span className="text-xs text-muted-foreground">{s.desc}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-foreground bg-muted" }}
                  inactiveProps={{ className: "text-muted-foreground hover:text-foreground hover:bg-muted/60" }}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  {l.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/book-call"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow transition-shadow"
            >
              Book Discovery Call
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 shadow-soft animate-fade-up">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <div key={l.to} className="flex flex-col">
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                  {"hasDropdown" in l && l.hasDropdown && (
                    <div className="ml-4 mt-1 flex flex-col border-l border-border pl-3">
                      {serviceItems.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          onClick={() => setOpen(false)}
                          className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/book-call"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white"
              >
                Book Discovery Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
