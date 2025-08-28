"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const awards = [
  {
    title: "Commercial Complexes",
    year: "2025",
    description:
      "From office spaces to shopping malls, our commercial construction projects are designed to create vibrant business hubs.",
    image:
      "https://www.designex.in/architects-in-kolhapur-karad-ichalkaranji-ratnagiri/anand-kolhapur/anand-kolhapur.jpg",
  },
  {
    title: "Industrial Buildings",
    year: "2024",
    description:
      "We construct state-of-the-art industrial facilities, including warehouses, factories, and logistics centers.",
    image: "Project2.png",
  },
  {
    title: "Infrastructure Development",
    year: "2023",
    description:
      "We contribute to nation-building by executing large-scale infrastructure projects, including highways",
    image: "Project3.png",
  },
  {
    title: "Residential Apartments",
    year: "2020",
    description:
      "We specialize in building modern, sustainable, and affordable residential complexes that meet today's lifestyle needs.",
    image: "Project1.png",
  },
];

const AwardsSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-background min-h-screen text-white py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-full mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {"Built by Us".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
          </motion.h2>
        </motion.div>

        {/* Awards List */}
        <div className="space-y-0">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="relative border-b border-white/10 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Floating Hover Image */}
              <AnimatePresence>
                {hovered === index && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="relative">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-xl shadow-lg"
                      />
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-white/10 blur-xl scale-110 rounded-xl"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Award Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center py-8 lg:py-12 px-4 lg:px-8 transition-all duration-300 hover:bg-white/5">
                {/* Left: Title */}
                <div className="lg:col-span-6">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white group-hover:text-button transition-colors duration-300">
                    {award.title}
                  </h3>
                </div>

                {/* Right: Year and Description */}
                <div className="lg:col-span-6 mt-4 lg:mt-0">
                  <div className="flex flex-col lg:items-end lg:text-right">
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-button transition-colors duration-300">
                      {award.year}
                    </div>
                    <p className="text-gray-300 text-sm lg:text-base max-w-md leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;