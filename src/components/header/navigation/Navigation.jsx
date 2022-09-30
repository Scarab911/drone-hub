import React from 'react';
import './navigation.css';
import LanguageSelector from '../lang_select/LanguageSelector';
import ProfileSelect from '../profile_select/ProfileSelect';
import DropDownMenu from '../profile_select/drop_down_menu/DropDownMenu';

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
        <a href="/">Parduotuvė</a>
      </div>
      <div className="selections">
        <LanguageSelector />
        <ProfileSelect>
          <DropDownMenu></DropDownMenu>
        </ProfileSelect>
      </div>
    </nav>
  );
}
