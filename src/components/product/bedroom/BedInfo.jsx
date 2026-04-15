import React from "react";
import { useNavigate } from "react-router-dom";

const BedInfo = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Top Label */}
        <p className="text-[#8b5e3c] uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[11px] sm:text-xs md:text-sm font-semibold mb-3 sm:mb-4">
          Bed Collection
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-black leading-snug md:leading-tight mb-6 sm:mb-8">
          Premium Beds Designed
          <br className="hidden sm:block" />
          <span className="block sm:inline"> For Ultimate Comfort</span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 font-light tracking-normal sm:tracking-wide text-justify">
          Our premium bed designs are thoughtfully crafted to bring together
          luxury, comfort, and modern aesthetics for contemporary bedrooms.
          Every bed is customized according to your room dimensions, preferred
          style, and storage requirements. From elegant platform beds to modern
          hydraulic storage beds and upholstered headboards, we create designs
          that enhance both beauty and practicality. Premium wood finishes,
          laminate textures, cushioned back panels, and durable fittings ensure
          long-lasting elegance. Each design is developed with comfort-focused
          ergonomics, spacious dimensions, and sophisticated detailing that
          complements modern interior spaces. Our beds are manufactured with
          precision and installed professionally to deliver flawless finishing,
          durability, and timeless appeal. With a perfect blend of design and
          functionality, our bed solutions transform your bedroom into a refined
          and luxurious personal space.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/contact")}
          className="mt-6 sm:mt-8 md:mt-10 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#8b5e3c] hover:bg-[#6f4b31] transition text-white rounded-full font-medium shadow-lg text-sm sm:text-base"
        >
          Enquire Now
        </button>
      </div>
    </section>
  );
};

export default BedInfo;