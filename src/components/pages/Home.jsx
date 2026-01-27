// Home.jsx
import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";

// Import images
import homeimg1 from "../../assets/homeimg1.jpg";
import homeimg2 from "../../assets/homeimg2.jpg";
import homeimg3 from "../../assets/homeimg3.jpg";
import homeimg4 from "../../assets/homeimg4.jpg";
import homeimg5 from "../../assets/homeimg5.jpg";

// Lazy load 3D gear component
const GearModel3D = lazy(() => import("../Ui/GearModel3D"));

const Home = () => {
  const images = [homeimg1, homeimg2, homeimg3, homeimg4, homeimg5];
  const [currentImage, setCurrentImage] = useState(0);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll to Services section
  const scrollToServices = () => {
    const element = document.querySelector("#Services");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen" id="Home">
      {/* Background slideshow */}
      <img
        src={images[currentImage]}
        className="w-full h-full object-cover transition-opacity duration-1000"
        alt="Home Background"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#122E4A] opacity-60" />

      {/* Overlay effects (gears, sparks, grid, etc.) */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {/* Add your motion effects here if needed */}
      </div>

      {/* Main content */}
      <div className="absolute inset-0 pt-40 pl-10 pr-[15px] z-[2] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <div className="border border-white p-2 rounded-3xl backdrop-blur-sm px-5 text-white inline-block">
            <div className="flex gap-3 items-center justify-center text-center">
              <Shield className="w-5 h-5 text-[#3399FF]" />
              <p>ISO 9001:2015 Certified</p>
            </div>
          </div>

          <h1 className="text-white text-5xl font-serif mt-7">
            Precised and Quality <br />
            <span className="text-[#3399FF]">Products Delivered</span>
          </h1>
          <p className="text-[#C0C6B9] text-2xl mt-5">
            Your trusted partner for precision metal fabrication, laser cutting,
            CNC machining, and industrial manufacturing solutions in Chennai, India.
          </p>

          <div className="flex mt-5 gap-10 flex-wrap">
            <div className="inline-flex items-center gap-3 bg-[#0E7CE9] text-white px-5 py-3 text-2xl font-serif rounded-2xl mt-5">
              <a href="#Contact" className="hover:backdrop-blur-sm">
                Request a Quote
              </a>
              <ArrowRight />
            </div>

            <div className="inline-flex items-center gap-3 text-white py-3 px-5 mt-5 text-2xl font-serif rounded-2xl">
              <button
                onClick={scrollToServices}
                className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/20 transition-colors"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>

        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.1, delay: 0 }} // Faster animation
  className="flex-1 w-[500px] h-[500px] max-w-[500px] max-h-[420px] relative mr-5"
>
  {/* Gradient behind gear */}
  <div className="absolute inset-0 bg-gradient-radial from-industrial-blue/20 via-transparent to-transparent rounded-full blur-3xl" />

  {/* 3D Gear */}
  <Suspense
    fallback={
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-industrial-glow/30 border-t-industrial-glow rounded-full animate-spin" />
      </div>
    }
  >
    <GearModel3D />
  </Suspense>
</motion.div>

      </div>

      
    </div>
  );
};

export default Home;
