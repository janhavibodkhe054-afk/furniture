import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Modern Luxury",
    img: "/spazio1.jpg",
    desc: "End-to-end modern luxury interiors for Baner, Pune. Seamless execution with timeless sophistication.",
  },
  {
    title: "Traditional Warmth",
    img: "/spazio2.webp",
    desc: "Rich textures and cultural elegance blended into modern living spaces with warmth and heritage.",
  },
  {
    title: "Minimal Contemporary",
    img: "/spazio3.jpg",
    desc: "Clean, minimal, and functional designs crafted for a clutter-free and modern lifestyle.",
  },
  {
    title: "Luxury Bedrooms",
    img: "/spazio4.jpg",
    desc: "Elegant bedroom spaces designed for comfort, luxury, and peaceful living.",
  },
  {
    title: "Modular Kitchens",
    img: "/spazio5.jpg",
    desc: "Smart kitchen layouts with premium finishes and highly functional storage solutions.",
  },
  {
    title: "Office Interiors",
    img: "/spazio6.jpg",
    desc: "Productive and premium office spaces tailored for modern professionals.",
  },
];

export default function SpazioSection() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <style>
        {`
          .group:hover .flip-logo {
            transform: rotateY(180deg);
          }
        `}
      </style>

      <section className="relative pt-20 md:pt-24 pb-24 text-white overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <img
            src="/spaziomain.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-center">

          {/* HEADER */}
          <p className="text-[#A47551] tracking-[2px] text-xs mb-3">
            HOMES FOR EVERY STYLE, PUNE
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-3">
  Where Design Meets Timeless Living
</h1>

          <p className="text-gray-300 mb-6 text-sm">
            No catalog homes. Pure Personalized Designs, Pune
          </p>

          <button
            onClick={() => navigate("/services")}
            className="bg-[#A47551] hover:bg-[#D6AD60] 
            px-6 py-3 rounded-md font-semibold 
            shadow-lg hover:scale-105 transition-all duration-300 mb-16"
          >
            Explore Services
          </button>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {data.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className="group relative w-full max-w-[340px] mx-auto cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">

                    {/* IMAGE */}
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-[300px] sm:h-[360px] md:h-[460px]
                      object-cover transition-all duration-700
                      group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className={`absolute inset-0 bg-black/40 transition duration-500 
                      ${isActive ? "bg-black/60" : "group-hover:bg-black/60"}`} />

                    {/* TITLE */}
                    <div className={`absolute bottom-0 w-full bg-white text-black text-center py-4 z-10 transition
                      ${isActive ? "opacity-0" : "group-hover:opacity-0"}`}>
                      <h3 className="font-semibold text-sm sm:text-base">
                        {item.title}
                      </h3>
                    </div>

                    {/* PANEL */}
                    <div
                      className={`absolute bottom-0 left-0 w-full bg-white text-black px-5 py-5 z-20
                      transition-all duration-500 ease-in-out
                      ${isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      }`}
                    >
                      {/* LOGO */}
                      <div className="flex justify-center mb-4">
                        <div
                          className="flip-logo w-14 h-14 rounded-full 
                          bg-gradient-to-br from-[#A47551] to-[#6B4F3A]
                          flex items-center justify-center
                          shadow-lg text-white text-xl font-bold
                          transition-all duration-700"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          ◆
                        </div>
                      </div>

                      <h3 className="font-semibold mb-2 text-center">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>
    </>
  );
}