"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const sections = [
  {
    id: 1,
    image: "/Project1.png",
    title: "Atlas Steel Manufacturing",
    description:
      "Active since 2018, serving the Middle East with 125+ employees. Projects worth over $225M. ISO 14001 & ISO 45001 certified. Fabrication & installation of tanks, cyclones, silos compliant with ADNOC standards.",
    tags: ["Manufacturing", "Steel", "ISO Certified", "Middle East"],
    number: "01",
  },
  {
    id: 2,
    image: "/Project2.png",
    title: "Workforce Living Solutions",
    description:
      "Operational since 2020 with 11 personnel on site and 95% occupancy. Accommodation for 1,800 people including 256 furnished rooms, AC kitchen, 4-floor building, and on-site mosque.",
    tags: ["Housing", "Workforce", "Accommodation", "Community"],
    number: "02",
  },
  {
    id: 3,
    image: "/Project3.png",
    title: "Supply Chain Activities",
    description:
      "Global operations supporting West African gold mining. Handles procurement, logistics, and finance. Key categories: Mining chemicals & equipment, Construction & site supplies, Heavy machinery, Electrical & power systems, Renewable energy solutions.",
    tags: ["Supply Chain", "Mining", "Logistics", "Global"],
    number: "03",
  },
  {
    id: 4,
    image: "/Project1.png",
    title: "Bassa Petroleum Storage Terminal",
    description:
      "Located in Monrovia, Liberia. Licensed for petroleum storage & terminal operations. 60% ownership, ongoing construction and development at Port of Buchanan. Covers all related business activities under LPRC.",
    tags: ["Energy", "Petroleum", "Terminal", "Liberia"],
    number: "04",
  },
];

const ProjectCard = ({ section }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, margin: "0px 0px -20% 0px" });

  return (
    <motion.div
      ref={ref}
      className="sticky top-24"
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 80,
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="relative w-full flex flex-col lg:flex-row gap-6 h-[65vh]">
        {/* Orange Number Badge */}
        <div className="absolute left-4 top-4 lg:left-0 lg:top-8 z-20 transform lg:-translate-x-1/2">
          <div
            className="bg-[#FF3D00] text-white px-4 py-3 font-bold text-lg md:text-xl shadow-xl min-w-[50px] md:min-w-[100px] h-[60px] text-center"
            style={{
              clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)",
              borderRadius: "6px",
            }}
          >
            {section.number}
          </div>
        </div>

        {/* Left Side - Text */}
        <div
          className="group bg-[#f4f3e6] hover:bg-background px-6 sm:px-8 md:px-10 py-10 
            flex flex-col relative rounded-2xl shadow-lg transition-colors duration-300 flex-1 overflow-hidden"
        >
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
  );
};

const ScrollAnimatedStackSections = () => {
  return (
    <section className="bg-secondary min-h-screen px-6 md:px-12 lg:px-20 py-12">
      {/* Header */}
      <div className="w-full text-left mb-12">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 tracking-tight">
            Latest Sectors
          </h1>

          <button className="relative overflow-hidden px-6 py-3 rounded-md group bg-button text-lg md:text-md ml-auto">
            <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black rounded-lg transform -translate-x-1/2 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></span>
            <span className="relative z-10 block text-white transition-transform duration-500 group-hover:-translate-y-[180%]">
              See all Sectors
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-white font-semibold transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              See all Sectors
            </span>
          </button>
        </div>
      </div>

      {/* Sticky Scroll Cards */}
      <div className="space-y-20">
        {sections.map((section) => (
          <ProjectCard key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
};

export default ScrollAnimatedStackSections;
