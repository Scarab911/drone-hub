import React from 'react';
import { MyArrays } from '../../../../services/services';
//components
import OrderItem from './order_item/OrderItem';

//css
import './ordersCard.css';

export default function OrdersCard() {
  const services = new MyArrays();
  const ordersList = services.orderedServicesList;

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
