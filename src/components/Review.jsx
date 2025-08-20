import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "James Miller",
    role: "Creative Director",
    text: "Planova has been a game-changer for my home. Their ability to blend functionality with exquisite design is unparalleled...",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Daniel Ortiz",
    role: "Principal Architect & Founder",
    text: "Choosing Planova was the best design decision I’ve made. They brought vision and expertise to every detail...",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Brand Specialist",
    text: "Working with Planova turned my vision into reality. Their flawless execution gave my living room elegance and charm...",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 4,
    name: "Daniel Ortiz",
    role: "Principal Architect & Founder",
    text: "Choosing Planova was the best design decision I’ve made. They brought vision and expertise to every detail...",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const ReviewsSection = () => {
  const [index, setIndex] = useState(0);
  const [isMdOrBelow, setIsMdOrBelow] = useState(false);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + (isMdOrBelow ? 1 : 2)) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMdOrBelow]);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => setIsMdOrBelow(window.innerWidth < 768); // md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pick 1 or 2 cards depending on screen size
  const currentCards = isMdOrBelow
    ? [reviews[index % reviews.length]]
    : [reviews[index % reviews.length], reviews[(index + 1) % reviews.length]];

  return (
    <div className="bg-secondary py-20 pl-4 md:pl-16">
      <div className="w-full mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-[90px] font-bold text-gray-900 mb-10 leading-tight">
  Client's Words
  <span className="hidden md:block">Reviews</span>
  <span className="md:hidden"> Reviews</span>
</h2>


        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Fixed Video Card */}
          <div className="w-full md:w-[418px] h-[300px] md:h-[560px] flex-shrink-0 rounded-xl overflow-hidden relative">
            <video
              src="https://cdn.prod.website-files.com/6864c5e4479c3c44f5272e57%2F687ecbbee59ca24ab7115391_0_Man_Video_Call_1280x720%20%281%29-transcode.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            ></video>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
              <h3 className="font-semibold">Inshad Zaman</h3>
              <p className="text-sm">Architect & Founder</p>
            </div>
          </div>

          {/* Right Auto-Sliding Reviews (2 at once) */}
          <div className="relative flex-1 flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index} // changes when index updates
                initial={{ x: 600 }}       // enter from right
                animate={{ x: 0 }}         // center position
                exit={{ x: -600 }}         // leave to left
                transition={{ duration: 0.6 }}
                className="flex gap-6 justify-center"
              >
                {currentCards.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white p-6 rounded-xl shadow flex flex-col h-[300px] md:h-[560px] w-[280px] md:w-[418px] max-w-[418px]"
                  >
                    {/* Stars */}
                    <div className="flex text-yellow-500 mb-4">
                      {"★".repeat(5)}
                    </div>
                    {/* Text */}
                    <p className="text-gray-700 mb-6 text-sm md:text-base">
                      {review.text}
                    </p>
                    {/* User */}
                    <div className="flex items-center mt-auto gap-4">
                      <img
                        src={review.img}
                        alt={review.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                          {review.name}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-500">
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
