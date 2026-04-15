import React, { useState } from "react";

const sofaSections = [
  {
    title: "L-SHAPE",
    hoverText: "Modern L-Shaped Sofa Set",
    image:
      "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Sofa_LS/WSFASKRR3CFJAC_LS_1.jpg?tr=w-3840",
    desktopSpan: "lg:col-span-2 lg:row-span-1",
  },
  {
    title: "LOUNGE",
    hoverText: "Luxury Lounge Seating",
    image:
      "https://images.woodenstreet.de/image/cache/data/fabric-sofa/osbert-3-seater-curved-sofa/jade-ivory/new+/New+Looks/103-750x650.jpg",
    desktopSpan: "lg:col-span-1 lg:row-span-2",
  },
  {
    title: "CLASSIC",
    hoverText: "Elegant Classic Sofa",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/luxury-modern-sofa-set-2217796384-tmce0if9.jpg",
    desktopSpan: "lg:col-span-1",
  },
  {
    title: "PREMIUM",
    hoverText: "Premium Designer Sofa",
    image:
      "https://media.designcafe.com/wp-content/uploads/2021/08/30121959/modern-l-shaped-sectional-set-design-in-living-room.jpg",
    desktopSpan: "lg:col-span-1",
  },
];

const SofaSetSlider = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {sofaSections.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative overflow-hidden rounded-xl sm:rounded-2xl group
                h-[220px] sm:h-[250px] md:h-[280px]
                ${index === 1 ? "lg:h-full" : "lg:h-[320px]"}
                ${item.desktopSpan}
              `}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition duration-500"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-white drop-shadow-lg text-center transition duration-500">
                  {hovered === index ? item.hoverText : item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SofaSetSlider;