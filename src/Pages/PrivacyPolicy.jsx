"use client";
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const PrivacyPolicy = () => {
  const { scrollY } = useViewportScroll();
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0.85]);

  return (
    <div className="relative bg-background text-white">
      {/* Hero Section */}
      <motion.section
        className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center px-6 md:px-16 overflow-hidden"
        style={{ opacity: bgOpacity }}
      >
        {/* Decorative Lines */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <svg
            className="absolute right-0 top-[30%] w-[1200px] max-w-none"
            fill="none"
            viewBox="0 0 1200 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0,250 C400,120 800,380 1200,250"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,320 C400,180 800,420 1200,320"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl font-bold"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Privacy Policy
          </motion.h1>
          <motion.div
            className="w-24 h-[3px] bg-light my-5"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We value your trust and are committed to protecting your privacy. 
            This policy outlines how we collect, use, and safeguard your information.
          </motion.p>
        </div>
      </motion.section>

      {/* Privacy Policy Content */}
      <section className="relative px-6 md:px-16 py-12 text-gray-200 max-w-5xl mx-auto leading-relaxed">
        <h2 className="text-2xl font-semibold mb-6">1. Information We Collect</h2>
        <p className="mb-6">
          We collect personal information you provide, such as your name, email address,
          and usage data when you interact with our services.
        </p>

        <h2 className="text-2xl font-semibold mb-6">2. How We Use Information</h2>
        <p className="mb-6">
          Your information helps us improve our services, personalize your experience,
          and ensure security.
        </p>

        <h2 className="text-2xl font-semibold mb-6">3. Sharing of Information</h2>
        <p className="mb-6">
          We do not sell or rent your personal data. Information may be shared only with
          trusted partners under strict confidentiality.
        </p>

        <h2 className="text-2xl font-semibold mb-6">4. Your Rights</h2>
        <p className="mb-6">
          You have the right to access, update, or request deletion of your personal data.
        </p>
      </section>

      {/* Bottom Section (Extra Details) */}
      <motion.section
        className="relative bg-[#111111] px-6 md:px-16 py-12 text-gray-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p>Email: support@example.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Company Info</h3>
            <p>Example Pvt Ltd</p>
            <p>Bangalore, India</p>
          </div>

          {/* Last Updated */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Last Updated</h3>
            <p>August 25, 2025</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PrivacyPolicy;
