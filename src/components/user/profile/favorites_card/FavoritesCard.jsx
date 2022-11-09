import React from 'react';
import { MyArrays } from '../../../../services/services';
//components
import FavoriteItem from './favorites_item/FavoriteItem';

//css
import './favoritesCard.css';

export default function FavoritesCard() {
  const services = new MyArrays();
  const favoritesList = services.favoriteServicesList;

  return (
    <div className="favorites-card">
      <div className="thumbnail">
        <div>ID</div>
        <div>Pavadinimas</div>
        <div>Aprašymas</div>
        <div>Tiekėjas</div>
        <div>Kaina</div>
        <div></div>
      </div>
      <hr />
      <div>
        {favoritesList.map((favorite) => (
          <FavoriteItem
            id={favorite.id}
            name={favorite.name}
            shortDesc={favorite.shortDesc}
            provider={favorite.provider}
            price={favorite.price}
            currency={favorite.currency}
            hourly={favorite.hourly}
            key={favorite.id}
          />
        ))}
      </div>
    </div>
  );
}
