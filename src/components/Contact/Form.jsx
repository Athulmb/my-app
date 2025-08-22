import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="bg-secondary py-16 px-6 lg:px-20">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex flex-col justify-between h-full"
>
  {/* 🔹 Top Section */}
  <div>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
      Let us know what you think
    </h2>
    <hr className="w-24 border-t-2 border-gray-300 my-4" />
    <p className="text-gray-600 max-w-lg">
      There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised
    </p>
  </div>

  {/* 🔹 Bottom Section (Contact Info) */}
  <div className="mt-10 space-y-6 text-gray-800">
    <div>
      <h4 className="font-semibold">Phone</h4>
      <p>+9190-8687-3345</p>
    </div>
    <div>
      <h4 className="font-semibold">Email</h4>
      <p>planova@domain.com</p>
    </div>
    <div>
      <h4 className="font-semibold">Location</h4>
      <p>123 Baker Street, London, W1U 6RD, United Kingdom</p>
    </div>
  </div>
</motion.div>


        {/* Right Section (Form) */}
        <motion.div
          className="bg-[#f8f8e9] p-8 rounded-xl shadow-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <form className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your First Name"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-button outline-none"
              />
              <input
                type="text"
                placeholder="Your Last Name"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-button outline-none"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full px-4 py-3 border rounded-sm focus:ring-2 focus:ring-button outline-none"
              />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-button outline-none"
              />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select className="w-full px-4 py-3 border rounded-md text-gray-600 focus:ring-2 focus:ring-button outline-none">
                <option>Select Your Service</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Mobile App</option>
              </select>
              <select className="w-full px-4 py-3 border rounded-md text-gray-600 focus:ring-2 focus:ring-button outline-none">
                <option>Select Your Range</option>
                <option>$1000 - $5000</option>
                <option>$5000 - $10000</option>
                <option>$10000+</option>
              </select>
            </div>

            {/* Project Details */}
            <textarea
              rows="5"
              placeholder="Tell us more about idea"
              className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
            ></textarea>

            {/* Button */}
            {/* Button with hover animation */}
<div className="hidden md:block">
  <button
    type="submit"
    className="relative overflow-hidden w-full py-3 rounded-full font-medium group bg-button"
  >
    {/* Expanding black background */}

    {/* Text sliding up */}
    <span className="relative z-10 block text-white transition-transform duration-500 group-hover:-translate-y-[180%]">
      Send Inquiry
    </span>

    {/* Text appearing from below */}
    <span className="absolute inset-0 flex items-center justify-center text-black font-medium transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
      Send Inquiry
    </span>
  </button>
</div>

          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
