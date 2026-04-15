import React from "react";
import { useNavigate } from "react-router-dom";

const DressingInfo = () => {
  const navigate = useNavigate();

  return (
    <section
      className="
       bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Label */}
        <p
          className="
            text-[#8b5e3c]
            uppercase
            tracking-[0.22em]
            text-[11px] sm:text-xs md:text-sm
            font-semibold
            mb-3 sm:mb-4
          "
        >
          Dressing Unit Solutions
        </p>

        {/* Heading */}
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-black leading-snug md:leading-tight mb-6 sm:mb-8
          "
        >
          Elegant Dressing Units
          <br />
          Crafted For Modern Living
        </h2>

        {/* Info Paragraph */}
        <p
          className="
            text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 font-light tracking-normal sm:tracking-wide text-justify
          "
        >
          Our dressing units are thoughtfully designed to bring together style,
          comfort, and smart organization for modern interiors. Every unit is
          customized according to your room layout, mirror preferences, storage
          requirements, and overall bedroom aesthetics. From sleek wall-mounted
          dressing consoles to full-height mirror units with drawers and shelves,
          we create solutions that enhance both elegance and functionality.
          Premium laminates, wooden finishes, tinted mirrors, and soft-close
          fittings ensure a refined and long-lasting look. Dedicated sections for
          cosmetics, accessories, jewelry, and daily essentials help maintain a
          clean and organized space. Every design is crafted with attention to
          detail so that it complements your wardrobe and bedroom interiors
          beautifully. Our focus remains on maximizing utility while maintaining
          a sophisticated and luxurious appearance. With precise manufacturing
          and flawless installation, each dressing unit adds charm, convenience,
          and timeless elegance to your living space.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/contact")}
          className="
            mt-8 sm:mt-10
            px-6 sm:px-8 md:px-10
            py-3 sm:py-4
            bg-[#8b5e3c]
            hover:bg-[#6f4b31]
            transition duration-300
            text-white
            rounded-full
            font-medium
            shadow-lg
            text-sm sm:text-base
          "
        >
          Enquire Now
        </button>
      </div>
    </section>
  );
};

export default DressingInfo;