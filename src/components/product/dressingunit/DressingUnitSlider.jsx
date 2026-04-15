import React, { useState } from "react";

const dressingSections = [
  {
    title: "MIRROR",
    hoverText: "Elegant Mirror Dressing Unit",
    image:
      "https://conceptionsindia.com/storage/2025/12/dressing-unit-design-bengalore.jpg",
    desktopSpan: "md:col-span-2 md:row-span-1",
  },
  {
    title: "STORAGE",
    hoverText: "Smart Drawer Storage",
    image:
      "https://cpimg.tistatic.com/8200388/b/1/modular-dressing-unit.jpg",
    desktopSpan: "md:col-span-1 md:row-span-2",
  },
  {
    title: "VANITY",
    hoverText: "Luxury Vanity Setup",
    image:
      "https://westonebathrooms.com/site/wp-content/uploads/2023/01/devon-devon-vanity-units-zelda-2019-rgb-300-dpi-1.gif",
    desktopSpan: "md:col-span-1",
  },
  {
    title: "MODULAR",
    hoverText: "Modern Modular Dressing",
    image:
      "https://cdn.swadeshonline.com/v2/patient-paper-41f385/swad-p/wrkr/products/pictures/item/free/450x0/s2TIAPHuM-Fidora-Dressing-Table-With-Stool-Color-Mahogany.jpeg",
    desktopSpan: "md:col-span-1",
  },
];

const DressingUnitSlider = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-3 md:gap-4
            auto-rows-[220px]
            sm:auto-rows-[250px]
            md:auto-rows-[260px]
          "
        >
          {dressingSections.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative overflow-hidden
                rounded-xl sm:rounded-2xl
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
                <h2
                  className="
                    text-lg
                    sm:text-xl
                    md:text-3xl
                    lg:text-4xl
                    font-bold
                    tracking-wide
                    text-white
                    drop-shadow-lg
                    text-center
                    transition duration-500
                  "
                >
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

export default DressingUnitSlider;