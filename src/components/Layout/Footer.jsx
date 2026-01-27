import React from "react";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../assets/Mechatron.png";

const quickLinks = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Services", href: "#Services" },
  { name: "Products", href: "#Products" },
  { name: "Facilities", href: "#Facilities" },
  { name: "Contact", href: "#contact" },
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 rounded-full"
            style={{
              borderColor: "rgba(0, 0, 139, 0.3)", // dark blue
              width: `${150 + i * 80}px`,
              height: `${150 + i * 80}px`,
              left: i % 2 === 0 ? `-${50 + i * 20}px` : 'auto',
              right: i % 2 === 1 ? `-${50 + i * 20}px` : 'auto',
              top: `${i * 15}%`,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}

        <svg className="absolute inset-0 w-full h-full opacity-5">
          <pattern id="circuit-footer" patternUnits="userSpaceOnUse" width="100" height="100">
            <path d="M0 50 L30 50 L40 30 L60 30 L70 50 L100 50" stroke="#00008B" fill="none" strokeWidth="1" />
            <path d="M50 0 L50 30 L30 40 L30 60 L50 70 L50 100" stroke="#00008B" fill="none" strokeWidth="1" />
            <circle cx="40" cy="30" r="3" fill="#00008B" />
            <circle cx="60" cy="70" r="3" fill="#00008B" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-footer)" />
        </svg>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: "#00008B", left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], y: [0, 20, 40] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeOut" }}
          />
        ))}

        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(#00008B 1px, transparent 1px),
              linear-gradient(90deg, #00008B 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">

    
             <img src={logo} alt="Logo" className="w-37 h-32 mb-5" />
             
            </div>
            <p className="text-white/60 mb-6 ">
              Your trusted partner for precision industrial manufacturing in Chennai, India. 
              ISO 9001:2015 certified with 24/7 production support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  No. 45, Industrial Estate, Ambattur, Chennai - 600058
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-white/60">+91 44262 51234</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-white/60">info@themechatron.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} THE MECHATRON. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-white/60 hover:text-blue-500 transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
