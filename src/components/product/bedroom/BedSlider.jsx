import React, { useState } from "react";

const bedSections = [
  {
    title: "KING SIZE",
    hoverText: "Luxury King Size Beds",
    image:
      "https://media.designcafe.com/wp-content/uploads/2023/04/04131540/wall-mounted-folding-bed-cum-sofa.jpg",
    desktopSpan: "md:col-span-2",
    height: "h-[220px] sm:h-[260px] md:h-[340px]",
  },
  {
    title: "STORAGE",
    hoverText: "Hydraulic Storage Beds",
    image:
      "https://st.hzcdn.com/simgs/pictures/bedrooms/leather-bedroom-la-vie-modern-furniture-img~90e1360108177ec8_14-0732-1-f7e26e9.jpg",
    desktopSpan: "md:row-span-2",
    height: "h-[220px] sm:h-[260px] md:h-full",
  },
  {
    title: "UPHOLSTERED",
    hoverText: "Elegant Upholstered Beds",
    image:
      "https://dlifeinteriors.com/wp-content/uploads/2022/03/Wainscoting-e1646648263888.jpg",
    desktopSpan: "",
    height: "h-[200px] sm:h-[220px] md:h-[240px]",
  },
  {
    title: "MODERN",
    hoverText: "Contemporary Bed Designs",
    image:
      "https://files.ekmcdn.com/ronzfurniture/images/milano-grey-and-slatted-rustic-oak-effect-overbed-storage-unit-with-wardrobes-12631-p.jpg",
    desktopSpan: "",
    height: "h-[200px] sm:h-[220px] md:h-[240px]",
  },
];

export default function BedSlider() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {bedSections.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer ${item.desktopSpan} ${item.height}`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition duration-500"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-wide text-white drop-shadow-lg text-center transition duration-500 leading-tight">
                  {hovered === index ? item.hoverText : item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}