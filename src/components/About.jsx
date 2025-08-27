import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";

// ✅ Animated Heading (letters slide in)
const AnimatedHeading = ({ text }) => {
  const words = text.split(" ").map((word) => word.split(""));

  return (
    <h1
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 sm:mb-6"
      aria-label={text}
    >
      {words.map((chars, wi) => (
        <span key={wi} className="inline-block mr-2">
          {chars.map((char, ci) => (
            <motion.span
              key={ci}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, delay: wi * 0.1 + ci * 0.02 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
};

// ✅ Stat Item
const StatItem = ({ number, suffix = "+", title, description, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = Number(number);
      const duration = 1000;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);

      controls.start("visible");
    }
  }, [inView, number, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textVariants}
      className="py-10 border-b border-gray-600 last:border-b-0 
                 grid grid-cols-[30%_70%] items-start gap-6"
    >
      {/* 🔢 Left Number */}
      <h2 className="text-6xl md:text-7xl font-extrabold text-white">
        {count}{suffix}
      </h2>

      {/* 📖 Right Content */}
      <div>
        <p className="text-lg md:text-xl font-semibold text-white">{title}</p>
        <p className="mt-2 text-base md:text-lg text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

// ✅ Stats Card (animated items)
const StatsCard = () => (
  <div className="bg-[#0F1E17] text-white rounded-lg 
                  px-12 py-10 space-y-8 w-full h-full flex flex-col justify-center">
    <StatItem
      number={320}
      title="Employees"
      description="Total group employees contributing to innovation and excellence across industries."
      delay={0}
    />
    <StatItem
      number={225}
      suffix="M+"
      title="Projects"
      description="Worth of completed projects in global manufacturing and infrastructure sectors."
      delay={0.2}
    />
    <StatItem
      number={4}
      suffix="+"
      title="Countries"
      description="Operations spanning Liberia, Turkey, UAE, and KSA with strong international presence."
      delay={0.4}
    />
  </div>
);

// ✅ About Section
const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect on left text
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"]);

  return (
    <section ref={ref} className="py-20 bg-secondary">
      <div
        className="
          max-w-full mx-auto 
          grid grid-cols-1 md:grid-cols-[1fr,1fr] 
          gap-12 md:gap-16 lg:gap-24
          px-6 md:px-12 lg:px-20
        "
      >
        {/* ✅ Left Sticky Column */}
        <motion.div
  style={{ y }}
  className="flex flex-col justify-center md:sticky md:top-32 h-fit"
>
  <AnimatedHeading text="From humble beginnings in 2016, we have continuously expanded our operations, creating lasting impact in the industries we serve." />
  
  <motion.p
    className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed max-w-3xl"
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    <strong>2016:</strong> Commenced trading activities, establishing the foundation of our vision.<br />
    <strong>2018:</strong> Launched the Atlas Factory, our first production facility, driving innovation.<br />
    <strong>2020:</strong> Introduced Workforce Living Solutions, supporting our employees’ growth and wellbeing.
  </motion.p>
</motion.div>


        {/* ✅ Right Scrollable Stats */}
        <div className="flex items-center justify-center h-full">
          <div className="w-full h-[80vh]">
            <StatsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
