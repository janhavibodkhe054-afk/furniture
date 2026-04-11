import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUtensils,
  FaDoorOpen,
  FaCouch,
  FaTv,
  FaLightbulb,
  FaChair,
  FaHome,
  FaLayerGroup,
  FaPaintRoller,
  FaTable,
  FaPray,
} from "react-icons/fa";

export default function Inclusions() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  const items = [
    { icon: <FaUtensils />, name: "Modular Kitchen" },
    { icon: <FaDoorOpen />, name: "Wardrobe" },
    { icon: <FaLayerGroup />, name: "Crockery Units" },
    { icon: <FaCouch />, name: "Space Saving Furniture" },
    { icon: <FaTv />, name: "TV Units" },
    { icon: <FaHome />, name: "Foyer Designs" },
    { icon: <FaTable />, name: "Study Tables" },
    { icon: <FaHome />, name: "False Ceiling" },
    { icon: <FaLightbulb />, name: "Lights" },
    { icon: <FaPaintRoller />, name: "Wallpaper" },
    { icon: <FaChair />, name: "Movable Furniture" },
    { icon: <FaPray />, name: "Pooja Unit" },
  ];

  return (
    <section className="bg-[#F5F5F5] py-14 sm:py-16 md:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-center">

        {/* TOP TEXT */}
        <p
          data-aos="fade-up"
          className="text-[#A47551] tracking-[3px] text-xs sm:text-sm mb-3"
        >
          VISIT VAIBHAV FURNITURE
        </p>

        {/* HEADING */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-semibold text-[#1A1A1A] mb-12 md:mb-16 relative inline-block"
        >
          Our Inclusions

          {/* GOLD UNDERLINE */}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 
          w-20 h-[3px] bg-[#D6AD60] rounded-full"></span>
        </h2>

        {/* GRID */}
        <div
          className="grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-6 
          gap-4 sm:gap-6 md:gap-8"
        >
          {items.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 60}
              className="group bg-white 
              border border-gray-200 
              rounded-xl sm:rounded-2xl 
              p-4 sm:p-5 
              flex flex-col items-center 
              transition-all duration-300 
              hover:shadow-xl hover:-translate-y-2"
            >

              {/* ICON BOX */}
              <div
                className="p-3 rounded-lg 
                bg-[#F5F5F5] 
                transition-all duration-300
                group-hover:bg-[#A47551]/10"
              >
                <div
                  className="text-lg sm:text-xl md:text-2xl 
                  text-[#3E2C23] 
                  transition-all duration-300 
                  group-hover:text-[#A47551] 
                  group-hover:scale-110"
                >
                  {item.icon}
                </div>
              </div>

              {/* TEXT */}
              <p
                className="mt-3 text-[11px] sm:text-xs md:text-sm 
                text-[#1A1A1A] text-center leading-snug 
                transition duration-300
                group-hover:text-[#3E2C23]"
              >
                {item.name}
              </p>

              {/* GOLD LINE */}
              <span
                className="block w-0 h-[2px] bg-[#D6AD60] mt-2 
                transition-all duration-300 
                group-hover:w-8"
              ></span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}