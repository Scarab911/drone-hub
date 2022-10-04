import React from 'react';
import './header.css';
import Search from './search_bar/Search';
import Navigation from './navigation/Navigation';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header-container">
      <h1>
        <Link to="/">LOGO</Link>
      </h1>
      <Search />
      <Navigation />
    </div>
  );
}
