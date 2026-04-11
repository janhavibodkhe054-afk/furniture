export default function AboutWithStats() {
  return (
    <div className="relative w-full py-24 px-4 md:px-16 overflow-hidden bg-black text-white">

      {/* Background Image */}
      <img
        src="/stats1.avif"
        alt=""
        className="absolute w-full h-full object-cover opacity-30"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>

      {/* GOLD GLOW */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#D6AD60]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#D6AD60]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* CARD */}
            <div className="group relative overflow-hidden rounded-2xl 
            bg-white/5 backdrop-blur-md border border-white/10 
            p-8 text-center hover:scale-105 transition duration-500">

              <h3 className="text-5xl font-extrabold text-[#D6AD60]">400+</h3>
              <p className="mt-2 text-gray-300">Happy Customers</p>

              <div className="absolute bottom-0 left-0 w-full h-[2px] 
              bg-gradient-to-r from-[#D6AD60] to-transparent 
              scale-x-0 group-hover:scale-x-100 transition origin-left"></div>
            </div>

            {/* CARD */}
            <div className="group relative overflow-hidden rounded-2xl 
            bg-white/5 backdrop-blur-md border border-white/10 
            p-8 text-center hover:scale-105 transition duration-500">

              <h3 className="text-5xl font-extrabold text-[#D6AD60]">10+</h3>
              <p className="mt-2 text-gray-300">Years Experience</p>

              <div className="absolute bottom-0 left-0 w-full h-[2px] 
              bg-gradient-to-r from-[#D6AD60] to-transparent 
              scale-x-0 group-hover:scale-x-100 transition origin-left"></div>
            </div>

            {/* CARD */}
            <div className="group relative overflow-hidden rounded-2xl 
            bg-white/5 backdrop-blur-md border border-white/10 
            p-8 text-center hover:scale-105 transition duration-500">

              <h3 className="text-5xl font-extrabold text-[#D6AD60]">25+</h3>
              <p className="mt-2 text-gray-300">Expert Designers</p>

              <div className="absolute bottom-0 left-0 w-full h-[2px] 
              bg-gradient-to-r from-[#D6AD60] to-transparent 
              scale-x-0 group-hover:scale-x-100 transition origin-left"></div>
            </div>

            {/* EXTRA CARD */}
            <div className="group relative overflow-hidden rounded-2xl 
            bg-gradient-to-br from-[#D6AD60]/20 to-transparent 
            border border-[#D6AD60]/20 
            p-8 text-center hover:scale-105 transition duration-500">

              <h3 className="text-lg font-semibold text-white">
                Trusted Brand
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                Quality • Reliability • Innovation
              </p>

              <div className="absolute inset-0 bg-[#D6AD60]/10 opacity-0 group-hover:opacity-100 transition"></div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/stats2.jpg"
              alt=""
              className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

            {/* floating label */}
            <div className="absolute bottom-6 left-6 
            bg-black/40 backdrop-blur-md px-5 py-2 rounded-full text-sm 
            border border-white/10 text-[#D6AD60]">
              Premium Craftsmanship
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}