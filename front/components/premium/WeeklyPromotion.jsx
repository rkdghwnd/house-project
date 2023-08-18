import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import StoreItem from '../home/StoreItem';

const WeeklyPromotion = () => {
  return (
    <section className="weekly-promotion">
      <h3>Weekly Promotion ✨</h3>
      <div className="weekly-promotion-products">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <StoreItem />
          </SwiperSlide>
          <SwiperSlide>
            <StoreItem />
          </SwiperSlide>
          <SwiperSlide>
            <StoreItem />
          </SwiperSlide>
          <SwiperSlide>
            <StoreItem />
          </SwiperSlide>
          <SwiperSlide>
            <StoreItem />
          </SwiperSlide>
          <SwiperSlide>
            <StoreItem />
          </SwiperSlide>
          <SwiperSlide>
            <StoreItem />
          </SwiperSlide>
          <SwiperSlide>
            <StoreItem />
          </SwiperSlide>
          <SwiperSlide>
            <StoreItem />
          </SwiperSlide>
          <SwiperSlide>
            <StoreItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default WeeklyPromotion;
