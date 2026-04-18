// ─── SITE CONTENT ───────────────────────────────────────────────────────────
// Types are exported so you can reuse them across components.

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
  /** Primary link (live app, store, or demo). */
  url: string;
  /** Optional source repository. */
  repoUrl?: string;
  technologies: string[];
};

export type SocialLink = {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "email";
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
    "I build structured, production-ready systems for mobile and web.",
};

// ─── NAVIGATION ──────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

// ─── SOCIAL LINKS ────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/tezogogaladze", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/tezogogaladze", icon: "linkedin" },
  { label: "Email", url: "mailto:tezogogaladze@gmail.com", icon: "email" },
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
    dateRange: "2024 — 2026",
    title: "Frontend Engineer (React / TypeScript)",
    company: "Scalefocus",
    companyUrl: "https://www.scalefocus.com",
    description:
      "Worked on outsourced projects for small-to-mid European products. Built React and TypeScript interfaces for operational workflows with reusable MUI-based components, integrated REST APIs, and handled form-heavy logic with a focus on usability, stability, and performance. Improved efficiency of internal tools used daily by non-technical users and delivered features end-to-end with minimal supervision.",
    technologies: [
      "React",
      "TypeScript",
      "MUI",
      "REST APIs",
      "JavaScript",
    ],
  },
  {
    dateRange: "2021 — 2024",
    title: "Junior Developer (React / JavaScript)",
    company: "Exadel",
    companyUrl: "https://www.exadel.com",
    description:
      "Contributed to internal tools and client features on the Eastern Europe remote team. Built UI with React, integrated REST APIs, handled data rendering, and fixed bugs while improving existing frontend logic. Worked through structured development workflows with Git, pull requests, and code reviews and shipped initial production features.",
    technologies: [
      "React",
      "JavaScript",
      "REST APIs",
      "Git",
    ],
  },
  {
    dateRange: "2017 — 2021",
    title: "IT Specialist",
    company: "Private company",
    companyUrl: "#",
    description:
      "Hands-on generalist role covering infrastructure, support, and early development in Tbilisi. Managed internal systems, devices, and networks; built small websites and tools; and resolved technical issues across departments.",
    technologies: ["Networking", "JavaScript", "Web", "IT"],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Supra",
    description:
      "Restaurant reservation platform: consumer mobile experience, restaurant-side tablet tooling, and operational dashboards. Emphasis on real-time bookings, availability and table management, approval workflows, and scheduling—built for growth across multiple venues.",
    url: "https://www.supra-booking.com",
    technologies: [
      "Flutter",
      "Firebase",
      "Firestore",
      "Supabase",
      "Railway",
      "Node.js",
      "RBAC",
    ],
  },
  {
    title: "AI automation",
    description:
      "Internal and freelance automation work: booking flows for small businesses, WhatsApp and Instagram automations, and lightweight CRM setups—aligned with operational needs and day-to-day workflows.",
    url: "#",
    technologies: [
      "JavaScript",
      "Node.js",
      "Automation",
      "REST APIs",
      "Integrations",
    ],
  },
  {
    title: "The 5-Minute Rule",
    description:
      "Minimal app designed to reduce friction and trigger immediate action.",
    url: "https://apps.apple.com/us/app/the-5-minute-rule/id6759627808",
    repoUrl: "https://github.com/tezogogaladze/the-5-minute-rule",
    technologies: ["Flutter", "Dart", "iOS", "Android"],
  },
  {
    title: "AR viewer",
    description:
      "Web-based AR product viewer using WebXR with iOS USDZ fallback.",
    url: "https://ar-viewer-rouge.vercel.app/",
    repoUrl: "https://github.com/tezogogaladze/ar-viewer",
    technologies: ["Three.js", "WebXR", "JavaScript", "GLTF", "USDZ"],
  },
  {
    title: "Expo",
    description:
      "High-end showroom-style website concept for product and interior presentation.",
    url: "https://expo-inky.vercel.app/",
    repoUrl: "https://github.com/tezogogaladze/expo",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];
