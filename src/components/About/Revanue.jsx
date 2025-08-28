"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { motion, useInView } from "framer-motion";
import { FaIndustry, FaUsers, FaHome } from "react-icons/fa";

// Donut Chart Data
const pieData = [
  { name: "KSA", value: 65.4 },
  { name: "Others", value: 34.6 },
  { name: "UAE", value: 20.6 },
  { name: "Turkey", value: 11.2 },
  { name: "Liberia", value: 2.7 },
];

// Bar Chart Data
const barData = [
  { freq: "0", employees: 5 },
  { freq: "1", employees: 12 },
  { freq: "2", employees: 18 },
  { freq: "3", employees: 10 },
  { freq: "4", employees: 7 },
];

const COLORS = ["#d32f2f", "#f7b6b6", "#f28e2b", "#4e79a7", "#76b7b2"];

// Custom label for Pie chart
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#333"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={10}
    >
      {`${pieData[index].name}: ${pieData[index].value}%`}
    </text>
  );
};

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

export default function KeyHistorical() {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: false, amount: 0.4 });

  const [chartData, setChartData] = useState([]);
  const [animateKey, setAnimateKey] = useState(0); // 👈 forces Pie re-render

  useEffect(() => {
    if (isInView) {
      // Reset chart animation each time section is visible
      setChartData([]);
      const timer = setTimeout(() => {
        setChartData(pieData);
        setAnimateKey((prev) => prev + 1); // change key → restart animation
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div className="bg-[#f7f5ed] min-h-screen px-4 sm:px-6 md:px-24 py-12 font-sans">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="max-w-full mx-auto pb-28"
      >
        <h4 className="text-red-600 font-semibold">Highlights</h4>
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <h2 className="text-6xl sm:text-5xl font-bold">Key Historical</h2>
          <p className="text-gray-600 max-w-md text-sm sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s
          </p>
        </div>
        <div className="border-b border-gray-300 mt-4"></div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-full mx-auto mb-24  bg-[#FDFCF0]/40 backdrop-blur-lg border-2 border-white p-6 rounded-xl mt-8"
      >
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              year: "2016",
              icon: <FaIndustry size={28} />,
              title: "Trading Activities Start",
            },
            {
              year: "2018",
              icon: <FaHome size={28} />,
              title: "Atlas Factory Establishment",
            },
            {
              year: "2020",
              icon: <FaUsers size={28} />,
              title: "Workforce Living Solutions Operation",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8, scale: 1.05 }}
              className="p-6 text-center "
            >
              <div className="flex justify-center rounded-full p-2 text-red-600">
                <div className="bg-white rounded-lg shadow-lg p-2">
                  {item.icon}
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-500 mt-2">
                {item.year}
              </p>
              <h4 className="font-semibold text-base sm:text-lg mt-1">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Transition to trade activities took place
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Info Cards */}
      <div className="max-w-full py-24 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {/* Group Operations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
        >
          <h3 className="font-semibold text-lg">Group Operations</h3>
          <p className="text-sm text-gray-500">by Geography</p>
          <p className="text-xs text-gray-500 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <img
            src="/Rectangle 22658.png"
            alt="map"
            className="rounded-xl mt-4 w-full h-auto"
          />
        </motion.div>

        {/* 2024 Group Revenue - Donut Chart */}
        <motion.div
          ref={chartRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col"
        >
          <h3 className="font-semibold text-lg">2024 Group Revenue</h3>
          <p className="text-sm text-gray-500">by Geography</p>
          <p className="text-xs text-gray-500 mt-2">
            Lorem Ipsum is simply dummy text of the printing industry.
          </p>
          <div className="flex-1 flex items-center justify-center mt-4">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart key={animateKey}>
                <Pie
                  data={chartData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  isAnimationActive={true}
                  animationDuration={2000} // 👈 smooth filling
                >
                  {chartData.map((entry, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Employee Number - Bar Chart */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col"
        >
          <h3 className="font-semibold text-lg">320+</h3>
          <p className="text-sm text-gray-500">Total Group Employee Number</p>
          <p className="text-xs text-gray-500 mt-2">
            Lorem Ipsum is simply dummy text of the printing industry.
          </p>
          <div className="flex-1 flex items-center justify-center mt-4">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <XAxis dataKey="freq" fontSize={10} />
                <YAxis fontSize={10} />
                <Tooltip />
                <Bar dataKey="employees" fill="#d32f2f" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
}