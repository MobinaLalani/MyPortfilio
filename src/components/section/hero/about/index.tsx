import type { Metadata } from "next";
import Image from "next/image";
import aboutPic from "../../../../../public/image/aboutPic.png";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About",
  description: "Skills, interests, and experience of a frontend developer",
};

export default function AboutSection() {
  return (
    <section className="w-full bg-black text-white py-16 h-[90vh]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr_1fr] gap-10 items-center">
          <div className="text-left">
            <h2 className="text-3xl font-semibold">Who am I?</h2>

            <p className="text-base mt-4 leading-relaxed text-white/90">
              Hey, there! Nice to meet you! My name is{" "}
              <strong className="text-white">Gloria Coleman</strong> and I am a
              freelance content creator with 4 years of experience.
            </p>

            <p className="text-base mt-6 leading-relaxed text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex items-center gap-2 mt-8">
              <Sparkle className="w-6 h-6" />
              <Sparkle className="w-4 h-4" />
              <Sparkle className="w-3 h-3" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-3xl overflow-hidden w-56 h-72 md:w-[600px] md:h-[800px] flex items-center justify-center">
              <Image
                src={aboutPic}
                alt="Portrait"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-semibold">What is UGC?</h2>

            <p className="text-base mt-4 leading-relaxed text-white/90">
              UGC stands for “user-generated content”. It is media content that
              creators like me generate for brands to publish on their own
              social media profiles.
            </p>

            <button className="mt-6 inline-block rounded-full border border-white/20 px-8 py-2 text-sm font-medium hover:bg-white/10 transition">
              work with me
            </button>

            <p className="text-base mt-6 leading-relaxed text-white/80">
              It is a time-saving and cost-effective strategy for brands to get
              fresh photo and video content for their socials that feels genuine
              and authentic to the audience.
            </p>

            <div className="mt-6">
              <Sparkle className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ICONS */
function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l1.2 2.8L16 6l-2.8 1.2L12 10l-1.2-2.8L8 6l2.8-1.2L12 2z"
        fill="white"
        opacity="0.95"
      />
      <path d="M4 14l1 2.3L7.3 18 5 16l-1-2z" fill="white" opacity="0.7" />
    </svg>
  );
}
