import React from 'react';

import { Slider } from '../Slider';
import { Promo } from './Promo';

import './homePage.scss';
import { useAppSelector } from '../../app/hooks';

import { Categories } from './Categories';
import { Loader } from '../Loader';

export const HomePage: React.FC = () => {
  const newestPhones = useAppSelector((state) => state.newestPhones);
  const hotPhones = useAppSelector((state) => state.hotPhones);

  return (
    <main className="home_page">
      <h1 className="home_page__title">Welcome to Nice Gadgets store!</h1>
      <Promo />

      {(newestPhones.length !== 0 && (
        <Slider title={'Brand new models'} phones={newestPhones} />
      )) || <Loader />}

      <Categories />

      {(hotPhones.length !== 0 && (
        <Slider title={'Hot prices'} phones={hotPhones} />
      )) || <Loader />}
    </main>
  );
};
