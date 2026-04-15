// ─── PLACEHOLDER CONTENT ─────────────────────────────────────────────────────
// Replace the values below with your own information.
// The types are exported so you can reuse them across components.

export type Experience = {
  dateRange: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
};

export type Project = {
  title: string;
  description: string;
  url: string;
  technologies: string[];
};

export type SocialLink = {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "instagram";
};

export type NavItem = {
  label: string;
  href: string;
};

// ─── PERSONAL INFO ───────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Tezo Gogaladze",
  title: "Full-stack Mobile and Web developer",
  blurb:
    "I build mobile and web applications.",
};

// ─── NAVIGATION ──────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

// ─── SOCIAL LINKS ────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { label: "Email", url: "mailto:hello@example.com", icon: "email" },
  { label: "Instagram", url: "https://instagram.com", icon: "instagram" },
];

// ─── ABOUT ───────────────────────────────────────────────────────────────────

export const aboutParagraphs: string[] = [
  "I’m a full-stack developer focused on building scalable mobile and web applications using Flutter and React. I enjoy working across the stack, from crafting smooth user experiences on the frontend to designing reliable, well-structured systems on the backend.",
  "My work is centered around building applications that are not just functional, but maintainable and built to scale. I’ve spent a lot of time working with REST APIs, authentication flows, and real-time systems, often using Firebase and Node.js to power the backend. I pay close attention to architecture and data modeling, making sure the systems I build remain clean and easy to evolve over time.",
  "I’m comfortable moving between frontend and backend, and I enjoy bridging the gap between the two — making sure everything integrates seamlessly and performs reliably in real-world use.",
  "Technically, I work mainly with Dart, JavaScript, and TypeScript, and have experience building for both Android and iOS. I’ve worked with tools and systems like Firebase (Auth, Firestore, Cloud Functions), PostgreSQL, and OAuth-based authentication, and I follow structured approaches like role-based access control and scalable data design."
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    dateRange: "2022 — Present",
    title: "Senior Frontend Engineer",
    company: "Acme Corp",
    companyUrl: "#",
    description:
      "Build and maintain critical components used to construct the frontend, across the whole product. Work closely with cross-functional teams including designers, product managers, and other developers to implement and advocate for best practices in web accessibility.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "GraphQL",
    ],
  },
  {
    dateRange: "2020 — 2022",
    title: "Frontend Engineer",
    company: "Initech",
    companyUrl: "#",
    description:
      "Developed and styled interactive web apps for various clients, including an enterprise dashboard with real-time analytics. Collaborated with a team of engineers to develop new features and resolve complex technical challenges.",
    technologies: ["React", "JavaScript", "SCSS", "Redux", "Jest"],
  },
  {
    dateRange: "2018 — 2020",
    title: "UI Developer",
    company: "Globex Studios",
    companyUrl: "#",
    description:
      "Developed, maintained, and shipped production code for client websites, primarily using HTML, CSS, Sass, JavaScript, and jQuery. Performed quality assurance testing and cross-browser/device compatibility checks.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress"],
  },
  {
    dateRange: "2016 — 2018",
    title: "Web Developer Intern",
    company: "Umbrella Lab",
    companyUrl: "#",
    description:
      "Assisted in the development of internal tooling and contributed to the redesign of the public-facing marketing site. Gained foundational experience in modern web development workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Git"],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Halcyon Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on the Visual Studio Marketplace with over 100k installs.",
    url: "#",
    technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2"],
  },
  {
    title: "Spotify Profile",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
    url: "#",
    technologies: ["React", "Express", "Spotify API", "Heroku"],
  },
  {
    title: "Build a Spotify Connected App",
    description:
      "A comprehensive video course that walks through building a full-stack web app with the Spotify API. Covers Node.js, React, Express, and deployment.",
    url: "#",
    technologies: ["React", "Node.js", "Express", "Spotify API"],
  },
  {
    title: "Time Zone Converter",
    description:
      "A clean and intuitive web tool for quickly converting times across different time zones with a focus on usability and accessibility.",
    url: "#",
    technologies: ["Next.js", "TypeScript", "Vercel"],
  },
];
