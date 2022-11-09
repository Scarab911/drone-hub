import React from 'react';
import Card from './card/Card';
import './carousel.css';
import { MyArrays } from '../../../services/services';

export default function Carousel() {
  const servicesList = new MyArrays();

  const popularServices = servicesList.allServices;

  const sorted = popularServices.sort((a, b) => {
    return b.orderCount - a.orderCount;
  });
  // const sorted = servicesList.sortServicesByMostOrders(popularServices);
  console.log(sorted);

  const topServices = sorted.slice(0, 3);
  console.log(topServices);

  return (
    <div className="carousel-container">
      {topServices.map((service) => (
        <Card
          name={service.name}
          price={service.price}
          hourly={service.hourly}
          currency={service.currency}
          key={service.id}
        />
      ))}
    </div>
  );
}
