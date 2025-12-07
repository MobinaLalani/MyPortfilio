import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Projects",
  description: "Frontend projects with details and technologies used",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-foreground/70">A collection of frontend work focusing on UX and performance.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
