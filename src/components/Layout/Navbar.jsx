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
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const handleProductsClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#f5f5f5] h-20 font-serif shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between h-full px-4 lg:px-8">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img 
              src={logo} 
              alt="Meekaniq Logo" 
              className="w-auto h-16 object-contain"
            />
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-gray-700 font-medium items-center mx-auto">
          <li>
            <button 
              onClick={() => scrollToSection("Home")} 
              className="hover:text-[#0D3773] transition-colors duration-300 text-lg"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection("About")} 
              className="hover:text-[#0D3773] transition-colors duration-300 text-lg"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection("Services")} 
              className="hover:text-[#0D3773] transition-colors duration-300 text-lg"
            >
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection("Facilities")} 
              className="hover:text-[#0D3773] transition-colors duration-300 text-lg"
            >
              Facilities
            </button>
          </li>
          <li>
            <Link 
              to="/products" 
              className="hover:text-[#0D3773] transition-colors duration-300 text-lg"
            >
              Products
            </Link>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection("Contact")} 
              className="hover:text-[#0D3773] transition-colors duration-300 text-lg"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Right: Desktop Get Quote Button */}
        <div className="hidden lg:block">
          <button 
            onClick={() => scrollToSection("Contact")}
            className="bg-[#0D3773] text-white px-6 py-2.5 rounded-lg hover:bg-[#09295a] transition-all duration-300 hover:shadow-lg"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "visible bg-black/30" : "invisible"
          }`}
          style={{ zIndex: 60 }}
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Mobile Menu Panel */}
          <div
            className={`absolute top-0 right-0 h-full w-80 sm:w-96 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(135deg, rgba(13, 55, 115, 0.98) 0%, rgba(9, 41, 90, 0.98) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/20">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={logo} 
                  alt="Meekaniq Logo" 
                  className="w-auto h-12 object-contain"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl hover:text-[#4dabf7] transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <ul className="flex flex-col p-6 space-y-1">
              <li>
                <button
                  onClick={() => scrollToSection("Home")}
                  className="w-full text-left text-white hover:text-[#4dabf7] transition-all py-4 px-6 text-lg font-medium hover:bg-white/10 rounded-xl active:bg-white/15 flex items-center"
                >
                  <span className="mr-3">🏠</span> Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("About")}
                  className="w-full text-left text-white hover:text-[#4dabf7] transition-all py-4 px-6 text-lg font-medium hover:bg-white/10 rounded-xl active:bg-white/15 flex items-center"
                >
                  <span className="mr-3">ℹ️</span> About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("Services")}
                  className="w-full text-left text-white hover:text-[#4dabf7] transition-all py-4 px-6 text-lg font-medium hover:bg-white/10 rounded-xl active:bg-white/15 flex items-center"
                >
                  <span className="mr-3">🛠️</span> Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("Facilities")}
                  className="w-full text-left text-white hover:text-[#4dabf7] transition-all py-4 px-6 text-lg font-medium hover:bg-white/10 rounded-xl active:bg-white/15 flex items-center"
                >
                  <span className="mr-3">🏭</span> Facilities
                </button>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={handleProductsClick}
                  className="block text-white hover:text-[#4dabf7] transition-all py-4 px-6 text-lg font-medium hover:bg-white/10 rounded-xl active:bg-white/15 flex items-center"
                >
                  <span className="mr-3">📦</span> Products
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("Contact")}
                  className="w-full text-left text-white hover:text-[#4dabf7] transition-all py-4 px-6 text-lg font-medium hover:bg-white/10 rounded-xl active:bg-white/15 flex items-center"
                >
                  <span className="mr-3">📞</span> Contact
                </button>
              </li>
            </ul>

            {/* Mobile Get Quote Button */}
            <div className="absolute bottom-8 left-6 right-6">
              <button
                onClick={() => {
                  scrollToSection("Contact");
                  setIsMenuOpen(false);
                }}
                className="w-full group"
              >
                <span 
                  className="block text-white text-center px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl transform group-hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(135deg, #4dabf7 0%, #0D3773 100%)",
                    boxShadow: "0 4px 15px rgba(77, 171, 247, 0.4)"
                  }}
                >
                  Get Free Quote
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