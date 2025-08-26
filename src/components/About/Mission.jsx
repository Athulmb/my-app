import React, { useState } from "react";
import { motion } from "framer-motion";

const OurMission = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-background text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Text with entry animation */}
        <motion.div
          className="flex flex-col mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            Lorem Ipsum
          </h2>
          <p className="text-[#eaeaea] mb-4 max-w-5xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
            venenatis. Proin viverra risus a eros volutpat tempor.
          </p>
          <p className="text-[#eaeaea] max-w-5xl">
            Curabitur vel sem at velit placerat egestas. Suspendisse potenti.
            Integer pulvinar leo id viverra feugiat. Pellentesque libero justo,
            semper at tempus vel, ultrices in ligula.
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
                ? "https://picsum.photos/1200/800?random=2"
                : "https://picsum.photos/1200/800?random=1"
            }
            alt="Lorem ipsum"
            className="w-full h-80 md:h-96 lg:h-[500px] object-cover transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
