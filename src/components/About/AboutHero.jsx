import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  const images = [
    {
      id: 1,
      default:
        "https://c1.wallpaperflare.com/preview/307/501/299/home-house-construction-build-building.jpg",

      hover:
      "https://songshunsteel.com/wp-content/uploads/2023/09/steel-factories.webp",
    },
    {
      id: 2,
      default:
        "https://steelforgings.com/wp-content/uploads/2022/04/What-Are-the-Different-Types-of-Steel-Used-in-Oil-and-Gas.jpg.webp",
      hover:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    },
  ];

  return (
    <section className="bg-background text-white min-h-[70vh] flex items-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        {/* Left Content with animation */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center lg:text-left"
        >
          <p className="text-light text-base sm:text-lg font-semibold mb-3">
            About Us
          </p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 mt-6"
            initial={{ rotateX: -90, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            Structures That Power Progress
          </motion.h1>
          <div className="w-12 sm:w-16 h-[3px] bg-light mx-auto lg:mx-0 mb-6"></div>
          <motion.p
            className="text-gray-300 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            We believe every structure is more than just steel and concrete—it is a foundation for growth, innovation, and progress. Our expertise in oil, gas, and construction enables us to design and build facilities that are safe, sustainable, and built to perform under the toughest conditions.
          </motion.p>
        </motion.div>

        {/* Right Images with hover transition effect */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.map((img) => (
            <HoverImage
              key={img.id}
              defaultSrc={img.default}
              hoverSrc={img.hover}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// 🔹 Hover Image Component
const HoverImage = ({ defaultSrc, hoverSrc }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg shadow-lg w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Default Image */}
      <motion.img
        src={defaultSrc}
        alt="About"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        animate={{
          opacity: hovered ? 0 : 1,
          scale: hovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Hover Image */}
      <motion.img
        src={hoverSrc}
        alt="About Hover"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 1.05,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AboutHero;