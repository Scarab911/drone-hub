import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../../../src/assets/icons/home.png';
import arrow from '../../../../src/assets/icons/down.png';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="location-bar">
        <Link to="/">
          <img className="home-image" src={home} alt="home"></img>
        </Link>
        <img className="arrow-image" src={arrow} alt="home"></img>
        Mano profilis
      </div>
    </div>
  );
}
