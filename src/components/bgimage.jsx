import { motion } from "framer-motion";
import background from "../assets/bgimage.webp";



function BgImage() {
 
  return (
    <div className="relative w-full h-[500px]">
      <img src={background} alt="Background" className="w-full h-full object-cover brightness-35" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50, }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute inset-0 flex flex-col justify-center items-center text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl font-bold bebas mb-2 tracking-wider tablet:text-7xl pc:text-9xl pc:mb-[-10px]"
        >
          University of Pasig
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="open-sans text-white text-lg font-semibold text-center leading-tight max-w-3xl "
        >
          Pamantasan ng Lungsod ng Pasig is a top institution committed to academic excellence, ethical leadership, and community engagement. It equips students with skills and knowledge to thrive in both global and local industries, fostering responsible and competent graduates who drive positive change in society.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-2 gap-5 pt-5"
        >
          <button className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow-md font-bold hover:bg-blue-700 w-40 transition-all duration-300">
            Learn more
          </button>
          <button className="border-2 border-blue-400 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"  >
            Login
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BgImage;
