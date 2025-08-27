import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <section className="bg-[#F7F6EC] min-h-screen py-16">
      {/* Heading with animation */}
      <motion.div
        className="px-6 md:px-12 lg:px-24 grid grid-cols-1 gap-8 md:gap-16 items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1C2B21] leading-snug">
        We deliver robust, future-ready solutions in oil, steel, and infrastructure development. <br className="hidden md:block" />
        Our expertise spans from concept to completion
        </h2>
      </motion.div>

      {/* Paragraph with matching animation */}
      <motion.div
        className="flex justify-start md:justify-end px-6 md:px-12 lg:px-24 mt-6 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-[#1C2B21] text-sm md:text-base max-w-lg">
          As part of our process, we begin by exploring exactly what your goals are,
          what your preferences are, and what makes your website unique. We lay the
          groundwork for the project by having conversations and workshops to establish
          a foundation for action.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="flex justify-center items-center px-6 md:px-12 lg:px-24 mt-6 relative">
        <div className="mt-4 w-40 md:w-64 h-0.5 bg-button"></div>
      </div>

      {/* 4 Cards in one row */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-6 md:px-12 lg:px-24">
        
        {/* Card 1 */}
        <motion.div
          className="rounded-xl bg-[#FDFCF0] text-gray-900 p-6 md:p-8 h-[380px] md:h-[440px] transition duration-300 hover:bg-button hover:text-white flex flex-col justify-between"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold">
            <CountUp start={0} end={225} duration={3} />+
          </h3>
          <div>
            <h4 className="mt-4 text-xl md:text-2xl font-semibold">Projects</h4>
            <p className="mt-2 text-sm md:text-md leading-relaxed">
              Innovative, functional, and beautifully crafted—our projects reflect
              bold ideas and thoughtful architectural execution.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="rounded-xl bg-[#FDFCF0] text-gray-900 p-6 md:p-8 h-[380px] md:h-[440px] transition duration-300 hover:bg-button hover:text-white flex flex-col justify-between"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold">
            <CountUp start={0} end={12} duration={2} />+
          </h3>
          <div>
            <h4 className="mt-4 text-xl md:text-2xl font-semibold">Years of Experience</h4>
            <p className="mt-2 text-sm md:text-md leading-relaxed">
              Decades of proven expertise shaping spaces with creativity,
              bold ideas and thoughtful architectural execution.
            </p>
          </div>
        </motion.div>

        {/* Video Card */}
        <motion.div
          className="rounded-xl overflow-hidden h-[280px] md:h-[440px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <video
            className="w-full h-full object-cover rounded-xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57%2F687dacb43553f3f2695b4b2f_1913231_Kingpin_Tower_1920x1080-transcode.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="rounded-xl bg-[#FDFCF0] text-gray-900 p-6 md:p-8 h-[380px] md:h-[440px] transition duration-300 hover:bg-button hover:text-white flex flex-col justify-between"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold">
            <CountUp start={0} end={24} duration={1} />+
          </h3>
          <div>
            <h4 className="mt-4 text-xl md:text-2xl font-semibold">Awards</h4>
            <p className="mt-2 text-sm md:text-md leading-relaxed">
              Recognized for excellence, our award-winning designs celebrate
              innovation, craftsmanship, and architectural impact worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;