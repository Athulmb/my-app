import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

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
      title: "Aviation Brokerage",
      description: `We provide comprehensive aviation brokerage services, connecting buyers and sellers of aircraft worldwide. Our team ensures smooth transactions with compliance, due diligence, and expert market guidance.`,
      steps: [
        "Aircraft acquisition",
        "Aircraft sales",
        "Market valuation",
        "Legal & compliance support",
        "Transaction management",
      ],
    },
    {
      id: "02",
      title: "Venture Capital Investments",
      description: `Our venture capital division invests in high-potential startups and emerging businesses. We focus on strategic growth, mentoring, and fostering innovation across various sectors.`,
      steps: [
        "Startup evaluation",
        "Funding & capital allocation",
        "Business mentoring",
        "Growth strategy support",
        "Portfolio management",
      ],
    },
    {
      id: "03",
      title: "Mining Exploration Activities",
      description: `We engage in responsible mining exploration, identifying and developing mineral resources. Our operations prioritize efficiency, safety, and environmental sustainability.`,
      steps: [
        "Site exploration",
        "Geological survey",
        "Mineral assessment",
        "Equipment deployment",
        "Sustainable mining practices",
      ],
    },
    {
      id: "04",
      title: "Equipment Rental & Supply",
      description: `We provide reliable equipment rental and supply solutions for industrial, mining, and construction projects. Our inventory ensures operational efficiency and timely support.`,
      steps: [
        "Heavy machinery rental",
        "Tools & equipment supply",
        "Maintenance & support",
        "Logistics coordination",
        "Custom rental solutions",
      ],
    },
    {
      id: "05",
      title: "Energy Solutions",
      description: `Our energy solutions division focuses on renewable and conventional energy systems, offering innovative solutions for power generation, efficiency, and sustainability.`,
      steps: [
        "Renewable energy systems",
        "Power generation solutions",
        "Energy efficiency consulting",
        "Project design & implementation",
        "Ongoing maintenance support",
      ],
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen py-20 px-6 md:px-20 font-manrope bg-secondary">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-20 px-4 lg:px-0">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 px-0 lg:px-6">
            <p className="text-[#1D2D28] text-base sm:text-lg leading-relaxed animate-fadeInUp font-normal">
              From strategic planning to execution, our services cover every aspect of your business needs.
            </p>
          </div>

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
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3 flex gap-6">
                  <span className="text-button font-semibold text-2xl">({service.id})</span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-gray-700 transition-all duration-500">
                    {service.title}
                  </h3>
                </div>

                <div className="lg:w-1/3 border-l border-gray-300 pl-10 relative">
                  <p className="text-[#1D2D28] text-sm leading-[1.6] font-normal whitespace-pre-line">
                    {service.description}
                  </p>

                  {hoveredService === index && (
  <button
    className="absolute bg-gray-900 text-white font-bold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center text-sm"
    style={{
      left: "50%",
      bottom: "-32px",
      transform: `translate(-50%, 0) translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
      width: "80px",
      height: "40px",
      borderRadius: "50%",
      transition: "transform 0.1s ease-out, background-color 0.3s ease",
    }}
    onClick={() => {
      const section = document.getElementById("services-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    Open
  </button>
)}

                </div>

                <div className="lg:w-1/3 flex justify-center">
                  <div className="space-y-3">
                    {service.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start gap-3 group/step">
                        <span className="text-gray-900 font-medium text-sm">{stepIndex + 1}.</span>
                        <span className="text-gray-700 text-sm font-bold group-hover/step:text-gray-900 transition-colors duration-300">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 mt-16"></div>
      </div>

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
