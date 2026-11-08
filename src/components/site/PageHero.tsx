import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  sub,
  children,
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-light pt-36 pb-20">
      <img
        src="/hover_logo.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-8 top-1/2 hidden h-72 w-auto -translate-y-1/2 animate-float opacity-[0.08] md:block lg:right-14 lg:h-[22rem]"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="animate-in fade-in slide-in-from-bottom-3 mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary duration-700">
          {kicker}
        </p>
        <h1 className="animate-in fade-in slide-in-from-bottom-4 max-w-3xl text-4xl font-extrabold leading-tight text-ink duration-700 md:text-6xl">
          {title}
        </h1>
        {sub && (
          <p className="animate-in fade-in slide-in-from-bottom-5 mt-5 max-w-2xl text-lg text-muted-foreground duration-1000">
            {sub}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function SectionHead({
  k,
  title,
  sub,
  center,
  dark,
}: {
  k: string;
  title: ReactNode;
  sub?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">{k}</p>
      <h2 className={`text-3xl font-bold md:text-5xl ${dark ? "text-metal" : "text-ink"}`}>
        {title}
      </h2>
      {sub && <p className={`mt-4 ${dark ? "text-ink-muted" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

export function Avatar({ name, size = "lg" }: { name: string; size?: "lg" | "sm" }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-teal font-display font-bold text-primary-foreground ${size === "lg" ? "h-24 w-24 text-3xl" : "h-10 w-10 text-sm"}`}
    >
      {initials}
    </div>
  );
}
