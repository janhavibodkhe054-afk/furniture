import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
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
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
  ];

  const navLinksAfterProduct = [
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  const productLinks = [
    { name: "Wardrobe", link: "/wardrobe" },
    { name: "Dressing Unit", link: "/dressing" },
    { name: "TV Unit", link: "/tvunit" },
    { name: "Sofa Set", link: "/sofaset" },
    { name: "Dining Table", link: "/dinning" },
    { name: "Bed Room", link: "/bedroom" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileProductOpen(false);
  }, [location.pathname]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
📅 Date: ${formData.date}`;

    const whatsappURL = `https://wa.me/917350605454?text=${encodeURIComponent(
      message,
    )}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setLoading(false);
      setShowForm(false);

      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        service: "",
        date: "",
      });
    }, 600);
  };

  const navText = scrolled ? "text-[#111]" : "text-white";

  return (
    <>
      {/* NAVBAR 🌟 */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14">
          {/* LOGO ✨ */}
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <img
              src="/1.png"
              alt="logo"
              className="h-9 w-auto sm:h-10 md:h-11 lg:h-12 flex-shrink-0"
            />

            <span
              className={`truncate whitespace-nowrap text-sm font-semibold tracking-wide transition-all duration-300 sm:text-base md:text-lg lg:text-xl ${navText}`}
            >
              Malhar Engineering
            </span>
          </Link>

          {/* DESKTOP NAV 🚀 */}
          <nav className="hidden items-center gap-2 lg:flex xl:gap-3">
            {navLinks.map((item, index) => {
              const active = location.pathname === item.link;

              return (
                <Link
                  key={index}
                  to={item.link}
                  className={`relative whitespace-nowrap rounded-full px-3 xl:px-4 py-2 text-[13px] xl:text-[15px] font-medium transition-all duration-300 ${
                    active
                      ? "bg-[#A47551] text-white shadow-md"
                      : `${navText} hover:bg-white/10 hover:text-[#D6AD60]`
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* PRODUCT DROPDOWN 🔥 */}
            <div
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button
                className={`flex items-center gap-1 rounded-full px-3 xl:px-4 py-2 text-[13px] xl:text-[15px] font-medium whitespace-nowrap transition-all duration-300 ${
                  productOpen
                    ? "bg-[#A47551] text-white"
                    : `${navText} hover:bg-white/10 hover:text-[#D6AD60]`
                }`}
              >
                Product
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    productOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* hover bridge */}
              <div className="absolute left-0 top-full h-3 w-full"></div>

              <div
                className={`absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl transition-all duration-300 ${
                  productOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className="border-b border-gray-100 bg-gray-50 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 whitespace-nowrap">
                    Our Products
                  </p>
                </div>

                <div className="p-2">
                  {productLinks.map((product, index) => (
                    <Link
                      key={index}
                      to={product.link}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-[#f8f4ef] hover:text-[#A47551]"
                    >
                      <span className="whitespace-nowrap">
                        {product.name}
                      </span>
                      <span className="text-base">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinksAfterProduct.map((item, index) => {
              const active = location.pathname === item.link;

              return (
                <Link
                  key={index}
                  to={item.link}
                  className={`relative whitespace-nowrap rounded-full px-3 xl:px-4 py-2 text-[13px] xl:text-[15px] font-medium transition-all duration-300 ${
                    active
                      ? "bg-[#A47551] text-white shadow-md"
                      : `${navText} hover:bg-white/10 hover:text-[#D6AD60]`
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE 🎯 */}
          <div className="flex items-center gap-3">
            {/* BOOK VISIT BUTTON */}
            <button
              onClick={() => setShowForm(true)}
              className={`hidden whitespace-nowrap rounded-full px-4 xl:px-6 py-2.5 text-sm xl:text-[15px] font-semibold transition-all duration-300 lg:block ${
                scrolled
                  ? "bg-[#A47551] text-white hover:bg-[#8b5d3c]"
                  : "bg-white text-[#111] hover:bg-[#f5f5f5]"
              }`}
            >
              Book Visit
            </button>

            {/* MOBILE MENU ICON 📱 */}
            <button
              onClick={() => setOpen(!open)}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 lg:hidden ${
                scrolled
                  ? "bg-gray-100 text-[#111]"
                  : "bg-white/10 text-white backdrop-blur-sm"
              }`}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU 📱 */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            open ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-4 mt-4 rounded-3xl border border-white/10 bg-white p-5 shadow-2xl sm:mx-6">
            <div className="space-y-2">
              {navLinks.map((item, index) => {
                const active = location.pathname === item.link;

                return (
                  <Link
                    key={index}
                    to={item.link}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium transition-all duration-300 ${
                      active
                        ? "bg-[#A47551] text-white"
                        : "text-[#111] hover:bg-gray-100"
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                );
              })}

              {/* MOBILE PRODUCT MENU 🔽 */}
              <div className="rounded-2xl bg-gray-50">
                <button
                  onClick={() =>
                    setMobileProductOpen(!mobileProductOpen)
                  }
                  className="flex w-full items-center justify-between px-4 py-3 text-[15px] font-medium text-[#111]"
                >
                  <span className="whitespace-nowrap">Product</span>

                  {mobileProductOpen ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileProductOpen
                      ? "max-h-96 pb-3"
                      : "max-h-0"
                  }`}
                >
                  <div className="space-y-1 px-3">
                    {productLinks.map((product, index) => (
                      <Link
                        key={index}
                        to={product.link}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-white hover:text-[#A47551]"
                      >
                        <span className="whitespace-nowrap">
                          {product.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinksAfterProduct.map((item, index) => {
                const active = location.pathname === item.link;

                return (
                  <Link
                    key={index}
                    to={item.link}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium transition-all duration-300 ${
                      active
                        ? "bg-[#A47551] text-white"
                        : "text-[#111] hover:bg-gray-100"
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* MOBILE BOOK VISIT BUTTON ✨ */}
            <button
              onClick={() => {
                setShowForm(true);
                setOpen(false);
              }}
              className="mt-5 w-full rounded-2xl bg-gradient-to-r from-[#A47551] to-[#7a5237] py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01]"
            >
              Book Visit
            </button>
          </div>
        </div>
      </header>

      {/* MODAL FORM 📝 */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          ></div>

          <div className="relative w-full max-w-lg rounded-3xl bg-white p-5 shadow-2xl sm:p-6 md:p-8">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              <X size={20} />
            </button>

            <h2 className="pr-10 text-2xl font-bold text-[#111] sm:text-3xl">
              Book Office Visit ✨
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill your details and we’ll connect with you soon 📞
            </p>

            <div className="mt-6 grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-[#A47551]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-[#A47551]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-[#A47551]"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#A47551]"
              >
                <option value="">Select Service</option>
                <option>Modular Kitchen</option>
                <option>Wardrobe</option>
                <option>Office Interior</option>
                <option>Custom Furniture</option>
              </select>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#A47551]"
              />

              <textarea
                rows="3"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-[#A47551]"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#A47551] to-[#3E2C23] py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Submit → WhatsApp"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}