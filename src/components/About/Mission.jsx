import React, { useState } from "react";
import { motion } from "framer-motion";

const OurMission = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-background min-h-[80vh] text-white py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Text with entry animation */}
        <motion.div
          className="flex flex-col mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-[#eaeaea] mt-4 font-normal mb-4 text-sm sm:text-base md:text-lg lg:text-[22px] max-w-5xl">
            We are dedicated to shaping spaces that spark imagination and foster
            connection. Every design balances creativity with purpose, ensuring
            architecture that not only serves but also inspires.
          </p>
          <p className="text-[#eaeaea] font-normal text-sm sm:text-base md:text-lg lg:text-[22px] max-w-6xl">
            Through innovation, sustainability, and timeless craftsmanship, we
            strive to build environments that enrich lives, uplift communities,
            and create a lasting legacy.
          </p>
        </motion.div>

        {/* Image with hover effect and animation */}
        <motion.div
          className="w-full rounded-xl mt-8 overflow-hidden shadow-lg mb-6 cursor-pointer"
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
                ? "https://oilreviewmiddleeast.com/images/Refinery_-_AdobeStock_497491056_for_new_website.jpg"
                : "view-futuristic-engineering-park.jpg"
            }
            alt="Mission"
            className="w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
