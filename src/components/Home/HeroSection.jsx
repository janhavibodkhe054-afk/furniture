import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "/hero1.jpg",
    title: "Timeless Living Spaces",
    desc: "Crafted elegance that transforms everyday living into a refined and luxurious experience. Designed with premium aesthetics, comfort, and timeless sophistication in every corner.",
  },
  {
    image: "/hero2.jpg",
    title: "Luxury Bedroom Interiors",
    desc: "Designed for ultimate comfort and styled with modern sophistication. A perfect balance of warmth, elegance, and peaceful living for your personal retreat.",
  },
  {
    image: "/hero3.avif",
    title: "Modern Kitchen Concepts",
    desc: "Smart layouts blended with premium finishes and timeless appeal. Functional designs that combine style, convenience, and modern innovation seamlessly.",
  },
  {
    image: "/hero4.jpg",
    title: "Executive Workspaces",
    desc: "Minimal, functional, and thoughtfully designed to elevate productivity. A sophisticated environment that inspires focus, creativity, and professional excellence.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1200ms]
          ${index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"}`}
        >
          {/* IMAGE */}
          <img
            src={slide.image}
            alt=""
            className={`w-full h-full object-cover transition duration-[6000ms] 
            ${index === current ? "scale-100" : "scale-110"}`}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/30 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center px-6 md:px-16">

            <div className="max-w-3xl text-white">

              {/* TAG */}
              <p className={`text-[#D6AD60] uppercase tracking-[3px] text-xs mb-3
              ${index === current ? "animate-fadeUp" : "opacity-0"}`}>
                Crafted Premium Furniture
              </p>

              {/* TITLE */}
              <h1 className={`text-3xl sm:text-5xl md:text-6xl font-bold leading-tight
              ${index === current ? "animate-heading" : "opacity-0"}`}>
                {slide.title}
              </h1>

              {/* DESC */}
              <p className={`mt-4 text-sm sm:text-base md:text-lg text-gray-white max-w-xl
              ${index === current ? "animate-fadeDelay" : "opacity-0"}`}>
                {slide.desc}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => navigate("/contact")}
                className={`mt-6 px-7 py-3 bg-[#A47551] hover:bg-[#D6AD60] 
                text-white rounded-full font-medium tracking-wide 
                shadow-lg hover:scale-105 transition
                ${index === current ? "animate-fadeDelay2" : "opacity-0"}`}
              >
                Get in touch →
              </button>

            </div>
          </div>
        </div>
      ))}

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition 
            ${i === current ? "bg-[#D6AD60] scale-110" : "bg-white/40"}`}
          ></div>
        ))}
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes headingReveal {
          from { opacity: 0; letter-spacing: 8px; }
          to { opacity: 1; letter-spacing: 0px; }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        .animate-heading {
          animation: headingReveal 1s ease forwards;
        }

        .animate-fadeDelay {
          animation: fadeUp 1s ease forwards;
          animation-delay: 0.3s;
        }

        .animate-fadeDelay2 {
          animation: fadeUp 1s ease forwards;
          animation-delay: 0.6s;
        }
      `}</style>

    </section>
  );
}