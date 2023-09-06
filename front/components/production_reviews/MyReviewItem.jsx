import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewItem = () => {
  return (
    <article className="my-review-item">
      <div className="my-review-item-content">
        <div className="my-review-item-content-left">
          <h4>
            <Link to="/productions/1">
              [메르시앤코]네이터 소이캔들 천연향초 650ml 7가지 향
            </Link>
          </h4>
          <div className="review-average">
            <div className="star-rating-20">
              <i className="ic-star is-active"></i>
              <i className="ic-star is-active"></i>
              <i className="ic-star is-active"></i>
              <i className="ic-star is-active"></i>
              <i className="ic-star"></i>
            </div>
            <span>2023.09.02</span>
            <span>&nbsp;|&nbsp;</span>
            <span>다른 쇼핑몰 리뷰</span>
          </div>
          <p>리뷰테스트 입니다. 테스트123123</p>
        </div>
        <div className="my-review-item-right">
          <button className="btn-32 btn-ghost">수정</button>
        </div>
      </div>
    </article>
  );
};

export default MyReviewItem;
