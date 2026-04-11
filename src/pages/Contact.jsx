import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const text = `Hello,
Name: ${form.name}
Phone: ${form.phone}
Subject: ${form.subject}
Message: ${form.message}`;

    const whatsappURL = `https://wa.me/917350605454?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <div className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden">
        <img
          src="/contact.jpg"
          alt="hero"
          className="w-full h-full object-cover scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* GOLD GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#D6AD60]/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#A47551]/20 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Get In <span className="text-[#D6AD60]">Touch</span>
          </h1>

          <p className="text-gray-300 mt-5 max-w-2xl text-sm md:text-lg">
            We’d love to hear from you. Whether you have a question about
            products or pricing — our team is ready to help.
          </p>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* CONTACT INFO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20 py-12 text-center">
        {/* Email */}
        <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-[#FAF5EE] transition">
          <Mail className="text-[#A47551] w-8 h-8 mb-2" />
          <p className="font-semibold text-black">Email</p>
          <p className="text-sm text-gray-500 mt-1 break-words">
            vaibhavfurniture@yahoo.com
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-[#FAF5EE] transition">
          <Phone className="text-[#A47551] w-8 h-8 mb-2" />
          <p className="font-semibold text-black">Phone</p>
          <p className="text-sm text-gray-500 mt-1">
            +91 7350605454 <br /> +91 7900771111
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-[#FAF5EE] transition">
          <MapPin className="text-[#A47551] w-8 h-8 mb-2" />
          <p className="font-semibold text-black">Locations</p>
          <div className="text-sm text-gray-500 mt-1 space-y-2">
            <p className="break-words">
              Sr. No. 136/10, Urulidevachi Saswad Hadapsar Road, Near Zhooms
              Hotel, Pune - 412308
            </p>
            <p className="break-words">
              Ground Floor, C-78/6, Kolvihire Road, Soma Nu Labs, Jejuri MIDC,
              Pune - 412303
            </p>
            <p className="break-words">
              No: 9 Adsul Mala Urulidevachi, Shivram Nagar near Pushpak Rooftop,
              Pune - 412308
            </p>
          </div>
        </div>

        {/* Work Time */}
        <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-[#FAF5EE] transition">
          <Clock className="text-[#A47551] w-8 h-8 mb-2" />
          <p className="font-semibold text-black">Work Time</p>
          <p className="text-sm text-gray-500 mt-1">Mon - Sat: 9AM - 7PM</p>
          <p className="text-sm text-gray-500 mt-1">Thursday-closed</p>
        </div>
      </div>

      {/* FORM + IMAGE */}
      <div className="grid md:grid-cols-2 gap-10 px-6 md:px-16 py-16 items-center bg-gradient-to-br from-[#FAF7F2] via-white to-[#F5F5F5] max-w-7xl mx-auto">
        {/* FORM */}
        <div
          className="backdrop-blur-xl bg-white/90 p-8 rounded-3xl shadow-2xl w-full max-w-lg mx-auto hover:shadow-[0_20px_40px_rgba(210,173,96,0.25)] transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#1A1A1A]">
            Let’s Talk
          </h2>
          <p className="text-gray-500 mb-6 text-sm md:text-base">
            Share your requirements and our experts will get back to you 🚀
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="peer w-full p-2 md:p-3 bg-transparent border-b-2 border-gray-300 focus:border-[#A47551] outline-none transition-all duration-300 placeholder-transparent"
                placeholder="Name"
              />
              <label className="absolute left-0 -top-3 text-gray-400 text-xs md:text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[#A47551]">
                Name
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="text"
                name="phone"
                required
                onChange={handleChange}
                className="peer w-full p-2 md:p-3 bg-transparent border-b-2 border-gray-300 focus:border-[#A47551] outline-none transition-all duration-300 placeholder-transparent"
                placeholder="Phone"
              />
              <label className="absolute left-0 -top-3 text-gray-400 text-xs md:text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[#A47551]">
                Phone
              </label>
            </div>

            {/* Email */}
            <div className="relative col-span-2">
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="peer w-full p-2 md:p-3 bg-transparent border-b-2 border-gray-300 focus:border-[#A47551] outline-none transition-all duration-300 placeholder-transparent"
                placeholder="Email"
              />
              <label className="absolute left-0 -top-3 text-gray-400 text-xs md:text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[#A47551]">
                Email
              </label>
            </div>

            {/* Subject */}
            <div className="relative col-span-2">
              <input
                type="text"
                name="subject"
                required
                onChange={handleChange}
                className="peer w-full p-2 md:p-3 bg-transparent border-b-2 border-gray-300 focus:border-[#A47551] outline-none transition-all duration-300 placeholder-transparent"
                placeholder="Subject"
              />
              <label className="absolute left-0 -top-3 text-gray-400 text-xs md:text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[#A47551]">
                Subject
              </label>
            </div>

            {/* Message */}
            <div className="relative col-span-2">
              <textarea
                name="message"
                rows="3"
                required
                onChange={handleChange}
                className="peer w-full p-2 md:p-3 bg-transparent border-b-2 border-gray-300 focus:border-[#A47551] outline-none transition-all duration-300 resize-none placeholder-transparent"
                placeholder="Message"
              ></textarea>
              <label className="absolute left-0 -top-3 text-gray-400 text-xs md:text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[#A47551]">
                Message
              </label>
            </div>
          </div>

          <button
            onClick={sendToWhatsApp}
            className="mt-6 w-full px-4 py-2 rounded-xl bg-black text-white font-semibold shadow-md hover:bg-[#D6AD60] hover:text-black transition-all duration-300 text-sm md:text-base"
          >
            Send Inquiry
          </button>
        </div>

        {/* IMAGE */}
        <div
          className="relative group max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D6AD60] to-[#A47551] rounded-3xl blur opacity-25 group-hover:opacity-50 transition"></div>

          <img
            src="/contact1.jpg"
            alt="contact"
            className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500 w-full h-[450px] object-cover"
          />

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-lg md:text-xl font-semibold">
              Luxury Interiors
            </h3>
            <p className="text-xs md:text-sm opacity-80">
              Designed for elegant living
            </p>
          </div>
        </div>
      </div>

      {/* MAPS FOR BOTH ADDRESSES */}
      <div className="px-6 md:px-20 py-12 space-y-12">
        {/* Uruli Devachi Map */}
        <div data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-4">
            Sr. No. 136/10, Urulidevachi Saswad Hadapsar Road, Near Zhooms
            Hotel, Pune - 412308
          </h3>
          <iframe
            src="https://www.google.com/maps?q=18.4870075,74.1389223&z=15&output=embed"
            className="w-full h-64 rounded-xl border"
            loading="lazy"
          ></iframe>
        </div>

        {/* Jejuri MIDC Map */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-semibold mb-4">
            Ground Floor, C-78/6, Kolvihire Road, Soma Nu Labs, Jejuri MIDC,
            Pune - 412303
          </h3>
          <iframe
            src="https://www.google.com/maps?q=18.280978,74.156874&z=15&output=embed"
            className="w-full h-64 rounded-xl border"
            loading="lazy"
          ></iframe>
        </div>

        {/* Adsul Mala Map */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-semibold mb-4">
            Vaibhav Furniture, Sr No: 9 Adsul Mala Urulidevachi, Shivram Nagar
            near Pushpak Rooftop, Pune - 412308
          </h3>

          <iframe
             src="https://www.google.com/maps?q=18.476582,74.130978&z=15&output=embed"
            className="w-full h-64 sm:h-72 md:h-80 rounded-xl border"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
