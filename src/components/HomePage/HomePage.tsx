import React from 'react';

import { Slider } from '../Slider';
import { Promo } from './Promo';

import './homePage.scss';
import { useAppSelector } from '../../app/hooks';

import { Categories } from './Categories';

export const HomePage: React.FC = () => {
  const newestPhones = useAppSelector((state) => state.newestPhones);
  const hotPhones = useAppSelector((state) => state.hotPhones);

  return (
    <main className="home_page">
      <h1 className="home_page__title">Welcome to Nice Gadgets store!</h1>
      <Promo />
      <Slider
        phones={newestPhones}
        title={'Brand new models'}
      />
      <Categories />
      <Slider
        phones={hotPhones}
        title={'Hot prices'}
      />
    </main>
  );
};
