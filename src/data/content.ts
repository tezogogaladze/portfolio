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
  { label: "GitHub", url: "https://github.com/tezogogaladze", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/tezogogaladze", icon: "linkedin" },
  { label: "Email", url: "mailto:tezogogaladze@gmail.com", icon: "email" },
  { label: "Instagram", url: "#", icon: "instagram" },
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
    dateRange: "Nov 2025 — Present",
    title: "Founder & Solo Developer",
    company: "Supra",
    companyUrl: "https://www.supra-booking.com",
    description:
      "Founded and architected Supra, a full-stack restaurant reservation ecosystem: consumer mobile apps, restaurant tablet software, and operational dashboards. Built scalable booking flows (real-time reservations, availability, table assignments, approvals, scheduling) with Flutter for iOS and Android backed by Firebase and Firestore. Designed backend architecture across Firebase, Supabase, and Railway with authentication, API integrations, and role-based access for customers, staff, and admins. Structured data models and modular architecture for multi-restaurant expansion.",
    technologies: [
      "Flutter",
      "Firebase",
      "Firestore",
      "Supabase",
      "Railway",
      "Node.js",
      "Dart",
      "TypeScript",
    ],
  },
  {
    dateRange: "Jun 2017 — Nov 2025",
    title: "IT & Software Systems Specialist",
    company: "Independent / Contract",
    companyUrl: "#",
    description:
      "Managed IT infrastructure including servers, networking, and backend environments supporting internal applications. Developed company websites and internal web applications with backend integrations and databases. Built automation tools and internal software to streamline operations and reduce manual work. Provided hands-on support across hardware, networking, and software.",
    technologies: [
      "JavaScript",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Networking",
      "Automation",
    ],
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
    title: "Corporate web & internal systems",
    description:
      "Company-facing websites and internal web apps with backend and database integrations, plus automation tooling to replace repetitive manual workflows—delivered alongside broader IT infrastructure and support responsibilities.",
    url: "#",
    technologies: [
      "JavaScript",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Automation",
    ],
  },
];
