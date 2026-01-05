"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Images
import heroPic from "../../../../public/image/mypic.png";
import heroBackGround from "../../../../public/image/heroSectionIconPic.png";

// Skill icons
import NextjsIconPic from "../../../../public/image/NextjsIconPic.png";
import ReactIconPic from "../../../../public/image/ReactIconPic.png";
import ReduxIconPic from "../../../../public/image/ReduxIconPic.png";
import TailwindIconPic from "../../../../public/image/TailwindIconPic.png";

import html5 from "../../../../public/image/html-5.png";
import javaScriptIconPic from "../../../../public/image/javaScriptIconPic.png";
import typescriptIconPic from "../../../../public/image/typescriptIconPic.png";
import BackgroundImage from "./components/BackgroundImage";

// random پایدار
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export default function HeroSection() {
  const skills = useMemo(
    () => [
      { src: html5, alt: "HTML5" },
      { src: javaScriptIconPic, alt: "JavaScript" },
      { src: typescriptIconPic, alt: "TypeScript" },
      { src: ReactIconPic, alt: "React" },
      { src: NextjsIconPic, alt: "Next.js" },
      { src: ReduxIconPic, alt: "Redux" },
      { src: TailwindIconPic, alt: "Tailwind CSS" },
    ],
    []
  );

  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  // viewport size
  useEffect(() => {
    const resize = () =>
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  if (!viewport.width) return null;

  const centerY = viewport.height * 0.5;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background fixed */}
      <BackgroundImage />

      {/* ✅ White glow on background */}
      <div
        className="
      pointer-events-none
      absolute inset-x-0 bottom-0 h-1/3
      bg-gradient-to-t from-[#f0ece9] via-white/60 to-transparent
      z-[-10]
    "
      />

      {/* متن بزرگ سمت چپ */}
      <div className="absolute top-1/6 left-6 lg:left-20 z-10">
        <h1 className="text-8xl md:text-9xl font-bold text-white leading-tight">
          MOBINA LALANI
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight mt-4">
          FrontEnd Developer
        </h3>
      </div>

      {/* Hero Image */}
    
    </section>
  );
}
