export default function AboutInfo() {
  return (
    <div className="relative w-full md:py-10 flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/commonbg.jpg"
        alt=""
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/96"></div>

      {/* Content Box */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 md:px-12 py-10 
       ">

        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold text-black text-center tracking-wide">
        <span className="text-[#3E2C23]">Our Story</span>
        </h2>

        {/* Line */}
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-[2px] bg-gray-300"></div>
        </div>

        {/* Content */}
        <div className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed space-y-4 text-cente text-justify sm:text-leftr">
          
          <p>
            Established with a vision to deliver excellence, our company specializes 
            in manufacturing high-quality furniture that blends durability with 
            modern design. We focus on precision craftsmanship, ensuring every 
            product meets the highest standards of quality and finish.
          </p>

          <p>
            With advanced manufacturing facilities and a skilled workforce, we 
            handle everything from customized furniture solutions to large-scale 
            production. Our commitment to innovation and attention to detail allows 
            us to create products that are both functional and aesthetically appealing.
          </p>

          <p>
            Over the years, we have built a strong reputation based on trust, 
            reliability, and customer satisfaction. We believe in long-term 
            relationships and continuously strive to exceed expectations through 
            quality service and timely delivery.
          </p>

        </div>

        {/* Highlight */}
        

      </div>

      {/* Red Glow Accent */}
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-[#3E2C23]/20 rounded-full blur-3xl"></div>
    </div>
  );
}