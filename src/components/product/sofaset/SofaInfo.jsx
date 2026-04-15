import React from "react";
import { useNavigate } from "react-router-dom";

const SofaInfo = () => {
  const navigate = useNavigate();

  return (
    <section
      className="
        bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Label */}
        <p
          className="
            text-[#8b5e3c]
            uppercase
            tracking-[0.22em]
            text-[11px] sm:text-xs md:text-sm
            font-semibold
            mb-3 sm:mb-4
          "
        >
          Sofa Set Solutions
        </p>

        {/* Heading */}
        <h2
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-black leading-snug md:leading-tight mb-6 sm:mb-8
          "
        >
          Premium Sofa Sets
          <br />
          Designed For Elegant Living
        </h2>

        {/* Info Paragraph */}
        <p
          className="
            text-gray-700 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 font-light tracking-normal sm:tracking-wide text-justify
          "
        >
          Our sofa sets are thoughtfully designed to bring together comfort,
          elegance, and timeless craftsmanship for modern living spaces. Every
          sofa is customized according to your room layout, seating
          requirements, and interior theme to ensure a perfect fit. From
          luxurious L-shaped sofas to classic three-seater and designer lounge
          pieces, we create furniture that enhances both aesthetics and
          functionality. Premium fabrics, rich textures, durable wooden frames,
          and high-density cushioning ensure long-lasting comfort and style.
          Every detail, from armrest design to stitching patterns and leg
          finishes, is carefully crafted to reflect sophistication and quality.
          Our focus remains on creating sofa sets that offer maximum comfort
          while maintaining a refined and modern appearance. With expert
          craftsmanship and flawless finishing, each piece becomes a statement
          element in your living room, blending practicality with luxury and
          creating a warm, inviting atmosphere for everyday living.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/contact")}
          className="
            mt-8 sm:mt-10
            px-6 sm:px-8 md:px-10
            py-3 sm:py-4
            bg-[#8b5e3c]
            hover:bg-[#6f4b31]
            transition duration-300
            text-white
            rounded-full
            font-medium
            shadow-lg
            text-sm sm:text-base
          "
        >
          Enquire Now
        </button>
      </div>
    </section>
  );
};

export default SofaInfo;