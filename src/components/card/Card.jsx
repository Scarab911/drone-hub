import React from 'react';
import './card.css';
import ArrowBtn from '../../assets/icons/right.png';
import CardImg from '../../assets/images/city.png';

export default function Card() {
  return (
    <div className="card-container">
      <img src={CardImg} className="card-image" alt="service" />
      <div className="desc">
        <h3 className="title">Lorem, ipsum</h3>
        <p className="from">Nuo</p>
        <p className="price">30EUR/val</p>
        <img className="btn" src={ArrowBtn} alt="" />
      </div>
    </div>
  );
}
