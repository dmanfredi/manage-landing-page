import React, { useState } from 'react';
import './Testimonial.css';

const Testimonial = ({ person, text, img, handleTransistion, testimonialStyle }) => {



  return (
    <div
      className={testimonialStyle}
      onClick={() => handleTransistion('testimonial-container slide-out')}
    >
      <div className="pfp-container">
        <img src={img} alt="Person" className="pfp" />
      </div>
      <div className="testimonial-text-container">
        <div className="testimonial-name">{person}</div>
        <div className="testimonial-text">{text}</div>
      </div>
    </div>
  );
};

export default Testimonial;
