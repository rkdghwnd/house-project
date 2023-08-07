import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import scrollSlice from '../../reducers/scrollSlice';
import { useDispatch } from 'react-redux';

const ProductRecommendation = () => {
  const dispatch = useDispatch();
  const productRecommendation = useRef();

  useEffect(() => {
    const scrollY = productRecommendation.current.offsetTop + 360;
    dispatch(scrollSlice.actions.updateProductRecommendationScrollY(scrollY));
  }, [productRecommendation]);

  return (
    <>
      <section
        className="product-section product-recommendation"
        id="product-recommendation"
        role="tabpanel"
        ref={productRecommendation}
      >
        <header className="product-section-header">
          <h1 className="title">비슷한 상품</h1>
        </header>

        <div className="product-section-content">
          <ul className="product-list">
            <li className="product-item">
              <a href="/">
                <ProductCard />
              </a>
            </li>

            <li className="product-item">
              <a href="/">
                <div className="product-card">
                  <div className="product-card-image">
                    <img
                      src="./assets/images/img-recommendation-03.jpg"
                      alt=""
                    />
                  </div>

                  <span className="product-card-brand">플러스마이너스제로</span>
                  <h3 className="product-card-title">
                    원적외선 2단 히터 XHS-Y010
                  </h3>

                  <div className="product-card-price">
                    <span className="percent">10%</span>
                    <strong className="price">88,200</strong>
                  </div>

                  <dl className="product-card-detail">
                    <div className="rating">
                      <dt>
                        <i className="ic-star"></i>
                        <span className="visually-hidden">평점</span>
                      </dt>
                      <dd>4.5</dd>
                    </div>

                    <div className="review">
                      <dt>리뷰</dt>
                      <dd>28</dd>
                    </div>
                  </dl>

                  <strong className="tag-gray">무료배송</strong>
                </div>
              </a>
            </li>

            <li className="product-item">
              <a href="/">
                <div className="product-card">
                  <div className="product-card-image">
                    <img
                      src="./assets/images/img-recommendation-02.jpg"
                      alt=""
                    />
                  </div>

                  <span className="product-card-brand">플러스마이너스제로</span>
                  <h3 className="product-card-title">
                    리플렉트 에코히터 4colors
                  </h3>

                  <div className="product-card-price">
                    <span className="percent">23%</span>
                    <strong className="price">129,000</strong>
                  </div>

                  <dl className="product-card-detail">
                    <div className="rating">
                      <dt>
                        <i className="ic-star"></i>
                        <span className="visually-hidden">평점</span>
                      </dt>
                      <dd>4.6</dd>
                    </div>

                    <div className="review">
                      <dt>리뷰</dt>
                      <dd>605</dd>
                    </div>
                  </dl>

                  <strong className="tag-gray">무료배송</strong>
                </div>
              </a>
            </li>

            <li className="product-item">
              <a href="/">
                <div className="product-card">
                  <div className="product-card-image">
                    <img
                      src="./assets/images/img-recommendation-04.jpg"
                      alt=""
                    />
                  </div>

                  <span className="product-card-brand"> 코시나 </span>
                  <h3 className="product-card-title">
                    오방난로 히터 6종 모음전
                  </h3>

                  <div className="product-card-price">
                    <span className="percent">52%</span>
                    <strong className="price">56,900</strong>
                  </div>

                  <dl className="product-card-detail">
                    <div className="rating">
                      <dt>
                        <i className="ic-star"></i>
                        <span className="visually-hidden">평점</span>
                      </dt>
                      <dd>4.6</dd>
                    </div>

                    <div className="review">
                      <dt>리뷰</dt>
                      <dd>250</dd>
                    </div>
                  </dl>

                  <strong className="tag-gray">무료배송</strong>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="product-section-divider sm-only" aria-hidden></div>
    </>
  );
};

export default ProductRecommendation;
