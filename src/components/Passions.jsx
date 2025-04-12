import React from 'react';
import frontendIcon from '../assets/blue1.png';
import backendIcon from '../assets/2.png';
import uiIcon from '../assets/3.png';

const Passions = () => {
  return (
    <section id="passions" className="py-10 px-4 md:px-[10%]">
      <h3 className='text-center text-blue-950 text-3xl'>
        Additional <span className='font-bold text-blue-900'>Passions</span>
      </h3>

      <div className="flex flex-wrap justify-center mt-14 gap-20">
        <div className="bg-white rounded-lg shadow-md p-6 w-72 text-center">
          <div className="flex justify-center mb-4">
            <img src={frontendIcon} alt="Front-End Icon" className="w-28 h-28" />
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Front-End Developer</h4>
          <p className="text-gray-600 text-sm">(React, Bootstrap, Tailwind)</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 w-72 text-center">
          <div className="flex justify-center mb-4">
            <img src={backendIcon} alt="Back-End Icon" className="w-28 h-28" />
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Back-End Developer</h4>
          <p className="text-gray-600 text-sm">(Node.js, Laravel, CodeIgniter)</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 w-72 text-center">
          <div className="flex justify-center mb-4">
            <img src={uiIcon} alt="UI/UX Icon" className="w-28 h-28" />
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">UI/UX Designer</h4>
          <p className="text-gray-600 text-sm">(Figma, Adobe XD)</p>
        </div>
      </div>
    </section>
  );
};

export default Passions;
