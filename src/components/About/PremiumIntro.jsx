import { useNavigate } from "react-router-dom";

export default function PremiumIntro() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F5F5F5] py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-16">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative order-1">
          <img
            src="/intro.webp"
            alt="Luxury Furniture"
            className="w-full h-[280px] sm:h-[380px] md:h-[500px] 
            object-cover rounded-xl shadow-xl 
            md:ml-16 lg:ml-28"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative order-2">

          {/* FLOATING CARD */}
          <div
            className="bg-white p-6 sm:p-8 md:p-10 
            shadow-xl rounded-xl max-w-full sm:max-w-lg 
            mx-auto md:ml-auto md:mr-10 lg:mr-20"
          >
            <p className="text-xs sm:text-sm tracking-[3px] text-gray-400 uppercase">
              Welcome to Vaibhav Furniture
            </p>

            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-snug">
              Innovative Ideas <br /> Stylish Designs
            </h2>

            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
              We craft premium furniture with modern aesthetics and durable
              materials. Our designs bring elegance, comfort, and functionality
              to every space.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-6 bg-black text-white px-6 py-3 text-sm sm:text-base
              rounded-md hover:bg-[#D6AD60] hover:text-black 
              transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>

          {/* STATS */}
          <div
            className="mt-8 sm:mt-10 
            flex flex-row justify-center md:justify-start 
            gap-8 sm:gap-10 
            md:ml-10 lg:ml-20"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                10+
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">
                Years Experience
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                500+
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">
                Projects Completed
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}