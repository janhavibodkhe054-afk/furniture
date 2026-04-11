import { useEffect } from "react";

export default function ServicesHero() {

  useEffect(() => {
    const text = document.querySelector(".hero-heading");
    if (text) {
      text.classList.add("animate-heading");
    }
  }, []);

  return (
    <div className="relative h-[50vh] md:h-[65vh] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/bgservicehero.jpeg"
        alt=""
        className="absolute w-full h-full object-cover scale-110 animate-bg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Animated Glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-[#D6AD60]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-[#A47551]/20 rounded-full blur-3xl animate-float2"></div>

      {/* Content */}
      <div className="relative z-10 px-4 animate-fadeUp">

        {/* Breadcrumb */}
        

        {/* Heading */}
        <h1 className="hero-heading text-4xl md:text-5xl font-extrabold text-white leading-tight opacity-0">
          Our <span className="text-[#D6AD60]">Services</span>
        </h1>

        {/* Subtext */}
        <p className="mt-5 text-gray-300 max-w-2xl mx-auto text-sm md:text-lg opacity-0 animate-fadeDelay2">
          We provide high-quality furniture solutions, combining innovation,
          craftsmanship, and modern design to meet your needs.
        </p>

        {/* Line */}
        <div className="mt-8 flex justify-center opacity-0 animate-fadeDelay3">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent"></div>
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#F5F5F5] to-transparent"></div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bgZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }

        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float2 {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }

        @keyframes headingReveal {
          from { opacity: 0; letter-spacing: 8px; }
          to { opacity: 1; letter-spacing: 0px; }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        .animate-bg {
          animation: bgZoom 6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float2 {
          animation: float2 7s ease-in-out infinite;
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

        .animate-fadeDelay3 {
          animation: fadeUp 1s ease forwards;
          animation-delay: 0.9s;
        }
      `}</style>

    </div>
  );
}