import React, { useRef } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageCreator } from './ImageCreator';

import BannerLg from '../../../images/promo/Banner-lg.jpg';
import Next from '../../../images/promo/next.svg';
import Prev from '../../../images/promo/prev.svg';
import BannerPhone from '../../../images/promo/Banner-phone.jpg';

import './promo.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Promo: React.FC = () => {
  /* eslint-disable-next-line no-console */

  const navPrevButton = useRef<HTMLButtonElement>(null);
  const navNextButton = useRef<HTMLButtonElement>(null);
  const paginationLabel = useRef<HTMLHeadingElement>(null);

  const onBeforeInit = (swiper: SwiperCore): void => {
    if (typeof swiper.params.navigation !== 'boolean') {
      const navigation = swiper.params.navigation;

      if (navigation) {
        navigation.prevEl = navPrevButton.current;
        navigation.nextEl = navNextButton.current;
      }
    }

    if (
      typeof swiper.params.pagination !== 'boolean'
      && swiper.params.pagination
    ) {
      swiper.params.pagination.el = paginationLabel.current;
    }
  };

  return (
    <section className="promo">
      <button
        ref={navPrevButton}
        type="button"
        className="promo__button promo__button--prev"
      >
        <img src={Prev} alt="prev promo slide button" />
      </button>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        onBeforeInit={onBeforeInit}
        pagination={{ clickable: true }}
        className="promo__slider"
      >
        <SwiperSlide className="promo__slide">
          <ImageCreator
            photoLg={BannerLg}
            photoSm={BannerPhone}
            description={'promo banner'}
          />
        </SwiperSlide>
        <SwiperSlide className="promo__slide">
          <ImageCreator
            photoLg={BannerLg}
            photoSm={BannerPhone}
            description={'promo banner'}
          />
        </SwiperSlide>
        <SwiperSlide className="promo__slide">
          <ImageCreator
            photoLg={BannerLg}
            photoSm={BannerPhone}
            description={'promo banner'}
          />
        </SwiperSlide>
      </Swiper>

      <button
        ref={navNextButton}
        type="button"
        className="promo__button promo__button--next"
      >
        <img src={Next} alt="next promo slide button" />
      </button>
      <div ref={paginationLabel} className="promo__pagination" />
    </section>
  );
};
