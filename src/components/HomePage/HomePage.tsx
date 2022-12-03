import React from 'react';

import { useAppSelector } from '../../app/hooks';
import { Slider } from '../../components/Slider';
import { Promo } from './Promo';

import './homePage.scss';
import './HomePage.scss';

export const HomePage: React.FC = () => {
  const phones = useAppSelector((state) => state.phones);

  return (
    <>
      <main className="home_page">
        <h1 className="home_page__title">Welcome to Nice Gadgets store!</h1>
        <Promo />
      </main>
      <main className="homepage">
        <div className="container">
          <div className="homepage__title-box">
            <h2 className="homepage__subtitle">Hot prices</h2>
            <div className="homepage__button-box">
              <div className="homepage__button-prev"></div>
              <div className="homepage__button-next"></div>
            </div>
          </div>
          <Slider phones={phones} />
        </div>
      </main>
    </>
  );
};
