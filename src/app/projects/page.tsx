import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 BG-">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
