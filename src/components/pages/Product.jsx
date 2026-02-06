import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Filter } from "lucide-react";
import { Button } from "../Ui/button";
import Navbar from "../Layout/Navbar";

// Import local product images
import rooftopStandard from "../../assets/product-rooftop-standard.jpg";
import rooftopElevated from "../../assets/product-rooftop-elevated.jpg";
import rooftopStructure from "../../assets/product-rooftop-structure.jpg";
import groundMount from "../../assets/product-ground-mount.jpg";
import carport from "../../assets/product-carport.jpg";
import inverterStand from "../../assets/product-inverter-stand.jpg";
import cablePerforated from "../../assets/product-cable-perforated.jpg";
import cableLadder from "../../assets/product-cable-ladder.jpg";
import panelBox from "../../assets/product-panel-box.jpg";
import walkway from "../../assets/product-walkway.jpg";
import clamps from "../../assets/product-clamps.jpg";
import accessories from "../../assets/product-accessories.jpg";

// Product data with full descriptions and categories
const products = [
  { 
    id: "rooftop-standard", 
    title: "Roof Top Structure - Standard", 
    description: "Our pre-engineered standard rooftop mounting structures are designed for efficient solar installations with optimal tilt angles. Made from high-grade galvanized steel with corrosion-resistant coating, these structures ensure long-term durability and stability. Features include easy installation, adjustable tilt angles from 10° to 30°, and compatibility with all major solar panel brands. Perfect for residential and commercial applications with standard roof types including RCC, metal sheets, and asbestos.", 
    category: "Solar Structures",
    image: rooftopStandard 
  },
  { 
    id: "rooftop-elevated", 
    title: "Roof Top Structure - Elevated", 
    description: "Elevated mounting systems specifically designed for flat roofs to achieve optimal panel orientation and maximum energy generation. These structures provide sufficient clearance for maintenance access and improved air circulation beneath panels. Constructed from hot-dip galvanized steel with powder coating for enhanced weather resistance. The modular design allows for easy expansion and accommodates various load capacities. Ideal for commercial buildings, factories, and institutions with flat roof surfaces.", 
    category: "Solar Structures",
    image: rooftopElevated 
  },
  { 
    id: "rooftop-customized", 
    title: "Roof Top Structure - Customized", 
    description: "Bespoke rooftop solutions engineered for unique architectural requirements and complex roof profiles. Our custom design team works with clients to create structures that accommodate challenging roof shapes, limited space, and specific load requirements. Each customized solution undergoes structural analysis and wind load testing to ensure safety and compliance with local building codes. Perfect for heritage buildings, architectural landmarks, and industrial facilities with non-standard roof configurations.", 
    category: "Solar Structures",
    image: rooftopStructure 
  },
  { 
    id: "ground-mount", 
    title: "Ground Mount Structure", 
    description: "Heavy-duty ground mounting systems engineered for solar farms and open field installations. These robust structures feature deep foundation options including concrete piers, helical piles, and ground screws suitable for various soil conditions. The adjustable tilt and azimuth mechanisms allow for seasonal optimization of solar panel orientation. Designed to withstand extreme weather conditions with wind speeds up to 150 km/h. Complete with anti-corrosion treatment and available in fixed, seasonal adjustable, and tracking configurations.", 
    category: "Solar Structures",
    image: groundMount 
  },
  { 
    id: "carport", 
    title: "Car Port Structure", 
    description: "Dual-purpose solar carport structures that combine covered parking with renewable energy generation. These innovative structures feature sleek designs with integrated solar panels that provide shade for vehicles while producing clean electricity. Made from structural steel with powder coating in various colors to match building aesthetics. Includes integrated drainage systems, lighting options, and EV charging station compatibility. Ideal for corporate campuses, shopping malls, residential complexes, and public parking facilities seeking sustainable infrastructure solutions.", 
    category: "Solar Structures",
    image: carport 
  },
  { 
    id: "inverter-stand", 
    title: "Inverter Mounting Stand", 
    description: "Sturdy galvanized steel mounting stands specifically designed for solar inverters and electrical equipment. These stands provide proper ventilation clearance, cable management provisions, and protection from ground-level moisture. Features include adjustable height options, locking mechanisms for security, and pre-drilled holes for easy installation. Suitable for both indoor and outdoor applications with optional weatherproof enclosures. Compatible with all major inverter brands and available in single and multi-inverter configurations for system scalability.", 
    category: "Electrical",
    image: inverterStand 
  },
  { 
    id: "cable-perforated", 
    title: "Cable Tray - Perforated", 
    description: "High-quality perforated cable trays designed for organized industrial cable management with excellent ventilation and heat dissipation. Manufactured from pre-galvanized steel with additional powder coating for superior corrosion resistance. The perforated design allows for better air circulation, reducing cable temperature and extending cable life. Features include smooth edges for safe cable installation, high load-bearing capacity, and easy cutting for custom lengths. Available in various widths, depths, and finishes to suit different installation requirements and aesthetic preferences.", 
    category: "Cable Management",
    image: cablePerforated 
  },
  { 
    id: "cable-ladder", 
    title: "Cable Tray - Ladder Type", 
    description: "Heavy-duty ladder-type cable trays engineered for high-capacity power and data cable routing in industrial applications. Constructed from hot-dip galvanized steel with welded rungs for maximum strength and durability. The open design provides excellent cable visibility, ventilation, and accessibility for maintenance. Features include integrated grounding provisions, fire-resistant properties, and compatibility with various accessories like covers, dividers, and mounting brackets. Ideal for data centers, power plants, manufacturing facilities, and commercial buildings requiring robust cable management solutions.", 
    category: "Cable Management",
    image: cableLadder 
  },
  { 
    id: "panel-box", 
    title: "Control Panel Box", 
    description: "Custom electrical enclosures and control panel boxes manufactured with IP55/IP65 protection ratings for harsh industrial environments. These robust enclosures feature stainless steel or powder-coated mild steel construction with silicone gaskets for complete dust and water ingress protection. Includes transparent covers for meter visibility, internal mounting plates, cable gland provisions, and lockable doors for security. Available in wall-mounted, floor-standing, and pole-mounted configurations with custom cutouts and branding options. Suitable for solar combiner boxes, distribution panels, and automation control systems.", 
    category: "Electrical",
    image: panelBox 
  },
  { 
    id: "walkway", 
    title: "Metal Roof Walkway", 
    description: "Safety walkway systems with anti-slip grating specifically designed for maintenance access on metal rooftops with solar installations. These walkways provide safe passage for technicians while protecting the roof surface from damage. Constructed from galvanized steel or aluminum with serrated grating surfaces that provide traction even in wet conditions. Features include easy bolt-on installation, adjustable support legs, and compatibility with various roof profiles. Includes handrail options and transition plates for connecting multiple roof sections. Essential for large commercial and industrial solar installations requiring regular maintenance access.", 
    category: "Accessories",
    image: walkway 
  },
  { 
    id: "clamps", 
    title: "Solar Mounting Clamps", 
    description: "Precision-engineered aluminum and stainless steel clamps for secure solar panel mounting on all types of structures. Our comprehensive range includes mid clamps, end clams, corner clamps, and specialized clamps for frameless panels. Manufactured from high-grade aluminum alloy 6005-T5 with anodized finish or stainless steel 304/316 for coastal applications. Features include integrated rubber padding to prevent panel damage, self-locking mechanisms, and compatibility with various rail systems. Each clamp undergoes rigorous testing for pull-out strength, wind load resistance, and long-term durability in extreme weather conditions.", 
    category: "Accessories",
    image: clamps 
  },
  { 
    id: "accessories", 
    title: "Accessories & Fasteners", 
    description: "Complete range of high-quality accessories and fasteners for solar mounting systems including stainless steel and galvanized iron bolts, nuts, washers, L-brackets, U-brackets, and specialized mounting hardware. All fasteners are manufactured to international standards with proper grading and certification. Features include self-locking nuts, spring washers for vibration resistance, and various head types (hex, countersunk, pan) for different applications. Available in metric and imperial sizes with bulk packaging options. Includes grounding lugs, cable ties, marking labels, and other installation essentials for complete solar project solutions.", 
    category: "Accessories",
    image: accessories 
  },
];

