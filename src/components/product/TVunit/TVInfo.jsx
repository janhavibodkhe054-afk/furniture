import React from "react";
import { useNavigate } from "react-router-dom";

const TVInfo = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Label */}
        <p className="text-[#8b5e3c] uppercase tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.25em] text-[11px] sm:text-xs md:text-sm font-semibold mb-3 sm:mb-4">
          TV Unit Solutions
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-black leading-snug md:leading-tight mb-6 sm:mb-8">
          Premium TV Units Designed
          <br className="hidden sm:block" />
          <span className="block sm:inline">
            {" "}For Elegant Living Spaces
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 font-light tracking-normal sm:tracking-wide text-justify">
          Our TV unit designs are thoughtfully crafted to enhance the beauty,
          functionality, and elegance of your living room interiors. Every unit
          is custom-designed according to your wall dimensions, storage needs,
          and interior style preferences. From sleek wall-mounted units to
          luxurious floor-standing entertainment consoles, we create designs
          that blend modern aesthetics with practical utility. Premium wooden
          textures, matte laminates, glass panels, and designer lighting
          elements ensure a sophisticated and timeless look. The internal
          layout is carefully planned with storage drawers, display shelves,
          concealed cable management, and decorative sections for accessories.
          Our focus remains on maintaining a clean and clutter-free appearance
          while maximizing storage and visual appeal. Each TV unit is
          manufactured with precision craftsmanship and professionally
          installed to ensure flawless finishing and perfect alignment with
          your interiors. With premium materials and elegant detailing, our TV
          units seamlessly complement modern living spaces, creating a refined
          and luxurious focal point for your home.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/contact")}
          className="mt-8 sm:mt-10 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#8b5e3c] hover:bg-[#6f4b31] transition duration-300 text-white rounded-full font-medium shadow-lg text-sm sm:text-base md:text-lg w-full sm:w-auto"
        >
          Enquire Now
        </button>
      </div>
    </section>
  );
};

export default TVInfo;