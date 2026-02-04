import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Precision & Quality Driven manufacturing processes",
  "Sector Expertise in solar, automotive, construction, and industrial applications",
  "Advanced Infrastructure with modern machinery and skilled professionals",
  "On-Time Delivery without compromising quality",
  "Customer-Focused Approach with tailored solutions",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="About" className="py-23 lg:py-32 bg-[#F5F5F5] relative overflow-hidden">
      {/* Solid Industrial Background */}
      <div className="absolute inset-0 bg-[#E0E7FF]" />

      {/* Animated rotating gears */}
      <motion.div
        className="absolute -left-10 top-10 sm:-left-20 sm:top-15 w-28 h-28 sm:w-40 sm:h-40 text-[#1484F4]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50 10 L55 25 L70 20 L65 35 L80 40 L65 50 L80 60 L65 65 L70 80 L55 75 L50 90 L45 75 L30 80 L35 65 L20 60 L35 50 L20 40 L35 35 L30 20 L45 25 Z" />
          <circle cx="50" cy="50" r="15" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute -right-10 bottom-0 sm:-right-16 sm:bottom-32 w-24 h-24 sm:w-32 sm:h-32 text-[#1484F4]"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M50 5 L58 20 L75 15 L68 32 L85 42 L68 52 L75 68 L58 63 L50 80 L42 63 L25 68 L32 52 L15 42 L32 32 L25 15 L42 20 Z" />
          <circle cx="50" cy="42" r="12" />
        </svg>
      </motion.div>

      <div className="flex justify-center relative z-10">
        <span className="px-4 sm:px-5 py-1.5 font-serif rounded-3xl text-[#1484F4] bg-[#D8E1EA] text-xl sm:text-2xl font-bold mb-6">
          About Us
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#09295a] mb-6">
              Who We <span className=" text-[#1484F4]">Are</span>
            </h2>
            <p className="text-base sm:text-lg text-[#374151] mb-6">
              Established in 2023, we are a precision‑driven metal fabrication company based in Chennai, India.
              Built on engineering expertise and a commitment to quality, we deliver reliable metal solutions
              that meet the evolving needs of modern industries.
            </p>
            <p className="text-[#374151] mb-8 text-base sm:text-lg">
              By combining advanced manufacturing technology with skilled craftsmanship, we ensure accuracy,
              durability, and consistency in every product we deliver.
            </p>

            {/* Why Choose Us */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4">Why Choose Us</h3>
            <div className="grid gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1484F4] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#111827]">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-[#374151] mb-6 italic text-sm sm:text-base">
              We aim to build lasting partnerships by delivering metal solutions that stand for strength, precision, and trust.
            </p>
          </motion.div>

          {/* Right Content - Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative space-y-6"
          >
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#D8E1EA] flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1484F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827]">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base text-[#374151]">
                To provide high‑quality metal solutions that exceed customer expectations through innovation,
                craftsmanship, and reliability.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#D8E1EA] flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1484F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111827]">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-[#374151]">
                To be a trusted partner in metal fabrication, recognized for engineering excellence and
                sustainable growth in solar, automotive, construction, and industrial sectors.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


















