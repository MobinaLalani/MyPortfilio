"use client";

import ProjectCard from "@/components/ProjectCard";
import DynamicTabs from "@/components/ui/DynamicTabs";
import { useState } from "react";
import type { Project } from "@/data/projects";
import HalazoneIndex from "@/components/section/project/Halazone";

type Props = { projects: Project[] };

export default function ProjectsClient({ projects }: Props) {
  const tabs = projects.map((p) => {
    const isHalazone = p.slug.toLowerCase() === "halazone";
    return {
      label: p.slug,
      content: isHalazone ? (
        <HalazoneIndex />
      ) : (
        <div className="rounded-xl border border-border p-4">
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <p className="mt-2 text-foreground/80">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full border text-sm">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-4">
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Repo
              </a>
            )}
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      ),
    };
  });
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
      <div className="mt-6">
        <DynamicTabs
          className="-mt-2"
          tabs={tabs}
          activeIndex={activeIndex}
          onChangeActive={setActiveIndex}
        />
      </div>
    </>
  );
}
