import React, { useState } from 'react';
import shortid from 'shortid';
import { useSelector } from 'react-redux';
import { Thumbs, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const UserGalleryDesktop = () => {
  const { usersCarouselImages } = useSelector((state) => state.productions);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="product-section product-user-gallery sm-hidden">
      <header className="product-section-header">
        <h1 className="title">유저들의 스타일링샷</h1>
      </header>

      <div className="product-section-content">
        <div className="user-gallery is-desktop" role="region">
          <div className="user-gallery-slider">
            <Swiper
              slidePerView={usersCarouselImages.length}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs, Navigation]}
              navigation={true}
              width={500}
              className="slider-list"
            >
              {usersCarouselImages.map((src, index) => {
                return (
                  <SwiperSlide key={shortid.generate()}>
                    <li
                      className="slider-item"
                      role="tabpanel"
                      aria-labelledby={`user-gallery-tab-${index + 1}`}
                    >
                      <div className="gallery-card">
                        <figure className="gallery-card-image">
                          <img src={src} alt="유저 갤러리사진" />
                        </figure>

                        <div className="gallery-card-detail">
                          <span className="order">{`${index + 1}/${
                            usersCarouselImages.length
                          }`}</span>
                        </div>
                      </div>
                    </li>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="user-gallery-thumbnail">
            <ol className="thumbnail-list" role="tablist">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={usersCarouselImages.length}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="mySwiper"
              >
                {usersCarouselImages.map((src, index) => {
                  return (
                    <SwiperSlide key={shortid.generate()}>
                      <li
                        className="thumbnail-item"
                        id={`user-gallery-tab-${index + 1}`}
                        role="tab"
                      >
                        <button type="button">
                          <img
                            src={src}
                            alt="
                      1번 스타일링샷"
                          />
                        </button>
                      </li>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGalleryDesktop;
