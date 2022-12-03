import React from 'react';

import { useAppSelector } from '../../app/hooks';
import { Slider } from '../../components/Slider';
import { Promo } from './Promo';

import './HomePage.scss';
import './homePage.scss';
{
  /* Homepage content here */
}
export const HomePage: React.FC = () => {
  {
    /* Use this syntax to get data from redux provider*/
  }
  const phones = useAppSelector((state) => state.phones);
  //return phones.map((phone: Phone) => <h3 key={phone.id}>{phone.phoneId}</h3>);

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
