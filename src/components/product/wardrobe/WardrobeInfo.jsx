import React from "react";
import { useNavigate } from "react-router-dom";

const WardrobeInfo = () => {
const navigate = useNavigate();

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#8b5e3c] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
          Wardrobe Solutions
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-black leading-snug md:leading-tight mb-6 sm:mb-8">
          Premium Wardrobes Designed
          <br className="hidden sm:block" />
          <span className="block sm:inline"> For Modern Spaces</span>
        </h2>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 font-light tracking-normal sm:tracking-wide text-justify">
          Our wardrobe designs are thoughtfully created to combine elegance,
          durability, and intelligent storage for contemporary interiors.
          Every wardrobe is custom-built according to your room dimensions,
          storage preferences, and overall interior theme. From sliding
          wardrobes to hinged door designs and walk-in closets, we offer
          solutions that elevate both style and functionality. Premium
          laminates, wooden textures, glass finishes, and modern fittings
          ensure a luxurious and long-lasting appearance. The internal layout
          is planned with dedicated shelves, drawers, hanging spaces, loft
          storage, and accessory sections. Our focus remains on maximizing
          storage efficiency while preserving a clean, minimal, and
          sophisticated aesthetic. Each wardrobe is crafted with precision
          manufacturing and installed professionally to ensure flawless
          finishing and perfect alignment. With timeless design language and
          premium materials, our wardrobes seamlessly blend with modern bedroom
          interiors, creating a perfect balance of practicality and luxury.
        </p>

        <button
        onClick={() => navigate("/contact")}
        className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 bg-[#8b5e3c] hover:bg-[#6f4b31] transition text-white rounded-full font-medium shadow-lg text-sm sm:text-base w-full sm:w-auto">
          Enquire Now
        </button>
      </div>
    </section>
  );
};

export default WardrobeInfo;