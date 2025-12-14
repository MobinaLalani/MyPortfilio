import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  image?: string | StaticImageData; // اختیاری کردیم
};

export default function ProjectCard({ slug, title, image }: Props) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group relative h-[260px] w-[260px] overflow-hidden rounded-2xl cursor-pointer shadow-lg transition-transform duration-300 ease-out hover:scale-105">
        {/* تصویر پروژه فقط اگر موجود باشد */}
        {image ? (
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-700">
            تصویر موجود نیست
          </div>
        )}

        {/* Overlay نیمه شفاف با blur */}
        <div
          className="
            absolute inset-0 bg-black/20 backdrop-blur-sm
            transition-all duration-500 ease-out
            group-hover:bg-black/50
          "
        />

        {/* عنوان پروژه */}
        <div
          className="
            absolute inset-0 flex items-center justify-center
            opacity-0 translate-y-4
            transition-all duration-500 ease-out
            group-hover:opacity-100 group-hover:translate-y-0
          "
        >
          <h3 className="text-white text-xl sm:text-2xl font-semibold tracking-wide text-center px-4">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
