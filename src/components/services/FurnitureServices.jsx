import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import { Edit3, Layout, Briefcase, Box, Settings, Truck } from "lucide-react";

export default function FurnitureServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: "Custom Furniture Design",
      desc: "Tailor-made furniture crafted to match your space, style, and functional needs with precision and quality.",
      img: "/fservice1.jpg",
      icon: <Edit3 className="w-5 h-5 sm:w-6 sm:h-6 text-[#A47551]" />,
    },
    {
      title: "Wardrobe & Storage Solutions",
      desc: "Smart storage systems designed for maximum space utilization with modern and durable finishes.",
      img: "/fservice2.jpg",
      icon: <Layout className="w-5 h-5 sm:w-6 sm:h-6 text-[#A47551]" />,
    },
    {
      title: "Office Furniture",
      desc: "Ergonomic and stylish office furniture solutions that enhance productivity and workspace efficiency.",
      img: "/fservice3.avif",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#A47551]" />,
    },
    {
      title: "Interior Furniture Planning",
      desc: "Complete planning of furniture layout to ensure aesthetic appeal and optimal space usage.",
      img: "/fservice4.jpg",
      icon: <Box className="w-5 h-5 sm:w-6 sm:h-6 text-[#A47551]" />,
    },
    {
      title: "Furniture Repair & Maintenance",
      desc: "Professional repair and maintenance services to extend the life and quality of your furniture.",
      img: "/fservice5.jpg",
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-[#A47551]" />,
    },
    {
      title: "Bulk Furniture Supply",
      desc: "Reliable large-scale furniture production and supply for commercial and residential projects.",
      img: "/fservice6.avif",
      icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-[#A47551]" />,
    },
  ];

  // State to track which card is active (clicked)
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index); // toggle on click
  };

  return (
    <div
      id="services-section"
      className="relative pb-24 pt-10 px-4 md:px-16 bg-[#F5F5F5] overflow-hidden"
    >
      {/* SOFT GLOW */}
      <div className="absolute top-[-60px] left-[-60px] w-[200px] h-[200px] bg-[#D6AD60]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-[200px] h-[200px] bg-[#A47551]/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A]">
            Our <span className="text-[#A47551]">Offerings</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg md:text-xl">
            Delivering excellence through quality craftsmanship and innovative
            design.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {services.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative cursor-pointer"
              onClick={() => handleCardClick(i)}
            >
              {/* BACK LAYER */}
              <div
                className={`absolute inset-0 bg-[#D6AD60]/20 rounded-2xl 
                translate-x-2 translate-y-2 ${activeCard === i ? "translate-x-1 translate-y-1" : ""} transition-all duration-500`}
              ></div>

              {/* MAIN CARD */}
              <div
                className={`relative overflow-hidden rounded-2xl bg-white shadow-md 
                hover:shadow-2xl transition-all duration-500 ${activeCard === i ? "-translate-y-2" : ""}`}
              >
                {/* IMAGE */}
                <div className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-700 transform will-change-transform
                      ${activeCard === i ? "scale-110" : "group-hover:scale-110 group-active:scale-105"}`}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-6 md:p-7 relative">
                  <h3
                    className="text-base sm:text-lg md:text-xl font-semibold text-[#1A1A1A] 
                    group-hover:text-[#A47551] transition-colors duration-500"
                  >
                    {item.title}
                  </h3>

                  {/* LINE WITH ICON CENTER */}
                  <div className="relative mt-3 flex items-center justify-center">
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#D6AD60] -translate-y-1/2"></div>
                    <div
                      className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center border-2 border-[#D6AD60] transition-transform duration-700 ease-in-out will-change-transform
                      ${activeCard === i ? "rotate-180 scale-110" : "group-hover:rotate-180 group-hover:scale-110 group-active:rotate-180 group-active:scale-105"}`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* SECTION-SPECIFIC SERVICES INQUIRY BUTTON */}
      <div
        className="flex justify-center mt-10"
        data-aos="fade-up"
        data-aos-delay={600}
      >
        <a
          href="https://wa.me/917350605454" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-[#A47551] shadow-lg hover:bg-[#D6AD60] hover:scale-105 transition-all duration-300"
        >
          {/* Optional icon */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          {/* Button Text */}
          <span className="text-white font-semibold text-sm sm:text-base">
            Discuss Your Project
          </span>
        </a>
      </div>
    </div>
  );
}
