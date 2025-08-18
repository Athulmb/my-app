import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useViewportScroll();

  // Map scroll position to opacity for both images
  const firstImageOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const secondImageOpacity = useTransform(scrollY, [0, 300], [0, 1]);

  return (
    <div className="bg-[#468C76] text-white min-h-screen flex flex-col px-6 md:px-20 py-[100px]">
      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 mb-12">
        {/* Left Text Section */}
        <div className="flex-1 lg:max-w-[45%]">
          <div className="relative mb-8">
            <div className="w-12 h-[2px] bg-orange-500 mb-4"></div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Reimagining bioprocess safety with elegant design and top-tier<br />
              viral clearance.
            </p>
          </div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Buildings of<br />
            Modern Design
          </motion.h1>
        </div>

        {/* Right Section Container */}
        <div className="flex-1 lg:max-w-[55%] flex flex-col lg:flex-row gap-8 items-start">
          {/* Middle Card */}
          <motion.div
            className="bg-[#1d3a35] w-full lg:w-[280px] rounded-xl p-6 shadow-lg order-1 lg:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57/688b71a1c25c527be71c2705_top-image.jpg"
              alt="modern building"
              className="w-full rounded-lg h-32 object-cover mb-4 hover:scale-105 transition-all duration-300"
            />
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              With a commitment to sustainability and innovative solutions, we create
              beautiful, functional spaces.
            </p>
            {/* <button className="bg-orange-600 hover:bg-orange-700 transition-all duration-300 text-white font-semibold px-5 py-3 rounded-lg w-full">
              Read More
            </button> */}

            <button className="relative overflow-hidden px-5 py-3 w-full rounded-md font-medium group bg-[#FF5700]">
              {/* Black Overlay (expands from bottom center) */}
              <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black rounded-md transform -translate-x-1/2 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></span>

              {/* Initial Text (moves up more on hover) */}
              <span className="relative z-10 block text-white transition-transform duration-500 group-hover:-translate-y-[180%]">
                Read More
              </span>

              {/* New Text (slides in from bottom) */}
              <span className="absolute inset-0 flex items-center justify-center text-white font-medium transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                Read More
              </span>
            </button>
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            className="flex-1 pt-8 lg:pt-16 order-2 lg:order-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Architecture is what we<br />
              live and breathe
            </h2>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
              Designing purposeful spaces with passion,<br />
              architecture shapes how we live, move,<br />
              connect, and inspire daily.
            </p>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-16 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-20"></div>
              <span className="text-orange-500 text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Hero Image (Scroll Swap) */}
      <div className="w-full max-w-7xl mx-auto relative h-[500px] md:h-[600px]">
        {/* First Image */}
        <motion.img
          src="https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57/687f53ee528350483ba0d9ee_New%20Project%20(4).jpg"
          alt="modern design house"
          className="w-full rounded-2xl shadow-lg object-cover h-full absolute top-0 left-0"
          style={{ opacity: firstImageOpacity }}
        />
        {/* Second Image */}
        <motion.img
          src="https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57/687ed68a01bb71637a16207c_New%20Project%20(4).jpg"
          alt="modern design house 2"
          className="w-full rounded-2xl shadow-lg object-cover h-full absolute top-0 left-0"
          style={{ opacity: secondImageOpacity }}
        />
      </div>
    </div>
  );
};

export default Hero;

