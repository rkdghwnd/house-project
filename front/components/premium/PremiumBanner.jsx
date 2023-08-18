import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { premiumBanners } from '../../hooks/premium';
import shortid from 'shortid';

const PremiumBanner = () => {
  return (
    <section className="premium-banner">
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {premiumBanners.map((src) => {
          return (
            <SwiperSlide key={shortid.generate()}>
              <img src={src} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default PremiumBanner;
