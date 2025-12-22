"use client";

import { projectDetails } from "@/data/projects";
import ImageCardSwiper from "@/components/ui/ImageCardSwiper";
import FullBleedRow from "@/components/ui/FullBleedRow";

export default function HalazoneIndex() {
  const halazone = projectDetails.Halazone;

  if (!halazone) return null;

  const sections = Object.entries(halazone) as [
    string,
    (typeof halazone)[keyof typeof halazone]
  ][];

  return (
    <div className="px-0 lg:px-0 py-12 space-y-20">
      {sections.map(([sectionKey, sectionData], index) => {
        if (!sectionData) return null;

        const { title, paragraphs, images } = sectionData;

        const isEven = index % 2 === 0;

        return (
          <FullBleedRow
            key={sectionKey}
            backgroundClassName={isEven ? "bg-[#BEB7AD]/30" : "bg-black/5"}
          >
            <section
              className={`flex flex-col lg:flex-row items-center gap-62 ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* ===== Text Content ===== */}
              <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
                  {title}
                </h2>

                {paragraphs.map((text, idx) => (
                  <p
                    key={idx}
                    className="text-base sm:text-lg leading-relaxed text-gray-700"
                  >
                    {text}
                  </p>
                ))}
              </div>

              {/* ===== Swiper Section ===== */}
              <div className="lg:w-1/2 w-full max-w-md mx-auto">
                <ImageCardSwiper
                  images={images}
                  direction={isEven ? "ltr" : "rtl"} // ← تغییر این خط
                />
              </div>
            </section>
          </FullBleedRow>
        );
      })}
    </div>
  );
}
