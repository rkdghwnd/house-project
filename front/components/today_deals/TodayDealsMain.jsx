import React from 'react';
import StoreItem from '../home/StoreItem';

const TodayDealsMain = () => {
  return (
    <section className="today-deals-main">
      <div className="today-deals-main-header sm-hidden">
        <h3>오늘의 딜</h3>
        <span>매일 자정,새로운 특가상품</span>
      </div>
      <div className="today-deals-main-items">
        <div className="today-deals-main-items-col">
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
        </div>
        <div className="today-deals-main-items-col">
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
        </div>
        <div className="today-deals-main-items-col">
          <StoreItem />
          <StoreItem />
          <StoreItem />
          <StoreItem />
        </div>
      </div>
    </section>
  );
};

export default TodayDealsMain;
