import React from "react";
import Image from "next/image";
import Link from "next/link"; // 👈 اضافه شد
import image from "../../../../public/image/Screenshot-2025-12-02-144629.png";

function HeroSection() {
  return (
    <div className="w-full bg-[#BEB7AD]">
      {/* --- Navbar --- */}
      <header className="fixed top-0 z-50  border-b border-border w-full bg-inherit">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-lg text-primary"
          >
            Portfolio
          </Link>
          <nav className="flex items-center gap-6 text-sm text-foreground">
            <Link href="/projects" className="hover:text-primary">
              Projects
            </Link>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* --- Hero Image بخش --- */}
      <div className="w-full flex justify-center ">
        <div className="w-[500px] h-[700px] relative">
          <Image
            src={image}
            alt="Hero Image"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
