export default function HowWeOperate() {
  const steps = [
    {
      title: "Initial Consultation",
      desc: "Understanding your space, style, and requirements.",
      icon: "🪑",
    },
    {
      title: "Design Planning",
      desc: "Custom layouts and furniture concepts crafted.",
      icon: "📐",
    },
    {
      title: "Manufacturing",
      desc: "Precision-crafted furniture using premium materials.",
      icon: "🛠️",
    },
    {
      title: "Delivery & Setup",
      desc: "On-time delivery with expert installation.",
      icon: "🚚",
    },
  ];

  return (
    <div className="bg-[#F5F5F5] pb-18 pt-10 px-4 md:px-16 text-center overflow-hidden">

      {/* SMALL LABEL */}
      <p className="text-[#A47551] text-xs tracking-[4px] uppercase mb-3">
        PROCESS
      </p>

      {/* HEADING */}
      <h2 className="text-3xl md:text-5xl font-semibold text-[#1A1A1A]">
        How We Operate
      </h2>

      {/* STEPS */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-16 relative">

        {steps.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center max-w-[200px]">

            {/* ICON WRAPPER */}
            <div className="relative">

              {/* soft circle */}
              <div className="w-16 h-16 rounded-full bg-[#D6AD60]/15 flex items-center justify-center text-2xl">
                {step.icon}
              </div>

              {/* small floating dots */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#D6AD60] rounded-full opacity-70"></div>
              <div className="absolute bottom-0 -left-2 w-2 h-2 bg-[#A47551] rounded-full opacity-60"></div>

            </div>

            {/* TEXT */}
            <h3 className="mt-5 text-[15px] font-medium text-[#1A1A1A]">
              {step.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {step.desc}
            </p>

            {/* CURVED CONNECTOR (DESKTOP ONLY) */}
            {i !== steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-full w-24 h-10">

                <svg
                  viewBox="0 0 100 50"
                  className="w-full h-full"
                >
                  <path
                    d="M0 25 Q50 0 100 25"
                    stroke="#A47551"
                    strokeWidth="1.5"
                    fill="transparent"
                    strokeDasharray="4 4"
                  />
                </svg>

              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}