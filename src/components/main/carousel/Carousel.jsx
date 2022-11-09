import React from 'react';

//components
import Card from './card/Card';

//services
import { MyArrays } from '../../../services/services';

//css
import './carousel.css';

export default function Carousel() {
  const servicesList = new MyArrays();

  const popularServices = servicesList.allServices;
  //sorting array items by most popular to show on main
  const sorted = popularServices.sort((a, b) => {
    return b.orderCount - a.orderCount;
  });
  // const sorted = servicesList.sortServicesByMostOrders(popularServices);

  const topServices = sorted.slice(0, 3);

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
