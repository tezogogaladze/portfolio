"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const desktopMq = window.matchMedia("(min-width: 1024px)");
    let io: IntersectionObserver | null = null;

    const sync = () => {
      io?.disconnect();
      io = null;

      if (desktopMq.matches) {
        setStuck(false);
        return;
      }

      io = new IntersectionObserver(
        ([entry]) => {
          const { isIntersecting, boundingClientRect } = entry;
          setStuck(!isIntersecting && boundingClientRect.top < 0);
        },
        { root: null, threshold: 0 },
      );
      io.observe(el);
    };

    sync();
    desktopMq.addEventListener("change", sync);
    return () => {
      desktopMq.removeEventListener("change", sync);
      io?.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={sentinelRef}
        className="pointer-events-none h-px w-full shrink-0 lg:hidden"
        aria-hidden
      />
      <h2
        className={`sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 text-sm font-bold uppercase tracking-widest text-slate-200 transition-[background-color,backdrop-filter] duration-200 lg:sr-only ${
          stuck ? "bg-[#0a0118]/75 backdrop-blur" : "bg-transparent"
        }`}
      >
        {children}
      </h2>
    </>
  );
}