const categories = ["All", "Solar Structures", "Cable Management", "Electrical", "Accessories"];

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter((p) => p.category === activeCategory);
  
  const getProductCountByCategory = (category) => 
    category === "All" 
      ? products.length 
      : products.filter((p) => p.category === category).length;

  // Scroll helpers
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.state?.scrollToproduct) {
      const element = document.getElementById("products");
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        setTimeout(() => window.scrollTo({ top: y, behavior: "smooth" }), 50);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#F0F4F7]">
      <Navbar />

      {/* Hero Section */}
      <section id="products" className="pt-28 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-10"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                left: i % 2 === 0 ? `${5 + i * 3}%` : "auto",
                right: i % 2 === 1 ? `${8 + i * 2}%` : "auto",
                top: `${10 + i * 15}%`,
              }}
              animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
              transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50 10 L55 25 L70 20 L65 35 L80 40 L70 50 L80 60 L65 65 L70 80 L55 75 L50 90 L45 75 L30 80 L35 65 L20 60 L30 50 L20 40 L35 35 L30 20 L45 25 Z"
                  fill="#004D99"
                />
                <circle cx="50" cy="50" r="15" fill="white" />
              </svg>
            </motion.div>
          ))}
          <motion.div 
            animate={{ y: [0, -30, 0], x: [0, 15, 0] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute top-10 left-[5%] w-80 h-80 rounded-full blur-3xl" 
            style={{ backgroundColor: "#004D99", opacity: 0.1 }} 
          />
          <motion.div 
            animate={{ y: [0, 25, 0], x: [0, -20, 0] }} 
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
            className="absolute top-20 right-[10%] w-96 h-96 rounded-full blur-3xl" 
            style={{ backgroundColor: "#004D99", opacity: 0.1 }} 
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <span className="inline p-2 rounded-3xl text-[#1484F4] px-5 bg-[#D8E1EA] font-serif text-2xl">
            Product Gallery
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 mt-5">
            Our <span className="text-[#004D99]">Products</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            Explore our complete range of solar mounting structures, cable management systems, and electrical enclosures manufactured to international quality standards.
          </p>
          <button 
            onClick={() => scrollToSection("Contact")}
            className="bg-[#0D3773] text-white px-6 py-3 rounded-lg hover:bg-[#09295a] transition-colors duration-300"
          >
            Request Quote
          </button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 text-gray-500 bg-background/95 top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-8 scrollbar-hide mt-10">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category 
                    ? "bg-[#004D99] text-white shadow-md" 
                    : "text-muted-foreground hover:bg-gray-100"
                }`}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-1.5 opacity-70">
                    ({getProductCountByCategory(category)})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 cursor-pointer"
                  onClick={() => { 
                    setSelectedProduct(product); 
                    window.scrollTo({ top: 0, behavior: "smooth" }); 
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { 
                        e.target.src = "https://via.placeholder.com/400x300?text=Product+Image"; 
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                      {product.description}
                    </p>
                    <div className="mt-3">
                      <span className={`inline-block text-xs px-3 py-1 rounded-full ${
                        product.category === "Solar Structures" 
                          ? "bg-blue-100 text-blue-800 border border-blue-200" 
                          : product.category === "Cable Management" 
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : product.category === "Electrical" 
                          ? "bg-red-100 text-red-800 border border-red-200"
                          : "bg-gray-100 text-gray-800 border border-gray-200"
                      }`}>
                        {product.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }} 
              transition={{ type: "spring", damping: 25, stiffness: 300 }} 
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl overflow-y-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProduct(null)} 
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 md:h-auto md:min-h-[500px]">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => { 
                      e.target.src = "https://via.placeholder.com/600x600?text=Product+Image"; 
                    }} 
                  />
                </div>
                <div className="p-4 md:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className={`inline-block text-sm px-3 py-1 rounded-full ${
                      selectedProduct.category === "Solar Structures" 
                        ? "bg-blue-100 text-blue-800 border border-blue-200" 
                        : selectedProduct.category === "Cable Management" 
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : selectedProduct.category === "Electrical" 
                        ? "bg-red-100 text-red-800 border border-red-200"
                        : "bg-gray-100 text-gray-800 border border-gray-200"
                    }`}>
                      {selectedProduct.category}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                    {selectedProduct.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedProduct(null)}
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Close
                    </Button>
                    <Button 
                      onClick={() => { 
                        setSelectedProduct(null); 
                        scrollToSection("Contact"); 
                      }}
                      className="bg-[#004D99] hover:bg-[#003366] text-white"
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Product;