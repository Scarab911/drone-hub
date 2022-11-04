import React from 'react';
import OrderItem from './order_item/OrderItem';

//css
import './ordersCard.css';

const ordersList = [
  {
    id: '1',
    name: 'fotografimas',
    shortDesc: 'labas',
    provider: 'Saulius',
    price: 10,
    currency: 'EUR',
    hourly: true,
  },
  {
    id: '2',
    name: 'marketingo akcija',
    shortDesc: 'jusu reklama',
    provider: 'Petras',
    price: 100,
    currency: 'EUR',
    hourly: false,
  },
  {
    id: '3',
    name: 'filmavimas',
    shortDesc: 'viena karta kaime',
    provider: 'Antanas',
    price: 15,
    currency: 'EUR',
    hourly: true,
  },
];

export default function OrdersCard() {
  return (
    <div className="orders-card">
      {ordersList.map((order) => (
        <OrderItem
          id={order.id}
          name={order.name}
          shortDesc={order.shortDesc}
          provider={order.provider}
          price={order.price}
          currency={order.currency}
          hourly={order.hourly}
          key={order.id}
        />
      ))}
    </div>
  );
}
