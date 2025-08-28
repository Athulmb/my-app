import React from "react";

const companies = [
  {
    id: 1,
    name: "Vega Global",
    img: "company7.png",
  },
  {
    id: 2,
    name: "Nexa Global Supply",
    img: "company1.png",
  },
  {
    id: 3,
    name: "Nova Global",
    img: "company5.png",
  },
  {
    id: 4,
    name: "Xingchen Maoyi",
    img: "company4.png",
  },
  {
    id: 5,
    name: "Izdihar Limited",
    img: "company2.png",
  },
  {
    id: 6,
    name: "Commenda Limited",
    img: "company3.png",
  },
  {
    id: 7,
    name: "Opulentia Orbis Limited",
    img: "company9.png",
  },
  {
    id: 8,
    name: "Orbitscape",
    img: "company6.png",
  },
  {
    id: 9,
    name: "Starpath Commerce",
    img: "company8.png",
  },
];

const LogoSliderSection = () => {
  return (
    <div className="bg-slate-900 py-8 sm:py-12">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Stacked */}
        <div className="block lg:hidden">
          <div className="text-center mb-8">
            <h2 className="text-white text-xl sm:text-2xl font-light leading-relaxed">
              Our Trading
              <br />
              <span className="font-normal">Companies</span>
            </h2>
          </div>
          
          {/* Mobile Logo Slider */}
          <div className="relative overflow-hidden">
            {/* Left blur fade */}
            <div className="absolute left-0 top-0 w-8 sm:w-12 h-full bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
            {/* Right blur fade */}
            <div className="absolute right-0 top-0 w-8 sm:w-12 h-full bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-scroll-mobile">
              {/* Triple the logos for seamless infinite scroll */}
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div
                  key={`mobile-${index}`}
                  className="flex items-center justify-center h-12 sm:h-16 w-24 sm:w-32 flex-shrink-0 mx-3 sm:mx-5
                           hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <img
                    src={company.img}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70
                             hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex items-center">
          {/* Left Section - Text */}
          <div className="flex-shrink-0 w-64 xl:w-80 pr-8">
            <h2 className="text-white text-2xl xl:text-3xl font-light leading-relaxed">
              Our Trading
              <br />
              <span className="font-normal">Companies</span>
            </h2>
          </div>

          {/* Right Section - Moving Logos */}
          <div className="flex-1 overflow-hidden relative">
            {/* Left blur fade */}
            <div className="absolute left-0 top-0 w-16 xl:w-20 h-full bg-gradient-to-r from-slate-900 via-slate-900/90 via-slate-900/70 to-transparent z-10 pointer-events-none"></div>
            {/* Right blur fade */}
            <div className="absolute right-0 top-0 w-16 xl:w-20 h-full bg-gradient-to-l from-slate-900 via-slate-900/90 via-slate-900/70 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-scroll-desktop">
              {/* Triple the logos for seamless infinite scroll */}
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div
                  key={`desktop-${index}`}
                  className="flex items-center justify-center h-16 xl:h-20 w-36 xl:w-44 flex-shrink-0 mx-5 xl:mx-8
                           hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <img
                    src={company.img}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70
                             hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-mobile {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-${(24 + 2 * 3) * 4 * companies.length / 3}px));
            }
          }
          
          @keyframes scroll-desktop {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-${(36 + 2 * 5) * 4 * companies.length / 3}px));
            }
          }
          
          .animate-scroll-mobile {
            animation: scroll-mobile 20s linear infinite;
            width: max-content;
          }
          
          .animate-scroll-desktop {
            animation: scroll-desktop 25s linear infinite;
            width: max-content;
          }
          
          .animate-scroll-mobile:hover,
          .animate-scroll-desktop:hover {
            animation-play-state: paused;
          }
          
          @media (min-width: 640px) {
            @keyframes scroll-mobile {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-${(32 + 2 * 5) * 4 * companies.length / 3}px));
              }
            }
          }
          
          @media (min-width: 1280px) {
            @keyframes scroll-desktop {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-${(44 + 2 * 8) * 4 * companies.length / 3}px));
              }
            }
          }

          /* Ensure smooth performance */
          .animate-scroll-mobile,
          .animate-scroll-desktop {
            will-change: transform;
            backface-visibility: hidden;
            perspective: 1000px;
          }
        `
      }} />
    </div>
  );
};

export default LogoSliderSection;