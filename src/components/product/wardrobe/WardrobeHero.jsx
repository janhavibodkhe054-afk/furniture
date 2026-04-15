import React from "react";

const WardrobeHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white text-black">

      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh]">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1672137233327-37b0c1049e77?fm=jpg&q=60&w=3000&auto=format&fit=crop"
          alt="Wardrobe Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">

            <div className="text-white max-w-xs sm:max-w-md md:max-w-lg">

              {/* Top Text */}
              <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] text-[#d2b48c] mb-2 sm:mb-3">
                Premium Collection
              </p>

              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-tight">
                Elegant Wardrobes
              </h1>

              {/* ✨ Improved Innovative Text */}
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed">
                Designed to redefine modern living spaces, our wardrobes blend
                intelligent storage with timeless craftsmanship. 
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WardrobeHero;