import React from 'react';
import './orderItem.css';

export default function OrderItem(props) {
  const { id, imgUrl, shortDesc, provider, price, hourly, currency } = props;

  return (
    <div className="order-item-container">
      <ul>
        <li>{`${id}.`}</li>
        <li>{imgUrl}</li>
        <li>{shortDesc}</li>
        <li>{provider}</li>
        <li>
          {price} {currency}
        </li>
        <li>{hourly ? '/val' : null}</li>
      </ul>
    </div>
  );
}
