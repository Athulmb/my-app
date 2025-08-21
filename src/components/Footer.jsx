import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [animateLetters, setAnimateLetters] = useState(false);

  useEffect(() => {
    setAnimateLetters(true);
  }, []);

  // Logo letters
  const logoLetters = [
    { letter: 'G', color: 'text-background' },
    { letter: 'U', color: 'text-background' },
    { letter: 'L', color: 'text-button' },
    { letter: 'F', color: 'text-background' },
  ];

  const navigationLinks = [
    { title: 'Home', href: '#', active: true },
    { title: 'About', href: '#' },
    { title: 'Blog', href: '#' },
    { title: 'Projects', href: '#' }
  ];

  const secondaryLinks = [
    { title: 'Project Single', href: '#' },
    { title: 'Blog Single', href: '#' },
    { title: 'Contact', href: '#' },
    { title: '404', href: '#' },
    { title: 'Privacy Policy', href: '#' }
  ];

  const legalLinks = [
    { title: 'Term & Condition', href: '#' },
    { title: 'Licence', href: '#' },
    { title: 'Changelog', href: '#' },
    { title: 'Instructions', href: '#' },
    { title: 'Style Guide', href: '#' }
  ];

  const handleSubmit = () => {
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#F9F8F3] py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-full mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 mb-12">
          {/* Logo */}
          <div className="flex items-center">
            {logoLetters.map((item, index) => (
              <span
                key={index}
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold ${item.color} inline-block transform transition-all duration-700 ease-out ${
                  animateLetters 
                    ? 'translate-y-0 opacity-100 rotate-0' 
                    : 'translate-y-8 opacity-0 rotate-12'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                {item.letter}
              </span>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#24342E] mb-3">
              Sign up for our newsletter
            </h3>
            <p className="text-sm sm:text-base text-[#24342E]/70 mb-5 max-w-md">
              Stay updated with the latest projects, design tips, and insights—delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-2 py-2 border-b border-[#24342E] bg-transparent text-[#24342E] placeholder-gray-500 focus:border-button outline-none transition-colors duration-300 text-sm sm:text-base"
              />
              <button
                onClick={handleSubmit}
                className="relative overflow-hidden px-4 sm:px-6 py-2 rounded-md font-medium group bg-button text-sm sm:text-base"
              >
                <span className="absolute bottom-0 left-1/2 w-0 h-0 bg-black rounded-md transform -translate-x-1/2 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></span>
                <span className="relative z-10 block text-white transition-transform duration-500 group-hover:-translate-y-[180%]">
                  Subscribe
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-white font-medium transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  Subscribe
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-10 bg-[#F2F0E9] p-6 sm:p-8 rounded-lg mb-12 text-sm sm:text-base">
          {/* Primary Navigation */}
          <div className="space-y-2 sm:space-y-3">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`block ${
                  link.active 
                    ? 'text-button font-medium' 
                    : 'text-[#24342E] hover:text-button'
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Secondary Navigation */}
          <div className="space-y-2 sm:space-y-3">
            {secondaryLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-[#24342E] hover:text-button"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="space-y-2 sm:space-y-3">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-[#24342E] hover:text-button"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* Social Media + Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm sm:text-base">
          <div className="text-[#24342E]/70">
            © 2025 . All rights reserved.
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {[
              { icon: Facebook, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Twitter, href: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#F2F0E9] rounded-lg flex items-center justify-center text-[#24342E] hover:text-button transition-all duration-300"
              >
                <social.icon size={20} className="sm:size-22 md:size-24" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
