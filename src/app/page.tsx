"use client";

import BackgroundLayer from "@/components/BackgroundLayer";
import Sidebar from "@/components/Sidebar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTION_IDS = ["about", "experience", "projects"];

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <BackgroundLayer />
      <div className="relative z-10 mx-auto min-h-screen max-w-[min(100%,87.5rem)] px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar activeSection={activeSection} />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
