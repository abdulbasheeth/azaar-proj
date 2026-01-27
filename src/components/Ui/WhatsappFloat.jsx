import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const phoneNumber = "+971563150215";
  const message = "Hi there!";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-15 right-10
        w-14 h-14
        bg-green-500 text-white
        rounded-full
        flex justify-center items-center
        shadow-lg
        hover:scale-110 transition-transform
        z-50
      "
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
};

export default WhatsAppFloat;
