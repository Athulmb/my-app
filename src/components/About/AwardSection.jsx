"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const awards = [
  {
    title: "Visionary Award",
    year: "2025",
    description:
      "Honoring groundbreaking ideas that redefine architectural design standards.",
    image:
      "Project1.png",
  },
  {
    title: "Excellence in Design",
    year: "2024",
    description:
      "Celebrating forward-thinking architecture that merges beauty and function.",
    image:
    "Project2.png",  },
  {
    title: "Timeless Structure",
    year: "2023",
    description:
      "Recognizing enduring designs that inspire across generations and cultures.",
    image:
    "Project3.png",  },
  {
    title: "Built Environment Impact",
    year: "2020",
    description:
      "Awarding projects that transform communities through purposeful design.",
    image:
    "Project1.png",  },
];

const AwardsSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-background text-white py-20 px-6 md:px-20 relative">
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Recognitions We <br /> Got Awards
        </h2>
      </motion.div>

      {/* Awards List */}
      <div className="space-y-6 max-w-7xl mx-auto w-full">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 items-center bg-white/10 p-6 rounded-lg min-h-[150px] cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Left: Title */}
            <h3 className="text-lg md:text-xl font-semibold">{award.title}</h3>

            {/* Center: Hover Image */}
            <div className="flex justify-center items-center">
              <AnimatePresence>
                {hovered === index && (
                  <motion.img
                    key={award.image}
                    src={award.image}
                    alt={award.title}
                    className="w-28 md:w-40 lg:w-52 object-contain"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Right: Year + Description */}
            <div className="text-sm md:text-base text-gray-200 text-right">
              <p className="font-bold text-white">{award.year}</p>
              <p>{award.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
