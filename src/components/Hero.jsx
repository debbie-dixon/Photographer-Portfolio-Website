import image from "../assets/Hero.jpg";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[580px] md:min-h-[600px] flex flex-col md:flex-row justify-between items-center bg-[#919191] pt-10 md:pt-0 px-6 sm:px-12 overflow-hidden relative"
    >
      {/* Top Text & CTA Block */}
      <div className="flex flex-col items-center text-center md:w-1/2 lg:max-w-xl md:items-start md:text-left z-10">
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white leading-tight">
          Authentic portraits that capture who{" "}
          <span className="text-brandPrimary italic">YOU</span> truly are
        </h1>

        <p className="mt-3 mb-6 text-[11px] sm:text-sm md:text-base font-sans uppercase tracking-wider text-slate-900 font-medium">
          High-end editorial and lifestyle studio portraiture based in CITY
        </p>

        <Button
          text="View Monthly Features"
          hover="hover:text-blue"
          borderColor="border-[#502108]"
          border="border-2"
          textColor="text-[#502108]"
          font="font-semibold"
          link="#gallery"
        />
      </div>

      {/* Bottom Cutout Container - Flush to Section Bottom */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end h-full mt-6 md:mt-0 self-end -mb-1">
        <img
          src={image}
          alt="Portrait photography model cutout"
          className="w-auto h-[320px] xs:h-[360px] sm:h-[420px] md:h-[500px] lg:h-[560px] object-contain object-bottom drop-shadow-lg"
        />
      </div>
    </section>
  );
}
