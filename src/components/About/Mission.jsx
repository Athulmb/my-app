import React, { useState } from "react";
import { motion } from "framer-motion";

const OurMission = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-[#152d28] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Text with entry animation */}
        <motion.div
          className="flex flex-col mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-[#eaeaea] mb-4 max-w-5xl">
            Our mission is to design spaces that inspire, elevate, and endure. We
            believe architecture should serve both form and function while
            reflecting the unique identity of each client.
          </p>
          <p className="text-[#eaeaea] max-w-5xl">
            Through thoughtful planning, innovative solutions, and a commitment to
            excellence, we aim to create environments that enrich lives,
            strengthen communities, and stand the test of time.
          </p>
        </motion.div>

        {/* Image with hover effect and animation */}
        <motion.div
          className="w-full rounded-xl overflow-hidden shadow-lg mb-6 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={
              hovered
                ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80"
                : "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1350&q=80"
            }
            alt="Modern architecture"
            className="w-full h-80 md:h-96 lg:h-[500px] object-cover transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
