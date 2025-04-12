// src/components/Hero.jsx
import React from 'react';
import DeveloperImage from '../assets/heroImg 1.png'; // अपना image यहाँ डालना

const Hero = () => {
  return (
    <section id="about" className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 z-0"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-56 h-56 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-indigo-100 bg-grid-opacity-50 z-0"></div>

      {/* Right: Image (mobile pe upar) */}
      <div className="w-full md:w-1/2 flex justify-center z-10">
        <img src={DeveloperImage} alt="Developer Illustration" className="w-72 md:w-96 drop-shadow-xl" />
      </div>

      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left z-10">
        <p className="text-lg text-indigo-600">Hi !</p>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mt-2 leading-snug">
          I'm Mukesh Kumar,<br />a Front-End Developer
        </h1>
        <p className="mt-4 text-gray-700">
          Front-End developer based in India. I'm coding with a clean and beautiful problem-solving mindset.
        </p>
      </div>
    </section>
  );
};

export default Hero;
