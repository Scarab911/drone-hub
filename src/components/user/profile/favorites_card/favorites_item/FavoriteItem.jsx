import React from 'react';
import { useState } from 'react';

//css
import './favoriteItem.css';

export default function FavoriteItem(props) {
  const { id, name, shortDesc, provider, price, hourly, currency } = props;

  const [removeClicked, setRemoveClicked] = useState(false);

  const removeFavoriteItem = () => {
    setRemoveClicked(!removeClicked);
    console.log('remove clicked', removeClicked);
  };

  return (
    <div
      className={`favorite-item-container ${id % 2 !== 0 ? 'row-even' : null}`}
    >
      <ul>
        <li>{`${id}.`}</li>
        <li>{name}</li>
        <li>{shortDesc}</li>
        <li>{provider}</li>
        <li>
          {price} {currency}
        </li>
        <li>{hourly ? 'val' : null}</li>
        <li className="btn-remove" onClick={removeFavoriteItem}>
          DEL
        </li>
      </ul>
      <div className={`animation ${removeClicked ? 'removal' : null}`}></div>
    </div>
  );
}
