import React from 'react';

//components
import OrderItem from './order_item/OrderItem';

//css
import './ordersCard.css';

const ordersList = [
  {
    id: '1',
    name: 'fotografavimas',
    shortDesc: 'labas',
    provider: 'Saulius',
    price: 10,
    currency: 'EUR',
    hourly: true,
    date: '2022-10-15',
  },
  {
    id: '2',
    name: 'marketingo akcija',
    shortDesc: 'jusu reklama',
    provider: 'Petras',
    price: 100,
    currency: 'EUR',
    hourly: false,
    date: '2021-10-25',
  },
  {
    id: '3',
    name: 'filmavimas',
    shortDesc: 'viena karta kaime',
    provider: 'Antanas',
    price: 15,
    currency: 'EUR',
    hourly: true,
    date: '2022-11-15',
  },
];

export default function OrdersCard() {
  return (
    <div className="orders-card">
      <div className="thumbnail">
        <div>ID</div>
        <div>Pavadinimas</div>
        <div>Aprašymas</div>
        <div>Tiekėjas</div>
        <div>Kaina</div>
        <div></div>
        <div>Data</div>
      </div>
      <hr />
      <div>
        {ordersList.map((order) => (
          <OrderItem
            id={order.id}
            name={order.name}
            shortDesc={order.shortDesc}
            provider={order.provider}
            price={order.price}
            currency={order.currency}
            hourly={order.hourly}
            date={order.date}
            key={order.id}
          />
        ))}
      </div>
    </div>
  );
}
