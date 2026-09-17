import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ image, title, description, link }) {
  return (
    <div className="flex flex-col w-full max-w-75 overflow-hidden  ">
      {/* 1. Image (Clean and squared off at the top) */}
      <div className="relative aspect-square w-full overflow-hidden bg-brandPrimary">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          /* Fallback placeholder if your image path is broken */
          <div className="w-full h-full flex items-center justify-cente font-medium">
            Loading Image...
          </div>
        )}
      </div>

      <div className="flex p-6 flex-col border-2 grow">
        <h3 className="font-bold text-xl font-serif mb-1 tracking-tight">
          {title}
        </h3>

        <p className="font-sans text-base leading-relaxed">{description}</p>

        <a
          href={link}
          className="mt-auto self-end inline-flex items-center gap-1 pt-6 font-semibold text-[#502108] hover:text-black transition-colors"
        >
          Learn more
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
