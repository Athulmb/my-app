import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Ethan Walker",
    role: "lorim ipsum",
    image:
      "https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57/687f39de2e92457e2f8a7e19_Rectangle%2029.jpg",
  },
  {
    name: "Liam Bennett",
    role: "Project Manager",
    image:
      "https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57/6871f5897972b4b2fbfeff5f_Team%20Member%20(5).jpg",
  },
  {
    name: "Daniel Carter",
    role: "lorim ipsum",
    image:
      "https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57/6871f5894c28fd34774e12b9_Team%20Member%20(3).jpg",
  },
  {
    name: "Oliver James",
    role: "lorim ipusum",
    image:
      "https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57/687f3a0b14832766904ed671_Rectangle%2048%20(1).jpg",
  },
  {
    name: "Lucas Martin",
    role: "lorim ipusum",
    image:
      "https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57/687f3a21352daf2406b68167_Rectangle%2035%20(2).jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const TeamSection = () => {
  return (
    <section className="bg-[#F7F6EC] py-16 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-full mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
          {/* Left Side Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col justify-start text-center lg:text-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Our Passionate Creative Team
            </h2>
            <button className="bg-button  text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-black transition-colors duration-300 w-fit mx-auto lg:mx-0">
              Contact Us
            </button>
  
          </motion.div>

          {/* Right Side - First Two Team Members */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.slice(0, 2).map((member, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="bg-[#FDFCF0] h-[450px] sm:h-[500px] lg:h-[550px] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-2xl border border-white transition-all duration-300 hover:border-button w-full h-68 sm:h-72 lg:h-80 object-cover"
                  />
                </div>

                <div className="flex space-x-3 mb-6 mt-6">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-button hover:text-white transition-colors duration-300 cursor-pointer">
                    <Facebook size={14} />
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-button hover:text-white transition-colors duration-300 cursor-pointer">
                    <Instagram size={14} />
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-button hover:text-white transition-colors duration-300 cursor-pointer">
                    <Linkedin size={14} />
                  </div>
                </div>

                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mt-4 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Remaining Three Members */}
        <motion.div
  className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-end gap-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {teamMembers.slice(2).map((member, i) => (
    <motion.div
      key={i + 2}
      custom={i}
      variants={fadeUp}
      className="bg-[#FDFCF0] h-[450px] sm:h-[500px] lg:h-[550px] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[400px]"
    >
      <div className="mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="rounded-2xl w-full h-68 sm:h-72 lg:h-80 object-cover border border-white transition-all duration-300 hover:border-button"
        />
      </div>

      <div className="flex space-x-3 mb-6 mt-6">
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-button hover:text-white transition-colors duration-300 cursor-pointer">
          <Facebook size={14} />
        </div>
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-button hover:text-white transition-colors duration-300 cursor-pointer">
          <Instagram size={14} />
        </div>
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-button hover:text-white transition-colors duration-300 cursor-pointer">
          <Linkedin size={14} />
        </div>
      </div>

      <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 mt-4">
        {member.name}
      </h3>
      <p className="text-sm text-gray-600 font-medium">{member.role}</p>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
};

export default TeamSection;