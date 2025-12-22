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

export type ProjectDetailSection = {
  title: string;
  text: string;
};



export type ProjectSection = {
  title: string;
  paragraphs: string[];
  images: string[];
};

export type ProjectDetails = {
  [projectSlug: string]: {
    management?: ProjectSection;
    customerPanel?: ProjectSection;
    supervisorApp?: ProjectSection;
    landingPage?: ProjectSection;
  };
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


export type ProjectOverview = {
  title: string;
  paragraphs: string[];
  images: string[];
};


export const projectDetails: ProjectDetails = {
  Halazone: {
    management: {
      title: "Project Management System",
      paragraphs: [
        "The management system of Halazone is designed to streamline workflows, manage teams, and monitor performance efficiently.",
        "It provides administrators with full control over operations, roles, and system configurations through an intuitive interface.",
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      ],
    },

    customerPanel: {
      title: "Customer Panel Experience",
      paragraphs: [
        "The customer panel offers users a seamless and user-friendly experience for managing orders and tracking activities.",
        "Responsive design ensures accessibility across all devices, providing customers with consistent performance and usability.",
      ],
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
      ],
    },

    supervisorApp: {
      title: "Supervisor Mobile Application",
      paragraphs: [
        "The supervisor app enables real-time monitoring of operations and team activities in the field.",
        "It is optimized for mobile usage, allowing supervisors to manage tasks efficiently on the go.",
      ],
      images: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      ],
    },

    landingPage: {
      title: "Landing Page & Marketing Website",
      paragraphs: [
        "The landing page is built with performance and SEO in mind to attract and convert users effectively.",
        "Clear messaging and visual hierarchy help communicate the product value within seconds.",
      ],
      images: [
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
        "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
      ],
    },
  },
};
