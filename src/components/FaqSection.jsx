import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What services does GULF offer?",
    answer: "GULF provides comprehensive supply chain solutions including logistics management, procurement services, inventory optimization, distribution networks, and end-to-end supply chain consulting across multiple industries."
  },
  {
    question: "How is sustainability incorporated in your processes?",
    answer: "Sustainability is at the core of our operations. We implement green logistics practices, optimize transportation routes to reduce carbon footprint, use eco-friendly packaging materials, and work with suppliers who share our commitment to environmental responsibility."
  },
  {
    question: "What is the typical timeline for a supply chain project?",
    answer: "Project timelines vary based on complexity and scope. Simple optimization projects may take 2-4 weeks, while comprehensive supply chain transformations can take 3-6 months. We provide detailed timelines during initial consultation."
  },
  {
    question: "Can GULF handle international projects?",
    answer: "Yes, we have extensive experience in international supply chain management. Our global network and partnerships enable us to handle cross-border logistics, international compliance, customs management, and multi-country distribution efficiently."
  },
  {
    question: "What are your key sectors?",
    answer: "We specialize in manufacturing, retail, automotive, healthcare, technology, energy, and FMCG sectors. Our expertise spans across industries with tailored solutions for each sector's unique supply chain challenges."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-background text-white min-h-screen flex flex-col px-4 sm:px-6 md:px-10 lg:px-28 py-6 sm:py-8 md:py-10">
      
      {/* Heading Wrapper */}
      <div className="w-full mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-center leading-tight tracking-tight w-full mx-auto">
          Answers to your key{" "}
          <br className="block" />
          questions
        </h2>
      </div>

      {/* Q&A Wrapper */}
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-[65%_35%] gap-4 lg:gap-8 items-start mt-4 lg:mt-8">
        
        {/* Left: FAQ List */}
        <div className="w-full flex flex-col space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/20 pb-3">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left py-3 hover:text-button transition-colors duration-300 group"
              >
                <span className="flex-1 pr-4 leading-relaxed text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                  {openItems[index] ? (
                    <Minus className="w-6 h-6 sm:w-7 sm:h-7 text-light" />
                  ) : (
                    <Plus className="w-6 h-6 sm:w-7 sm:h-7 text-light group-hover:scale-110 group-hover:rotate-90 transition-all duration-300" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openItems[index] ? 'max-h-96 opacity-100 pb-3' : 'max-h-0 opacity-0'
              }`}>
                <div className="text-gray-300 text-base md:text-lg leading-relaxed pl-0">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image & Text */}
        <div className="w-full flex flex-col items-start space-y-4 md:space-y-5">
          <div className="w-full">
            <img
              src="/last.png"
              alt="Modern building"
              className="rounded-2xl w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover hover:scale-105 transition-all duration-500 shadow-2xl border border-white/10"
            />
          </div>
          
          {/* Text below image */}
          <div className="w-full space-y-3 md:space-y-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
              Still Looking For Answers Or{" "}
              <br className="block" />
              Need A Good Chat?
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Still have questions on your mind or need a bit more clarity? Whether you're 
              exploring ideas, curious about our process, or simply want a thoughtful 
              conversation—our team is here and ready to chat. Let's connect and bring 
              your vision to life.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;