import React, { useState } from "react";

export default function CircleStatsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const stats = [
    {
      title: "Since",
      subtitle: "2004",
    },
    {
      title: "Premium",
      subtitle: "Materials",
    },
    {
      title: "10 Years",
      subtitle: "Warranty",
    },
    {
      title: "Completion",
      subtitle: "40 Working Days",
    },
    {
      title: "Projects",
      subtitle: "300 Per Month",
    },
    {
      title: "Lifelong",
      subtitle: "Service Support",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-4xl font-light tracking-wide text-black mb-16 uppercase">
          Professional Home Interior Design Company
        </h2>

        {/* Circles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-18 place-items-center">
          {stats.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`w-38 h-38 rounded-full border flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-500
                  ${
                    isActive
                      ? "bg-[#7b4a84] border-[#7b4a84]"
                      : "bg-white border-gray-300"
                  }`}
              >
                <h3
                  className={`text-xl font-semibold transition duration-500
                    ${
                      isActive
                        ? "text-white"
                        : "text-[#7b4a84]"
                    }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-2 text-lg transition duration-500
                    ${
                      isActive
                        ? "text-white"
                        : "text-black"
                    }`}
                >
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}