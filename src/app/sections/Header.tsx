'use client';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Function to update active section when scrolling
  const handleScroll = () => {
    const sections = ['home', 'projects', 'about', 'contact'];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section);
        }
      }
    });
  };

  // Scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a className={`nav-item ${activeSection === 'home' ? 'bg-white text-gray-900' : ''}`} href="#home">
          Home
        </a>
        <a className={`nav-item ${activeSection === 'projects' ? 'bg-white text-gray-900' : ''}`} href="#projects">
          Experience
        </a>
        <a className={`nav-item ${activeSection === 'about' ? 'bg-white text-gray-900' : ''}`} href="#about">
          About
        </a>
        <a className={`nav-item ${activeSection === 'contact' ? 'bg-white text-gray-900' : ''}`} href="#contact">
          Contact
        </a>
      </nav>
    </div>
  );
};
