import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { useToast } from "../Ui/use-toast";


const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [
      "No.11,Pillaiyar Kovil Street",
      "Ambattur Industrial Estate",
      "Ambattur,Chennai - 600098",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 97917 79905", "+91 96290 40496"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@mrmekaniq.com", "mr.mekaniq1@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["24/7 Production Support", "Office: Mon-Sat 9AM-6PM"],
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast({
        title: "Missing details",
        description: "Name, Email, and Message are required.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    const whatsappNumber = "918525999646"; // WhatsApp number without '+'

    // Create message with proper line breaks
    const text = `Hello! I am ${formData.name}.
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Company: ${formData.company || "N/A"}
Message: ${formData.message}`;

    // Encode text for WhatsApp
    const encodedText = encodeURIComponent(text);

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;

    const newWindow = window.open(url, "_blank");
    if (!newWindow) {
      toast({
        title: "Popup blocked",
        description: "Please allow popups for this site.",
        type: "error",
      });
      setIsSubmitting(false);
      return;
    }

    toast({
      title: "Redirecting to WhatsApp",
      description: "Please send the message there.",
      type: "success",
    });

    // Reset form after slight delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section
      id="Contact"
      
      className="relative py-20 lg:py-28  bg-gray-900 text-white overflow-hidden"
    >
      {/* Ambient Glow */}
      <div  className="absolute -top-60 left-1/2 w-[700px] h-[700px] bg-blue-600/20 blur-[200px] rounded-full -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block mb-5 px-5 py-2 text-lh rounded-full font-serif bg-white/10 text-blue-500">
            Contact Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Let’s Build Something{" "}
            <span className="text-blue-500">Exceptional</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Precision manufacturing. Reliable production. Premium engineering
            support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex flex-col space-y-6 lg:col-span-2"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="flex gap-4 sm:gap-6 p-5 sm:p-6 bg-gray-800 rounded-2xl shadow-lg hover:translate-x-1 transition-transform"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-blue-600 rounded-xl">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-1">
                      {info.title}
                    </h4>
                    {info.details.map((d) => (
                      <p
                        key={d}
                        className="text-gray-400 text-sm sm:text-base"
                      >
                        {d}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-12 rounded-3xl bg-gray-800/90 backdrop-blur-md border border-gray-700 shadow-2xl flex flex-col gap-5 sm:gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name*"
                  className="w-full h-12 sm:h-14 px-4 sm:px-5 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition"
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="w-full h-12 sm:h-14 px-4 sm:px-5 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full h-12 sm:h-14 px-4 sm:px-5 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition"
                />
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-full h-12 sm:h-14 px-4 sm:px-5 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition"
                />
              </div>

              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full p-4 sm:p-5 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 sm:h-14 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center gap-2 sm:gap-3 hover:scale-[1.02] transition shadow-lg disabled:opacity-60"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
