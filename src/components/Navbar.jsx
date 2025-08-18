import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#1F2E2B] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#FF5700]">Planova</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="px-3 py-2 rounded-md bg-[#2C3B36] text-[#FF5700]">
            Home
          </a>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center px-3 py-2 hover:text-[#FF5700] rounded-md"
            >
              Pages <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-40 bg-[#2C3B36] rounded-md shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-[#3A4A44]">Page 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-[#3A4A44]">Page 2</a>
              </div>
            )}
          </div>
          <a href="#" className="px-3 py-2 hover:text-[#FF5700] rounded-md">Blog</a>
          <a href="#" className="px-3 py-2 hover:text-[#FF5700] rounded-md">About</a>
          <a href="#" className="px-3 py-2 hover:text-[#FF5700] rounded-md">Projects</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[#FF5700] px-5 py-2 rounded-md font-medium hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-1 px-2">
          <a href="#" className="block px-3 py-2 bg-[#2C3B36] text-[#FF5700] rounded-md">Home</a>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full text-left px-3 py-2 hover:text-[#FF5700] rounded-md flex justify-between items-center"
          >
            Pages <ChevronDown className="w-4 h-4" />
          </button>
          {dropdownOpen && (
            <div className="pl-4">
              <a href="#" className="block px-3 py-2 hover:bg-[#3A4A44] rounded-md">Page 1</a>
              <a href="#" className="block px-3 py-2 hover:bg-[#3A4A44] rounded-md">Page 2</a>
            </div>
          )}
          <a href="#" className="block px-3 py-2 hover:text-[#FF5700] rounded-md">Blog</a>
          <a href="#" className="block px-3 py-2 hover:text-[#FF5700] rounded-md">About</a>
          <a href="#" className="block px-3 py-2 hover:text-[#FF5700] rounded-md">Projects</a>
          <button className="w-full bg-[#FF5700] px-3 py-2 rounded-md mt-1 hover:bg-orange-600">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
