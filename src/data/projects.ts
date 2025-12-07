export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "design-system",
    title: "Design System & UI Kit",
    description:
      "A reusable UI component library with comprehensive documentation.",
    stack: ["React", "TypeScript", "TailwindCSS", "Storybook"],
    repo: "https://github.com/",
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    description:
      "Analytical dashboard with interactive charts, advanced filters, and state management.",
    stack: ["Next.js", "Zustand", "Chart.js"],
    demo: "https://example.com",
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    description: "SEO-optimized landing page with fast load times.",
    stack: ["Next.js", "TailwindCSS", "SEO"],
    repo: "https://github.com/",
  },
];
