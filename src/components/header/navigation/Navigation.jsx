import React from 'react';
import './navigation.css';
import LanguageSelector from '../lang_select/LanguageSelector';
import ProfileSelect from '../profile_select/ProfileSelect';

export default function Navigation() {
  return (
    <nav>
      <div className="links">
        <a href="/">
          Miestas<span>&or;</span>
        </a>
        <a href="/">
          Paslaugos<span>&or;</span>
        </a>
        <a href="/">Parduotuve</a>
      </div>
      <div className="selections">
        <LanguageSelector />
        <ProfileSelect />
      </div>
    </nav>
  );
}
