"use client";
import React from "react";
import { motion } from "framer-motion";
import World from "./WorldMap";

const globeConfig = {};
const arcsData = [
  { order: 1, startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.3, color: "#0ea5e9" },
  { order: 2, startLat: 35.6895, startLng: 139.6917, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.4, color: "#f97316" },
];

const ServiceHero = () => {
  return (
    <section className="relative bg-background text-white min-h-[80vh] flex items-center px-6 md:px-12 lg:px-20 py-16 overflow-hidden">
      {/* Globe centered behind content */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center z-0"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full max-w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <World data={arcsData} />
        </div>
      </motion.div>

      {/* Left content */}
      <div className="relative z-10 w-full lg:w-1/2">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-light font-semibold mb-3 tracking-wide uppercase">Our Services</p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 mt-6"
            initial={{ rotateX: -90, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            Solutions Built <br /> For Your Success
          </motion.h1>
          <div className="w-20 h-[3px] bg-light mb-6"></div>
          <motion.p
            className="text-gray-300 max-w-lg mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            We provide tailored solutions to help businesses grow and succeed in the digital age. From design to deployment, we bring ideas to life with creativity and innovation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
