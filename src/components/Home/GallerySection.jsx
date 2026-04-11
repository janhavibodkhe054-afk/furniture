import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function GallerySection() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    "/aboutg1.webp",
    "/aboutsplit.jpg",
    "/aboutg2.jpg",
    "/aboutg3.jpg",
    "/aboutg4.jpg",
  ];

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-12 bg-[#F5F5F5] overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/commonbg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-5"
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-[#A47551] uppercase tracking-[4px] text-xs mb-3">
            Crafted Interiors
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A]">
            Spaces That Define Luxury
          </h2>

          <div className="mt-4 flex justify-center">
            <div className="w-20 h-[2px] bg-[#D6AD60]"></div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* FEATURE CARD */}
          <div
            onClick={() => setActiveIndex("feature")}
            className="relative col-span-1 sm:col-span-2 lg:col-span-1 h-[260px] md:h-[300px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src="/aboutg5.webp"
              alt=""
              className={`w-full h-full object-cover transition duration-700 
              ${
                activeIndex === "feature"
                  ? "scale-110"
                  : "group-hover:scale-110"
              }`}
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl md:text-2xl font-semibold">
                Luxury Living Spaces
              </h3>

              <p className="text-sm text-gray-200 mt-2 mb-4 max-w-xs">
                Tailored interiors crafted for elegance and comfort.
              </p>

              <button
                onClick={() => navigate("/gallery")}
                className="w-fit px-5 py-2 rounded-full 
                bg-[#A47551] hover:bg-[#D6AD60] 
                transition"
              >
                Explore Collection →
              </button>
            </div>
          </div>

          {/* OTHER IMAGES */}
          {images.map((img, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative h-[260px] md:h-[300px] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={img}
                  alt=""
                  className={`w-full h-full object-cover transition duration-700
                  ${
                    isActive
                      ? "scale-110"
                      : "group-hover:scale-110"
                  }`}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80"></div>

                {/* TEXT */}
                <div className={`absolute inset-0 flex items-end p-5 transition
                  ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <p className="text-white text-sm">
                    Modern Premium Interior
                  </p>
                </div>

                {/* BORDER */}
                <div
                  className={`absolute inset-0 rounded-2xl transition
                  ${
                    isActive
                      ? "border border-[#D6AD60]/60"
                      : "border border-transparent group-hover:border-[#D6AD60]/60"
                  }`}
                ></div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}