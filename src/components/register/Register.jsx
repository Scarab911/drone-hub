import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import home from '../../../src/assets/icons/home.png';
import arrow from '../../../src/assets/icons/down.png';

export default function Register() {
  return (
    <div className="main-container">
      <div className="register">
        <Link to="/">
          <img className="home-image" src={home} alt="home"></img>
        </Link>
        <img className="arrow-image" src={arrow} alt="home"></img>
        Registracija
      </div>
      <form>
        <h3>Registracija</h3>
        <div className="form-group">
          <label htmlFor="name">Vardas</label>
          <input
            type="name"
            name="name"
            placeholder="Vardas"
            required
            autoComplete="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Pavardė</label>
          <input
            type="surname"
            name="surname"
            placeholder="Pavardė"
            required
            autoComplete="Surname"
          />
        </div>
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
          <label htmlFor="password">Sukurti Slaptažodį</label>
          <input
            type="password"
            name="password"
            placeholder="Sukurti Slaptažodį"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rePassword">Pakartoti slaptažodį</label>
          <input
            type="password"
            name="rePassword"
            placeholder="Pakartoti Slaptažodį"
            required
          />
        </div>
        <button>Registruotis</button>
        <div className="links">
          Turite paskyra?
          <Link to="/login">Prisijunkti</Link>
        </div>
      </form>
    </div>
  );
}
