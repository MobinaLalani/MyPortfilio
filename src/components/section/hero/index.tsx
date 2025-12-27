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
  const [scrollY, setScrollY] = useState(0);

  // viewport size
  useEffect(() => {
    const resize = () =>
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // scroll listener
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!viewport.width) return null;

  const targetY = viewport.height / 2;

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background fixed */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackGround.src})`,
          backgroundAttachment: "fixed", // این باعث ثابت موندن بک‌گراند میشه
        }}
      />

      {/* Skill icons */}
      <div className="absolute inset-0 pointer-events-none">
        {skills.map((skill, index) => {
          const randY = seededRandom(index + 100);
          const startX = ((index + 0.5) / skills.length) * viewport.width;
          const scatteredY = randY * viewport.height;
          const fromY =
            scatteredY < targetY ? scatteredY - 180 : scatteredY + 180;

          const parallaxSpeed = 0.2 + index * 0.05;
          const parallaxY = targetY + scrollY * parallaxSpeed;

          return (
            <motion.div
              key={skill.alt}
              initial={{ x: startX, y: fromY, opacity: 0, scale: 0.8 }}
              animate={{ x: startX, y: parallaxY, opacity: 1, scale: 1 }}
              transition={{
                duration: 1.3,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="absolute"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center opacity-90">
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Hero Image */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
        <div className="w-[90vw] md:w-[70vw] lg:w-[60vw] h-[55vh] md:h-[70vh] lg:h-[80vh]">
          <Image
            src={heroPic}
            alt="Frontend Developer"
            fill
            priority
            className="object-contain select-none"
          />
        </div>
      </div>
    </section>
  );
}
