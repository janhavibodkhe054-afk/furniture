import React, { useState } from "react";

export default function ProcessCircleSection() {
  const steps = [
    {
      title: "Consultation",
      description:
        "Our journey begins with a detailed consultation to understand your vision, lifestyle, and design preferences. We carefully analyze every aspect to create a personalized roadmap for your dream interiors.",
    },
    {
      title: "Interior Design",
      description:
        "Our expert designers transform your ideas into elegant and functional concepts with layouts, mood boards, and 3D visualizations. Every detail is thoughtfully curated for harmony and luxury.",
    },
    {
      title: "Production",
      description:
        "All custom elements are manufactured in our own production facility with strict quality control, premium finishing, and timely delivery as per the approved design.",
    },
    {
      title: "Execution",
      description:
        "Our experienced execution team handles on-site implementation with professionalism, ensuring smooth coordination and project completion within the committed timeline.",
    },
    {
      title: "After Sales Service",
      description:
        "Our support continues even after completion with dedicated maintenance, service assistance, and long-term care for your interiors.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="w-full bg-[#f5f5f5] pt-10 md:pt-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-normal text-gray-700 mb-16 md:mb-20 leading-tight">
          Just One Company for <br />
          Interior Design, Production & Implementation
        </h2>

        {/* Top line */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-300 hidden lg:block"></div>

          {/* Circles */}
          <div className="relative flex lg:grid lg:grid-cols-5 gap-6 lg:gap-8 items-start overflow-x-auto lg:overflow-visible pb-40 px-10 scrollbar-hide">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="flex flex-col items-center min-w-[170px] sm:min-w-[190px] lg:min-w-0"
                >
                  {/* Vertical line */}
                  <div className="w-[1px] h-16 bg-gray-300 hidden lg:block"></div>

                  {/* Circle */}
                  <div
                    className={`w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full border border-gray-300 flex items-center justify-center text-center px-4 sm:px-6 cursor-pointer transition-all duration-500
                      ${
                        isActive
                          ? "bg-[#7b4a84] border-[#7b4a84]"
                          : "bg-white hover:bg-[#7b4a84] hover:border-[#7b4a84]"
                      }`}
                  >
                    <h3
                      className={`text-lg sm:text-xl font-medium transition duration-500
                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-600 hover:text-white"
                        }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Description below active circle */}
                  {isActive && (
                    <>
                      <div className="text-[#7b4a84] text-3xl sm:text-4xl mt-2">
                        ⌄
                      </div>

                      <div className="mt-4 bg-white rounded-2xl shadow-xl p-5 sm:p-6 w-[260px] sm:w-72 min-h-[200px] sm:min-h-[220px]">
                        <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7 text-center">
                          {step.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}