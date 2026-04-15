import React, { useState } from "react";

const tvSections = [
  {
    title: "WALL PANEL",
    hoverText: "Modern Wooden Wall Panels",
    image:
      "https://tiimg.tistatic.com/fp/1/009/266/wall-tv-unit--281.jpg",
    desktopSpan: "lg:col-span-2 lg:row-span-1",
  },
  {
    title: "FLOATING",
    hoverText: "Minimal Floating TV Unit",
    image:
      "https://houzlook.com/assets/images/upload/Unique%20Collection/TV%20Unit/View_06-20191128122240576.jpg",
    desktopSpan: "lg:col-span-1 lg:row-span-2",
  },
  {
    title: "STORAGE",
    hoverText: "Smart Drawer Storage Unit",
    image:
      "https://s.alicdn.com/@sc04/kf/H117954a818ce47edba15e3fe8e3dbc0cz/Modern-TV-Console-Luxury-Solid-Wood-TV-Cabinet-Contemporary-TV-Unit-with-Storage-Designer-Living-Room-Furniture-Decor-Set.png",
    desktopSpan: "lg:col-span-1",
  },
  {
    title: "DISPLAY",
    hoverText: "Elegant Decor Display Shelves",
    image:
      "https://images.homify.com/c_fill,f_auto,h_500,q_auto,w_1280/v1555488573/p/photo/image/3016081/living_area_1.jpg",
    desktopSpan: "lg:col-span-1",
  },
];

export default function TVUnitSlider() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {tvSections.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative overflow-hidden rounded-xl sm:rounded-2xl group
                h-[220px] sm:h-[250px] md:h-[280px]
                ${index === 1 ? "lg:h-full" : "lg:h-[320px]"}
                ${item.desktopSpan}
              `}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition duration-500"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-white drop-shadow-lg text-center transition duration-500">
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