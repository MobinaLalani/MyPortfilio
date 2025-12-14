"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
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

  const split = useMotionValue(50);
  const splitSpring = useSpring(split, {
    stiffness: 120,
    damping: 20,
    mass: 0.8,
  });

  const maskImage = useTransform(splitSpring, (v) => generateDiagonalMask(v));

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative h-[300px] w-[300px] bg-[#cac2b7] overflow-hidden rounded-[18px] cursor-pointer shadow-lg flex items-center justify-center">
        {/* flex + items-center + justify-center وسط‌چین می‌کنه */}
        <Image
          src={project.img}
          alt={project.title}
          className="object-cover  p-4"
        />

        <motion.div
          className="absolute inset-0 bg-white/20 backdrop-blur-md"
          style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
          }}
          onHoverStart={() => split.set(0)}
          onHoverEnd={() => split.set(50)}
        >
          <motion.div
            className="absolute inset-0 z-10 flex items-end p-4"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className=" leading-6 mb-8">
              {project.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Link>
  );
}
