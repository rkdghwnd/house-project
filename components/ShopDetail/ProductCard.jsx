import React from 'react';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src="./assets/images/img-recommendation-01.jpg" alt="" />
      </div>

      <span className="product-card-brand">emk</span>
      <h3 className="product-card-title">
        시즌템! 감성 레트로 전기히터 EQH-S161 3 colors
      </h3>

      <div className="product-card-price">
        <span className="percent">72%</span>
        <strong className="price">49,000</strong>
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
          <dd>3,605</dd>
        </div>
      </dl>

      <strong className="tag-gray">무료배송</strong>
    </div>
  );
};

export default ProductCard;
