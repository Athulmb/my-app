import React, { useState } from "react";

const awardsData = [
  {
    title: "Visionary Award",
    year: "2025",
    description:
      "Honoring groundbreaking ideas that redefine architectural design standards.",
    image:
      "https://images.unsplash.com/photo-1616596870566-5b5f0fafff69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGhyb3BoeXxlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    title: "Excellence in Design",
    year: "2024",
    description:
      "Celebrating forward-thinking architecture that merges beauty and function.",
    image:
      "https://images.unsplash.com/photo-1596496056401-82e420f93e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2N1bHB0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    title: "Timeless Structure",
    year: "2023",
    description:
      "Recognizing enduring designs that inspire across generations and cultures.",
    image:
      "https://images.unsplash.com/photo-1596496056401-82e420f93e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhbGxlbmdlJTIwYXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    title: "Built Environment Impact",
    year: "2020",
    description:
      "Awarding projects that transform communities through purposeful design.",
    image:
      "https://images.unsplash.com/photo-1581091870623-8a92e3de051e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8&ixlib=rb-4.0.3&q=80&w=400",
  },
];

const RecognitionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#152d28] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          Recognitions We Got Awards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
          {/* Left Column - Titles */}
          <div className="flex flex-col gap-6">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className={`bg-[#1f3a33] p-6 rounded-xl cursor-pointer hover:bg-[#28503f] transition-all duration-300 ${
                  activeIndex === index ? "shadow-lg scale-105" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <h3 className="font-semibold text-lg md:text-xl">{award.title}</h3>
              </div>
            ))}
          </div>

          {/* Center Column - Image */}
          <div className="flex justify-center items-center relative">
            <img
              src={awardsData[activeIndex].image}
              alt={awardsData[activeIndex].title}
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-xl shadow-2xl transition-all duration-500"
            />
          </div>

          {/* Right Column - Details */}
          <div className="flex flex-col gap-6">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className={`bg-[#1f3a33] p-6 rounded-xl transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-0 absolute md:relative"
                }`}
              >
                <span className="font-bold text-sm md:text-base">{award.year}</span>
                <p className="mt-2 text-sm md:text-base text-gray-300">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
