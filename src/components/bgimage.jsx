import background from "../assets/bgimage.webp"

function BgImage() {
    return (
        <div class="relative w-full h-[500px]">
        <img src={background} alt="Background" class="w-full h-full object-cover brightness-35"/>
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 class="pb-7 text-7xl font-bold">University of Pasig</h1>
            <p class="text-white text-lg font-semibold text-center leading-tight max-w-3xl">
            Pamantasan ng Lungsod ng Pasig is a top institution committed to academic excellence, ethical leadership, and community engagement. It equips students with skills and knowledge to thrive in both global and local industries, fostering responsible and competent graduates who drive positive change in society.
            </p>
            <div className="grid grid-cols-2 gap-5 pt-5">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md font-bold hover:bg-blue-700 w-40">
              Learn more
            </button>
            <button class="border-2 border-blue-400 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition">
               Login
            </button>
            </div>
        </div>
    </div>
    );
}

  export default BgImage;
  