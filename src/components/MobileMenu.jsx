import { useEffect } from "react"

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {

  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
      ${isMenuOpen
        ? "h-screen opacity-100 pointer-events-auto"
        : "h-0 opacity-0 pointer-events-none"}
      
      `}>

      <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl">
        &times;
      </button>



      <a
        href="#home"
        onClick={() => setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
        ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        About
      </a>

      <a
        href="#projects"
        onClick={() => setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={() => setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
          ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Contact
      </a>

    </div>
  );
}