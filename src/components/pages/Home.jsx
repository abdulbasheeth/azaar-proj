import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getHomeData } from "../../api";
import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";

// Import images
import homeimg1 from "../../assets/homeimg1.jpg";
import homeimg2 from "../../assets/homeimg2.jpg";
import homeimg3 from "../../assets/homeimg3.jpg";
import homeimg4 from "../../assets/homeimg4.jpg";
import homeimg5 from "../../assets/homeimg5.jpg";

// Import 3D Gear directly
import GearModel3D from "../Ui/GearModel3D";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Fetch home data
  useEffect(() => {
    getHomeData()
      .then((res) => setData(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Background slideshow
  const images = [homeimg1, homeimg2, homeimg3, homeimg4, homeimg5];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll helper
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const yOffset = -80; // adjust for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Scroll to section if passed in location.state
  useEffect(() => {
    if (location.state?.scrollToSection) {
      scrollToSection(location.state.scrollToSection);
      // Remove state so scroll doesn't repeat on re-render
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, location.pathname, navigate]);

  // Scroll to Services button
  const scrollToServices = () => scrollToSection("#Services");

  // Navigate to Products
  const goToProductPage = () => {
    navigate("/products", { state: { scrollToProduct: true } });
  };

  if (loading) return <p className="text-white">Loading home data...</p>;

  return (
    <div className="relative w-full min-h-screen h-auto lg:h-screen" id="Home">
      {/* Background slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={images[currentImage]}
          className="w-full h-full object-cover transition-opacity duration-1000"
          alt="Home Background"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#122E4A] opacity-60" />

      {/* Main content */}
      <div className="relative pt-20 lg:pt-30 px-4 sm:px-6 lg:pl-10 lg:pr-[15px] z-[2] 
                     flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10 
                     min-h-screen lg:min-h-0">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 max-w-2xl lg:max-w-xl mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="border border-white p-2 rounded-3xl backdrop-blur-sm px-4 sm:px-5 text-white inline-block">
            <div className="flex gap-3 items-center justify-center text-center">
              <Shield className="w-5 h-5 text-[#3399FF]" />
              <p className="text-sm sm:text-base">ISO 9001:2015 Certified</p>
            </div>
          </div>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif mt-6 lg:mt-7">
            High Quality Products <br />
            <span className="text-[#3399FF] leading-1">Delivered Precisely</span>
          </h1>
          
          <p className="text-[#C0C6B9] text-lg sm:text-xl lg:text-2xl mt-4 lg:mt-5">
            We deliver precision-engineered, high-quality metal fabrication solutions including laser
            cutting, CNC machining, and industrial manufacturing services in Chennai, India. Trusted
            for accuracy, reliability, and on-time delivery.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-7">
             <button
              onClick={goToProductPage}
              className="inline-flex items-center justify-center gap-3 bg-[#0E7CE9] text-white px-4 sm:px-5 py-3 
                       text-lg sm:text-xl lg:text-2xl font-serif rounded-2xl hover:backdrop-blur-sm group 
                       flex-shrink-0"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </button>

            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-3 text-white px-4 sm:px-5 py-3 
                       text-lg sm:text-xl lg:text-2xl font-serif rounded-2xl
                       bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 
                       transition-colors group flex-shrink-0"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </button>
          </div>
        </motion.div>

        {/* Right 3D Gear - Hidden on mobile */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:w-[500px] h-[300px] lg:h-[500px] max-w-full lg:max-w-[500px] 
                      max-h-[300px] lg:max-h-[420px] relative lg:mr-10 mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-radial from-industrial-blue/20 via-transparent to-transparent rounded-full blur-3xl" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full"
            >
              <GearModel3D />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;