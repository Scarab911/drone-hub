import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import home from '../../../src/assets/icons/home.png';
import arrow from '../../../src/assets/icons/down.png';

export default function Login() {
  return (
    <div className="main-container">
      <div className="location-bar">
        <Link to="/">
          <img className="home-image" src={home} alt="home"></img>
        </Link>
        <img className="arrow-image" src={arrow} alt="home"></img>
        Prisijungti
      </div>
      <form>
        <h3>Prisijungti</h3>
        <div className="form-group">
          <label htmlFor="email">El. paštas</label>
          <input
            type="email"
            name="email"
            placeholder="El. pašto adresas"
            required
            autoComplete="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Slaptažodis</label>
          <input
            type="password"
            name="password"
            placeholder="Slaptažodis"
            required
          />
        </div>
        <button>Prisijungti</button>
        <div className="links">
          <Link to="/">Pamiršote slaptažodį?</Link>
          <Link to="/register">Registruotis</Link>
        </div>
      </form>
    </div>
  );
}
