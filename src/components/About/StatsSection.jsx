import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// 🔹 Animated Heading Component (per-letter)
const AnimatedHeading = ({ text }) => {
  const words = text.split(" ").map((word) => word.split(""));

  return (
    <h2
      className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug text-center max-w-4xl mb-12"
      aria-label={text}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {words.map((chars, wi) => (
        <span
          key={wi}
          className="inline-block mr-2"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          {chars.map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ y: 40, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.5,
                delay: wi * 0.3 + ci * 0.05,
              }}
              style={{ transformOrigin: "50% 50%" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h2>
  );
};

// 🔹 Stat Card with Counting Number
const StatCard = ({ value, title, desc, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && !isNaN(parseInt(value))) {
      let start = 0;
      const end = parseInt(value);
      const duration = 1200;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      className="bg-[#f0f0e0] rounded-xl p-12 flex flex-col h-full"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-5xl font-bold text-gray-900 mb-6">
        {isNaN(parseInt(value)) ? value : count + value.replace(/[0-9]/g, "")}
      </h3>
      <h4 className="font-semibold text-xl text-gray-900 mb-4">{title}</h4>
      <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
    </motion.div>
  );
};

// 🔹 Stats Section
const StatsSection = () => {
  // ✅ Data stored here
  const stats = [
    {
      id: 1,
      value: "320",
      prefix: "",
      suffix: "+",
      title: "Employees",
      desc: "Total group employees contributing to innovation and excellence across industries.",
      type: "card",
    },
    {
      id: 2,
      value: "225",
      prefix: "$",
      suffix: "M+",
      title: "Projects",
      desc: "Worth of completed projects in global manufacturing and infrastructure sectors.",
      type: "card",
    },
    
  
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?w=1000&q=80",
      type: "image",
    },
    {
      id: 4,
      value: "4",
      prefix: "",
      suffix: "+",
      title: "Countries",
      desc: "Operations spanning Liberia, Turkey, UAE, and KSA with strong international presence.",
      type: "card",
    },
  ];

  return (
    <section className="bg-secondary min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w mx-auto w-full">
        {/* 🔹 Animated Heading */}
        <AnimatedHeading text="…Rootedinglobaltradeandmanufacturingtraditions,weapproacheveryprojectwithadeeprespectformarkets,theirhistory,andthepartnerswhoshapethefuture." />

        {/* 🔹 Animated Right-side Paragraph */}
        <motion.div
          className="flex justify-end mb-20 relative"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="max-w-xl text-right">
            <p className="text-gray-700 leading-relaxed text-lg">
            Our group combines decades of expertise in global trade and manufacturing. By connecting skilled teams, trusted partners, and advanced processes, we deliver projects that drive sustainable growth across diverse markets.
            </p>
            <div className="absolute -top-4 right-0 w-20 border-t-2 border-red-500"></div>
          </div>
        </motion.div>

        {/* 🔹 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item, index) =>
            item.type === "card" ? (
              <StatCard
                key={item.id}
                value={item.value}
                title={item.title}
                desc={item.desc}
                delay={index * 0.2}
              />
            ) : (
              <motion.div
                key={item.id}
                className="overflow-hidden rounded-xl h-full"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={item.img}
                  alt={item.title || "Image"}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
