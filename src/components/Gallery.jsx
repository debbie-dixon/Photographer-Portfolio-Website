import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image from "../assets/image7.jpg";
import image2 from "../assets/image3.jpg";
import image3 from "../assets/image4.jpg";
import image4 from "../assets/image5.jpg";
import image5 from "../assets/image6.jpg";
import Header from "./Header";

const slides = [
  { url: image, title: "Editorial Portraits", label: "Featured" },
  { url: image2, title: "Studio Sessions", label: "New" },
  { url: image3, title: "Creative Portraits", label: "Popular" },
  { url: image4, title: "Lifestyle Stories", label: "Featured" },
  { url: image5, title: "Personal Branding", label: "New" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((index) => (index === 0 ? slides.length - 1 : index - 1));

  const nextSlide = () =>
    setCurrentIndex((index) => (index === slides.length - 1 ? 0 : index + 1));

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <Header text="Gallery" id="gallery" />
      <div className="relative mx-auto border-b border-gray-200 w-full max-w-7xl overflow-hidden px-4 py-10 sm:px-8 lg:px-12">
        <div className="relative h-136 sm:h-124 flex justify-center items-center">
          {slides.map((slide, slideIndex) => {
            const rawOffset = slideIndex - currentIndex;
            const offset =
              rawOffset > 2
                ? rawOffset - slides.length
                : rawOffset < -2
                  ? rawOffset + slides.length
                  : rawOffset;
            const isActive = offset === 0;

            return (
              <article
                key={slide.title}
                style={{
                  transform: `translateX(calc(${offset} * 115%)) scale(${isActive ? 1.05 : 0.88})`,
                }}
                className={`absolute top-1/2 -translate-y-1/2 w-[min(72vw,18rem)] sm:w-[16rem] overflow-hidden border border-brandPrimary bg-[#fbf7ef] shadow-lg transition-all duration-500 ease-in-out ${
                  isActive
                    ? "z-20 opacity-100"
                    : "z-10 opacity-70 max-md:pointer-events-none max-md:opacity-0"
                }`}
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded bg-brandSecondary px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#6d4a29]">
                    {slide.label}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-lg text-brandPrimary sm:text-xl">
                    {slide.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#806d5a] sm:text-sm">
                    Thoughtful imagery created around your story and style.
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          aria-label="Previous gallery slide"
          className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-brandPrimary p-2 text-white shadow-md transition-transform hover:scale-110 sm:left-5"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next gallery slide"
          className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-brandPrimary p-2 text-white shadow-md transition-transform hover:scale-110 sm:right-5"
        >
          <ChevronRight size={22} />
        </button>

        <div className="flex justify-center gap-2 pt-8">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.title}
              onClick={() => goToSlide(slideIndex)}
              aria-label={`Go to ${slide.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === slideIndex
                  ? "w-5 bg-brandPrimary"
                  : "w-2 bg-brandSecondary"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
