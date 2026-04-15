"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);
  const rafRef = useRef<number | null>(null);

  const updateStuck = useCallback(() => {
    const el = sentinelRef.current;
    if (!el || window.matchMedia("(min-width: 1024px)").matches) {
      setStuck(false);
      return;
    }
    const r = el.getBoundingClientRect();
    // Sentinel fully above the viewport → sticky heading is pinned under `top: 0`.
    setStuck(r.bottom <= 0);
  }, []);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateStuck();
    });
  }, [updateStuck]);

  useLayoutEffect(() => {
    updateStuck();
  }, [updateStuck]);

  useEffect(() => {
    const desktopMq = window.matchMedia("(min-width: 1024px)");
    const onDesktopChange = () => updateStuck();

    desktopMq.addEventListener("change", onDesktopChange);
    window.addEventListener("scroll", scheduleUpdate, { passive: true, capture: true });
    window.addEventListener("resize", scheduleUpdate);
    const vv = window.visualViewport;
    vv?.addEventListener("resize", scheduleUpdate);
    vv?.addEventListener("scroll", scheduleUpdate);

    scheduleUpdate();

    return () => {
      desktopMq.removeEventListener("change", onDesktopChange);
      window.removeEventListener("scroll", scheduleUpdate, true);
      window.removeEventListener("resize", scheduleUpdate);
      vv?.removeEventListener("resize", scheduleUpdate);
      vv?.removeEventListener("scroll", scheduleUpdate);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [scheduleUpdate, updateStuck]);

  return (
    <>
      <div
        ref={sentinelRef}
        className="pointer-events-none h-px w-full shrink-0 lg:hidden"
        aria-hidden
      />
      <h2
        className={`sticky top-0 z-50 -mx-6 mb-4 px-6 py-5 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only ${
          stuck
            ? "bg-[#0a0118]/96 shadow-[inset_0_-1px_0_0_rgba(148,163,184,0.12)]"
            : "bg-transparent"
        }`}
      >
        {children}
      </h2>
    </>
  );
}
