"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SkillPic from "../../../../public/image/skillsPic.png";
import heroBackGround from "../../../../public/image/heroSectionIconPic.png";

export default function UGCHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 فقط scale می‌کنیم، نه جابه‌جایی
  const scale = Math.min(1.12, 1 + scrollY * 0.00025);

return (
  <section className="relative w-full overflow-hidden min-h-[75vh]">
    {/* Fixed Background */}
    <div
      className="absolute inset-0 -z-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBackGround.src})`,
        backgroundAttachment: "fixed",
      }}
    />

    {/* Skill Image */}
    <div
      className="absolute inset-0 z-0 flex items-end justify-center"
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.1s linear",
      }}
    >
      <Image
        src={SkillPic}
        alt="UGC background"
        className="w-full max-w-6xl h-auto object-contain"
        priority
      />
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40 z-10" />

    {/* Content */}
    <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16 py-20 text-white items-center">
      {/* Right – About */}
      <div className="flex flex-col justify-center ml-8">
        <h2 className="mb-10 text-4xl md:text-5xl font-serif">
          About My Skills
        </h2>

        <ul className="space-y-4 max-w-xl ">
          {[
            "React js & ReactQuery",
            "TypeScript",
            "HTML 5 & Css 3",
            "JavaScript",
            "Tailwind Css & Bootstrap",
            "Restful API Integration",
            "StateManagement (Redux,Zustand)",
            "Responsive & Adaptive Design",
            "version control( Git )",
            "Next .js",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="mt-1 shrink-0"
              >
                <path
                  d="M8 0.5H16C20.1421 0.5 23.5 3.85786 23.5 8V16C23.5 20.1421 20.1421 23.5 16 23.5H8C3.85786 23.5 0.5 20.1421 0.5 16V8C0.5 3.85786 3.85786 0.5 8 0.5Z"
                  fill="#fff"
                />
                <path
                  d="M7 12.5L10.2 15.5L17 8.5"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-base md:text-lg opacity-90">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Left – Title */}
      <div className="flex justify-end">
        <div className="max-w-md">
          <h1 className="mb-4 text-4xl md:text-5xl font-serif">
            Frontend Developer
          </h1>

          <p className="mb-2 text-lg md:text-xl opacity-90">
            Specialized in React & Next.js
          </p>

          <p className="mb-8 text-base md:text-lg opacity-80">
            Building scalable dashboards & clean UI
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);


}
