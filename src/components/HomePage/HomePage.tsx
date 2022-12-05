import React from 'react';

import { useAppSelector } from '../../app/hooks';
import { Slider } from '../Slider';
import { Promo } from './Promo';

import './homePage.scss';
import { SliderButtons } from './SliderButtons';
// import { Categories } from './Categories';

export const HomePage: React.FC = () => {
  const phones = useAppSelector((state) => state.phones);

  return (
    <main className="home_page">
      <h1 className="home_page__title">Welcome to Nice Gadgets store!</h1>
      <Promo />

      <div className="home_page__title-box">
        <h2 className="home_page__subtitle">Brand new models</h2>
        <SliderButtons
          refClassPrev={'newest_button_prev'}
          refClassNext={'newest_button_next'}
        />
      </div>
      <Slider
        phones={phones}
        prevButtonClass={'.newest_button_prev'}
        nextButtonClass={'.newest_button_next'}
      />

      {/* <Categories /> */}

      <div className="home_page__title-box">
        <h2 className="home_page__subtitle">Hot prices</h2>
        <SliderButtons
          refClassPrev={'hot_button_prev'}
          refClassNext={'hot_button_next'}
        />
      </div>
      <Slider
        phones={phones}
        prevButtonClass={'.hot_button_prev'}
        nextButtonClass={'.hot_button_next'}
      />
    </main>
  );
};
