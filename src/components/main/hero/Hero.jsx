import React from 'react';
import './hero.css';

import descriptionImg from '../../../assets/images/description_drone.png';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur, pariatur.
        </p>
        <div className="button">Sužinoti daugiau</div>
      </div>
      <div className="hero-image"></div>
      {/* <img src={descriptionImg} alt="Man with drone" /> */}
    </div>
  );
}
