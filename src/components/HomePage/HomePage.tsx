import React from 'react';

import { Slider } from '../Slider';
import { Promo } from './Promo';

import './homePage.scss';
import { useAppSelector } from '../../app/hooks';
import { Loader } from '../Loader';

import { Categories } from './Categories';

type Props = {
  isLoading: boolean;
}

export const HomePage: React.FC<Props> = ({ isLoading }) => {
  const newestPhones = useAppSelector((state) => state.newestPhones);
  const hotPhones = useAppSelector((state) => state.hotPhones);

  return (
    <main className="home_page">
      <h1 className="home_page__title">Welcome to Nice Gadgets store!</h1>
      <Promo />
      {isLoading
        ? <Loader />
        : <Slider phones={newestPhones} title={'Brand new models'} />
      }
      <Categories />
      {isLoading
        ? <Loader />
        : <Slider phones={hotPhones} title={'Hot prices'} />
      }
    </main>
  );
};
