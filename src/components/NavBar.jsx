import { useEffect, useRef, useState } from "react";
import DynamicIcons from "./DynamicIcons";
import SideMenu from "./SideMenu";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 16) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (Math.abs(scrollDelta) < 8) return;

      setIsVisible(scrollDelta > 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between items-center gap-4 py-4 px-6 sticky top-0 left-0 w-full bg-[#c4bab3] shadow-sm mx-auto z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <p className="font-serif italic px-6 font-bold text-2xl text-[#502108]">
          Logo
        </p>
        <div className="hidden md:flex gap-4 font-sans font-semibold items-center">
          <a href="/" className="px-2 py-1 hover:bg-[#502108] hover:text-white">
            Home
          </a>
          <a
            href="#about"
            className="px-2 py-1 hover:bg-[#502108] hover:text-white"
          >
            About
          </a>
          <a
            href="#services"
            className="px-2 py-1 hover:bg-[#502108] hover:text-white"
          >
            Services
          </a>
          <a
            href="#contact"
            className="px-2 py-1 hover:bg-[#502108] hover:text-white"
          >
            Contact
          </a>
        </div>
        <a
          href="#book"
          className="px-4 py-2 tracking-wide hidden md:flex  text-white font-bold bg-[#502108]"
        >
          Book Now
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[#502108]  p-2 focus:outline-none"
          aria-label="Open Menu"
        >
          <DynamicIcons iconName="menu" />
        </button>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-55 shadow-xl p-6 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          className=" p-2 focus:outline-none flex justify-end mb-8"
          aria-label="Close Menu"
        >
          <DynamicIcons iconName="x" />
        </button>
        <SideMenu closeMenu={closeMenu} />
      </div>
    </>
  );
}
