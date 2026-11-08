import { Linkedin, Instagram, Mail } from "lucide-react";

type Member = { name: string; role: string; bio: string; img: string };

export function TeamCard({ m }: { m: Member }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-muted shadow-soft">
      <img
        src={m.img}
        alt={`${m.name}, ${m.role}`}
        loading="lazy"
        width={600}
        height={750}
        className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-display text-lg font-semibold text-ink-foreground">{m.name}</h3>
        <p className="text-sm font-medium text-primary-glow">{m.role}</p>
        <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-3 text-sm text-ink-muted">{m.bio}</p>
            <div className="mt-4 flex gap-2">
              {[Linkedin, Instagram, Mail].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-foreground/15 text-ink-foreground transition-colors hover:bg-primary"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
