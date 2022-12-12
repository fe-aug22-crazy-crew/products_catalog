import React from 'react';
import { PhoneCard } from '../PhoneCard';
import { Phone } from '../../types/Phone';

import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './Slider.scss';
import '../HomePage/SliderButtons/sliderButtons.scss';
import '../HomePage/homePage.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Loader } from '../Loader';

type Props = {
  phones: Phone[];
  title: string;
  isLoading: boolean;
};

export const Slider: React.FC<Props> = ({ phones, title, isLoading }) => (
  <section className="slider">
    <div className="slider__title-box">
      <h2 className="slider__title">{title}</h2>
      <div className="slider__button-box">
        <button
          type="button"
          className="slider__button slider__button-prev"
        ></button>
        <button
          type="button"
          className="slider__button slider__button-next"
        ></button>
      </div>
    </div>

    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
      }}
      spaceBetween={16}
      slidesPerView={1.4}
      breakpoints={{
        640: { slidesPerView: 2.5 },
        1200: { slidesPerView: 4 },
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        phones.map((phone) => (
          <SwiperSlide key={phone.id}>
            <PhoneCard phone={phone} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  </section>
);
