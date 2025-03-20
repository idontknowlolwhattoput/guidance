import Navbar from "./components/navbar.jsx"
import Bgimage from "./components/bgimage.jsx"

function Landing() {
    return (
       <>

         <Navbar />
         <Bgimage />

         <div className="flex flex-col md:flex-row justify-center items-center gap-20 bg-amber-700 min-h-[100vh] mt-[20vh] p-20">
            <div className="w-50 h-50 bg-blue-700 border-2">

            </div>
            <div className="w-50 h-50 bg-blue-700 border-2">

            </div>
            <div className="w-50 h-50 bg-blue-700 border-2">

            </div>
         </div>
       </>
    );
}

export default Landing;