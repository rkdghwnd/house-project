import React from 'react';

const DeliveryListProduct = () => {
  return (
    <section className="delivery-list-product">
      <div className="delivery-list-product-header">
        <span>203194804&nbsp;|&nbsp;2023.08.26</span>
      </div>
      <div className="delivery-list-product-status">
        <span>입금대기</span>
      </div>
      <div className="delivery-list-product-main">
        <div className="product-image">
          <img
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166417831665882454.jpg?w=180&h=180&c=c&webp=1"
            alt=""
          />
        </div>
        <div className="product-description">
          <div className="product-description-row-1">
            <span>웅진식품</span>
            <h4>빅토리아 탄산수 500ml*20입 15종 모음전</h4>
          </div>

          <div className="product-description-row-2">
            <span>플레인 500ml 20개</span>
            <div className="product-description-price">
              <span>11,900원</span>
              <span>&nbsp;|&nbsp;</span>
              <span>1개</span>
            </div>
            <span>일반택배</span>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryListProduct;
