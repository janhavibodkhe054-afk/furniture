import { useState } from "react";
import { X } from "lucide-react";

export default function GalleryPage() {
  const images = Array.from({ length: 33 }, (_, i) => `/${i + 1}.jpeg`);
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white text-black min-h-screen">

      {/* HERO */}
      <div className="relative h-[50vh] md:h-[65vh] flex items-center justify-center text-center overflow-hidden">
        
        <img
          src="/galleryhero.avif"
          alt=""
          className="absolute w-full h-full object-cover scale-105"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-white"></div>

        {/* red glow */}
        <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] bg-red-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest text-[#A47551]">
            Gallery
          </h1>

          <p className="mt-4 text-gray-100 text-lg">
            Our Projects
          </p>

          <div className="mt-6 flex justify-center">
            <div className="w-24 h-[2px] bg-white"></div>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="px-4 md:px-16 py-16">

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">

          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelected(img)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid shadow-sm hover:shadow-xl transition duration-500"
            >
              
              {/* Image */}
              <img
                src={img}
                alt=""
                className="w-full rounded-2xl transition duration-700 ease-in-out 
                group-hover:scale-125 group-hover:rotate-1 group-hover:brightness-75"
              />

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-black/20  opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Center Button */}
              

              {/* Bottom Animated Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500 via-red-400 to-black scale-x-0 group-hover:scale-x-100 transition duration-500 origin-left"></div>
            </div>
          ))}

        </div>
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-lg flex items-center justify-center z-50">
          
          {/* close */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
          >
            <X size={28} />
          </button>

          {/* image */}
          <img
            src={selected}
            alt=""
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl 
            animate-[fadeIn_0.3s_ease]"
          />
        </div>
      )}

    </div>
  );
}