import plplogo from "../assets/plplogo.svg"
function Menu() {
   return (
     <div className="flex flex-col gap-10 justify-center items-center bg-white h-screen w-screen">
       <div className="flex flex-col gap-2 justify-center items-center">
         <img src={plplogo} className="h-12"/>
         <h1 className="bebas font-bold text-2xl text-blue-900">Pamantasan ng Lungsod ng Pasig</h1>
       </div>
     
       <div className="grid grid-rows-5 w-[80vw] gap-5">
          <button className="poppins text-center text-base font-bold text-blue-900" onClick={() => alert("Hello")}>Home
          </button>
          <button className="poppins text-center text-base font-bold text-blue-900">About
          </button>
          <button className="poppins text-center text-base font-bold text-blue-900">Transactions
          </button>
          <button className="poppins text-center text-base font-bold text-blue-900">Login
          </button>
       </div>
     </div>
   );
}

export default Menu;