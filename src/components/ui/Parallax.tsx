import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ItemProps = {
  children: React.ReactNode;
  offset?: number;
  axis?: "y" | "x";
  className?: string;
};

export function ParallaxItem({ children, offset = 30, axis = "y", className }: ItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const range: [number, number] = [offset, -offset];
  const y = useTransform(scrollYProgress, [0, 1], range);
  const x = useTransform(scrollYProgress, [0, 1], range);
  const style = axis === "y" ? { y } : { x };
  return (
    <motion.div ref={ref} className={className} style={style}>
      {children}
    </motion.div>
  );
}

type FullBleedProps = {
  children: React.ReactNode;
  backgroundClassName?: string;
  offset?: number;
};

export function ParallaxFullBleedRow({
  children,
  backgroundClassName = "",
  offset = 40,
}: FullBleedProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <div ref={ref} className="relative w-full">
      <motion.div
        className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen -z-10 pointer-events-none ${backgroundClassName}`}
        style={{ y }}
      />
      <div className="relative max-w-7xl mx-auto px-6">{children}</div>
    </div>
  );
}
