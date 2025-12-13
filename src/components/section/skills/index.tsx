import Image from "next/image";
import SkillPic from "../../../../public/image/skillsPic.jpeg";

export default function UGCHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={SkillPic}
        alt="UGC background"
        className="w-full h-auto"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-16 text-white">
        {/* Right content */}
        <div className="flex flex-col justify-start pt-18">
          <h2 className="mb-20 text-4xl md:text-5xl font-serif">
            About My Skills
          </h2>

          <ul className="space-y-4">
            {[
              "Strong knowledge of React & Next.js",
              "Clean and scalable component architecture",
              "Tailwind CSS & modern UI design",
              "REST API & async data handling",
              "Performance optimization & SEO",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                {/* Check Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-1 shrink-0"
                >
                  <path
                    d="M8 0.5H16C20.1421 0.5 23.5 3.85786 23.5 8V16C23.5 20.1421 20.1421 23.5 16 23.5H8C3.85786 23.5 0.5 20.1421 0.5 16V8C0.5 3.85786 3.85786 0.5 8 0.5Z"
                    fill="#fff"
                  />
                  <path
                    d="M7 12.5L10.2 15.5L17 8.5"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Text */}
                <span className="text-base md:text-lg opacity-90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Left content */}
        <div className="flex flex-col justify-center items-end">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl md:text-5xl font-serif">
              Frontend Developer
            </h1>

            <p className="mb-2 text-lg md:text-xl opacity-90">
              Specialized in React & Next.js
            </p>

            <p className="mb-8 max-w-md text-base md:text-lg opacity-80">
              Building scalable dashboards & clean UI
            </p>

            <a
              href="/resume.pdf"
              download
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
