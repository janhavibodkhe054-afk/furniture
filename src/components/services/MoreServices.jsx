import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function MoreServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      type: "image",
      img: "/mores1.jpg",
    },
    {
      type: "text",
      title: "Delivery & Installation",
      desc: "Enjoy hassle-free delivery and professional installation to ensure your furniture is perfectly set up.",
    },
    {
      type: "image",
      img: "/mores2.jpg",
    },
    {
      type: "text",
      title: "Furniture Design",
      desc: "Collaborate with our experts to create custom furniture tailored to your style and needs.",
    },
    {
      type: "image",
      img: "/mores3.webp",
    },
    {
      type: "text",
      title: "Furniture Manufacturing",
      desc: "We manufacture premium furniture using quality materials and expert craftsmanship.",
    },
  ];

  return (
    <div className="bg-white pb-14 sm:pb-16 md:pb-18 pt-10 sm:pt-12 px-4 sm:px-6 md:px-10 overflow-hidden">

      {/* HEADING */}
      <div className="text-center mb-10 sm:mb-14 md:mb-16" data-aos="fade-up">
        <p className="text-[#A47551] uppercase tracking-[3px] text-xs sm:text-sm">
          More Services
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1A1A1A] mt-2 leading-snug">
          Crafting the <span className="text-[#A47551]">Finest</span>
        </h2>

        <div className="mt-4 flex justify-center">
          <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent"></div>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

        {services.map((item, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="group rounded-2xl overflow-hidden bg-white transition-all duration-500
            hover:shadow-xl active:shadow-xl
            active:scale-[0.98]"
          >
            {item.type === "image" ? (
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[200px] sm:h-[220px] md:h-[240px]
                  object-cover transition-all duration-700
                  group-hover:scale-110 group-active:scale-110"
                />

                {/* overlay */}
                <div
                  className="absolute inset-0 bg-black/10 transition
                  group-hover:bg-black/30 group-active:bg-black/30"
                ></div>

                {/* gold line */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[2px]
                  bg-gradient-to-r from-[#D6AD60] to-transparent
                  scale-x-0 origin-left transition duration-500
                  group-hover:scale-x-100 group-active:scale-x-100"
                ></div>
              </div>
            ) : (
              <div className="p-5 sm:p-6 text-center flex flex-col justify-center h-[200px] sm:h-[220px] md:h-[240px] relative">

                {/* glow */}
                <div
                  className="absolute inset-0 bg-[#D6AD60]/10 opacity-0 transition
                  group-hover:opacity-100 group-active:opacity-100"
                ></div>

                {/* icon */}
                <div
                  className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full
                  bg-[#D6AD60]/20 flex items-center justify-center
                  text-[#A47551] text-lg sm:text-xl transition-all duration-300
                  group-hover:scale-110 group-active:scale-110"
                >
                  ✦
                </div>

                <h3
                  className="relative z-10 text-base sm:text-lg font-semibold text-[#1A1A1A] transition
                  group-hover:text-[#A47551] group-active:text-[#A47551]"
                >
                  {item.title}
                </h3>

                <p className="relative z-10 mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed text-justify sm:text-center">
                  {item.desc}
                </p>

                {/* line */}
                <div
                  className="relative z-10 mt-4 h-[2px] w-0 bg-[#D6AD60] transition-all duration-500
                  group-hover:w-full group-active:w-full"
                ></div>
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}