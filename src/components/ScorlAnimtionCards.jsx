import React, { useRef, useEffect } from "react";

const ScrollAnimatedStackSections = () => {
  const sections = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1600&q=80",
      title: "Yellow Suites",
      description:
        "Vera Heights was a multi-unit housing project designed to reflect the surrounding hillside terrain. The approach emphasized terraced layouts and natural light.",
      tags: ["Health", "Technology", "Monitoring", "Innovation"],
      number: "01",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      title: "Blue Complex",
      description:
        "An innovative residential development that harmonizes with the natural landscape through sustainable design principles and modern architectural elements.",
      tags: ["Premium", "Excellence", "Standards", "Professional"],
      number: "02",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      title: "Green Gardens",
      description:
        "A thoughtfully designed community space that integrates green living concepts with contemporary urban planning and environmental consciousness.",
      tags: ["Compassion", "Comfort", "Love", "Attention"],
      number: "03",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1486308510493-aa64833634ef?auto=format&fit=crop&w=1600&q=80",
      title: "Modern Heights",
      description:
        "Cutting-edge architectural design that combines functionality with aesthetic appeal, creating spaces that inspire and elevate daily living experiences.",
      tags: ["Trust", "Reliability", "Communication", "Partnership"],
      number: "04",
    },
  ];

  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current || !cardsContainerRef.current)
      return;

    const sectionHeight =
      window.innerHeight * (sections.length - 1) + window.innerHeight;
    sectionRef.current.style.height = `${sectionHeight}px`;

    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      if (sectionTop <= 0 && sectionBottom >= window.innerHeight) {
        const scrollProgress =
          Math.abs(sectionTop) / (sectionHeight - window.innerHeight);
        const total = sections.length;
        const exactIndex = scrollProgress * (total - 1);
        const activeIndex = Math.floor(exactIndex);
        const progressWithinCard = exactIndex - activeIndex;

        // ✅ Keep container fixed except last card
        if (activeIndex === sections.length - 1) {
          containerRef.current.style.position = "relative";
          containerRef.current.style.top = "auto";
        } else {
          containerRef.current.style.position = "fixed";
          containerRef.current.style.top = "0";
          containerRef.current.style.left = "0";
          containerRef.current.style.width = "100%";
          containerRef.current.style.height = "100vh";
        }

        if (cardsContainerRef.current) {
          const cards = cardsContainerRef.current.children;

          for (let i = 0; i < cards.length; i++) {
            if (i < activeIndex) {
              cards[i].style.transform = "translateY(-100%)";
              cards[i].style.opacity = "1";
              cards[i].style.visibility = "hidden";
              cards[i].style.zIndex = "1";
            } else if (i === activeIndex) {
              cards[i].style.transform = "translateY(0)";
              cards[i].style.opacity = "1";
              cards[i].style.visibility = "visible";
              cards[i].style.zIndex = "10";
            } else if (i === activeIndex + 1 && activeIndex < sections.length - 1) {
              if (progressWithinCard < 0.3) {
                cards[i].style.transform = "translateY(100%)";
                cards[i].style.opacity = "1";
                cards[i].style.visibility = "hidden";
                cards[i].style.zIndex = "15";
              } else {
                const slideProgress = (progressWithinCard - 0.3) / 0.7;
                const translateY = (1 - slideProgress) * 100;
                cards[i].style.transform = `translateY(${translateY}%)`;
                cards[i].style.opacity = "1";
                cards[i].style.visibility = "visible";
                cards[i].style.zIndex = "15";
              }
            } else {
              cards[i].style.transform = "translateY(100%)";
              cards[i].style.opacity = "1";
              cards[i].style.visibility = "hidden";
              cards[i].style.zIndex = "1";
            }
          }
        }
      } else {
        containerRef.current.style.position = "relative";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections.length]);

  return (
    <div ref={sectionRef} className="w-full bg-secondary pt-[80px]">
      <div
        ref={containerRef}
        className="w-full h-screen flex flex-col items-center justify-start py-6 px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="w-full max-w-7xl text-left mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 tracking-tight">
              Latest Projects
            </h1>
            <div className="hidden md:block">
              <button className="relative overflow-hidden px-6 py-2 rounded-md font-medium group bg-button">
                <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black rounded-md transform -translate-x-1/2 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></span>
                <span className="relative z-10 block text-white transition-transform duration-500 group-hover:-translate-y-[180%]">
                  see all projects
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-white font-medium transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  see all projects
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Animated cards */}
        <div className="w-full max-w-full flex-grow flex items-end justify-center pb-8">
          <div
            ref={cardsContainerRef}
            className="relative h-[75vh] w-full overflow-visible"
          >
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="absolute w-full h-full"
                style={{
                  zIndex: 10,
                  transform: index === 0 ? "translateY(0)" : "translateY(100%)",
                  opacity: 1,
                  visibility: index === 0 ? "visible" : "hidden",
                }}
              >
                <div className="relative w-full h-auto md:h-[600px] bg-transparent overflow-visible">
                  <div className="flex flex-col lg:flex-row gap-6 h-full relative">
                    {/* Orange Number Badge */}
                    <div className="absolute left-4 top-4 lg:left-0 lg:top-8 z-20 transform lg:-translate-x-1/2">
                      <div className="bg-button text-white px-4 py-3 rounded-lg font-bold text-lg md:text-xl shadow-xl min-w-[50px] md:min-w-[60px] text-center">
                        {section.number}
                      </div>
                    </div>

                    {/* Left side - Text */}
                    <div
                      className="group bg-[#f4f3e6] hover:bg-[#2D4A3E] px-6 sm:px-8 md:px-10 py-10 flex flex-col justify-between relative rounded-2xl shadow-lg transition-colors duration-300 flex-1"
                    >
                      <div className="mt-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-black group-hover:text-white transition-colors duration-300">
                          {section.title}
                        </h2>

                        <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
                          {section.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-sm sm:text-base md:text-lg text-black font-medium transition-colors duration-200 cursor-pointer group-hover:text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto">
                        <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed font-normal group-hover:text-white transition-colors duration-300">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative overflow-hidden rounded-2xl shadow-lg flex-1 h-64 sm:h-80 md:h-full">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimatedStackSections;
