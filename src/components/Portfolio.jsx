import React from 'react';
import portfolio1 from '../assets/Sendpay.png';
import portfolio2 from '../assets/E-commerce.png';
import portfolio3 from '../assets/B Learning.png';

const Portfolio = () => {
  return (
    <section id="portfolio" className="px-6 md:px-10 py-16 bg-white">
      <h3 className="text-center text-blue-950 text-3xl mb-12">
        My <span className="font-semibold text-blue-900">Portfolio</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="portfolio-item rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
          <img src={portfolio1} alt="Portfolio Project 1" className="w-full h-auto" />
        </div>
        <div className="portfolio-item rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
          <img src={portfolio2} alt="Portfolio Project 2" className="w-full h-auto" />
        </div>
        <div className="portfolio-item rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
          <img src={portfolio3} alt="Portfolio Project 3" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
