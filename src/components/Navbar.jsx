import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);

            // Change background only when scrolled past 50px
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500
        ${showNavbar ? "translate-y-0" : "-translate-y-full"} 
        ${scrolled ? "bg-[#eaeaea] shadow-md" : "bg-transparent"}
      `}
        >
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-2">
                {/* Logo */}
                {/* Logo */}
                <div className="flex flex-col items-start">
                    {/* Image Logo */}
                    <img
                        src="/logo.png"
                        alt="Gulf Logo"
                        className="h-16 w-auto sm:h-14 md:h-16 lg:h-32 object-contain"
                    />

                    {/* Subtitle */}
                    <div className="text-sm sm:text-base md:text-sm lg:text-md text-[#636363] ">
    Training and Manufacturing Group
  </div>
                </div>


                {/* Desktop Menu */}
                <div className="hidden md:flex items-center bg-[#636363] rounded-md px-2 py-1 space-x-2">
                    <a
                        href="#"
                        className="text-button hover:text-light font-medium px-4 py-2 bg-[#636363] rounded-md mr-2"
                    >
                        Home
                    </a>

                    {/* Pages with hover dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <button className="flex items-center px-4 py-2 font-medium text-white rounded-md hover:text-light transition duration-300">
                            Projects{" "}
                            <ChevronDown
                                className={`ml-1 w-4 h-4 transform transition-transform duration-500 ${dropdownOpen ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>

                        {/* Dropdown */}
                        {/* Dropdown */}
                        <div
                            className={`absolute left-0 top-full mt-2 w-[370px] h-[300px] bg-secondary text-gray-800 rounded-xl shadow-xl z-50 
    transform transition-all duration-500 ease-out
    ${dropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-6 invisible"}`}
                        >
                            <a
                                href="#"
                                className="block px-6 py-4 text-lg hover:bg-gray-200 hover:text-button rounded-t-md transition duration-300"
                            >
                                Project 1
                            </a>
                            <a
                                href="#"
                                className="block px-6 py-4 text-lg hover:bg-gray-200 hover:text-button transition duration-300"
                            >
                                Project 2
                            </a>
                            <a
                                href="#"
                                className="block px-6 py-4 text-lg hover:bg-gray-200 hover:text-button rounded-b-md transition duration-300"
                            >
                                Project 3
                            </a>
                        </div>

                    </div>

                    <a
                        href="#"
                        className="px-4 py-2 font-medium rounded-md text-white hover:text-light  transition duration-300"
                    >
                        Blog
                    </a>
                    <a
                        href="#"
                        className="px-4 py-2 font-medium rounded-md text-white hover:text-light hover:bg-[#636363] transition duration-300"
                    >
                        About
                    </a>

                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <button className="relative overflow-hidden px-6 py-2 rounded-md font-medium group bg-button">
                        <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black rounded-md transform -translate-x-1/2 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></span>
                        <span className="relative z-10 block text-white transition-transform duration-500 group-hover:-translate-y-[180%]">
                            Get Started
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center text-white font-medium transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                            Get Started
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-gray-300"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 bg-slate-600 rounded-md px-2 py-2 mx-2">
                    <a
                        href="#"
                        className="text-teal-400 hover:text-primary  font-medium px-4 py-2  rounded-md mr-2 mb-2 block hover:bg-slate-500"
                    >
                        Home
                    </a>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full text-left px-3 py-2 text-white hover:text-primaryfont-medium hover:bg-slate-500 rounded-md flex justify-between items-center transition duration-200 mt-3"
                    >
                        Pages{" "}
                        <ChevronDown
                            className={`w-4 h-4 transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"
                                }`}
                        />
                    </button>
                    {dropdownOpen && (
                        <div className="pl-6 space-y-1 mt-1">
                            <a
                                href="#"
                                className="block px-3 py-2 text-white hover:text-primary rounded-md transition duration-300"
                            >
                                Page 1
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 text-white hover:text-primary rounded-md transition duration-300"
                            >
                                Page 2
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 text-white hover:text-primary rounded-md transition duration-300"
                            >
                                Page 3
                            </a>
                        </div>
                    )}
                    <a
                        href="#"
                        className="block px-3 py-2 text-white hover:text-primary hover:bg-slate-500 rounded-md transition duration-300"
                    >
                        Blog
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-white hover:text-primary font-medium hover:bg-slate-500 rounded-md transition duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-white hover:text-primary font-medium hover:bg-slate-500 rounded-md transition duration-300"
                    >
                        Projects
                    </a>
                </div>
            )}

            {/* Mobile CTA */}
            {isOpen && (
                <div className="md:hidden px-2 mt-2">
                    <button className="w-full bg-teal-400 hover:bg-primary  text-white px-3 py-2 rounded-md font-medium transition-colors duration-200">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
