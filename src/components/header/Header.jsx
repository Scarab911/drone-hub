import React from 'react';
import { Link } from 'react-router-dom';

//css
import './header.css';

//components
import Search from './search_bar/Search';
import Navigation from './navigation/Navigation';
//images
import HamburgerIcon from '../../assets/icons/menuIcon.png';

export default function Header() {
  return (
    <div className="header-container">
      <img className="burger" src={HamburgerIcon} alt="" />
      <h1 className="logo-placeholder">
        <Link to="/">LOGO</Link>
      </h1>
      <Search />
      <Navigation />
    </div>
  );
}
