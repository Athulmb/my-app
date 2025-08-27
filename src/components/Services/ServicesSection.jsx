import React, { useState, useRef, useEffect } from "react";

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 100;
        const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const services = [
    {
      id: "01",
      title: "Procurement & Sourcing",
      description:
        "Every project begins with a strong foundation. We start by uncovering client needs, defining goals, and aligning stakeholder visions. Through global procurement and logistics, we source materials with precision to establish your value proposition.",
      steps: [
        "Uncover client needs",
        "Define project goals",
        "Align stakeholder vision",
        "Clarify core purpose",
        "Establish value proposition",
      ],
    },
    {
      id: "02",
      title: "Fabrication & Development",
      description:
        "With clarity established, we dive deep into development. This stage is a thoughtful process of exploration, material sourcing, and refinement. Through iteration and fabrication, we integrate solutions that align seamlessly with your goals.",
      steps: [
        "Conceptual ideas",
        "Sourcing materials",
        "Select key components",
        "Final fabrication iteration",
        "Integrate solutions",
      ],
    },
    {
      id: "03",
      title: "Delivery & Execution",
      description:
        "Execution is where strategy meets action. We mobilize the right teams, coordinate phases, and ensure rigorous quality control. With collaborative planning, we implement solutions and deliver the final product with excellence.",
      steps: [
        "Mobilize project team",
        "Coordinate phases",
        "Monitor quality control",
        "Implement solutions",
        "Deliver final product",
      ],
    },
  ];
  
  

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <div ref={containerRef} className="min-h-screen py-20 px-6 md:px-20 font-manrope bg-secondary">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-20 px-4 lg:px-0">
          {/* Text Section */}
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 px-0 lg:px-6">
            <p className="text-[#1D2D28] text-base sm:text-lg leading-relaxed animate-fadeInUp font-normal">
            From sourcing to execution, every step delivered with precision.
            </p>
          </div>

          {/* Heading Section */}
          <div className="w-full lg:w-2/3 lg:pl-12 flex justify-start lg:justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[5rem] font-bold text-gray-900 leading-snug lg:leading-tight animate-slideInRight tracking-tight">
              Services We Provide
            </h2>
          </div>
        </div>


        {/* Services List */}
        <div>
          {services.map((service, index) => (
            <div
              key={service.id}
              className="border-t border-gray-300 py-16 group cursor-pointer relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Row */}
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Side: ID + Title */}
                <div className="lg:w-1/3 flex gap-6">
                  <span className="text-button  font-semibold text-2xl">({service.id})</span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-gray-700 transition-all duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Middle: Description */}
                <div className="lg:w-1/3 border-l border-gray-300 pl-10 relative">
                  <p className="text-[#1D2D28] text-sm  leading-[1.6] font-normal">
                    {service.description}
                  </p>

                  {/* Hover Button */}
                  {hoveredService === index && (
                    <button
                      className="absolute bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center text-sm"
                      style={{
                        left: "50%",
                        bottom: "-32px",
                        transform: `translate(-50%, 0) translateX(${mousePosition.x * 1}px) translateY(${mousePosition.y * 1}px)`,
                        width: "80px",       // smaller width
                        height: "40px",       // smaller height
                        borderRadius: "50%",  // keeps oval shape
                        transition: "transform 0.1s ease-out, background-color 0.3s ease",
                      }}
                      onClick={() => toggleService(index)}
                    >
                      {activeService === index ? "Close" : "Open"}
                    </button>


                  )}
                </div>

                {/* Right Side: Steps */}
                <div className="lg:w-1/3 flex justify-center">
                  <div className="space-y-3">
                    {service.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3 group/step">
                        <span className="text-gray-900 font-medium text-sm">
                          {stepIndex + 1}.
                        </span>
                        <span className="text-gray-700 text-sm font-bold group-hover/step:text-gray-900 transition-colors duration-300">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${activeService === index ? "max-h-96 opacity-100 mt-12" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="bg-gray-100 rounded-2xl p-8 lg:ml-[calc(33%+2.5rem)]">
                  <p className="text-gray-700 text-base leading-[1.6] font-normal">
                    Expanded content for {service.title}. This section provides additional details about the service process,
                    methodologies, and expected outcomes. Our collaborative approach ensures that every project meets your
                    specific requirements and exceeds expectations.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-300 mt-16"></div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default Services;
