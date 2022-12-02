import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Phone } from '../../types/Phone';
import { PhoneCard } from '../PhoneCard';

export const Favourites: React.FC = () => {
  const favouritePhones: Phone[] = useAppSelector((state) => state.favourites);

  return (
    <main className="favourites">
      <div className="container">
        <h1 className="favourites__title">Favourites</h1>
        <p className="favourites__count">{favouritePhones.length} items</p>

        <ul className="favourites__list">
          {favouritePhones.map((favourite) => (
            <PhoneCard key={favourite.id} phone={favourite} />
          ))}
        </ul>
      </div>
    </main>
  );
};
