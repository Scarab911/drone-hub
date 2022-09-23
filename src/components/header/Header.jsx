import React from 'react';
import './header.css';
import LanguageSelector from './lang_select/LanguageSelector';
import ProfileSelect from './profile_select/ProfileSelect';

export default function Header() {
  return (
    <div className="header-container">
      <h1>LOGO</h1>
      <div className="mid-content">
        <div className="search-bar">
          <input type="text" placeholder="Find profesional" />
        </div>
        <nav>
          <a href="#">
            Miestas<span>&or;</span>
          </a>
          <a href="#">
            Paslaugos<span>&or;</span>
          </a>
          <a href="#">
            Parduotuve<span>&or;</span>
          </a>
        </nav>
      </div>

      {/* Need to make separate components for lang and profile selectons!!! */}
      <div className="selections">
        {/* place holder for language dropdown */}
        <LanguageSelector />
        {/* place holder for profile dropdown */}

        <ProfileSelect />
        {/* --- */}
      </div>
    </div>
  );
}
