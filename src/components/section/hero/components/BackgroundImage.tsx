"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BackgroundImage() {
  const rows = useMemo(() => {
    const row1 = [
      "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg?auto=compress&cs=tinysrgb&w=800",
    ];

    const row2 = [
      "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=800",
    ];

    const row3 = [
      "https://images.pexels.com/photos/162575/spring-nature-flowers-flora-162575.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/349758/pexels-photo-349758.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=800",
    ];

    return [row1, row2, row3];
  }, []);

  const rowSpeed = [60, 70, 20];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {rows.map((pics, rowIndex) => {
        const isEven = rowIndex % 2 === 0;

        return (
          <div
            key={rowIndex}
            className="absolute left-0 w-full flex"
            style={{
              top: `${rowIndex * 30}%`,
              height: "29%",
            }}
          >
            <motion.div
              className="flex flex-nowrap"
              animate={{
                x: isEven ? ["0%", "-50%"] : ["-50%", "0%"],
              }}
              transition={{
                repeat: Infinity,
                duration: rowSpeed[rowIndex],
                ease: "linear",
              }}
            >
              {pics.concat(pics).map((pic, index) => (
                <div
                  key={index}
                  className="w-[50vw] h-full flex-shrink-0 relative mx-2"
                >
                  <Image
                    src={pic}
                    alt={`bg-${rowIndex}-${index}`}
                    fill
                    className="object-cover rounded-2xl"
                    priority={rowIndex === 0}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
