"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

import Pic1 from "/public/image/frontendPic.jpg";
import Pic2 from "/public/image/animationPic.jpg";

export default function HorizontalScrollRows() {
  const row1Ref = useRef<HTMLElement>(null);
  const row2Ref = useRef<HTMLElement>(null);

  const [row1Progress, setRow1Progress] = useState(0);
  const [row2Progress, setRow2Progress] = useState(0);

  const rowSpeed = 180; // px
  const maxProgress = 0.4;
  // فقط تا وسط
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  /* ---------------- helper ---------------- */
const calculateProgress = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;

  let raw = (vh - rect.top) / (vh + rect.height);

  // clamp اولیه
  raw = Math.min(Math.max(raw, 0), maxProgress);

  // normalize
  const t = raw / maxProgress;

  // easing نرم نزدیک توقف
  return easeOutCubic(t);
};

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      lerp: 0.15,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
    });

    const onScroll = () => {
      if (row1Ref.current) {
        setRow1Progress(calculateProgress(row1Ref.current));
      }
      if (row2Ref.current) {
        setRow2Progress(calculateProgress(row2Ref.current));
      }
    };

    lenis.on("scroll", onScroll); // ✅ این خط حیاتی بود

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-col gap-20 px-6 md:px-16 py-24">
        {/* ---------------- Row 1 ---------------- */}
        <section
          ref={row1Ref}
          className="flex items-center gap-8 md:gap-14"
          style={{
            transform: `translateX(${row1Progress * rowSpeed}px)`,
          }}
        >
          <div className="w-[280px] md:w-[360px] flex-shrink-0">
            <Image
              src={Pic1}
              alt="Frontend Pic"
              className="rounded-xl shadow-lg"
              priority
            />
          </div>

          <div>
            <h2 className="text-6xl md:text-8xl font-serif leading-none mb-4">
              reine Natur
            </h2>
            <div className="w-32 h-[3px] bg-black mb-6" />
            <p className="text-xl md:text-2xl opacity-90 max-w-xl">
              Pure experience in nature and dining.
            </p>
          </div>
        </section>

        {/* ---------------- Row 2 ---------------- */}
        <section
          ref={row2Ref}
          className="flex items-center gap-8 md:gap-14 justify-end"
          style={{
            transform: `translateX(${-row2Progress * rowSpeed}px)`,
          }}
        >
          <div className="text-right">
            <h2 className="text-6xl md:text-8xl font-serif leading-none mb-4">
              purer Genuss
            </h2>
            <div className="w-32 h-[3px] bg-black mb-6 ml-auto" />
            <p className="text-xl md:text-2xl opacity-90 max-w-xl">
              Enjoy refined moments with stunning visuals.
            </p>
          </div>

          <div className="w-[280px] md:w-[360px] flex-shrink-0">
            <Image
              src={Pic2}
              alt="Animation Pic"
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </section>
      </div>
    </div>
  );
}
