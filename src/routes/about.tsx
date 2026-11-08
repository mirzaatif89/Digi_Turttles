import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHead } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Digi Turtles — Our Story & Mission" },
      {
        name: "description",
        content:
          "Why the turtle? Learn the story, philosophy and mission behind Digi Turtles Institute + Agency.",
      },
      { property: "og:title", content: "About Digi Turtles" },
      {
        property: "og:description",
        content: "Digital skills + the turtle mindset: the story behind Digi Turtles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const pillars = [
  { t: "Institute", d: "Practical education, skills and career-oriented learning." },
  {
    t: "Agency",
    d: "Real-world B2B services that help businesses generate leads, build brands and grow digitally.",
  },
  {
    t: "Community",
    d: "A culture where people learn from real work, support each other and become more independent.",
  },
];

const roadmap = [
  ["Foundation", "Brand identity, website, course structure, service packages and portfolio."],
  ["Proof", "Initial cohorts, client projects, testimonials and case studies."],
  ["Scale", "Advanced programs, stronger B2B sales and delivery teams."],
  ["Ecosystem", "Connecting students, mentors, freelancers, creators and businesses."],
];

function About() {
  return (
    <>
      <PageHero
        kicker="About us"
        title={
          <>
            Every great success starts with <span className="text-teal">one bold step.</span>
          </>
        }
        sub="For a sea turtle, the journey begins the moment it breaks free from the sand and heads to the ocean. Your growth begins the same way."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <Reveal>
          <img
            src={images.agencyTeam}
            alt="Digi Turtles team at work"
            loading="lazy"
            width={1280}
            height={800}
            className="rounded-3xl shadow-soft"
          />
        </Reveal>
        <Reveal delay={150}>
          <SectionHead k="Our origin" title="Digital skills + the turtle mindset" />
          <blockquote className="border-l-4 border-primary pl-5 text-lg italic text-foreground">
            "We started with the idea of the turtle — not because it is the fastest, but because it
            keeps moving."
          </blockquote>
          <p className="mt-5 text-muted-foreground">
            The turtle represents the beginner: someone who may not have the skills, confidence or
            resources yet. But if that person keeps learning and keeps showing up, the beginner
            changes. So the turtle is not just a mascot — it is the philosophy of the company.
          </p>
        </Reveal>
      </section>

      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead k="Two sides of growth" title="One roof, three pillars" center />
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 120}>
                <div className="card-lift h-full rounded-3xl bg-card p-8">
                  <span className="font-display text-5xl font-extrabold text-teal">0{i + 1}</span>
                  <h3 className="mt-4 text-2xl font-semibold text-ink">{p.t}</h3>
                  <p className="mt-2 text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHead k="Where we're going" title="Growth roadmap" dark />
          <div className="relative space-y-10 border-l border-primary/40 pl-10">
            {roadmap.map(([t, d], i) => (
              <Reveal key={t} delay={i * 120}>
                <div className="relative">
                  <span className="absolute -left-[3.05rem] top-1 h-5 w-5 rounded-full bg-teal shadow-glow" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow">
                    Phase {i + 1}
                  </p>
                  <h3 className="text-2xl font-semibold text-ink-foreground">{t}</h3>
                  <p className="text-ink-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <p className="font-display text-3xl font-semibold leading-snug text-ink md:text-4xl">
            We do not want people to stay beginners forever. We want to give them knowledge,
            experience, confidence and a{" "}
            <span className="text-teal">path toward independence.</span>
          </p>
        </Reveal>
      </section>
    </>
  );
}
