// Card.js
import React from 'react';
import './Card.css'

const Card = ({ imageSrc, altText, heading, text }) => {
  return (
    <div className='home_card'>
      <img className='h_c_image' src={imageSrc} alt={altText} />
      <div>
        <h3 className='card_heading'>{heading}</h3>
        <p className='card_text'>{text}</p>
      </div>
    </div>
  );
};

export default Card;
