import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

// 🔹 Animated Title Component
const AnimatedTitle = () => {
  const text = "Pioneering Modern Trade and Manufacturing";
  const chars = text.split(""); // split by character including spaces

  return (
    <h1
      className="text-5xl font-manrope md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight"
      aria-label={text}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block", transformOrigin: "50% 50%" }}
          initial={{ y: 40, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          {char === " " ? "\u00A0" : char} {/* preserve spaces */}
        </motion.span>
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
            <div className="w-28 h-[4px] bg-button"></div>
            <p className="text-sm text-black/90 leading-relaxed pt-3">
              Delivering world-class solutions across manufacturing and trade,
              powered by innovation, quality, and long-term sustainability.
            </p>
          </div>

          {/* 🔹 Animated Title */}
          <AnimatedTitle />
        </div>

        {/* Right Section Container */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-8 items-end justify-between">
          {/* Middle Card */}
          <motion.div
            className="bg-black/10 w-full lg:w-[280px] rounded-xl p-6 shadow-lg order-1 lg:order-1 border border-white/5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
          src="https://stevensec.com/hs-fs/hubfs/STEVENS%20March%202019%20/Industry%20pages/Oil%20and%20Gas/oil-and-gas-construction-company/gas-construction-companies.jpg?width=1200&height=600&name=gas-construction-companies.jpg"
          alt="modern building"
              className="w-full rounded-lg h-32 object-cover mb-4 hover:scale-105 transition-all duration-300 brightness-110"
            />

            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              We bring together expertise in steel, energy, logistics, and
              advanced manufacturing to create solutions that fuel growth and
              shape the industries of tomorrow.
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
            className="flex-1 justify-end pt-8 lg:pt-16 order-2 lg:order-2 relative flex flex-col items-start gap-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* GIF Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <video
                loop
                autoPlay
                muted
                src="/Gif.mp4"
                alt="city build animation"
                className="w-full h-44 object-cover rounded-lg"
              />
            </motion.div>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Creating value, <br /> powering global industries.
            </h2>
            <p className="text-gray-800 text-sm leading-relaxed">
              We connect markets and help businesses thrive globally.
            </p>

            {/* Arrow */}
            <motion.div className="flex items-center gap-3 cursor-pointer">
              <motion.img
                src="/arrow.svg"
                alt="arrow"
                className="h-8 w-auto origin-left"
                whileHover={{ scaleX: 1.5 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Hero Image (Scroll Swap) */}
      <div className="w-full mx-auto relative h-[500px] md:h-[600px]">
        {/* First I
        mage */}
        <motion.img
                  src="Hero1.jpg"

          alt="modern design house"
          className="w-full rounded-2xl shadow-lg object-cover h-full absolute top-0 left-0"
          style={{ opacity: firstImageOpacity }}
        />
        {/* Second Image */}
        <motion.img
                  src="Hero2.jpg"

          alt="modern design house 2"
          className="w-full rounded-2xl shadow-lg object-cover h-full absolute top-0 left-0"
          style={{ opacity: secondImageOpacity }}
        />
      </div>
    </div>
  );
};

export default Hero;
