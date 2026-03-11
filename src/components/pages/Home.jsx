import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getHomeData } from "../../api";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import homeimg1 from "../../assets/homeimg1.jpg";
import homeimg2 from "../../assets/homeimg2.jpg";
import homeimg3 from "../../assets/homeimg3.jpg";
import homeimg4 from "../../assets/homeimg4.jpg";
import homeimg5 from "../../assets/homeimg5.jpg";
import homeimg6 from "../../assets/homeimg6.jpg";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Image array
  const images = [homeimg1, homeimg4, homeimg2, homeimg3, homeimg5, homeimg6];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
        delayChildren: 0.3,  // Initial delay
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 1, ease: "easeIn" } },
  };

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
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Increased slightly to account for animation time
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual Navigation Functions
  const goToNext = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const goToPrev = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

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
      {/* Background slideshow with AnimatePresence */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={images[currentImage]}
              className="w-full h-full object-cover"
              alt={`Home Background ${currentImage + 1}`}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 z-20" />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#122E4A] opacity-60 z-30" />

      {/* Navigation Arrows - Kept only for Windows/Desktop (Removed on Mobile) */}
      {!isMobile && (
        <div className="absolute inset-y-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-2 pointer-events-none">
          {/* Left Arrow */}
          <motion.button
            onClick={goToPrev}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(51, 153, 255, 0.8)" }}
            whileTap={{ scale: 0.9 }}
            className="p-2 sm:p-3 bg-black/30 backdrop-blur-sm rounded-full text-white transition-colors pointer-events-auto"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={goToNext}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(51, 153, 255, 0.8)" }}
            whileTap={{ scale: 0.9 }}
            className="p-2 sm:p-3 bg-black/30 backdrop-blur-sm rounded-full text-white transition-colors pointer-events-auto"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.button>
        </div>
      )}

      {/* Main content */}
      <div className="relative pt-20 lg:pt-30 px-4 sm:px-6 lg:pl-22 lg:pr-10 z-[40] 
                     flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10 
                     min-h-screen lg:min-h-0">
        
        {/* Left Content - Added Stagger Animation */}
        <motion.div
          className="flex-1 max-w-2xl lg:max-w-xl mt-8 lg:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="border border-white p-2 rounded-3xl backdrop-blur-sm px-4 sm:px-5 text-white inline-block"
          >
            <div className="flex gap-3 items-center justify-center text-center">
              <Shield className="w-5 h-5 text-[#3399FF]" />
              <p className="text-sm sm:text-base">ISO 9001:2015 Certified</p>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-serif mt-6 lg:mt-7"
          >
            High Quality Products <br />
            <span className="text-[#3399FF] leading-1">Delivered Precisely</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-white text-lg sm:text-xl lg:text-2xl mt-4 lg:mt-5"
          >
            We deliver precision-engineered, high-quality metal fabrication solutions including laser
            cutting, CNC machining, and industrial manufacturing services in Chennai, India. Trusted
            for accuracy, reliability, and on-time delivery.
          </motion.p>

          {/* Buttons Row */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-7"
          >
            <motion.button
              onClick={goToProductPage}
              whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px rgba(14, 124, 233, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 bg-[#0E7CE9] text-white px-4 sm:px-5 py-3 
                       text-lg sm:text-xl lg:text-2xl font-serif rounded-2xl group flex-shrink-0"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </motion.button>

            <motion.button
              onClick={scrollToServices}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 text-white px-4 sm:px-5 py-3 
                       text-lg sm:text-xl lg:text-2xl font-serif rounded-2xl
                       bg-white/10 backdrop-blur-sm border border-white/20 transition-colors group flex-shrink-0"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;