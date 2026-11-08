import { Link } from "@tanstack/react-router";
import { navLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="" className="h-12 w-auto" />
            <span className="font-display text-xl font-bold text-metal">DIGI TURTLES</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-ink-muted">
            Institute + Agency. Learn. Build. Grow. Become Independent.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Explore</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-ink-muted">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary-glow">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Keep Moving. Keep Growing.</h4>
          <p className="text-sm text-ink-muted">Your journey starts with one bold first step.</p>
          <Link
            to="/contact"
            className="mt-5 inline-block rounded-full bg-teal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Start Today
          </Link>
        </div>
      </div>
      <div className="border-t border-ink-muted/20 py-6 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} Digi Turtles · Learn | Create | Grow
      </div>
    </footer>
  );
}
