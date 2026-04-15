import React from "react";

const TVHero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Responsive Height */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[72vh] xl:h-[78vh]">
        
        {/* Background Image */}
        <img
          src="https://www.thekarighars.com/wp-content/uploads/2025/12/TV-Unit-Ideas.png"
          alt="TV Unit Hero"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="text-white max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
              
              {/* Top Text */}
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#c49a6c] mb-2 sm:mb-3">
                Modern Entertainment Space
              </p>

              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-tight">
                Elegant TV Units
              </h1>

              {/* Description */}
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-200 leading-6 sm:leading-7 md:leading-8 max-w-lg">
                Premium TV unit designs crafted for modern living rooms with
                stylish storage and elegant finishes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVHero;