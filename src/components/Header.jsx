// src/components/Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-6 px-4 md:px-10 bg-white shadow-md relative z-20">
      <h1 className="text-2xl font-bold text-indigo-600">Mukesh.dev</h1>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-gray-600 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      
      {/* Desktop navigation */}
      <nav className={`
        ${isMenuOpen ? 'flex flex-col absolute top-20 left-0 right-0 bg-white shadow-md p-4 z-10' : 'hidden'} 
        md:flex md:flex-row md:static md:shadow-none md:p-0 md:gap-8 text-gray-600 font-medium
      `}>
        <a href="#about" className="py-2 md:py-0 hover:text-indigo-500">About</a>
        <a href="#passions" className="py-2 md:py-0 hover:text-indigo-500">Passions</a>
        <a href="#portfolio" className="py-2 md:py-0 hover:text-indigo-500">Portfolio</a>
        <a href="#contact" className="py-2 md:py-0">
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 w-full md:w-auto">
            Contact Me
          </button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
