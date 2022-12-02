import React from 'react';
// import { useAppSelector } from '../../app/hooks';
import { Promo } from './Promo';

import './homePage.scss';

export const HomePage: React.FC = () => {
  // const phones = useAppSelector((state) => state.phones);

  return (
    <main className="home_page">
      <h1 className="home_page__title">Welcome to Nice Gadgets store!</h1>
      <Promo />
    </main>
  );
};
