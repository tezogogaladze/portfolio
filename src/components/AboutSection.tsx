import { aboutParagraphs } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col gap-4">
        {aboutParagraphs.map((paragraph, i) => (
          <p key={i} className="text-slate-400 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
