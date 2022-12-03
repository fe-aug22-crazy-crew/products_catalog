import React from 'react';
import { PhoneCard } from '../../components/PhoneCard';
import { Phone } from '../../types/Phone';

import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './Slider.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  phones: Phone[];
};

export const Slider: React.FC<Props> = ({ phones }) => {
  const visiblePhones = phones.slice(0, 10);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={18}
      slidesPerView={1.4}
      breakpoints={{
        640: { slidesPerView: 2.5 },
        1200: { slidesPerView: 4 },
      }}
      navigation={{
        prevEl: '.homepage__button-prev',
        nextEl: '.homepage__button-next',
      }}
      loop={true}
    >
      {visiblePhones.map((phone) => (
        <SwiperSlide key={phone.id}>
          <PhoneCard phone={phone} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
