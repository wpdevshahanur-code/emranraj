import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Mail, MessageCircle, MapPin, Send, Calendar, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { submitContact, type ContactFormData } from "@/lib/fluent-form";

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
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const res = await submitContact(formData);
    setLoading(false);

    if (res.success) {
      setSent(true);
      setSuccessMessage(res.message);
    } else {
      setErrorMessage(res.message || "Failed to submit. Please try again or reach out directly.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "",
      service: "",
      message: "",
    });
    setSent(false);
    setErrorMessage(null);
  };

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
              onSubmit={handleSubmit}
              className="rounded-3xl glass p-8 lg:p-10 space-y-5"
            >
              {sent ? (
                <div className="text-center py-16 space-y-4">
                  <CheckCircle2 className="h-16 w-16 text-emerald-400 mx-auto" />
                  <h3 className="font-display text-2xl font-bold">Message received!</h3>
                  <p className="text-muted-foreground max-w-md mx-auto text-sm">
                    {successMessage || "Thank you for getting in touch. I'll review your project details and get back to you within 24 hours."}
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 rounded-xl border border-border glass px-5 py-2.5 text-xs font-semibold hover:text-primary transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {errorMessage && (
                    <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="font-semibold">Unable to submit message</div>
                        <div className="text-xs opacity-90">{errorMessage}</div>
                      </div>
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name">
                      <input
                        required
                        disabled={loading}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input"
                        placeholder="Your full name"
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        required
                        type="email"
                        disabled={loading}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input"
                        placeholder="you@company.com"
                      />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Company">
                      <input
                        disabled={loading}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="input"
                        placeholder="Company name"
                      />
                    </Field>
                    <Field label="Budget">
                      <select
                        disabled={loading}
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="input"
                      >
                        <option value="" disabled>Select a range</option>
                        <option value="Under $2k">Under $2k</option>
                        <option value="$2k – $5k">$2k – $5k</option>
                        <option value="$5k – $15k">$5k – $15k</option>
                        <option value="$15k+">$15k+</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Service">
                    <select
                      disabled={loading}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="input"
                    >
                      <option value="" disabled>What do you need?</option>
                      <option value="WordPress website">WordPress website</option>
                      <option value="WooCommerce store">WooCommerce store</option>
                      <option value="JetEngine / Crocoblock build">JetEngine / Crocoblock build</option>
                      <option value="n8n automation">n8n automation</option>
                      <option value="AI workflow">AI workflow</option>
                      <option value="Something else">Something else</option>
                    </select>
                  </Field>
                  <Field label="Project details">
                    <textarea
                      required
                      disabled={loading}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input resize-none"
                      placeholder="Tell me about your project, timelines and any references…"
                    />
                  </Field>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-elegant hover:shadow-glow disabled:opacity-70 transition-all cursor-pointer"
                  >
                    {loading ? (
                      <>
                        Sending message...
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send message <Send className="h-4 w-4" />
                      </>
                    )}
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
