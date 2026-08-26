import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const message = 'Hello CraftCore, I would like to inquire about your IT services.';
  const whatsappUrl = `https://wa.me/919898711229?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Chat on WhatsApp about IT Infrastructure"
    >
      <FaWhatsapp className="whatsapp-float-icon" />
    </a>
  );
};

export default WhatsAppFloat;