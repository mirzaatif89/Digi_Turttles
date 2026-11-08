import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Digi Turtles Insights" },
      {
        name: "description",
        content:
          "Articles on AI automation, SEO, digital marketing, branding and growing with the turtle mindset.",
      },
      { property: "og:title", content: "Digi Turtles Blog" },
      {
        property: "og:description",
        content: "Ideas and lessons to help learners and businesses grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  const match = useMatchRoute();
  if (match({ to: "/blog/$slug" })) return <Outlet />;
  const [first, ...rest] = posts;
  return (
    <>
      <PageHero
        kicker="Blog"
        title={
          <>
            Ideas that help you <span className="text-teal">evolve.</span>
          </>
        }
        sub="Lessons from our classrooms and client work."
      />
      <section className="mx-auto max-w-7xl px-6 py-20">
        {first && (
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: first.slug }}
              className="group mb-16 grid items-center gap-10 md:grid-cols-2"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={first.img}
                  alt={first.t}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Featured · {first.cat}
                </span>
                <h2 className="mt-4 text-3xl font-bold text-ink group-hover:text-primary md:text-4xl">
                  {first.t}
                </h2>
                <p className="mt-3 text-muted-foreground">{first.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        )}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="card-lift group block overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.t}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {p.cat} · {p.date}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{p.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
