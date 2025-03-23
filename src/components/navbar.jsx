import { useState, useEffect } from "react";
import logo from "../assets/plplogo.svg";
import more from "../assets/more.svg";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out ${
        scrolling ? "bg-blue-900 py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="flex items-center justify-between px-6">

        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="plp logo"
            className={`transition-all duration-300 ${
              scrolling ? "w-12 h-12" : "w-16 h-16"
            }`}
          />
          <span
            className={`hidden md:flex font-poppins text-2xl font-bold transition-all duration-300 ${
              scrolling ? "text-white text-xl" : "text-blue-900 text-2xl"
            }`}
          >
            University of Pasig
          </span>
        </div>
       
        <div className="hidden tablet:flex tablet:items-center tablet:space-x-5 pc:flex items-center pc:space-x-12">
          <a
            href="#"
            className={`font-bold transition-colors duration-300 ${
              scrolling ? "text-white hover:text-gray-300" : "text-blue-900 hover:text-blue-600"
            }`}
          >
            Home
          </a>
          <a
            href="#"
            className={`font-bold transition-colors duration-300 ${
              scrolling ? "text-white hover:text-gray-300" : "text-blue-900 hover:text-blue-600"
            }`}
          >
            About
          </a>
          <a
            href="#"
            className={`font-bold transition-colors duration-300 ${
              scrolling ? "text-white hover:text-gray-300" : "text-blue-900 hover:text-blue-600"
            }`}
          >
            Transactions
          </a>
          <button
            className={`px-4 py-2 rounded-lg shadow-md font-bold transition-all duration-300 ${
              scrolling
                ? "bg-white text-blue-900 hover:bg-gray-200"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } w-40`}
          >
            Login
          </button>
        </div>

        <div className="inline md:hidden">
          <img src={more} alt="more" className="w-10 h-10" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
