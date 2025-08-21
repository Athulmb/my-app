import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

// 🔹 Animated Title Component
const AnimatedTitle = () => {
  const text = "Buildings of Modern Design";
  const words = text.split(" ").map((word) => word.split(""));

  return (
    <h1
      className="text-5xl font-manrope md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight"
      aria-label={text}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {words.map((chars, wi) => (
        <div
          key={wi}
          className="word"
          aria-hidden="true"
          style={{
            position: "relative",
            display: "inline-block",
            transformStyle: "preserve-3d",
            perspective: "1000px",
            marginRight: "0.4rem",
          }}
        >
          {chars.map((char, ci) => (
            <motion.div
              key={ci}
              className="char"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "inline-block",
                transformOrigin: "50% 50%",
              }}
              initial={{ y: 40, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.5, delay: wi * 0.3 + ci * 0.05 }}
            >
              {char}
            </motion.div>
          ))}
        </div>
      ))}
    </h1>
  );
};

const Hero = () => {
  const { scrollY } = useViewportScroll();

  // 🔹 Scroll-based opacity for bottom images
  const firstImageOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const secondImageOpacity = useTransform(scrollY, [0, 300], [0, 1]);

  return (
    <div className="bg-secondary text-black min-h-screen flex flex-col px-6 md:px-20 py-[100px]">
      {/* Header Section */}
      <div className="w-full mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 mb-12 mt-[100px]">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative mb-8">
            <div className="w-28 h-[4px] bg-button "></div>
            <p className="text-sm text-black/90 leading-relaxed">
              Reimagining bioprocess safety with elegant design and top-tier<br />
              viral clearance.
            </p>
          </div>

          {/* 🔹 Replaced motion.h1 with AnimatedTitle */}
          <AnimatedTitle />
        </div>

        {/* Right Section Container */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-8 items-end justify-between">
          {/* Middle Card */}
          <motion.div
            className="bg-[#1d3a35] w-full lg:w-[280px] rounded-xl p-6 shadow-lg order-1 lg:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
           <img
  src="HeroMain.png"
  alt="modern building"
  className="w-full rounded-lg h-32 object-cover mb-4 hover:scale-105 transition-all duration-300 brightness-150"
/>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              With a commitment to sustainability and innovative solutions, we create
              beautiful, functional spaces.
            </p>

            {/* Animated Button */}
            <button className="relative overflow-hidden px-5 py-3 w-full rounded-md font-medium group bg-button">
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black rounded-md transform -translate-x-1/2 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></span>
              <span className="relative z-10 block text-white transition-transform duration-500 group-hover:-translate-y-[180%]">
                Read More
              </span>
              <span className="absolute inset-0 flex items-center justify-center text-white font-medium transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                Read More
              </span>
            </button>
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            className="flex-1 justify-end pt-8 lg:pt-16 order-2 lg:order-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Architecture is what we<br />
              live and breathe
            </h2>
            <p className="text-gray-800 text-sm mb-8 leading-relaxed">
              Designing purposeful spaces with passion,<br />
              architecture shapes how we live, move,<br />
              connect, and inspire daily.
            </p>
            <div className="flex items-center gap-3 cursor-pointer group">
  <div className="w-16 h-[3px] bg-button transition-all duration-300 group-hover:w-20"></div>
  <span className="text-button text-4xl transition-transform duration-300 group-hover:translate-x-2 inline-block">
    &rarr; {/* HTML entity for right arrow → */}
  </span>
</div>

          </motion.div>
        </div>
      </div>

      {/* Bottom Hero Image (Scroll Swap) */}
      <div className="w-full mx-auto relative h-[500px] md:h-[600px]">
        {/* First Image */}
        <motion.img
          src="Hero1.png"
          alt="modern design house"
          className="w-full rounded-2xl shadow-lg object-cover h-full absolute top-0 left-0"
          style={{ opacity: firstImageOpacity }}
        />
        {/* Second Image */}
        <motion.img
          src="Hero2.png"
          alt="modern design house 2"
          className="w-full rounded-2xl shadow-lg object-cover h-full absolute top-0 left-0"
          style={{ opacity: secondImageOpacity }}
        />
      </div>
    </div>
  );
};

export default Hero;
