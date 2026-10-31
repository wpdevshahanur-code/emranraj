import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Mail, MessageCircle, MapPin, Send, Calendar, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start Your WordPress or Automation Project | Emran Raj" },
      { name: "description", content: "Get in touch for WordPress development, AI automation, or a discovery call. Reply within 24 hours." },
      { property: "og:title", content: "Contact Emran Raj" },
      { property: "og:description", content: "Reach out for premium WordPress and automation work." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's build <span className="text-gradient">something great</span></>}
        description="Tell me about your project — I read every message and respond within 24 hours on business days."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl glass p-8 lg:p-10 space-y-5"
            >
              {sent ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="h-14 w-14 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold">Message received</h3>
                  <p className="mt-2 text-muted-foreground">I'll be back in touch within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name"><input required className="input" placeholder="Your full name" /></Field>
                    <Field label="Email"><input required type="email" className="input" placeholder="you@company.com" /></Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Company"><input className="input" placeholder="Company name" /></Field>
                    <Field label="Budget">
                      <select className="input" defaultValue="">
                        <option value="" disabled>Select a range</option>
                        <option>Under $2k</option><option>$2k – $5k</option><option>$5k – $15k</option><option>$15k+</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Service">
                    <select className="input" defaultValue="">
                      <option value="" disabled>What do you need?</option>
                      <option>WordPress website</option><option>WooCommerce store</option>
                      <option>JetEngine / Crocoblock build</option><option>n8n automation</option>
                      <option>AI workflow</option><option>Something else</option>
                    </select>
                  </Field>
                  <Field label="Project details">
                    <textarea rows={5} className="input resize-none" placeholder="Tell me about your project, timelines and any references…" />
                  </Field>
                  <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow">
                    Send message <Send className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2 space-y-5">
            <ContactCard icon={Mail} title="Business email" value="itsemranraj@gmail.com" href="mailto:itsemranraj@gmail.com" />
            <ContactCard icon={MessageCircle} title="WhatsApp" value="+880 1610-857553" href="https://wa.me/8801610857553" />
            <ContactCard icon={MapPin} title="Location" value="Remote · UK, USA & Canada Based" />
            <ContactCard icon={Calendar} title="Prefer to talk?" value="Book a 30-min discovery call" href="/book-call" />

            <div className="rounded-2xl overflow-hidden glass h-60 relative border border-border/60 shadow-sm">
              <iframe
                title="Google Map Location"
                src="https://maps.google.com/maps?q=United%20Kingdom&t=&z=4&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 pointer-events-none">
                <div className="glass rounded-xl px-3.5 py-1.5 flex items-center gap-2 text-xs font-semibold shadow-md bg-background/85 backdrop-blur-md border border-border/50">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> UK, USA & Canada Based
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <style>{`
          .input { width: 100%; border-radius: 0.75rem; border: 1px solid var(--color-border); background: var(--color-background); padding: 0.75rem 1rem; font-size: 0.875rem; outline: none; transition: box-shadow .15s; }
          .input:focus { box-shadow: 0 0 0 2px var(--color-ring); border-color: transparent; }
        `}</style>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function ContactCard({ icon: Icon, title, value, href }: { icon: typeof Mail; title: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl glass p-5 hover-lift">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-elegant shrink-0">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-1 font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block"
    >
      {inner}
    </a>
  ) : inner;
}
