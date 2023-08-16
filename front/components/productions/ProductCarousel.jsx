import React from 'react';
import { productCarouselOption } from '../../hooks/carousels';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';

const ProductCarousel = () => {
  return (
    <div className="product-carousel" role="region">
      <div className="product-carousel-slider">
        <TinySlider className="slider-list" settings={productCarouselOption}>
          <li
            className="slider-item"
            role="tabpanel"
            aria-labelledby="product-carousel-tab-1"
          >
            <figure>
              <img src="/assets/images/img-product-01.jpg" alt="" />
              <figcaption className="visually-hidden">
                보아르 전기히터 상세 이미지 1
              </figcaption>
            </figure>
          </li>
          <li
            className="slider-item"
            role="tabpanel"
            aria-labelledby="product-carousel-tab-2"
          >
            <figure>
              <img src="/assets/images/img-product-02.jpg" alt="" />
              <figcaption className="visually-hidden">
                보아르 전기히터 상세 이미지 2
              </figcaption>
            </figure>
          </li>
          <li
            className="slider-item"
            role="tabpanel"
            aria-labelledby="product-carousel-tab-3"
          >
            <figure>
              <img src="/assets/images/img-product-03.jpg" alt="" />
              <figcaption className="visually-hidden">
                보아르 전기히터 상세 이미지 3
              </figcaption>
            </figure>
          </li>
          <li
            className="slider-item"
            role="tabpanel"
            aria-labelledby="product-carousel-tab-4"
          >
            <figure>
              <img src="/assets/images/img-product-04.jpg" alt="" />
              <figcaption className="visually-hidden">
                보아르 전기히터 상세 이미지 4
              </figcaption>
            </figure>
          </li>
        </TinySlider>
      </div>

      <div className="product-carousel-thumbnail">
        <ol className="thumbnail-list" role="tablist">
          <li className="thumbnail-item" id="product-carousel-tab-1" role="tab">
            <button type="button">
              <img src="/assets/images/img-product-01.jpg" alt="1번 이미지" />
            </button>
          </li>
          <li className="thumbnail-item" id="product-carousel-tab-2" role="tab">
            <button type="button">
              <img src="/assets/images/img-product-02.jpg" alt="2번 이미지" />
            </button>
          </li>
          <li className="thumbnail-item" id="product-carousel-tab-3" role="tab">
            <button type="button">
              <img src="/assets/images/img-product-03.jpg" alt="3번 이미지" />
            </button>
          </li>
          <li className="thumbnail-item" id="product-carousel-tab-4" role="tab">
            <button type="button">
              <img src="/assets/images/img-product-04.jpg" alt="4번 이미지" />
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ProductCarousel;
