import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Target, Users, TrendingUp, Shield, Clock } from "lucide-react";

const policies = [
    {
        icon: Award,
        title: "ISO 9001:2015 Certified",
        description:
            "Our quality management system is certified to international standards, ensuring consistent product quality.",
    },
    {
        icon: Target,
        title: "Zero Defect Target",
        description:
            "We strive for zero defects through rigorous quality control at every stage of production.",
    },
    {
        icon: Users,
        title: "Customer Focus",
        description:
            "Understanding and exceeding customer requirements is at the core of our quality policy.",
    },
    {
        icon: TrendingUp,
        title: "Continuous Improvement",
        description:
            "We continuously improve our processes, products, and services through innovation and feedback.",
    },
    {
        icon: Shield,
        title: "Quality Assurance",
        description:
            "Comprehensive inspection and testing at every stage ensures products meet specifications.",
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description:
            "Our No-Delay Principle ensures all orders are delivered on schedule without compromising quality.",
    },
];

const Quality = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
<section
  id="Quality"
  className="py-20 lg:py-32 relative overflow-hidden"
  style={{ backgroundColor: '#1D3144' }} // section background stays
>
  {/* Animated Industrial Pattern Background */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Rotating Quality Certification Seals */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={`seal-${i}`}
        className="absolute opacity-[0.06]"
        style={{
          width: `${120 + i * 30}px`,
          height: `${120 + i * 30}px`,
          left: i % 2 === 0 ? `${-20 + i * 5}%` : 'auto',
          right: i % 2 === 1 ? `${-15 + i * 5}%` : 'auto',
          top: `${15 + i * 20}%`,
        }}
        animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
        transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M50 15 L55 35 L75 35 L60 47 L65 67 L50 55 L35 67 L40 47 L25 35 L45 35 Z" fill="currentColor" opacity="0.3" />
          {/* Text ISO in white */}
          <text x="50" y="85" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">ISO</text>
        </svg>
      </motion.div>
    ))}

    {/* Precision Measurement Grid */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
      <defs>
        <pattern id="precision-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
          <circle cx="50" cy="50" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#precision-grid)" />
    </svg>

    {/* Animated Quality Check Pulses */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`pulse-${i}`}
        className="absolute"
        style={{
          left: `${15 + i * 15}%`,
          top: `${25 + (i % 2) * 40}%`,
        }}
      >
        <motion.div
          className="w-20 h-20 rounded-full border-2 border-gray-400/20"
          animate={{
            scale: [1, 2, 2.5],
            opacity: [0.3, 0.1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
          }}
        />
        {/* Text ✓ in white */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2,
            delay: i * 0.5,
            repeat: Infinity,
          }}
        >
          ✓
        </motion.div>
      </motion.div>
    ))}

    {/* Rotating Gauge Meters */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`gauge-${i}`}
        className="absolute opacity-[0.08]"
        style={{
          width: '100px',
          height: '100px',
          right: `${5 + i * 12}%`,
          bottom: `${10 + i * 15}%`,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="200 83" />
          <motion.line
            x1="50" y1="50" x2="50" y2="15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ rotate: [0, 120, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: '50px 50px' }}
          />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      </motion.div>
    ))}

    {/* Flying Certificate Badges */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={`badge-${i}`}
        className="absolute w-8 h-8 opacity-[0.1]"
        style={{
          left: `${10 + i * 20}%`,
        }}
        animate={{
          y: ['100vh', '-100px'],
          x: [0, Math.sin(i) * 50],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15 + i * 2,
          delay: i * 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 40 40" className="w-full h-full text-gray-400">
          <path d="M20 2 L38 14 L38 26 L20 38 L2 26 L2 14 Z" fill="currentColor" />
        </svg>
      </motion.div>
    ))}

    {/* Concentric Accuracy Rings */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full border border-gray-400/10"
          style={{
            width: `${200 + i * 150}px`,
            height: `${200 + i * 150}px`,
            left: `${-(200 + i * 150) / 2}px`,
            top: `${-(200 + i * 150) / 2}px`,
          }}
          animate={{ 
            rotate: i % 2 === 0 ? [0, 360] : [360, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            rotate: { duration: 60 + i * 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      ))}
    </div>

    {/* Technical Blueprint Lines */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
      <defs>
        <pattern id="blueprint-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <rect width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400" />
          <line x1="25" y1="0" x2="25" y2="50" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" className="text-gray-400" />
          <line x1="0" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" className="text-gray-400" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#blueprint-pattern)" />
    </svg>

    {/* Gradient Overlays */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-400/5 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
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
                    <span className="inline-block px-5 text-white bg-[#0F355B] py-1.5 rounded-full bg-industrial-blue/20 backdrop-blur-sm text-industrial-glow text-sm font-medium mb-4">
                        Quality Policy
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mt-5 font-display font-bold mb-6 text-white">
                        Committed to{" "}
                        <span className="text-industrial-glow text-[#3399FF]">Excellence</span>
                    </h2>
                    <p className="text-lg text-primary-foreground/70 text-gray-400 text-white">
                        Quality is not just a goal—it's our standard. We are committed to
                        delivering products that meet the highest quality standards in the
                        industry.
                    </p>
                </motion.div>

                {/* Policy Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {policies.map((policy, index) => {
                        const Icon = policy.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-primary-foreground/5 bg-[#1F2F40] backdrop-blur-sm border border-[#364757]  border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors"
                            >
                                <div className="w-12 bg-[#183C60] text-blue-600 h-12 rounded-xl bg-industrial-blue/20 flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-industrial-glow " />
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3 text-white" >
                                    {policy.title}
                                </h3>
                                <p className="text-primary-foreground/70 text-white">{policy.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ISO Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-4 px-8 border-gray-600 text-white bg-[#2C425A] py-4 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20">
                        <Award className="w-10 h-10 text-industrial-glow text-blue-600" />
                        <div className="text-left">
                            <span className="block font-display font-bold text-xl">
                                ISO 9001:2015
                            </span>
                            <span className="text-sm text-primary-foreground/60  text-white">
                                Quality Management System Certified
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Quality;
