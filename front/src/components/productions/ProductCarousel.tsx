import { useState } from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { Thumbs, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { RootState } from '../../reducers';
import SwiperOriginal from 'swiper';

const ProductCarousel = () => {
  const carouselImages = useSelector(
    (state: RootState) => state.productions.carouselImages
  );
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperOriginal | null>(null);

  return (
    <div className="product-carousel" role="region">
      <div className="product-carousel-slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, Pagination]}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="slider-list"
        >
          {carouselImages.map((src, id) => {
            return (
              <SwiperSlide key={shortid.generate()}>
                <li
                  className="slider-item"
                  role="tabpanel"
                  aria-labelledby={`product-carousel-tab-${id + 1}`}
                >
                  <figure>
                    <img src={src} alt={`${id + 1}번 이미지`} />
                    <figcaption className="visually-hidden">
                      상품 상세 이미지 {id + 1}
                    </figcaption>
                  </figure>
                </li>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="product-carousel-thumbnail">
        <ol className="thumbnail-list" role="tablist">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={carouselImages.length}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper"
          >
            {carouselImages.map((src, id) => {
              return (
                <SwiperSlide key={shortid.generate()}>
                  <li
                    className="thumbnail-item"
                    id={`product-carousel-tab-${id + 1}`}
                    role="tab"
                  >
                    <button type="button">
                      <img src={src} alt={`${id + 1}번 이미지`} />
                    </button>
                  </li>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ol>
      </div>
    </div>
  );
};

export default ProductCarousel;
