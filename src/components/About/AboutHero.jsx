import React, { useState } from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  const images = [
    {
      id: 1,
      default:
        "https://images.unsplash.com/photo-1529429617124-95b109e86a52?w=800&q=80",
      hover:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
    },
    {
      id: 2,
      default:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      hover:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    },
  ];

  return (
    <section className="bg-background text-white h-[70vh] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content with animation */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-light font-semibold mb-3">
            Lorem ipsum dolor
          </p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 mt-10"
            initial={{ rotateX: -90, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            Lorem ipsum <br /> dolor sit amet
          </motion.h1>
          <div className="w-16 h-[3px] bg-light mb-6"></div>
          <motion.p
            className="text-gray-300 max-w-lg"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            faucibus, nisl nec malesuada ultricies, purus lectus hendrerit
            lorem, eget luctus massa justo a orci. Sed dictum, magna eu
            malesuada porttitor, velit est ultrices justo, vel semper sapien
            nibh ac leo.
          </motion.p>
        </motion.div>

        {/* Right Images with hover transition effect */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
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
      className="relative rounded-lg shadow-lg w-full h-[280px] md:h-[320px] overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Default Image */}
      <motion.img
        src={defaultSrc}
        alt="Lorem"
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
        alt="Lorem Hover"
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
