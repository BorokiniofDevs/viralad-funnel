import Image from "next/image";

interface Props {
  title: string;
  image: string;
  category: string;
}

export default function BlogCard({ title, image, category }: Props) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-md bg-black
        shadow-md transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
      "
    >
      {/* IMAGE */}
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* OVERLAY */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* CONTENT */}
      <div className="absolute bottom-0 z-10 p-5 text-white">
        <span className="text-xs uppercase tracking-wide text-orange-400">
          {category}
        </span>

        <h3
          className="
            mt-2 text-lg font-semibold leading-snug
            transition-transform duration-300
            group-hover:-translate-y-1
          "
        >
          {title}
        </h3>
      </div>
    </article>
  );
}
