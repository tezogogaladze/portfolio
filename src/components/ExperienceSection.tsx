import { experiences } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <SectionHeading>Experience</SectionHeading>
      <div>
        <ol className="group/list">
          {experiences.map((exp, i) => (
            <li key={i} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-colors motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[var(--card-hover-bg)] lg:group-hover:shadow-[inset_0_1px_0_0_var(--card-hover-edge)]" />

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={exp.dateRange}
                >
                  {exp.dateRange}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-[color:var(--nav-hover-text)] focus-visible:text-[color:var(--nav-hover-text)]"
                      aria-label={`${exp.title} at ${exp.company}`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {exp.title} ·{" "}
                        <span className="inline-block">
                          {exp.company}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {exp.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <span className="flex items-center rounded-full bg-[rgba(168,85,247,0.12)] px-3 py-1 text-xs font-medium leading-5 text-[color:var(--nav-active-rule)]">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center font-medium leading-tight text-slate-200 hover:text-[color:var(--nav-hover-text)] focus-visible:text-[color:var(--nav-hover-text)]"
            aria-label="View full resume (opens in a new tab)"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-[color:var(--nav-active-rule)] motion-reduce:transition-none">
              View Full Résumé
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
