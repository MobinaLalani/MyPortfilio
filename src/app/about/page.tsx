import type { Metadata } from "next";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About",
  description: "Skills, interests, and experience of a frontend developer",
};

export default function About() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>About Me</h1>
      <p>
        I’m a frontend developer passionate about building fast, accessible,
        and maintainable interfaces. I care about best practices in SEO and
        performance, and enjoy effective teamwork and communication.
      </p>
      <ul>
        <li>Expertise: React, Next.js, TypeScript, CSS/Tailwind</li>
        <li>Interests: Design Systems, DX, Accessibility</li>
      </ul>
    </div>
  );
}
