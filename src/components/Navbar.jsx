import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-slate-700 text-white  py-4">
            <div className=" mx-full flex items-center justify-between px-10">
                {/* Logo */}
                <div className="flex flex-col items-start ">
                    {/* Logo Text */}
                    <div className="text-4xl font-bold text-orange-500">
                        GULF
                    </div>

                    {/* Subtext */}
                    <div className="text-md text-gray-400">
                        Training and Manufacturing Group
                    </div>
                </div>


                {/* Desktop Menu */}
                <div className="hidden md:flex items-center bg-slate-600 rounded-md px-2 py-1">
                    <a href="#" className="text-orange-400 hover:text-orange-300 font-medium px-4 py-2 bg-slate-700/50 rounded-md mr-2">
                        Home
                    </a>
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center text-white hover:text-gray-200 font-medium px-4 py-2 hover:bg-slate-500 rounded-md transition-colors duration-200"
                        >
                            Pages <ChevronDown className="ml-1 w-4 h-4" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute top-full mt-2 w-48 bg-slate-600 rounded-md shadow-lg z-50">
                                <a href="#" className="block px-4 py-2 hover:bg-slate-500 rounded-t-md">Page 1</a>
                                <a href="#" className="block px-4 py-2 hover:bg-slate-500">Page 2</a>
                                <a href="#" className="block px-4 py-2 hover:bg-slate-500 rounded-b-md">Page 3</a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="text-white hover:text-gray-200 font-medium px-4 py-2 hover:bg-slate-500 rounded-md transition-colors duration-200">
                        Blog
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 font-medium px-4 py-2 hover:bg-slate-500 rounded-md transition-colors duration-200">
                        About
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 font-medium px-4 py-2 hover:bg-slate-500 rounded-md transition-colors duration-200">
                        Projects
                    </a>
                </div>


                {/* Desktop CTA Button */}
                <div className="hidden md:block">
                    <button className="relative overflow-hidden px-6 py-2 rounded-md font-medium group bg-[#FF5700]">
                        {/* Black Overlay (expands from bottom center) */}
                        <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black rounded-md transform -translate-x-1/2 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></span>

                        {/* Initial Text (moves up more on hover) */}
                        <span className="relative z-10 block text-white transition-transform duration-500 group-hover:-translate-y-[180%]">
                            Get Started
                        </span>

                        {/* New Text (slides in from bottom) */}
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
                    <a href="#" className="block px-3 py-2 text-orange-400 font-medium bg-slate-800 rounded-md mb-1">
                        Home
                    </a>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full text-left px-3 py-2 text-white hover:text-gray-200 font-medium hover:bg-slate-500 rounded-md flex justify-between items-center transition-colors duration-200"
                    >
                        Pages <ChevronDown className="w-4 h-4" />
                    </button>
                    {dropdownOpen && (
                        <div className="pl-6 space-y-1 mt-1">
                            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white rounded-md">Page 1</a>
                            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white rounded-md">Page 2</a>
                            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white rounded-md">Page 3</a>
                        </div>
                    )}
                    <a href="#" className="block px-3 py-2 text-white hover:text-gray-200 font-medium hover:bg-slate-500 rounded-md transition-colors duration-200">
                        Blog
                    </a>
                    <a href="#" className="block px-3 py-2 text-white hover:text-gray-200 font-medium hover:bg-slate-500 rounded-md transition-colors duration-200">
                        About
                    </a>
                    <a href="#" className="block px-3 py-2 text-white hover:text-gray-200 font-medium hover:bg-slate-500 rounded-md transition-colors duration-200">
                        Projects
                    </a>
                </div>
            )}

            {/* Mobile CTA Button - Outside the navigation container */}
            {isOpen && (
                <div className="md:hidden px-2 mt-2">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md font-medium transition-colors duration-200">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;