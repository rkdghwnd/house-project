import React from 'react';

const ProductionReviewsWrite = () => {
  return (
    <section className="production-reviews-write">
      <article className="production-reviews-write-main">
        <h4>내가 사용하는 상품 리뷰쓰기</h4>
        <div className="search-reviews-input">
          <input type="text" placeholder="브랜드명 혹은 상품명 입력" />
          <button className="btn-primary btn-40">검색</button>
        </div>
      </article>
    </section>
  );
};

export default ProductionReviewsWrite;
