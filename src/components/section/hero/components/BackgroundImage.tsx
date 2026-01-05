"use client";

import React, { useMemo } from "react";
import  CreateNode from '../../../../../public/image/mapProject/createNode.png';
import MapPic from "../../../../../public/image/mapProject/mapPicpng.png";
import AdminDashboardPic from '../../../../../public/image/managementPic/AdminDashboard.png';
import bundleListPic from "../../../../../public/image/managementPic/managment-bundleList.png";
import javaScriptPic from "../../../../../public/image/javaScriptPic.png";
import TypeScriptPic from '../../../../../public/image/TypeScriptPic.png'
import fleetPic from "../../../../../public/image/managementPic/managment-fleet.png";
import wallet from '../../../../../public/image/panelPic/walletPic.png';
import TailwindPic from '../../../../../public/image/TailwindPic.png';
import userInfo from '../../../../../public/image/panelPic/userInfo.png' ;
import nextjsPic from '../../../../../public/image/nextjsPic.png';
import ReactPic from "../../../../../public/image/ReactPic.png"
import Image from "next/image";
import { motion } from "framer-motion";

export default function BackgroundImage() {
  const rows = useMemo(() => {
    const row1 = [AdminDashboardPic, TailwindPic, bundleListPic, fleetPic];

    const row2 = [CreateNode, ReactPic, MapPic, javaScriptPic];

    const row3 = [
      TypeScriptPic,
      wallet,
      nextjsPic,
      userInfo,
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
                  className="w-[30vw] h-full flex-shrink-0 relative mx-2"
                >
                  <Image
                    src={pic}
                    alt={`bg-${rowIndex}-${index}`}
                    fill
                    className="object-fill rounded-2xl"
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
