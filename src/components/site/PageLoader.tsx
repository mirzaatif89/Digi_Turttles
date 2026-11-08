import { useCallback, useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

const MIN_VISIBLE_MS = 420;
const SAFETY_HIDE_MS = 2200;

export function PageLoader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isLoading = useRouterState({ select: (state) => state.isLoading });
  const [visible, setVisible] = useState(false);
  const previousPathname = useRef(pathname);
  const shownAt = useRef(0);
  const hideTimer = useRef<number | undefined>(undefined);
  const safetyTimer = useRef<number | undefined>(undefined);

  const clearTimers = useCallback(() => {
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    if (safetyTimer.current) window.clearTimeout(safetyTimer.current);
  }, []);

  const start = useCallback(() => {
    clearTimers();
    shownAt.current = Date.now();
    setVisible(true);
    safetyTimer.current = window.setTimeout(() => setVisible(false), SAFETY_HIDE_MS);
  }, [clearTimers]);

  const finish = useCallback(() => {
    const remaining = Math.max(MIN_VISIBLE_MS - (Date.now() - shownAt.current), 0);
    if (safetyTimer.current) window.clearTimeout(safetyTimer.current);
    hideTimer.current = window.setTimeout(() => setVisible(false), remaining);
  }, []);

  useEffect(() => {
    if (isLoading) {
      start();
    }
  }, [isLoading, start]);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    if (!visible) start();
    finish();
  }, [finish, pathname, start, visible]);

  useEffect(() => {
    const onLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname && !destination.search) return;
      start();
    };

    document.addEventListener("click", onLinkClick, true);
    return () => {
      document.removeEventListener("click", onLinkClick, true);
      clearTimers();
    };
  }, [clearTimers, start]);

  if (!visible) return null;

  return (
    <div
      className="page-loader fixed inset-0 z-[100] grid place-items-center bg-background/85 px-6 backdrop-blur-sm"
      aria-live="polite"
      aria-label="Loading page"
      role="status"
    >
      <div className="relative flex w-48 flex-col items-center rounded-3xl border border-border bg-card/90 px-7 py-8 shadow-soft">
        <span className="absolute h-24 w-24 animate-spin-slow rounded-full border border-dashed border-primary/60" />
        <span className="absolute h-16 w-16 rounded-full bg-accent/70 blur-xl" />
        <img
          src="/favicon.png"
          alt=""
          aria-hidden="true"
          className="relative h-16 w-16 animate-float object-contain"
        />
        <p className="relative mt-4 font-display text-sm font-bold tracking-[0.18em] text-ink">
          DIGI TURTLES
        </p>
        <div className="relative mt-3 h-1.5 w-24 overflow-hidden rounded-full bg-accent">
          <span className="page-loader-line block h-full rounded-full bg-teal" />
        </div>
      </div>
    </div>
  );
}
