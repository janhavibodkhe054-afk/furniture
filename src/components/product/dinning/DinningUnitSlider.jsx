import React, { useState } from "react";

const diningSections = [
  {
    title: "DINING SET",
    hoverText: "Premium 6 Seater Dining Set",
    image:
      "https://ik.imagekit.io/2xkwa8s1i/img/npl_raw_images/WDINEKOPRS6COPCBSWR2/WDINEKOPRS6COPCBSWR2-1.jpg?tr=w-3840",
    desktopSpan: "md:col-span-2 md:row-span-1",
  },
  {
    title: "CROCKERY",
    hoverText: "Elegant Crockery Storage Unit",
    image:
      "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/1-2025-1736068988-NDPD1/jfm-1736069001-9OxTK/ssd-1736166168-LIdfH/drssd-1742806450-NQ9fa.jpg",
    desktopSpan: "md:col-span-1 md:row-span-2",
  },
  {
    title: "LIGHTING",
    hoverText: "Luxury Pendant Lighting",
    image:
      "https://theattic.co.in/wp-content/uploads/2026/01/KL-2601-1-600x600.jpg",
    desktopSpan: "md:col-span-1",
  },
  {
    title: "DECOR",
    hoverText: "Modern Dining Wall Decor",
    image:
      "https://thefurniturepark.com/wp-content/uploads/2025/12/image-3082-453.jpg",
    desktopSpan: "md:col-span-1",
  },
];

const DinningUnitSlider = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px] sm:auto-rows-[250px] md:auto-rows-[260px]">
          {diningSections.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative overflow-hidden rounded-xl sm:rounded-2xl 
                group cursor-pointer
                ${item.desktopSpan}
                ${index === 1 ? "md:row-span-2 md:h-full" : ""}
              `}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition duration-500"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4">
                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-wide text-white drop-shadow-lg text-center transition duration-500">
                  {hovered === index ? item.hoverText : item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DinningUnitSlider;