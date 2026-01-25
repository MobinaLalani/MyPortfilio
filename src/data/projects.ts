// ===== Images =====
import HalazLogo from "../../public/image/halazProject/halazLogo.png";
import LandingPic1 from "../../public/image/Landing/Landing3.png";
import LandingPic2 from "../../public/image/Landing/Landing2.png";
import LandingPic3 from "../../public/image/Landing/Landing1.png";

import supervisor1 from "../../public/image/supervisor/supervisor1.png";
import supervisor2 from "../../public/image/supervisor/supervisor2.png";
import supervisor3 from "../../public/image/supervisor/supervisor3.png";

import userInfo from "../../public/image/panelPic/createBuffer.png";
import wallet from "../../public/image/panelPic/walletPic.png";
import parcelDetail from "../../public/image/panelPic/parcelDetail.png";

import mapPicpng from '../../public/image/mapProject/createNode.png';
import mapPic from '../../public/image/mapProject/mapPicpng.png';
import BaseMap from '../../public/image/mapProject/baseMapPic.png';
import fleetPic from "../../public/image/managementPic/managment-fleet.png";
import AdminDashboardPic from "../../public/image/managementPic/AdminDashboard.png";
import bundleListPic from "../../public/image/managementPic/managment-bundleList.png";

import HalazMapProject from "../../public/image/HalazMapProject.png";

// ======================================================
// ======================= TYPES =========================
// ======================================================

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  demo?: string;
  img: any; // next/image static import
};

export type ProjectSection = {
  title: string;
  paragraphs: string[];
  images: any[];
};

export type ProjectDetails = {
  [projectSlug: string]: {
    [sectionKey: string]: ProjectSection;
  };
};

// ======================================================
// ======================= PROJECTS ======================
// ======================================================

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
    slug: "HalazMap",
    title: "HalazMap Project",
    img: HalazMapProject,
    description:
      "A geospatial platform for visualizing logistics and routing data.",
    stack: ["React", "TypeScript", "Mapbox", "TailwindCSS"],
    repo: "https://github.com/",
  },
  // {
  //   slug: "dashboard-analytics",
  //   title: "Dashboard Analytics",
  //   img: HalazLogo,
  //   description:
  //     "Analytical dashboard with interactive charts and advanced filters.",
  //   stack: ["Next.js", "Zustand", "Chart.js"],
  //   demo: "https://example.com",
  // },
  // {
  //   slug: "landing-page",
  //   title: "Landing Page",
  //   img: HalazLogo,
  //   description: "SEO-optimized landing page with fast load times.",
  //   stack: ["Next.js", "TailwindCSS", "SEO"],
  //   repo: "https://github.com/",
  // },
];

// ======================================================
// =================== PROJECT DETAILS ===================
// ======================================================

export const projectDetails: ProjectDetails = {
  Halazone: {
    management: {
      title: "Halazone – Management System",
      paragraphs: [
        "The Halazone management system is a logistics-focused platform designed to manage and optimize shipment delivery and storage.",
        "It is composed of multiple sub-systems that together ensure efficiency, scalability, and reliability.",
      ],
      images: [fleetPic, AdminDashboardPic, bundleListPic],
    },

    customerPanel: {
      title: "Halazone – Customer Panel",
      paragraphs: [
        "The customer panel provides users with a seamless experience for creating and managing orders.",
        "Users can select destinations, services, and track their shipments in real time.",
      ],
      images: [userInfo, wallet, parcelDetail],
    },

    supervisorApp: {
      title: "Halazone – Supervisor App",
      paragraphs: [
        "The supervisor application is a PWA designed for monitoring microhub operations.",
        "It enables supervisors to manage fleets and shipments in real time.",
      ],
      images: [supervisor1, supervisor2, supervisor3],
    },

    landingPage: {
      title: "Halazone – Landing Page",
      paragraphs: [
        "The landing page introduces Halazone’s services and features.",
        "It is optimized for performance, SEO, and user engagement.",
      ],
      images: [LandingPic1, LandingPic2, LandingPic3],
    },
  },

  HalazMap: {
    baseMap: {
      title: "HalazMap – Base Map",
      paragraphs: [
        "HalazMap is a geospatial platform built for logistics and delivery optimization.",
        "It provides real-time map visualization, routing, and operational insights.",
      ],
      images: [mapPic, mapPicpng, BaseMap],
    },
  },
};
