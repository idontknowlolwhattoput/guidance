import logo from "../assets/plplogo.svg";
import emailogo from "../assets/email.svg";
import passlogo from "../assets/padlock.svg";
import facelogo from "../assets/facebooklogo.svg";
import googlelogo from "../assets/googlelogo.svg";

function Login() {
  return (
   
      

      <div className="grid justify-center items-center grid-col-2 w-130 h-160 bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-lg">
      <div className="flex flex-row justify-center items-center gap-3 font-bold text-blue-900">
        <img src={logo} className="w-20 h-20" />
        <p className="inter text-3xl">University of Pasig</p>
      </div>
        <form>
          <label htmlFor="emailbox" className="flex flex-row items-center gap-1 text-base font-bold text-black">
            <img src={emailogo} className="h-4" />
            Email:
          </label>
          <input type="text" id="emailbox" placeholder="Enter your email" className="block w-100 h-10 px-3 mt-2 mb-5 shadow-md rounded-md focus:ring-2" />

          <label htmlFor="passwordbox" className="flex flex-row items-center gap-1 text-base font-bold text-black">
            <img src={passlogo} className="h-4" />
            Password:
          </label>
          <input type="password" id="passwordbox" placeholder="Enter your password" className="block w-100 h-10 px-3 mt-2 shadow-md rounded-md focus:ring-2" />
          <div className="grid grid-cols-2 justify-center items-center mt-3">
           <div className="flex gap-2 ">
             <input type="checkbox" id="check"/>
             <label htmlFor ="check" className="font-semibold text-base">Show password</label>
           </div>
           <button className="text-base font-semibold text-end text-blue-900">Forgot password?</button>
          </div>

          <div className="mt-7 grid grid-rows-1 gap-3">
            <button className="w-100 h-10 bg-blue-900 text-white font-bold rounded-lg shadow-md hover:bg-blue-800">Login</button>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-2 text-gray-500 font-bold">OR</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <button className="w-100 flex items-center justify-center gap-2 h-10 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700">
              <img src={facelogo} className="h-5" /> Sign in with Facebook
            </button>

            <button className="w-100 flex items-center justify-center gap-2 h-10 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700">
              <img src={googlelogo} className="h-5" /> Sign in with Google
            </button>
          </div>
        </form>
      </div>
   
  );
}

export default Login;
