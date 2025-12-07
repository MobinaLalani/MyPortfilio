import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hi! I’m a Frontend Developer</h1>
          <p className="mt-2 text-foreground/70">I build fast, accessible, and scalable UIs with Next.js and React.</p>
          <div className="mt-4 flex items-center gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-primary text-background px-4 py-2 text-sm hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-primary text-primary px-4 py-2 text-sm hover:bg-primary/10"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm underline underline-offset-4 hover:text-primary"
          >
            View all
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
