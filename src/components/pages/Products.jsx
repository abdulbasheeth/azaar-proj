import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";



// Product images
import rooftopStandard from "../../assets/product-rooftop-standard.jpg";
import groundMount from "../../assets/product-ground-mount.jpg";
import cablePerforated from "../../assets/product-cable-perforated.jpg";
import panelBox from "../../assets/product-panel-box.jpg";

const previewProducts = [
  {
    title: "Roof Top Structure - Standard",
    description:
      "Pre-engineered mounting structures for standard rooftop solar installations.",
    image: rooftopStandard,
  },
  {
    title: "Ground Mount Structure",
    description:
      "Heavy-duty ground mounting systems for solar farms and open installations.",
    image: groundMount,
  },
  {
    title: "Cable Tray - Perforated",
    description:
      "Perforated cable trays for industrial cable management with ventilation.",
    image: cablePerforated,
  },
  {
    title: "Control Panel Box",
    description:
      "Custom electrical enclosures with IP55/IP65 protection ratings.",
    image: panelBox,
  },
];




const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const handleViewGallery = () => {
    navigate("/Products", { state: { scrollToGallery: true } });
  };

  return (
    <section id="Products" className="py-10 -mt-13 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-[0.04]"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: i % 2 === 0 ? `${-5 + i * 3}%` : "auto",
              right: i % 2 === 1 ? `${-3 + i * 2}%` : "auto",
              top: `${5 + i * 18}%`,
            }}
            animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
              <path
                d="M50 5 L58 18 L72 12 L70 28 L88 30 L78 42 L92 52 L78 60 L88 72 L70 72 L72 88 L58 82 L50 95 L42 82 L28 88 L30 72 L12 72 L22 60 L8 52 L22 42 L12 30 L30 28 L28 12 L42 18 Z"
                fill="currentColor"
              />
              <circle cx="50" cy="50" r="18" fill="hsl(var(--background))" />
              <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline p-2 rounded-2xl text-[#1484F4] px-5  bg-[#D8E1EA]">
            Our Products
          </span>

          <h2 className="text-3xl md:text-4xl mt-8 lg:text-5xl font-display font-bold mb-6">
            Quality Products for <span className="text-primary">Solar Industry</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-6 text-gray-500">
            Complete range of solar mounting structures, cable management
            systems, and electrical enclosures manufactured to international
            quality standards.
          </p>

          <button
            onClick={handleViewGallery}
            className="bg-[#0D3773] text-white px-4 py-2 rounded-lg hover:bg-[#09295a] transition-colors duration-300"
          >
            View Full Gallery →
          </button>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-card rounded-2xl  border-gray-400 overflow-hidden shadow-industrial hover:shadow-industrial-lg transition-all duration-300 border border-border"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted border-gray-300">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-[#1484F4]">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 text-gray-600">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
