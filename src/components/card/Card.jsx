import React from 'react';
import './card.css';

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-image">image</div>
      <div className="desc">
        <h3 className="title">Lorem, ipsum</h3>
        <p className="from">Nuo</p>
        <p className="price">30EUR/val</p>
        <div className="btn">&#62;</div>
      </div>
    </div>
  );
}
