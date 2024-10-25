import React from 'react';
import './Home.css';
import Card from '../components/Card';
import '../components/Card.css';

import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the next page
        navigate("/next");
    };

  return (
    <>
      <div className='home-top'>
        <img className='beach3' src='./images/beach3.jpg' alt="Beach view" />
        
        <a>
            <div onClick={handleClick}>
                <h2>4 Good Reasons</h2>
                <h3>For traveling with us</h3>
            </div>
        </a>
      </div>

      <br />

      <div className='home_body'>
        <Card 
          imageSrc='./images/cellphone.jpg' 
          altText="Cellphone control" 
          heading="Smart Vacation" 
          text="Full vacation control from your cell phone."
        />
        <Card 
          imageSrc='./images/sealions.jpg' 
          altText="Sea lions" 
          heading="Super Offers" 
          text="Up to 50% offers. Always 25% student offers."
        />
      </div>

      <div className='home_body'>
        <Card 
          imageSrc='./images/truck.jpg' 
          altText="Car rental" 
          heading="Car Rental Included" 
          text="Wherever you travel, our car rental is included."
        />
        <Card 
          imageSrc='./images/nowornever.jpg' 
          altText="Inspirational message" 
          heading="Realize Your Dreams" 
          text="Don't wait until it is too late."
        />
      </div>
    </>
  );
};

export default Home;