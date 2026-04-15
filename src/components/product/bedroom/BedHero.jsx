import React from "react";

const BedHero = () => {
  return (
    <section className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
        alt="Luxury Bed Design"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl text-white">
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#c19a6b] mb-2 sm:mb-3 md:mb-4">
              Elegant Bedroom Collection
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold leading-tight">
              Premium Bed Designs
            </h1>

            <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 leading-6 sm:leading-7 max-w-lg">
              Crafted for comfort, luxury, and timeless elegance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BedHero;