import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { NavLink } from 'react-router-dom';

import { Thumbs, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { RootState } from '../../reducers';
import SwiperOriginal from 'swiper';

const UserGalleryMobile = () => {
  const usersCarouselImages = useSelector(
    (state: RootState) => state.productions.usersCarouselImages
  );
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperOriginal | null>(null);

  return (
    <>
      <div className="product-section-divider" aria-hidden></div>
      <section className="product-section product-user-gallery">
        <header className="product-section-header">
          <h1 className="title">유저들의 스타일링샷</h1>
          <strong className="badge" aria-label="4개">
            {usersCarouselImages?.length || 0}
          </strong>
        </header>

        <div className="product-section-content">
          <div className="user-gallery is-mobile" role="region">
            <div className="user-gallery-slider">
              <Swiper
                className="slider-list"
                slidesPerView={usersCarouselImages.length}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs, Navigation]}
                navigation={true}
                width={500}
              >
                {usersCarouselImages.map((src, index) => {
                  return (
                    <SwiperSlide
                      key={`${index}-${src}`}
                      spaceBetween={10}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[Thumbs, Navigation]}
                      navigation={true}
                      width={500}
                      className="slider-item"
                    >
                      <li
                        className="slider-item"
                        role="tabpanel"
                        aria-labelledby={`user-gallery-tab-${index + 1}`}
                      >
                        <div className="gallery-card">
                          <figure className="gallery-card-image">
                            <img src={src} alt="유저 갤러리 사진" />
                            <figcaption className="visually-hidden">
                              스타일링샷
                            </figcaption>
                          </figure>

                          <div className="gallery-card-detail">
                            <NavLink className="avatar-32" to="/users/100">
                              <img
                                src="/assets/images/img-user-02.jpg"
                                alt="유저"
                              />
                            </NavLink>
                            <NavLink className="username" to="/users/100">
                              유저
                            </NavLink>
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
                            <img src={src} alt={`${index + 1}번 스타일링샷`} />
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
      <div className="product-section-divider is-big" aria-hidden></div>
    </>
  );
};

export default UserGalleryMobile;
