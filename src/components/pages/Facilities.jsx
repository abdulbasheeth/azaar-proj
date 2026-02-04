import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Counter from "../Ui/Counter"
import facilityLaser from "../../assets/facility-laser.jpg";
import serviceFolding from "../../assets/service-cnc.png";
import facilityQuality from "../../assets/facility-quality.png";
import facilityProduction from "../../assets/facility-production.jpg";
import facilityRoll from "../../assets/facility-roll-forming.jpg"
import facilitypowerpress from "../../assets/facility-power-press.jpg"

const facilities = [
    {
        title: "Laser Cutting Center",
        description: "Precision fiber laser technology for complex cuts",
        specs: ["3000W Fiber Laser", "Up to 20mm thickness", "Auto loading system"],
        image: facilityLaser,
        span: "lg:col-span-2 lg:row-span-2",
    },
    {
        title: "CNC Folding",
        description: "Multi-axis precision machining",
        specs: ["5-Axis CNC Mills", "0.01mm precision"],
        image: serviceFolding,
        span: "lg:col-span-1 lg:row-span-1",
    },
    {
        title: "Roll Forming",
        description: "Continuous metal shaping for consistent profiles",
        specs: [ "High-speed production"],
        image: facilityRoll,
        span: "lg:col-span-1 lg:row-span-1",
    },
    {
        title: "Quality Lab",
        description: "Rigorous testing standards",
        specs: ["CMM inspection", "Material verification"],
        image: facilityQuality,
        span: "lg:col-span-1 lg:row-span-1",
    },
    {
        title: "Power Press",
        description: "Heavy-duty stamping and punching operations",
        specs: ["Hydraulic press", "High tonnage capacity"],
        image: facilitypowerpress,
        span: "lg:col-span-1 lg:row-span-1",
    },
    {
        title: "24/7 Production",
        description: "Round-the-clock manufacturing capability",
        specs: ["Three shift operation", "Real-time monitoring", "Automated systems"],
        image: facilityProduction,
        span: "lg:col-span-2 lg:row-span-1",
    },
];

const Facilities = () => {
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
    
    // Create refs for each facility card
    const cardRefs = facilities.map(() => useRef(null));
    
    // Check each card's inView state
    const cardInViewStates = cardRefs.map(ref => useInView(ref, { once: true, margin: "-50px" }));

    return (
        <section id="Facilities" ref={sectionRef} className="mt-10 mb-10 lg:mt-2 lg:mb-10 bg-background pt-23">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block font-serif px-4 py-1.5 rounded-full bg-primary/20 text-primary inline p-2 rounded-2xl text-[#1484F4] px-6 bg-[#D8E1EA] font-semibold mb-4">
                        In-House Facilities
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                        State-of-the-Art{" "}
                        <span className="text-primary text-[#3399FF]">Infrastructure</span>
                    </h2>
                    <p className="text-lg text-muted-foreground text-gray-600">
                        Our modern facility is equipped with cutting-edge machinery and
                        technology to deliver precision manufacturing at scale.
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={facility.title}
                            ref={cardRefs[index]}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={cardInViewStates[index] ? { 
                                opacity: 1, 
                                y: 0, 
                                scale: 1 
                            } : {}}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.2 }
                            }}
                            className={`
                                relative rounded-3xl overflow-hidden group cursor-pointer
                                ${facility.title === "24/7"
                                    ? "col-span-1 md:col-span-2 lg:col-span-3 h-80 md:h-96 lg:h-[400px]"
                                    : "col-span-1 min-h-[280px] lg:min-h-[320px]"
                                } 
                                ${facility.span}
                            `}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={facility.image}
                                    alt={facility.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                            </div>

                            {/* Content */}
                            <div className="relative h-full p-6 lg:p-8 flex flex-col justify-end">
                                <div className="space-y-3">
                                    <h3 className="font-display font-bold text-xl lg:text-2xl text-white">
                                        {facility.title}
                                    </h3>
                                    <p className="text-white/70 text-sm lg:text-base">
                                        {facility.description}
                                    </p>

                                    {/* Specs */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {facility.specs.map((spec) => (
                                            <motion.span
                                                key={spec}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={cardInViewStates[index] ? { 
                                                    opacity: 1, 
                                                    y: 0 
                                                } : {}}
                                                transition={{ 
                                                    duration: 0.3, 
                                                    delay: index * 0.1 + 0.2 
                                                }}
                                                className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium"
                                            >
                                                {spec}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isSectionInView ? { 
                        opacity: 1, 
                        y: 0 
                    } : {}}
                    transition={{ 
                        duration: 0.6,
                        delay: 0.3 
                    }}
                    className="mt-10 bg-gray-800 rounded-2xl px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isSectionInView ? { 
                            opacity: 1, 
                            scale: 1 
                        } : {}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.4 
                        }}
                        className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                    >
                        <Counter end={15} label="Years Experience" />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isSectionInView ? { 
                            opacity: 1, 
                            scale: 1 
                        } : {}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.5 
                        }}
                        className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                    >
                        <Counter end={2000} label="Projects Completed" />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isSectionInView ? { 
                            opacity: 1, 
                            scale: 1 
                        } : {}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.6 
                        }}
                        className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                    >
                        <Counter end={500} label="Happy Clients" />
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isSectionInView ? { 
                            opacity: 1, 
                            scale: 1 
                        } : {}}
                        transition={{ 
                            duration: 0.4, 
                            delay: 0.7 
                        }}
                        className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                    >
                        <Counter end={20} label="Team Members" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Facilities;