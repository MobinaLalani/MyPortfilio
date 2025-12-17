"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Mountains",
    subtitle: "Beautiful mountain view",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Forest",
    subtitle: "Green and serene forest",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    title: "Desert",
    subtitle: "Vast desert landscape",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    title: "Canyon",
    subtitle: "Grand canyon view",
  },
];

export default function ImageAccordion() {
  const [active, setActive] = useState<number>(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <>
      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl p-4 max-w-[80vw] max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={lightboxImg}
              alt=""
              className="max-w-full max-h-[80vh] rounded-lg"
              draggable={false}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <button
              className="absolute top-2 right-2 text-black text-xl font-bold"
              onClick={() => setLightboxImg(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Accordion */}
      <div className="flex gap-3 w-full max-w-5xl h-64">
        {images.map((img, index) => {
          const isActive = index === active;

          return (
            <motion.div
              key={img.id}
              onClick={() => setLightboxImg(img.src)}
              onMouseEnter={() => setActive(index)} // hover => فعال شدن
              layout
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                mass: 1,
              }}
              className="relative cursor-pointer overflow-hidden rounded-2xl"
              animate={{ flexGrow: isActive ? 4 : 0.5 }}
            >
              <motion.img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
                transition={{ duration: 0.3 }}
              />

              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-1">
                {/* Circle icon */}
                <motion.div
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg cursor-pointer"
                 
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {img.title.charAt(0)}
                </motion.div>

                {/* Text فقط وقتی فعال است */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col text-white"
                  >
                    <h3 className="text-lg font-semibold">{img.title}</h3>
                    <p className="text-sm">{img.subtitle}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
