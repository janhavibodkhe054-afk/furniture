import React from "react";

const DressingHero = () => {
  return (
    <section
      className="
        relative w-full 
        h-[45vh] 
        sm:h-[55vh] 
        md:h-[65vh] 
        lg:h-[75vh] 
        overflow-hidden
      "
    >
      {/* Background Image */}
      <img
        src="https://media.designcafe.com/wp-content/uploads/2020/09/30174952/sleek-dressing-table-design.jpg"
        alt="Dressing Unit"
        className="w-full h-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-xs sm:max-w-md md:max-w-xl text-white">
            {/* Top Label */}
            <p
              className="
                text-[10px]
                sm:text-xs
                md:text-sm
                lg:text-base
                uppercase
                tracking-[0.25em]
                text-[#d2b48c]
                mb-2 sm:mb-3 md:mb-4
              "
            >
              Elegant Collection
            </p>

            {/* Heading */}
            <h1
              className="
                text-2xl
                sm:text-3xl
                md:text-5xl
                lg:text-6xl
                font-serif
                font-medium
                leading-tight
              "
            >
              Luxury Dressing Units
            </h1>

            {/* Description */}
            <p
              className="
                mt-3
                sm:mt-4
                text-xs
                sm:text-sm
                md:text-base
                lg:text-lg
                text-white/90
                leading-6
                sm:leading-7
                md:leading-8
                max-w-full
                sm:max-w-md
                md:max-w-xl
              "
            >
              Thoughtfully designed dressing spaces with premium storage,
              mirrors, and elegant finishes for modern interiors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressingHero;