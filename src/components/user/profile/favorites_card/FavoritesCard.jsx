import React from 'react';

//components
import FavoriteItem from './favorites_item/FavoriteItem';

//css
import './favoritesCard.css';

const favoritesList = [
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

export default function FavoritesCard() {
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
