import React from "react";
import { useNavigate } from "react-router-dom";

export default function VaibhavFactorySection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 md:ml-52">
        {/* LEFT CARD */}
        <div className="bg-white shadow-lg w-full max-w-sm p-6 sm:p-8 md:p-10 text-center border border-gray-100">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide whitespace-nowrap">
            BUY DIRECT FROM
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 tracking-tight whitespace-nowrap">
            VAIBHAV
          </h1>

          <p className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide whitespace-nowrap">
            FURNITURE
          </p>

          <div className="bg-[#7b4a84] text-white text-2xl sm:text-3xl md:text-4xl font-bold py-2 sm:py-3 mt-6">
            GET 30%
          </div>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-5 whitespace-nowrap">
            LESS THAN
          </p>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg whitespace-nowrap">
            RETAIL OUTLETS
          </p>
        </div>

        {/* RIGHT CHART */}
        <div className="flex justify-center w-full">
          <div className="flex items-end">
            {/* Y AXIS + GRAPH COMBINED */}
            <div className="flex items-end h-56 sm:h-64 md:h-72">
              {/* Y AXIS */}
              <div className="relative h-full flex items-end">
                {/* Numbers */}
                <div className="flex flex-col justify-between h-full text-gray-500 text-xs sm:text-sm mr-2 sm:mr-3">
                  <span>5</span>
                  <span>4</span>
                  <span>3</span>
                  <span>2</span>
                  <span>1</span>
                </div>

                {/* Line */}
                <div className="w-[2px] h-full bg-gray-400 relative">
                  <span className="absolute -left-16 sm:-left-20 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs text-gray-500 rotate-[-90deg] whitespace-nowrap">
                    PRICE ↑
                  </span>
                </div>
              </div>

              {/* GRAPH AREA */}
              <div className="relative w-[220px] sm:w-[260px] md:w-[320px] h-full">
                {/* GRID */}
                {[0, 25, 50, 75, 100].map((val, i) => (
                  <div
                    key={i}
                    className="absolute w-full border-t border-gray-200"
                    style={{ bottom: `${val}%` }}
                  />
                ))}

                {/* BARS */}
                <div className="absolute bottom-0 flex items-end justify-center gap-6 sm:gap-10 md:gap-20 w-full">
                  <div className="w-10 sm:w-14 md:w-20 lg:w-24 bg-[#3f4245] h-[180px] sm:h-[200px] md:h-[220px]" />
                  <div className="w-10 sm:w-14 md:w-20 lg:w-24 bg-[#7b4a84] h-[120px] sm:h-[140px] md:h-[160px]" />
                </div>

                {/* X AXIS (TOUCHING Y AXIS PERFECTLY) */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-400"></div>

                {/* LABELS BELOW AXIS */}
                <div className="absolute -bottom-6 w-full flex justify-center gap-6 sm:gap-10 md:gap-20 text-[10px] sm:text-xs md:text-sm text-gray-600 text-center">
                  <span className="whitespace-nowrap">
                    Imported / Ready Made
                  </span>
                  <span className="whitespace-nowrap">Vaibhav Factory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10 sm:mt-14">
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#7b4a84] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base hover:opacity-90 transition"
        >
          Reach Us to Avail 30% Discount
        </button>
      </div>
    </section>
  );
}
