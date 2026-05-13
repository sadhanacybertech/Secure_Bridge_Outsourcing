import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css";

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-wrapper">
      <a
        href="https://wa.me/919873251672"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton;