import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OwnerSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="relative bg-[#f8f5f1] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">

      {/* background blur */}
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-[#c6a27e]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-[#7f5539]/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

        {/* IMAGE SIDE */}
        <div className="relative group order-1 lg:order-none" data-aos="fade-right">

          {/* layered cards (reduced offset on mobile) */}
          <div className="absolute -left-3 sm:-left-6 lg:-left-8 top-4 sm:top-6 lg:top-8 w-full h-full border border-[#d6c2a8]/90 rounded-2xl"></div>

          <div className="absolute -left-2 sm:-left-4 top-2 sm:top-4 w-full h-full bg-[#d6c2a8]/70 rounded-2xl"></div>

          {/* responsive image height */}
          <img
            src="/owner.jpeg"
            alt="Santosh Chachar"
            className="relative z-10 w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-all duration-700 group-hover:scale-[1.03]"
          />

          {/* floating tag */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/90 backdrop-blur-md px-3 sm:px-5 py-2 rounded-lg shadow-md text-[10px] sm:text-xs tracking-wide text-[#5f4a3a]">
            Founder • Vaibhav Furniture
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="order-2" data-aos="fade-left">

          <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-[#a1846c] uppercase mb-3 sm:mb-4">
            Our Leadership
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-[#2f2218] leading-snug">
            Crafting Spaces That
            <br className="hidden sm:block" />
            Reflect Timeless Elegance
          </h2>

          <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-medium text-[#7a5a43]">
            Santosh Chachar
          </h3>

          {/* description */}
          <p className="mt-4 sm:mt-6 text-[#6b5646] leading-7 sm:leading-8 text-sm sm:text-[15px] md:text-base max-w-xl">
            With over two decades of expertise, Santosh Chachar has built
            Vaibhav Furniture into a symbol of trust and premium craftsmanship
            in Pune. His dedication ensures every project delivers elegance,
            durability, and timeless design.
          </p>

          {/* highlights */}
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
            {[
              "Custom furniture & modular interiors",
              "Premium finish & detailing focus",
              "Trusted by 300+ clients",
            ].map((item, i) => (
              <p
                key={i}
                className="text-xs sm:text-sm text-[#5f4a3a] flex items-start gap-2"
              >
                <span className="text-[#c6a27e]">•</span>
                {item}
              </p>
            ))}
          </div>

          {/* divider */}
          <div className="mt-6 sm:mt-8 w-12 sm:w-16 h-[2px] bg-[#c6a27e] relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-full bg-[#7f5539] animate-[slide_2s_ease-in-out_infinite]"></div>
          </div>

          {/* stats */}
          <div className="flex flex-wrap gap-6 sm:gap-10 mt-6 sm:mt-8">
            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold text-[#2f2218]">20+</h4>
              <p className="text-[10px] sm:text-xs text-[#8b6b52]">Years Experience</p>
            </div>

            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold text-[#2f2218]">300+</h4>
              <p className="text-[10px] sm:text-xs text-[#8b6b52]">Projects</p>
            </div>

            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold text-[#2f2218]">4.9</h4>
              <p className="text-[10px] sm:text-xs text-[#8b6b52]">Rating</p>
            </div>
          </div>

          {/* quote */}
          <div className="mt-6 sm:mt-8 border-l-2 border-[#c6a27e] pl-3 sm:pl-4 italic text-[#5f4a3a] text-xs sm:text-sm">
            "We don’t just build furniture, we create experiences that last."
          </div>

          {/* CTA */}
          <button
            onClick={() =>
              window.open(
                "https://wa.me/917350605454?text=Hello%20Vaibhav%20Furniture,%20I%20am%20interested%20in%20your%20services.",
                "_blank"
              )
            }
            className="mt-8 sm:mt-10 w-full sm:w-auto px-6 sm:px-7 py-3 bg-[#2f2218] text-white text-xs sm:text-sm tracking-wide rounded-md hover:bg-[#4a3728] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            Contact Us
          </button>

        </div>
      </div>

      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(0%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </section>
  );
}