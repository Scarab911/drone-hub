import React from 'react';
import { Link } from 'react-router-dom';
//css
import './settingsCard.css';

//images
import home from '../../../../../src/assets/icons/home.png';
import arrow from '../../../../../src/assets/icons/down.png';

export default function SettingsCard() {
  return (
    <div className="main-container">
      <div className="location-bar">
        <Link to="/">
          <img className="home-image" src={home} alt="home"></img>
        </Link>
        <img className="arrow-image" src={arrow} alt="home"></img>
        Mano nustatymai
      </div>
      <div className="setting-container">The placeholder for settings form</div>
    </div>
  );
}
