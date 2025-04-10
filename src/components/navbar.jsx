import { useState, useEffect } from "react";
import logo from "../assets/plplogo.png";
import more from "../assets/more.svg";
import Login from "../components/Login.jsx"; 

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [showLogin, setShowLogin] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
 
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out ${
          scrolling ? "bg-green-900 py-3 shadow-lg" : "bg-transparent py-5"
        }`}
      >
        <div className="flex items-center justify-between px-6">
     
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="plp logo"
              className={`inter transition-all duration-300 ${
                scrolling ? "w-12 h-12" : "w-16 h-16"
              }`}
            />
            <span
              className={`hidden md:flex poppins text-2xl font-bold transition-all duration-300 ${
                scrolling ? "inter text-white text-xl" : "text-green-700 text-2xl"
              }`}
            >
              Pamantasan ng Lungsod ng Pasig
            </span>
          </div>

         
          <div className="hidden tablet:flex tablet:items-center tablet:space-x-5 pc:flex items-center pc:space-x-12">
            <a
              href="#"
              className={`font-bold transition-colors duration-300 ${
                scrolling
                  ? "text-white hover:text-gray-300"
                  : "text-green-700 hover:text-green-500"
              }`}
            >
              Home
            </a>
            <a
              href="#"
              className={`font-bold transition-colors duration-300 ${
                scrolling
                  ? "text-white hover:text-gray-300"
                  : "text-green-700 hover:text-green-500"
              }`}
            >
              About
            </a>
            <a
              href="#"
              className={`font-bold transition-colors duration-300 ${
                scrolling
                  ? "text-white hover:text-gray-300"
                  : "text-green-700 hover:text-green-500"
              }`}
            >
              Transactions
            </a>
           
            <button
              className={`px-4 py-2 rounded-lg shadow-md font-bold transition-all duration-300 ${
                scrolling
                  ? "bg-yellow-300 text-green-900 hover:bg-yellow-200"
                  : "bg-green-700 text-white hover:bg-green-500"
              } w-40`}
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </div>

     
          <div className="inline md:hidden">
            <img src={more} alt="more" className="w-9 h-9" />
          </div>
        </div>
      </nav>

    
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-2xl">
        
            <button
              className="absolute top-2 right-2 text-green-500 hover:text-green-700"
              onClick={() => setShowLogin(false)}
            >
              ✖  
            </button>
            <Login /> 
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
