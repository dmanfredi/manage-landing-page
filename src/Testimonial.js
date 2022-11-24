// import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './Testimonial.css';

const Testimonial = ({
  person,
  text,
  img,
  handleTransistion,
  testimonialStyle,
}) => {
  const onDesktop = useMediaQuery({ query: '(min-width: 800px)' });

  testimonialStyle += onDesktop ? ' slide-around' : '';

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
