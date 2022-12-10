import React, { useRef } from 'react';
import { PhoneCard } from '../PhoneCard';
import { Phone } from '../../types/Phone';

import SwiperCore, { Navigation, Pagination } from 'swiper';

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

export const Slider: React.FC<Props> = ({ phones, title, isLoading }) => {
  const navPrevButton = useRef<HTMLButtonElement>(null);
  const navNextButton = useRef<HTMLButtonElement>(null);

  const onBeforeInit = (swiper: SwiperCore): void => {
    if (typeof swiper.params.navigation !== 'boolean') {
      const navigation = swiper.params.navigation;

      if (navigation) {
        navigation.prevEl = navPrevButton.current;
        navigation.nextEl = navNextButton.current;
      }
    }
  };

  return (
    <>
      <div className="home_page__title-box">
        <h2 className="home_page__subtitle">{title}</h2>
        <div className="button-box">
          <button
            ref={navPrevButton}
            type="button"
            className="button-box__button-prev"
          ></button>
          <button
            ref={navNextButton}
            type="button"
            className="button-box__button-next"
          ></button>
        </div>
      </div>
      <section className="slider">
        <Swiper
          modules={[Navigation, Pagination]}
          onBeforeInit={onBeforeInit}
          spaceBetween={18}
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
    </>
  );
};
