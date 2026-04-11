import { FaStar } from "react-icons/fa";

export default function Testimonials() {

  const testimonials = [
    { name: "Santosh Chachar", text: "Vaibhav Furniture completely transformed my home. The quality is outstanding." },
    { name: "Rohit Patil", text: "Wardrobe design is perfect. Finishing and fitting are top class." },
    { name: "Amol Deshmukh", text: "Service was very fast and professional. Highly recommended." },
    { name: "Priya Kadam", text: "Design is beautiful and very practical. Loved it!" },
    { name: "Sneha Jadhav", text: "Furniture quality is premium. Totally worth it." },
    { name: "Rajesh Shinde", text: "Team was very supportive. Delivered exactly what I wanted." },
    { name: "Pooja More", text: "Modern design and clean finishing made my home elegant." },
    { name: "Vikas Pawar", text: "Delivered on time and installation was perfect." },
    { name: "Anita Bhosale", text: "Custom furniture is unique. Guests loved it!" },
    { name: "Mayur Jagtap", text: "Amazing experience. Fully satisfied." },
  ];

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-[#F5F5F5] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A1A1A] mb-3">
          What Our Clients Say
        </h2>

        <p className="text-gray-500 mb-10 md:mb-14 text-sm md:text-base">
          Real experiences from our happy customers
        </p>

        {/* SLIDER WRAPPER */}
        <div className="relative overflow-hidden">

          <div className="flex w-max animate-scroll gap-4 sm:gap-6">

            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="
                min-w-[240px] sm:min-w-[260px] md:min-w-[300px]
                max-w-[240px] sm:max-w-[260px] md:max-w-[300px]
                bg-white rounded-xl sm:rounded-2xl 
                p-4 sm:p-5 
                shadow-md 
                transition-all duration-300 
                hover:shadow-xl hover:-translate-y-2
                border border-gray-100
                "
              >

                {/* TEXT */}
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 leading-relaxed">
                  "{item.text}"
                </p>

                {/* STARS */}
                <div className="flex justify-center mb-3 text-[#D6AD60] text-sm md:text-base">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* NAME */}
                <h4 className="font-semibold text-[#3E2C23] text-center text-sm md:text-base">
                  {item.name}
                </h4>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ANIMATION STYLE */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-30%); }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          /* Pause on hover */
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

    </section>
  );
}