import React from "react";
import { useNavigate } from "react-router-dom";

const DinningInfo = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Top Label */}
        <p className="text-[#8b5e3c] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[11px] sm:text-xs md:text-sm font-semibold mb-3 sm:mb-4">
          Dining Space Solutions
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-black leading-snug md:leading-tight mb-6 sm:mb-8">
          Elegant Dining Interiors
          <br className="hidden sm:block" />
          <span className="block sm:inline">
            {" "}Designed For Timeless Gatherings
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 font-light tracking-normal sm:tracking-wide text-justify">
          Our dining spaces are thoughtfully designed to combine elegance,
          comfort, and functionality for modern homes. Every dining area is
          customized according to your room dimensions, seating preferences,
          family needs, and interior theme to create a warm and inviting
          atmosphere. From luxurious dining tables and premium chairs to
          designer wall panels, crockery units, and ambient lighting, every
          detail is curated to elevate your dining experience. Premium wooden
          finishes, sophisticated textures, and refined craftsmanship ensure a
          timeless and luxurious appearance. Our focus remains on creating a
          space that not only enhances everyday dining but also becomes a
          perfect setting for family gatherings and special occasions. With
          flawless design execution and premium materials, each dining area
          reflects elegance, comfort, and lasting beauty while seamlessly
          blending with your overall home interiors.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/contact")}
          className="mt-6 sm:mt-8 md:mt-10 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#8b5e3c] hover:bg-[#6f4b31] transition duration-300 text-white rounded-full font-medium shadow-lg text-sm sm:text-base"
        >
          Enquire Now
        </button>
      </div>
    </section>
  );
};

export default DinningInfo;