import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

// 🔹 Animated Title Component
const AnimatedTitle = () => {
  const text = "Solutions of Modern Trade and Manufacturing";
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
              Delivering innovative trading and manufacturing solutions with excellence,
              safety, and sustainability.            </p>
          </div>

          {/* 🔹 Replaced motion.h1 with AnimatedTitle */}
          <AnimatedTitle />
        </div>

        {/* Right Section Container */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-8 items-end justify-between">
          {/* Middle Card */}
          <motion.div
            className="bg-black/10  w-full lg:w-[280px] rounded-xl p-6 shadow-lg order-1 lg:order-1 border border-white/5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="HeroMain.png"
              alt="modern building"
              className="w-full rounded-lg h-32 object-cover mb-4 hover:scale-105 transition-all duration-300 brightness-110"
            />

            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              Trading and manufacturing is what we live and breathe. Providing
              comprehensive solutions with passion, commitment, and daily drive.
            </p>

            {/* Animated Button */}
            <button className="relative overflow-hidden px-5 py-3 w-full rounded-md font-medium group bg-button">
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black/40 rounded-md transform -translate-x-1/2 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></span>
              <span className="relative z-10 block text-white transition-transform duration-500 group-hover:-translate-y-[180%]">
                Read More
              </span>
              <span className="absolute inset-0 flex items-center justify-center text-white font-medium transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                Read More
              </span>
            </button>
          </motion.div>
          {/* Right Text Section */}
         {/* Right Text Section */}
<motion.div
  className="flex-1 justify-end pt-8 lg:pt-16 order-2 lg:order-2 relative flex flex-col items-start gap-6"
  initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  {/* 🔹 GIF Card */}
  <motion.div
    className="bg-black/10 w-full lg:w-[280px] rounded-xl p-4 shadow-lg border border-white/5"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <img
      src="/CityBuild.gif"
      alt="city build animation"
      className="w-full h-32 object-cover rounded-lg"
    />
  </motion.div>

  <h2 className="text-2xl md:text-3xl font-bold leading-tight">
    Building industries, <br />
    powering growth.
  </h2>
  <p className="text-gray-800 text-sm leading-relaxed">
    Building sustainable futures with advanced trade solutions.
  </p>

  {/* 🔹 Arrow */}
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
