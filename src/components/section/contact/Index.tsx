export default function ContactIndex() {
  return (
    <>
      <h1 className="text-5xl font-bold tracking-tight">Contact</h1>
      <p className="mt-2 text-foreground/70">
        For collaboration or inquiries, reach out via the options below.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a
          href="mailto:email@example.com"
          className="rounded-lg border border-border p-5 hover:shadow-sm"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-border p-5 hover:shadow-sm"
        >
          LinkedIn
        </a>
      </div>
    </>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact paths for collaboration and professional communication",
};
