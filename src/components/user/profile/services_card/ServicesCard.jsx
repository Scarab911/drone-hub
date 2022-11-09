import React from 'react';
import { MyArrays } from '../../../../services/services';
import Card from '../../../main/carousel/card/Card';
//css
import './servicesCard.css';

export default function ServicesCard() {
  const services = new MyArrays();
  const myServicesList = services.myServiceList;

  return (
    <div className="services-card">
      <div className="btn-box">+</div>
      <p>Prideti paslauga</p>
      <div className="all-services-container">
        {myServicesList.map((service) => (
          <Card
            name={service.name}
            price={service.price}
            hourly={service.hourly}
            currency={service.currency}
            key={service.id}
          />
        ))}
      </div>
    </div>
  );
}
