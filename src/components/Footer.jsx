import React from 'react';
import github from '../assets/Vector (4).png';

const Footer = () => {
  return (
    <footer className="relative w-full">
      {/* Background Image */}
      <img src={github} alt="ram" className="w-full h-auto object-cover" />

      {/* Text on top of image */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <p className="text-white text-center font-bold text-base sm:text-sm md:text-2xl lg:text-4xl">
          Design By Mukesh_Verma
        </p>
      </div>
    </footer>
  );
};

export default Footer;
