import Navbar from "./components/navbar.jsx";
import Bgimage from "./components/bgimage.jsx";

function Landing() {
  return (
    <>
      <Navbar />
      <div className="pt-[100px]"> {/* Prevent content from being hidden under the navbar */}
        <Bgimage />
      <div className="sm:mt-[100vh] flex flex-col md:flex-row justify-center items-center gap-20 min-h-[100vh] p-20 md:mt-[20vh]">
          <div className="w-70 h-70 bg-blue-700 border-2"></div>
          <div className="w-70 h-70 bg-blue-700 border-2"></div>
          <div className="w-70 h-70 bg-blue-700 border-2"></div>
        </div>
      </div>
    </>
  );
}

export default Landing;
