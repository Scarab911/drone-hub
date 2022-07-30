import React from 'react';
import Carousel from './carousel/Carousel';
import DescLanding from './descriptionLanding/DescLanding';
import Hero from './hero/Hero';

import './main.css';

export default function Main() {
  return (
    <div className="main-container">
      <Hero></Hero>
      <Carousel />
      <DescLanding></DescLanding>
    </div>
  );
}
