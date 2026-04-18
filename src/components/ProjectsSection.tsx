import { projects } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <SectionHeading>Featured projects</SectionHeading>
      <div>
        <ol className="group/list">
          {projects.map((project, i) => (
            <li key={i} className="mb-12">
              <div className="group relative grid pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-colors motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[var(--card-hover-bg)] lg:group-hover:shadow-[inset_0_1px_0_0_var(--card-hover-edge)]" />

                <div className="z-10">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-[color:var(--nav-hover-text)] focus-visible:text-[color:var(--nav-hover-text)]"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}
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
                    </a>
                    {project.repoUrl ? (
                      <span className="mt-1 block text-xs font-medium normal-case tracking-normal text-slate-500">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-[color:var(--nav-hover-text)] focus-visible:text-[color:var(--nav-hover-text)]"
                          aria-label={`${project.title} source on GitHub (opens in a new tab)`}
                        >
                          GitHub
                        </a>
                      </span>
                    ) : null}
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {project.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech) => (
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
      </div>
    </section>
  );
}
