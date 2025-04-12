import React from 'react';
import githubIcon from '../assets/Git.png';
import instagramIcon from '../assets/Instagram.png';
import emailIcon from '../assets/Email.png';
import phoneIcon from '../assets/telpon.png';

const Contact = () => {
  return (
    <section id="contact" className="contact px-4 py-12">
      <h3 className='text-center text-blue-950 text-3xl mt-4'>
        Contact <span className='font-bold text-blue-900'>Me</span>
      </h3>
      
      <div className="contact-links flex flex-wrap justify-center items-center gap-10 mt-14">
        <a href="#" className="contact-link">
          <div className="contact-icon github">
            <img src={githubIcon} alt="Github" />
          </div>
        </a>
        <a href="#" className="contact-link">
          <div className="contact-icon instagram">
            <img src={instagramIcon} alt="Instagram" />
          </div>
        </a>
        <a href="#" className="contact-link">
          <div className="contact-icon email">
            <img src={emailIcon} alt="Email" />
          </div>
        </a>
        <a href="#" className="contact-link">
          <div className="contact-icon telp">
            <img src={phoneIcon} alt="Phone" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
