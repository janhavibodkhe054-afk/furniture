import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-[#2c1f19] opacity-90"></div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto 
      px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20
      py-12 sm:py-14 lg:py-20
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
      gap-10 lg:gap-14">

        {/* ===== BRAND ===== */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">
            VAIBHAV{" "}
            <span className="text-[#D6AD60]">
              FURNITURE
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            We craft premium, durable and stylish furniture designed to elevate
            modern homes with elegance and comfort.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 mt-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-white/10 text-[#D6AD60] p-3 rounded-full 
                hover:bg-[#D6AD60] hover:text-black 
                transition duration-300 hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div>
          <h3 className="font-semibold text-lg mb-5 text-[#D6AD60]">
            QUICK LINKS
            <span className="block w-8 h-[2px] bg-[#D6AD60] mt-1"></span>
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Gallery", path: "/gallery" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="hover:text-[#D6AD60] transition hover:translate-x-1 inline-block"
                >
                  → {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== SERVICES ===== */}
        <div>
          <h3 className="font-semibold text-lg mb-5 text-[#D6AD60]">
            SERVICES
            <span className="block w-8 h-[2px] bg-[#D6AD60] mt-1"></span>
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
            {[
              "Modular Kitchen",
              "Wardrobe Design",
              "Custom Furniture",
              "Interior Design",
              "Office Furniture",
            ].map((service, i) => (
              <li
                key={i}
                className="hover:text-[#D6AD60] transition hover:translate-x-1 cursor-pointer"
              >
                → {service}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div>
          <h3 className="font-semibold text-lg mb-5 text-[#D6AD60]">
            GET IN TOUCH
            <span className="block w-8 h-[2px] bg-[#D6AD60] mt-1"></span>
          </h3>

          <div className="space-y-4 text-gray-400 text-sm sm:text-base">

            <a href="#" className="flex items-start gap-3 hover:text-[#D6AD60] transition">
              <FaMapMarkerAlt className="mt-1 text-[#A47551]" />
              <p> Sr. No. 136/10, Urulidevachi Saswad Hadapsar Road, 
      Near Zhooms Hotel, Pune - 412308</p>
            </a>

            <a href="#" className="flex items-start gap-3 hover:text-[#D6AD60] transition">
              <FaMapMarkerAlt className="mt-1 text-[#A47551]" />
              <p>Ground Floor, C-78/6, Kolvihire Road, 
      Soma Nu Labs, Jejuri MIDC, Pune - 412303</p>
            </a>

            <a href="#" className="flex items-start gap-3 hover:text-[#D6AD60] transition">
              <FaMapMarkerAlt className="mt-1 text-[#A47551]" />
              <p> Vaibhav Furniture, Sr No: 9 Adsul Mala Urulidevachi, Shivram Nagar near Pushpak Rooftop, Pune - 412308</p>
            </a>

            <a href="tel:+917350605454" className="flex items-center gap-3 hover:text-[#D6AD60] transition">
              <FaPhoneAlt className="text-[#A47551]" />
              <span>+91 7350605454</span>
            </a>

            <a href="tel:+917900771111" className="flex items-center gap-3 hover:text-[#D6AD60] transition">
              <FaPhoneAlt className="text-[#A47551]" />
              <span>+91 7900771111</span>
            </a>

          </div>
        </div>
      </div>

      {/* ===== DIVIDER ===== */}
      <div className="relative z-10 h-[1px] bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent mx-6"></div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="relative z-10 bg-black border-t border-[#D6AD60]/20 
      text-gray-500 py-4 text-xs sm:text-sm px-4 sm:px-6 md:px-10">

        <div className="max-w-7xl mx-auto 
        flex flex-col sm:flex-row 
        items-center justify-between gap-2">

          <p>
            © {new Date().getFullYear()} All rights reserved | Vaibhav Furniture
          </p>

          <p>
  Designed & Developed by{" "}
  <a
    href="https://www.hashgridtech.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#D6AD60] font-medium hover:underline transition"
  >
    Hashgrid Technologies Pvt. Ltd.
  </a>
</p>

        </div>
      </div>

    </footer>
  );
}