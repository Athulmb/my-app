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
    <div className="bg-[#132c28] text-white min-h-screen flex flex-col items-center px-6 md:px-20 py-16">
      {/* Heading with Unique Animation */}
      <motion.h2
        className="text-3xl md:text-5xl lg:text-[80px] font-bold text-center leading-tight mb-12"
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Answers to your key <br /> questions
      </motion.h2>

      <div className="w-full max-w-9xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* FAQ List */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex text-3xl md:text-xl items-center justify-between border-b border-gray-500 pb-4 cursor-pointer"
            >
              <motion.span
                className="text-3xl md:text-xl "
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {faq}
              </motion.span>
              <Plus className="text-white w-5 h-5" />
            </div>
          ))}
        </motion.div>

        {/* Image & Text Section */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57/688b733acee45ceb0e445ce7_New%20Project.jpg"
            alt="Modern building"
            className="rounded-lg w-[600px] h-[250px] md:h-[300px] lg:h-[340px] object-cover hover:scale-105 transition-all duration-300"
          />
          <div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Still Looking For Answers Or <br /> Need A Good Chat?
            </motion.h3>
            <motion.p
              className="text-gray-300 text-base leading-relaxed"
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

