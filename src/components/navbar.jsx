import logo from "../assets/plplogo.svg";

import more from "../assets/more.svg"

function Navbar() {
    return (
        <nav className="flex items-center justify-between  px-6 py-4">
        <div className="flex items-center space-x-3"> 
            <img src={logo} alt="plp logo" className="w-15 h-15" />
            <span className="hidden md:flex font-poppins text-2xl font-bold text-blue-900"> University of Pasig </span>
        </div>
    
        <div class="hidden md:flex poppins  items-center space-x-12">
          <a href="#" className="text-blue-900 hover:text-blue-600 font-bold">Home</a>
          <a href="#" className="text-blue-900 hover:text-blue-600 font-bold">About</a>
          <a href="#" className="text-blue-900 hover:text-blue-600 font-bold">Transactions</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md font-bold hover:bg-blue-700 w-40">
            Login
          </button>
        </div>
        <div className="inline md:hidden mr-[2vw]">
          <img src={more} alt="more" className="more w-10 h-10" />
        </div>
    </nav>
    
    );
}


export default Navbar;