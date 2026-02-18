import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  { bold: "Precision & Quality Driven", normal: " manufacturing processes" },
  { bold: "Sector Expertise", normal: " in solar, automotive, construction, and industrial applications" },
  { bold: "Advanced Infrastructure", normal: " with modern machinery and skilled professionals" },
  { bold: "On-Time Delivery", normal: " without compromising quality" },
  { bold: "Customer-Focused Approach", normal: " with tailored solutions" }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="About"
      className="pt-16 sm:pt-20 lg:pt-24 min-h-screen flex flex-col justify-center bg-[#F5F5F5] relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E0E7FF] via-[#F0F4FF] to-[#E8F0FF]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#1484F4]/20 will-change-transform"
            style={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
            animate={{
              x: [null, Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [null, Math.random() * 100 + "%", Math.random() * 100 + "%"],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated Wave */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 lg:w-96 h-64 lg:h-96 opacity-10 hidden lg:block"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#1484F4]">
          <path
            fill="currentColor"
            d="M45.2,-77.4C59.2,-71.2,71.8,-59.8,79.6,-45.7C87.4,-31.6,90.5,-14.8,89.2,1.4C87.9,17.6,82.2,33.2,72.1,45.4C62,57.6,47.5,66.5,32.3,71.7C17.2,76.8,1.4,78.2,-13.9,75.5C-29.2,72.8,-43.9,66,-56.5,56.1C-69.1,46.1,-79.5,32.9,-83.4,18.3C-87.3,3.7,-84.7,-12.2,-78.6,-26.4C-72.5,-40.6,-62.9,-53.1,-50.2,-60.1C-37.5,-67.1,-21.7,-68.6,-5.3,-66.4C11,-64.1,31.3,-58.2,45.2,-77.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/* About Us Badge */}
      <div className="flex justify-center relative z-10">
        <motion.span
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="px-4 py-1.5 font-serif rounded-3xl text-base sm:text-lg lg:text-xl text-[#1484F4] bg-white shadow-lg font-bold mb-6"
        >
          About Us
        </motion.span>
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#09295a] mb-3 sm:mb-4"
            >
              Who We <span className="text-[#1484F4]">Are</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm sm:text-base text-[#374151] mb-2 leading-relaxed">
                Established in 2023, we are a precision‑driven metal fabrication company based in Chennai, India.
                Built on engineering expertise and a commitment to quality, we deliver reliable metal solutions
                that meet the evolving needs of modern industries.
              </p>
              <p className="text-[#374151] mb-3 text-sm sm:text-base leading-relaxed">
                By combining advanced manufacturing technology with skilled craftsmanship, we ensure accuracy,
                durability, and consistency in every product we deliver.
              </p>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-3">Why Choose Us</h3>
              <div className="grid gap-2 mb-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-4 sm:h-4 text-[#1484F4] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#111827] leading-tight">
                      <span className="font-bold">{feature.bold}</span>
                      {feature.normal}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-[#374151] italic text-xs sm:text-sm leading-relaxed"
            >
              We aim to build lasting partnerships by delivering metal solutions that stand for strength, precision, and trust.
            </motion.p>
          </motion.div>

          {/* Right Content - Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative space-y-3 sm:space-y-4 mt-10 lg:mt-0"
          >
            {/* Mission Card - Added mt-10 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-white/20 mt-5 md:mt-20"

            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E0E7FF] to-[#1484F4]/20 flex items-center justify-center"
                  whileHover={{ rotate: 15 }}
                >
                  <svg className="w-4 h-4 text-[#1484F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-base font-semibold text-[#111827]">Our Mission</h3>
              </div>
              <p className="text-sm text-[#374151] leading-relaxed">
                To provide high‑quality metal solutions that exceed customer expectations through innovation,
                craftsmanship, and reliability.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-[#1484F4] rounded-xl p-4 sm:p-5 shadow-lg border border-[#1484F4]/20 mb-10 text-white"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  className="w-8 h-8 rounded-lg bg-white flex items-center justify-center"
                  whileHover={{ rotate: -15 }}
                >
                  <svg className="w-4 h-4 text-[#1484F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 011-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-base font-semibold text-white">Our Vision</h3>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
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