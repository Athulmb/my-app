"use client";
import React from "react";
import { motion } from "framer-motion";

const ScrollAnimatedStackSections = () => {
  const sections = [
    {
      id: 1,
      image: "/Project1.png",
      title: "Atlas Steel Manufacturing",
      description:
        "A large-scale steel manufacturing project featuring modern overhead crane systems and advanced production facilities.",
      tags: ["Manufacturing", "Steel", "Industry", "Innovation"],
      number: "01",
    },
    {
      id: 2,
      image: "/Project2.png",
      title: "Workforce Living Solutions",
      description:
        "Comprehensive workforce accommodation facilities designed for comfort, safety, and community living standards.",
      tags: ["Housing", "Workforce", "Community", "Sustainability"],
      number: "02",
    },
    {
      id: 3,
      image: "/Project3.png",
      title: "Bassa Petroleum Storage Terminal",
      description:
        "A strategic petroleum storage terminal project with integrated port infrastructure and modern logistics systems.",
      tags: ["Energy", "Petroleum", "Infrastructure", "Logistics"],
      number: "03",
    },
  ];

  return (
    <section className="bg-secondary min-h-screen px-6 md:px-12 lg:px-20 py-12">
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto text-left mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 tracking-tight">
            Latest Projects
          </h1>
          <div className="hidden md:block">
            <button className="relative overflow-hidden px-6 py-2 rounded-md font-medium group bg-button">
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black rounded-md transform -translate-x-1/2 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></span>
              <span className="relative z-10 block text-white transition-transform duration-500 group-hover:-translate-y-[180%]">
                see all projects
              </span>
              <span className="absolute inset-0 flex items-center justify-center text-white font-medium transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                see all projects
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Scroll Cards */}
      <div className="space-y-10">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="sticky top-0 h-screen flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* 🔹 Your Original Card Design Preserved */}
            <div className="relative w-full  flex flex-col lg:flex-row gap-6 h-[60vh]">
              {/* Orange Number Badge */}
              <div className="absolute left-4 top-4 lg:left-0 lg:top-8 z-20 transform lg:-translate-x-1/2">
                <div className="bg-button text-white px-4 py-3 rounded-lg font-bold text-lg md:text-xl shadow-xl min-w-[50px] md:min-w-[60px] text-center">
                  {section.number}
                </div>
              </div>

              {/* Left Side - Text */}
              <div
                className="group bg-[#f4f3e6] hover:bg-background px-6 sm:px-8 md:px-10 py-10 
                  flex flex-col relative rounded-2xl shadow-lg transition-colors duration-300 flex-1 overflow-hidden"
              >
                {/* Title + Tags */}
                <div
                  className="mt-12 transition-all duration-700 ease-in-out 
                    group-hover:translate-y-[50%]"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 
                    leading-tight text-black group-hover:text-white transition-colors duration-300">
                    {section.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
                    {section.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm sm:text-base md:text-lg text-black font-medium 
                          transition-colors duration-200 cursor-pointer group-hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-auto transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                  <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed font-normal 
                    group-hover:text-white">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg flex-1 h-64 sm:h-80 md:h-full">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ScrollAnimatedStackSections;
