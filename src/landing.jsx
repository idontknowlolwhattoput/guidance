import { motion } from "framer-motion";
import Navbar from "./components/navbar.jsx";
import Bgimage from "./components/bgimage.jsx";
import Image1 from "./assets/medal.svg";
import Image2 from "./assets/global-connection.svg";
import Image3 from "./assets/save-the-planet.svg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  viewport: { amount: 0.2 },
};

function Landing() {
  return (
    <>
      <Navbar />
      <div className="pt-[100px]">
        <Bgimage />

        <motion.span {...fadeIn}>
          <motion.h1 {...fadeIn} className="text-blue-900 mt-[10vw] tablet:mt-[20vh] text-3xl text-center tablet:text-5xl font-bold mb-5">
            Welcome to University of Pasig
          </motion.h1>
        </motion.span>

        <motion.span className="flex justify-center items-center" {...fadeIn}>
          <motion.p {...fadeIn} className="poppins leading-tight text-center max-w-2xl tablet:text-lg text-blue-900 mb-15 tablet:max-w-7xl">
            At Pamantasan ng Lungsod ng Pasig, we are dedicated to academic excellence, fostering skilled, responsible,
            and innovative graduates who are equipped to tackle challenges and make meaningful contributions both locally 
            and globally.
          </motion.p>
        </motion.span>

        <div className="flex tablet flex-col tablet:flex-row gap-20 items-center justify-center mb-30">
          
          <motion.div className="flex flex-col justify-center items-center" {...fadeIn}>
            <motion.div className="flex mb-5 justify-center items-center bg-blue-900 h-70 w-70" {...fadeIn}>
              <img src={Image1} className="w-50" />
            </motion.div>
            <motion.div className="h-20 w-70" {...fadeIn}>
              <h1 className="bebas text-blue-900 text-3xl text-bold text-center">Academic Excellence</h1>
              <p className="text-center text-blue-900 font-bold leading-tight max-w-3xl">
                We are committed to providing top-tier education, equipping students with the knowledge and skills to excel in their fields.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col justify-center items-center" {...fadeIn}>
            <motion.div className="flex mb-5 justify-center items-center bg-blue-900 h-70 w-70" {...fadeIn}>
              <img src={Image3} className="w-50" />
            </motion.div>
            <motion.div className="h-20 w-70" {...fadeIn}>
              <h1 className="bebas text-blue-900 text-3xl text-bold text-center">Global Competitivenes</h1>
              <p className="text-center text-blue-900 font-bold leading-tight max-w-3xl">
              We prepare students to thrive in a fast-changing world, ensuring they are equipped with the skills to compete and contribute on a global scale.
              </p>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col justify-center items-center" {...fadeIn}>
            <motion.div className="flex mb-5 justify-center items-center bg-blue-900 h-70 w-70" {...fadeIn}>
              <img src={Image2} className="w-50" />
            </motion.div>
            <motion.div className="h-20 w-70" {...fadeIn}>
              <h1 className="bebas text-blue-900 text-3xl text-bold text-center">Sustainable Environment</h1>
              <p className="text-center text-blue-900 font-bold leading-tight max-w-3xl">
              We foster a learning environment that promotes environmental stewardship, economic growth, and social responsibility for a better future.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default Landing;
