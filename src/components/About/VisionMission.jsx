export default function VisionMission() {
  return (
    <>
      <style>
        {`
          @keyframes floatUp {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          .float-card {
            animation: floatUp 4s ease-in-out infinite;
          }

          @media (max-width: 768px) {
            .float-card {
              animation: floatUp 3s ease-in-out infinite;
            }
          }
        `}
      </style>

      <div className="relative bg-[#F5F5F5] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-[-60px] left-[-60px] w-[180px] h-[180px] bg-[#D6AD60]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-60px] right-[-60px] w-[180px] h-[180px] bg-[#A47551]/20 blur-3xl rounded-full"></div>

        {/* Heading */}
        <div className="relative z-10 text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1A1A1A]">
            Our <span className="text-[#A47551]">Vision & Mission</span>
          </h2>

          <p className="mt-3 text-gray-500 text-sm sm:text-base md:text-lg">
            Driven by purpose, focused on quality
          </p>

          <div className="mt-5 flex justify-center">
            <div className="w-20 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Image */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <img
                src="/vision.jpg"
                alt=""
                className="w-full h-[240px] sm:h-[300px] md:h-[350px]
                object-cover transition-transform duration-700
                group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>

          {/* Cards */}
          <div className="w-full space-y-5 sm:space-y-6">

            {/* Vision */}
            <div
              className="float-card bg-white rounded-2xl shadow-lg
              p-5 sm:p-6 md:p-8
              transition-all duration-300
              hover:shadow-2xl hover:-translate-y-2
              active:scale-[0.98]"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#A47551]">
                Our Vision
              </h3>

              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                Our vision is to become a leading name in the furniture industry by
                delivering innovative designs, superior quality, and long-lasting
                products that enhance everyday living spaces.
              </p>

              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-[#D6AD60] to-transparent"></div>
            </div>

            {/* Mission */}
            <div
              className="float-card bg-white rounded-2xl shadow-lg
              p-5 sm:p-6 md:p-8
              transition-all duration-300
              hover:shadow-2xl hover:-translate-y-2
              active:scale-[0.98]"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#A47551]">
                Our Mission
              </h3>

              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                Our mission is to provide high-quality furniture solutions through
                advanced manufacturing, skilled craftsmanship, and a strong commitment
                to customer satisfaction, ensuring reliability and excellence in every product.
              </p>

              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-[#A47551] to-transparent"></div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}