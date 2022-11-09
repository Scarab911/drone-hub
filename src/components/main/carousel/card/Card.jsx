import React from 'react';
import { Link } from 'react-router-dom';
//css
import './card.css';

//images
import ArrowBtn from '../../../../assets/icons/right.png';
import CardImg from '../../../../assets/images/city.png';

export default function Card(props) {
  const { id, name, price, hourly, currency } = props;
  return (
    <div className="card-container">
      <Link to="/service">
        <img src={CardImg} className="card-image" alt="service" />
      </Link>
      <div className="desc">
        <h3 className="title">{name}</h3>
        <p className="from">Nuo</p>
        <p className="price">{`${price} ${currency} ${
          hourly ? '/val' : ''
        }`}</p>
        <div className="btn">
          {/* <Link to={`/service:${id}`}>
            <img src={ArrowBtn} alt="" />
          </Link> */}
          <Link to={`/service`}>
            <img src={ArrowBtn} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
