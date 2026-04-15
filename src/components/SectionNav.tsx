"use client";

import { navItems } from "@/data/content";

type SectionNavProps = {
  activeSection: string;
};

export default function SectionNav({ activeSection }: SectionNavProps) {
  return (
    <nav className="hidden lg:block" aria-label="In-page navigation">
      <ul className="flex flex-col gap-3">
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`group flex items-center gap-3 py-1 text-xs font-bold uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-[color:var(--nav-active-text)]"
                    : "text-[color:var(--nav-muted)] hover:text-[color:var(--nav-hover-text)]"
                }`}
              >
                <span
                  className={`block h-px transition-all ${
                    isActive
                      ? "w-16 bg-[color:var(--nav-active-rule)]"
                      : "w-8 bg-slate-600/90 group-hover:w-16 group-hover:bg-[color:var(--nav-hover-rule)]"
                  }`}
                />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
