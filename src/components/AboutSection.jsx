import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], 
  });

  // Smoothly move from top → center
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);

  return (
    <section ref={ref} className="bg-[#F7F7EC] py-16 px-6">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left Content - Top initially, then smoothly center on scroll */}
        <motion.div
          style={{ y }}
          className="flex flex-col justify-center mx-10 
                     md:sticky md:top-1/2" 
        >
          <h2 className="text-3xl md:text-4xl text-[#1F2E2B] leading-snug">
            Rooted in Scandinavian design traditions, we approach every project
            with a deep respect for the city, its history, and the people who
            shape its future
          </h2>
          <p className="mt-6 text-[#1F2E2B]/80 leading-relaxed">
            Collaboration is at the heart of everything we do. By working
            closely with clients, planners, and experts, we design spaces that
            balance functionality, beauty, and sustainability. Each project
            contributes to the urban landscape, creating meaningful connections
            between architecture, its surroundings, and the people who
            experience it. It is a long established fact that a reader will be
            distracted by the readable content.
          </p>
        </motion.div>

        {/* Right Stats Card - vertically centered */}
        <div className="flex items-center">
          <div
            className="bg-[#1F2E2B] text-white rounded-lg p-8 space-y-8 
                        w-full md:w-[420px] lg:w-[700px] 
                        min-h-[700px] flex flex-col justify-center"
          >
            {/* Projects */}
            <div>
              <h3 className="text-5xl font-bold">82+</h3>
              <p className="mt-2 font-semibold">projects</p>
              <p className="text-sm text-gray-300">
                Designed and executed 30+ mixed-use spaces that blend community,
                commerce, and culture.
              </p>
            </div>
            <hr className="border-gray-600" />

            {/* Years of Experience */}
            <div>
              <h3 className="text-5xl font-bold">12+</h3>
              <p className="mt-2 font-semibold">Years of Experience</p>
              <p className="text-sm text-gray-300">
                Delivered masterplans for 12 urban regeneration projects across
                key metropolitan areas.
              </p>
            </div>
            <hr className="border-gray-600" />

            {/* Awards */}
            <div>
              <h3 className="text-5xl font-bold">13</h3>
              <p className="mt-2 font-semibold">Awards</p>
              <p className="text-sm text-gray-300">
                Led the development of 40 sustainable buildings with an emphasis
                on energy efficiency and design integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
