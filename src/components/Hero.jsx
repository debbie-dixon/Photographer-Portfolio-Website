import image from "../assets/image3.jpg";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full flex flex-col md:flex-row justify-between items-center bg-[#919191] py-12 md:py-0 overflow-hidden"
    >
      {/* Content Container */}
      <div className="flex flex-col items-center text-center px-6 sm:px-12 md:w-1/2 max-w-xl lg:items-start lg:text-left">
        <section>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white text-center sm:text-start leading-tight">
            Authentic portraits that capture who{" "}
            <span className="text-brandPrimary italic">YOU</span> truly are
          </h1>

          <p className="mt-4 mb-4 text-xs sm:text-sm sm:text-start text-center md:text-base font-sans uppercase tracking-wider text-slate-700">
            High-end editorial and lifestyle studio portraiture based in CITY
          </p>
        </section>

        <Button
          text="View Monthly Features"
          hover="hover:text-blue"
          borderColor="border-[#502108]"
          border="border-2"
          textColor="text-[#502108]"
          font="font-semibold"
          link="#gallery"
          lg="lg:flex"
          visibility="hidden"
        />
      </div>

      {/* Image Container */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end">
        <img
          src={image}
          alt="Portrait photography model"
          className="w-full max-w-md md:max-w-lg h-auto object-cover max-h-150"
        />
      </div>

      <Button
        text="View Monthly Features"
        hover="hover:text-blue"
        borderColor="border-[#502108]"
        border="border-2"
        textColor="text-[#502108]"
        font="font-semibold"
        link="#gallery"
        lg="lg:hidden"
        visibility="flex"
        mt="mt-8"
      />
    </section>
  );
}
