import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Phone } from '../../types/Phone';
import { PhoneCard } from '../PhoneCard';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const Favourites: React.FC = () => {
  const favouritePhones: Phone[] = useAppSelector((state) => state.favourites);

  return (
    <main className="favourites">
      <div className="container">
        <h1 className="favourites__title">Favourites</h1>
        <p className="favourites__count">{favouritePhones.length} items</p>

        <ul className="favourites__list">
          <TransitionGroup className="favourites__list">
            {favouritePhones.map((favourite) => (
              <CSSTransition
                key={favourite.id}
                in={favouritePhones.some(({ id }) => id === favourite.id)}
                timeout={300}
                classNames="product"
                unmountOnExit
              >
                <PhoneCard phone={favourite} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      </div>
    </main>
  );
};
