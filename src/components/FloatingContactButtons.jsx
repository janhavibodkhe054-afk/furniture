import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <>
      <style>
        {`
          @keyframes floatPulse {
            0%, 100% { transform: translateY(0); box-shadow: 0 8px 20px rgba(0,0,0,0.18); }
            50% { transform: translateY(-6px); box-shadow: 0 16px 32px rgba(0,0,0,0.28); }
          }

          .float-btn {
            animation: floatPulse 2.5s ease-in-out infinite;
          }

          .float-btn:hover {
            animation: none;
          }

          /* Call Button Gradient & Glow */
          .phone-btn {
            background: linear-gradient(135deg, #FFD700, #FFA500);
          }

          .phone-btn:hover {
            background: linear-gradient(135deg, #FFC93C, #FF8C00);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.7);
          }

          /* WhatsApp Button Gradient & Glow */
          .whatsapp-btn {
            background: linear-gradient(135deg, #25D366, #128C7E);
          }

          .whatsapp-btn:hover {
            background: linear-gradient(135deg, #34e89e, #0f9b58);
            box-shadow: 0 0 20px rgba(0, 200, 83, 0.6);
          }
        `}
      </style>

      <div className="fixed inset-y-0 z-[9999] pointer-events-none">

        {/* LEFT CALL */}
        <a
  href="tel:+917350605454"
  className="float-btn phone-btn pointer-events-auto fixed left-4 bottom-6
  w-14 h-14 sm:w-16 sm:h-16 rounded-full
  text-white shadow-xl
  flex items-center justify-center
  transition-all duration-300 hover:scale-110 hover:-translate-y-1"
  style={{
    background: "linear-gradient(135deg, #FF0000, #FF4C4C)"
  }}
>
  <FaPhoneAlt className="text-lg sm:text-xl" />
</a>

        {/* RIGHT WHATSAPP */}
        <a
          href="https://wa.me/917350605454"
          target="_blank"
          rel="noreferrer"
          className="float-btn whatsapp-btn pointer-events-auto fixed right-4 bottom-6
          w-14 h-14 sm:w-16 sm:h-16 rounded-full
          text-white shadow-xl
          flex items-center justify-center
          transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <FaWhatsapp className="text-xl sm:text-2xl" />
        </a>
      </div>
    </>
  );
}