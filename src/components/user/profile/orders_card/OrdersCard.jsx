import React from 'react';
import OrderItem from './order_item/OrderItem';

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
  {
    id: '2',
    imgUrl: 'lol2222',
    shortDesc: 'bye bye',
    provider: 'Petras',
    price: 100,
    currency: 'EUR',
    hourly: false,
  },
  {
    id: '3',
    imgUrl: 'kukuraruieku',
    shortDesc: 'viena karta kaime',
    provider: 'Antanas',
    price: 15,
    currency: 'EUR',
    hourly: true,
  },
];

export default function OrdersCard() {
  return (
    <>
      {ordersList.map((order) => (
        <OrderItem
          id={order.id}
          imgUrl={order.imgUrl}
          shortDesc={order.shortDesc}
          provider={order.provider}
          price={order.price}
          currency={order.currency}
          hourly={order.hourly}
          key={order.id}
        />
      ))}
    </>
  );
}
