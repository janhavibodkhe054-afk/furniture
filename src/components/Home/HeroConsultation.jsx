import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroConsultation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    type: "",
    budget: "",
    requirement: "",
  });

  const handleSubmit = () => {
    const phoneNumber = "917350605454";

    const message = `Hello Vaibhav Furniture,
Name: ${form.name}
Phone: ${form.phone}
City: ${form.city}
Furniture: ${form.type}
Budget: ${form.budget}
Requirement: ${form.requirement}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fafafa] to-[#f5f5f5]" />
      <div className="absolute top-10 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#d4af37]/10 blur-[120px] -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[#1A1A1A] tracking-[3px] text-[10px] sm:text-xs mb-2 font-medium">
            VAIBHAV FURNITURE
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug">
            Designed for Comfort,
            <span className="block sm:inline sm:ml-2 italic text-[#1A1A1A] font-serif">
              Crafted for You
            </span>
          </h1>

          <div className="flex justify-center mt-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              transition={{ duration: 1 }}
              className="h-[2px] rounded-full bg-black"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-lg"
          >
            <img
              src="/heroconsult.webp"
              alt=""
              className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] object-cover 
              transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex items-end p-4 sm:p-6">
              <div className="text-white">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                  Elegant Living Spaces
                </h2>
                <p className="text-[10px] sm:text-xs opacity-80">
                  Luxury • Comfort • Timeless
                </p>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 backdrop-blur-xl border border-gray-200 
            rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 shadow-lg"
          >

            {/* GOLD BORDER */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-[#d4af37]/20 pointer-events-none" />

            <h3 className="text-lg sm:text-xl font-semibold mb-5 text-gray-900">
              Free Consultation
            </h3>

            {/* INPUTS */}
            {["name", "phone", "city"].map((field, i) => (
              <div key={i} className="relative mb-4">
                <input
                  type="text"
                  required
                  className="peer w-full bg-transparent border-b border-gray-400 
                  focus:border-[#d4af37] outline-none py-2 text-sm"
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                />
                <label
                  className="absolute left-0 top-2 text-gray-500 text-sm 
                  peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#d4af37] 
                  peer-valid:-top-3 peer-valid:text-xs transition-all"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
              </div>
            ))}

            {/* SELECTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <select
                className="bg-transparent border-b border-gray-400 text-sm py-2 focus:border-[#d4af37] outline-none"
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                <option value="">Type</option>
                <option>Sofa</option>
                <option>Bed</option>
                <option>Wardrobe</option>
              </select>

              <select
                className="bg-transparent border-b border-gray-400 text-sm py-2 focus:border-[#d4af37] outline-none"
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              >
                <option value="">Budget</option>
                <option>₹50K - ₹1L</option>
                <option>₹1L - ₹3L</option>
                <option>₹3L+</option>
              </select>
            </div>

            {/* TEXTAREA */}
            <textarea
              rows="3"
              placeholder="Requirement..."
              className="w-full bg-transparent border-b border-gray-400 
              focus:border-[#d4af37] outline-none text-sm py-2 mb-5"
              onChange={(e) =>
                setForm({ ...form, requirement: e.target.value })
              }
            />

            {/* BUTTON */}
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="relative overflow-hidden group flex items-center gap-2 
                px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base text-white 
                bg-gray-900 shadow-md transition"
              >
                <span className="absolute inset-0 bg-gradient-to-r 
                from-transparent via-white/20 to-transparent 
                translate-x-[-100%] group-hover:translate-x-[100%] 
                transition duration-700" />

                <span className="relative z-10">Submit</span>

                <motion.span
                  className="relative z-10"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}