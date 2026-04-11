import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function StorySection() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="bg-[#f8f8f8] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">

      {/* ===== TOP SECTION ===== */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* LEFT IMAGES */}
        <div className="relative flex flex-col items-center md:items-start">

          {/* MAIN IMAGE */}
          <img
            src="/story1.webp"
            alt=""
            data-aos="fade-up"
            className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[340px] rounded-xl shadow-xl"
          />

          {/* OVERLAP IMAGE (ONLY LARGE SCREEN) */}
          <img
            src="/story2.avif"
            alt=""
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-4 lg:mt-0 
            lg:absolute lg:-left-10 lg:-bottom-10
            w-full max-w-[180px] sm:max-w-[200px] lg:max-w-[220px] 
            rounded-xl shadow-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left">

          <h2
            data-aos="fade-up"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-5 relative inline-block"
          >
            Santosh Chachar – Vaibhav Furniture

            <span className="absolute left-0 -bottom-2 w-full h-[8px] overflow-hidden">
              <svg viewBox="0 0 200 20" className="w-full h-full">
                <path
                  d="M0,10 Q100,20 200,10"
                  stroke="#d4af37"
                  strokeWidth="3"
                  fill="transparent"
                />
              </svg>
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 max-w-md lg:max-w-lg mx-auto md:mx-0"
          >
            At Vaibhav Furniture, led by Santosh Chachar, we craft premium
            furniture that blends modern aesthetics with long-lasting quality.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="250"
            className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md lg:max-w-lg mx-auto md:mx-0"
          >
            From custom sofas to luxury interiors, our designs reflect attention
            to detail and superior craftsmanship.
          </p>
        </div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="max-w-6xl mx-auto mt-14 sm:mt-16 md:mt-20 grid md:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* TEXT */}
        <div className="text-center md:text-left order-2 md:order-1">

          <h3
            data-aos="fade-up"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 relative inline-block"
          >
            Our Environment: Crafted for Comfort

            <span className="absolute left-0 -bottom-2 w-full h-[8px] overflow-hidden">
              <svg viewBox="0 0 200 20" className="w-full h-full">
                <path
                  d="M0,10 Q100,20 200,10"
                  stroke="#d4af37"
                  strokeWidth="3"
                  fill="transparent"
                />
              </svg>
            </span>
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md lg:max-w-lg mx-auto md:mx-0"
          >
            Our workshop and showroom spaces are designed to inspire creativity
            and precision, transforming houses into elegant homes.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex flex-col items-center md:items-end order-1 md:order-2 md:mr-20">

          {/* MAIN IMAGE */}
          <img
            src="/story3.jpg"
            alt=""
            data-aos="fade-up"
            className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[340px] rounded-xl shadow-xl"
          />

          {/* OVERLAP IMAGE */}
          <img
            src="/story4.webp"
            alt=""
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-4 lg:mt-0 
            lg:absolute lg:-right-10 lg:-bottom-10
            w-full max-w-[180px] sm:max-w-[200px] lg:max-w-[220px] 
            rounded-xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}