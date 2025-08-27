import React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  "What services does GULF offer?",
  "How is sustainability incorporated in your processes?",
  "What is the typical timeline for a supply chain project?",
  "Can GULF handle international projects?",
  "What are your key sectors?",
];

const FAQSection = () => {
  return (
    <div className="bg-background text-white min-h-screen flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16">
      
      {/* ✅ Heading Wrapper */}
<div className="w-full mb-12 sm:mb-14 md:mb-16">
  <motion.h2
    className="text-2xl sm:text-3xl md:text-4xl lg:text-8xl font-bold text-center leading-tight tracking-tight w-full mx-auto"
    initial={{ opacity: 0, y: -30, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    Answers to your key{" "}
    <br className="block" /> 
    questions
  </motion.h2>
</div>


      {/* ✅ Q&A Wrapper */}
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 lg:gap-12 items-start mt-16">
        
        {/* Left: FAQ List (60%) */}
        <motion.div
          className="w-full flex flex-col space-y-6 md:space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex text-lg sm:text-xl md:text-2xl lg:text-3xl items-center justify-between border-b border-gray-500 pb-3 md:pb-5 cursor-pointer hover:border-gray-300 transition-colors duration-300 w-full"
            >
              <motion.span
                className="flex-1 pr-4 leading-relaxed"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {faq}
              </motion.span>
              <Plus className="text-white w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0 hover:rotate-45 transition-transform duration-300" />
            </div>
          ))}
        </motion.div>

        {/* Right: Image & Text (40%) */}
        <motion.div
          className="w-full flex flex-col items-start space-y-5 md:space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/last.png"
            alt="Modern building"
            className="rounded-lg w-[80%] md:w-[80%] lg:w-[90%] h-[200px] md:h-[260px] lg:h-[300px] object-cover hover:scale-105 transition-all duration-300 shadow-lg"
          />
          <div className="w-full space-y-3 md:space-y-4 text-center lg:text-left">
            <motion.h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Still Looking For Answers Or{" "}
              <br className="block" /> 
              Need A Good Chat?
            </motion.h3>
            <motion.p
              className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Still Looking For Answers? Need A Good Chat?
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;
