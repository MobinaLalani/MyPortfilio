"use client";

import React, { useState, useEffect } from "react";
import DynamicTabs from "@/components/ui/DynamicTabs";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "./style.css";

const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1503264116251-35a269479413",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
];

export default function HalazoneIndex() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // بستن با ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div>
      {/* ===== Swiper ===== */}
      <Swiper
        effect="cards"
        modules={[EffectCards]}
        grabCursor={true}
        simulateTouch={true}
        allowTouchMove={true}
        className="mySwiper"
        cardsEffect={{
          perSlideOffset: 15,
          perSlideRotate: 2,
          slideShadows: true,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-inner"
              style={{ backgroundImage: `url(${img})` }}
            >
              <button
                className="zoom-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage(img);
                }}
                aria-label="Zoom image"
              >
                🔍
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== Fullscreen Image ===== */}
      {activeImage && (
        <div
          className="fullscreen-overlay"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="fullscreen"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="close-btn"
            onClick={() => setActiveImage(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}

      {/* ===== Tabs ===== */}
      {/* DynamicTabs اینجا در صورت نیاز */}
    </div>
  );
}
