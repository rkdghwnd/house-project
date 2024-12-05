import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import shortid from 'shortid';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const StoreBanner = () => {
  const storeBannerImages = new Array(7).fill(undefined).map((v, i) => {
    return `/assets/images/banner/store_banner_${i + 1}`;
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
          {storeBannerImages.map((src, i) => {
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
                    <img
                      srcSet={`${src}_tiny.png 400w,${src}_small.png 960w, ${src}_large.avif 2440w`}
                      sizes="(max-width: 400px) 400px, (max-width: 768px) 600px, (max-width: 960px) 960px, 2440px"
                      alt={`store-banner-${i + 1}`}
                    />
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
