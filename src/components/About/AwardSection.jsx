"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const awards = [
  {
    title: "Lorem Ipsum Award",
    year: "2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis.",
    image: "Project1.png",
  },
  {
    title: "Dolor Sit Amet",
    year: "2024",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    image: "Project2.png",
  },
  {
    title: "Consectetur Adipiscing",
    year: "2023",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "Project3.png",
  },
  {
    title: "Perspiciatis Unde Omnis",
    year: "2020",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.",
    image: "Project1.png",
  },
];

const AwardsSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-background text-white py-20 px-6 md:px-20">
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
      <div className="space-y-10 max-w-7xl mx-auto w-full">
        {awards.map((award, index) => (
          <motion.div
          key={index}
          className="relative grid grid-cols-1 md:grid-cols-2 items-center bg-white/10 p-6 rounded-lg min-h-[150px] cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Floating Hover Image */}
          <AnimatePresence>
            {hovered === index && (
              <motion.img
                key={award.image}
                src={award.image}
                alt={award.title}
                className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 md:w-48 lg:w-60 object-contain pointer-events-none z-20 rounded-lg"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        
          {/* Left: Title */}
          <h3 className="text-lg md:text-xl font-semibold">{award.title}</h3>
        
          {/* Right: Year + Description */}
          <div className="text-sm md:text-base text-gray-200 text-right ml-auto">
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
