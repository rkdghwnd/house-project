import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { storeCategoryMenus } from '../../datas/storeMenus';
import shortid from 'shortid';
import { Link } from 'react-router-dom';

const StoreCategoryMenu = () => {
  return (
    <section className="store-category-menu">
      <h3>카테고리</h3>
      <Swiper
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 8,
          },
        }}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={20}
        className="mySwiper"
      >
        {storeCategoryMenus.map((menu) => {
          return (
            <SwiperSlide key={shortid.generate()}>
              <Link to={menu.href}>
                <img src={menu.src} alt="store-category-image" />
                <span>{menu.title}</span>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default StoreCategoryMenu;
