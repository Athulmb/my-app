import React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  "What services does Planova offer?",
  "How involved will I be in the design process?",
  "Can Planova handle both residential and commercial projects?",
  "How long does a typical project take?",
  "Do you offer turnkey solutions?",
];

const FAQSection = () => {
  return (
    <div className="bg-[#132c28] text-white min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16">
      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] font-bold text-center leading-snug md:leading-tight mb-10 md:mb-12"
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Answers to your key <br className="hidden sm:block" /> questions
      </motion.h2>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* FAQ List */}
        <motion.div
          className="flex flex-col space-y-5 sm:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex text-base sm:text-lg md:text-xl lg:text-2xl items-center justify-between border-b border-gray-500 pb-3 sm:pb-4 cursor-pointer"
            >
              <motion.span
                className="flex-1 pr-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {faq}
              </motion.span>
              <Plus className="text-white w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            </div>
          ))}
        </motion.div>

        {/* Image & Text Section */}
        <motion.div
          className="flex flex-col space-y-5 sm:space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57/688b733acee45ceb0e445ce7_New%20Project.jpg"
            alt="Modern building"
            className="rounded-lg w-full h-auto max-h-[400px] object-cover hover:scale-105 transition-all duration-300"
          />
          <div>
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Still Looking For Answers Or <br className="hidden sm:block" /> Need A Good Chat?
            </motion.h3>
            <motion.p
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Still have questions on your mind or need a bit more clarity?
              Whether you're exploring ideas, curious about our process, or
              simply want a thoughtful conversation—our team is here and ready
              to chat. Let’s connect and bring your vision to life.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
