import { createFileRoute, Link } from "@tanstack/react-router";
import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Footprints,
  Repeat,
  Hammer,
  Shield,
  HeartHandshake,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHead } from "@/components/site/PageHero";
import { TeamCard } from "@/components/site/TeamCard";
import { serviceIcons } from "@/components/site/icons";
import { courses, services, projects, team, posts, images } from "@/lib/site-data";

const TurtleScene = lazy(() => import("@/components/TurtleScene"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digi Turtles — Institute + Agency | Where Ideas Evolve" },
      {
        name: "description",
        content:
          "Digi Turtles teaches practical digital skills and helps businesses grow with lead generation, marketing, SEO, AI automation and brand building.",
      },
      { property: "og:title", content: "Digi Turtles — Learn. Build. Grow. Become Independent." },
      {
        property: "og:description",
        content:
          "A digital education and business-growth ecosystem: Institute courses and B2B agency services under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const philosophy = [
  { icon: Footprints, t: "Start Small", d: "Every expert begins as a beginner." },
  { icon: Repeat, t: "Keep Moving", d: "Small steps compound over time." },
  { icon: Hammer, t: "Learn by Doing", d: "Knowledge matters when applied." },
  { icon: Shield, t: "Build Independence", d: "No permanent dependence." },
  { icon: HeartHandshake, t: "Help Others Grow", d: "Skilled turtles lift the next." },
];

type TurtleSceneBoundaryProps = { children: ReactNode };
type TurtleSceneBoundaryState = { hasError: boolean };

// A GPU or WebGL problem must never take down the rest of the website. The scene
// remains available where supported and degrades to the hero background if not.
class TurtleSceneBoundary extends Component<TurtleSceneBoundaryProps, TurtleSceneBoundaryState> {
  state: TurtleSceneBoundaryState = { hasError: false };

  static getDerivedStateFromError(): TurtleSceneBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("The 3D turtle scene could not be rendered.", error);
  }

  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

function Index() {
  const [renderScene, setRenderScene] = useState(false);

  useEffect(() => {
    const canRenderScene = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!canRenderScene) return;

    // Let the page content, fonts and navigation become interactive before
    // loading the optional WebGL scene.
    const sceneDelay = window.setTimeout(() => setRenderScene(true), 700);
    return () => window.clearTimeout(sceneDelay);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-hero-light">
        <div className="absolute right-[4%] top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-accent/60 blur-3xl md:block" />
        <div className="absolute right-[10%] top-1/2 hidden h-[28rem] w-[28rem] -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-primary/30 md:block" />
        <div className="absolute inset-0 md:left-[38%]">
          {renderScene && (
            <TurtleSceneBoundary>
              <Suspense fallback={null}>
                <TurtleScene />
              </Suspense>
            </TurtleSceneBoundary>
          )}
        </div>
        {/* Floating capability chips */}
        <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
          {[
            { t: "AI Automation", c: "right-[36%] top-[26%]", d: "0s" },
            { t: "Brand Building", c: "right-[6%] top-[30%]", d: "1.5s" },
            { t: "SEO & Growth", c: "right-[30%] bottom-[18%]", d: "3s" },
            { t: "8 Practical Courses", c: "right-[8%] bottom-[24%]", d: "2s" },
          ].map((chip) => (
            <div
              key={chip.t}
              className={`glass absolute flex animate-float items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink ${chip.c}`}
              style={{ animationDelay: chip.d }}
            >
              <span className="h-2 w-2 rounded-full bg-teal" /> {chip.t}
            </div>
          ))}
        </div>
        <div className="pointer-events-none relative z-10 mx-auto w-full max-w-7xl px-6 pt-28">
          <div className="max-w-xl">
            <p className="animate-in fade-in slide-in-from-bottom-3 mb-5 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-accent-foreground duration-700">
              Institute + Agency
            </p>
            <h1 className="animate-in fade-in slide-in-from-bottom-6 text-5xl font-extrabold leading-[1.05] text-ink duration-1000 md:text-7xl">
              Learn. Build.
              <br />
              <span className="text-teal">Grow.</span>
              <br />
              Become Independent.
            </h1>
            <p className="animate-in fade-in mt-6 max-w-md text-lg text-muted-foreground duration-1000">
              Digital skills + the turtle mindset. Practical education for learners and real growth
              for businesses — under one roof.
            </p>
            <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border-2 border-ink px-7 py-3 font-semibold text-ink transition-colors hover:bg-ink hover:text-ink-foreground"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-12 flex gap-10 border-t border-border pt-6">
              {[
                ["8", "Courses"],
                ["5+", "Agency services"],
                ["1", "Growth ecosystem"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl font-bold text-teal">{n}</p>
                  <p className="text-sm text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-ink py-5">
        <div className="flex w-max animate-marquee gap-12">
          {[...courses, ...courses].map((c, i) => (
            <span
              key={i}
              className="flex items-center gap-12 whitespace-nowrap font-display text-xl font-semibold text-ink-foreground"
            >
              {c.t} <span className="text-primary-glow">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* About split */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={images.classroom}
              alt="Students learning digital skills"
              loading="lazy"
              width={640}
              height={800}
              className="h-[480px] w-full rounded-3xl object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-teal p-6 text-primary-foreground shadow-glow animate-float">
              <p className="font-display text-2xl font-bold">Learn → Build</p>
              <p className="text-sm opacity-90">→ Showcase → Monetize</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <SectionHead
            k="Who we are"
            title="Not the fastest. The one that keeps moving."
            sub="Digi Turtles brings an Institute for practical skills and an Agency for real business growth together — so learners become professionals and businesses become stronger, more independent brands."
          />
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
          >
            Our story <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* Services */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead k="Agency services" title="Your growth partner, not a vendor" center />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[i]!;
              return (
                <Reveal key={s.t} delay={i * 80}>
                  <div className="card-lift group h-full rounded-3xl border border-border bg-card p-8">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary transition-all duration-300 group-hover:rotate-6 group-hover:bg-teal group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-ink">{s.t}</h3>
                    <p className="text-muted-foreground">{s.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy dark band */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            k="The turtle philosophy"
            title="Don't just learn. Become independent."
            dark
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {philosophy.map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <div className="h-full rounded-2xl border border-ink-muted/20 p-6 transition-colors hover:border-primary">
                  <p.icon className="mb-4 h-7 w-7 text-primary-glow" />
                  <h3 className="font-semibold text-ink-foreground">{p.t}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead k="Portfolio" title="Recent work" />
          <Link
            to="/portfolio"
            className="mb-12 inline-flex items-center gap-2 font-semibold text-primary"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.t} delay={i * 120}>
              <div className="group relative overflow-hidden rounded-3xl">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary-glow">
                    {p.cat}
                  </span>
                  <h3 className="mt-1 flex items-center justify-between text-xl font-semibold text-ink-foreground">
                    {p.t}{" "}
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team preview */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead k="Our team" title="Meet the turtles" center />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {team.slice(0, 4).map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <TeamCard m={m} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 font-semibold text-ink-foreground"
            >
              Full team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead k="From the blog" title="Ideas that help you grow" />
        <div className="grid gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={p.img}
                    alt={p.t}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary">
                  {p.cat} · {p.date}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-ink group-hover:text-primary">
                  {p.t}
                </h3>
                <p className="mt-1 text-muted-foreground">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-teal px-8 py-16 text-center shadow-glow md:py-20">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-5xl">
              Your journey starts here.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/90">
              Take the first bold step — join a course or let our agency grow your brand.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-8 py-3.5 font-semibold text-ink transition-transform hover:scale-105"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
