import Container from "@/components/ui/container/Container";
import ProjectsClient from "@/components/ProjectsClient";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-14 ">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Projects
          </h1>
          <p className="mt-3 max-w-2xl text-foreground/70">
            A collection of frontend work with a strong focus on UX,
            performance, and clean architecture.
          </p>
        </div>

        <ProjectsClient projects={projects} />
      </Container>
    </section>
  );
}
