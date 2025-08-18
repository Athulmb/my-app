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
    <div ref={sectionRef} className="w-full bg-gray-50 pt-[80px]">
      <div
        ref={containerRef}
        className="w-full h-screen flex flex-col items-center justify-start py-6 px-8"
      >
        {/* Header */}
        <div className="w-full max-w-7xl text-left mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 tracking-tight">
              Latest Projects
            </h1>
            <div className="hidden md:block">
              <button className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-8 py-3 rounded-xl font-semibold text-lg transition-colors duration-200">
                See All project
              </button>
            </div>
          </div>
        </div>

        {/* Animated cards */}
        <div className="w-full max-w-7xl flex-grow flex items-end justify-center pb-8">
          <div
            ref={cardsContainerRef}
            className="relative h-[65vh] w-full overflow-hidden"
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
                <div className="relative w-full h-[450px] bg-white rounded-3xl overflow-hidden shadow-lg">
                  <div className="grid grid-cols-2 gap-x-10 h-full relative">
                    {/* Orange Number Badge */}
                    <div className="absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-2 z-20">
                      <div className="bg-[#FF5722] text-white px-4 py-2 rounded-lg font-bold text-xl min-w-[60px] text-center shadow-lg">
                        {section.number}
                      </div>
                    </div>

                    {/* Left side */}
                    <div className="bg-gray-50 px-12 py-16 flex flex-col justify-between relative">
                      <div className="mt-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 leading-tight">
                          {section.title}
                        </h2>
                        <div className="flex flex-wrap gap-6 mb-12">
                          {section.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-gray-500 text-sm font-medium border-b border-gray-300 pb-1 hover:text-gray-700 hover:border-gray-500 transition-colors duration-200 cursor-pointer"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-base leading-relaxed font-normal">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative overflow-hidden">
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
