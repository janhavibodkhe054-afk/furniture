import { FaFileAlt, FaDraftingCompass, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AboutSplitSection() {
  const navigate = useNavigate();


  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>
        {`
          /* FLOAT + ZOOM ANIMATION */
          @keyframes floatZoom {
            0%, 100% { 
              transform: translateY(0px) scale(1.03); 
            }
            50% { 
              transform: translateY(-12px) scale(1.08); 
            }
          }

          .animate-float {
            animation: floatZoom 4s ease-in-out infinite;
          }

          /* SLIDE RIGHT */
          @keyframes slideRight {
            0% {
              opacity: 0;
              transform: translateX(30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slide-right {
            animation: slideRight 0.9s ease forwards;
          }

          /* MOBILE ALSO ANIMATE */
          @media (max-width: 768px) {
            .animate-slide-right {
              animation: slideRight 0.8s ease forwards;
            }
          }
        `}
      </style>

      <section className="bg-[#F5F5F5] py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10">

        {/* ===== TOP SECTION ===== */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex flex-col items-center md:block md:ml-20">

            {/* BACK SHAPE */}
            <div className="absolute -top-6 -left-6 w-[85%] h-[85%] bg-[#A47551]/20 rounded-xl ml-20 md:ml-0"></div>

            {/* IMAGE */}
            <img
              src="/aboutsplit.jpg"
              alt=""
              className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px] 
              rounded-xl shadow-2xl border-4 border-white object-cover z-10
              animate-float transition-all duration-700 
              hover:scale-110 hover:-translate-y-2"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center md:text-left animate-slide-right">

            <p className="text-[#D6AD60] text-xs tracking-[3px] mb-3 uppercase font-medium">
              About Us
            </p>

            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-tight">
              Premium furniture crafted <br className="hidden sm:block" />
              for modern living spaces
            </h2>

            <div className="w-14 h-[3px] bg-[#A47551] mt-4 mx-auto md:mx-0"></div>

            <p className="text-gray-600 mt-5 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0 text-justify sm:text-left">
              We design and manufacture high-quality furniture that blends
              durability with modern aesthetics. From custom interiors to elegant
              home solutions, our focus is on creating spaces that reflect your
              lifestyle and comfort.
            </p>

            <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0 text-justify sm:text-left">
              Every piece is crafted with premium materials, ensuring long-lasting
              quality, elegance, and a luxurious living experience.
            </p>

            {/* BUTTON */}
            <button
            onClick={() => navigate("/about")}
            className="mt-6 sm:mt-8 px-6 sm:px-7 py-2.5 sm:py-3 
            bg-[#3E2C23] hover:bg-[#2c1f19] text-white 
            rounded-full text-sm font-medium transition-all duration-300 
            shadow-md hover:shadow-xl hover:scale-105">
              Explore More →
            </button>
          </div>
        </div>

        {/* ===== FEATURES ===== */}
        <div className="max-w-6xl mx-auto mt-14 sm:mt-16 md:mt-20 px-2 sm:px-4">

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">

            {/* ITEM 1 */}
            <div className="flex items-start gap-4 group p-4 sm:p-5 rounded-xl bg-white 
            shadow-sm hover:shadow-xl transition-all duration-500 
            hover:-translate-y-2 hover:scale-105">

              <div className="p-3 rounded-full bg-gray-100 
              shadow-md sm:shadow-lg 
              group-hover:bg-[#F5E6D3] transition-all duration-500 
              group-hover:rotate-[360deg]">
                <FaFileAlt className="text-base sm:text-xl text-gray-700 group-hover:text-[#A47551] transition" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Reasonable Prices
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                  Affordable pricing with high-quality craftsmanship for every home.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-start gap-4 group p-4 sm:p-5 rounded-xl bg-white 
            shadow-sm hover:shadow-xl transition-all duration-500 
            hover:-translate-y-2 hover:scale-105">

              <div className="p-3 rounded-full bg-gray-100 
              shadow-md sm:shadow-lg 
              group-hover:bg-[#F5E6D3] transition-all duration-500 
              group-hover:rotate-[360deg]">
                <FaDraftingCompass className="text-base sm:text-xl text-gray-700 group-hover:text-[#A47551] transition" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Exclusive Design
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                  Unique designs crafted with creativity and expert precision.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-start gap-4 group p-4 sm:p-5 rounded-xl bg-white 
            shadow-sm hover:shadow-xl transition-all duration-500 
            hover:-translate-y-2 hover:scale-105">

              <div className="p-3 rounded-full bg-gray-100 
              shadow-md sm:shadow-lg 
              group-hover:bg-[#F5E6D3] transition-all duration-500 
              group-hover:rotate-[360deg]">
                <FaUserTie className="text-base sm:text-xl text-gray-700 group-hover:text-[#A47551] transition" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Professional Team
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                  Skilled professionals delivering quality and precision work.
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}