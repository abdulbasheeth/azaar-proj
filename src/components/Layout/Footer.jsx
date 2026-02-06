import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import logo2 from "../../assets/Meekaniq.png"

const quickLinks = [
  { name: "Home", href: "#Home", page: "/" },
  { name: "About", href: "#About", page: "/" },
  { name: "Services", href: "#Services", page: "/" },
  { name: "Products", href: "#products", page: "/products" },
  { name: "Facilities", href: "#Facilities", page: "/" },
  { name: "Contact", href: "#Contact", page: "/" },
];

const services = [
  "Laser Cutting",
  "CNC Folding",
  "NC Shearing",
  "Milling & Drilling",
  "Welding",
  "Fabrication",
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNavigation = (link) => {
    if (location.pathname !== link.page) {
      navigate(link.page, { state: { scrollToSection: link.href } });
    } else {
      scrollToSection(link.href);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900"></div>
      
      {/* Subtle Overlay Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(45deg, #1e293b 25%, transparent 25%),
                           linear-gradient(-45deg, #1e293b 25%, transparent 25%),
                           linear-gradient(45deg, transparent 75%, #1e293b 75%),
                           linear-gradient(-45deg, transparent 75%, #1e293b 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}
      ></div>

      {/* Animated Background - Responsive adjustments */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 rounded-full"
            style={{
              borderColor: "rgba(59, 130, 246, 0.2)",
              width: `${150 + i * 80}px`,
              height: `${150 + i * 80}px`,
              left: i % 2 === 0 ? `-${50 + i * 20}px` : "auto",
              right: i % 2 === 1 ? `-${50 + i * 20}px` : "auto",
              top: `${i * 15}%`,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}

        <svg className="absolute inset-0 w-full h-full opacity-10">
          <pattern id="circuit-footer" patternUnits="userSpaceOnUse" width="100" height="100">
            <path d="M0 50 L30 50 L40 30 L60 30 L70 50 L100 50" stroke="#3b82f6" fill="none" strokeWidth="1" />
            <path d="M50 0 L50 30 L30 40 L30 60 L50 70 L50 100" stroke="#3b82f6" fill="none" strokeWidth="1" />
            <circle cx="40" cy="30" r="3" fill="#3b82f6" />
            <circle cx="60" cy="70" r="3" fill="#3b82f6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-footer)" />
        </svg>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: "#3b82f6",
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: [0, 20, 40] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Company Info - Full width on mobile, spans 2 columns on tablet, 1 on desktop */}
          <div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <img
                src={logo2}
                alt="Logo"
                className="w-32 h-28 md:w-36 md:h-32 mb-4 md:mb-5"
              />
              <div className="text-white/80 max-w-md">
                <h2 className="font-bold text-xl md:text-2xl mb-2 md:mb-3 text-white">
                  Precision, Quality, Reliability.
                </h2>
                <p className="text-sm md:text-base mt-3 md:mt-5 text-white/70">
                  ISO 9001:2015 certified industrial manufacturing partner in Chennai,
                  India with 24/7 production support.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links & Services - Responsive grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-10 lg:col-span-2 lg:grid-cols-2">
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-lg mb-4 md:mb-6 text-white">Quick Links</h3>
              <ul className="space-y-2 md:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavigation(link)}
                      className="text-white/70 hover:text-blue-400 transition-colors duration-300 text-sm md:text-base whitespace-nowrap hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-center md:text-left">
              <h3 className="font-display font-bold text-lg mb-4 md:mb-6 text-white">Services</h3>
              <ul className="space-y-2 md:space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/70 text-sm md:text-base hover:text-blue-400 transition-colors duration-300 cursor-default">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact - Full width on mobile, spans 2 columns on tablet, 1 on desktop */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="max-w-sm mx-auto md:mx-0">
              <h3 className="font-display font-bold text-lg mb-4 md:mb-6 text-center md:text-left text-white">
                Contact
              </h3>
              <ul className="space-y-3 md:space-y-4 ml-[80px] md:ml-0">
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 flex justify-center">
                    <MapPin className="w-full h-full text-blue-400" />
                  </div>
                  <span className="text-white/70 text-sm md:text-base flex-1 text-left hover:text-white transition-colors duration-300">
                    No. 45, Industrial Estate, Ambattur <span className="block md:inline">Chennai - 600058</span>
                  </span>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 md:w-5 md:h-5 flex justify-center">
                    <Phone className="w-full h-full text-blue-400" />
                  </div>
                  <span className="text-white/70 text-sm md:text-base flex-1 text-left hover:text-white transition-colors duration-300">
                    +91 44262 51234
                  </span>
                </li>
                <li className="flex items-center gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 md:w-5 md:h-5 flex justify-center">
                    <Mail className="w-full h-full text-blue-400" />
                  </div>
                  <span className="text-white/70 text-sm md:text-base flex-1 text-left hover:text-white transition-colors duration-300">
                    info@themechatron.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 relative z-10 bg-gradient-to-r from-blue-900/20 to-slate-900/20">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-white text-center sm:text-left order-2 sm:order-1">
            © {new Date().getFullYear()} Mr.Mekaniq. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs md:text-sm text-white hover:text-blue-400 transition-colors duration-300 hover:bg-white/5 px-3 py-1.5 rounded-lg order-1 sm:order-2 mb-2 sm:mb-0"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;