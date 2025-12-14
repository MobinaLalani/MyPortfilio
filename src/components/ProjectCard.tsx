"use client";

import dynamic from "next/dynamic";
import { useMotionValue, useTransform, useSpring } from "framer-motion";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  function generateDiagonalMask(split: number) {
    return `linear-gradient(
    135deg,
    rgba(0,0,0,0) ${split}%,
    rgba(0,0,0,0.85) ${split}%
  )`;
  }
  console.log("project", project);
  // مقدار شروع مورب
  const split = useMotionValue(50);
  const splitSpring = useSpring(split, {
    stiffness: 120,
    damping: 20,
    mass: 0.8,
  });

  // تبدیل عدد → maskImage
  const maskImage = useTransform(splitSpring, (v) => generateDiagonalMask(v));

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-2xl  cursor-pointer shadow-lg">
        <Image
          src={project.img}
          alt={project.title}
          className="object-cover items-center mt-12 p-4"
        />

        <MotionDiv
          className="absolute inset-0 bg-white/20 backdrop-blur-md"
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
          onHoverStart={() => split.set(0)}
          onHoverEnd={() => split.set(50)}
        >
          <MotionDiv
            className="absolute inset-0 z-10 flex items-end p-4"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className=" text-sm leading-6  mb-13">
              {project.description}
            </p>
          </MotionDiv>
        </MotionDiv>
      </div>
    </Link>
  );
}
