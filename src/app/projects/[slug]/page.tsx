import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  image: any;
};

export default function ProjectCard({ slug, title, image }: Props) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group relative h-[260px] w-[260px] overflow-hidden rounded-2xl cursor-pointer shadow-lg">
        تصویر پروژه
        {/* <Image src={image} alt={title} fill className="object-cover" /> */}

        {/* Overlay نیمه شفاف با blur */}
        <div
          className="
            absolute inset-0
            bg-black/30 backdrop-blur-sm
            transition-all duration-500 ease-out
            group-hover:bg-black/50
          "
        />

        <div
          className="
            absolute inset-0 flex items-center justify-center
            opacity-0 translate-y-4
            transition-all duration-500
            group-hover:opacity-100 group-hover:translate-y-0
          "
        >
          <h3 className="text-white text-2xl font-semibold tracking-wide text-center px-2">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
