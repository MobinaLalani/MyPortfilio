import type { Metadata } from "next";
import Image from "next/image";
import aboutPic from "../../../public/image/aboutPic.png";
import AboutSection from "@/components/section/about";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About",
  description: "Skills, interests, and experience of a frontend developer",
};

export default function About() {
  return (
<AboutSection/>
  );
}
