import React from "react";

const DinningHero = () => {
  return (
    <section className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://img.interiorcompany.com/interior/webproduct/925638600272226804710.jpg?aio=w-1200;"
        alt="Dining Area"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl text-white">
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#d2b48c] mb-2 sm:mb-3 md:mb-4">
              Elegant Dining
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-tight">
              Luxury Dining Spaces
            </h1>

            <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 max-w-lg leading-6 sm:leading-7">
              Sophisticated dining interiors crafted with timeless elegance,
              comfort, and premium finishes for memorable family moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DinningHero;