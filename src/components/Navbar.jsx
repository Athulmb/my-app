import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

// ✅ Navbar Data
const navbarData = {
  logo: {
    home: "/logo.png",
    default: "/logo1.png",
    alt: "Gulf Logo",
  },
  links: [
    { label: "Home", href: "/" },
    {
      label: "Projects",
      dropdown: [
        { label: "Project 1", href: "#" },
        { label: "Project 2", href: "#" },
        { label: "Project 3", href: "#" },
      ],
    },
    { label: "Blog", href: "#" },
    { label: "Service", href: "#" },
    { label: "About", href: "/about" },
  ],
  cta: {
    label: "Get Started",
    href: "/contact",
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getstart = () => {
    navigate(navbarData.cta.href);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Pick logo based on path
  const currentLogo =
    location.pathname === "/"
      ? navbarData.logo.home
      : navbarData.logo.default;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500
        ${showNavbar ? "translate-y-0" : "-translate-y-full"} 
        ${scrolled ? "bg-[#eaeaea] shadow-md" : "bg-transparent"}
      `}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-1">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img
            src={currentLogo}
            alt={navbarData.logo.alt}
            className="h-12 w-auto sm:h-14 md:h-12 lg:h-24 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center bg-[#636363] rounded-md px-2 py-1 space-x-2">
          {navbarData.links.map((link, index) =>
            link.dropdown ? (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center px-4 py-2 font-medium text-white rounded-md hover:text-light transition duration-300">
                  {link.label}
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transform transition-transform duration-500 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {/* Dropdown */}
                <div
                  className={`absolute left-0 top-full mt-2 w-[370px] h-[300px] bg-secondary text-gray-800 rounded-xl shadow-xl z-50 
                    transform transition-all duration-500 ease-out
                    ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 translate-y-6 invisible"
                    }`}
                >
                  {link.dropdown.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="block px-6 py-4 text-lg hover:bg-gray-200 hover:text-button transition duration-300"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 font-medium rounded-md text-white hover:text-light transition duration-300"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => {
              getstart();
            }}
            className="relative overflow-hidden px-6 py-2 rounded-md font-medium group bg-button"
          >
            <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black rounded-md transform -translate-x-1/2 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></span>
            <span className="relative z-10 block text-white transition-transform duration-500 group-hover:-translate-y-[180%]">
              {navbarData.cta.label}
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-white font-medium transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              {navbarData.cta.label}
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-background"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#636363] rounded-md px-2 py-2 mx-2">
          {navbarData.links.map((link, index) =>
            link.dropdown ? (
              <div key={index}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full text-left px-3 py-2 text-white font-medium hover:text-light hover:bg-[#4f4f4f] rounded-md flex justify-between items-center transition duration-300 mt-3"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="pl-6 space-y-1 mt-1">
                    {link.dropdown.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="block px-3 py-2 text-white hover:text-light rounded-md transition duration-300"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={index}
                href={link.href}
                className="block px-3 py-2 text-white hover:text-light rounded-md transition duration-300"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}

      {/* Mobile CTA */}
      {isOpen && (
        <div className="md:hidden px-2 mt-2">
          <button className="w-full bg-button hover:bg-light text-white px-3 py-2 rounded-md font-medium transition-colors duration-200">
            {navbarData.cta.label}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
