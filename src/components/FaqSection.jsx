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
    <div className="bg-[#132c28] text-white min-h-screen flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16">
      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight mb-8 sm:mb-10 md:mb-12 w-full mx-auto"
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Answers to your key{" "}
        <br className="block" /> 
        questions
      </motion.h2>

      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* FAQ List */}
        <motion.div
          className="w-full flex flex-col space-y-4 md:space-y-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex text-sm md:text-base lg:text-lg items-center justify-between border-b border-gray-500 pb-3 md:pb-4 cursor-pointer hover:border-gray-300 transition-colors duration-300 w-full"
            >
              <motion.span
                className="flex-1 pr-4 leading-relaxed"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {faq}
              </motion.span>
              <Plus className="text-white w-5 h-5 md:w-6 md:h-6 flex-shrink-0 hover:rotate-45 transition-transform duration-300" />
            </div>
          ))}
        </motion.div>

        {/* Image & Text Section */}
        <motion.div
          className="w-full flex flex-col space-y-5 md:space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57/688b733acee45ceb0e445ce7_New%20Project.jpg"
            alt="Modern building"
            className="rounded-lg w-full h-[280px] md:h-[350px] lg:h-[400px] object-cover hover:scale-105 transition-all duration-300 shadow-lg"
          />
          <div className="w-full space-y-3 md:space-y-4">
            <motion.h3
              className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Still Looking For Answers Or{" "}
              <br className="block" /> 
              Need A Good Chat?
            </motion.h3>
            <motion.p
              className="text-gray-300 text-sm md:text-base leading-relaxed w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Still have questions on your mind or need a bit more clarity?
              Whether you're exploring ideas, curious about our process, or
              simply want a thoughtful conversation—our team is here and ready
              to chat. Let's connect and bring your vision to life.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;