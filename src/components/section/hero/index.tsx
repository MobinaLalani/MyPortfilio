"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Images
import heroPic from "../../../../public/image/mypic.png";
import heroBackGround from "../../../../public/image/heroSectionIconPic.png";
import { useScrollParallax } from "@/hooks/parallax";

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
  const skills = [
    { src: html5, alt: "HTML5" },
    { src: javaScriptIconPic, alt: "JavaScript" },
    { src: typescriptIconPic, alt: "TypeScript" },
    { src: ReactIconPic, alt: "React" },
    { src: NextjsIconPic, alt: "Next.js" },
    { src: ReduxIconPic, alt: "Redux" },
    { src: TailwindIconPic, alt: "Tailwind CSS" },
  ];

  // برای رندر بعد از mount (client)
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () =>
        setViewport({ width: window.innerWidth, height: window.innerHeight });
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // تعیین موقعیت نسبی آیکن‌ها و سرعت parallax
  const positions = skills.map((_, index) => {
    const randX = seededRandom(index + 1);
    const randY = seededRandom(index + 100);
    const speed = 0.05 + seededRandom(index + 200) * 0.15; // سرعت متفاوت بین 0.05 تا 0.2

    // تقسیم صفحه به 4 بخش برای پخش یکنواخت
    const col = index % 2; // 0=left, 1=right
    const row = Math.floor(index / 2) % 2; // 0=top, 1=bottom

    const left = col === 0 ? 10 + randX * 35 : 55 + randX * 35; // درصد
    const top = row === 0 ? 10 + randY * 35 : 55 + randY * 35; // درصد

    return { left, top, speed };
  });

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <Image
        src={heroBackGround}
        alt="Hero background"
        fill
        priority
        className="object-cover z-[-1]"
      />

      {/* Skills with parallax */}
      {/* {viewport.width > 0 && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {positions.map((pos, index) => {
            const offsetY = useScrollParallax(pos.speed);

            return (
              <ScrollReveal key={skills[index].alt} delay={index * 0.1}>
                <div
                  className="absolute"
                  style={{
                    left: `${pos.left}%`,
                    top: `calc(${pos.top}% + ${offsetY}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center opacity-80">
                    <Image
                      src={skills[index].src}
                      alt={skills[index].alt}
                      width={90}
                      height={90}
                      className="object-contain"
                    />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      )} */}

      {/* Hero Image (always on top) */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
        <div className="w-[90vw] md:w-[70vw] lg:w-[60vw] h-[50vh] md:h-[70vh] lg:h-[80vh]">
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
