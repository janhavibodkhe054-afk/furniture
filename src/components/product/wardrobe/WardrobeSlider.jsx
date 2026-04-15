import React, { useState } from "react";

const wardrobeSections = [
  {
    title: "SLIDING",
    hoverText: "Modern Sliding Wardrobes",
    image:
      "https://media.istockphoto.com/id/2157081744/photo/modern-built-in-wardrobe-closet-with-personal-accessories.jpg?s=612x612&w=0&k=20&c=fC5Z3S3cOmudbTzvc8fvK9ph18LlNBOUYnFc70QuyBE=",
    desktopSpan: "md:col-span-2 md:row-span-1",
    height: "h-[240px] sm:h-[280px] md:h-[340px]",
  },
  {
    title: "WALK-IN",
    hoverText: "Luxury Walk-in Closets",
    image:
      "https://kitchendecor.in/wp-content/uploads/2024/05/glass-wardrobe-pune-1.jpeg",
    desktopSpan: "md:col-span-1 md:row-span-2",
    height: "h-[240px] sm:h-[280px] md:h-full",
  },
  {
    title: "HINGED",
    hoverText: "Elegant Hinged Wardrobes",
    image:
      "https://i.pinimg.com/474x/88/81/6f/88816f0a85bd9154085ae90f62e0ea3b.jpg",
    desktopSpan: "md:col-span-1",
    height: "h-[220px] sm:h-[240px] md:h-[260px]",
  },
  {
    title: "MODULAR",
    hoverText: "Custom Modular Storage",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZy9dBMhNFryfEn-Hol7JS4JVpBhwFzFtPvA&s",
    desktopSpan: "md:col-span-1",
    height: "h-[220px] sm:h-[240px] md:h-[260px]",
  },
];

export default function WardrobeSlider() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2">
          {wardrobeSections.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl group ${item.desktopSpan} ${item.height}`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition duration-500"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white drop-shadow-lg text-center transition duration-500">
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