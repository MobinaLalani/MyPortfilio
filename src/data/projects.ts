import HalazLogo from "../../public/image/halazProject/halazLogo.png";
import LandingPic1 from '../../public/image/Landing/Landing3.png';
import LandingPic2 from '../../public/image/Landing/Landing2.png';
import LandingPic3 from '../../public/image/Landing/Landing1.png';
import supervisor1 from '../../public/image/supervisor/supervisor1.png';
import supervisor2 from '../../public/image/supervisor/supervisor2.png';
import supervisor3 from '../../public/image/supervisor/supervisor3.png';
import userInfo from "../../public/image/panelPic/createBuffer.png";
import wallet from "../../public/image/panelPic/walletPic.png";
import parcelDetail from "../../public/image/panelPic/parcelDetail.png";
import fleetPic from "../../public/image/managementPic/managment-fleet.png";
import AdminDashboardPic from '../../public/image/managementPic/AdminDashboard.png';
import bundleListPic from "../../public/image/managementPic/managment-bundleList.png";
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
  images: any[];
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
      title: "Halazone-LandingPage",
      paragraphs: [
        "The Halazone management system is a logistics-focused platform designed to manage and optimize the flow of shipment delivery and storage.",
        "It is a large-scale system composed of multiple smaller sub-projects, each handling a specific part of the logistics process to ensure efficiency, scalability, and reliability.",
      ],
      images: [LandingPic1, LandingPic2, LandingPic3],
    },

    customerPanel: {
      title: "Halazone-Management",
      paragraphs: [
        "The management system serves as the core control center of the platform, responsible for managing fleets, nodes, and microhubs.",
        "It acts as the central backbone of all operational systems, providing comprehensive control over workflows, system configurations, and access levels. The platform defines and manages role-based access for administrators and supervisors, ensuring secure, structured, and efficient system operations.",
      ],

      images: [fleetPic, AdminDashboardPic, bundleListPic],
    },

    supervisorApp: {
      title: "Halazone-Supervisor",
      paragraphs: [
        "The supervisor application is a Progressive Web App (PWA) designed for overseeing microhub operations.",
        "It enables supervisors to monitor fleet behavior and shipment activities within their assigned regions in real time, providing full operational visibility and control.",
      ],
      images: [supervisor1, supervisor2, supervisor3],
    },

    landingPage: {
      title: "Halazone-Panel",
      paragraphs: [
        "The Halazone customer panel is designed to provide users with a seamless experience for placing and managing their orders.",
        "Based on the available services, customers can select their desired destination and easily register orders tailored to their needs.",
      ],
      images: [userInfo, wallet, parcelDetail],
    },
  },
};
