import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: { slug: string };
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h3>Technologies</h3>
      <ul>
        {project.stack.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  );
}
