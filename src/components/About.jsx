import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";

// Animated heading (characters appear on load)
const AnimatedHeading = ({ text }) => {
  const words = text.split(" ").map((word) => word.split(""));

  return (
    <h2
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#1F2E2B] leading-snug mb-4 sm:mb-6"
      aria-label={text}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {words.map((chars, wi) => (
        <div
          key={wi}
          className="word"
          aria-hidden="true"
          style={{ position: "relative", display: "inline-block", marginRight: "0.25rem" }}
        >
          {chars.map((char, ci) => (
            <motion.span
              key={ci}
              className="char"
              aria-hidden="true"
              style={{ display: "inline-block", transformOrigin: "50% 50%" }}
              initial={{ y: 20, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.25, delay: wi * 0.1 + ci * 0.02 }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </h2>
  );
};

// Stat item with count-up animation
const StatItem = ({ number, title, description, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = number;
      const duration = 1000; // 1 second
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={textVariants}>
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">{count}+</h3>
      <p className="mt-1 sm:mt-2 font-semibold text-sm sm:text-base">{title}</p>
      <p className="text-xs sm:text-sm text-gray-300">{description}</p>
    </motion.div>
  );
};

// Stats Card
const StatsCard = () => (
  <div className="bg-[#1F2E2B] text-white rounded-lg p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 md:space-y-8 w-full sm:w-[300px] md:w-[350px] lg:w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex flex-col justify-center">
    <StatItem
      number={82}
      title="Projects"
      description="Designed and executed 30+ mixed-use spaces that blend community, commerce, and culture."
      delay={0}
    />
    <hr className="border-gray-600" />
    <StatItem
      number={12}
      title="Years of Experience"
      description="Delivered masterplans for 12 urban regeneration projects across key metropolitan areas."
      delay={0.2}
    />
    <hr className="border-gray-600" />
    <StatItem
      number={13}
      title="Awards"
      description="Led the development of 40 sustainable buildings with an emphasis on energy efficiency and design integrity."
      delay={0.4}
    />
  </div>
);

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);

  return (
    <section ref={ref} className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
        {/* Left Content */}
        <motion.div
          style={{ y }}
          className="flex flex-col justify-center mx-0 md:mx-10 md:sticky md:top-1/2"
        >
          <AnimatedHeading text="Rooted in Scandinavian design traditions, we approach every project with a deep respect for the city, its history, and the people who shape its future" />

          <motion.p
            className="text-[#1F2E2B]/80 leading-relaxed text-sm sm:text-base"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Collaboration is at the heart of everything we do. By working closely with clients, planners, and experts, we design spaces that balance functionality, beauty, and sustainability. Each project contributes to the urban landscape, creating meaningful connections between architecture, its surroundings, and the people who experience it.
          </motion.p>
        </motion.div>

        {/* Right Stats Card */}
        <StatsCard />
      </div>
    </section>
  );
};

export default AboutSection;
