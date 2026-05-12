import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Whatsapp.css";

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-wrapper">
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton;