import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    date: "",
  });

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Our Services", link: "/services" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact Us", link: "/contact" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // HANDLE SUBMIT
  const handleSubmit = () => {
    if (!formData.name || !formData.phone) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    const message = `✨ *New Visit Request*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
📍 Address: ${formData.address}
🛠 Service: ${formData.service}
📅 Date: ${formData.date}

Looking forward to your response.`;

    const whatsappURL = `https://wa.me/917350605454?text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setLoading(false);
      setShowForm(false); // ✅ AUTO CLOSE MODAL
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        service: "",
        date: "",
      });
    }, 700);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/1.png" alt="logo" className="h-11 md:h-12" />
            <span
              className={`text-lg md:text-xl font-semibold tracking-wide transition
              ${scrolled ? "text-black" : "text-white"}`}
            >
              Malhar Engineering
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item, i) => {
              const isActive = location.pathname === item.link;

              return (
                <Link
                  key={i}
                  to={item.link}
                  className={`relative font-medium transition 
                  ${
                    isActive
                      ? "bg-gray-200 px-3 py-1 rounded-lg"
                      : scrolled
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* BUTTON */}
          <button
            onClick={() => setShowForm(true)}
            className={`hidden md:block px-6 py-2 rounded-full font-medium transition
            ${
              scrolled
                ? "bg-[#A47551] text-white hover:bg-[#D6AD60]"
                : "bg-white/90 text-black hover:bg-white"
            }`}
          >
            Book Visit
          </button>

          {/* MOBILE ICON */}
          <div className={`md:hidden ${scrolled ? "text-black" : "text-white"}`}>
            {open ? (
              <X size={28} onClick={() => setOpen(false)} />
            ) : (
              <Menu size={28} onClick={() => setOpen(true)} />
            )}
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white px-6 py-6 space-y-5 shadow-xl">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                onClick={() => setOpen(false)}
                className="block text-lg font-medium border-b pb-2"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => {
                setShowForm(true);
                setOpen(false);
              }}
              className="w-full bg-[#A47551] text-white py-3 rounded-full"
            >
              Book Visit
            </button>
          </div>
        )}
      </header>

      {/* ===== MODAL FORM ===== */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* BACKDROP */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

          {/* FORM */}
          <div className="relative w-[95%] sm:w-full max-w-lg 
          bg-white text-black rounded-2xl p-6 md:p-8 shadow-2xl">

            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            <h2 className="text-2xl font-semibold text-center">
              Book Office Visit
            </h2>

            <div className="mt-6 grid gap-4">

              <input name="name" placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="border p-3 rounded-lg focus:border-[#A47551] outline-none"
              />

              <input name="phone" placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="border p-3 rounded-lg focus:border-[#A47551] outline-none"
              />

              <input name="email" placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-3 rounded-lg focus:border-[#A47551] outline-none"
              />

              <select name="service"
                value={formData.service}
                onChange={handleChange}
                className="border p-3 rounded-lg"
              >
                <option value="">Select Service</option>
                <option>Modular Kitchen</option>
                <option>Wardrobe</option>
                <option>Office Interior</option>
                <option>Custom Furniture</option>
              </select>

              <input type="date" name="date"
                value={formData.date}
                onChange={handleChange}
                className="border p-3 rounded-lg"
              />

              <textarea name="address" placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="border p-3 rounded-lg"
              />

            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-6 w-full py-3 rounded-full 
              bg-gradient-to-r from-[#A47551] to-[#3E2C23] text-white"
            >
              {loading ? "Sending..." : "Submit → WhatsApp"}
            </button>

          </div>
        </div>
      )}
    </>
  );
}