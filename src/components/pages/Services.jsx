import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
    Search,
    PenTool,
    Package,
    Zap,
    Scissors,
    Layers,
} from "lucide-react";

import serviceSiteAudit from "../../assets/service-site-audit.jpg";
import serviceDesign from "../../assets/service-design.jpg";
import serviceMaterial from "../../assets/service-material.jpg";
import serviceLaser from "../../assets/service-Laser.png";
import serviceShearing from "../../assets/service-ncshearing.png";
import serviceFolding from "../../assets/service-cnc.png";

const services = [
    { icon: Search, title: "Solar Structure Site Audit", description: "Comprehensive on-site assessment to evaluate solar installation requirements and structural feasibility.", image: serviceSiteAudit },
    { icon: PenTool, title: "Solar Structure Design", description: "Custom engineering designs optimized for your specific site conditions and energy requirements.", image: serviceDesign },
    { icon: Package, title: "Steel & Material Recommendation", description: "Expert guidance on optimal steel grades and materials for durability and cost-effectiveness.", image: serviceMaterial },
    { icon: Zap, title: "Laser Cutting", description: "High-precision laser cutting for complex shapes and intricate designs with minimal material waste.", image: serviceLaser },
    { icon: Scissors, title: "NC Shearing", description: "Precise NC shearing operations for clean, straight cuts on various metal sheets.", image: serviceShearing },
    { icon: Layers, title: "CNC Folding", description: "Advanced CNC press brake folding for accurate bends and consistent quality across batches.", image: serviceFolding },
];

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const containerRef = useRef(null);
    const isContainerInView = useInView(containerRef, { once: true, amount: 0.2 });

    return (
        <section id="Services"  className="pt-28 lg:pt-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="inline-block font-serif text-2xl px-4 py-1.5 rounded-full bg-primary/20 text-primary inline p-2 rounded-2xl text-[#1484F4] px-5 bg-[#D8E1EA] font-semibold mb-4"
                    >
                        Our Services
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
                    >
                        Comprehensive Manufacturing <span className="text-primary text-[#1484F4]">Solutions</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg text-muted-foreground text-gray-500"
                    >
                        From solar structure design to precision fabrication, we offer end-to-end
                        manufacturing services for your solar and industrial needs.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ 
                                opacity: 0, 
                                y: 50,
                                x: index % 3 === 0 ? -30 : index % 3 === 2 ? 30 : 0 
                            }}
                            animate={isContainerInView ? { 
                                opacity: 1, 
                                y: 0,
                                x: 0 
                            } : {}}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 80,
                                damping: 15
                            }}
                            whileHover={{ 
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/40"
                        >
                            {/* Service Image */}
                            <motion.div 
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative h-48 overflow-hidden hover:text-blue-500"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                                {/* Icon Box */}
                                <motion.div
                                    initial={{ rotate: 0, scale: 1 }}
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: "#3399FF" }}
                                >
                                    <service.icon className="w-6 h-6 text-white" />
                                </motion.div>
                            </motion.div>

                            {/* Content */}
                            <div className="p-6">
                                <motion.h3 
                                    initial={{ color: "#000000" }}
                                    whileHover={{ color: "#1484F4" }}
                                    transition={{ duration: 0.2 }}
                                    className="font-display font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-[#1484F4]"
                                >
                                    {service.title}
                                </motion.h3>

                                <p className="text-sm text-muted-foreground text-gray-500">
                                    {service.description}
                                </p>
                            </div>

                            {/* Slide-in indicator bar */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={isContainerInView ? { scaleX: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                className="h-1 bg-gradient-to-r from-transparent via-[#1484F4] to-transparent"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Services;