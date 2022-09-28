import React from 'react';
import './header.css';
import Search from './search_bar/Search';
import Navigation from './navigation/Navigation';

export default function Header() {
  return (
    <div className="header-container">
      <h1>LOGO</h1>
      <Search />
      <Navigation />
    </div>
  );
}
