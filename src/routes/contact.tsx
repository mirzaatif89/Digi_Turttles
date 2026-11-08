import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, GraduationCap, Briefcase } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Digi Turtles" },
      {
        name: "description",
        content:
          "Join a Digi Turtles course or start a project with our agency. Get in touch today.",
      },
      { property: "og:title", content: "Contact Digi Turtles" },
      { property: "og:description", content: "Take the first bold step — talk to Digi Turtles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  const field =
    "w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15";

  return (
    <>
      <PageHero
        kicker="Contact us"
        title={
          <>
            Your journey <span className="text-teal">starts here.</span>
          </>
        }
        sub="Tell us whether you want to learn or grow your business — we'll guide the first step."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">
          {[
            {
              icon: GraduationCap,
              t: "Join the Institute",
              d: "Practical courses in AI, marketing, design, SEO, video and more.",
            },
            {
              icon: Briefcase,
              t: "Work with the Agency",
              d: "Lead generation, marketing, AI automation, SEO and brand building.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 120}>
              <div className="card-lift rounded-3xl border border-border bg-card p-6">
                <c.icon className="mb-3 h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold text-ink">{c.t}</h3>
                <p className="text-sm text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150} className="lg:col-span-3">
          <div className="rounded-3xl bg-card p-8 shadow-soft md:p-10">
            {sent ? (
              <div className="animate-in fade-in zoom-in-95 py-16 text-center">
                <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
                <h3 className="mt-4 text-2xl font-semibold text-ink">Thank you!</h3>
                <p className="mt-2 text-muted-foreground">
                  We've received your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5 md:grid-cols-2">
                <input required placeholder="Your name" className={field} />
                <input required type="email" placeholder="Email address" className={field} />
                <input placeholder="Phone (optional)" className={field} />
                <select className={field} defaultValue="">
                  <option value="" disabled>
                    I'm interested in…
                  </option>
                  <option>A course</option>
                  <option>Agency services</option>
                  <option>Something else</option>
                </select>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your goals"
                  className={`${field} md:col-span-2`}
                />
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-8 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] md:col-span-2">
                  Send message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}
