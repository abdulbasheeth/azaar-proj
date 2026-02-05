import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Filter } from "lucide-react";
import { Button } from "../Ui/button";
import Navbar from "../Layout/Navbar";
import axios from "axios";

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

// Default products (fallback)
const defaultProducts = [
  { id: "rooftop-standard", title: "Roof Top Structure - Standard", description: "Pre-engineered mounting structures for standard rooftop solar installations with optimal tilt angles.", category: "Solar Structures", image: rooftopStandard },
  { id: "rooftop-elevated", title: "Roof Top Structure - Elevated", description: "Elevated mounting systems for optimal panel angle and maintenance access on flat roofs.", category: "Solar Structures", image: rooftopElevated },
  { id: "rooftop-customized", title: "Roof Top Structure - Customized", description: "Bespoke rooftop solutions designed for unique architectural requirements and complex roof profiles.", category: "Solar Structures", image: rooftopStructure },
  { id: "ground-mount", title: "Ground Mount Structure", description: "Heavy-duty ground mounting systems for solar farms and open field installations.", category: "Solar Structures", image: groundMount },
  { id: "carport", title: "Car Port Structure", description: "Solar carport structures combining parking shade with renewable energy generation.", category: "Solar Structures", image: carport },
  { id: "inverter-stand", title: "Inverter Mounting Stand", description: "Sturdy galvanized steel mounting stands for inverters with proper ventilation design.", category: "Solar Structures", image: inverterStand },
  { id: "cable-perforated", title: "Cable Tray - Perforated", description: "Perforated cable trays for industrial cable management with excellent ventilation.", category: "Cable Management", image: cablePerforated },
  { id: "cable-ladder", title: "Cable Tray - Ladder Type", description: "Heavy-duty ladder-type cable trays for high-capacity cable routing applications.", category: "Cable Management", image: cableLadder },
  { id: "panel-box", title: "Control Panel Box", description: "Custom electrical enclosures with IP55/IP65 protection ratings for harsh environments.", category: "Electrical", image: panelBox },
  { id: "walkway", title: "Metal Roof Walkway", description: "Safe walkway systems with anti-slip grating for maintenance access on metal rooftops.", category: "Accessories", image: walkway },
  { id: "clamps", title: "Solar Mounting Clamps", description: "Precision-engineered aluminum and stainless steel clamps for secure solar panel mounting.", category: "Accessories", image: clamps },
  { id: "accessories", title: "Accessories & Fasteners", description: "Complete range of SS/GI fasteners, L-brackets, washers, and mounting hardware.", category: "Accessories", image: accessories },
];

const categories = ["All", "Solar Structures", "Cable Management", "Electrical", "Accessories"];
const categoryColors = {
  "Solar Structures": "bg-primary/10 text-primary border-primary/20",
  "Cable Management": "bg-accent/10 text-accent-foreground border-accent/20",
  Electrical: "bg-destructive/10 text-destructive border-destructive/20",
  Accessories: "bg-secondary text-secondary-foreground border-secondary",
};

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState(defaultProducts);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products"); // your backend route
      const backendProducts = res.data.map((p) => ({
        id: p._id,
        title: p.title,
        description: p.description,
        category: p.category,
        image: p.image ? `/uploads/${p.image}` : rooftopStandard, // fallback
      }));

      // Merge backend products with default ones
      const mergedProducts = [...defaultProducts];
      backendProducts.forEach((bp) => {
        if (!mergedProducts.some((p) => p.id === bp.id)) mergedProducts.push(bp);
      });
      setProducts(mergedProducts);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setProducts(defaultProducts);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();

    // Listen for admin updates
    const handleProductsUpdated = () => fetchProducts();
    window.addEventListener("productsUpdated", handleProductsUpdated);
    return () => window.removeEventListener("productsUpdated", handleProductsUpdated);
  }, []);

  const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);
  const getProductCountByCategory = (category) => (category === "All" ? products.length : products.filter((p) => p.category === category).length);

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F0F4F7]">
        <Navbar />
        <div className="pt-28 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F4F7]">
      <Navbar />

      {/* Hero Section */}
      <section id="products" className="pt-28 pb-16 bg-blue-200 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
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
          <motion.div animate={{ y: [0, -30, 0], x: [0, 15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-[5%] w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: "#004D99", opacity: 0.1 }} />
          <motion.div animate={{ y: [0, 25, 0], x: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-20 right-[10%] w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "#004D99", opacity: 0.1 }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <span className="inline p-2 rounded-3xl text-[#1484F4] px-5 bg-[#D8E1EA] font-serif text-2xl">Product Gallery</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 mt-5">
            Our <span className="text-primary text-[#004D99]">Products</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            Explore our complete range of solar mounting structures, cable management systems, and electrical enclosures manufactured to international quality standards.
          </p>
          <button onClick={() => scrollToSection("Contact")}>
            <span className="bg-[#0D3773] text-white px-4 py-2 rounded-lg hover:bg-[#09295a] transition-colors duration-300">Request Quote</span>
          </button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 text-gray-500 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide mt-10">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border-b-2 ${activeCategory === category ? "border-blue-300 bg-[#004D99] text-white" : "border-transparent text-muted-foreground hover:border-blue-200"}`}
              >
                {category}
                {category !== "All" && <span className="ml-1.5 opacity-70">({getProductCountByCategory(category)})</span>}
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
                  className="group bg-card rounded-2xl overflow-hidden shadow-industrial hover:shadow-industrial-lg transition-all duration-300 border cursor-pointer border-gray-300 hover:border-blue-300"
                  onClick={() => { setSelectedProduct(product); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Product+Image"; }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">{product.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                    <div className="mt-3">
                      <span className={`inline-block text-xs px-2 py-1 rounded-full ${categoryColors[product.category] || 'bg-gray-100 text-gray-800'}`}>
                        {product.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredProducts.length === 0 && <div className="text-center py-16"><p className="text-muted-foreground">No products found in this category.</p></div>}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setSelectedProduct(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="relative max-w-5xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"><X className="w-5 h-5" /></button>
              <div className="grid md:grid-cols-2 border-none">
                <div className="relative aspect-square md:aspect-auto">
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/600x600?text=Product+Image"; }} />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className={`inline-block w-fit text-xs px-3 py-1 rounded-full font-medium border mb-4 ${categoryColors[selectedProduct.category] || 'bg-gray-100 text-gray-800'}`}>{selectedProduct.category}</span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">{selectedProduct.title}</h2>
                  <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setSelectedProduct(null)}>Close</Button>
                    <Button onClick={() => { setSelectedProduct(null); scrollToSection("Contact"); }}>Request Quote</Button>
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
