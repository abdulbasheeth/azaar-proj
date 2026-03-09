import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getHomeData } from "../../api";
import { motion } from "framer-motion";
import { Shield, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import homeimg1 from "../../assets/homeimg1.jpg";
import homeimg2 from "../../assets/homeimg2.jpg";
import homeimg3 from "../../assets/homeimg3.jpg";
import homeimg4 from "../../assets/homeimg4.jpg";
import homeimg5 from "../../assets/homeimg5.jpg";
import homeimg6 from "../../assets/homeimg6.jpg";

// Import 3D Gear
import GearModel3D from "../Ui/GearModel3D";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [previousImage, setPreviousImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Image array
  const images = [homeimg1, homeimg4, homeimg2, homeimg3, homeimg5, homeimg6];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
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
  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  // Manual Navigation Functions
  const goToNext = () => {
    setPreviousImage(currentImage);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setPreviousImage(currentImage);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Scroll helpers
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    if (location.state?.scrollToSection) {
      scrollToSection(location.state.scrollToSection);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, location.pathname, navigate]);

  const scrollToServices = () => scrollToSection("#Services");
  const goToProductPage = () => navigate("/products", { state: { scrollToProduct: true } });

  if (loading) return <p className="text-white">Loading home data...</p>;

  return (
    <div className="relative w-full min-h-screen h-auto lg:h-screen" id="Home">
      {/* Background slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage
                ? "opacity-100 z-10"
                : index === previousImage
                ? "opacity-0 z-0"
                : "opacity-0 z-0"
            }`}
          >
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`Home Background ${index + 1}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 z-20" />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#122E4A] opacity-60 z-30" />

      {/* Navigation Arrows - Kept only for Windows/Desktop (Removed on Mobile) */}
      {!isMobile && (
        <div className="absolute inset-y-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-2 pointer-events-none">
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            className="p-2 sm:p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-[#3399FF]/80 transition-all pointer-events-auto"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="p-2 sm:p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-[#3399FF]/80 transition-all pointer-events-auto"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      )}

      {/* Main content - Added padding to left (pl-20) and right (pr-10) to clear arrows if needed on desktop */}
      <div className="relative pt-20 lg:pt-30 px-4 sm:px-6 lg:pl-22 lg:pr-10 z-[40] 
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
          
          <p className="text-white text-lg sm:text-xl lg:text-2xl mt-4 lg:mt-5">
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

        {/* Right 3D Gear - hidden on mobile */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full lg:w-[500px] h-[300px] lg:h-[500px] max-w-full lg:max-w-[500px] 
                      max-h-[300px] lg:max-h-[420px] relative lg:mr-16 mt-8 lg:mt-0"
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