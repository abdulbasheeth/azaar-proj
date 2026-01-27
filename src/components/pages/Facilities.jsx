import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import facilityLaser from '../../assets/facility-Laser.jpg';
import facilityCnc from "../../assets/facility-cnc.jpg";
import facilityQuality from "../../assets/facility-quality.jpg";
import facilityProduction from "../../assets/facility-production.jpg";

const facilities = [
    {
        title: "Laser Cutting Center",
        description: "Precision fiber laser technology for complex cuts",
        specs: ["3000W Fiber Laser", "Up to 20mm thickness", "Auto loading system"],
        image:facilityLaser,
        span: "lg:col-span-2 lg:row-span-2",
    },
    {
        title: "CNC Machining",
        description: "Multi-axis precision machining",
        specs: ["5-Axis CNC Mills", "0.01mm precision"],
        image: facilityCnc,
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
        title: "24/7 Production",
        description: "Round-the-clock manufacturing capability",
        specs: ["Three shift operation", "Real-time monitoring", "Automated systems"],
        image: facilityProduction,
        span: "lg:col-span-2 lg:row-span-1",
    },
];

const Facilities = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="Facilities" className="mt-50 mb-10 lg:mt-2 lg:mb-10 bg-background pt-23">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    
                   <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary inline p-2 rounded-2xl text-[#1484F4] px-6 bg-[#D8E1EA] font-semibold mb-4">
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

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={facility.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-3xl overflow-hidden group cursor-pointer ${facility.span}`}
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
                            <div className="relative h-full min-h-[280px] lg:min-h-[320px] p-6 lg:p-8 flex flex-col justify-end">
                                <div className="space-y-3">
                                    <h3 className="font-display font-bold text-xl lg:text-2xl text-white">
                                        {facility.title}
                                    </h3>
                                    <p className="text-white/70 text-sm lg:text-base ">
                                        {facility.description}
                                    </p>

                                    {/* Specs */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {facility.specs.map((spec) => (
                                            <span
                                                key={spec}
                                                className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium"
                                            >
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 grid grid-cols-2 md:grid-cols-4 bg-[#F0F2F4]  gap-6 lg:gap-8 p-8 rounded-3xl bg-muted"
                >
                    {[
                        { value: "50,000+", label: "Sq. Ft. Facility" },
                        { value: "15+", label: "CNC Machines" },
                        { value: "99.5%", label: "Quality Rate" },
                        { value: "24/7", label: "Operations" },
                    ].map((stat) => (
                        
                        <div key={stat.label} className="text-center ">
                            <div className="text-2xl text-[#004D99]  lg:text-3xl font-display font-bold text-primary mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground text-gray-500">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Facilities;
