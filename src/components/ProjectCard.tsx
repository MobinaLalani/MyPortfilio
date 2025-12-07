import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 hover:shadow-sm transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-foreground/70">
            {project.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full border border-muted px-2 py-1"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-4 hover:text-primary"
          >
            Repo
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-4 hover:text-primary"
          >
            Demo
          </a>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm underline underline-offset-4 hover:text-primary"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
