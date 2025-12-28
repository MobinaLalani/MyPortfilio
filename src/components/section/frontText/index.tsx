"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

import Pic1 from "/public/image/frontendPic.jpg";
import Pic2 from "/public/image/animationPic.jpg";

export default function HorizontalScrollRows() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      lerp: 0.1,
      orientation: "vertical",
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on("scroll", (e: { scroll: number }) => {
      setScrollY(e.scroll);
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-col gap-32 px-6 md:px-16 mt-12">
        {/* Row 1 */}
        <section
          className="flex items-center w-full gap-6 md:gap-12"
          style={{ transform: `translateX(${scrollY * 0.2}px)` }}
        >
          <div className="md:w-1/4 flex-shrink-0">
            <Image
              src={Pic1}
              alt="Frontend Pic"
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="flex-1">
            <h2 className="text-6xl md:text-8xl font-serif leading-[1] mb-4">
              reine Natur
            </h2>
            <div className="w-32 h-1 bg-black mb-6"></div>
            <p className="text-xl md:text-2xl opacity-90">
              Pure experience in nature and dining.
            </p>
          </div>
        </section>

        {/* Row 2 */}
        <section
          className="flex items-center w-full gap-6 md:gap-12"
          style={{ transform: `translateX(${scrollY * -0.2}px)` }}
        >
          <div className="flex-1">
            <h2 className="text-6xl md:text-8xl font-serif leading-[1] mb-4">
              purer Genuss
            </h2>
            <div className="w-32 h-1 bg-black mb-6"></div>
            <p className="text-xl md:text-2xl opacity-90">
              Enjoy refined moments with stunning visuals.
            </p>
          </div>
          <div className="md:w-1/4 flex-shrink-0">
            <Image
              src={Pic2}
              alt="Animation Pic"
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </section>
      </div>
    </div>
  );
}
