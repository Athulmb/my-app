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
    { letter: 'G', color: 'text-[#24342E]' },
    { letter: 'U', color: 'text-[#24342E]' },
    { letter: 'L', color: 'text-[#F2410C]' },
    { letter: 'F', color: 'text-[#24342E]' },
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
    <footer className="bg-[#F9F8F3] py-16 px-6 md:px-12">
      <div className="max-w-8xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start mb-16 gap-12">
          {/* Logo */}
          <div className="flex items-center">
            {logoLetters.map((item, index) => (
              <span
                key={index}
                className={`text-7xl md:text-8xl font-bold ${item.color} inline-block transform transition-all duration-700 ease-out ${
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
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#24342E] mb-4 animate-fadeInUp">
              Sign up for our newsletter
            </h3>
            <p className="text-[#24342E]/70 mb-6 max-w-md animate-fadeInUp animation-delay-200">
              Stay updated with the latest projects, design tips, and insights—delivered straight to your inbox.
            </p>
            <div className="flex gap-3 animate-fadeInUp animation-delay-400">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-2 py-2 border-b border-[#24342E] bg-transparent text-[#24342E] placeholder-gray-500 focus:border-[#F2410C] outline-none transition-colors duration-300"
              />
              <button
                onClick={handleSubmit}
                className="bg-[#F2410C] text-white px-6 py-2 rounded hover:bg-[#d93400] transition-all duration-300 font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-[#F2F0E9] p-8 rounded-lg mb-16">
          {/* Primary Navigation */}
          <div className="space-y-3">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`block text-base ${
                  link.active 
                    ? 'text-[#F2410C] font-medium' 
                    : 'text-[#24342E] hover:text-[#F2410C]'
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Secondary Navigation */}
          <div className="space-y-3">
            {secondaryLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-base text-[#24342E] hover:text-[#F2410C]"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-base text-[#24342E] hover:text-[#F2410C]"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* Social Media + Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-[#24342E]/70 animate-fadeInUp">
            Copyright 2025 Planova. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8">
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-16 h-16 bg-[#F2F0E9] rounded-lg flex items-center justify-center text-[#24342E] hover:text-[#F2410C] transition-all duration-300"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>

            {/* Credit */}
            <div className="text-[#24342E]/70">
              <span className="text-[#F2410C] hover:underline cursor-pointer transition-colors duration-300">
                Webflow
              </span>{' '}
              Template handcrafted
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


