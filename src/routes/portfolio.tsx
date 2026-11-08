import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Digi Turtles Work" },
      {
        name: "description",
        content:
          "Brand building, lead generation, AI automation, SEO and marketing projects by Digi Turtles.",
      },
      { property: "og:title", content: "Digi Turtles Portfolio" },
      {
        property: "og:description",
        content: "Selected projects from the Digi Turtles agency and institute.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.cat)))];
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.cat === cat);

  return (
    <>
      <PageHero
        kicker="Portfolio"
        title={
          <>
            Work that helps brands <span className="text-teal">keep moving.</span>
          </>
        }
        sub="A look at the kind of projects our agency and students deliver."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                c === cat
                  ? "bg-teal text-primary-foreground shadow-glow"
                  : "bg-muted text-muted-foreground hover:bg-accent",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <article className="card-lift group overflow-hidden rounded-3xl border border-border bg-card">
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.t}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {p.cat}
                  </span>
                  <h3 className="mt-2 flex items-center justify-between text-xl font-semibold text-ink">
                    {p.t}
                    <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
