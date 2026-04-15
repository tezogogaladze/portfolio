"use client";

import { personalInfo } from "@/data/content";
import SectionNav from "./SectionNav";
import SocialLinks from "./SocialLinks";

type SidebarProps = {
  activeSection: string;
};

export default function Sidebar({ activeSection }: SidebarProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          <a href="/">{personalInfo.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {personalInfo.title}
        </h2>
        <p className="mt-4 max-w-sm leading-normal text-slate-400 lg:max-w-md">
          {personalInfo.blurb}
        </p>

        <div className="mt-16">
          <SectionNav activeSection={activeSection} />
        </div>
      </div>

      <div className="mt-8">
        <SocialLinks />
      </div>
    </header>
  );
}
