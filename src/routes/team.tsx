import { createFileRoute } from "@tanstack/react-router";
import { TeamCard } from "@/components/site/TeamCard";
import { PageHero, SectionHead } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { team } from "@/lib/site-data";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Digi Turtles" },
      {
        name: "description",
        content:
          "Meet the mentors, strategists and creators behind Digi Turtles Institute + Agency.",
      },
      { property: "og:title", content: "Meet the Digi Turtles Team" },
      { property: "og:description", content: "The people helping the next turtles grow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Team,
});

const stages = [
  "Little Turtle",
  "Growing Turtle",
  "Skilled Turtle",
  "Ninja Turtle",
  "Mentor Turtle",
];

function Team() {
  return (
    <>
      <PageHero
        kicker="Our team"
        title={
          <>
            We were once <span className="text-teal">little turtles</span> too.
          </>
        }
        sub="We kept learning, kept working and kept moving. Now we want to help the next turtles grow."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 5) * 90}>
              <TeamCard m={m} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead k="Our culture" title="From Little Turtle to Ninja Turtle" center />
          <div className="grid gap-4 md:grid-cols-5">
            {stages.map((s, i) => (
              <Reveal key={s} delay={i * 120}>
                <div
                  className="rounded-2xl bg-card p-6 text-center"
                  style={{ transform: `translateY(${-i * 8}px)` }}
                >
                  <span className="font-display text-4xl font-extrabold text-teal">{i + 1}</span>
                  <p className="mt-2 font-semibold text-ink">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
