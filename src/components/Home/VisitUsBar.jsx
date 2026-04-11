import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function VisitUsBar() {
  const navigate = useNavigate();

  const phoneNumber = "917350605454";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const callLink = `tel:${phoneNumber}`;

  return (
    <section className="relative w-full overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="https://www.customfurnish.com/blogs/wp-content/uploads/2025/09/23-scaled.webp"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75 "></div>

      {/* CONTENT */}
      <div
        className="relative z-10 max-w-7xl mx-auto 
        px-4 sm:px-6 md:px-10 lg:px-12 
        py-6 md:py-7
        flex flex-col md:flex-row 
        items-center justify-between 
        gap-6 text-white"
      >

        {/* LEFT BUTTON */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <button
            onClick={() => navigate("/contact")}
            className="border border-white px-6 py-2 rounded-md 
            font-semibold text-sm sm:text-base
            hover:bg-white hover:text-black transition 
            w-full sm:w-auto"
          >
            VISIT US
          </button>
        </div>

        {/* CENTER ICONS */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 
            p-3 rounded-md transition shadow-md"
          >
            <FaWhatsapp className="text-lg" />
          </a>

          <a
            href={callLink}
            className="bg-green-500 hover:bg-green-600 
            p-3 rounded-md transition shadow-md"
          >
            <FaPhoneAlt className="text-base" />
          </a>
        </div>

        {/* RIGHT ADDRESS */}
        <div
          className="flex items-start md:items-center gap-3 
          text-xs sm:text-sm 
          text-center md:text-right 
          max-w-full md:max-w-xl"
        >
          <FaMapMarkerAlt className="text-red-500 mt-1 hidden sm:block" />

          <div className="leading-relaxed space-y-1">
            <p>
              Vaibhav Furniture, Sr. No. 136/10, Urulidevachi Saswad Hadapsar
              Road, Near Zhooms Hotel, Pune - 412308
            </p>
            <p>
              Malhar Engineering, Ground Floor, C-78/6, Kolvihire Road, Soma Nu
              Labs, Jejuri MIDC, Pune - 412303
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}