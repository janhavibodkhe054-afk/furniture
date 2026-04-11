import { useEffect } from "react";

export default function AboutHero() {

  useEffect(() => {
    const text = document.querySelector(".about-heading");
    if (text) {
      text.classList.add("animate-heading");
    }
  }, []);

  return (
    <div className="relative h-[50vh] sm:h-[65vh] flex items-center justify-center text-center overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/abouthero.jpg"
        alt="about"
        className="absolute w-full h-full object-cover scale-110 animate-bg"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* GLOW */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-[#D6AD60]/20 rounded-full blur-3xl animate-float"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 animate-fadeUp">

        {/* TAG */}
        <p className="text-[#D6AD60] font-medium tracking-[3px] uppercase text-xs sm:text-sm opacity-0 animate-fadeDelay">
          Who We Are
        </p>

        {/* HEADING */}
        <h1 className="about-heading text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mt-3 leading-tight opacity-0">
          About Us
          
        </h1>

        {/* DIVIDER */}
        <div className="mt-6 flex justify-center opacity-0 animate-fadeDelay2">
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent"></div>
        </div>

      </div>

      {/* BOTTOM FADE */}
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

        @keyframes headingReveal {
          from { opacity: 0; letter-spacing: 8px; }
          to { opacity: 1; letter-spacing: 0px; }
        }

        @keyframes lineGrow {
          from { width: 0px; }
          to { width: 40px; }
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

        .animate-heading {
          animation: headingReveal 1s ease forwards;
        }

        .animate-line {
          animation: lineGrow 1s ease forwards;
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

    </div>
  );
}