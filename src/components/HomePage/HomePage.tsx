import React, { useEffect, useState } from 'react';

import { Slider } from '../Slider';
import { Promo } from './Promo';

import './homePage.scss';
import { SliderButtons } from './SliderButtons';
import { client } from '../../utils/fetchPhones';

export const HomePage: React.FC = () => {
  const [newestPhones, setNewestPhones] = useState([]);
  const [hotPhones, setHotPhones] = useState([]);

  const getHotPhones = async() => {
    const data = await client.get('phones/hot', 'GET', null);

    setHotPhones(data);
  };

  const getNewestPhones = async() => {
    const data = await client.get('phones/new', 'GET', null);

    setNewestPhones(data);
  };

  useEffect(() => {
    getHotPhones();
    getNewestPhones();
  }, []);

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
        phones={newestPhones}
        prevButtonClass={'.newest_button_prev'}
        nextButtonClass={'.newest_button_next'}
      />

      <div className="home_page__title-box">
        <h2 className="home_page__subtitle">Hot prices</h2>
        <SliderButtons
          refClassPrev={'hot_button_prev'}
          refClassNext={'hot_button_next'}
        />
      </div>
      <Slider
        phones={hotPhones}
        prevButtonClass={'.hot_button_prev'}
        nextButtonClass={'.hot_button_next'}
      />
    </main>
  );
};
