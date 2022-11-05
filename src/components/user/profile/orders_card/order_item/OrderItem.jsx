import React from 'react';
import './orderItem.css';

export default function OrderItem(props) {
  const { id, name, shortDesc, provider, price, hourly, currency, date } =
    props;

  return (
    <div className={`order-item-container ${id % 2 !== 0 ? 'row-even' : null}`}>
      <ul>
        <li>{`${id}.`}</li>
        <li>{name}</li>
        <li>{shortDesc}</li>
        <li>{provider}</li>
        <li>
          {price} {currency}
        </li>
        <li>{hourly ? 'val' : null}</li>
        <li>{date}</li>
      </ul>
    </div>
  );
}
