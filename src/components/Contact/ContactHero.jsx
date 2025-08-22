import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const ContactHero = () => {
  const { scrollY } = useViewportScroll();

  // 🔹 Scroll animation for subtle fade
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0.8]);

  return (
    <motion.section
      className="relative w-full bg-background text-white min-h-[80vh] md:min-h-[90vh] flex items-center px-6 md:px-16 overflow-hidden"
      style={{ opacity: bgOpacity }}
    >
      {/* Background decorative lines */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <svg
          className="absolute right-0 top-[30%] w-[1200px] max-w-none"
          fill="none"
          viewBox="0 0 1200 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,250 C400,120 800,380 1200,250"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,320 C400,180 800,420 1200,320"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Left Content */}
      <div className="relative max-w-4xl">
        {/* Title */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact
        </motion.h1>

        {/* Underline */}
        <motion.div
          className="w-20 h-[3px] bg-light my-5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        ></motion.div>

        {/* Paragraph */}
        <motion.p
          className="text-gray-300 text-lg max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Have a question or project in mind? Reach out to our team—we’re here to
          collaborate, support, and bring ideas alive.
        </motion.p>
      </div>

      {/* Bottom-right Contact + Arrow */}
      <motion.div
        className="absolute bottom-10 right-10 flex items-center gap-2 cursor-pointer"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        
        <span className="text-light text-lg font-medium cursor-wait">Contact</span>
      </motion.div>
    </motion.section>
  );
};

export default ContactHero;
