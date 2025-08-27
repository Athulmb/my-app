"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExchangeAlt, FaIndustry, FaBuilding } from "react-icons/fa";
import { Users } from "lucide-react";
import { ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const revenueData = [
  { name: "Liberia", value: 2.7, color: "#60a5fa" },
  { name: "Turkey", value: 20.6, color: "#3b82f6" },
  { name: "UAE", value: 11.2, color: "#1e3a8a" },
  { name: "KSA", value: 65.4, color: "#2563eb" },
];

const timelineData = [
  {
    year: "2016",
    title: "Trading Activities Start",
    description: "Transition to trade activities took place",
    icon: (
      <FaExchangeAlt className="text-5xl md:text-6xl text-button hover:text-black transition-colors duration-300" />
    ),
  },
  {
    year: "2018",
    title: "Atlas Factory Establishment",
    description: "First production facility was established",
    icon: (
      <FaIndustry className="text-5xl md:text-6xl text-button hover:text-black transition-colors duration-300" />
    ),
  },
  {
    year: "2020",
    title: "Workforce Living Solutions Operation",
    description: "Workforce living quarters operation was launched",
    icon: (
      <FaBuilding className="text-5xl md:text-6xl text-button hover:text-black transition-colors duration-300" />
    ),
  },
];

const Timeline = () => {
  return (
    <section className="w-full min-h-screen bg-[#F7F6EC] py-12 md:py-16 px-4 sm:px-6 md:px-20">
      {/* Heading */}
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black">Key Historical</h2>
        <p className="text-gray-400 text-lg md:text-xl font-light">Highlights</p>
        <div className="flex items-center justify-center">
          <div className="w-20 md:w-28 h-0.5 mt-2 bg-button"></div>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-16 mb-10 gap-8 md:gap-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-500">{item.year}</h3>
            <p className="text-base md:text-lg font-bold text-black mt-1">{item.title}</p>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Map, Pie, Employees Section */}
      <div className="grid mt-12 md:mt-16 grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {/* Map Section */}
        <motion.div
          className="bg-[#FDFCF0] shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col justify-between"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">Group Operations</h3>
          <p className="text-sm text-gray-500 mb-4 md:mb-6">by Geography</p>
          <img
            src="https://gisgeography.com/wp-content/uploads/2022/04/High-Resolution-World-Map.jpg"
            alt="Group Operations Map"
            className="w-full h-48 sm:h-60 object-contain rounded-lg"
          />
        </motion.div>

        {/* Pie Chart Section */}
        <motion.div
          className="bg-[#FDFCF0] shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col justify-between"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">2024 Group Revenue</h3>
          <p className="text-sm text-gray-500 mb-4 md:mb-6">by Geography</p>
          <div className="h-56 sm:h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={revenueData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Employees Section */}
        <motion.div
          className="bg-[#FDFCF0] shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Users className="w-12 h-12 md:w-16 md:h-16 text-button hover:text-black transition-colors duration-300 mb-4" />
          <h3 className="text-2xl md:text-4xl font-bold text-black hover:text-button transition-colors duration-300">
            320+
          </h3>
          <p className="text-xs md:text-sm text-gray-500 mt-2 text-center">
            Total Group Employee Number
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;