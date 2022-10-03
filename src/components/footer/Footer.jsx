import React from 'react';
import './footer.css';
import InstagramIcon from '../../assets/icons/in.png';
import FacebookIcon from '../../assets/icons/fb.png';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="column">
        <h1>LOGO</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          fugiat fugit quia asperiores sapiente nulla repellendus molestiae
          beatae sunt eligendi.
        </p>
      </div>
      <div className="column links">
        <div>
          <h2>Lorem ipsum</h2>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div>
          <h2>Lorem ipsum</h2>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div>
          <h2>Lorem ipsum</h2>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>
      <div className="column socials">
        <img src={FacebookIcon} alt="instagram" />
        <img src={InstagramIcon} alt="instagram" />
        <img src={FacebookIcon} alt="instagram" />
        <img src={InstagramIcon} alt="instagram" />
        <img src={FacebookIcon} alt="instagram" />
        <img src={InstagramIcon} alt="instagram" />
      </div>
    </div>
  );
}
