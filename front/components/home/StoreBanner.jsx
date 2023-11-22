import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import shortid from 'shortid';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const StoreBanner = () => {
  const storeBannerImages = new Array(7).fill().map((v, i) => {
    return `/assets/images/banner/store_banner_${i + 1}.avif`;
  });

  return (
    <div className="store-banner" role="region">
      <div className="store-banner-slider">
        <Swiper
          className="store-banner-slider-list"
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {storeBannerImages.map((src) => {
            return (
              <SwiperSlide
                className="store-banner-slider-item"
                key={shortid.generate()}
              >
                <li
                  className={'store-banner-slider-item'}
                  role="tabpanel"
                  aria-labelledby="store-carousel-carousel-tab-1"
                >
                  <figure>
                    <img src={src} alt="store-banner-1" />
                    <figcaption className="visually-hidden">
                      스토어 배너 1
                    </figcaption>
                  </figure>
                </li>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default StoreBanner;
