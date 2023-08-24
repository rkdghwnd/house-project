import React from 'react';

const FinalOrderItem = () => {
  return (
    <li className="final-order-item">
      <div className="item-header">
        <h4>(주)블랭크코퍼레이션</h4>
        <div className="item-header-right">
          <span>배송비</span>
          <span>0원</span>
        </div>
      </div>
      <div className="item-content">
        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168802222377255215.jpg?w=108&h=108&c=c" />
        <div className="item-content-right">
          <h4>
            [8/24선착순32,405원] 퓨어썸 샤워기+컬러 샤워기커버+컬러 샤워호스
            1.5M/2M
          </h4>
          <p>커버색상: 버터옐로우 / 호스색상: (NEW) 딥 블랙2M</p>
          <div className="item-content-right-price">
            <span>39,000원</span>
            <span>|</span>
            <span>1개</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default FinalOrderItem;
