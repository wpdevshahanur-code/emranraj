import { Link } from "@tanstack/react-router";
import { Sparkles, Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-elegant">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-display text-lg font-bold">
                Emran <span className="text-gradient">Raj</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              High-performance WordPress websites and AI-powered automation for
              ambitious businesses. Built to scale, engineered to convert.
            </p>
            <form className="flex gap-2 max-w-sm pt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-white shadow-elegant">
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link to="/book-call" className="hover:text-foreground">Book a Call</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">WordPress Dev</Link></li>
              <li><Link to="/services" className="hover:text-foreground">WooCommerce</Link></li>
              <li><Link to="/services/automation" className="hover:text-foreground">n8n Automation</Link></li>
              <li><Link to="/services/automation" className="hover:text-foreground">AI Workflows</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/projects" className="hover:text-foreground">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Emran Raj. Crafted with care.
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Github, href: "#" },
              { Icon: Mail, href: "mailto:hello@novastack.dev" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="h-9 w-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
