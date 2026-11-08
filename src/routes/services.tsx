import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { PageHero, SectionHead } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { serviceIcons, courseIcons } from "@/components/site/icons";
import { services, courses } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Courses — Digi Turtles" },
      {
        name: "description",
        content:
          "Lead generation, digital marketing, AI automation, SEO, brand building and practical courses from Digi Turtles.",
      },
      { property: "og:title", content: "Digi Turtles Services & Courses" },
      {
        property: "og:description",
        content: "Agency services for businesses and practical courses for learners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const steps = ["Learn", "Practice", "Build", "Showcase", "Monetize"];

function Services() {
  return (
    <>
      <PageHero
        kicker="Services"
        title={
          <>
            Strategy + execution + <span className="text-teal">systems.</span>
          </>
        }
        sub="Agency services that deliver measurable growth, plus Institute courses that make people independent."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead k="For businesses" title="Agency services" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i]!;
            return (
              <Reveal key={s.t} delay={i * 80}>
                <div className="card-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent transition-transform duration-500 group-hover:scale-[3]" />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-primary-foreground shadow-glow">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-ink">{s.t}</h3>
                    <p className="mt-2 text-muted-foreground">{s.d}</p>
                    <ul className="mt-5 space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="h-4 w-4 text-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            k="Digi Turtles Institute"
            title="Courses for learners"
            sub="Individual programs, career tracks, workshops or bundled learning paths."
            dark
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((c, i) => {
              const Icon = courseIcons[i]!;
              return (
                <Reveal key={c.t} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-ink-muted/20 p-6 transition-all hover:-translate-y-1 hover:border-primary">
                    <Icon className="mb-4 h-7 w-7 text-primary-glow" />
                    <h3 className="font-semibold text-ink-foreground">{c.t}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{c.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead k="How we teach" title="Our learning model" center />
        <div className="flex flex-wrap items-center justify-center gap-3">
          {steps.map((s, i) => (
            <Reveal key={s} delay={i * 120}>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent px-6 py-3 font-display font-semibold text-accent-foreground">
                  {s}
                </span>
                {i < steps.length - 1 && <ArrowRight className="h-5 w-5 text-primary" />}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-3.5 font-semibold text-primary-foreground shadow-glow"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
