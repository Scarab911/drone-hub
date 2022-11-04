import React from 'react';
import { Outlet, Link } from 'react-router-dom';

//components

//images
import home from '../../../../src/assets/icons/home.png';
import arrow from '../../../../src/assets/icons/down.png';

//style
import '../profile/profile.css';

export default function Profile(props) {
  return (
    <div className="main-container">
      <div className="location-bar">
        <Link to="/">
          <img className="home-image" src={home} alt="home"></img>
        </Link>
        <img className="arrow-image" src={arrow} alt="home"></img>
        Mano profilis
      </div>
      <div className="info">
        <div className="btn">
          <Link to="my-profile">Profilis</Link>
        </div>
        <div className="btn">
          <Link to="my-orders">Užsakymai</Link>
        </div>
        <div className="btn">
          <Link to="my-favorite">Patikusios paslaugos</Link>
        </div>
        <div className="btn">
          <Link to="my-services">Mano paslaugos</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
