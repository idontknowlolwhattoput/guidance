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
        className="phone:text-center  text-5xl font-black tracking-wide bebas mb-2  tablet:text-5xl pc:text-8xl pc:max-w-9xl 
        pc:mb-[px] text-transparent bg-gradient-to-r from-green-600 via-yellow-400 to-yellow-500 
        bg-clip-text drop-shadow-[0_5px_10px_rgba(34,197,94,0.7)] relative">
        <span className="absolute inset-0 animate-[shine_3s_linear_infinite] 
        bg-gradient-to-r from-transparent via-white/60 to-transparent 
        bg-clip-text text-transparent">
        PAMANTASAN NG LUNGSOD NG PASIG
        </span>
        PAMANTASAN NG LUNGSOD NG PASIG
      </motion.h1>

      <motion.p
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -30 }}
       transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
       viewport={{ once: false, amount: 0.3 }}
       className="open-sans text-white text-lg font-semibold text-center leading-tight max-w-3xl 
             tracking-wide drop-shadow-[0_3px_6px_rgba(255,223,0,0.5)]">
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
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-md font-bold hover:bg-green-500 w-40 transition-all duration-300">
            Learn more
          </button>
          <button className="border-2 border-green-500 text-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"  >
            Login
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BgImage;
