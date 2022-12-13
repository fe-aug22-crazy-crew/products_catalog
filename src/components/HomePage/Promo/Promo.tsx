import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageCreator } from './ImageCreator';

import BannerLg from '../../../images/promo/Banner-lg.jpg';
import BannerPhone from '../../../images/promo/Banner-phone.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './promo.scss';

export const Promo: React.FC = () => (
  <section className="promo">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      centeredSlides
      spaceBetween={16}
      loop
      navigation
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      speed={2000}
      pagination={{
        clickable: true,
        el: '.promo__pagination-custom',
      }}
      className="promo-swiper"
    >
      <SwiperSlide>
        <ImageCreator
          photoLg={BannerLg}
          photoSm={BannerPhone}
          description={'promo banner'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImageCreator
          photoLg={BannerLg}
          photoSm={BannerPhone}
          description={'promo banner'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImageCreator
          photoLg={BannerLg}
          photoSm={BannerPhone}
          description={'promo banner'}
        />
      </SwiperSlide>
    </Swiper>
    <div className="promo__pagination-custom" />
  </section>
);
