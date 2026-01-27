import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/Mechatron.png";
import { Phone } from "lucide-react";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Function to handle scroll to section with offset
    const handleScroll = (id, path = "/") => {
        if (location.pathname !== path) {
            // Navigate to target path and pass section ID
            navigate(path, { state: { scrollToId: id } });
        } else {
            // Scroll on current page
            const element = document.getElementById(id);
            if (element) {
                const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
                const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    };

    return (
        <nav className="bg-[#f5f5f5] h-20 font-serif shadow-md rounded-none fixed w-full z-50">
            <div className="container mx-auto flex items-center justify-between h-full px-6">

                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-24 h-20 object-contain" />
                </Link>

                {/* Menu */}
                <ul className="flex gap-8 text-gray-700 font-medium">
                    <li>
                        <button
                            onClick={() => handleScroll("Home", "/")}
                            className="relative hover:text-[#0D3773] transition-colors duration-300 after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#0D3773] hover:after:w-full after:transition-all after:duration-300"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("About", "/")}
                            className="relative hover:text-[#0D3773] transition-colors duration-300 after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#0D3773] hover:after:w-full after:transition-all after:duration-300"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("Services", "/")}
                            className="relative hover:text-[#0D3773] transition-colors duration-300 after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#0D3773] hover:after:w-full after:transition-all after:duration-300"
                        >
                            Services
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScroll("Facilities", "/")}
                            className="relative hover:text-[#0D3773] transition-colors duration-300 after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#0D3773] hover:after:w-full after:transition-all after:duration-300"
                        >
                            Facilities
                        </button>
                    </li> 

                    <button
                        onClick={() => handleScroll("Products", "/")}
                        className="relative hover:text-[#0D3773] ..."
                    >
                        Products
                    </button>
                    <li>


                        <button
                            onClick={() => handleScroll("Contact", "/")}
                            className="relative hover:text-[#0D3773] transition-colors duration-300 after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#0D3773] hover:after:w-full after:transition-all after:duration-300"
                        >
                            Contact
                        </button>
                    </li>
                </ul>

                {/* Contact Button */}
                <div className="flex items-center gap-4">
                    <Phone size={27} className="text-[#0D3773]" />
                    <button
                        onClick={() => handleScroll("Contact", "/")}
                        className="bg-[#0D3773] text-white px-4 py-2 rounded-lg hover:bg-[#09295a] transition-colors duration-300"
                    >
                        Get Quote
                    </button>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
