import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../../../src/assets/icons/home.png';
import arrow from '../../../../src/assets/icons/down.png';
import userPhoto from '../../../../src/assets/images/profile2.png';

//style
import '../profile/profile.css';

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
      <div className="info">
        <div className="profile">Profilis</div>
        <div className="orders">Uzsakymai</div>
        <div className="favorite">Patikusios paslaugos</div>
        <div className="services">Mano paslaugos</div>
      </div>
      <div className="profile-container">
        <div className="profile-grid">
          <img className="user-photo" src={userPhoto} alt="user" />
          <p className="user-name">Vardenis</p>
          <p className="user-surname">Pavardenis</p>
          <p className="user-city">Vilnius</p>
        </div>
      </div>
    </div>
  );
}
