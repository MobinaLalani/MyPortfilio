import HalazLogo from "../../public/image/halazProject/halazLogo.png";
// import DashboardImg from "../../public/image/projects/dashboard.png";
// import LandingImg from "../../public/image/projects/landing.png";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
  img: any; // نوع برای import شده از next/image
};

export const projects: Project[] = [
  {
    slug: "Halazone",
    title: "Design System & UI Kit",
    img: HalazLogo,
    description:
      "A reusable UI component library with comprehensive documentation.",
    stack: ["React", "TypeScript", "TailwindCSS", "Storybook"],
    repo: "https://github.com/",
  },
  {
    slug: "design-system1",
    title: "Design System & UI Kit",
    img: HalazLogo,
    description:
      "A reusable UI component library with comprehensive documentation.",
    stack: ["React", "TypeScript", "TailwindCSS", "Storybook"],
    repo: "https://github.com/",
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    img: HalazLogo,
    description:
      "Analytical dashboard with interactive charts, advanced filters, and state management.",
    stack: ["Next.js", "Zustand", "Chart.js"],
    demo: "https://example.com",
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    img: HalazLogo,
    description: "SEO-optimized landing page with fast load times.",
    stack: ["Next.js", "TailwindCSS", "SEO"],
    repo: "https://github.com/",
  },
];
