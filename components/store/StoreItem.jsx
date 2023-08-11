import Link from 'next/link';
import React from 'react';

const StoreItem = () => {
  return (
    <Link href="/">
      <div className="store-item">
        <div className="store-item-image">
          <img src="/assets/images/product/product-thumnail-2.avif" />
        </div>
        <div className="store-item-info">
          <h4>애경</h4>
          <span className="store-item-info-title">
            [40%+15%][한정수량] 2080 프리미엄치약 9개입 무료배송 외 초특가!
          </span>
          <div className="store-item-info-review sm-only">
            <i className="ic-star is-active"></i>
            <span>4.7</span>
            <span>리뷰 5,670</span>
          </div>
          <div className="store-item-info-discount">
            <span className="rate">47%</span>
            <span className="percent">13,500 외</span>
          </div>
          <div className="store-item-info-review sm-hidden">
            <i className="ic-star is-active"></i>
            <span>4.7</span>
            <span>리뷰 5,670</span>
          </div>
          <div className="store-item-info-tag">
            <button className="tag-gray">무료배송</button>
            <button className="tag-red">특가</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreItem;
