import ProjectCard from "@/components/ProjectCard";
import DynamicTabs from "@/components/ui/DynamicTabs";
import { projects } from "@/data/projects";
import ProjectsClient from "@/components/ProjectsClient";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Projects",
  description: "Frontend projects with details and technologies used",
};

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      {/* Header */}
      <div className="mb-12 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl text-base sm:text-lg text-foreground/70">
          A collection of frontend work with a strong focus on UX, performance,
          and clean architecture.
        </p>
      </div>

      <ProjectsClient projects={projects} />
    </section>
  );
}
