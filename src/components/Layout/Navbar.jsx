import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/Meekaniq.png";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleProductsClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#f5f5f5] h-20 font-serif shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between h-full px-4 lg:px-6">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-24 h-20 object-contain" />
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-gray-700 font-medium text-center items-center mx-auto">
          <li>
            <button onClick={() => scrollToSection("Home")} className="hover:text-[#0D3773] transition-colors">Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("About")} className="hover:text-[#0D3773] transition-colors">About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("Services")} className="hover:text-[#0D3773] transition-colors">Services</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("Facilities")} className="hover:text-[#0D3773] transition-colors">Facilities</button>
          </li>
          <li>
            <Link to="/products" className="hover:text-[#0D3773] transition-colors">Products</Link>
          </li>
          <li>
            <button onClick={() => scrollToSection("Contact")} className="hover:text-[#0D3773] transition-colors">Contact</button>
          </li>
        </ul>

        {/* Right: Desktop Get Quote Button */}
        <div className="hidden lg:block">
          <button onClick={() => scrollToSection("Contact")}>
            <span className="bg-[#0D3773] text-white px-4 py-2 rounded-lg hover:bg-[#09295a] transition-colors duration-300">
              Get Quote
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "visible" : "invisible"
          }`}
          style={{ zIndex: 60 }}
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Mobile Menu Panel - Dark Theme for Better Contrast */}
          <div
            className={`absolute top-0 rounded-2xl right-0 h-full w-64 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(15, 25, 45, 0.95)", // Dark blue background
              backdropFilter: "blur(12px) saturate(180%)",
              WebkitBackdropFilter: "blur(12px) saturate(180%)",
              borderLeft: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4 pb-4 border-b border-white/10">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img src={logo} alt="Logo" className="w-25 h-25 object-contain" />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl hover:text-[#4dabf7] transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mobile Menu Items - White Text for Better Contrast */}
            <ul className="flex flex-col p-6 space-y-2 ">
              <li>
                <button
                  onClick={() => scrollToSection("Home")}
                  className="w-full text-left text-white hover:text-[#4dabf7] transition-all py-3 px-4 font-medium hover:bg-white/10 rounded-lg active:bg-white/15"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("About")}
                  className="w-full text-left text-white hover:text-[#4dabf7] transition-all py-3 px-4 font-medium hover:bg-white/10 rounded-lg active:bg-white/15"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("Services")}
                  className="w-full text-left text-white hover:text-[#4dabf7] transition-all py-3 px-4 font-medium hover:bg-white/10 rounded-lg active:bg-white/15"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("Facilities")}
                  className="w-full text-left text-white hover:text-[#4dabf7] transition-all py-3 px-4 font-medium hover:bg-white/10 rounded-lg active:bg-white/15"
                >
                  Facilities
                </button>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={handleProductsClick}
                  className="block text-white hover:text-[#4dabf7] transition-all py-3 px-4 font-medium hover:bg-white/10 rounded-lg active:bg-white/15"
                >
                  Products
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("Contact")}
                  className="w-full text-left text-white hover:text-[#4dabf7] transition-all py-3 px-4 font-medium hover:bg-white/10 rounded-lg active:bg-white/15"
                >
                  Contact
                </button>
              </li>
            </ul>

            {/* Mobile Get Quote Button */}
            <div className="absolute bottom-6 left-6 right-6">
              <button
                onClick={() => scrollToSection("Contact")}
                className="w-full"
              >
                <span 
                  className="block text-white text-center px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, rgba(77, 171, 247, 0.9), rgba(13, 55, 115, 0.9))",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 4px 15px rgba(77, 171, 247, 0.4)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(77, 171, 247, 0.95), rgba(13, 55, 115, 0.95))";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(77, 171, 247, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(77, 171, 247, 0.9), rgba(13, 55, 115, 0.9))";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(77, 171, 247, 0.4)";
                  }}
                >
                  Get Quote
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;