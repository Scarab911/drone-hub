import React from 'react';
import './orderItem.css';

export default function OrderItem() {
  const ordersList = [
    {
      id: '1',
      imgUrl: 'lol',
      shortDesc: 'labas',
      provider: 'Saulius',
      price: 10,
      currency: 'EUR',
      hourly: true,
    },
  ];
  return (
    <div className="order-item-container">
      <ul>
        <li>{ordersList[0].id}</li>
        <li>{ordersList[0].imgUrl}</li>
        <li>{ordersList[0].shortDesc}</li>
        <li>{ordersList[0].provider}</li>
        <li>
          {ordersList[0].price} {ordersList[0].currency}
        </li>
        <li>{ordersList[0].hourly ? '/val' : null}</li>
      </ul>
    </div>
  );
}
