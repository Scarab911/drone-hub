import React from 'react';
import './hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur, pariatur.
        </p>
        <button>More info</button>
      </div>
      <div className="image"></div>
    </div>
  );
}
