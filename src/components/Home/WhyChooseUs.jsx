import { useState } from "react";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const reasons = [
    {
      title: "High Quality Materials",
      desc: "We use only premium quality materials to ensure durability, strength, and long-lasting performance in every product.",
    },
    {
      title: "Modern & Custom Designs",
      desc: "Our designs combine modern trends with customization options to match your exact needs and preferences.",
    },
    {
      title: "Experienced Team",
      desc: "With skilled professionals and years of experience, we deliver precision and excellence in every project.",
    },
    {
      title: "Affordable Pricing",
      desc: "We provide the best quality at competitive prices, ensuring value for money without compromising standards.",
    },
    {
      title: "Timely Delivery",
      desc: "We respect deadlines and ensure that all projects are completed and delivered on time without delays.",
    },
    {
      title: "Customer Satisfaction",
      desc: "Our focus is on building trust and long-term relationships through reliable service and support.",
    },
  ];

  return (
    <>
      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes floatCard {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          .mobile-float {
            animation: floatCard 4s ease-in-out infinite;
          }

          @media (min-width: 768px) {
            .mobile-float {
              animation: none;
            }
          }
        `}
      </style>

      <div
        className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-16 text-center overflow-hidden
        bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/why1.jpg')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto">

          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            Why <span className="text-[#D6AD60]">Choose Us</span>
          </h2>

          {/* GRID */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {reasons.map((item, i) => {
              const isActive = activeIndex === i;

              return (
                <div
                  key={i}
                  onTouchStart={() => setActiveIndex(i)}
                  onTouchEnd={() => setActiveIndex(null)}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`group relative p-6 
                  bg-white/90 backdrop-blur-md
                  rounded-2xl shadow-md
                  transition-all duration-500
                  mobile-float
                  ${isActive ? "shadow-2xl -translate-y-2 bg-[#fff8ef]" : ""}
                  `}
                  style={{
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  {/* GLOW */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-500
                    ${isActive ? "bg-[#D6AD60]/10 opacity-100" : "opacity-0"}`}
                  ></div>

                  <div className="relative z-10">
                    {/* TITLE */}
                    <h3
                      className={`text-lg font-semibold transition duration-300
                      ${isActive ? "text-[#A47551]" : "text-[#1A1A1A]"}`}
                    >
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed ">
                      {item.desc}
                    </p>

                    {/* LINE */}
                    <div
                      className={`mt-4 h-[2px] bg-[#D6AD60] transition-all duration-500
                      ${isActive ? "w-full" : "w-0"}`}
                    ></div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
}